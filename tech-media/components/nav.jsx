"use client";
import { useUserStore } from "@/store";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const { data: session } = useSession();
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);
  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para manejar el menú

  // Efecto para actualizar el estado global cuando cambia la sesión
  useEffect(() => {
    if (session?.user) {
      setUser(session.user); // Guardar los datos del usuario en el estado global
    } else {
      clearUser(); // Limpiar el estado del usuario si no hay sesión
    }
  }, [session, setUser, clearUser]);

  return (
    <nav className="w-full h-16 flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-lg text-white">
      {/* Logo Section */}
      <div className="container-logo">
        <h1 className="text-2xl font-bold tracking-wide text-white">
          TechMedia
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex w-1/2 h-16 justify-around items-center font-bold text-[18px]">
        <Link
          href="/"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Inicio
        </Link>
        <a
          href="/comunidades"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Comunidades
        </a>
        <Link
          href="/conexiones"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Conexiones
        </Link>
        <a
          href="#"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Proyectos
        </a>
      </div>

      {/* User Section */}
      <div className="container-login hidden md:flex items-center">
        {session?.user ? (
          <div className="flex items-center space-x-4">
            <Link href="/usuario">
              <img
                src={session.user.image}
                alt="User Image"
                className="w-10 h-10 rounded-full border-2 border-white hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-4 py-1 rounded-md hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-green-500 px-4 py-1 rounded-md hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        )}
      </div>

      {/* Menu Button for Mobile */}
      <div className="md:hidden flex items-center ml-auto">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {/* Icono de hamburguesa */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white z-10 transition-transform duration-500 ease-in-out opacity-100 ${
          isMenuOpen
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        {isMenuOpen && (
          <div className="flex flex-col items-center py-2">
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300 ease-in-out py-2"
            >
              Inicio
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300 ease-in-out py-2"
            >
              Comunidad
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300 ease-in-out py-2"
            >
              Conexiones
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300 ease-in-out py-2"
            >
              Proyectos
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300 ease-in-out py-2"
            >
              Recursos
            </a>

            {/* User Section in Mobile Menu */}
            {session?.user ? (
              <div className="flex items-center space-x-4 mt-4">
                <Link href="/usuario">
                  <img
                    src={session.user.image}
                    alt="User Image"
                    className="w-10 h-10 rounded-full border-2 border-white hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 px-4 py-1 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-green-500 px-4 py-1 rounded-md hover:bg-green-600 transition duration-300 mt-4"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
