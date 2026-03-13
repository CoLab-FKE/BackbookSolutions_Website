"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { useCallback } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const heroImages = [
  { id: 1, src: "/assets/images/hero/photo-1.jpg" },
  { id: 2, src: "/assets/images/hero/photo-2.jpg" },
  { id: 3, src: "/assets/images/hero/photo-3.jpg" },
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onNavClick = useCallback(
    (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      scrollToId(id);
      window.history.replaceState(null, "", `#${id}`);
    },
    [scrollToId],
  );

  return (
    <div className="z-10 mt-28 flex flex-col items-center justify-center gap-8 overflow-x-hidden px-4 sm:mt-32 sm:px-8 md:mt-40 md:px-10 overflow-hidden">
      <section className="flex w-full max-w-4xl flex-col gap-4">
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="max-w-4xl text-center text-3xl font-bold md:text-4xl"
        >
          Soluções Industriais e Empresariais{" "}
          <span className="text-primary-color">
            para o Crescimento do Seu Negócio
          </span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.05 }}
          className="max-w-4xl text-center text-sm font-light md:text-base"
        >
          Na 2BS Bacbook Solutions, combinamos a venda de peças sobressalentes
          com serviços de consultoria e gestão, oferecendo qualidade, confiança
          e eficiência para empresas de diferentes setores.
        </motion.p>
      </section>

      <section className="flex flex-col items-center gap-4 md:flex-row">
        <Button>Solicitar orçamento</Button>

        <Button
          variant="outline"
          className="flex items-center gap-3 hover:bg-primary-color/10"
          onClick={onNavClick("servicos")}
        >
          Nossos serviços <IoArrowDownCircleOutline size={19} />
        </Button>
      </section>

      <section className="w-full max-w-5xl">
        <div className="relative mx-auto h-88 w-full overflow-hidden sm:h-auto sm:overflow-visible sm:grid sm:grid-cols-3 sm:items-end sm:gap-8">
          {heroImages.map((img, i) => {
            const mobileLayout =
              i === 0
                ? "left-1/2 top-4 z-20 w-[62%] -translate-x-1/2 rotate-0"
                : i === 1
                  ? "left-0 top-12 z-10 w-[46%] -translate-x-[10%] rotate-[-10deg]"
                  : "right-0 top-12 z-10 w-[46%] translate-x-[10%] rotate-[10deg]";

            const desktopOffset =
              i === 0 ? "sm:translate-y-4" : i === 2 ? "sm:translate-y-8" : "";

            return (
              <motion.div
                key={img.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 24, scale: 0.985 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 18,
                  delay: i * 0.06,
                }}
                className={`absolute ${mobileLayout} ${desktopOffset} sm:static sm:w-full sm:rotate-0 sm:translate-x-0`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-black/5">
                  <Image
                    src={img.src}
                    alt={`Hero image ${img.id}`}
                    fill
                    priority={i === 0}
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 62vw, (max-width: 1024px) 30vw, 340px"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
