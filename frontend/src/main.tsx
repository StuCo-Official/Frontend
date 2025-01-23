import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContextProvider } from './context/UserContext.tsx';
import { SocketContextProvider } from './context/SocketContext.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <SocketContextProvider>
          <App/>
        </SocketContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
