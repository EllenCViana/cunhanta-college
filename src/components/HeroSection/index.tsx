"use client";
import { Personagens, Section, Title, Text, Button } from './style';

export default function HeroSection() {
    return (
        <>
            <Section>
                <div>
                    <Title>Sua jornada começa aqui!</Title>
                    <Text>Fique por dentro das inúmeras opções de cursos disponíveis e dê o pontapé inicial na construção do seu caminho para o futuro!</Text>
                    <Button>Começar agora</Button>
                </div>
                <Personagens src="./personagens.svg" alt="" />
            </Section>
        </>
    )
}
