import { useAuthStore } from '@/store/authStore';

const useAuth = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return { isLogin };
};

export default useAuth;
