import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
// import { Box, Stack, Drawer, List } from '@mui/material';
import { Box, Drawer, List } from '@mui/material';
// config
import { NAV } from '../../../config-global';
// components
// import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import LanguagePopover from '../header/LanguagePopover';
// import { NavSectionVertical } from '../../../components/nav-section';
// //
// import navConfig from './config-navigation';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
        }}
      >
        <Logo />
      </Stack> */}

      {/* <NavSectionVertical data={navConfig} /> */}

      <List disablePadding sx={{ px: 2, width: '100%' }}>
        <LanguagePopover isBlock />
      </List>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      <Drawer
        anchor="right"
        open={openNav}
        onClose={onCloseNav}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: NAV.W_DASHBOARD,
          },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}
