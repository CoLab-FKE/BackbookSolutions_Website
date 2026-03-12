import Button from "@/components/ui/Button";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative rounded-md w-full my-30 h-[70vh] overflow-hidden flex  justify-center flex-col">
      {/* Background image */}
      <Image
        src="/assets/images/young-worker.jpg"
        alt="Worker"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-10 md:px-10 py-24">
        <div className="max-w-3xl flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Pronto para elevar o desempenho da sua empresa com soluções
            completas?
          </h2>

          <p className="text-white/80 font-light text-md">
            Solicite um orçamento e receba suporte para escolher as melhores
            peças e serviços para a sua operação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button>Solicitar orçamento</Button>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Falar connosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
