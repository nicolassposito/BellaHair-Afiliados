"use client"

import * as React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import logo from "..//..//..//public/bella.svg";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { columns, Profile } from "./components/columns";
import { useRouter } from 'next/navigation';

const supabase = createClientComponentClient();
  
  export default function DataTableDemo() {
    const router = useRouter()
    const [data, setData] = React.useState<Profile[]>([]);
    const [filterEmail, setFilterEmail] = React.useState('');
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [isAdmin, setIsAdmin] = React.useState(false);
  
    const fetchData = async () => {
      const supabase = createClientComponentClient()
      const session = await supabase.auth.getSession();
        if (!session) {
        return;
        }

        const { data: profile, error } = await supabase
        .from("profiles")
        .select("admin")
        .eq("id", session.data.session?.user.id)
        .single();

        if (error) {
        console.error("Error fetching user profile:", error.message);
        return;
        }

        setIsAdmin(profile?.admin || false);

        if (!profile?.admin) {
        console.log("User is not an admin.");
        router.push("/");
        return;
        }

      const { data: { user } } = await supabase.auth.getUser()
      const token = session.data.session?.access_token;
      try {
        const response = await fetch(`/api/profiles`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const perfis = await response.json();
        console.log(perfis);
        setData(perfis);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };
  
    React.useEffect(() => {
      fetchData();
    }, [filterEmail]);
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      state: { sorting, columnVisibility },
    });
  
    return (
      <div className="w-full container mx-auto">
        <div className="flex items-center justify-center mt-6">
          <Image width={60} src={logo} alt="logo"/>
          <h1 className="text-4xl">Admin</h1>
        </div>
        <div className="rounded-md border mt-4">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {/* Renderização do corpo da tabela */}
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((Cell) => (
                    <TableCell key={Cell.id}>
                      {flexRender(
                        Cell.column.columnDef.cell,
                        Cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }