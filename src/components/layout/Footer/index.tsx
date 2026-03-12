"use client";
import { getCurrentYear } from "@/utils/getCurrentYear";
import Image from "next/image";
import React, { useCallback } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onNavClick = useCallback(
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToId(id);
      window.history.replaceState(null, "", `#${id}`);
    },
    [scrollToId],
  );
  return (
    <div className="mt-20 bg-gray-50/50  w-full flex flex-col justify-between h-full gap-10">
      <div className="w-full p-10 py-10 flex flex-col md:flex-row gap-8 justify-between">
        <section className="flex flex-col gap-5">
          <a
            href="#inicio"
            onClick={onNavClick("inicio")}
            aria-label="Ir para o início"
          >
            <Image
              src="/assets/icons/logo.png"
              alt="Backbook Solutions"
              width={180}
              height={60}
              className="w-32"
              priority
            />
          </a>
          <div className="flex gap-1 p-0 text-primary-color">
            <FaSquareFacebook size={20} />
            <FaInstagram size={20} />
          </div>
        </section>
        <section className="flex flex-col text-primary-color md:flex-row gap-8 md:gap-25">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Links rápidos</h3>
            <ul className="list-none underline flex flex-col gap-1">
              <li>
                <a href="#inicio" onClick={onNavClick("inicio")}>
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={onNavClick("sobre")}>
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#produtos" onClick={onNavClick("produtos")}>
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={onNavClick("servicos")}>
                  Serviços
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Contactos</h3>
            <ul className="list-none flex flex-col gap-1">
              <li>
                <strong className="font-medium">Telefone:</strong> +258 DD DDD
                DDDD
              </li>
              <li>
                <strong className="font-medium">Email:</strong>{" "}
                email@example.co.mz
              </li>
              <li>
                <strong className="font-medium">Localização:</strong> Av. XYZ,
                R574
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="px-10 text-primary-color pb-4 text-sm font-light flex justify-between">
        <p className="">
          Copyright @ 2BS Backbook Solutions, {getCurrentYear()}
        </p>
        <p>Desenvolvido pela Collab - FKE</p>
      </section>
    </div>
  );
}
