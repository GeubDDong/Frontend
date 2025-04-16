import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '@/style/GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import BottomTab from './components/Common/BottomTab';
import routeElements from './routes';
import useKakaoLoader from './hooks/useKakaoLoader';

function App() {
  const { isKakaoLoaded } = useKakaoLoader();
  const queryClient = new QueryClient();

  if (!isKakaoLoaded) return <></>;
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
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
      <ToastContainer
        position="top-center"
        limit={1}
        closeButton={false}
        autoClose={1000}
        theme="colored"
        transition={Bounce}
        hideProgressBar
      />
    </QueryClientProvider>
  );
}

export default App;
