"use client";
import Image from "next/image";
import { HeaderContainer, SearchInput, ButtonGroup, Button } from "./style";

export default function Header() {
    return (
        <HeaderContainer>
            <Image src={"/logo.svg"} alt={"logo"} width={132} height={50} />
            <SearchInput type="text" placeholder="O que você procura?" />
            <ButtonGroup>
                <Button className="login">Login</Button>
                <Button className="signup">Cadastro</Button>
            </ButtonGroup>
        </HeaderContainer>
    );
}
