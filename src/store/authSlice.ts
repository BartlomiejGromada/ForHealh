import { User } from "@/types/Firebase";
import { StateCreator } from "zustand";

export type AuthSlice = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
};

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = set => ({
  user: null,
  isLoggedIn: false,
  login: user =>
    set({
      user: user,
      isLoggedIn: true,
    }),
  logout: () =>
    set({
      user: null,
      isLoggedIn: false,
    }),
});
