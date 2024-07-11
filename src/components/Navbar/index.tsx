"use client";
import Link from 'next/link';
import * as styledNavbar from './style';

export default function Navbar() {
  return (
    <styledNavbar.NavbarContainer>
      <styledNavbar.NavList>
        <styledNavbar.Caminhos><Link href="/">Home</Link></styledNavbar.Caminhos>
        <styledNavbar.Caminhos><Link href="/Retomar">Retomar</Link></styledNavbar.Caminhos>
        <styledNavbar.Caminhos><Link href="/Explorar">Explorar cursos</Link></styledNavbar.Caminhos>
        <styledNavbar.Caminhos><Link href="/Quizzes">Quizzes</Link></styledNavbar.Caminhos>
        <styledNavbar.Caminhos><Link href="/Certificados">Certificados</Link></styledNavbar.Caminhos>
        <styledNavbar.Caminhos><Link href="/Sobre">Sobre</Link></styledNavbar.Caminhos>
      </styledNavbar.NavList>
    </styledNavbar.NavbarContainer>
  );
}
