"use client";
import { useUserStore } from "@/store";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Nav() {
  const { data: session } = useSession();
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

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
      <div className="w-1/2 h-16 flex justify-around items-center">
        <a
          href="#"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Inicio
        </a>
        <a
          href="#"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Comunidad
        </a>
        <a
          href="#"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Conexiones
        </a>
        <a
          href="#"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Proyectos
        </a>
        <a
          href="#"
          className="hover:text-yellow-400 transition duration-300 ease-in-out"
        >
          Recursos
        </a>
      </div>

      {/* User Section */}
      <div className="container-login flex items-center">
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
    </nav>
  );
}
