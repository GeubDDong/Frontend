import LoginCallback from '@/components/Login/Callback';
import Detail from '@/pages/Detail';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import MyPage from '@/pages/MyPage';
import ProfileSetup from '@/pages/ProfileSetup';
import Rank from '@/pages/Rank';

interface IRouteElement {
  key: string;
  path: string;
  element: React.ReactNode;
}

const routeElements: IRouteElement[] = [
  { key: 'home', path: '/', element: <Home /> },
  { key: 'detail', path: '/detail', element: <Detail /> },
  { key: 'login', path: '/login', element: <Login /> },
  { key: 'profileSetup', path: '/profileSetup', element: <ProfileSetup /> },
  {
    key: 'authCallback_kakao',
    path: '/auth/callback/kakao',
    element: <LoginCallback provider="kakao" />,
  },
  {
    key: 'authCallback_google',
    path: '/auth/callback/google',
    element: <LoginCallback provider="google" />,
  },
  { key: 'rank', path: '/rank', element: <Rank /> },
  { key: 'myPage', path: '/myPage', element: <MyPage /> },
];

export default routeElements;
