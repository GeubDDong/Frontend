import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '@/style/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import useKakaoLoader from './hooks/useKakaoLoader';
import { OverlayProvider } from 'overlay-kit';
import RouterComponent from './RouterComponent';

function App() {
  const { isKakaoLoaded } = useKakaoLoader();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <OverlayProvider />
      {isKakaoLoaded && (
        <Router>
          <RouterComponent />
        </Router>
      )}
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
