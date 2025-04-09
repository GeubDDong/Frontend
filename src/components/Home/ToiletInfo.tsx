import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import LikeButton from '../Detail/LikeButton';
import useSelectedToiletInfo from '@/hooks/useSelectedToiletInfo';

const ToiletInfo = () => {
  const { selectedToiletInfo } = useSelectedToiletInfo();

  return (
    <>
      {selectedToiletInfo && (
        <ToiletInfoStyle>
          <div className="title">
            <div className="name">{selectedToiletInfo.name}</div>
            <LikeButton />
          </div>
          <div className="address">
            {selectedToiletInfo.street_address
              ? selectedToiletInfo.street_address
              : selectedToiletInfo.lot_address}
          </div>
          <div className="openHours">{selectedToiletInfo.open_hours}</div>
        </ToiletInfoStyle>
      )}
    </>
  );
};

const ToiletInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 10px;
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
    color: ${Theme.colors.subText};
  }

  .openHours {
    font-size: ${Theme.fontSize.sm};
    color: ${Theme.colors.subText};
  }
`;
export default ToiletInfo;
