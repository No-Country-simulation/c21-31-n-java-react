import Link from "next/link";

export default function ButtonEditAddPubli() {
  return (
    <div className="flex justify-end">
      <Link
        href="/Editar-publicaciones"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 duration-300"
      >
        Editar Publicación
      </Link>
      <Link
        href="/Crear-publicacion"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded duration-300"
      >
        Añadir Publicación
      </Link>
    </div>
  );
}
