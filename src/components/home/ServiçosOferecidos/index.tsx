"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaCheckSquare } from "react-icons/fa";

const services = [
  "HST (Higiene, Segurança e Trabalho) - consultoria e formações para ambientes mais seguros",
  "Recursos Humanos – recrutamento, gestão e apoio à capacitação de pessoal",
  "Contabilidade e Gestão Empresarial – controlo financeiro, fiscal e estratégico",
  "Serviços Jurídicos – assessoria e acompanhamento legal para empresas",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ServicosOferecidos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full px-4 py-40 pb-60 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full overflow-hidden rounded-lg"
        >
          <motion.div
            initial={shouldReduceMotion ? false : { scale: 1.06 }}
            whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          >
            <Image
              src="/assets/images/young-worker.jpg"
              alt="Serviços Oferecidos"
              width={800}
              height={600}
              className="h-[250px] w-full rounded-lg object-cover sm:h-[350px] md:h-[400px] lg:h-[450px]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="flex flex-col gap-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold text-black sm:text-3xl lg:text-4xl"
          >
            Serviços <span className="font-light">Oferecidos</span>
          </motion.h2>

          <motion.div variants={container} className="flex flex-col gap-4">
            {services.map((service) => (
              <motion.div
                key={service}
                variants={fadeUp}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="flex items-start gap-3 rounded-lg bg-indigo-900 p-3 shadow-md transition-all duration-300 hover:shadow-xl active:translate-y-0 sm:p-4"
              >
                <FaCheckSquare
                  className="mt-1 flex-shrink-0 text-white"
                  size={20}
                />
                <span className="text-sm text-white sm:text-base">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicosOferecidos;

