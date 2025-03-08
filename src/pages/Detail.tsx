import Comments from '@/components/Detail/Comments';
import DetailView from '@/components/Detail/DetailView';
import BackButton from '@/components/Common/BackButton';

const Detail = () => {
  return (
    <>
      <DetailStyle>
        <BackButton />
        <DetailView />
        <Divider />
        <Comments />
      </DetailStyle>
    </>
  );
};

import styled from 'styled-components';

const DetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  gap: 20px;
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
  border: none;
`;

export default Detail;
