import { TTabType } from '@/types';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import MyPageModel from '@/models/myPage.model';

interface IScrollListProps {
  tabType: TTabType;
  listItems: MyPageModel;
  setListItems: React.Dispatch<React.SetStateAction<MyPageModel | null>>;
}

const ScrollList = ({ tabType, listItems, setListItems }: IScrollListProps) => {
  return (
    <ScrollListStyle>
      {tabType === 'likeList' &&
        (listItems.favorites.length > 0 ? (
          listItems.favorites.map((item) => (
            <ItemCard
              tabType={tabType}
              item={item}
              listItems={listItems}
              setListItems={setListItems}
            />
          ))
        ) : (
          <div className="info_message">즐겨찾기한 화장실이 없습니다.</div>
        ))}
      {tabType === 'reviewList' &&
        (listItems.reviews.length > 0 ? (
          listItems.reviews.map((item) => (
            <ItemCard
              tabType={tabType}
              item={item}
              listItems={listItems}
              setListItems={setListItems}
            />
          ))
        ) : (
          <div className="info_message">작성한 댓글이 없습니다.</div>
        ))}
    </ScrollListStyle>
  );
};

export default ScrollList;

const ScrollListStyle = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
