"use server"

import { Login } from "@/components/auth/AuthLoginForm"
import { AUTH_BASE_PROTECTED_ROUTE, AUTH_LOGIN_ROUTE } from "@/constants/auth"
import { ERROR_MESSAGES } from "@/constants/errors"
import { createSupabaseServerClient } from "@/lib/database/server"
import { cookies, headers } from "next/headers"
import { permanentRedirect, redirect } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

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

export async function signOut() {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  await supabase.auth.signOut()

  return permanentRedirect('/')
}