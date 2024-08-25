"use client";

import { useState, useEffect, ReactNode } from 'react';
import Navbar from "../components/Navbar";
import Retomar from '../pages/Retomar';
import Certificados from '../pages/Certificados';
import Sobre from '../pages/Sobre';
import Explorar from '../pages/Explorar';
import Home from '../pages/Home';
import '../app/globals.css';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [selectedComponent, setSelectedComponent] = useState("Home");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderComponent = () => {
    if (!isMounted) return null;

    switch (selectedComponent) {
      case "Home":
        return <Home />;
      case "Retomar":
        return <Retomar />;
      case "ExplorarCursos":
        return <Explorar />;
      case "Quizzes":
        router.push('/quizzes'); 
        return null;
      case "Certificados":
        return <Certificados />;
      case "Sobre":
        return <Sobre />;
      default:
        return <Home />;
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
      </head>
      <body>
        <Header />
        <Navbar setSelectedComponent={setSelectedComponent} />
        {renderComponent()}
        {children}
      </body>
    </html>
  );
}
