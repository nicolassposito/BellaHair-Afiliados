import Image from "next/image";
import waves from "@/../public/home/wavesOpacity.svg";
import { FileText, HandCoins, PartyPopper, PercentSquare } from "lucide-react";
import Link from "next/link";

export default function Featured() {
    return(
      <>
      <div className="relative pb-8 md:pb-16" style={{backgroundColor: '#dc4b60'}}>
        <Image src={waves} alt="waves" className="-mt-1 w-full pb-12"/>
        <h1 className="text-3xl sm:text-4xl text-center text-rose-100 font-medium drop-shadow">Como funciona?</h1>
        <div className="grid mt-10 grid-rows-1 grid-cols-1 sm:grid-cols-4 xl:grid-cols-11 px-6 items-center justify-center sm:gap-3 xl:gap-0">
          <div className="bg-rose-100 relative rounded-xl p-5 shadow-xl col-span-2 hover:bg-rose-400 hover:shadow-lg transition group h-full mx-auto grid">
            <div className="absolute top-4 right-5 text-2xl text-rose-300 group-hover:text-rose-200 transition outline outline-2 w-8 h-8 flex justify-center items-center rounded-full">1</div>
            <div className="pb-2">
              <FileText width={36} height={36} strokeWidth={1.5} className="text-rose-400 group-hover:text-zinc-100 transition -ml-1"/>
              <h3 className="text-zinc-800 text-base group-hover:text-zinc-100 transition">Seus dados</h3>
            </div>
            <h1 className="text-lg group-hover:text-zinc-100 transition text-zinc-800 font-medium">Preencha seus dados no <Link href='#' className="text-rose-500 group-hover:bg-rose-100 transition rounded px-0.5">formulário</Link> para se tornar um afiliado Bella.</h1>
          </div>
          <div className="w-1 h-8 sm:w-full sm:h-1 mx-auto bg-rose-300 col-span-1 xl:block sm:hidden"></div>
          <div className="bg-rose-100 relative rounded-xl p-5 shadow-xl col-span-2 hover:bg-rose-400 hover:shadow-lg transition group h-full mx-auto grid">
            <div className="absolute top-4 right-5 text-2xl text-rose-300 group-hover:text-rose-200 transition outline outline-2 w-8 h-8 flex justify-center items-center rounded-full">2</div>
            <div className="pb-2">
              <PercentSquare width={36} height={36} strokeWidth={1.5} className="text-rose-400 group-hover:text-zinc-100 transition -ml-1"/>
              <h3 className="text-zinc-800 text-base group-hover:text-zinc-100 transition">Cupom</h3>
            </div>
            <h1 className="text-lg group-hover:text-zinc-100 transition text-zinc-800 font-medium">Você receberá um cupom de 5% para seus seguidores utilizarem no <Link href='#' className="text-rose-500 group-hover:bg-rose-100 transition rounded px-0.5">site</Link></h1>
          </div>
          <div className="w-1 h-8 sm:w-full sm:h-1 mx-auto bg-rose-300 col-span-1 xl:block sm:hidden"></div>
          <div className="bg-rose-100 relative rounded-xl p-5 shadow-xl col-span-2 hover:bg-rose-400 hover:shadow-lg transition group h-full mx-auto grid">
            <div className="absolute top-4 right-5 text-2xl text-rose-300 group-hover:text-rose-200 transition outline outline-2 w-8 h-8 flex justify-center items-center rounded-full">3</div>
            <div className="pb-2">
              <HandCoins width={36} height={36} strokeWidth={1.5} className="text-rose-400 group-hover:text-zinc-100 transition -ml-1"/>
              <h3 className="text-zinc-800 text-base group-hover:text-zinc-100 transition">Comissão</h3>
            </div>
            <h1 className="text-lg group-hover:text-zinc-100 transition text-zinc-800 font-medium">Você recebera o proporcional pelas vendas realizadas utilizando seu cupom.</h1>
          </div>
          <div className="w-1 h-8 sm:w-full sm:h-1 mx-auto bg-rose-300 col-span-1 xl:block sm:hidden"></div>
          <div className="bg-rose-100 relative rounded-xl p-5 shadow-xl col-span-2 hover:bg-rose-400 hover:shadow-lg transition group h-full mx-auto grid">
            <div className="absolute top-4 right-5 text-2xl text-rose-300 group-hover:text-rose-200 transition outline outline-2 w-8 h-8 flex justify-center items-center rounded-full">4</div>
            <div className="pb-2">
              <PartyPopper width={36} height={36} strokeWidth={1.5} className="text-rose-400 group-hover:text-zinc-100 transition -ml-1"/>
              <h3 className="text-zinc-800 text-base group-hover:text-zinc-100 transition">Recebimento</h3>
            </div>
            <h1 className="text-lg group-hover:text-zinc-100 transition text-zinc-800 font-medium">O comissionamento é depositado no dia 20 em sua conta (informada no formulário)</h1>
          </div>
        </div>
      </div>
      </>
    )
  }