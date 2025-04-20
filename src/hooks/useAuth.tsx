import { login } from '@/api/auth.api';
import { useAuthStore } from '@/store/authStore';
import { TLoginProvider } from '@/types';

const useAuth = () => {
  const isLogin = useAuthStore((state) => state.isLogin);

  const handleLogin = async (provider: TLoginProvider, code: string) => {
    try {
      const res = await login(provider, code);
      console.log(res);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return { isLogin, login: handleLogin };
};

export default useAuth;
