import Nav from "@/components/nav";
import Link from "next/link";

import "./edit-publicaciones.css";

const publicaciones = [
  {
    descripcion: "Descripción de la publicación 1",
    imagen: "https://via.placeholder.com/400x200?",
  },
  {
    descripcion: "Descripción de la publicación 2",
    imagen: "https://via.placeholder.com/400x200?",
  },
  {
    descripcion: "Descripción de la publicación 3",
    imagen: "https://via.placeholder.com/400x200?",
  },
];

export default function EditPublicaciones() {
  return (
    <>
      <Nav />
      <div className="mt-20 p-4">
        <div className="flex flex-col w-[75%] m-auto bg-gray-100 p-4 rounded-lg shadow-md container-edit-project h-[500px] overflow-y-scroll gap-6">
          {publicaciones.map((publicacion, index) => (
            <div
              key={index}
              className="flex justify-between p-4 bg-white rounded-lg shadow container-edit-publi"
            >
              <div className="w-[75%] container-edit-publi-1">
                <h1 className="text-xl font-bold mb-4">
                  Editar Publicación {index + 1}
                </h1>
                <label className="mb-2 font-bold block">
                  Cambiar descripción de la publicación
                </label>
                <textarea
                  placeholder={publicacion.descripcion}
                  className="w-[75%] h-[100px] rounded-lg outline-none border border-zinc-300 resize-none mb-4 textarea-edit"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={publicacion.imagen}
                  alt=""
                  className="rounded-lg mb-4"
                />
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <Link
                    href="/usuario"
                    className="text-center bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded duration-300 buttons"
                  >
                    Cancelar y Volver
                  </Link>
                  <button className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300 buttons">
                    Confirmar edición
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
