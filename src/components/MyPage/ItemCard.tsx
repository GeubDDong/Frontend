import { IFavoriteItem, IReviewItem } from '@/models/myPage.model';
import { Theme } from '@/style/Theme';
import { TTabType } from '@/types';
import { FaStar } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import styled from 'styled-components';

interface IItemCardProps {
  tabType: TTabType;
  item: IFavoriteItem | IReviewItem;
}

interface IScoreComponentProps {
  cleanliness: number;
  amenities: number;
  accessibility: number;
}

const ItemCard = ({ tabType, item }: IItemCardProps) => {
  // const handleClickCard = () => {};

  // const handleClickDelete = () => {};

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
    <ItemCardStyle onClick={() => {}}>
      <FaRegTrashCan className="delete_button" />
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
          <span className="toilet_name">
            {(item as IReviewItem).toilet.name}
          </span>
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
  padding: 10px;
  position: relative;
  cursor: pointer;

  .delete_button {
    position: absolute;
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
