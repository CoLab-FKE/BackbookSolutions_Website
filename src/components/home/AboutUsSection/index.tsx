"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaCheckSquare } from "react-icons/fa";

const easeOut = [0.16, 1, 0.3, 1] as const;

const features = [
  "Variedade e qualidade em peças industriais e automotivas",
  "Equipa experiente e multidisciplinar",
  "Soluções completas em um só lugar",
  "Compromisso com a eficiência e a transparência",
];

function AboutUsSection() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  };

  return (
    <motion.section
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
      className="flex min-h-screen w-full flex-col justify-center rounded-md bg-linear-to-b bg-primary-color px-4 py-30 text-center sm:px-8 lg:px-15 md:py-0"
    >
      <motion.h2
        variants={fadeUp}
        className="mb-5 text-center text-3xl font-light text-white md:text-4xl"
      >
        <strong className="font-bold">Quem </strong>Somos{" "}
        <strong className="font-bold"> e o </strong> Que Nos Move
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mx-auto mb-12 max-w-4xl font-light text-white"
      >
        A 2BS Bacbook Solutions, Lda é uma empresa moçambicana especializada na
        venda de peças sobressalentes e na prestação de serviços técnicos e
        empresariais. Atendemos clientes de diversos ramos com produtos de alta
        qualidade e serviços que fortalecem a gestão e o desempenho das
        organizações.
      </motion.p>

      <motion.div
        variants={container}
        className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-3"
      >
        {features.slice(0, 3).map((feature) => (
          <motion.div
            key={feature}
            variants={fadeUp}
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="inline-flex items-center gap-2 rounded-lg bg-white p-3 shadow-md sm:gap-3"
          >
            <FaCheckSquare className="text-indigo-900" size={20} />
            <span className="text-left text-gray-800">{feature}</span>
          </motion.div>
        ))}

        <div className="sm:col-span-3 flex justify-center">
          <motion.div
            variants={fadeUp}
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="inline-flex items-center gap-2 rounded-lg bg-white p-3 shadow-md sm:gap-3 sm:p-4"
          >
            <FaCheckSquare className="text-indigo-900" size={20} />
            <span className="text-left text-gray-800">{features[3]}</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AboutUsSection;
