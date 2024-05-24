import * as styledHeroSection from './style';

export default function HeroSection() {
    return (
        <>
            <styledHeroSection.Section>
                <div>
                    <styledHeroSection.Title>Sua jornada começa aqui</styledHeroSection.Title>
                    <styledHeroSection.Text>Navegue pelas inúmeras opções de cursos disponíveis e dê o pontapé inicial na construção do seu caminho para o futuro!</styledHeroSection.Text>
                    <styledHeroSection.Caption>Totalmente Gratuito!</styledHeroSection.Caption>
                </div>
                <styledHeroSection.Personagens src="./personagens.svg" alt="" />
            </styledHeroSection.Section>
        </>
    )
}
