import styled from 'styled-components';
import { Theme } from '@/style/Theme';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import useMapInfo from '@/hooks/useMapInfo';

interface CurrentLocationButtonProps {
  bottomOffset: number;
}

const CurrentLocationButton = ({
  bottomOffset,
}: CurrentLocationButtonProps) => {
  const { getCurrentLocation } = useMapInfo();

  return (
    <CurrentLocationButtonStyle
      $bottomOffset={bottomOffset}
      onClick={getCurrentLocation}
    >
      <FaLocationCrosshairs />
    </CurrentLocationButtonStyle>
  );
};

export default CurrentLocationButton;

const CurrentLocationButtonStyle = styled.div.attrs<{ $bottomOffset: number }>(
  (props) => ({
    style: {
      bottom: `${props.$bottomOffset}px`,
    },
  }),
)`
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

  right: 30px;

  svg {
    fill: ${Theme.colors.primary};
    height: 50%;
    width: 50%;
  }
`;
