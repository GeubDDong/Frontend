import { login, logout } from '@/api/auth.api';
import AuthUserModel from '@/models/auth.model';
import { useAuthStore } from '@/store/authStore';
import { TLoginProvider } from '@/types';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin = async (provider: TLoginProvider, code: string) => {
    try {
      const res = await login(provider, code);
      setUser(new AuthUserModel(res).user);
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  const updateNickname = (nickname: string) => {
    if (!user) return;
    setUser({ ...user, nickname });
  };

  const isLogin = !!user;

  return {
    user,
    isLogin,
    login: handleLogin,
    logout: handleLogout,
    updateNickname,
  };
};

export default useAuth;
