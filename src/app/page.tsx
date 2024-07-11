import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ContinuarAssistindoComponent from '../components/ContinuarAssistindoComponent';
import RecomendadosComponent from '../components/RecomendadosComponent';
import ShortsComponent from '../components/ShortsComponent';
import InformaticaBasicaComponent from '../components/InformaticaBasicaComponent';
import LogicaDeProgramacaoComponent from '../components/LogicaDeProgramacaoComponent';
import InglesComponent from '../components/InglesComponent';
import DesenvolvimentoWebComponent from '../components/DesenvolvimentoWebComponent';

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
};

export default Home;
