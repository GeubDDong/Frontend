import { useEffect, useState } from 'react';
import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

function useKakaoLoader() {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);

  useKakaoLoaderOrigin({
    appkey: import.meta.env.VITE_KAKAOMAP_API_KEY as string,
    libraries: ['clusterer', 'drawing', 'services'],
  });

  useEffect(() => {
    if (window.kakao !== undefined) setIsKakaoLoaded(true);
  }, [window.kakao]);

  return { isKakaoLoaded };
}

export default useKakaoLoader;
