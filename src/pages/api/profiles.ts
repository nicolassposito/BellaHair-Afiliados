"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { Profile as OriginalProfile } from "@/app/admin/components/columns";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(" ")[1];
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: { Authorization: `Bearer ${token}` },
      },
    }
  );
  const filterEmail = req.query.filterEmail || "";
  try {
    // Consulta a tabela profiles
    const { data: afiliados, error } = await supabase
      .from("profiles")
      .select("*");

    if (error) {
      console.error("Erro ao buscar afiliados:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }

    const afiliadosComGanhos = await Promise.all(afiliados.map(async (afiliado: any) => {
      const hoje = new Date();
      const mesAtual = hoje.getMonth() + 1;
      const anoAtual = hoje.getFullYear();

      const { data: ganhos, error: ganhosError } = await supabase
        .from("afiliados_ganhos")
        .select("ganhos")
        .eq("afiliado_id", afiliado.id)
        .eq("mes", mesAtual)
        .eq("ano", anoAtual);

      if (ganhosError) {
        console.error("Erro ao buscar ganhos do afiliado:", ganhosError);
        return { ...afiliado, ganhoMes: null };
      }

      return { ...afiliado, ganhoMes: ganhos[0]?.ganhos || 0 };
    }));

    res.status(200).json(afiliadosComGanhos);
  } catch (error) {
    console.error("Erro inesperado:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}