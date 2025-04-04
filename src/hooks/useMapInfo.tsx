import { useEffect, useState } from 'react';
import useMapInfoStore from '@/store/mapInfoStore';
import { IBound } from '@/types';
import { IToiletBasicInfo } from '@/models/toiletBasicInfo.model';
import { toast } from 'react-toastify';
import { GEOLOCATION_ERROR_TOAST_MESSAGE } from '@/constants/errorMessage';
import { fetchToiletInfo } from '@/api/mainToiletInfo.api';
import useSelectedToiletInfo from './useSelectedToiletInfo';

const useMapInfo = () => {
  const [toiletInfoData, setToiletInfoData] = useState<IToiletBasicInfo[]>([]);
  const currentLocation = useMapInfoStore((state) => state.currentLocation);
  const center = useMapInfoStore((state) => state.center);
  const zoomLevel = useMapInfoStore((state) => state.zoomLevel);
  const errorCode = useMapInfoStore((state) => state.errorCode);
  const isFetchingCurrentLocation = useMapInfoStore(
    (store) => store.isFetchingCurrentLocation,
  );
  const setCurrentLocation = useMapInfoStore(
    (state) => state.setCurrentLocation,
  );
  const setCenter = useMapInfoStore((state) => state.setCenter);
  const setZoomLevel = useMapInfoStore((state) => state.setZoomLevel);
  const setErrorCode = useMapInfoStore((state) => state.setErrorCode);
  const setIsFetchingCurrentLocation = useMapInfoStore(
    (store) => store.setIsFetchingCurrentLocation,
  );
  const { setSelectedToiletInfo } = useSelectedToiletInfo();

  const getCurrentLocation = () => {
    if (isFetchingCurrentLocation) return;
    setIsFetchingCurrentLocation(true);
    const getCurrentLocationSuccess = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setCurrentLocation({ latitude, longitude });
      setCenter({ latitude, longitude });
      setErrorCode(null);
      setIsFetchingCurrentLocation(false);
    };

    const getCurrentLocationError = (error: GeolocationPositionError) => {
      console.error(error);
      setErrorCode(error.code);
      toast(GEOLOCATION_ERROR_TOAST_MESSAGE[error.code]);
      setIsFetchingCurrentLocation(false);
    };

    const getCurrentLocationOption = {
      enableHighAccuracy: true,
      timeout: 3000,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCurrentLocationSuccess,
        getCurrentLocationError,
        getCurrentLocationOption,
      );
    } else {
      const errorCode = GeolocationPositionError.POSITION_UNAVAILABLE;
      setErrorCode(errorCode);
      toast(GEOLOCATION_ERROR_TOAST_MESSAGE[errorCode]);
      setIsFetchingCurrentLocation(false);
    }
  };

  const getToiletInfoData = async (bound: IBound) => {
    try {
      const data = await fetchToiletInfo(center, bound);
      setToiletInfoData(data);
      setSelectedToiletInfo(data[0] || null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentLocation.latitude === null || currentLocation === null)
      getCurrentLocation();
  }, []);

  return {
    toiletInfoData,
    currentLocation,
    center,
    zoomLevel,
    errorCode,
    setCenter,
    setZoomLevel,
    getCurrentLocation,
    getToiletInfoData,
  };
};

export default useMapInfo;
