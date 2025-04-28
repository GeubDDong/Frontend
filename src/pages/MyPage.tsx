import MyPageTab from '@/components/MyPage/MyPageTab';
import UserInfo from '@/components/MyPage/UserInfo';
import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MyPage = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, []);

  return (
    <MyPageStyle>
      <UserInfo />
      <MyPageTab />
    </MyPageStyle>
  );
};

export default MyPage;

const MyPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
