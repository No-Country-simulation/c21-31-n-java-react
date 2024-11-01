"use client";

import { useState } from "react";
import { useUserStore } from "../store"; // Asegúrate de que esta ruta sea correcta

export default function ComponentInputCard({ llave }) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const addProyecto = useUserStore((state) => state.addPublicacion);
  const addPublicacion = useUserStore((state) => state.addPublicacion1);
  const addPublicacionUser = useUserStore((state) => state.addPublicacionUser);
  const addProyectoUser = useUserStore((state) => state.addProyectosUser);
  const user = useUserStore((state) => state.user);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (addProyecto) {
      const nuevoProyecto = {
        titulo: projectName,
        descripcion: projectDescription,
        imagen: selectedFile ? URL.createObjectURL(selectedFile) : "",
        usuario: {
          nombre: user.name,
          apellido: user.email,
          rol: "Desarrollador",
        },
      };

      addProyecto(nuevoProyecto);
      addProyectoUser(nuevoProyecto);
      setProjectName("");
      setProjectDescription("");
      setSelectedFile(null);
    } else {
      console.error("addProyecto no está definido");
    }
  };

  const handleUploadPublicacion = () => {
    if (addPublicacion) {
      const nuevoPublicacion1 = {
        titulo: projectName,
        descripcion: projectDescription,
        imagen: selectedFile ? URL.createObjectURL(selectedFile) : "",
        usuario: {
          nombre: "Nuevo",
          apellido: "Usuario",
          rol: "Desarrollador",
        },
      };

      addPublicacion(nuevoPublicacion1);
      addPublicacionUser(nuevoPublicacion1);
      setProjectName("");
      setProjectDescription("");
      setSelectedFile(null);
    } else {
      console.error("addProyecto no está definido");
    }
  };

  return (
    <div className="w-full max-w-sm p-9 bg-white border border-gray-300 rounded-lg shadow-md fixed top-52 left-9">
      {user ? (
        <>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center mr-4 text-lg text-white">
              {user.image ? (
                <img
                  src={user.image}
                  alt="User"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                "E"
              )}
            </div>
            <h2 className="text-lg font-bold">
              {llave ? "Subir un proyecto" : "Crear Publicación"}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="project-name" className="block mb-1">
                {llave ? "Nombre del proyecto" : "Título de la publicación"}
              </label>
              <input
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder={llave ? "Nombre" : "Título"}
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div>
              <label htmlFor="project-description" className="block mb-1">
                {llave ? "Descripción del Proyecto" : "Descripción de la Publicación"}
              </label>
              <input
                id="project-description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Descripción"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={llave ? handleUploadPublicacion : handleUpload}
              className="w-full p-3 bg-blue-500 text-white font-bold rounded-md"
            >
              {llave ? "Subir Proyecto" : "Subir Publicación"}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-700">
          <p>Inicia sesión para subir una publicación</p>
        </div>
      )}
    </div>
  );
}
