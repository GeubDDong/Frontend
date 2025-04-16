import { login } from '@/api/auth.api';
import { useAuthStore } from '@/store/authStore';
import { TLoginProvider } from '@/types';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const navigate = useNavigate();

  const handleLogin = async (provider: TLoginProvider) => {
    try {
      const res = await login(provider);
      console.log(res);

      if (res.nickName) {
        navigate('/');
      } else {
        navigate('/profileSetup');
      }

      setAccessToken(res.accessToken);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return { isLogin, login: handleLogin };
};

export default useAuth;
