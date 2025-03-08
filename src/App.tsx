import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '@/style/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
