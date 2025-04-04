import styled from 'styled-components';
import { Theme } from '@/style/Theme';
import InfoIcon from './InfoIcon';
import LikeButton from './LikeButton';
import useToiletInfoStore from '@/store/toiletInfoStore';
import { StaticMap } from 'react-kakao-maps-sdk';
import { formatDateToString } from '@/utils/dateUtil';
import useDetailInfo from '@/hooks/useDetailInfo';
import { useEffect } from 'react';

const DetailView = () => {
  const info = useToiletInfoStore((state) => state.info);
  const { detailInfo, loadDetailInfo, isLoading } = useDetailInfo(info?.id);
  const data = detailInfo || info;

  useEffect(() => {
    loadDetailInfo();
  }, []);

  if (!data) return null;

  return (
    <>
      <DetailViewStyle>
        <div className="title">
          <div className="name">{data.name}</div>
          <div className="like">
            <LikeButton />
          </div>
        </div>
        <div className="address">
          {data.street_address ? data.street_address : data.lot_address}
        </div>
        {detailInfo && (
          <div className="update">
            데이터 기준일 {formatDateToString(detailInfo.data_reference_date)}
          </div>
        )}
        <div className="detailInfoIcons">
          {isLoading ? (
            // TODO: 스켈레톤 UI
            <></>
          ) : (
            detailInfo && (
              <>
                <InfoIcon
                  iconName="clock"
                  active={true}
                  text={detailInfo.open_hour}
                />
                <InfoIcon iconName="man" active={true} text="남성용" />
                <InfoIcon iconName="woman" active={true} text="여성용" />
                <InfoIcon
                  iconName="children"
                  active={
                    detailInfo.kids_toilet_female === 'Y' ||
                    detailInfo.kids_toilet_male === 'Y'
                  }
                  text="어린이 대변기"
                />
                <InfoIcon
                  iconName="baby"
                  active={detailInfo.diaper_changing_station === 'Y'}
                  text="기저귀 교환대"
                />
                <InfoIcon
                  iconName="wheelchair"
                  active={
                    detailInfo.disabled_female === 'Y' ||
                    detailInfo.disabled_male === 'Y'
                  }
                  text="장애인"
                />
                <InfoIcon
                  iconName="cctv"
                  active={detailInfo.cctv === 'Y'}
                  text="CCTV"
                />
                <InfoIcon
                  iconName="bell"
                  active={detailInfo.emergency_bell === 'Y'}
                  text="비상벨"
                />
              </>
            )
          )}
        </div>
        <div className="management">
          <div className="title">관리기관</div>
          {detailInfo && (
            <>
              <span>{detailInfo.management_agency}</span>
              <span>{detailInfo.phone_number}</span>
            </>
          )}
        </div>
        <div className="map">
          {detailInfo && (
            <StaticMap
              center={{
                lat: data.latitude,
                lng: data.longitude,
              }}
              style={{
                width: '100%',
                height: '200px',
              }}
              level={3}
              marker
            />
          )}
        </div>
      </DetailViewStyle>
    </>
  );
};

const DetailViewStyle = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .name {
    font-size: ${Theme.fontSize.lg};
    color: ${Theme.colors.mainText};
    font-weight: bold;
  }

  .address {
    margin-top: 10px;
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.mainText};
  }

  .update {
    margin-top: 5px;
    font-size: ${Theme.fontSize.sm};
    color: ${Theme.colors.subText};
  }

  .detailInfoIcons {
    margin-top: 20px;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px 0;
  }

  .management {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
  }

  .management .title {
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.mainText};
    font-weight: bold;
  }

  .management span {
    font-size: ${Theme.fontSize.sm};
    color: ${Theme.colors.mainText};
  }

  .map {
    margin-top: 10px;
  }
`;
export default DetailView;
