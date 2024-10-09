"use client";

import Nav from "@/components/nav";
import { useUserStore } from "@/store"; // Importa el store para obtener el usuario

export default function Usuario() {
  const user = useUserStore((state) => state.user); // Obtén el usuario del store

  return (
    <>
      <Nav></Nav>
      <div className="relative flex justify-between items-center p-2.5 m-5 bg-gray-300 rounded-lg flex-col md:flex-row">
        <div className="flex items-center justify-center mb-4 md:mb-0">
          <img
            src={user?.image || "/default-user.png"}
            alt="Imagen usuario"
            className="w-20 h-20 rounded-full md:w-20 md:h-20"
          />
        </div>
        <div className="ml-5">
          <div className="flex gap-3.5">
            <h1 className="text-2xl">{user?.name || "Nombre del Usuario"}</h1>
          </div>
          <div className="flex gap-3.5">
            <h2 className="text-xl">{user?.nickname || "Apodo del Usuario"}</h2>
          </div>
          <div className="flex gap-3.5 p-2 bg-gray-400 rounded-md">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              ullam, vero quidem eos ad eveniet dolor qui cupiditate modi sunt
              at consectetur quisquam veniam fuga illo, eaque eum. Laudantium,
              debitis!
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-between text-left p-2.5 m-5 bg-gray-300 rounded-lg">
        <a
          href=""
          className="absolute top-2.5 right-2.5 cursor-pointer text-black hover:text-gray-600"
        >
          <svg
            width="25px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <div className="flex gap-2.5">
          <h1 className="text-xl font-bold">Sobre Mi</h1>
        </div>
        <div className="p-2 bg-gray-400 rounded-md">
          <p className="leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam,
            vero quidem eos ad eveniet dolor qui cupiditate modi sunt at
            consectetur quisquam veniam fuga illo, eaque eum. Laudantium,
            debitis! <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vero
            dignissimos eos rerum repudiandae dolorum ullam eaque aliquid
            veritatis quas nesciunt, a officia natus omnis quae qui quisquam.
            Et, tempore!
          </p>
        </div>
      </div>

      <div className="relative flex flex-col justify-between text-left p-2.5 m-5 bg-gray-300 rounded-lg">
        <a
          href=""
          className="absolute top-2.5 right-2.5 cursor-pointer text-black hover:text-gray-600"
        >
          <svg
            width="25px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <div className="flex gap-2.5">
          <h1 className="text-xl font-bold">Mis Proyectos</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-start p-2 bg-gray-400 rounded-md">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Imagen del Proyecto"
            className="w-full sm:w-1/2 h-auto rounded-md mb-2.5 sm:mb-0 sm:mr-2.5"
          />
          <p className="leading-7 sm:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam,
            vero quidem eos ad eveniet dolor qui cupiditate modi sunt at
            consectetur quisquam veniam fuga illo, eaque eum. Laudantium,
            debitis! <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
        </div>
      </div>
    </>
  );
}
