"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  function handleCourseClick(courseId: number): void {
    router.push(`/courses/${courseId}`);
  }

  return (
    <main>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <HeroSection />
      <section style={{ marginLeft: "30px" }}>
        <ContinuarAssistindoComponent />
        <RecomendadosComponent />
        <ShortsComponent />
        <InformaticaBasicaComponent />
        <LogicaDeProgramacaoComponent />
        <InglesComponent onCourseClick={handleCourseClick} />
        <DesenvolvimentoWebComponent />
      </section>
    </main>
  );
};

export default Home;
