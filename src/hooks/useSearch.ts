import kakaoPlacesService from '@/utils/kakaoPlacesService';
import { useState } from 'react';

const useSearch = () => {
  const [searchResult, setSearchResult] =
    useState<kakao.maps.services.PlacesSearchResult>([]);

  const searchAddress = (keyword: string) => {
    const ps = kakaoPlacesService;
    ps.keywordSearch(keyword, (data, status) => {
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
