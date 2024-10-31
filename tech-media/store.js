import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null, // Estado inicial
  userPublicaciones: [],
  userProyectos: [],
  contactos: [],
  proyectos: [
    {
      titulo: "Plataforma de E-commerce con React y Node.js",
      descripcion:
        "Desarrollo de una plataforma de e-commerce completa, con carrito de compras, gestión de usuarios y procesamiento de pagos.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "María",
        apellido: "González",
        rol: "Fullstack Developer",
      },
    },
    {
      titulo: "Aplicación de Gestión de Tareas con React Native",
      descripcion:
        "Aplicación móvil para organizar y gestionar tareas, con integración de autenticación y notificaciones push.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Lucas",
        apellido: "Pérez",
        rol: "Mobile Developer",
      },
    },
    {
      titulo: "Sistema de Monitoreo de Servidores en Tiempo Real",
      descripcion:
        "Proyecto de monitoreo de servidores con alertas en tiempo real y dashboards interactivos usando Grafana y Prometheus.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Silvia",
        apellido: "Torres",
        rol: "DevOps Engineer",
      },
    },
    {
      titulo: "Aplicación de Chat en Tiempo Real con Socket.io",
      descripcion:
        "Desarrollo de una aplicación de mensajería con soporte de chats en tiempo real, grupos y notificaciones.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Fernando",
        apellido: "Sosa",
        rol: "Backend Developer",
      },
    },
    {
      titulo: "Portal de Noticias con Headless CMS y Next.js",
      descripcion:
        "Creación de un portal de noticias utilizando un CMS sin cabeza, con soporte de contenido dinámico y SEO optimizado.",
      imagen: "https://via.placeholder.com/400x200",
      usuario: {
        nombre: "Daniela",
        apellido: "Ramírez",
        rol: "Frontend Developer",
      },
    },
  ],
  
  publicacion: [
    {
      titulo: "Introducción a Docker para Desarrolladores",
      descripcion:
        "Descubre cómo Docker puede mejorar el proceso de desarrollo, simplificando la gestión de entornos y el despliegue de aplicaciones.",
      imagen: "https://docs.docker.com/desktop/images/build-ui-active-builds.webp",
      usuario: {
        nombre: "Laura",
        apellido: "Fernández",
        rol: "DevOps Engineer",
      },
    },
    {
      titulo: "Novedades de React 18",
      descripcion:
        "Explora las nuevas características de React 18 y cómo estas mejoras pueden optimizar el rendimiento de tus aplicaciones.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrO1mVlDXnBTjegbX9RG06faHVdz6Ns0QYg&s",
      usuario: {
        nombre: "Carlos",
        apellido: "Mendoza",
        rol: "Frontend Developer",
      },
    },
    {
      titulo: "Patrones de Diseño en Arquitectura de Microservicios",
      descripcion:
        "Aprende sobre los patrones de diseño más comunes para implementar una arquitectura de microservicios escalable y mantenible.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PBhCOpEq6Pk5hExne52JxTUmron-yLWs1A&s",
      usuario: {
        nombre: "Ana",
        apellido: "Rodríguez",
        rol: "Software Architect",
      },
    },
    {
      titulo: "Mejores Prácticas de Seguridad en Node.js",
      descripcion:
        "Conoce las mejores prácticas para asegurar tus aplicaciones Node.js y protegerlas de vulnerabilidades comunes.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy-RD9r6ORHfaeOWe6suY1ec28Z1DQMsZzA&s",
      usuario: {
        nombre: "Pedro",
        apellido: "Martínez",
        rol: "Backend Developer",
      },
    },
    {
      titulo: "Optimización de Consultas en Bases de Datos SQL",
      descripcion:
        "Tips y estrategias para mejorar el rendimiento de tus consultas SQL y optimizar el manejo de bases de datos en aplicaciones de gran escala.",
      imagen: "https://res.cloudinary.com/cristotodev/image/upload/v1716969914/cristotodev/blog/sql_cfui24.webp",
      usuario: {
        nombre: "Sara",
        apellido: "López",
        rol: "Database Administrator",
      },
    },
  ],
  
  setUser: (userData) => set({ user: userData }), // Función para actualizar el estado del usuario
  clearUser: () => set({ user: null }), // Función para limpiar el estado del usuario (logout)
  addPublicacion: (publicacion) =>
    set((state) => ({
      proyectos: [publicacion, ...state.proyectos],
    })),

  addPublicacion1: (publicacion) =>
    set((state) => ({
      publicacion: [publicacion, ...state.publicacion],
    })),
  addPublicacionUser: (publicacion) =>
    set((state) => ({
      userPublicaciones: [...state.userPublicaciones, publicacion],
    })),
  addProyectosUser: (publicacion) =>
    set((state) => ({
      userProyectos: [...state.userProyectos, publicacion],
    })),
  setContactos: (contacto) =>
    set((state) => ({
      contactos: [...state.contactos, contacto],
    })),

    removeContacto: (nombre) =>
      set((state) => ({
        contactos: state.contactos.filter(
          (contacto) => contacto.nombre !== nombre
        ),
      })),
}));
