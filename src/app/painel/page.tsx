import Image from "next/image";
import Logo from '..//..//..//public/bella.svg'

export default function Dashboard(){
    
    return(
        <>
        <div className="absolute border rounded p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-2 font-light flex items-center gap-2">
                <Image src={Logo} alt="logo" width={50}></Image>
                <h1 className="text-3xl text-rose-400">Painel de Afiliados</h1>
            </div>
            <div className="text-center text-xl text-zinc-700 mt-2">
                <h1 className="text-2xl">Este mês suas vendas te geraram:</h1>
                <div className="bg-rose-400 text-white font-medium inline-block mt-2 px-3 py-2 rounded-full">
                    <h1 className="text-2xl">R$: 110,00</h1>
                </div>
            </div>
            
        </div>
        </>
    )
}