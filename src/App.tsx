import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '@/style/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
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
        position="bottom-center"
        limit={3}
        closeButton={false}
        autoClose={1000}
        toastStyle={{
          backgroundColor: '#5e5e5e',
          color: 'white',
          borderRadius: '10px',
          marginBottom: '70px',
          maxWidth: '90%',
        }}
        transition={Bounce}
        hideProgressBar
      />
    </QueryClientProvider>
  );
}

export default App;
