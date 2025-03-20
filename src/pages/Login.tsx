import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import logo from '@/assets/logo.png';
import kakao from '@/assets/kakao.png';
import BackButton from '@/components/Common/BackButton';

const Login = () => {
  const handleClick = () => {
    window.location.href = 'http://localhost:8080/auth/login/kakao';
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
              onClick={handleClick}
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
`;

export default Login;
