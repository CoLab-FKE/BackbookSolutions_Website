"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white z-11">
      <div className="flex items-center justify-between px-6 lg:px-12 h-16 lg:h-20">
        <Image
          src="/assets/icons/logo.png"
          alt="Backbook Solutions"
          width={180}
          height={60}
          className="w-32 md:w-40 lg:w-48 h-auto"
        />
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8 text-base lg:text-md text-slate-800 font-medium">
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

          <Button className="">
            Solicitar orçamento
          </Button>
        </div>

        <Button
          className="md:hidden text-3xl text-slate-800 border-none outline-none bg-transparent"
          onClick={() => setOpen(!open)}
        >
          ☰
        </Button>
      </div>

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

          <Button>Solicitar orçamento</Button>
        </div>
      )}
    </header>
  );
}
