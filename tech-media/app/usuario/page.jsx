"use client";

import Nav from "@/components/nav";
import { useUserStore } from "@/store"; // Importa el store para obtener el usuario
import Link from "next/link";

export default function Usuario() {
  const user = useUserStore((state) => state.user); // Obtén el usuario del store

  return (
    <>
      <Nav></Nav>
      <div className="flex flex-col bg-gray-100 p-8 rounded-lg shadow-md">
        {/* Cabecera */}
        <div className="flex items-center flex-col">
          <div className="flex items-center">
            <img
              src={user?.image || "/default-user.png"}
              alt="Avatar"
              className="w-32 h-32 rounded-full mr-4"
            />
            <div className="">
              <h1 className="text-[30px] font-bold">
                {user?.name || "Nombre del Usuario"}
              </h1>
              <h2 className="text-gray-600 text-xl font-bold">
                {user?.nickname || "Apodo del Usuario"}
              </h2>
              <p className="text-gray-500">
                Breve descrición del Usuario: Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Assumenda recusandae nobis
                blanditiis possimus sed accusantium pariatur temporibus numquam,
                officiis vero distinctio iusto tempore porro quam corrupti.
                Fugiat voluptatem quisquam debitis.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href="/usuario-edit">Editar Perfil</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="w-[95%] mx-auto bg-gray-100 p-2 rounded-lg shadow-md mt-8">
        <h2 className="text-[28px] font-bold mt-8">Proyectos</h2>
        <div className="mt-4">
          <h2 className="text-[22px] font-bold">Título del Proyecto</h2>
          <div className="w-full flex items-start">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Imagen preview Proyecto"
              className="mb-5 border rounded-[7px]"
            />
          </div>
          {/* Aquí irá la lógica para mostrar múltiples proyectos */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <p className="text-gray-500">
              Descirpción del proyecto: Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Ea veritatis, natus eos perspiciatis facere
              repellendus debitis sunt tenetur. Aliquam aliquid debitis possimus
              illo ipsam nulla ut beatae consequatur totam suscipit? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Non facere fuga quas
              doloribus commodi perspiciatis molestias nostrum pariatur
              excepturi nam, ut, vitae, minima at? Repellendus eveniet adipisci
              voluptate repellat veritatis.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              <Link href="">Editar Proyecto</Link>
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Añadir Proyecto
            </button>
          </div>
        </div>
      </div>

      <div className="w-[95%] mx-auto bg-gray-100 p-2 rounded-lg shadow-md mt-8 mb-8">
        <h2 className="text-[28px] font-bold mt-8 mb-4">Sobre Mí</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <p className="text-gray-500">
            Describete, explica a que te dedicas y que sabes hacer: Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Consectetur corporis
            ducimus vitae est alias dolores laudantium nemo veniam unde fugit
            quo, consequuntur necessitatibus magnam ratione quia nulla
            repudiandae eius voluptas. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Rerum fugiat culpa laboriosam error repellendus.
            Ipsa repudiandae labore repellendus adipisci. Quas alias mollitia
            perspiciatis quam. Laboriosam suscipit labore quos dolorum beatae!
          </p>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Editar Proyecto
          </button>
        </div>
      </div>
    </>
  );
}
