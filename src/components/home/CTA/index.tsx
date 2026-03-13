"use client";

import Button from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative my-[7.5rem] flex h-[70vh] min-h-[32rem] w-full flex-col justify-center overflow-hidden rounded-md">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={shouldReduceMotion ? false : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/assets/images/young-worker.jpg"
          alt="Worker"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute inset-0 bg-black/60"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 max-w-7xl px-6 py-24 sm:px-10"
      >
        <div className="flex max-w-3xl flex-col gap-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Pronto para elevar o desempenho da sua empresa com soluções
            completas?
          </h2>

          <p className="text-md font-light text-white/80">
            Solicite um orçamento e receba suporte para escolher as melhores
            peças e serviços para a sua operação.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button>Solicitar orçamento</Button>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Falar connosco
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

