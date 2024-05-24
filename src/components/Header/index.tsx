import Image from "next/image";

export default function Header() {
    return (
        <header className="flex bg-[#0191D9] h-[89px] items-center justify-center">
            <Image className="flex-initial mr-20" src={"/logo.svg"} alt={"logo"} width={132} height={50}></Image>
            <input className="flex-initial rounded-md placeholder-[#fff]  w-[758px] h-[40px] px-3 bg-[#0179BB] hover:bg-[#0072af] mr-7" type="text" placeholder="O que você procura?" />
            <div className="flex w-[315px] gap-3">
                <button className="flex-initial drop-shadow-md font-medium text-xl text-[#fff]  rounded-md w-[120px] h-[40px] bg-[#09ADF8] hover:bg-[#099ce0] ">Login</button>
                <button className="flex-initial drop-shadow-md font-medium text-xl text-[#fff]  rounded-md w-[169px] h-[40px] bg-[#F7C607] hover:bg-[#dfb306] ">Cadastro</button>
            </div>
        </header>
    )
}