import { create } from 'zustand';

interface IUseAuthStore {
  accessToken: string | null;
  isAuthenticated: boolean;
  setAccessToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<IUseAuthStore>((set) => ({
  accessToken: localStorage.getItem('accessToken') || null,
  isAuthenticated: !!localStorage.getItem('accessToken'),

  setAccessToken: (token) => {
    if (token) {
      localStorage.setItem('accessToken', token);
      set({ accessToken: token, isAuthenticated: true });
    } else {
      localStorage.removeItem('accessToken');
      set({ accessToken: null, isAuthenticated: false });
    }
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    set({ accessToken: null, isAuthenticated: false });
  },
}));
