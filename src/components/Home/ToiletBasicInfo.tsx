import { mockToiletBasicInfo } from '@/mocks/mockData';
import useToiletInfoStore from '@/store/toiletInfoStore';
import { Theme } from '@/style/Theme';
import { IToiletInfo } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LikeButton from '../Detail/LikeButton';

export interface IToiletBasicInfo extends IToiletInfo {
  liked: boolean;
  nearest: boolean;
}

interface BasicInfoStyleProps {
  $isOpen: boolean;
}

const ToiletBasicInfo = () => {
  const info = useToiletInfoStore((state) => state.info);
  const setInfo = useToiletInfoStore((state) => state.setInfo);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail');
  };

  // TODO: api

  useEffect(() => {
    setInfo(mockToiletBasicInfo);
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
              <div className="like">
                <LikeButton />
              </div>
            </div>
            <div className="address">
              {info.street_address ? info.street_address : info.lot_address}
            </div>
            <div className="openHours">{info.open_hours}</div>
          </div>
        </ToiletBasicInfoStyle>
      )}
    </>
  );
};

const ToiletBasicInfoStyle = styled.div<BasicInfoStyleProps>`
  position: absolute;
  z-index: 1000;
  width: 95%;
  bottom: 0;
  left: 50%;
  padding: 20px 0 20px 20px;
  background-color: white;
  min-height: 70px;
  height: '12vh';
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  transform: translateX(-50%)
    translateY(${({ $isOpen }) => ($isOpen ? '0%' : '100%')});
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

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

  .openHours {
    margin-top: 10px;
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.mainText};
  }
`;
export default ToiletBasicInfo;
