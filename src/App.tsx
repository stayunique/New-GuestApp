import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// ** Material UI
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

// ** Theme
import ThemeProvider from './theme';

import { Components } from './pages';

function App() {
  return (
    <HelmetProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BrowserRouter>
          <ThemeProvider>
            <Components />
          </ThemeProvider>
        </BrowserRouter>
      </LocalizationProvider>
    </HelmetProvider>
  );
}

export default App;
