import { create } from 'zustand';

interface ISplashStore {
  splashState: boolean;
  setSplashState: (state: boolean) => void;
}

const useSplashStore = create<ISplashStore>((set) => ({
  splashState: true,
  setSplashState: (state) => {
    set({ splashState: state });
  },
}));

export default useSplashStore;
