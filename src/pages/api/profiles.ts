"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

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
    const { data: afiliados, error: afiliadosError } = await supabase
      .from("profiles")
      .select("*");

    if (afiliadosError) {
      console.error("Erro ao buscar afiliados:", afiliadosError);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }

    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();

    const afiliadosComGanhos = await Promise.all(afiliados.map(async (afiliado: any) => {
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

      const totalGanhos = ganhos.reduce((acc: number, curr: any) => acc + curr.ganhos, 0) || 0;
      const ganhoMes = parseFloat(totalGanhos.toFixed(2));

      return { ...afiliado, ganhoMes };
    }));

    res.status(200).json(afiliadosComGanhos);
  } catch (error) {
    console.error("Erro inesperado:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}