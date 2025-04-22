import { useEffect, useRef, useState } from 'react';

const useSearch = () => {
  const [searchResult, setSearchResult] =
    useState<kakao.maps.services.PlacesSearchResult>([]);
  const psRef = useRef<kakao.maps.services.Places>();

  useEffect(() => {
    psRef.current = new kakao.maps.services.Places();
  }, []);

  const searchAddress = (keyword: string) => {
    if (!psRef.current) return;
    psRef.current.keywordSearch(keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setSearchResult(data);
      }
    });
  };

  const resetSearchResult = () => {
    setSearchResult([]);
  };

  return { searchResult, searchAddress, resetSearchResult };
};

export default useSearch;
