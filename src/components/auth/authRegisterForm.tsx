"use client";

import { signUp } from "@/actions/authActions";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import "./styles.css";
import logo from "..//..//..//public/images/logo-b.png";
import Image from "next/image";
import { useState } from "react";

interface AuthRegisterFormProps {
  message: string;
  onSignUpSuccess: () => void;
}

const registerFormSchema = z.object({
  email: z.string().email({
    message: "Email inválido",
  }),
  password: z.string().min(8, {
    message: "Senha deve ter no mínimo 8 caracteres.",
  }),
  fullname: z.string().min(1, {
    message: "Por favor, insira o nome completo.",
  }),
});

export type Register = z.infer<typeof registerFormSchema>;

export function AuthRegisterForm({ message, onSignUpSuccess }: AuthRegisterFormProps) {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const registerForm = useForm<Register>({
        resolver: zodResolver(registerFormSchema),
    });

  async function handleSignUp(values: Register) {
    try {
      await signUp(values);
      onSignUpSuccess();
    } catch (error) {
      console.error(error);
      setErrorMessage("Erro ao criar usuário. Por favor, tente novamente.");
    }
  }

  return (
    <>
        <div className="flex flex-col">
          <h1 className="text-xl my-4 font-semibold text-foreground">
            Registrar afiliado
          </h1>
        </div>
        
        <Form {...registerForm}>
        <form
          onSubmit={registerForm.handleSubmit(handleSignUp)}
          className="flex flex-col w-full grow items-center gap-4 text-foreground"
        >
          <FormField
            control={registerForm.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="w-full">
                <Label htmlFor="fullname">Nome Completo</Label>
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="fullname"
                    placeholder="Nome completo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
              control={registerForm.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Label htmlFor="email">E-mail</Label>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="afiliado@exemplo.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={registerForm.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Label htmlFor="password">Senha</Label>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-4 flex flex-col gap-3 w-full">
              <Button className="text-white bg-rose-400 hover:bg-rose-500"
                type="submit"
                disabled={registerForm.formState.isSubmitting}
              >
                {registerForm.formState.isSubmitting
                  ? "Carregando..."
                  : "Criar conta"}
              </Button>
            </div>

            {message && (
              <span className="text-sm text-muted-foreground">{message}</span>
            )}
          </form>
        </Form>
    </>
  );
}