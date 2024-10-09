"use client";
import { useState, ReactNode } from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Retomar from '../pages/Retomar';
import Certificados from '../pages/Certificados';
import Sobre from '../pages/Sobre';
import Explorar from '../pages/Explorar';
import '../app/globals.css';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [selectedComponent, setSelectedComponent] = useState("Home");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Home":
        return <Home />;
      case "Retomar":
        return <Retomar />;
      case "ExplorarCursos":
        return <Explorar/>;
      case "Quiz":
        return <Quiz />;
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
