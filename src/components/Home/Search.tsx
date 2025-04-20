import useMapInfo from '@/hooks/useMapInfo';
import useSearch from '@/hooks/useSearch';
import { Theme } from '@/style/Theme';
import { useEffect, useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const Search = () => {
  const { setCenter } = useMapInfo();
  const [keyword, setKeyword] = useState('');
  const { searchResult, searchAddress, resetSearchResult } = useSearch();

  useEffect(() => {
    if (!keyword) return;
    searchAddress(keyword);
  }, [keyword]);

  const handleClickItem = (x: string, y: string) => {
    setKeyword('');
    resetSearchResult();
    const latitude = parseFloat(y);
    const longitude = parseFloat(x);
    setCenter({ latitude, longitude });
  };

  const handleClickClose = () => {
    setKeyword('');
    resetSearchResult();
  };

  return (
    <SearchStyle>
      <div className="search_container">
        <FaSearch className="search_icon" />
        <input
          type="text"
          className="search_input"
          placeholder="장소를 검색하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {keyword && searchResult.length > 0 && (
          <FaPlus className="close_icon" onClick={handleClickClose} />
        )}
      </div>
      {keyword && searchResult.length > 0 && (
        <div className="result_container">
          {searchResult.map((item) => (
            <div
              key={item.id}
              className="result_item"
              onClick={() => handleClickItem(item.x, item.y)}
            >
              <span className="place_name">{item.place_name}</span>
              <span className="address_name">{item.address_name}</span>
            </div>
          ))}
        </div>
      )}
    </SearchStyle>
  );
};

export default Search;

const SearchStyle = styled.div`
  position: absolute;
  z-index: 9999;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  height: 45px;
  width: 95%;
  background-color: ${Theme.colors.background};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  .search_container {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 5px;
    background-color: ${Theme.colors.background};
    justify-content: center;
    align-items: center;

    .search_icon {
      margin: 0 5px 0 5px;
      height: 20px;
      width: 20px;
    }

    .search_input {
      width: 100%;
      height: calc(100% - 10px);
      margin: 0;
      padding: 5px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      color: #333;
      background-color: ${Theme.colors.background};

      &:focus {
        outline: none;
      }
    }

    .close_icon {
      transform: rotate(45deg);
      margin: 0 5px 0 5px;
      height: 15px;
      width: 15px;
    }
  }

  .result_container {
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;

    .result_item {
      padding: 10px;
      cursor: pointer;
      display: flex;
      flex-direction: column;

      .place_name {
        color: #191919;
        font-size: 16px;
      }

      .address_name {
        color: #777777;
        font-size: 12px;
        margin-top: 5px;
      }

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
`;
