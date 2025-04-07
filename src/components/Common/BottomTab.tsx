import { Theme } from '@/style/Theme';
import { FaMapMarkedAlt, FaTrophy } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BottomTab = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <BottomTabStyle>
      <Link to="/" className="tab_item">
        <FaMapMarkedAlt className={path === '/' ? 'active' : ''} />
      </Link>
      <Link to={'/rank'} className="tab_item">
        <FaTrophy className={path === '/rank' ? 'active' : ''} />
      </Link>
      <Link to={'/myPage'} className="tab_item">
        <FaUser className={path !== '/' && path !== '/rank' ? 'active' : ''} />
      </Link>
    </BottomTabStyle>
  );
};

export default BottomTab;

const BottomTabStyle = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: ${Theme.colors.background};
  border-top: 2px solid #ebebeb;

  .tab_item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  svg {
    height: 20px;
    width: 20px;
    fill: #919191;
    &.active {
      fill: #191919;
    }
  }
`;
