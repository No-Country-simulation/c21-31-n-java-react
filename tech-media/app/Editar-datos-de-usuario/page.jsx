"use client";
import { useState } from "react";
import Nav from "@/components/nav";

export default function UsuarioEdit() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="mt-20">
        <div className="w-[90%] mx-auto p-4 mt-4 mb-4 bg-gray-100 rounded-lg shadow-md">
          <div className="w-[180px] h-[180px] mx-auto flex justify-center items-center rounded-full bg-gray-300">
            <div className="relative flex justify-center items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageInput"
              />
              <label
                htmlFor="imageInput"
                className="text-white font-bold py-2 px-4 rounded cursor-pointer mr-4 mx-auto"
              >
                <svg
                  width="50px"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative mx-auto left-[10%]"
                >
                  <path
                    d="M16.2 21H6.93137C6.32555 21 6.02265 21 5.88238 20.8802C5.76068 20.7763 5.69609 20.6203 5.70865 20.4608C5.72312 20.2769 5.93731 20.0627 6.36569 19.6343L14.8686 11.1314C15.2646 10.7354 15.4627 10.5373 15.691 10.4632C15.8918 10.3979 16.1082 10.3979 16.309 10.4632C16.5373 10.5373 16.7354 10.7354 17.1314 11.1314L21 15V16.2M16.2 21C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2M16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="flex justify-around bg-white-500">
            <div className="flex-col">
              <h3>Nombre</h3>
              <input
                type="text"
                placeholder=""
                className="w-[350px] rounded outline-none border border-zinc-300"
              />
              <h3>Apellido</h3>
              <input
                type="text"
                placeholder=""
                className="w-[350px] rounded outline-none border border-zinc-300"
              />
              <h3>Sobrenombre</h3>
              <input
                type="text"
                placeholder=""
                className="w-[350px] rounded outline-none border border-zinc-300"
              />
            </div>
            <div>
              <h3>Descripción</h3>
              <textarea
                name=""
                id=""
                className="w-[350px] h-[125px] resize-none rounded outline-none border border-zinc-300"
              ></textarea>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button className="w-[130px] bg-blue-500 p-2 text-white font-bold rounded hover:bg-blue-700 transition .3s">
              Confirmar
            </button>
          </div>
        </div>

        {/* <div className="w-[90%] mx-auto p-4 mt-4 mb-4 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-[28px] p-4">Proyectos</h1>
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <input
              type="text"
              placeholder="&nbsp;Título del Proyecto"
              className="outline-none mb-6 border rounded-[7px] h-[35px]"
            />
            <textarea
              className="w-full h-[20vh] resize-none outline-none border rounded-[7px]"
              placeholder="&nbsp;Descripción del proyecto"
            ></textarea>
          </div>
          <h1 className="text-[25px] text-left">
            Imagen de previsualización del Proyecto
          </h1>
          <p>Tamaño recomendado: 420px x 350px</p>
          <div className="flex items-center justify-start">
            <img
              src={selectedImage || "https://placehold.co/420x350"}
              alt="Previsualización de Imagen"
              className="w-[420px] h-[350px] rounded-lg shadow-md mt-4 border border-black border-dashed"
            />
          </div>
          <div className="flex justify-end items-center mt-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="imageInput"
            />
            <label
              htmlFor="imageInput"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mr-4"
            >
              Añadir Imagen
            </label>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Añadir Proyecto
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}
