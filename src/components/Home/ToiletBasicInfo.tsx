import useToiletInfoStore from '@/store/toiletInfoStore';
import { Theme } from '@/style/Theme';
import { IToiletInfo } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface IToiletBasicInfo extends IToiletInfo {
  liked: boolean;
  nearest: boolean;
}

interface BasicInfoStyleProps {
  $isOpen: boolean;
}

const ToiletBasicInfo = () => {
  const info = useToiletInfoStore((state) => state.info);
  //const setInfo = useToiletInfoStore((state) => state.setInfo);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail');
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  return (
    <>
      {info && (
        <ToiletBasicInfoStyle $isOpen={isOpen}>
          <div onClick={handleClick}>
            <div className="title">
              <div className="name">{info.name}</div>
              {/* <div className="like">
                <LikeButton />
              </div> */}
            </div>
            <div className="address">
              {info.street_address ? info.street_address : info.lot_address}
            </div>
            <div className="bottom">
              <div className="openHours">{info.open_hour}</div>
              <div className="like">❤️100</div>
            </div>
          </div>
        </ToiletBasicInfoStyle>
      )}
    </>
  );
};

const ToiletBasicInfoStyle = styled.div<BasicInfoStyleProps>`
  position: absolute;
  z-index: 1000;
  width: 90%;
  bottom: 10px;
  left: 50%;
  padding: 16px 20px;
  background-color: white;
  min-height: 80px;
  border-radius: 16px 16px 0 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  transform: translateX(-50%)
    translateY(${({ $isOpen }) => ($isOpen ? '0%' : '100%')});
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
  &:hover {
    background-color: #fdfefe;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    font-size: ${Theme.fontSize.lg};
    color: ${Theme.colors.mainText};
    font-weight: bold;
  }

  .address {
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.subText};
    margin-top: 4px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }

  .openHours {
    font-size: ${Theme.fontSize.sm};
    color: ${Theme.colors.mainText};
    font-weight: 500;
  }

  .like {
    font-size: ${Theme.fontSize.md};
    font-weight: bold;
    color: ${Theme.colors.subText};
    margin-right: 10px;
  }

  /* .like svg {
    font-size: 18px;
  } */
`;
export default ToiletBasicInfo;
