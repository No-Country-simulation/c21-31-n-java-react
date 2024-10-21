import { useState } from "react";
import ComponentInputCard from "./cardCreate";

import "./feed.css";
import BarraAmigos from "./barra-amigos";
import Link from "next/link";

export default function Feed({ amigos }) {
  const llave = false;

  const publicaciones = [
    {
      titulo: "Publicación 1",
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Ezequiel",
        apellido: "Ramos",
        rol: "Desarrollador Backend",
      },
    },
    {
      titulo: "Publicación 2",
      descripcion:
        "Lorem Ipsum has been the industry's standard dummy text ever since.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Juan",
        apellido: "Lencina",
        rol: "Desarrollador Frontend",
      },
    },
    {
      titulo: "Publicación 3",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Publicación 4",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Publicación 5",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Publicación 6",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Publicación 7",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Publicación 8",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
  ];

  return (
    <div className="p-5 flex flex-col lg:flex-row lg:gap-8">
      {/* Contenedor de publicaciones (lado izquierdo) */}
      <div className="w-full lg:w-2/4 flex flex-col gap-5 mb-8 lg:mb-0">
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
                    <p className="font-bold">
                      {publicacion.usuario.nombre}{" "}
                      {publicacion.usuario.apellido}
                    </p>
                    <p className="text-sm text-gray-500">
                      {publicacion.usuario.rol}
                    </p>
                  </div>
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md mb-3">
                  Seguir
                </button>
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
            </div>

            {/* Mostrar componente de sugerencias después de cada 4 publicaciones */}
            {(index + 1) % 4 === 0 && (
              <div className="mt-5 barra-amigos-container hidden">
                <BarraAmigos amigos={amigos} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Componente de subir proyecto (lado derecho) */}
      <div className="w-full lg:w-2/4 flex justify-end order-last lg:order-none hidden lg:block">
        <div className="flex flex-col w-full md:items-center">
          <ComponentInputCard llave={llave} />
        </div>
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
