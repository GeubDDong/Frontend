import styled from 'styled-components';
import NotFoundLogo from '@/assets/NotFoundLogo.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <NotFoundStyle>
      <img src={NotFoundLogo} alt="404NotFound" />
      <span className="not_found_message">페이지를 찾을 수 없습니다.</span>
      <Link to={'/'} className="go_home">
        홈으로
      </Link>
    </NotFoundStyle>
  );
};

export default NotFound;

const NotFoundStyle = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 40%;
  }

  .not_found_message {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .go_home {
    margin-top: 24px;
    height: 60px;
    width: 150px;
    border-radius: 16px;
    background-color: #191919;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
  }
`;
