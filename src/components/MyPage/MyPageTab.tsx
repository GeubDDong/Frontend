import { useState } from 'react';
import styled from 'styled-components';
import ScrollList from './ScrollList';
import { TTabType } from '@/types';
import useMyPage from '@/hooks/useMyPage';

const MyPageTab = () => {
  const [tabType, setTabType] = useState<TTabType>('likeList');
  const { myPageInfo, setMyPageInfo } = useMyPage();
  return (
    <MyPageTabStyle>
      <div className="tab_header_container">
        <div className="tab_header" onClick={() => setTabType('likeList')}>
          <div className={tabType === 'likeList' ? 'tab active' : 'tab'}>
            즐겨찾기
          </div>
        </div>
        <div className="tab_header" onClick={() => setTabType('reviewList')}>
          <div className={tabType === 'reviewList' ? 'tab active' : 'tab'}>
            작성한 리뷰
          </div>
        </div>
      </div>
      {myPageInfo && (
        <ScrollList
          tabType={tabType}
          listItems={myPageInfo}
          setListItems={setMyPageInfo}
        />
      )}
      {!myPageInfo && (
        <div className="fail">데이터를 가져오는 데 실패했습니다.</div>
      )}
    </MyPageTabStyle>
  );
};

export default MyPageTab;

const MyPageTabStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  width: 100%;
  min-height: 0;

  .tab_header_container {
    height: 36px;
    display: flex;

    .tab_header {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      margin-bottom: 8px;
      cursor: pointer;

      .tab {
        display: flex;
        height: 100%;
        width: 80%;
        justify-content: center;
        align-items: center;

        color: #c0c0c0;
        border-bottom: 2px solid #c0c0c0;

        &.active {
          color: #191919;
          border-bottom: 2px solid #191919;
        }
      }
    }
  }
  .fail {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
