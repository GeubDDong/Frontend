import { RouteObject } from 'react-router-dom';
import AuthCallback from '@/pages/AuthCallbackPage';
import Detail from '@/pages/Detail';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import MyPage from '@/pages/MyPage';
import ProfileSetup from '@/pages/ProfileSetup';
import Rank from '@/pages/Rank';

const routeElements: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/detail', element: <Detail /> },
  { path: '/login', element: <Login /> },
  { path: '/profileSetup', element: <ProfileSetup /> },
  { path: '/auth/callback', element: <AuthCallback /> },
  { path: '/rank', element: <Rank /> },
  { path: '/myPage', element: <MyPage /> },
];

export default routeElements;
