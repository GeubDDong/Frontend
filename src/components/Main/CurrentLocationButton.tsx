import React from 'react';
import { ILocation } from '@/types';
import styled from 'styled-components';
import { Theme } from '@/style/Theme';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import useLocationStore from '@/store/locationStore';
import useCurrentLocation from '@/hooks/useCurrentLocation';

interface ICurrentLocationButtonProps {
  setCenter: React.Dispatch<React.SetStateAction<ILocation>>;
}

const CurrentLocationButton: React.FC<ICurrentLocationButtonProps> = ({
  setCenter,
}) => {
  const { getLocation } = useCurrentLocation();
  const handleClick = async () => {
    await getLocation();
    const errorCode = useLocationStore.getState().errorCode;
    if (errorCode !== null) {
      return;
    }
    const location = useLocationStore.getState().location;
    setCenter(location);
  };

  return (
    <CurrentLocationButtonStyle onClick={handleClick}>
      <FaLocationCrosshairs />
    </CurrentLocationButtonStyle>
  );
};

export default CurrentLocationButton;

const CurrentLocationButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: pointer;

  width: 45px;
  height: 45px;
  background-color: #3191ff;
  border-radius: 30px;

  position: absolute;
  bottom: 200px;
  right: 30px;

  svg {
    fill: ${Theme.colors.background};
  }
`;
