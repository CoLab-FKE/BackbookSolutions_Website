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
    <section className="w-full py-16 px-4 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <Image
            src="/assets/images/young-worker.jpg"
            alt="Serviços Oferecidos"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl text-black ">
            <strong className="font-bold">Serviços</strong>
            <span className="font-light"> Oferecidos</span>
          </h2>

          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-indigo-900 rounded-lg p-4 shadow-md 
                           hover:shadow-xl hover:translate-y-1 transition-all duration-300"
              >
                <FaCheckSquare className="text-white mt-1" size={20} />
                <span className="text-white">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicosOferecidos;
