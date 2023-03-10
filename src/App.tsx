// i18n
import './locales/i18n';

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

// ** Material UI (@mui)
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

// ** Locales
import ThemeLocalization from './locales';

// ** Custom components
import ThemeProvider from './theme';
import SnackbarProvider from './components/snackbar';
import ScrollToTop from './components/scroll-to-top';
import { ThemeSettings, SettingsProvider } from './components/settings';

// ** Routes
import Router from './routes';

export default function App() {
  return (
    <HelmetProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <BrowserRouter>
            <ThemeProvider>
              <ThemeSettings>
                <ThemeLocalization>
                  <SnackbarProvider>
                    <ScrollToTop />
                    <Router />
                  </SnackbarProvider>
                </ThemeLocalization>
              </ThemeSettings>
            </ThemeProvider>
          </BrowserRouter>
        </SettingsProvider>
      </LocalizationProvider>
    </HelmetProvider>
  );
}
