export default function BarraAmigos({ amigos }) {
  return (
    <div className="flex">
      {/* Sidebar - Sugerencias de amigos */}
      <div className="w-1/4 bg-gray-200 p-5 rounded-md">
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
              <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
                Seguir
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
