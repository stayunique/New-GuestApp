import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './header';
import Main from './Main';
import Footer from '../main/Footer';
import NavVertical from './nav/NavVertical';
import useResponsive from '../../hooks/useResponsive';

export default function DashboardLayout() {
  const isDesktop = useResponsive('up', 'lg');

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
          <Outlet />
        </Main>
      </Box>
      <Footer />
    </>
  );
}
