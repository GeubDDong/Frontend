import styled from 'styled-components';
import { Theme } from '@/style/Theme';
import InfoIcon from './InfoIcon';
import BackButton from '../Common/BackButton';
import LikeButton from './LikeButton';

const DetailView = () => {
  return (
    <>
      <p>
        <BackButton />
      </p>
      <DetailViewStyle>
        <div className="title">
          <div className="name">화장실 이름</div>
          <div className="like">
            <LikeButton />
          </div>
        </div>
        <div className="address">화장실 주소</div>
        <div className="update">데이터 기준일</div>
        <div className="detailInfoIcons">
          <InfoIcon iconName="clock" active={true} text="24시간" />
          <InfoIcon iconName="man" active={true} text="남성용" />
          <InfoIcon iconName="woman" active={false} text="여성용" />
          <InfoIcon iconName="children" active={false} text="어린이 대변기" />
          <InfoIcon iconName="baby" active={false} text="기저귀 교환대" />
          <InfoIcon iconName="wheelchair" active={false} text="장애인" />
          <InfoIcon iconName="cctv" active={false} text="CCTV" />
          <InfoIcon iconName="bell" active={false} text="비상벨" />
        </div>
        <div className="management">
          <div className="title">관리기관</div>
          <span>number</span>
        </div>
        <div className="map"></div>
      </DetailViewStyle>
    </>
  );
};

const DetailViewStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

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
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.subText};
  }

  .detailInfoIcons {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px 0px;
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
