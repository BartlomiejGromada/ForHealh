import { create } from "zustand";
import { AuthSlice, createAuthSlice } from "./authSlice";
import { immer } from "zustand/middleware/immer";

type AppState = AuthSlice;

export const useAppStore = create<AppState>()(
  immer((...args) => ({
    ...createAuthSlice(...args),
  }))
);
