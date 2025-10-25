import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TokenType = {
  access: string;
};

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: TokenType | null;
  status: "idle" | "signOut" | "signIn";
  signIn: (token: TokenType, user: User) => void;
  signOut: () => void;
  hydrate: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      status: "idle",
      signIn: (token, user) => set({ token, user, status: "signIn" }),
      signOut: () => set({ token: null, user: null, status: "signOut" }),
      hydrate: () => {
        const { token, user } = get();
        if (token && user) set({ status: "signIn" });
        else set({ status: "signOut" });
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    }
  )
);

// 🔧 Helpers
export const getToken = () => useAuthStore.getState().token;
export const signOut = () => useAuthStore.getState().signOut();
export const hydrateAuth = () => useAuthStore.getState().hydrate();
