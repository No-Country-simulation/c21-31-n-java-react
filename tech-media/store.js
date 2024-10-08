import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null, // Estado inicial
  setUser: (userData) => set({ user: userData }), // Función para actualizar el estado del usuario
  clearUser: () => set({ user: null }), // Función para limpiar el estado del usuario (logout)
}));
