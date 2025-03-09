import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '@/style/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
