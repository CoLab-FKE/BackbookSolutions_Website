import { FaCheckSquare } from "react-icons/fa";

const features = [
  "Variedade e qualidade em peças industriais e automotivas",
  "Equipa experiente e multidisciplinar",
  "Soluções completas em um só lugar",
  "Compromisso com a eficiência e a transparência",
];

function AboutUsSection() {
  return (
    <div className="w-full py-30 md:py-0 px-15 rounded-md flex flex-col text-center bg-linear-to-b bg-primary-color min-h-screen justify-center">
      <h2 className="text-center text-3xl font-light md:text-4xl text-white mb-5 ">
        <strong className="font-bold">Quem </strong>Somos <strong className="font-bold"> e o </strong> Que Nos Move
      </h2>
      <p className="text-white max-w-4xl mb-12 mx-auto font-light">
        A 2BS Bacbook Solutions, Lda é uma empresa moçambicana especializada na
        venda de peças sobressalentes e na prestação de serviços técnicos e
        empresariais. Atendemos clientes de diversos ramos com produtos de alta
        qualidade e serviços que fortalecem a gestão e o desempenho das
        organizações.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 shadow-md"
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
