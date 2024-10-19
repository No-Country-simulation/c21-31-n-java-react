"use client";

import { useState } from "react";

export default function ComponentInputCard() {
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
    <div className="w-full max-w-sm p-6 border border-gray-300 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-4 text-lg font-bold text-gray-600">
          E
        </div>
        <h2 className="text-lg font-bold">Subir un proyecto</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="project-name" className="block mb-1">
            Nombre del proyecto
          </label>
          <input
            id="project-name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Ingrese el nombre del proyecto"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
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
          <button
            onClick={() => setUploadType("code")}
            className={`flex-1 p-2 border ${
              uploadType === "code" ? "bg-gray-200" : "bg-white"
            } border-gray-300 rounded-md flex items-center justify-center`}
          >
            <span className="mr-1">💻</span> Fragmento de Código
          </button>
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
