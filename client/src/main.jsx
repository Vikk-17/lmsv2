import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/style.css';
const queryclient = new QueryClient();
import ScrollTop from './components/UI/components/ScrollTop.jsx';
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient} >
    <BrowserRouter>
      <ScrollTop/>
      <App />
      <Toaster/>
    </BrowserRouter>
  </QueryClientProvider>
)
