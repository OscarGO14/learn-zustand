import { create } from "zustand";

const initialState = {
  count: 0,
  name: null,
};

export const useBearStore = create((set) => ({
  count: initialState.count,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
}));

export const useUserStore = create((set) => ({
  name: initialState.name,
  setName: (name) => set({ name }),
  logOut: () => set({ name: initialState.name }),
}));
