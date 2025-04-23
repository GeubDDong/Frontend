import { IUserInfo } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUseAuthStore {
  user: IUserInfo | null;
  setUser: (user: IUserInfo | null) => void;
}

export const useAuthStore = create<IUseAuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'auth-user',
      partialize: (state) => ({ user: state.user }),
    },
  ),
);
