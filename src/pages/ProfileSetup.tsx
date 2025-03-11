import BackButton from '@/components/Common/BackButton';
import styled from 'styled-components';
import logo from '@/assets/logo.png';
import { Theme } from '@/style/Theme';

const ProfileSetup = () => {
  return (
    <>
      <BackButton />
      <ProfileSetupStyle>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="content">
          <div className="input">
            <input type="form" placeholder="닉네임을 입력하세요." />
            <span>0/10</span>
          </div>
          <button>설정하기</button>
        </div>
      </ProfileSetupStyle>
    </>
  );
};

const ProfileSetupStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  padding-top: 10%;

  .logo {
    width: 200px;
    height: 200px;
    background-color: ${Theme.colors.primary};
    border-radius: 50%;
    position: relative;
    box-shadow: 5px 5px 5px #d8dfe0;
  }

  .logo img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .input span {
    font-size: ${Theme.fontSize.sm};
  }

  .input input {
    border-color: ${Theme.colors.subText};
    border-width: 0 0 1px;
    text-align: center;
    width: 300px;
  }

  .input input:focus {
    outline: none;
    border-color: ${Theme.colors.mainText};
    border-width: 0 0 1.8px;
  }

  .input input:focus::placeholder {
    color: transparent;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .content button {
    width: 60%;
    padding: 10px 15px;
    color: ${Theme.colors.mainText};
    font-size: ${Theme.fontSize.sm};
    background-color: ${Theme.colors.primary};
    border: none;
    border-radius: 8px;
    font-weight: bold;
  }
`;
export default ProfileSetup;
