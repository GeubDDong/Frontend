import { create } from 'zustand';

interface IUseAuthStore {
  accessToken: string | null;
  isLogin: boolean;
  setAccessToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<IUseAuthStore>((set) => ({
  accessToken: localStorage.getItem('accessToken') || null,
  isLogin: !!localStorage.getItem('accessToken'),

  setAccessToken: (token) => {
    if (token) {
      localStorage.setItem('accessToken', token);
      set({ accessToken: token, isLogin: true });
    } else {
      localStorage.removeItem('accessToken');
      set({ accessToken: null, isLogin: false });
    }
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    set({ accessToken: null, isLogin: false });
  },
}));
