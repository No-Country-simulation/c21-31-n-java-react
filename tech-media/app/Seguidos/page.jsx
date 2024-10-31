"use client";
import Nav from "@/components/nav";
import { useUserStore } from "@/store";
import { useState } from "react";
import "./contactos.css";

export default function Seguidos() {
  const users = useUserStore((state) => state.contactos);
  const { removeContacto } = useUserStore();
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
    sugerencias.slice(0, 4).map(() => false)
  );
  const [searchTerm, setSearchTerm] = useState("");
  const setContactos = useUserStore((state) => state.setContactos);

  const manejarSeguir = (index, amigo) => {
    setSiguiendo((prevState) =>
      prevState.map((estado, i) => (i === index ? !estado : estado))
    );
    const isFollowing = users.some((user) => user.nombre === amigo.nombre);

    if (isFollowing) {
      removeContacto(amigo.nombre);
    } else {
      setContactos(amigo);
    }
  };

  // Filtrar usuarios en base al valor del input de búsqueda
  const filteredUsers = users.filter((user) =>
    user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center flex-col m-4 mt-24">
        <h1 className="text-[25px]">Seguidos</h1>
        <hr className="w-full max-w-[350px] border-b-2" />
      </div>
      <div className="flex items-center justify-center gap-2 m-4 flex-col md:flex-row container-buscador">
        <input
          type="text"
          placeholder="Buscar usuario seguido"
          className="w-[30%] bg-gray-200 p-2 rounded-[27px] outline-none buscador"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr />

      <main className="flex flex-col md:flex-row justify-center w-[80%] m-auto main-contactos">
        <div className="w-full md:w-[50%] bg-gray-200 m-4 p-4 rounded-lg">
          <h1 className="text-xl font-bold text-left mb-6 titles">
            Usuarios Seguidos
          </h1>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div
                key={index}
                className="flex relative items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg shadow-md container-user-chat"
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
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {user.rol} {user.profession}
                    </h4>
                  </div>
                </div>
                <svg
                  width="35px"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-25px] right-0 icon-delete"
                  onClick={() => removeContacto(user.nombre)}
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))
          ) : (
            <p>No se encontraron usuarios.</p>
          )}
        </div>
        <div className="w-full md:w-[50%] m-4 bg-gray-200 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-right mb-6 titles">
            Más sugerencias para ti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sugerencias.map((user, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img src={user.image} className="w-20 h-20 rounded-full mb-4" />
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
        </div>
      </main>
    </>
  );
}
