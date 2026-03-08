import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const heroImages = [
  {
    id: 1,
    src: "/assets/images/hero/photo-1.jpg",
  },
  {
    id: 2,
    src: "/assets/images/hero/photo-2.jpg",
  },
  {
    id: 3,
    src: "/assets/images/hero/photo-3.jpg",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      {/* Titulo e Descrição */}
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl max-w-4xl text-center">
          Soluções Industriais e Empresariais{" "}
          <span className="text-primary-color">
            para o Crescimento do Seu Negócio
          </span>
        </h1>
        <p className="font-light max-w-4xl text-center">
          Na 2BS Bacbook Solutions, combinamos a venda de peças sobressalentes
          com serviços de consultoria e gestão, oferecendo qualidade, confiança
          e eficiência para empresas de diferentes setores.
        </p>
      </section>

      {/* Buttons */}
      <section className="flex items-center gap-4 flex-col md:flex-row">
        <Button>Solicitar orçamento</Button>

        <Button variant="outline" className="flex items-center gap-3">
          Nossos serviços <IoArrowDownCircleOutline size={19} />
        </Button>
      </section>

      {/* Cards */}
      <section className="flex gap-8 relative">
        {heroImages.map((img, i) => (
          <Image
            key={img.id}
            src={img.src}
            alt="Hero image"
            width={512}
            height={752}
            // Usamos style para o cálculo dinâmico
            style={{ marginTop: `${i * 40}px` }}
            className="rounded-md object-cover w-70 object-center hover:scale-105 transform-fill duration-150"
          />
        ))}
      </section>
    </div>
  );
}
