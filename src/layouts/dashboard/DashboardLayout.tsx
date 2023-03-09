import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from './header';
import Main from './Main';
import Footer from '../main/Footer';
import NavVertical from './nav/NavVertical';
import useResponsive from '../../hooks/useResponsive';

export default function DashboardLayout() {
  const isDesktop = useResponsive('up', 'lg');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose} />;

  return (
    <>
      <Header onOpenNav={handleOpen} />

      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 0.95 },
        }}
      >
        {!isDesktop && renderNavVertical}

        <Main>
          {pathname !== '/dashboard' && pathname !== '/' && (
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBackIcon />
            </IconButton>
          )}

          <Outlet />
        </Main>
      </Box>
      <Footer />
    </>
  );
}
