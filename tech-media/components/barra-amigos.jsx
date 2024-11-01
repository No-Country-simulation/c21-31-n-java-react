"use client";
import { useState } from "react";
import "./barra-amigos.css";
import { useUserStore } from "@/store";

export default function BarraAmigos({ amigos = [] }) {
  // Estado para cada botón de seguir/dejar de seguir
  const [siguiendo, setSiguiendo] = useState(
    amigos.slice(0, 4).map(() => false) // Inicializamos el estado con "false" para cada amigo
  );

  const setContactos = useUserStore((state) => state.setContactos);
  const removeContacto = useUserStore((state) => state.removeContacto);
  const users = useUserStore((state) => state.contactos);

  // Función para manejar el clic del botón
  const manejarSeguir = (index, amigo) => {
    // Alterna el estado de seguir/dejar de seguir
    setSiguiendo((prevState) =>
      prevState.map((estado, i) => (i === index ? !estado : estado))
    );

    // Verificar si el usuario ya está en la lista de contactos
    const isFollowing = users.some((user) => user.nombre === amigo.nombre);

    if (isFollowing) {
      removeContacto(amigo);
    } else {
      setContactos(amigo);
    }
  };

  return (
    <div className="flex fixed top-52 container-general">
      <div className="w-4/4 bg-gray-200 p-5 rounded-md container-general-cards-amigos">
        <h2 className="text-lg font-bold title-amigos">
          Sugerencias de amigos
        </h2>
        <div className="mt-4 space-y-4 container-cards-amigos">
          {amigos.slice(0, 4).map((amigo, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-3 rounded-md shadow-md card-amigos"
            >
              <div className="flex items-center renders-card">
                <img src={amigo.image} alt="" className="w-[50px]"/>
                <div className="ml-2">
                  <p className="font-bold">
                    {amigo.nombre} {amigo.apellido}
                  </p>
                  <p className="text-xs text-gray-500">{amigo.rol}</p>
                </div>
              </div>
              <button
                className={`${
                  siguiendo[index] ? "bg-red-500" : "bg-blue-500"
                } text-white p-4 py-1 rounded-md m-2`}
                onClick={() => manejarSeguir(index, amigo)}
              >
                {siguiendo[index] ? "Dejar de Seguir" : "Seguir"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
