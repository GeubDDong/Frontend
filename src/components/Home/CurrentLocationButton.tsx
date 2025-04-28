import styled from 'styled-components';
import { Theme } from '@/style/Theme';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import useMapInfo from '@/hooks/useMapInfo';

const CurrentLocationButton = () => {
  const { getCurrentLocation } = useMapInfo();

  return (
    <CurrentLocationButtonStyle onClick={getCurrentLocation}>
      <FaLocationCrosshairs />
    </CurrentLocationButtonStyle>
  );
};

export default CurrentLocationButton;

const CurrentLocationButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${Theme.zIndex.element};
  cursor: pointer;

  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  position: absolute;
  bottom: 200px;
  right: 30px;

  svg {
    fill: ${Theme.colors.primary};
    height: 50%;
    width: 50%;
  }
`;
