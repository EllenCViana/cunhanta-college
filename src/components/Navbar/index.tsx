"use client";
import * as styledNavbar from './style';

interface NavbarProps {
  setSelectedComponent: (component: string) => void;
}


export default function Navbar({ setSelectedComponent }: NavbarProps) {
  return (
    <styledNavbar.NavbarContainer>
      <styledNavbar.NavList>
        <styledNavbar.Caminhos onClick={() => setSelectedComponent("Home")}>Home</styledNavbar.Caminhos>
        <styledNavbar.Caminhos onClick={() => setSelectedComponent("Retomar")}>Retomar</styledNavbar.Caminhos>
        <styledNavbar.Caminhos onClick={() => setSelectedComponent("ExplorarCursos")}>Explorar cursos</styledNavbar.Caminhos>
        <styledNavbar.Caminhos onClick={() => setSelectedComponent("Quizzes")}>Quizzes</styledNavbar.Caminhos>
        <styledNavbar.Caminhos onClick={() => setSelectedComponent("Certificados")}>Certificados</styledNavbar.Caminhos>
        <styledNavbar.Caminhos onClick={() => setSelectedComponent("Sobre")}>Sobre</styledNavbar.Caminhos>
      </styledNavbar.NavList>
    </styledNavbar.NavbarContainer>
  );
}
