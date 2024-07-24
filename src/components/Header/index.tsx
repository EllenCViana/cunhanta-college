"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation'; 
import { HeaderContainer, SearchInput, ButtonGroup, Button } from "./style";

export default function Header() {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push('/cadastro'); 
    };

    const handleLoginClick = () => {
        router.push('/login'); 
    };

    return (
        <HeaderContainer>
            <Image src={"/logo.svg"} alt={"logo"} width={132} height={50} />
            <SearchInput type="text" placeholder="O que você procura?" />
            <ButtonGroup>
                <Button className="login" onClick={handleLoginClick}>Login</Button>
                <Button className="signup" onClick={handleSignUpClick}>Cadastro</Button>
            </ButtonGroup>
        </HeaderContainer>
    );
}
