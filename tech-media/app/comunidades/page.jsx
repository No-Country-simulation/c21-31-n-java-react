import Nav from "@/components/nav";

import "./comunidades.css";

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
      {/* <div className="container-buscador flex items-center p-4 justify-center">
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
      </div> */}
      <div className="flex items-center justify-center gap-[10px] mt-20">
        <h1 className="text-4xl text-center font-bold title-comunidades">Comunidades próximamente</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="w-[35px] icon-users"
        >
          <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
        </svg>
      </div>

      <main className="flex items-center justify-center mt-10">
        <img src="/Ilustraciones/Comunidades.svg" alt="" className="h-[50vh] img-comunidades"/>
      </main>
    </>
  );
}
