"use client";

import ContinuarAssistindoComponent from '@/src/components/ContinuarAssistindoComponent';
import DesenvolvimentoWebComponent from '@/src/components/DesenvolvimentoWebComponent';
import HeroSection from '@/src/components/HeroSection';
import InformaticaBasicaComponent from '@/src/components/InformaticaBasicaComponent';
import InglesComponent from '@/src/components/InglesComponent';
import LogicaDeProgramacaoComponent from '@/src/components/LogicaDeProgramacaoComponent';
import RecomendadosComponent from '@/src/components/RecomendadosComponent';
import ShortsComponent from '@/src/components/ShortsComponent';
import Head from 'next/head';


const Home: React.FC = () => {
  return (
    <main>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200..1000&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Murecho:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <HeroSection />
      <section style={{ marginLeft: "30px" }}>
        <ContinuarAssistindoComponent />
        <RecomendadosComponent />
        <ShortsComponent />
        <InformaticaBasicaComponent />
        <LogicaDeProgramacaoComponent />
        <InglesComponent /> 
        <DesenvolvimentoWebComponent />
      </section>
    </main>
  );
}

export default Home;
