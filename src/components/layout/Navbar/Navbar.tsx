"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre Nós" },
  { id: "produtos", label: "Produtos" },
  { id: "servicos", label: "Serviços" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onNavClick = useCallback(
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToId(id);
      setOpen(false);
      window.history.replaceState(null, "", `#${id}`);
    },
    [scrollToId],
  );

  useEffect(() =>{
    let lastScrollY = window.scrollY
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      if(currentScrollY > lastScrollY && currentScrollY > 100){
        setIsVisible(false)
      }else{
        setIsVisible(true)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [])

  return (
    <header className={`w-full text-black bg-white z-50 fixed top-0 transition-all duration-200 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between px-6 lg:px-12 h-16 lg:h-20">
        <a href="#inicio" onClick={onNavClick("inicio")} aria-label="Ir para o início">
          <Image
            src="/assets/icons/logo.png"
            alt="Backbook Solutions"
            width={180}
            height={60}
            className="w-32 md:w-40 lg:w-48 h-auto"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8 text-base lg:text-md text-slate-800 font-medium">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={onNavClick(item.id)} className="relative group">
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-700 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <Button onClick={() => scrollToId("contacto")}>Solicitar orçamento</Button>
        </div>

        <Button
          className="md:hidden hover:bg-none hover:bg-transparent text-3xl text-slate-800 border-none outline-none bg-transparent"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </Button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 text-base text-slate-800 font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onNavClick(item.id)}
              className="py-2 border-b border-gray-200 active:text-blue-700"
            >
              {item.label}
            </a>
          ))}

          <Button
            onClick={() => {
              scrollToId("contacto");
              setOpen(false);
              window.history.replaceState(null, "", "#contacto");
            }}
          >
            Solicitar orçamento
          </Button>
        </div>
      )}
    </header>
  );
}
