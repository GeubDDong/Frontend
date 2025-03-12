import React from 'react';
import { ILocation } from '@/types';
import styled from 'styled-components';
import { Theme } from '@/style/Theme';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import { toast } from 'react-toastify';
import { ERROR_MESSAGE } from '@/constants/errorMessage';

interface ICurrentLocationButtonProps {
  onLocationChanged: React.Dispatch<React.SetStateAction<ILocation>>;
}

const CurrentLocationButton: React.FC<ICurrentLocationButtonProps> = ({
  onLocationChanged,
}) => {
  const { getLocation } = useCurrentLocation();
  const handleClick = async () => {
    await getLocation()
      .then((location) => {
        onLocationChanged(location);
      })
      .catch((errorCode) => {
        toast(ERROR_MESSAGE[errorCode]);
      });
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
