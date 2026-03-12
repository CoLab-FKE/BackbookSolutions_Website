import { reasonsToChooseUs } from "@/store/chooseUsItems";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";

export default function WhyUs() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 my-30 pb-44 sm:pb-52">
      {/* Right-side faded background lines */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-y-0 right-0 w-[55%] max-w-180 z-0 opacity-60 sm:opacity-80 lg:opacity-90"
      >
        <div className="absolute inset-0 bg-[url('/assets/images/Lines-BG.png')] bg-no-repeat bg-cover bg-center" />
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-background/20 to-background/70" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <header className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold">
            Por que <span className="font-light">nos escolher</span>
          </h2>
          <p className="text-black/70 max-w-prose">
            Juntamos peças sobressalentes de qualidade com atendimento próximo e suporte técnico para
            manter a sua operação a funcionar sem surpresas.
          </p>
          <div className="overflow-hidden rounded-md">
            <Image
              src="/assets/images/WhyUs/Photo.jpeg"
              alt="Foto de uma escavadora"
              width={450}
              height={250}
              className="w-full h-40 sm:h-44 md:h-48 duration-200 transition-transform hover:scale-105 rounded-md object-cover object-center"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasonsToChooseUs.map((reason) => (
            <div
              key={reason.id}
              className="bg-linear-to-b from-primary-color to-indigo-900 text-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0 border border-white/10"
            >
              <div className="flex items-start gap-3">
                <FaCheckSquare className="text-white mt-1 shrink-0" size={20} />
                <p className="text-sm sm:text-base leading-relaxed">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative overflow images */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-x-0 md:-bottom-50  overflow-hidden z-20"
      >
        <div className="relative h-65 sm:h-80 md:h-115">
          <Image
            src="/assets/images/caterpilar-6-SF.png"
            alt=""
            width={1080}
            height={250}
            className="absolute bottom-0 left-0 h-full w-auto translate-x-[-35%] opacity-95"
          />
          <Image
            src="/assets/images/caterpilar-6-SF.png"
            alt=""
            width={1080}
            height={250}
            className="absolute bottom-0 right-0 h-full w-auto translate-x-[35%] opacity-95 scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
}
