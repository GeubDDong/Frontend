import { logout } from '@/api/auth.api';
import { TLoginProvider } from '@/types';
import { create } from 'zustand';

interface IUseAuthStore {
  isLogin: boolean;
  logout: (provider: TLoginProvider) => void;
}

export const useAuthStore = create<IUseAuthStore>((set) => ({
  isLogin: false,
  logout: async (provider: TLoginProvider) => {
    try {
      await logout();
      set({ isLogin: false });

      switch (provider) {
        case 'kakao': {
          window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${import.meta.env.VITE_KAKAO_OAUTH_API_KEY}&logout_redirect_uri=http://localhost:3000/`;
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
