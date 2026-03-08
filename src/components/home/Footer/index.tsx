import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/assets/icons/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />

          <div className="flex gap-4 pl-6 text-xl text-gray-500 -mt-10">
            <a href="#" className="hover:text-pink-500 transition duration-300">
              <FaInstagram size={28} />
            </a>
            <a href="#" className="hover:text-blue-600 transition duration-300">
              <FaFacebook size={28} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold text-lg mb-4 text-gray-900">
            Links rápidos
          </p>

          <ul className="space-y-3 text-gray-600">
            <li>
              <a
                href="#"
                className="hover:text-indigo-600 transition duration-300"
              >
                Catálogo
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-indigo-600 transition duration-300"
              >
                Serviços
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-indigo-600 transition duration-300"
              >
                Orçamento
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-lg mb-4 text-gray-900">Contactos</p>

          <ul className="space-y-3 text-gray-600">
            <li>
              Telefone:{" "}
              <span className="text-indigo-600 font-medium">
                (11) 1234-5678
              </span>
            </li>

            <li>
              Email:{" "}
              <span className="text-indigo-600 font-medium">
                contato@empresa.com
              </span>
            </li>

            <li>
              Endereço:{" "}
              <span className="text-indigo-600 font-medium">
                Rua Exemplo, 123 - Cidade
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 text-center py-5 text-sm text-gray-500">
        © 2026 Todos os direitos reservados
      </div>
    </footer>
  );
}

export default Footer;
