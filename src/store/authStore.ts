import { logout } from '@/api/auth.api';
import { create } from 'zustand';

interface IUseAuthStore {
  isLogin: boolean;
  logout: () => void;
}

export const useAuthStore = create<IUseAuthStore>((set) => ({
  isLogin: false,
  logout: async () => {
    try {
      await logout();
      set({ isLogin: false });
    } catch (error) {
      console.log(error);
    }
  },
}));
