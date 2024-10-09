"use client";
import { useState } from "react";
import BarraAmigos from "@/components/barra-amigos";
import Nav from "@/components/nav";
import NavInicio from "@/components/navInicio";
import Publicaciones from "@/components/cardPublicacion";
import PublicacionesSection from "@/components/seccionPublicacion";
import Feed from "@/components/fedd";

// pages/index.js
export default function Home() {
  const amigos = [
    { nombre: "Ezequiel", apellido: "Ramos", rol: "Desarrollador Backend" },
    { nombre: "Juanma", apellido: "Lencina", rol: "Desarrollador Frontend" },
    { nombre: "Mateo", apellido: "Gomez", rol: "Desarrollador Fullstack" },
    { nombre: "Nahuel", apellido: "Medina", rol: "Desarrollador Frontend" },
    { nombre: "Lucass", apellido: "Martinez", rol: "UI/UX Designer" },
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
        <NavInicio
          handleNavClick={handleNavClick}
          paginaActiva={paginaActiva}
        ></NavInicio>

        {/* Contenedor principal con barra lateral y contenido */}
        <div className="flex">
          {/* Barra lateral - Sugerencias de amigos */}

          {/* Contenido principal */}
          <div className="w-3/4 ml-5">
            {paginaActiva === "dest" && <Feed></Feed>}
            {paginaActiva === "proyectos" && (
              <PublicacionesSection></PublicacionesSection>
            )}
            {paginaActiva === "destacados" && <Publicaciones></Publicaciones>}
          </div>
          <div className="w-1/4">
            <BarraAmigos amigos={amigos} />
          </div>
        </div>
      </div>
    </>
  );
}
