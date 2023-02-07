import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

// ** Custom components

// ** Routes
import Router from './routes';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}
