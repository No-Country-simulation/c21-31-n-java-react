"use client";
import { useUserStore } from "@/store";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function NavInicio({ handleNavClick, paginaActiva }) {
  return (
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
  );
}
