import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center mt-6">
      <div className="w-full max-w-7xl  rounded-xl px-8 py-4 flex items-center justify-between">
        
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Backbook Solutions"
            width={120}
            height={40}
          />
        </div>

        <nav className="flex items-center gap-8 text-sm text-gray-700">
          <a href="#" className="hover:text-black transition">
            Início
          </a>
          <a href="#" className="hover:text-black transition">
            Sobre Nós
          </a>
          <a href="#" className="hover:text-black transition">
            Produtos
          </a>
          <a href="#" className="hover:text-black transition">
            Serviços
          </a>
          <a href="#" className="hover:text-black transition">
            Contacto
          </a>
        </nav>

        <button className="bg-blue-900 text-white text-sm px-5 py-2 rounded-lg hover:bg-blue-800 transition">
          Solicitar orçamento
        </button>
      </div>
    </header>
  );
}