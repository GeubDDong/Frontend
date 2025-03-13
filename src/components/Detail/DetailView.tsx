import styled from 'styled-components';
import { Theme } from '@/style/Theme';
import InfoIcon from './InfoIcon';
import LikeButton from './LikeButton';
import { useEffect, useState } from 'react';
import { mockToiletDetail } from '@/mocks/mockData';

type TAvailable = 'Y' | 'N';
export interface IDetailView {
  id: number;
  name: string;
  street_address: string;
  lot_address: string;
  disabled_male: TAvailable;
  kids_toilet_male: TAvailable;
  disabled_female: TAvailable;
  kids_toilet_female: TAvailable;
  management_agency: string;
  phone_number: string;
  open_hour: string;
  latitude: number;
  longitude: number;
  emergency_bell: TAvailable;
  cctv: TAvailable;
  diaper_changing_station: TAvailable;
  data_reference_date: string;
}

const DetailView = () => {
  const [info, setInfo] = useState<IDetailView | null>(null);
  // TODO: api

  useEffect(() => {
    setTimeout(() => {
      setInfo(mockToiletDetail);
    }, 500);
  }, []);

  return (
    <>
      {info && (
        <DetailViewStyle>
          <div className="title">
            <div className="name">{info.name}</div>
            <div className="like">
              <LikeButton />
            </div>
          </div>
          <div className="address">
            {info.street_address ? info.street_address : info.lot_address}
          </div>
          <div className="update">데이터 기준일 {info.data_reference_date}</div>
          <div className="detailInfoIcons">
            <InfoIcon iconName="clock" active={true} text={info.open_hour} />
            <InfoIcon iconName="man" active={true} text="남성용" />
            <InfoIcon iconName="woman" active={true} text="여성용" />
            <InfoIcon
              iconName="children"
              active={info.kids_toilet_female === 'Y'}
              text="어린이 대변기"
            />
            <InfoIcon
              iconName="baby"
              active={info.diaper_changing_station === 'Y'}
              text="기저귀 교환대"
            />
            <InfoIcon
              iconName="wheelchair"
              active={info.disabled_female === 'Y'}
              text="장애인"
            />
            <InfoIcon iconName="cctv" active={info.cctv === 'Y'} text="CCTV" />
            <InfoIcon
              iconName="bell"
              active={info.emergency_bell === 'Y'}
              text="비상벨"
            />
          </div>
          <div className="management">
            <div className="title">관리기관</div>
            <span>{info.management_agency}</span>
            <span>{info.phone_number}</span>
          </div>
          <div className="map"></div>
        </DetailViewStyle>
      )}
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
`;
export default DetailView;
