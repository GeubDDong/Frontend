import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import logo from '@/assets/logo.png';
import kakao from '@/assets/kakao.png';
import BackButton from '@/components/Common/BackButton';
import { TLoginProvider } from '@/types';

const Login = () => {
  const handleClick = (provider: TLoginProvider) => {
    switch (provider) {
      case 'kakao':
        {
          window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_OAUTH_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_OAUTH_REDIRECT_URI}&response_type=code&prompt=login`;
        }
        break;
      case 'google':
        {
          window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${import.meta.env.VITE_GOOGLE_OAUTH_API_KEY}&redirect_uri=${import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&prompt=select_account`;
        }
        break;
    }
  };

  return (
    <>
      <BackButton />
      <LoginStyle>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="content">
          <div className="divider">
            간편 로그인
            <hr
              style={{
                width: '90%',
                height: '1px',
                backgroundColor: '#d8dfe0',
                border: 'none',
              }}
            />
          </div>
          <div className="buttons">
            <img
              src={kakao}
              alt="kakao_login"
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick('kakao')}
            />
          </div>
        </div>
      </LoginStyle>
    </>
  );
};

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
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
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
  }

  .divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: ${Theme.fontSize.sm};
    color: ${Theme.colors.subText};
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

export default Login;
