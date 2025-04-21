import { login, logout } from '@/api/auth.api';
import { useAuthStore } from '@/store/authStore';
import { TLoginProvider } from '@/types';

const useAuth = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async (provider: TLoginProvider, code: string) => {
    try {
      const res = await login(provider, code);
      setUser(res.user);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  const isLogin = !!user;

  return {
    user,
    isLogin,
    login: handleLogin,
    logout: handleLogout,
  };
};

export default useAuth;
