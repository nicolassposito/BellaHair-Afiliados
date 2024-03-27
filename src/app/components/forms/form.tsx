"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  nomeCompleto: z.string().min(5, {
    message: "O nome completo deve ter pelo menos 5 caracteres.",
  }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  cpf: z.string().length(11, { message: "O CPF deve ter 11 dígitos. Digite apenas os números" }),
  cupom: z.string(),
  endereco: z.string(),
  telefone: z.string(),
  pix: z.string(),
  instagram: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Forms() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log(values);
  };

  return (
    <div style={{ backgroundColor: "#f25970" }}>
      <h1 className="text-3xl sm:text-4xl text-center text-rose-50 font-medium drop-shadow px-4">
        Faça sua solicitação!
      </h1>
      <p className="text-lg text-center font-light text-rose-200">
        Processo rápido e prático. Retorno garantido.
      </p>
      <div className="container mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="nomeCompleto"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu e-mail" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpf"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu CPF" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cupom"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>CUPOM</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Maria5" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endereco"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>ENDEREÇO</FormLabel>
                  <FormControl>
                    <Input placeholder="Rua exemplo, 123, apto 123" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefone"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>TELEFONE</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu telefone (DDD)" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pix"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Chave PIX</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu PIX (para pagamentos)" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagram"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o @ do seu Instagram" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" style={{ backgroundColor: "pink" }}>
              Enviar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
