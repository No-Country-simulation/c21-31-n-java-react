"use client";
import { useUserStore } from "@/store";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import "./nav.css";

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
    <nav className="fixed top-0 w-full h-16 flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-lg text-white z-50">
      {/* Logo Section */}
      <div className="container-logo">
        <h1 className="flex text-2xl tracking-wide text-white gap-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[30px]"
            fill="#fff"
          >
            <path d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z" />
          </svg>
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
        {/* <Link
          href="/Seguidos"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Seguidos
        </Link> */}
        <Link
          href="/comunidades"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Comunidades
        </Link>
        {/* <Link
          href="#"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Proyectos
        </Link> */}
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
        className={`md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white z-50 transition-transform duration-500 ease-in-out opacity-100 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {isMenuOpen && (
          <div className="flex flex-col items-center py-2">
            <Link
              href="/"
              className="hover:text-yellow-400 transition duration-300 ease-in-out py-2"
            >
              Inicio
            </Link>
            {/* <Link
              href="/Contactos"
              className="hover:text-yellow-400 transition duration-300 ease-in-out py-2"
            >
              Seguidos
            </Link> */}
            <Link
              href="/comunidades"
              className="hover:text-yellow-400 transition duration-300 ease-in-out py-2"
            >
              Comunidades
            </Link>
            {/* <a
              href="#"
              className="hover:text-yellow-400 transition duration-300 ease-in-out py-2"
            >
              Proyectos
            </a> */}

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
