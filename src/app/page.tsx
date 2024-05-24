import Head from 'next/head';
import Header from "../components/Header/index";
import HeroSection from "../components/HeroSection/index";
import ContinuarAssistindoComponent from '../components/ContinuarAssistindoComponent';
import RecomendadosComponent from '../components/RecomendadosComponent';
import ShortsComponent from '../components/ShortsComponent';
import InformaticaBasicaComponent from '../components/InformaticaBasicaComponent';
import LogicaDeProgramcaoComponent from '../components/LogicaDeProgramacaoComponent';
import InglesComponent from '../components/InglesComponent';
import DesenvolvimentoWebComponent from '../components/DesenvolvimentoWebComponent';

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200..1000&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <Header />
        <HeroSection />
        <ContinuarAssistindoComponent />
        <RecomendadosComponent />
        <ShortsComponent />
        <InformaticaBasicaComponent />
        <LogicaDeProgramcaoComponent />
        <InglesComponent />
        <DesenvolvimentoWebComponent />
      </div>
    </main>
  );
}
