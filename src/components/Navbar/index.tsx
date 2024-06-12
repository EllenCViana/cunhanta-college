import * as styledNavbar from './style';

export default function Navbar() {
  return (
    <styledNavbar.NavbarContainer>
      <styledNavbar.NavList>
        <styledNavbar.Caminhos><a href="#">Home</a></styledNavbar.Caminhos>
        <styledNavbar.Caminhos><a href="#">Retomar</a></styledNavbar.Caminhos>
        <styledNavbar.Caminhos><a href="#">Explorar cursos</a></styledNavbar.Caminhos>
        <styledNavbar.Caminhos><a href="#">Quizzes</a></styledNavbar.Caminhos>
        <styledNavbar.Caminhos><a href="#">Certificados</a></styledNavbar.Caminhos>
        <styledNavbar.Caminhos><a href="#">Sobre</a></styledNavbar.Caminhos>
      </styledNavbar.NavList>
    </styledNavbar.NavbarContainer>
  );
}

