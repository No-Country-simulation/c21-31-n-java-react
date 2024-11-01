import { useEffect, useState } from "react";
import ComponentInputCard from "./cardCreate";

import "./feed.css";
import BarraAmigos from "./barra-amigos";
import Link from "next/link";
import { useUserStore } from "@/store";

export default function Feed({ amigos }) {
  const llave = false;
  const publicaciones = useUserStore((state) => state.proyectos);
  const agregarComentario = useUserStore((state) => state.agregarComentario);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    console.log(publicaciones);
  }, [publicaciones]);

  return (
    <div className="p-5 flex flex-col lg:flex-row lg:gap-8">
      {/* Componente de subir proyecto (lado derecho) */}
      <div className="w-full lg:w-2/4 flex justify-end order-last lg:order-none hidden lg:block">
        <div className="flex flex-col w-full md:items-center">
          <ComponentInputCard llave={llave} />
        </div>
      </div>
      {/* Contenedor de publicaciones (lado izquierdo) */}
      <div className="w-full lg:w-2/4 flex flex-col gap-5 mt-12 mb-8 lg:mb-0">
        {publicaciones.map((publicacion, index) => (
          <div key={index}>
            <div className="bg-gray-200 p-5 rounded-md w-full">
              {/* Información del usuario */}
              <div className="flex justify-between items-center mb-3 container-datos-user-publicacion">
                <div className="flex items-center mb-3">
                  <div className="bg-gray-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                    {publicacion.usuario.nombre[0]}
                  </div>
                  <div className="ml-2">
                    <p className="font-bold">{publicacion.usuario.nombre}</p>
                    <p className="text-sm text-gray-500">
                      {publicacion.usuario.rol}
                    </p>
                  </div>
                </div>
                {/* {publicacion.usuario.nombre !== "EzeProgramacion" ? (
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md mb-3">
            Seguir
          </button>
        ) : null} */}
              </div>

              {/* Título y Descripción */}
              <h2 className="text-xl font-bold">{publicacion.titulo}</h2>
              <p className="text-gray-700 mb-3">{publicacion.descripcion}</p>

              {/* Imagen */}
              <div className="bg-gray-300 h-48 w-full rounded-md overflow-hidden">
                <img
                  src={publicacion.imagen}
                  alt="Imagen del proyecto"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Comentarios */}
              <div className="mt-3">
                <h3 className="font-bold text-lg">Comentarios:</h3>
                {publicacion.comentarios.length > 0 ? (
                  publicacion.comentarios.map((comentario, i) => (
                    <p key={i} className="text-gray-600">
                      <strong>{comentario.usuario.name}: </strong>{" "}
                      {comentario.texto}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-500">No hay comentarios aún.</p>
                )}
              </div>

              {/* Formulario para agregar comentario */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const comentario = e.target.elements.comentario.value;
                  if (comentario) {
                    agregarComentario(index, comentario, user); // Añade el comentario al estado global
                    e.target.reset(); // Limpia el formulario
                  }
                }}
                className="mt-3"
              >
                <input
                  type="text"
                  name="comentario"
                  placeholder="Escribe un comentario..."
                  className="border rounded-md p-2 w-full mb-2 outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-blue-500 text-white p-2 gap-2 rounded-md overflow-hidden transition-transform duration-200 hover:scale-95 group"
                >
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="transition-transform duration-300 group-hover:rotate-[50deg] animate-hover-move"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                  Comentar
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>

      {/* Barra inferior para móviles */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-500 p-4 flex justify-center lg:hidden">
        <Link href="/Crear-publicacion">
          <button
            onClick={() => {
              // Aquí manejas la redirección
            }}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl text-blue-500"
          >
            +
          </button>
        </Link>
      </div>
    </div>
  );
}
