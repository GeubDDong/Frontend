import { useAuthStore } from '@/store/authStore';

export const useAuth = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return { isLogin };
};
