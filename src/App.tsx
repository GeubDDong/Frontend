import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '@/style/GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import Login from '@/pages/Login';
import ProfileSetup from '@/pages/ProfileSetup';
import AuthCallback from '@/pages/AuthCallbackPage';
import BottomTab from './components/Common/BottomTab';
import Rank from './pages/Rank';
import MyPage from './pages/MyPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profileSetup" element={<ProfileSetup />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
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
