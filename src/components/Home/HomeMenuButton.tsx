import { Theme } from '@/style/Theme';
import { useState } from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface DropdownMenuContainerProps {
  $isOpen: boolean;
}

const HomeMenuButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;

  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${Theme.colors.background};

  position: absolute;
  top: 30px;
  right: 30px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const DropdownMenuContainer = styled.ul<DropdownMenuContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  cursor: pointer;

  width: 120px;
  border-radius: 5px;
  background-color: ${Theme.colors.background};
  position: absolute;
  top: 45px;
  right: 0;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  padding: ${({ $isOpen }) => ($isOpen ? '3px 0' : '0')};
  margin: 0;

  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  overflow: hidden;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition:
    padding 0.2s ease,
    max-height 0.2s ease,
    transform 0.4s ease;
`;

const DropdownMenuItemContainer = styled.li`
  height: 30px;
  width: 90%;
  margin: 2px 0;
  border-radius: 3px;

  transition: background-color 0.2s;

  &:hover {
    background-color: #e4e4e4;
  }
`;

const DropdownMenuItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: inherit;

  height: 100%;
  width: 100%;
`;

const DropdownMenuItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  height: 100%;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 7;

  font-size: ${Theme.fontSize.sm};
`;

const menuItemsByLoginStatus = {
  logout: [
    {
      key: 'menu_1',
      element: (
        <DropdownMenuItemLink to={'/login'}>
          <IconContainer>
            <FaSignInAlt />
          </IconContainer>
          <MenuContainer>로그인</MenuContainer>
        </DropdownMenuItemLink>
      ),
    },
  ],
  login: [
    {
      key: 'menu_2',
      element: (
        <DropdownMenuItemLink to={'/myPage'}>
          <IconContainer>
            <FaUserCircle />
          </IconContainer>
          <MenuContainer>마이페이지</MenuContainer>
        </DropdownMenuItemLink>
      ),
    },
    {
      key: 'menu_3',
      element: (
        <DropdownMenuItemDiv onClick={() => {}}>
          <IconContainer>
            <FaSignOutAlt />
          </IconContainer>
          <MenuContainer>로그아웃</MenuContainer>
        </DropdownMenuItemDiv>
      ),
    },
  ],
};

const HomeMenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isLogin = true;

  const loginStatus = isLogin ? 'login' : 'logout';

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <HomeMenuButtonStyle onClick={handleClick}>
      <GiHamburgerMenu />
      <DropdownMenuContainer $isOpen={isOpen}>
        {menuItemsByLoginStatus[loginStatus].map((item) => (
          <DropdownMenuItemContainer key={item.key}>
            {item.element}
          </DropdownMenuItemContainer>
        ))}
      </DropdownMenuContainer>
    </HomeMenuButtonStyle>
  );
};

export default HomeMenuButton;
