import styled from 'styled-components';
import { Theme } from '@/style/Theme';
import InfoIcon from './InfoIcon';
import LikeButton from './LikeButton';
import { StaticMap } from 'react-kakao-maps-sdk';
import { formatDateToString } from '@/utils/dateUtil';
import useDetailInfo from '@/hooks/useDetailInfo';
import { useEffect } from 'react';
import useSelectedToiletInfo from '@/hooks/useSelectedToiletInfo';
import { FaStar } from 'react-icons/fa';
import Divider from '../Common/Divider';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import Rating from './Rating';

const DetailView = () => {
  const { selectedToiletInfo } = useSelectedToiletInfo();
  const { detailInfo, loadDetailInfo } = useDetailInfo(selectedToiletInfo?.id);

  useEffect(() => {
    loadDetailInfo();
  }, [selectedToiletInfo]);

  return (
    <DetailViewStyle>
      {detailInfo && (
        <>
          <div className="basicInfo">
            <div className="title">
              <div className="name">{detailInfo.name}</div>
              <LikeButton />
            </div>
            <div className="address">
              {detailInfo.street_address
                ? detailInfo.street_address
                : detailInfo.lot_address}
            </div>
            <div className="openHours">{detailInfo.open_hour}</div>
            <div className="rating">
              <div className="ratingItem">
                청결도
                <div className="score">
                  <FaStar color="#FACC15" />
                  {detailInfo.avg_cleanliness}
                </div>
              </div>
              <div className="ratingItem">
                비품상태
                <div className="score">
                  <FaStar color="#FACC15" />
                  {detailInfo.avg_amenities}
                </div>
              </div>
              <div className="ratingItem">
                접근성
                <div className="score">
                  <FaStar color="#FACC15" />
                  {detailInfo.avg_accessibility}
                </div>
              </div>
            </div>
            <div className="update">
              <span>데이터 기준일</span>
              <span>
                {formatDateToString(detailInfo.facility.reference_date)}
              </span>
            </div>
          </div>
          <Divider>
            <div className="detailInfoIcons">
              <InfoIcon
                iconName="man"
                active={
                  detailInfo.facility.male_toilet > 0 ||
                  detailInfo.facility.male_urinal > 0
                }
                text="남성용"
              />
              <InfoIcon
                iconName="woman"
                active={detailInfo.facility.female_toilet > 0}
                text="여성용"
              />
              <InfoIcon
                iconName="wheelchair"
                active={
                  detailInfo.facility.disabled_male_toilet > 0 ||
                  detailInfo.facility.disabled_male_urinal > 0
                }
                size={1.5}
                text="장애인 남성용"
                extra={<AiOutlineMan size="0.9rem" color="white" />}
              />
              <InfoIcon
                iconName="wheelchair"
                active={detailInfo.facility.disabled_female_toilet > 0}
                size={1.5}
                text="장애인 여성용"
                extra={<AiOutlineWoman size="0.9rem" color="white" />}
              />
              <InfoIcon
                iconName="children"
                active={
                  detailInfo.facility.kids_toilet_female > 0 ||
                  detailInfo.facility.kids_toilet_male > 0
                }
                text="어린이"
              />
              <InfoIcon
                iconName="baby"
                active={detailInfo.facility.diaper_changing_station === 'Y'}
                text="기저귀 교환대"
              />

              <InfoIcon
                iconName="cctv"
                active={detailInfo.facility.cctv === 'Y'}
                text="CCTV"
              />
              <InfoIcon
                iconName="bell"
                active={detailInfo.facility.emergency_bell === 'Y'}
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
              <span>{detailInfo.management.phone_number}</span>
            </div>
          </Divider>
          <Rating
            total={detailInfo.avg_rating}
            cleanliness={detailInfo.avg_cleanliness}
            amenities={detailInfo.avg_amenities}
            accessibility={detailInfo.avg_accessibility}
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
