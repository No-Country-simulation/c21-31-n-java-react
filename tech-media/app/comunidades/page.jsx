import Nav from "@/components/nav";

export default function Comunidades() {
  const gruposSugeridos = [
    { nombre: "Diseño Web", miembros: "3,243 miembros" },
    { nombre: "Marketing Digital", miembros: "3,243 miembros" },
    { nombre: "UX/UI", miembros: "3,243 miembros" },
    { nombre: "Desarrollo Web Argentina", miembros: "3,243 miembros" },
  ];

  const misGrupos = [
    { nombre: "Desarrollo Web Argentina", miembros: "3,243 miembros" },
    { nombre: "Desarrollo backend Argentina", miembros: "3,243 miembros" },
    {
      nombre: "Bases de datos SQL | MSQL Argentina",
      miembros: "3,243 miembros",
    },
    { nombre: "Desarrollo Full-Stack", miembros: "3,243 miembros" },
  ];

  return (
    <>
      <Nav />
      <div className="container-buscador flex items-center p-4 justify-center">
        <svg
          width="30px"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Buscar comunidad"
          className="input-buscar ml-4 border border-gray-300 p-2 rounded-md w-full max-w-[350px] outline-none"
        />
      </div>

      <div className="flex flex-col lg:flex-row p-8 gap-8">
        {/* Sugerencias de grupos */}
        <div className="w-full lg:w-1/2 bg-gray-200 p-5 rounded-md">
          <h3 className="font-bold mb-4">Sugerencias de Comunidades</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gruposSugeridos.map((grupo, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-md shadow-md flex flex-col items-center"
              >
                <div className="flex justify-start items-center bg-gray-300 w-full h-20 rounded-md mb-4"></div>
                <div className="w-full text-left">
                  <p className="font-bold">{grupo.nombre}</p>
                  <p className="text-xs text-gray-500">{grupo.miembros}</p>
                </div>
                <button className="ml-auto bg-blue-500 text-white px-4 py-1 mt-4 rounded-md">
                  Seguir
                </button>
              </div>
            ))}
          </div>

          {/* Botones con etiquetas */}
          <div className="flex flex-wrap justify-center mt-6 space-x-2">
            <button className="bg-gray-300 text-black px-4 py-1 rounded-md m-1">
              DISEÑO WEB
            </button>
            <button className="bg-gray-300 text-black px-4 py-1 rounded-md m-1">
              REACT
            </button>
            <button className="bg-gray-300 text-black px-4 py-1 rounded-md m-1">
              DISEÑO UX/UI
            </button>
          </div>
        </div>

        {/* Mis grupos */}
        <div className="w-full lg:w-1/2 bg-gray-200 p-5 rounded-md">
          <h3 className="font-bold mb-4">Mis grupos</h3>
          <div className="space-y-4">
            {misGrupos.map((grupo, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-md shadow-md flex flex-col lg:flex-row justify-between items-start lg:items-center"
              >
                <div className="flex items-center">
                  <div className="bg-gray-300 w-14 h-14 rounded-md"></div>
                  <div className="ml-4">
                    <p className="font-bold">{grupo.nombre}</p>
                    <p className="text-xs text-gray-500">{grupo.miembros}</p>
                  </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-1 mt-4 ml-auto lg:mt-0 rounded-md w-auto md:w-auto">
                  Seguir
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
