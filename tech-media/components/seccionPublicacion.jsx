import ComponentInputCard from "./cardCreate";

import "./seccion-publicacion.css";

export default function PublicacionesSection() {
  // Array harcodeado de publicaciones
  const llave = true;
  const publicaciones = [
    {
      titulo: "Proyecto 1",
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
      titulo: "Proyecto 2",
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
      titulo: "Proyecto 3",
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
    <div className="p-5 flex">
      {/* Componente de subir proyecto (lado izquierdo) */}
      <div className="w-2/4 flex justify-end card-create-projects">
        <div className="w-full">
          <ComponentInputCard llave={llave} />
        </div>
      </div>
      {/* Contenedor de publicaciones (lado derecho) */}
      <div className="w-2/4 flex flex-col gap-5 mt-12 mr-8 container-publicaciones">
        {publicaciones.map((publicacion, index) => (
          <div
            key={index}
            className="bg-gray-200 p-5 rounded-md shadow-md w-full"
          >
            {/* Información del usuario */}
            <div className="flex justify-between items-center mb-3">
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
        ))}
      </div>
    </div>
  );
}
