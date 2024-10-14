"use client";
import * as styledNavbar from './style';
import Router from 'next/router';

export default function Navbar() {
  return (
    <styledNavbar.NavbarContainer>
      <styledNavbar.NavList>
        <styledNavbar.Caminhos onClick={() => Router.push("/home")}>Home</styledNavbar.Caminhos>
        <styledNavbar.Caminhos onClick={() => Router.push("/retomar")}>Retomar</styledNavbar.Caminhos>
        <styledNavbar.Caminhos onClick={() => ("ExplorarCursos")}>Explorar cursos</styledNavbar.Caminhos>
        <styledNavbar.Caminhos onClick={() => ("Quizzes")}>Quizzes</styledNavbar.Caminhos>
        <styledNavbar.Caminhos onClick={() => ("Certificados")}>Certificados</styledNavbar.Caminhos>
        <styledNavbar.Caminhos onClick={() => ("Sobre")}>Sobre</styledNavbar.Caminhos>
      </styledNavbar.NavList>
    </styledNavbar.NavbarContainer>
  );
}
