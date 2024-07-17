"use client";

import { useState, ReactNode } from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Retomar from '../pages/Retomar';
import Quizzes from '../pages/Quizzes';
import Certificados from '../pages/Certificados';
import Sobre from '../pages/Sobre';
import Explorar from '../pages/Explorar';
import '../app/globals.css';
import Home from '../pages/Home';


// Defina o tipo de props para RootLayout
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
      case "Quizzes":
        return <Quizzes />;
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
        <Footer />
      </body>
    </html>
  );
}
