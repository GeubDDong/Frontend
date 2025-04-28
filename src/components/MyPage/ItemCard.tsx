import { removeComment, removeLike } from '@/api/detail.api';
import useMapInfo from '@/hooks/useMapInfo';
import useSelectedInfo from '@/hooks/useSelectedInfo';
import MyPageModel, { IFavoriteItem, IReviewItem } from '@/models/myPage.model';
import { Theme } from '@/style/Theme';
import { TTabType } from '@/types';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IItemCardProps {
  tabType: TTabType;
  item: IFavoriteItem | IReviewItem;
  listItems: MyPageModel;
  setListItems: React.Dispatch<React.SetStateAction<MyPageModel | null>>;
}

interface IScoreComponentProps {
  cleanliness: number;
  amenities: number;
  accessibility: number;
}

const ItemCard = ({
  tabType,
  item,
  listItems,
  setListItems,
}: IItemCardProps) => {
  const { setCenter } = useMapInfo();
  const { setSelectedToilet } = useSelectedInfo();
  const navigate = useNavigate();

  const handleClickCard = () => {
    if (tabType === 'likeList') {
      setCenter({
        latitude: (item as IFavoriteItem).latitude,
        longitude: (item as IFavoriteItem).longitude,
      });
      setSelectedToilet((item as IFavoriteItem).id);
    } else if (tabType === 'reviewList') {
      setCenter({
        latitude: (item as IReviewItem).latitude,
        longitude: (item as IReviewItem).longitude,
      });
      setSelectedToilet((item as IReviewItem).toiletId);
    }
    navigate('/');
  };

  const handleClickDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const newListItemsResponse = listItems.toResponse();
      if (tabType === 'likeList') {
        await removeLike((item as IFavoriteItem).id);
        newListItemsResponse.favorites = newListItemsResponse.favorites.filter(
          (res) => res.id !== (item as IFavoriteItem).id,
        );
      } else if (tabType === 'reviewList') {
        await removeComment(
          (item as IReviewItem).toiletId,
          (item as IReviewItem).id,
        );
        newListItemsResponse.reviews = newListItemsResponse.reviews.filter(
          (res) => res.id !== (item as IReviewItem).id,
        );
      }
      setListItems(new MyPageModel(newListItemsResponse));
    } catch (error) {
      console.error(error);
    }
  };

  const ScoreComponent = ({
    cleanliness,
    amenities,
    accessibility,
  }: IScoreComponentProps) => {
    return (
      <div className="score">
        <span>
          청결도 <FaStar className="score_icon" />
          {cleanliness}
        </span>
        <span>
          비품 관리 <FaStar className="score_icon" />
          {amenities}
        </span>
        <span>
          접근성 <FaStar className="score_icon" />
          {accessibility}
        </span>
      </div>
    );
  };

  return (
    <ItemCardStyle onClick={handleClickCard}>
      <FaRegTrashCan className="delete_button" onClick={handleClickDelete} />
      {tabType === 'likeList' && (
        <div className="card">
          <span className="name">{(item as IFavoriteItem).name}</span>
          <span className="address">
            {(item as IFavoriteItem).streetAddress ||
              (item as IFavoriteItem).lotAddress}
          </span>
          <ScoreComponent
            cleanliness={item.avgCleanliness}
            amenities={item.avgAmenities}
            accessibility={item.avgAccessibility}
          />
        </div>
      )}
      {tabType === 'reviewList' && (
        <div className="card">
          {(item as IReviewItem).comment && (
            <span className="comment">{(item as IReviewItem).comment}</span>
          )}
          <ScoreComponent
            cleanliness={item.avgCleanliness}
            amenities={item.avgAmenities}
            accessibility={item.avgAccessibility}
          />
          <span className="date">{(item as IReviewItem).updatedAt}</span>
          <span className="toilet_name">{(item as IReviewItem).name}</span>
        </div>
      )}
    </ItemCardStyle>
  );
};

export default ItemCard;

const ItemCardStyle = styled.div`
  height: auto;
  width: 80%;
  background-color: #f1f1f1;
  border-radius: 16px;
  border: 1px solid #dddddd;
  padding: 10px 30px 10px 10px;
  position: relative;
  cursor: pointer;

  .delete_button {
    position: absolute;
    color: #888888;
    top: 12px;
    right: 12px;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    .name {
      font-size: 20px;
    }

    .score {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 12px;
      .score_icon {
        color: ${Theme.colors.star};
      }
    }
  }
`;
