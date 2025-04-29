import { Route, Routes, useLocation } from 'react-router-dom';
import routeElements from './routes';
import NotFound from './pages/NotFound';
import BottomTab from './components/Common/BottomTab';
import useSplash from './hooks/useSplash';
import Splash from './components/Common/Splash';

const RouterComponent = () => {
  const location = useLocation();
  const { splashState } = useSplash();
  const is404 = !routeElements.some(
    (route) => route.path === location.pathname,
  );

  return (
    <>
      <div style={is404 ? { height: '100%' } : { height: 'calc(100% - 62px)' }}>
        {splashState && !is404 && <Splash />}
        <Routes>
          {routeElements.map(({ key, path, element }) => (
            <Route key={key} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!is404 && <BottomTab />}
    </>
  );
};

export default RouterComponent;
