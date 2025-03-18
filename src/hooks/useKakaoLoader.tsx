import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: import.meta.env.VITE_KAKAOMAP_API_KEY as string,
    libraries: ['clusterer', 'drawing', 'services'],
  });
}
