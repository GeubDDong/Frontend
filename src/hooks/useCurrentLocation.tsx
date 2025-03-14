import { useEffect } from 'react';
import useLocationStore from '@/store/locationStore';
import { ILocation } from '@/types';

const useCurrentLocation = () => {
  const setLocation = useLocationStore((state) => state.setLocation);
  const setErrorCode = useLocationStore((state) => state.setErrorCode);
  const getLocation = (): Promise<ILocation> => {
    return new Promise<ILocation>((resolve, reject) => {
      const getLocationSuccess = (position: GeolocationPosition) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({ latitude, longitude });
        setErrorCode(null);
        resolve({ latitude, longitude });
      };

      const getLocationError = (error: GeolocationPositionError) => {
        console.error(error);
        setErrorCode(error.code);
        reject(error.code);
      };

      const getLocationOption = {
        enableHighAccuracy: true,
        timeout: 5000,
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          getLocationSuccess,
          getLocationError,
          getLocationOption,
        );
      } else {
        const errorCode = GeolocationPositionError.POSITION_UNAVAILABLE;
        setErrorCode(errorCode);
        reject(errorCode);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { getLocation };
};

export default useCurrentLocation;
