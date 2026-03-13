"use client";

import { motion, useReducedMotion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

const depoimentos = [
  {
    texto:
      "Com a 2BS, conseguimos modernizar nossa frota e melhorar a gestão interna. Atendimento excelente!",
    autor: "Cliente Industrial",
  },
  {
    texto:
      "A 2BS trouxe soluções inovadoras para nossa empresa, com profissionalismo e dedicação.",
    autor: "Cliente Comercial",
  },
  {
    texto:
      "Excelente suporte e acompanhamento. Recomendo os serviços da 2BS sem hesitar!",
    autor: "Cliente Executivo",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
};

function Depoimentos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="flex w-full min-h-screen items-center justify-center bg-gray-50 px-4 py-16">
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="mx-auto max-w-7xl"
      >
        <motion.h2
          variants={fadeUp}
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
        >
          Depoimentos
        </motion.h2>

        <motion.div
          variants={container}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {depoimentos.map((d) => (
            <motion.div
              key={d.autor}
              variants={fadeUp}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="rounded-xl bg-indigo-900 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <p className="mb-4 text-base text-white sm:text-lg">
                &ldquo;{d.texto}&rdquo;
              </p>
              <span className="block text-sm font-semibold text-gray-300 sm:text-base">
                - {d.autor}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Depoimentos;
