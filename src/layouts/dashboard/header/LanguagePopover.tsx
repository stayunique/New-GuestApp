import { useState } from 'react';
// @mui
import { MenuItem, Stack, IconButton, Button } from '@mui/material';
// locales
import { useLocales } from '../../../locales';
// components
import Image from '../../../components/image';
import MenuPopover from '../../../components/menu-popover';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LanguagePopover({ isBlock = false }) {
  const { allLangs, currentLang, onChangeLang } = useLocales();

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleChangeLang = (newLang: string) => {
    onChangeLang(newLang);
    handleClosePopover();
  };

  return (
    <>
      {isBlock ? (
        <Button
          onClick={handleOpenPopover}
          sx={{
            width: '100%',
            ...(openPopover && {
              bgcolor: 'action.selected',
            }),
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          {/* <Image disabledEffect src={currentLang.icon} alt={currentLang.label} /> */}
          <Iconify icon="eva:globe-2-fill" width={24} sx={{ mr: 1 }} />
          Language
        </Button>
      ) : (
        <IconButton
          onClick={handleOpenPopover}
          sx={{
            width: 60,
            height: 60,
            ...(openPopover && {
              bgcolor: 'action.selected',
            }),
          }}
        >
          {/* <Image disabledEffect src={currentLang.icon} alt={currentLang.label} /> */}
          <Iconify icon="eva:globe-2-fill" width={40} color="white" />
        </IconButton>
      )}

      <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{ width: 180 }}>
        <Stack spacing={0.75}>
          {allLangs.map(option => (
            <MenuItem key={option.value} selected={option.value === currentLang.value} onClick={() => handleChangeLang(option.value)}>
              <Image disabledEffect alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}
