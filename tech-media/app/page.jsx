"use client";
import { useState } from "react";
import BarraAmigos from "@/components/barra-amigos";
import Nav from "@/components/nav";

// pages/index.js
export default function Home() {
  const amigos = [
    { nombre: "Ezequiel", apellido: "Ramos", rol: "Desarrollador Backend" },
    { nombre: "Juan", apellido: "Lencina", rol: "Desarrollador Frontend" },
    { nombre: "Mateo", apellido: "Gomez", rol: "Desarrollador Fullstack" },
    { nombre: "Nahuel", apellido: "Medina", rol: "Desarrollador Frontend" },
    { nombre: "Lucas", apellido: "Martinez", rol: "UI/UX Designer" },
  ];

  const [paginaActiva, setPaginaActiva] = useState("dest");

  const handleNavClick = (pagina) => {
    setPaginaActiva(pagina);
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen p-5">
        {/* Navbar */}
        <nav className="bg-gray-800 p-4 rounded-md text-white mb-5">
          <ul className="flex justify-around">
            <li>
              <button
                onClick={() => handleNavClick("dest")}
                className={`hover:text-blue-400 ${
                  paginaActiva === "dest" && "text-blue-400"
                }`}
              >
                Dest
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("proyectos")}
                className={`hover:text-blue-400 ${
                  paginaActiva === "proyectos" && "text-blue-400"
                }`}
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("destacados")}
                className={`hover:text-blue-400 ${
                  paginaActiva === "destacados" && "text-blue-400"
                }`}
              >
                Destacados
              </button>
            </li>
          </ul>
        </nav>

        {/* Contenedor principal con barra lateral y contenido */}

        {/* Barra lateral - Sugerencias de amigos */}

        <BarraAmigos amigos={amigos} />

        {/* Contenido principal */}
        <div className="w-3/4 ml-5">
          {paginaActiva === "dest" && (
            <div>
              <h2 className="text-2xl font-bold">Página Dest</h2>
              <p>Contenido de la sección Dest.</p>
            </div>
          )}
          {paginaActiva === "proyectos" && (
            <div>
              <h2 className="text-2xl font-bold">Página Proyectos</h2>
              <p>Contenido de la sección Proyectos.</p>
            </div>
          )}
          {paginaActiva === "destacados" && (
            <div>
              <h2 className="text-2xl font-bold">Página Destacados</h2>
              <p>Contenido de la sección Destacados.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
