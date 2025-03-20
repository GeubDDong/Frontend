import { useAuthStore } from '@/store/authStore';

export const useAuth = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return { isAuthenticated };
};
