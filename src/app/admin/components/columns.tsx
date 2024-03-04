import * as React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
    ColumnDef,
    SortingState,
    VisibilityState,
    flexRender,
    useReactTable,
    getCoreRowModel,
  } from "@tanstack/react-table";
  import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Input } from "@/components/ui/input";

export type Profile = {
    id: string;
    nome: string;
    email: string;
    ganhoMes: string;
  };
    
  const supabase = createClientComponentClient();


    export const columns: ColumnDef<Profile>[] = [
      {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => <div>{row.getValue("id")}</div>,
      },
      {
        accessorKey: "nome",
        header: "Nome",
        cell: ({ row }) => <div>{row.getValue("nome")}</div>,
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => <div>{row.getValue("email")}</div>,
      },
      {
        accessorKey: "ganhoMes",
        header: "Ganho do Mês",
        cell: ({ row }) => <div>{row.getValue("ganhoMes")}</div>,
      },
    ];