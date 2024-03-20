"use server"

import { Login } from "@/components/auth/AuthLoginForm";
import { Register } from "@/components/auth/authRegisterForm";
import { AUTH_BASE_PROTECTED_ROUTE, AUTH_LOGIN_ROUTE } from "@/constants/auth";
import { ERROR_MESSAGES } from "@/constants/errors";
import { createSupabaseServerClient } from "@/lib/database/server";
import { cookies, headers } from "next/headers";
import { permanentRedirect, redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from '@supabase/supabase-js'

export async function signIn({ email, password}: Login) {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error(error);
    return redirect(`${AUTH_LOGIN_ROUTE}?message=${ERROR_MESSAGES.AUTH.COULD_NOT_AUTHENTICATE_USER}`)
  }

  return permanentRedirect(AUTH_BASE_PROTECTED_ROUTE)
}


export async function signUp({email, password, fullname}: Register) {
  const cookieStore = cookies();

  const supabase = createClient('https://qsnsuvcqzjlxfjpoazdl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbnN1dmNxempseGZqcG9hemRsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTU3ODM5NCwiZXhwIjoyMDI1MTU0Mzk0fQ.l7SdalW7-8_kj4ipsFp4TvTy2iMGS7R2DE0TAfRTai0', {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
  
  const { data: userData, error: userError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });
  
  if (userError) {
    console.log('Erro ao criar usuário');
    console.error(userError);
    return;
  }

  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .upsert({ id: userData.user.id, nome: fullname, email: userData.user.email })
  if (profileError) {
    console.error('Erro ao atualizar o nome do perfil:', profileError);
  } else {
    console.log('Nome do perfil atualizado com sucesso:', profileData);
  }

  return
}

export async function signOut() {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  await supabase.auth.signOut()

  return permanentRedirect('/')
}