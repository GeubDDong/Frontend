import useSplashStore from '@/store/splashStore';

const useSplash = () => {
  const splashState = useSplashStore((state) => state.splashState);
  const setSplashState = useSplashStore((state) => state.setSplashState);

  return {
    splashState,
    setSplashState,
  };
};

export default useSplash;
