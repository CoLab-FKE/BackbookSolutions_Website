"use client";

import ProductList from "@/components/layout/ProductList";
import Button from "@/components/ui/Button";
import { shopItems } from "@/store/shopItems";
import { motion, useReducedMotion } from "framer-motion";
import { BsArrowDownRightSquare } from "react-icons/bs";

export default function ShopSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  };
  return (
    <section className="mx-auto flex min-h-screen w-[90%] flex-col justify-center gap-15 py-40">
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <h2 className="text-3xl font-light md:text-4xl">
          <strong className="font-bold">Peças sobressalentes</strong> de alta
          qualidade
        </h2>

        <Button className="group w-fit bg-transparent text-base underline hover:bg-transparent text-primary-color flex items-center gap-4">
          Ver tudo{" "}
          <BsArrowDownRightSquare
            size={18}
            className="transition-all duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
          />
        </Button>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.05 }}
      >
        <ProductList products={shopItems} />
      </motion.div>
    </section>
  );
}
