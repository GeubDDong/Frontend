import BackButton from '@/components/Common/BackButton';
import styled from 'styled-components';
import logo from '@/assets/logo.png';
import { Theme } from '@/style/Theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setNickname } from '@/api/auth.api';
import { NICKNAME_MAX_LENGTH } from '@/constants/common';
import useAuth from '@/hooks/useAuth';

const ProfileSetup = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const { updateNickname } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.slice(0, NICKNAME_MAX_LENGTH);
    setValue(inputValue);
  };

  const handleClick = async () => {
    if (!value) return;

    try {
      await setNickname({ nickname: value });
      updateNickname(value);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <BackButton />
      <ProfileSetupStyle>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="content">
          <div className="input">
            <input
              type="form"
              value={value}
              onChange={handleChange}
              placeholder="닉네임을 입력하세요."
            />
            <span>{`${value.length}/${NICKNAME_MAX_LENGTH}`}</span>
          </div>
          <button onClick={handleClick}>설정하기</button>
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
    background-color: ${Theme.colors.logo};
    border-radius: 50%;
    position: relative;
    box-shadow: 5px 5px 5px #d8dfe0;
  }

  .logo img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 180px;
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
    box-shadow: 0 0.3px 0 ${Theme.colors.mainText};
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
    color: ${Theme.colors.buttonText};
    font-size: ${Theme.fontSize.sm};
    background-color: ${Theme.colors.secondary};
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;
export default ProfileSetup;
