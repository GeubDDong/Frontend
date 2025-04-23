import useAuth from '@/hooks/useAuth';
import { TLoginProvider } from '@/types';
import { useEffect } from 'react';

interface LoginCallbackProps {
  provider: TLoginProvider;
}

const LoginCallback = ({ provider }: LoginCallbackProps) => {
  const { login } = useAuth();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    if (code) {
      login(provider, code);
    }
  });

  return <div>로그인 하는 중...</div>;
};

export default LoginCallback;
