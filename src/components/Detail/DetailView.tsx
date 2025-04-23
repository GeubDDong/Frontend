import styled from 'styled-components';
import { Theme } from '@/style/Theme';
import InfoIcon from './InfoIcon';
import LikeButton from './LikeButton';
import { StaticMap } from 'react-kakao-maps-sdk';
import useDetailInfo from '@/hooks/useDetailInfo';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Divider from '../Common/Divider';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import Rating from './Rating';
import useSelectedInfo from '@/hooks/useSelectedInfo';

const DetailView = () => {
  const { selectedToilet } = useSelectedInfo();
  const { detailInfo, loadDetailInfo } = useDetailInfo(selectedToilet?.id);

  useEffect(() => {
    loadDetailInfo();
  }, [selectedToilet?.id]);

  return (
    <DetailViewStyle>
      {detailInfo && (
        <>
          <div className="basicInfo">
            <div className="title">
              <div className="name">{detailInfo.name}</div>
              <LikeButton />
            </div>
            <div className="address">{detailInfo.address}</div>
            <div className="openHours">{detailInfo.openHour}</div>
            <div className="rating">
              <div className="ratingItem">
                청결도
                <div className="score">
                  <FaStar color={Theme.colors.star} />
                  {detailInfo.cleanliness}
                </div>
              </div>
              <div className="ratingItem">
                비품상태
                <div className="score">
                  <FaStar color={Theme.colors.star} />
                  {detailInfo.amenities}
                </div>
              </div>
              <div className="ratingItem">
                접근성
                <div className="score">
                  <FaStar color={Theme.colors.star} />
                  {detailInfo.accessibility}
                </div>
              </div>
            </div>
            <div className="update">
              <span>데이터 기준일</span>
              <span>{detailInfo.facility.referenceDate}</span>
            </div>
          </div>
          <Divider>
            <div className="detailInfoIcons">
              <InfoIcon
                iconName="man"
                active={detailInfo.facility.hasMale}
                text="남성용"
              />
              <InfoIcon
                iconName="woman"
                active={detailInfo.facility.hasFemale}
                text="여성용"
              />
              <InfoIcon
                iconName="wheelchair"
                active={detailInfo.facility.hasDisabledMale}
                size={1.5}
                text="장애인 남성용"
                extra={<AiOutlineMan size="0.9rem" color="white" />}
              />
              <InfoIcon
                iconName="wheelchair"
                active={detailInfo.facility.hasDisabledFemale}
                size={1.5}
                text="장애인 여성용"
                extra={<AiOutlineWoman size="0.9rem" color="white" />}
              />
              <InfoIcon
                iconName="children"
                active={detailInfo.facility.hasKids}
                text="어린이"
              />
              <InfoIcon
                iconName="baby"
                active={detailInfo.facility.hasDiaperChangingStation}
                text="기저귀 교환대"
              />

              <InfoIcon
                iconName="cctv"
                active={detailInfo.facility.hasCCTV}
                text="CCTV"
              />
              <InfoIcon
                iconName="bell"
                active={detailInfo.facility.hasBell}
                text="비상벨"
              />
            </div>
          </Divider>
          <Divider>
            <div className="map">
              <StaticMap
                center={{
                  lat: detailInfo.latitude,
                  lng: detailInfo.longitude,
                }}
                style={{
                  width: '100%',
                  height: '200px',
                }}
                level={3}
                marker
              />
            </div>
          </Divider>
          <Divider>
            <div className="management">
              <div className="title">관리기관</div>

              <span>{detailInfo.management.name}</span>
              <span>{detailInfo.management.phone}</span>
            </div>
          </Divider>
          <Rating
            total={detailInfo.rating}
            cleanliness={detailInfo.cleanliness}
            amenities={detailInfo.amenities}
            accessibility={detailInfo.accessibility}
          />
        </>
      )}
    </DetailViewStyle>
  );
};

const DetailViewStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .basicInfo {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .title {
    display: flex;
    gap: 8px;
  }

  .name {
    font-size: ${Theme.fontSize.lg};
    color: ${Theme.colors.mainText};
    font-weight: bold;
  }

  .address {
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.mainText};
  }

  .openHours {
    font-size: ${Theme.fontSize.sm};
    color: ${Theme.colors.mainText};
  }

  .rating {
    display: flex;
    gap: 16px;
    font-size: ${Theme.fontSize.sm};
    color: ${Theme.colors.mainText};
  }

  .ratingItem {
    display: flex;
    gap: 5px;
  }

  .score {
    display: flex;
    gap: 2px;
  }

  .update {
    margin-top: 5px;
    font-size: ${Theme.fontSize.sm};
    color: ${Theme.colors.subText};
    display: flex;
    gap: 5px;
  }

  .detailInfoIcons {
    margin-top: 20px;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px 0;
  }

  .management {
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* margin-top: 20px; */
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
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.mainText};
    font-weight: bold;
  }
`;
export default DetailView;
