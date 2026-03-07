import { FaCheckSquare } from "react-icons/fa";

const features = [
  "Variedade e qualidade em peças industriais e automotivas",
  "Equipa experiente e multidisciplinar",
  "Soluções completas em um só lugar",
  "Compromisso com a eficiência e a transparência",
];

function AboutUsSection() {
  return (
    <div className="w-full flex flex-col text-center bg-gradient-to-b from-indigo-900 to-gray-200 min-h-screen pt-10 pb-16 px-12">
      <h2 className="text-3xl font-bold mb-4 text-white">
        <strong>Quem </strong>Somos <strong> e o </strong> Que Nos Move
      </h2>
      <p className="text-white max-w-2xl mb-12 mx-auto">
        A 2BS Bacbook Solutions, Lda é uma empresa moçambicana especializada na
        venda de peças sobressalentes e na prestação de serviços técnicos e
        empresariais. Atendemos clientes de diversos ramos com produtos de alta
        qualidade e serviços que fortalecem a gestão e o desempenho das
        organizações.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-2 sm:p-4 shadow-md"
          >
            <FaCheckSquare className="text-indigo-900" size={20} />
            <span className="text-gray-800 text-left">{feature}</span>
          </div>
        ))}
        <div className="sm:col-span-3 flex justify-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-2 sm:p-4 shadow-md">
            <FaCheckSquare className="text-indigo-900" size={20} />
            <span className="text-gray-800 text-left">{features[3]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
