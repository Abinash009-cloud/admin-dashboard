// src/store/productStore.js
import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
  updateProduct: (updated) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === updated.id ? updated : p
      ),
    })),
  setProducts: (list) => set({ products: list }),
}));
