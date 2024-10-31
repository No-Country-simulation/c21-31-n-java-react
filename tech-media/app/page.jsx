"use client";
import { useState } from "react";
import BarraAmigos from "@/components/barra-amigos";
import Nav from "@/components/nav";
import NavInicio from "@/components/navInicio";
import Publicaciones from "@/components/cardPublicacion";
import PublicacionesSection from "@/components/seccionPublicacion";
import Feed from "@/components/fedd";

import "./home.css";
import { useUserStore } from "@/store";

// pages/index.js
export default function Home() {
  const user = useUserStore((state) => state.user);
  console.log(user)
  const amigos = [
    { nombre: "Ezequiel", apellido: "Ramos", rol: "Desarrollador Backend", image: "https://lombreach.es/wp-content/uploads/usuario-sin-foto.png" },
    { nombre: "Juanma", apellido: "Lencina", rol: "Desarrollador Frontend", image: "https://lombreach.es/wp-content/uploads/usuario-sin-foto.png" },
    { nombre: "Mateo", apellido: "Gomez", rol: "Desarrollador Fullstack", image: "https://lombreach.es/wp-content/uploads/usuario-sin-foto.png"},
  ];

  const [paginaActiva, setPaginaActiva] = useState("dest");

  const handleNavClick = (pagina) => {
    setPaginaActiva(pagina);
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen p-5 flex flex-col justify-center">
        {/* Navbar */}
        <div className="sticky top-16 bg-white p-4 z-10">
          <NavInicio
            handleNavClick={handleNavClick}
            paginaActiva={paginaActiva}
          ></NavInicio>
        </div>

        {/* Contenedor principal con barra lateral y contenido */}
        <div className="flex flex-col lg:flex-row">
          {/* Contenido principal */}
          <div className="w-full lg:w-3/4 mb-5">
            {paginaActiva === "dest" && <Feed amigos={amigos} />}
            {paginaActiva === "proyectos" && <PublicacionesSection amigos={amigos} />}
            {paginaActiva === "destacados" && <Publicaciones amigos={amigos}/>}
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
