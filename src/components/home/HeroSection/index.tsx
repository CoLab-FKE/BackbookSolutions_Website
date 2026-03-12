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
    <div className="mt-40 z-10 flex flex-col items-center justify-center gap-8 overflow-x-hidden px-4">
      <section className="flex w-full max-w-4xl flex-col gap-4">
        <h1 className="max-w-4xl text-center text-3xl font-bold md:text-4xl">
          Soluções Industriais e Empresariais{" "}
          <span className="text-primary-color">
            para o Crescimento do Seu Negócio
          </span>
        </h1>
        <p className="max-w-4xl text-center text-sm font-light md:text-base">
          Na 2BS Bacbook Solutions, combinamos a venda de peças sobressalentes
          com serviços de consultoria e gestão, oferecendo qualidade,
          confiança e eficiência para empresas de diferentes setores.
        </p>
      </section>

      <section className="flex items-center gap-4 flex-col md:flex-row">
        <Button>Solicitar orçamento</Button>

        <Button variant="outline" className="flex items-center gap-3 hover:bg-primary-color/10">
          Nossos serviços <IoArrowDownCircleOutline size={19} />
        </Button>
      </section>

      <section className="relative flex h-80 w-full items-center justify-center overflow-visible sm:h-auto sm:overflow-visible gap-8">
        {heroImages.map((img, i) => {
          const mobilePosition =
            i === 0
              ? "left-1/2 z-20 w-[58%] -translate-x-1/2"
              : i === 1
                ? "left-0 z-10 w-[42%] -translate-x-[8%] rotate-[-8deg]"
                : "right-0 z-10 w-[42%] translate-x-[8%] rotate-[8deg]";

          const desktopPosition =
            i === 0
              ? "sm:relative sm:left-auto sm:right-auto sm:translate-x-0 sm:rotate-0 sm:mt-5"
              : i === 1
                ? "sm:relative sm:left-auto sm:right-auto sm:translate-x-0 sm:rotate-0 sm:mt-15"
                : "sm:relative sm:left-auto sm:right-auto sm:translate-x-0 sm:rotate-0 sm:mt-25";

          return (
            <Image
              key={img.id}
              src={img.src}
              alt={`Hero image ${img.id}`}
              width={512}
              height={852}
              className={`absolute h-auto rounded-md object-cover object-center transition-transform duration-150 ${mobilePosition} ${desktopPosition} sm:w-full sm:max-w-45 md:max-w-55 lg:max-w-65 h-100`}
              sizes="(max-width: 640px) 58vw, (max-width: 768px) 28vw, 260px"
            />
          );
        })}
      </section>
    </div>
  );
}
