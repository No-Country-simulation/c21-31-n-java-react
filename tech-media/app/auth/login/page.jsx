"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./loguin.css";
import { useUserStore } from "../../../store"; // Cambia esta ruta a la ubicación de tu store

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const { data: session, status } = useSession();
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://167.0.167.240:8082/auth/register", {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        setUser(response.data); // Guarda los datos del usuario en el estado global
        router.push("/dashboard"); // Redirige al dashboard u otra página
      } else {
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud de registro:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.ok) {
      setUser({ username, email }); // Guarda los datos en el estado global
      router.push("/dashboard"); // Redirige a otra página
    } else {
      console.log("Error en el login");
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const handleGithubLogin = async () => {
    await signIn("github", { callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        {isRegistering ? "Crear Cuenta" : "Iniciar Sesión"}
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          {isRegistering && (
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de Usuario
              </label>
              <input
                id="username"
                type="text"
                value={username}
                placeholder="Ingresa tu nombre de usuario"
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Ingresa tu Email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mb-4"
          >
            {isRegistering ? "Crear Cuenta" : "Iniciar Sesión"}
          </button>
        </form>

        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-blue-500 hover:underline mb-4"
        >
          {isRegistering
            ? "¿Ya tienes una cuenta? Inicia sesión aquí."
            : "¿No tienes una cuenta? Regístrate aquí."}
        </button>

        <button onClick={handleGoogleLogin} className="google-login-button">
          <img
            src="https://img.icons8.com/?size=512&id=17949&format=png"
            alt="Google logo"
            className="google-logo"
          />
          Iniciar sesión con Google
        </button>
        <button onClick={handleGithubLogin} className="git-login-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub logo"
            className="github-logo"
          />
          Iniciar sesión con GitHub
        </button>
      </div>
    </div>
  );
}
