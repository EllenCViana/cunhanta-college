"use client";
import * as styledHeroSection from './style';

export default function HeroSection() {
    return (
        <>
            <styledHeroSection.Section>
                <div>
                    <styledHeroSection.Title>Sua jornada começa aqui!</styledHeroSection.Title>
                    <styledHeroSection.Text>Fique por dentro das inúmeras opções de cursos disponíveis e dê o pontapé inicial na construção do seu caminho para o futuro!</styledHeroSection.Text>
                    <styledHeroSection.Button>Começar agora</styledHeroSection.Button>
                </div>
                <styledHeroSection.Personagens src="./personagens.svg" alt="" />
            </styledHeroSection.Section>
        </>
    )
}
