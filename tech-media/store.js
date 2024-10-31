import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null, // Estado inicial
  proyectos: [
    {
      titulo: "Publicación 1",
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Ezequiel",
        apellido: "Ramos",
        rol: "Desarrollador Backend",
      },
    },
    {
      titulo: "Publicación 2",
      descripcion:
        "Lorem Ipsum has been the industry's standard dummy text ever since.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Juan",
        apellido: "Lencina",
        rol: "Desarrollador Frontend",
      },
    },
    {
      titulo: "Publicación 3",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Publicación 4",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Publicación 5",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Publicación 6",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
    {
      titulo: "Publicación 7",
      descripcion:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Mateo",
        apellido: "Gomez",
        rol: "Desarrollador Fullstack",
      },
    },
  ],
  publicacion: [
    {
      titulo: "Publicación 1",
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Ezequiel",
        apellido: "Ramos",
        rol: "Desarrollador Backend",
      },
    },
    {
      titulo: "Publicación 2",
      descripcion:
        "Lorem Ipsum has been the industry's standard dummy text ever since.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Juan",
        apellido: "Lencina",
        rol: "Desarrollador Frontend",
      },
    },

  ],
  setUser: (userData) => set({ user: userData }), // Función para actualizar el estado del usuario
  clearUser: () => set({ user: null }), // Función para limpiar el estado del usuario (logout)
  addPublicacion: (publicacion) =>
    set((state) => ({
      proyectos: [...state.proyectos, publicacion],
    })),

    addPublicacion1: (publicacion) =>
      set((state) => ({
        publicacion: [...state.publicacion, publicacion],
      })),
}));
