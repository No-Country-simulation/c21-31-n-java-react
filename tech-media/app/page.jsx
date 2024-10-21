"use client";
import { useState } from "react";
import BarraAmigos from "@/components/barra-amigos";
import Nav from "@/components/nav";
import NavInicio from "@/components/navInicio";
import Publicaciones from "@/components/cardPublicacion";
import PublicacionesSection from "@/components/seccionPublicacion";
import Feed from "@/components/fedd";

import "./home.css";

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
        <div className="flex flex-col lg:flex-row">
          {/* Contenido principal */}
          <div className="w-full lg:w-3/4 lg:ml-5 mb-5 lg:mb-0">
            {paginaActiva === "dest" && <Feed amigos={amigos}/>}
            {paginaActiva === "proyectos" && <PublicacionesSection />}
            {paginaActiva === "destacados" && <Publicaciones />}
          </div>

          {/* Barra lateral - Sugerencias de amigos */}
          <div className="flex flex-col w-full lg:w-1/4 md:items-center barra-amigos-pc">
            <BarraAmigos amigos={amigos} />
          </div>
        </div>
      </div>
    </>
  );
}
