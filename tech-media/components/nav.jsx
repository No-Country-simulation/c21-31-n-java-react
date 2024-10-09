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
  console.log(session?.user);
  return (
    <nav className="w-full h-12 flex justify-between items-center p-2.5">
      <div className="container-logo">
        <h1>TechMedia</h1>
      </div>
      <div className="w-1/2 h-12 flex justify-around items-center">
        <a href="">Inicio</a>
        <a href="">Comunidad</a>
        <a href="">Conexiones</a>
        <a href="">Proyectos</a>
        <a href="">Recursos</a>
      </div>
      <div className="container-login">
        {session?.user ? (
          <div className="flex items-center">
            <Link href="/usuario">
              <img
                src={session.user.image}
                alt="User Image"
                className="w-10 h-10 rounded-full"
              />
            </Link>

            <button onClick={() => signOut()} className="ml-4">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={() => signIn()}>Login</button>
        )}
      </div>
    </nav>
  );
}
