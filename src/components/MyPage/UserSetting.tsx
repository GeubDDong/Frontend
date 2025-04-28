import { useState } from 'react';
import { FaSignOutAlt, FaUserAltSlash } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import styled from 'styled-components';

const UserSetting = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log('로그아웃');
  };

  const handleDeleteAccount = () => {
    console.log('회원탈퇴');
  };
  return (
    <UserSettingStyle>
      <IoMdSettings className="setting_icon" onClick={toggleMenu} />
      {isOpen && (
        <div className="dropdown_menu">
          <button onClick={handleLogout}>
            <FaSignOutAlt />
            로그아웃
          </button>
          <div className="divider" />
          <button onClick={handleDeleteAccount}>
            <FaUserAltSlash />
            회원탈퇴
          </button>
        </div>
      )}
    </UserSettingStyle>
  );
};

export default UserSetting;

const UserSettingStyle = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  .setting_icon {
    width: 22px;
    height: 22px;
  }

  .dropdown_menu {
    margin-top: 8px;
    position: absolute;
    width: 110px;
    top: 16px;
    right: 8px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    padding: 4px 0;
    display: flex;
    flex-direction: column;
    z-index: 10;

    .divider {
      height: 1px;
      width: 80%;
      background-color: #eee;
      margin: 4px auto; /* 가운데 정렬 */
    }

    button {
      display: flex;
      justify-content: center;
      gap: 8px;
      background: none;
      border: none;
      padding: 8px 16px;
      text-align: left;
      cursor: pointer;
      width: 100%;
      font-size: 14px;
      &:hover {
        background-color: #f2f2f2;
      }
    }
  }
`;
