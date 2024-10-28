"use client";

import { useState } from "react";

export default function ComponentInputCard({ llave }) {
  const [projectName, setProjectName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadType, setUploadType] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    console.log("Uploading project:", {
      projectName,
      selectedFile,
      uploadType,
    });
    // Future implementation for sending data to the server
  };

  return (
    <div className="w-full max-w-sm p-9 bg-white border border-gray-300 rounded-lg shadow-md fixed top-52">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-4 text-lg font-bold text-gray-600">
          E
        </div>
        {!llave ? (
          <h2 className="text-lg font-bold">Crear Publicación</h2>
        ) : (
          <h2 className="text-lg font-bold">Subir un proyecto</h2>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div>
          {!llave ? (
            <>
              <label htmlFor="project-name" className="block mb-1">
                Descripción de la Publicación:
              </label>
              <input
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Texto"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </>
          ) : (
            <>
              <label htmlFor="project-name" className="block mb-1">
                Nombre del proyecto:
              </label>
              <input
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="TechMedia"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </>
          )}
        </div>
        <div className="flex gap-2">
          {/* <button
            onClick={() => setUploadType("multimedia")}
            className={`flex-1 p-2 border ${
              uploadType === "multimedia" ? "bg-gray-200" : "bg-white"
            } border-gray-300 rounded-md flex items-center justify-center`}
          >
            <span className="mr-1">📷</span> Multimedia
          </button> */}
          {/* <button
            onClick={() => setUploadType("file")}
            className={`flex-1 p-2 border ${
              uploadType === "file" ? "bg-gray-200" : "bg-white"
            } border-gray-300 rounded-md flex items-center justify-center`}
          >
            <span className="mr-1">📎</span> Archivo adjunto
          </button> */}
          {!llave ? null : (
            <div className="w-full flex flex-col items-center text-start">
              <label
                htmlFor="porject-description"
                className="block mb-1 w-full"
              >
                Descripción del Proyecto:
              </label>
              <input
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Ingrese el nombre del proyecto"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => setUploadType("code")}
                className={`flex-1 p-2 border mt-2 w-full ${
                  uploadType === "code" ? "bg-gray-200" : "bg-white"
                } border-gray-300 rounded-md flex items-center justify-center`}
              >
                <span className="flex justify-start items-center w-full">
                  <svg
                    width="30px"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1"
                  >
                    <path
                      d="M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Fragmento de Código
                </span>
              </button>
            </div>
          )}
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleUpload}
          className="w-full p-3 bg-blue-500 text-white rounded-md"
        >
          Subir Proyecto
        </button>
      </div>
    </div>
  );
}
