"use client";
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#00000030] text-white py-8 p-32 flex items-center h-[300px] top-[20]">
      <div className="container mx-auto flex justify-between items-start px-4">
        
        {/* Links */}
        <div className="flex flex-col space-y-4">
          <a href="/quem-somos" className="hover:underline">Quem somos</a>
          <a href="/ajuda-suporte" className="hover:underline">Ajuda e Suporte</a>
          <a href="/fale-conosco" className="hover:underline">Fale conosco</a>
        </div>

        {/* Logo e Redes Sociais */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex-shrink-0">
            <Image src="/logo.svg" alt="Logo" width={100} height={40} />
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-700">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div> 
      </div>

        {/* <h3>@ 2024 Cunhantã. Todos os direitos reservados.</h3> */}

    </footer>
  );
}
