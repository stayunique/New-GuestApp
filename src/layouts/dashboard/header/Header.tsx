// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton, Box } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER } from '../../../config-global';
// components
import Logo from '../../../components/logo';
import Iconify from '../../../components/iconify';
import { useSettingsContext } from '../../../components/settings';
//
import LanguagePopover from './LanguagePopover';
import Iso from '../../../components/logo/Iso';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const { themeLayout } = useSettingsContext();

  const isNavHorizontal = themeLayout === 'horizontal';

  const isNavMini = themeLayout === 'mini';

  const isDesktop = useResponsive('up', 'lg');

  const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP) && !isNavHorizontal;

  const renderContent = (
    <>
      {isDesktop && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}
      <Iso
        sx={{
          ...(isDesktop
            ? {
                transition: theme.transitions.create(['width', 'height'], {
                  duration: theme.transitions.duration.shorter,
                }),
                ...(isOffset && { width: 40, height: 40 }),
              }
            : { width: 30, height: 30 }),
        }}
      />

      <Box sx={{ flexGrow: 1 }} />

      {!isDesktop && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-fill" width={40} color="white" />
        </IconButton>
      )}

      {isDesktop && (
        <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={{ xs: 0.5, sm: 1.5 }}>
          <LanguagePopover />
        </Stack>
      )}
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(isDesktop && {
          // width: `calc(100% - ${NAV.W_DASHBOARD + 1}px)`,
          width: '100%',
          height: HEADER.H_DASHBOARD_DESKTOP,
          ...(isOffset && {
            height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            // width: 1,
            width: '100%',
            bgcolor: 'background.default',
            height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            // width: `calc(100% - ${NAV.W_DASHBOARD_MINI + 1}px)`,
            width: '100%',
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          backgroundColor: theme => theme.palette.primary.main,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
