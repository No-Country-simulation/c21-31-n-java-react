"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./loguin.css";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const { data: session, status } = useSession();
  console.log(session?.user, status);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Registering with:", { name, email, password });
    // Lógica para registrar al usuario aquí
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.ok) {
      router.push("/dashboard"); // O redirigir a otra página
    } else {
      console.log("Error en el login");
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" }); // Redirigir a la página principal "/"
  };

  const handleGithubLogin = async () => {
    console.log("logueo git");
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
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                value={name}
                placeholder="ingresa tu nombre"
                onChange={(e) => setName(e.target.value)}
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
              placeholder="ingresa tu Email"
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
              placeholder="ingresa tu contraseña"
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
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" // Logo de GitHub
            alt="GitHub logo"
            className="github-logo"
          />
          Iniciar sesion con GitHub
        </button>
      </div>
    </div>
  );
}
