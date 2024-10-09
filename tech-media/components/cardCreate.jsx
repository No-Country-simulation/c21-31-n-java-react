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

  const buttonStyle = (active) => ({
    flex: 1,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: active ? "#e0e0e0" : "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        padding: "24px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "16px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#666",
          }}
        >
          E
        </div>
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
          Subir un proyecto
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <label
            htmlFor="project-name"
            style={{ display: "block", marginBottom: "4px" }}
          >
            Nombre del proyecto
          </label>
          <input
            id="project-name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Ingrese el nombre del proyecto"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => setUploadType("multimedia")}
            style={buttonStyle(uploadType === "multimedia")}
          >
            <span style={{ marginRight: "4px" }}>📷</span> Multimedia
          </button>
          <button
            onClick={() => setUploadType("file")}
            style={buttonStyle(uploadType === "file")}
          >
            <span style={{ marginRight: "4px" }}>📎</span> Archivo adjunto
          </button>
          <button
            onClick={() => setUploadType("code")}
            style={buttonStyle(uploadType === "code")}
          >
            <span style={{ marginRight: "4px" }}>💻</span> Fragmento de Código
          </button>
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={handleUpload}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4a90e2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Subir Proyecto
        </button>
      </div>
    </div>
  );
}
