import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/hooks/useKakaoLoader';

function Home() {
  useKakaoLoader();
  return (
    <Map
      id="map"
      center={{
        lat: 33.450701, // 기준 좌표 현위치 개발 시 수정
        lng: 126.570667, // 기준 좌표 현위치 개발 시 수정
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
      level={3}
    />
  );
}

export default Home;
