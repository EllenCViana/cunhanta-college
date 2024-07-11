"use client";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex h-[89px] items-center justify-center">
            <Image src={"/logo.svg"} alt={"logo"} width={132} height={50}></Image>
            <input className="m-20 bg-transparent border flex-initial rounded-md placeholder-[#ffffff] w-[830px] h-[40px] px-4 hover:bg-[#ffffff11] cursor-text" type="text" placeholder="O que você procura?" />
            <div className="flex w-[315px] gap-4">
                <button className="flex-initial drop-shadow-md font-medium text-xl text-[#fff] rounded-md w-[120px] h-[40px] bg-[#43bdff] hover:bg-[#099CE0]">Login</button>
                <button className="flex-initial drop-shadow-md font-medium text-xl text-[#fff] rounded-md w-[169px] h-[40px] bg-[#ffd426] hover:bg-[#dda807] ">Cadastro</button>
            </div>
        </header>
    )
}