import styled from 'styled-components';
import { Theme } from '@/style/Theme';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import { toast } from 'react-toastify';
import { GEOLOCATION_ERROR_TOAST_MESSAGE } from '@/constants/errorMessage';
import useLocationStore from '@/store/locationStore';

const CurrentLocationButton = () => {
  const setCenter = useLocationStore((state) => state.setCenter);
  const { getLocation } = useCurrentLocation();
  const handleClick = async () => {
    await getLocation()
      .then((location) => {
        setCenter(location);
      })
      .catch((errorCode) => {
        toast(GEOLOCATION_ERROR_TOAST_MESSAGE[errorCode]);
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
