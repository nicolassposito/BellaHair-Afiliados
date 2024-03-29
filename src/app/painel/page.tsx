"use client"

import Image from "next/image";
import Logo from '..//..//..//public/bella.svg'
import { useState, useEffect } from 'react';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );

const supabase = createClientComponentClient();

interface HistoricoItem {
    dia: number;
    mes: number;
    ano: number;
    ganhos: number;
  }
  
  export default function Dashboard() {
    const [historico, setHistorico] = useState<HistoricoItem[]>([]);
    const [totalGanhos, setTotalGanhos] = useState<number>(0);
  
    useEffect(() => {
      async function fetchHistorico() {
        const { data: { user } } = await supabase.auth.getUser();
        const { data, error } = await supabase
          .from("afiliados_ganhos")
          .select("dia, mes, ano, ganhos")
          .eq('afiliado_id', user?.id)
          .eq('mes', new Date().getMonth() + 1)
          .eq('ano', new Date().getFullYear());
        if (error) {
          console.error("Erro ao buscar histórico:", error);
          return;
        }
  
        setHistorico(data);
        const total = data.reduce((acc, curr) => acc + curr.ganhos, 0);
        setTotalGanhos(total);
      }
  
      fetchHistorico();
    }, []);
  
    const data = {
      labels: historico.map((item) => `${item.dia}-${item.mes}-${item.ano}`),
      datasets: [
        {
          label: "Ganhos",
          data: historico.map((item) => item.ganhos),
          backgroundColor: "#fb7185",
        },
      ],
    };
  
    return (
      <>
        <div className="absolute w-full max-w-xl border rounded p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="p-2 font-light flex justify-center items-center gap-2">
            <Image src={Logo} alt="logo" width={50}></Image>
            <h1 className="text-3xl text-rose-400 mt-1">Painel de Afiliados</h1>
          </div>
          <div className="text-center text-xl text-zinc-700 mt-2">
            <h1 className="text-2xl">Este mês suas vendas te geraram:</h1>
            <div className="bg-rose-400 text-white font-medium inline-block mt-2 px-3.5 py-2.5 rounded-full">
              <h1 className="text-2xl">R$: {totalGanhos.toFixed(2)}</h1>
            </div>
          </div>
          <div>
            <h1 className="text-center text-2xl text-zinc-700 mt-4 pt-2 border-t">
              Histórico do mês:
            </h1>
            <div id="chart">
              <Line data={data} />
            </div>
          </div>
        </div>
      </>
    );
  }