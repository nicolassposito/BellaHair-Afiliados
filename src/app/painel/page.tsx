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

export default function Dashboard(){
    
    return(
        <>
        <div className="absolute w-full max-w-xl border rounded p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-2 font-light flex justify-center items-center gap-2">
                <Image src={Logo} alt="logo" width={50}></Image>
                <h1 className="text-3xl text-rose-400 mt-1">Painel de Afiliados</h1>
            </div>
            <div className="text-center text-xl text-zinc-700 mt-2">
                <h1 className="text-2xl">Este mês suas vendas te geraram:</h1>
                <div className="bg-rose-400 text-white font-medium inline-block mt-2 px-3.5 py-2.5 rounded-full">
                    <h1 className="text-2xl">R$: 110,00</h1>
                </div>
            </div>
            <div>
                <h1 className="text-center text-2xl text-zinc-700 mt-4 pt-2 border-t">Histórico</h1>
                <div id="chart">
                    <Line
                        data={{
                        labels: [
                            "2023-01",
                        ],
                        datasets: [
                            {
                            data: [100],
                            backgroundColor: "#fb7185",
                            },
                        ],
                        }}
                    />
                    </div>
            </div>
        </div>
        </>
    )
}