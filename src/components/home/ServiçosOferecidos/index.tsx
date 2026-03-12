import Image from "next/image";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const services = [
  "HST (Higiene, Segurança e Trabalho) - consultoria e formações para ambientes mais seguros",
  "Recursos Humanos – recrutamento, gestão e apoio à capacitação de pessoal",
  "Contabilidade e Gestão Empresarial – controlo financeiro, fiscal e estratégico",
  "Serviços Jurídicos – assessoria e acompanhamento legal para empresas",
];

function ServicosOferecidos() {
  return (
    <section className="w-full py-40 pb-60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Imagem */}
        <div className="w-full">
          <Image
            src="/assets/images/young-worker.jpg"
            alt="Serviços Oferecidos"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold">
            Serviços <span className="font-light">Oferecidos</span>
          </h2>

          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-indigo-900 rounded-lg p-3 sm:p-4 shadow-md 
                           hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0"
              >
                <FaCheckSquare className="text-white mt-1 flex-shrink-0" size={20} />
                <span className="text-white text-sm sm:text-base">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicosOferecidos;