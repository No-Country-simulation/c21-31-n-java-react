import React from 'react';

import BarraAmigos from "./barra-amigos";
import { useUserStore } from '@/store';

export default function Publicaciones({ amigos }) {
  // Array harcodeado de publicaciones
  const publicaciones = useUserStore((state) => state.publicacion);
/*   const publicaciones = [
    {
      titulo: "Proyecto 1",
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imagen: "https://via.placeholder.com/1015x195",
      usuario: {
        nombre: "Ezequiel",
        apellido: "Ramos",
        rol: "Desarrollador Backend",
      },
    },
    {
      titulo: "Proyecto 2",
      descripcion:
        "Lorem Ipsum has been the industry's standard dummy text ever since.",
      imagen: "https://via.placeholder.com/1015x195",
      usuario: {
        nombre: "Juan",
        apellido: "Lencina",
        rol: "Desarrollador Frontend",
      },
    },
    {
      titulo: "Proyecto 3",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/1015x195",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Proyecto 4",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/1015x195",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Proyecto 5",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/1015x195",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Proyecto 6",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/1015x195",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Proyecto 7",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/1015x195",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Proyecto 8",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/1015x195",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
  ]; */

  return (
    <div className="p-5">
      {publicaciones.map((publicacion, index) => (
        <React.Fragment key={index}>
          <div className="bg-gray-200 p-5 rounded-md shadow-md mt-14 mb-5">
            {/* Información del usuario */}
            <div className="flex justify-between items-center mb-3 container-datos-user-publicacion">
              <div className="flex items-center">
                <div className="bg-gray-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                  {publicacion.usuario.nombre[0]}
                </div>
                <div className="ml-2">
                  <p className="font-bold">
                    {publicacion.usuario.nombre} {publicacion.usuario.apellido}
                  </p>
                  <p className="text-sm text-gray-500">
                    {publicacion.usuario.rol}
                  </p>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
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
            <div className="mt-5 mb-10 barra-amigos-container">
              <BarraAmigos amigos={amigos} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
