import { useState } from "react";

export default function BarraAmigos({ amigos }) {
  // Estado para cada botón de seguir/dejar de seguir
  const [siguiendo, setSiguiendo] = useState(
    amigos.slice(0, 4).map(() => false) // Inicializamos el estado con "false" para cada amigo
  );

  // Función para manejar el clic del botón
  const manejarSeguir = (index) => {
    // Alterna el estado de seguir/dejar de seguir
    setSiguiendo((prevState) =>
      prevState.map((estado, i) => (i === index ? !estado : estado))
    );
  };

  return (
    <div className="flex">
      <div className="w-4/4 bg-gray-200 p-5 rounded-md">
        <h3 className="font-bold">Sugerencias de amigos</h3>
        <div className="mt-4 space-y-4">
          {amigos.slice(0, 4).map((amigo, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-3 rounded-md shadow-md"
            >
              <div className="flex items-center">
                <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
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
                onClick={() => manejarSeguir(index)}
              >
                {siguiendo[index] ? "Cancelar" : "Seguir"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
