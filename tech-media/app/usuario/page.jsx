"use client";

import ButtonEditAddProject from "@/components/editar-añadir-project-user";
import ButtonEditAddPubli from "@/components/editar-añadir-publi-user";
import Nav from "@/components/nav";
import { useUserStore } from "@/store"; // Importa el store para obtener el usuario
import Link from "next/link";

// const proyectos = [
//   {
//     titulo: "Proyecto 1",
//     descripcion: "Descripción detallada del proyecto 1.",
//     imagen: "https://via.placeholder.com/400x200?text=Proyecto+1",
//   },
//   {
//     titulo: "Proyecto 2",
//     descripcion: "Descripción detallada del proyecto 2.",
//     imagen: "https://via.placeholder.com/400x200?text=Proyecto+2",
//   },
// ];

// const publicaciones = [
//   {
//     titulo: "Publicación 1",
//     descripcion: "Descripción detallada de la publicación 1.",
//     imagen: "https://via.placeholder.com/400x200?text=Publicacion+1",
//   },
//   {
//     titulo: "Publicación 2",
//     descripcion: "Descripción detallada de la publicación 2.",
//     imagen: "https://via.placeholder.com/400x200?text=Publicacion+2",
//   },
// ];

export default function Usuario() {
  const user = useUserStore((state) => state.user); // Obtén el usuario del store
  const proyectos = useUserStore((state) => state. userProyectos);
  const publicaciones = useUserStore((state) => state.userPublicaciones);


  return (
    <>
      <Nav />
      <div className="w-[97%] m-auto flex flex-col bg-gray-100 p-8 rounded-lg shadow-md mt-20">
        {/* Cabecera */}
        <div className="flex items-center flex-col">
          <div className="flex items-center">
            <img
              src={user?.image || "/default-user.png"}
              alt="Avatar"
              className="w-32 h-32 rounded-full mr-4"
            />
            <div>
              <h1 className="text-[30px] font-bold">
                {user?.name || "Nombre del Usuario"}
              </h1>
              <h2 className="text-gray-600 text-xl font-bold">
                {user?.nickname || "Apodo del Usuario"}
              </h2>
              <p className="text-gray-500">
                Breve descripción del Usuario: Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Assumenda recusandae nobis
                blanditiis possimus sed accusantium pariatur temporibus numquam,
                officiis vero distinctio iusto tempore porro quam corrupti.
                Fugiat voluptatem quisquam debitis.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            <Link
              href="/Editar-datos-de-usuario"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Editar Perfil
            </Link>
          </div>
        </div>
      </div>

      {/* Contenedor de Proyectos */}
      <div className="w-[95%] mx-auto bg-gray-100 p-2 rounded-lg shadow-md mt-8">
        <h2 className="text-[28px] font-bold mt-8">Publicaciones</h2>
        {proyectos.map((proyecto, index) => (
          <div key={index} className="mt-4">
            <h2 className="text-[22px] font-bold">{proyecto.titulo}</h2>
            <div className="w-full flex items-start">
              <img
                src={proyecto.imagen}
                alt={`Imagen preview ${proyecto.titulo}`}
                className="mb-5 border rounded-[7px]"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <p className="text-gray-500">{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
        <ButtonEditAddProject />
      </div>

      {/* Contenedor de Publicaciones */}
      <div className="w-[95%] mx-auto bg-gray-100 p-2 rounded-lg shadow-md mt-8 mb-8">
        <h2 className="text-[28px] font-bold mt-8">Proyectos</h2>
        {publicaciones.map((publicacion, index) => (
          <div key={index} className="mt-4">
            <h2 className="text-[22px] font-bold">{publicacion.titulo}</h2>
            <div className="w-full flex items-start">
              <img
                src={publicacion.imagen}
                alt={`Imagen preview ${publicacion.titulo}`}
                className="mb-5 border rounded-[7px]"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <p className="text-gray-500">{publicacion.descripcion}</p>
            </div>
          </div>
        ))}
        <ButtonEditAddPubli />
      </div>
    </>
  );
}
