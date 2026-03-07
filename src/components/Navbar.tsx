"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-100">
      <div className="flex items-center justify-between px-6 lg:px-12 h-16 lg:h-20">
        {/* Logo */}
        <Image
          src="/assets/icons/logo.png"
          alt="Backbook Solutions"
          width={180}
          height={60}
          className="w-32 md:w-40 lg:w-48 h-auto"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8 text-base lg:text-lg text-slate-800 font-medium">
            <a href="#" className="relative group">
              Início
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-700 transition-all group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group">
              Sobre Nós
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-700 transition-all group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group">
              Produtos
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-700 transition-all group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group">
              Serviços
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-700 transition-all group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group">
              Contacto
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-700 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Botão */}
          <button className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-500 text-white px-6 py-2.5 rounded-lg text-sm lg:text-base font-medium hover:scale-105 shadow-md hover:shadow-lg transition">
            Solicitar orçamento
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl text-slate-800"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 text-base text-slate-800 font-medium">
          <a className="py-2 border-b border-gray-200 active:text-blue-700">
            Início
          </a>

          <a className="py-2 border-b border-gray-200 active:text-blue-700">
            Sobre Nós
          </a>

          <a className="py-2 border-b border-gray-200 active:text-blue-700">
            Produtos
          </a>

          <a className="py-2 border-b border-gray-200 active:text-blue-700">
            Serviços
          </a>

          <a className="py-2 active:text-blue-700">Contacto</a>

          <button className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-500 text-white px-6 py-2.5 rounded-lg w-fit mt-3">
            Solicitar orçamento
          </button>
        </div>
      )}
    </header>
  );
}
