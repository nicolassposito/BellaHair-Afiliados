import { AuthLoginForm } from '@/components/auth/AuthLoginForm';
import { createSupabaseServerClient } from '@/lib/database/server';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';

interface LoginPageProps {
  searchParams: { message: string }
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const message = searchParams.message;

  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    permanentRedirect('/painel')
  }


  return <AuthLoginForm message={message}/>
}