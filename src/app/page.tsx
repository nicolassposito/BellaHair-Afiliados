"use client"

import Image from "next/image";
import Logo from '..//..//public/bella.svg';
import { useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if(data){
        console.log(data);
        router.push('/painel');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return(
    <>
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-rose-100 p-4 rounded-xl">
      <div className="flex justify-center items-center gap-1">
        <Image width={60} src={Logo} alt="Bella Hair"></Image>
        <h1 className="text-4xl font-light mt-2">Afiliados</h1>
      </div>
      <div className="border p-2 m-4 flex flex-col rounded">
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
    </>
  )
}
