import styled from 'styled-components';
import Comments from '../Detail/Comments';
import DetailView from '../Detail/DetailView';

const ToiletInfo = () => {
  return (
    <ToiletInfoStyle>
      <DetailView />
      <Comments />
    </ToiletInfoStyle>
  );
};

const ToiletInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  gap: 20px;
`;
export default ToiletInfo;
