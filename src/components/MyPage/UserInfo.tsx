import useAuth from '@/hooks/useAuth';
import { FaPencil } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserSetting from './UserSetting';
import ProfileImage from '../Common/ProfileImage';

const UserInfo = () => {
  const { user } = useAuth();
  return (
    <UserInfoStyle>
      <div className="profile_image_area">
        <UserSetting />
        <ProfileImage src={user!.profileImage} alt="profile_image" size={90} />
      </div>
      <div className="user_info_area">
        <div className="user_nickname_container">
          {user!.nickname}
          <Link to={'/profileSetup'} className="edit_button">
            <FaPencil className="edit_icon" />
          </Link>
        </div>
        <div className="user_email_container">{user!.email}</div>
      </div>
    </UserInfoStyle>
  );
};

export default UserInfo;

const UserInfoStyle = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  position: relative;

  .profile_image_area {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    .profile_image_container {
      height: 65%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #bdbdbd;
      overflow: hidden;

      .profile_image {
        width: 100%;
        height: 100%;
      }

      .profile_svg {
        width: 60%;
        height: 60%;
      }
    }
  }

  .user_info_area {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    .user_nickname_container {
      display: flex;
      align-items: center;
      gap: 8px;
      .edit_button {
        display: flex;
        justify-content: center;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
      }
    }

    .user_email_container {
      font-size: 12px;
      color: #464646;
    }
  }
`;
