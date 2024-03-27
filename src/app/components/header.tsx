import Image from "next/image";
import logo from "@/../public/bellahair.svg";
import logoMob from "@/../public/bella.svg";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function Header() {
    return(
      <>
      <div className="z-[3] fixed left-1/2 -translate-x-1/2 w-full p-4">
        <header className="py-3 px-5 flex items-center justify-between w-full rounded-xl top-4 bg-rose-100 bg-opacity-40 backdrop-blur-lg">
            <div>
                <Link href="/"><Image className="md:block hidden" src={logo} width={180} alt="Bella Hair" /></Link>
                <Link href="/"><Image className="hidden sm:block md:hidden" src={logoMob} width={51} alt="Bella Hair" /></Link>
                <Link href="/"><Image className="sm:hidden" src={logoMob} width={44} alt="Bella Hair" /></Link>
            </div>
            <div>
                <ul className="flex gap-3 md:gap-4">
                    <li>
                        <Link href='#'><HelpCircle width={26} height={26} strokeWidth={1.5} className="text-white sm:hidden" /></Link>
                        <Link href='#'><HelpCircle width={30} height={30} strokeWidth={1.5} className="text-white hidden sm:block" /></Link>
                    </li>
                    <li>
                        <Link href='#' className="transition hover:bg-opacity-100 bg-rose-500 bg-opacity-80 px-3 py-2 rounded-full text-white text-base sm:text-lg">Área do Afiliado</Link>
                    </li>
                </ul>
            </div>
        </header>
      </div>
      </>
    )
  }