import { useAuthStore } from '@/store/authStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get('accessToken');
    const isNewUser = queryParams.get('flag') === 'newUser';

    if (accessToken) {
      setAccessToken(accessToken);

      if (isNewUser) {
        navigate('/profileSetup');
      } else {
        navigate('/');
      }
    }
  }, []);

  return <p>로그인 처리 중..</p>;
};

export default AuthCallback;
