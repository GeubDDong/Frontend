import { useEffect, useRef } from 'react';
import useLocationStore from '@/store/locationStore';
import { toast } from 'react-toastify';
import { ERROR_MESSAGE } from '@/constants/errorMessage';

const useCurrentLocation = () => {
  const setLocation = useLocationStore((state) => state.setLocation);
  const setErrorCode = useLocationStore((state) => state.setErrorCode);
  const watchIdRef = useRef<number | null>(null);
  const getLocation = () => {
    if (watchIdRef.current) {
      navigator.geolocation.clearWatch(watchIdRef.current);
    }

    const getLocationSuccess = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      setErrorCode(null);
    };

    const getLocationError = (error: GeolocationPositionError) => {
      console.error(error);
      setErrorCode(error.code);
      toast(ERROR_MESSAGE[error.code.toString()]);
    };

    const watchLocationError = (error: GeolocationPositionError) => {
      console.error(error);
      setErrorCode(error.code);
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
      watchIdRef.current = navigator.geolocation.watchPosition(
        getLocationSuccess,
        watchLocationError,
        getLocationOption,
      );
    } else {
      setErrorCode(2);
      toast(ERROR_MESSAGE['2']);
    }
  };

  useEffect(() => {
    getLocation();
    return () => {
      if (watchIdRef.current) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);

  return { getLocation };
};

export default useCurrentLocation;
