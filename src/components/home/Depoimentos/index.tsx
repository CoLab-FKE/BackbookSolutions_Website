import React from "react";

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

function Depoimentos() {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Depoimentos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((d, index) => (
            <div
              key={index}
              className="bg-indigo-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-white text-base sm:text-lg mb-4">
                &ldquo;{d.texto}&rdquo;
              </p>
              <span className="block text-gray-300 font-semibold text-sm sm:text-base">
                - {d.autor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
