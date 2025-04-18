import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';

const Kakao = () => {
  const { login } = useAuth();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    if (code) {
      login('kakao', code);
    }
  });

  return <div>Kakao 로그인 하는 중...</div>;
};

export default Kakao;
