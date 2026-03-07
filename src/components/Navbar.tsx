"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-100">
      <div className="flex items-center justify-between px-6 lg:px-10 h-16 lg:h-20">
        <Image
          src="/assets/icons/logo.png"
          alt="Backbook Solutions"
          width={180}
          height={60}
          className="w-32 md:w-40 lg:w-48 h-auto"
        />
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <nav className="flex items-center gap-6 lg:gap-8 text-base lg:text-lg text-gray-700">
            <a href="#" className="hover:text-black transition">
              Início
            </a>
            <a href="#" className="hover:text-black transition">
              Sobre Nós
            </a>
            <a href="#" className="hover:text-black transition">
              Produtos
            </a>
            <a href="#" className="hover:text-black transition">
              Serviços
            </a>
            <a href="#" className="hover:text-black transition">
              Contacto
            </a>
          </nav>

          <button className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-500 text-white px-6 py-2 rounded-lg text-sm lg:text-base font-medium hover:scale-105 transition">
            Solicitar orçamento
          </button>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-700">
          <a href="#">Início</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Produtos</a>
          <a href="#">Serviços</a>
          <a href="#">Contacto</a>
          <button className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-500 text-white px-6 py-2 rounded-lg text-sm lg:text-base font-medium hover:scale-105 transition">
            Solicitar orçamento
          </button>
        </div>
      )}
    </header>
  );
}
