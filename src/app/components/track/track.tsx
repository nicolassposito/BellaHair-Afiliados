import Image from "next/image";
import painel from "@/../public/home/painel.png"
import painelMobile from "@/../public/home/painel mob.png"
import { AtSign, Bell, BellRing, Laptop, Laugh, PartyPopper, Percent, PiggyBank, Smartphone, Wallet } from "lucide-react";
import Link from "next/link";

export default function Track() {
    return(
      <>
      <div className="relative pt-6 pb-8 overflow-hidden" style={{backgroundColor: '#f25970'}}>
        <div className="mt-10 left-1/2 -translate-x-1/2 absolute w-full h-full max-w-[1440px] hidden xl:block">
            <div><BellRing className="absolute text-white w-24 h-24 opacity-40 rotate-45 top-6 left-20"/></div>
            <div><PartyPopper className="absolute text-white w-24 h-24 opacity-40 rotate-0 top-56 top-1/4 left-32"/></div>
            <div><PiggyBank className="absolute text-white w-24 h-24 opacity-40 rotate-45 top-1/2 left-40"/></div>
            <div><Laugh className="absolute text-white w-24 h-24 opacity-40 rotate-45 top-3/4 left-32"/></div>
            <div><Percent className="absolute text-white w-24 h-24 opacity-40 rotate-0 top-6 right-20"/></div>
            <div><Wallet className="absolute text-white w-24 h-24 opacity-40 rotate-45 top-56 top-1/4 right-32"/></div>
            <div><Smartphone className="absolute text-white w-24 h-24 opacity-40 rotate-45 top-1/2 right-40"/></div>
            <div><AtSign className="absolute text-white w-24 h-24 opacity-40 rotate-0 top-3/4 right-32"/></div>
        </div>
        <h1 className="text-3xl sm:text-4xl text-center text-rose-50 font-medium drop-shadow px-4">Acompanhe suas vendas em tempo real</h1>
        <div className="px-6">
            <div className="mt-6 mx-auto md:px-8 max-w-lg md:max-w-3xl overflow-hidden rounded-xl">
                <Image src={painel} alt="area afiliados" className="w-full hidden md:block scale-125 rounded-xl"/>
                <Image src={painelMobile} alt="area afiliados" className="w-full md:hidden rounded-xl"/>
            </div>
        </div>
        <div className="px-6 pt-2">
            <div className="mx-auto md:px-0 max-w-lg md:max-w-3xl">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-2">
                        <div className="bg-rose-100 relative rounded-xl p-5 shadow-xl col-span-1 hover:bg-rose-400 hover:shadow-lg transition group h-full mx-auto grid w-full">
                            <div className="absolute top-4 right-5 text-2xl text-rose-300 group-hover:text-rose-200 transition outline outline-2 w-8 h-8 flex justify-center items-center rounded-full">1</div>
                            <Bell width={36} height={36} strokeWidth={1.5} className="text-rose-400 group-hover:text-zinc-100 transition -ml-1"/>
                            <h1 className="text-lg group-hover:text-zinc-100 transition text-zinc-800 font-medium">Receba notificações em tempo real por email</h1>
                        </div>
                        <div className="bg-rose-100 relative rounded-xl p-5 shadow-xl col-span-1 hover:bg-rose-400 hover:shadow-lg transition group h-full mx-auto grid w-full">
                            <div className="absolute top-4 right-5 text-2xl text-rose-300 group-hover:text-rose-200 transition outline outline-2 w-8 h-8 flex justify-center items-center rounded-full">2</div>
                            <Laptop width={36} height={36} strokeWidth={1.5} className="text-rose-400 group-hover:text-zinc-100 transition -ml-1"/>
                            <h1 className="text-lg group-hover:text-zinc-100 transition text-zinc-800 font-medium">Acompanhe as vendas pela <Link href='#' className="text-rose-500 group-hover:bg-rose-100 transition rounded px-0.5">área do afiliado</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
    )
  }