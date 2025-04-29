import { create } from 'zustand';

interface ISplashStore {
  splashState: boolean;
  setSplashState: (state: boolean) => void;
}

const useSplashStore = create<ISplashStore>((set) => {
  const hasShownSplash = sessionStorage.getItem('hasShownSplash') === 'true';
  return {
    splashState: !hasShownSplash,
    setSplashState: (state) => {
      set({ splashState: state });
    },
  };
});

export default useSplashStore;
