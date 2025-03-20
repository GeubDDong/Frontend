import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get('accessToken');

    if (accessToken) {
      console.log('로그인 성공! 받은 accessToken:', accessToken);

      localStorage.setItem('accessToken', accessToken);

      const flag = queryParams.get('flag');

      if (flag) {
        navigate('/profileSetup');
      } else {
        navigate('/');
      }
    }
  }, []);

  return null;
};

export default AuthCallback;
