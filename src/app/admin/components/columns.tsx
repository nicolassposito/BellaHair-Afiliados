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
      {
        id: "actions",
        cell: function Cell({ row }) {
          const [ganhoInput, setGanhoInput] = React.useState("");
          const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    
          const handleRegisterGanho = async () => {
            try {
              const afiliadoId = row.getValue("id");
              const hoje = new Date();
              const dia = hoje.getDate();
              const mes = hoje.getMonth() + 1;
              const ano = hoje.getFullYear();
    
              await supabase.from("afiliados_ganhos").insert([
                {
                  afiliado_id: afiliadoId,
                  dia,
                  mes,
                  ano,
                  ganhos: parseFloat(ganhoInput),
                },
              ]);
    
              // Atualizar a lista de afiliados após adicionar o ganho
              // Você pode implementar isso conforme necessário
    
              setIsDialogOpen(false);
              setGanhoInput("");
            } catch (error) {
              console.error("Erro ao registrar ganho:", error);
              // Tratar o erro conforme necessário
            }
          };
    
          return (
            <div className="flex items-center justify-end">
              <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogTrigger>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <DotsHorizontalIcon className="h-5 w-5" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Adicionar ganho diário</AlertDialogTitle>
                  </AlertDialogHeader>
                  <div className="flex flex-col p-4">
                    <Input
                      type="number"
                      value={ganhoInput}
                      onChange={(e) => setGanhoInput(e.target.value)}
                      placeholder="Valor do ganho"
                    />
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                      <Button variant="ghost">Cancelar</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction
                      asChild
                      onClick={handleRegisterGanho}
                      autoFocus
                    >
                      <Button>Registrar Ganho</Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          );
        },
      },
    ];