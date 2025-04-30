import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import logo from '@/assets/logo.png';
import { useEffect, useState } from 'react';
import useSplash from '@/hooks/useSplash';

const Splash = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const { setSplashState } = useSplash();

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setIsVisible(false), 1500);
    const unmountTimer = setTimeout(() => setSplashState(false), 2000);

    return () => {
      sessionStorage.setItem('hasShownSplash', 'true');
      clearTimeout(fadeOutTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <SplashStyle $isVisible={isVisible}>
      <img src={logo} alt="logo" />
      <span className="title">GeubDDong</span>
      <span className="content">사용자 위치 기반 공공 화장실 지도 서비스</span>
    </SplashStyle>
  );
};

export default Splash;

interface SplashStyleProps {
  $isVisible: boolean;
}

const SplashStyle = styled.div<SplashStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  z-index: ${Theme.zIndex.splash};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-out;

  img {
    width: 40%;
    aspect-ratio: 1 / 1;
  }

  .title {
    font-size: 24px;
  }

  .content {
    color: #6b6b6b;
    margin-top: 24px;
  }
`;
