import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';

const Kakao = () => {
  const { login } = useAuth();

  useEffect(() => {
    login('kakao');
  });

  return <div>Kakao 로그인 하는 중...</div>;
};

export default Kakao;
