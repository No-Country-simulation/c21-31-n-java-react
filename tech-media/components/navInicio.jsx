"use client";
import { useUserStore } from "@/store";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function NavInicio({ handleNavClick, paginaActiva }) {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-md font-bold text-white mb-5">
      <ul className="flex justify-around text-[18px]">
        <li>
          <button
            onClick={() => handleNavClick("dest")}
            className={`hover:text-yellow-400 transition duration-300 ${
              paginaActiva === "dest" && "text-yellow-400"
            }`}
          >
            Feed
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("proyectos")}
            className={`hover:text-yellow-400 transition duration-300 ${
              paginaActiva === "proyectos" && "text-yellow-400"
            }`}
          >
            Proyectos
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("destacados")}
            className={`hover:text-yellow-400 transition duration-300 ${
              paginaActiva === "destacados" && "text-yellow-400"
            }`}
          >
            Destacados
          </button>
        </li>
      </ul>
    </nav>
  );
}
