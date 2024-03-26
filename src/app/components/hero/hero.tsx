import Image from "next/image";
import card from "@/../public/home/card.png";
import background from "@/../public/home/patterns.svg";
import Profile from "@/../public/home/cardProfile.jpg";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return(
      <>
      {/* <Image src={background} alt="background" className="absolute -z-[1] h-full"></Image> */}
      <div className="hero px-5 border-b min-h-screen flex flex-col items-center justify-center">
        <div className="flex-col-reverse py-28 md:py-0 gap-4 md:gap-0 md:flex-row md:pt-0 flex items-center justify-around">
            <div className="w-1/2 flex flex-col gap-2 relative">
                <h1 className="flex items-center gap-2"><span className="text-white font-semibold text-7xl">Bella</span> <span className="bg-zinc-100 rounded-xl px-2.5 py-2.5 text-rose-400 font-medium shadow-xl text-3xl">Afiliados!</span></h1>
                <p className="text-zinc-100 font-medium text-lg ml-1">Criado para aquele cliente que ama nossos produtos e gostaria de otimizar sua renda ao indicar os produtos da Bella Hair.</p>
                <Link href='#' className="group hover:bg-rose-300 hover:bg-opacity-70 hover:text-rose-100 transition flex items-center gap-1 bg-rose-200 w-fit py-3 px-4 rounded-full shadow text-rose-400 contrast-125 font-normal mt-2.5 text-lg">
                    Estou interessada
                    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="34" height="34"><mask id=":rdc:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#:rdc:)"><rect width="36" height="36" fill="#fb7185"></rect><rect x="0" y="0" width="36" height="36" transform="translate(7 7) rotate(333 18 18) scale(1)" fill="#d85366" rx="6"></rect><g transform="translate(3.5 3.5) rotate(-3 18 18)"><path d="M13,19 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path><rect x="11" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="23" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>
                </Link>
            </div>
            <div>
                <div className="shadow-md border border-rose-300 p-3 rounded-xl bg-rose-200 max-w-96">
                    <div className="flex items-center gap-1 mb-2">
                        <div className="stories">
                            <Image className="rounded-full p-0.5 bg-white" width={30} src={Profile} alt="perfil"></Image>
                        </div>
                        <h3 className="text-zinc-700">@afiliado</h3>
                    </div>
                    <Image className="rounded-xl w-96" src={card} alt="Afiliado"></Image>
                    <p className="mt-2 font-normal text-zinc-700">🌟 Junte-se ao nosso Programa de Afiliados! 🌟</p>
                </div>
            </div>
        </div>
      </div>
      </>
    )
  }