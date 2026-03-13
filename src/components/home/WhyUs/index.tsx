"use client";

import { reasonsToChooseUs } from "@/store/chooseUsItems";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhyUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full px-4 pb-44 sm:px-6 sm:pb-52 lg:px-8 my-[7.5rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[55%] max-w-[45rem] select-none opacity-60 sm:opacity-80 lg:opacity-90"
      >
        <div className="absolute inset-0 bg-[url('/assets/images/Lines-BG.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-background/20 to-background/70" />
      </div>

      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.header
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={container}
          className="flex flex-col gap-4"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold text-black sm:text-3xl lg:text-4xl"
          >
            Por que <span className="font-light">nos escolher</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="max-w-prose text-black/70">
            Juntamos peças sobressalentes de qualidade com atendimento próximo e
            suporte técnico para manter a sua operação a funcionar sem surpresas.
          </motion.p>

          <motion.div variants={fadeUp} className="overflow-hidden rounded-xl">
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 1.06, y: 10 }}
              whileInView={shouldReduceMotion ? undefined : { scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              className="relative aspect-16/10 w-full h-26"
            >
              <Image
                src="/assets/images/WhyUs/Photo.jpeg"
                alt="Foto de uma escavadora"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </motion.header>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {reasonsToChooseUs.map((reason) => (
            <motion.div
              key={reason.id}
              variants={fadeUp}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="rounded-xl border border-white/10 bg-linear-to-b from-primary-color to-indigo-900 p-5 text-white shadow-md sm:p-6"
            >
              <div className="flex items-start gap-3">
                <FaCheckSquare className="mt-1 shrink-0 text-white" size={20} />
                <p className="text-sm leading-relaxed sm:text-base">
                  {reason.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 z-20 select-none overflow-hidden md:-bottom-[12.5rem]"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative h-[16.25rem] sm:h-80 md:h-[28.75rem]"
        >
          <motion.div
            initial={shouldReduceMotion ? false : { x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/assets/images/caterpilar-6-SF.png"
              alt=""
              width={1080}
              height={250}
              className="absolute bottom-0 left-0 h-full w-auto translate-x-[-35%] opacity-95"
            />
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { x: 24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            <Image
              src="/assets/images/caterpilar-6-SF.png"
              alt=""
              width={1080}
              height={250}
              className="absolute bottom-0 right-0 h-full w-auto translate-x-[35%] scale-x-[-1] opacity-95"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

