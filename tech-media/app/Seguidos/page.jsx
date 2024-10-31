"use client";
import Nav from "@/components/nav";
import Link from "next/link";

import "./contactos.css";
import { useUserStore } from "@/store";
import { useState } from "react";

export default function Seguidos() {
  const users = useUserStore((state) => state.contactos);
  const sugerencias = [
    {
      nombre: "Franco Colapinto",
      profession: "Desarrollo Web",
      skills: "HTML | CSS | JS | JAVA | POSTMAN",
      image: "https://lombreach.es/wp-content/uploads/usuario-sin-foto.png",
    },
    {
      nombre: "Juanma Lencina",
      profession: "Desarrollo Web",
      skills: "HTML | CSS | JS | JAVA | POSTMAN",
      image: "https://lombreach.es/wp-content/uploads/usuario-sin-foto.png",
    },
    {
      nombre: "Giovany Salcedo",
      profession: "Desarrollo Web",
      skills: "HTML | CSS | JS | JAVA | POSTMAN",
      image: "https://lombreach.es/wp-content/uploads/usuario-sin-foto.png",
    },
    {
      nombre: "Mateo Rueda Gomez",
      profession: "Desarrollo Web",
      skills: "HTML | CSS | JS | JAVA | POSTMAN",
      image: "https://lombreach.es/wp-content/uploads/usuario-sin-foto.png",
    },
    {
      nombre: "Sebastian Huertas",
      profession: "Desarrollo Web",
      skills: "HTML | CSS | JS | JAVA | POSTMAN",
      image: "https://lombreach.es/wp-content/uploads/usuario-sin-foto.png",
    },
    {
      nombre: "Lionel Messi",
      profession: "Desarrollo Web",
      skills: "HTML | CSS | JS | JAVA | POSTMAN",
      image: "https://lombreach.es/wp-content/uploads/usuario-sin-foto.png",
    },
  ];

  const [siguiendo, setSiguiendo] = useState(
    sugerencias.slice(0, 4).map(() => false) // Inicializamos el estado con "false" para cada amigo
  );

  const setContactos = useUserStore((state) => state.setContactos);
  // Función para manejar el clic del botón
  const manejarSeguir = (index, amigo) => {
    // Alterna el estado de seguir/dejar de seguir
    setSiguiendo((prevState) =>
      prevState.map((estado, i) => (i === index ? !estado : estado))
    );
    if (!siguiendo[index]) {
      setContactos(amigo);
    }
  };

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center flex-col m-4 mt-20">
        <h1 className="text-[25px]">Seguidos</h1>
        <hr className="w-full max-w-[350px] border-b-2" />
      </div>
      <div className="flex items-center justify-between m-4 flex-col md:flex-row">
        <div>
          <h3>30 Seguidos</h3>
        </div>
        <div className="w-full max-w-[100px] flex items-center justify-between mt-2 md:mt-0">
          <svg
            width="35px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* <svg
            width="35px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12H18M3 6H21M9 18H15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
        </div>
      </div>
      <hr />

      <main className="flex flex-col md:flex-row justify-center w-[80%] m-auto main-contactos">
        <div className="w-full md:w-[50%] bg-gray-200 m-4 p-4 rounded-lg">
          <h1 className="text-xl font-bold text-lef mb-6">Usuarios Seguidos</h1>
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg shadow-md container-user-chat"
            >
              <div className="flex items-center container-datos-user">
                <img
                  src={user.image}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {user.nombre}
                    </h3>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {user.apellido}
                    </h3>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {user.rol} {user.profession}
                  </h4>
                </div>
              </div>
              <div>
                {/* <Link href="">
                  <svg
                    width="30px"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H9.68375C9.0597 18 8.74767 18 8.44921 18.0613C8.18443 18.1156 7.9282 18.2055 7.68749 18.3285C7.41617 18.4671 7.17252 18.662 6.68521 19.0518L4.29976 20.9602C3.88367 21.2931 3.67563 21.4595 3.50054 21.4597C3.34827 21.4599 3.20422 21.3906 3.10923 21.2716C3 21.1348 3 20.8684 3 20.3355V7.8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-[50%] m-4 bg-gray-200 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-right mb-6">
            Más sugerencias para ti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sugerencias.map((user, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={user.image}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {user.nombre}
                </h3>
                <h4 className="text-sm font-semibold text-gray-800">
                  {user.profession}
                </h4>
                <button
                  className={`${
                    siguiendo[index] ? "bg-red-500" : "bg-blue-500"
                  } text-white p-4 py-1 rounded-md m-2`}
                  onClick={() => manejarSeguir(index, user)}
                >
                  {siguiendo[index] ? "Dejar de Seguir" : "Seguir"}
                </button>
              </div>
            ))}
          </div>
          {/* <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
              DISEÑO WEB
            </span>
            <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
              REACT
            </span>
            <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
              FRONTEND
            </span>
            <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
              BACKEND
            </span>
          </div> */}
        </div>
      </main>
    </>
  );
}
