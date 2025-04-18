import useSelectedInfo from '@/hooks/useSelectedInfo';
import { IMapMarkersModelToiletItem } from '@/models/mapMarkerInfo.model';
import { FaHeart, FaPlus } from 'react-icons/fa';
import { MapInfoWindow } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const InfoWindow = () => {
  const { selectedMarker, setIsInfoOpened, setSelectedToilet } =
    useSelectedInfo();

  const handleClick = (info: IMapMarkersModelToiletItem) => {
    setSelectedToilet(info);
    setIsInfoOpened(false);
  };

  return (
    <MapInfoWindow
      position={{
        lat: selectedMarker!.markerLatitude + 0.0001,
        lng: selectedMarker!.markerLongitude,
      }}
    >
      <InfoWindowStyle>
        <div className="header">
          <FaPlus
            className="close_icon"
            onClick={() => setIsInfoOpened(false)}
          />
        </div>
        <div className="contents">
          {selectedMarker!.toilets.map((item) => (
            <div
              key={item.id}
              className="contents_item"
              onClick={() => handleClick(item)}
            >
              <span className="toilet_name">{item.name}</span>
              {item.isLiked && <FaHeart className="like_icon" />}
            </div>
          ))}
        </div>
      </InfoWindowStyle>
    </MapInfoWindow>
  );
};

export default InfoWindow;

const InfoWindowStyle = styled.div`
  display: flex;
  position: relative;
  width: 200px;
  max-height: 150px;
  flex-direction: column;
  .header {
    height: 25px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .close_icon {
      transform: rotate(45deg);
      margin: 5px 5px 0 0;
      height: 15px;
      width: 15px;
    }
  }
  .contents {
    width: 100%;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    .contents_item {
      height: 36px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      position: relative;
      .toilet_name {
        max-width: 170px;
      }
      .like_icon {
        width: 8px;
        height: 8px;
        fill: #eb3b41;
      }
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 10%;
        width: 80%;
        height: 1px;
        background-color: #ddd;
      }
    }
  }
`;
