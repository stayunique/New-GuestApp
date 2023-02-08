import { Box, IconButton, Typography } from '@mui/material';
//
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

import packageJson from '../../../package.json';

export default function Footer() {
  return (
    <Box display="center" alignItems="center" sx={{ backgroundColor: theme => theme.palette.secondary.main, height: '5vh' }}>
      <Typography sx={{ color: theme => theme.palette.secondary.contrastText, ml: 2 }}>
        Stay U-nique {new Date().getFullYear()} v{packageJson.version}
      </Typography>

      <Box sx={{ flexGrow: 1 }} />

      <IconButton size="small" sx={{ p: 0.5 }}>
        <EmailIcon fontSize="large" sx={{ color: theme => theme.palette.secondary.contrastText }} />
      </IconButton>
      <IconButton size="small" sx={{ p: 0.5 }}>
        <PhoneEnabledIcon fontSize="large" sx={{ color: theme => theme.palette.secondary.contrastText, ml: 2 }} />
      </IconButton>
      <IconButton size="small" sx={{ p: 0.5 }}>
        <WhatsAppIcon fontSize="large" sx={{ color: theme => theme.palette.secondary.contrastText, mx: 2 }} />
      </IconButton>
    </Box>
  );
}
