import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '@/style/GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
// import 'react-toastify/ReactToastify.css';
import BottomTab from './components/Common/BottomTab';
import routeElements from './routes';
import useKakaoLoader from './hooks/useKakaoLoader';
import { OverlayProvider } from 'overlay-kit';

function App() {
  const { isKakaoLoaded } = useKakaoLoader();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <OverlayProvider />
      {isKakaoLoaded && (
        <Router>
          <div style={{ height: 'calc(100% - 62px)' }}>
            <Routes>
              {routeElements.map(({ key, path, element }) => (
                <Route key={key} path={path} element={element} />
              ))}
            </Routes>
          </div>
          <BottomTab />
        </Router>
      )}
      <ToastContainer
        position="bottom-center"
        limit={3}
        closeButton={false}
        autoClose={1000}
        toastStyle={{
          backgroundColor: '#5e5e5e',
          color: 'white',
          borderRadius: '10px',
        }}
        transition={Bounce}
        hideProgressBar
      />
    </QueryClientProvider>
  );
}

export default App;
