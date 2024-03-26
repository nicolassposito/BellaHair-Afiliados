import Image from "next/image";
import waves from "@/../public/home/wavesOpacity.svg";

export default function Featured() {
    return(
      <>
      <div className="min-h-screen relative" style={{backgroundColor: '#c44255'}}>
        <Image src={waves} alt="waves" className="absolute -top-1 w-full"/>
        <div className="pt-36"></div>
        <h1 className="text-4xl text-center text-rose-100 font-medium drop-shadow">Como funciona?</h1>
      </div>
      </>
    )
  }