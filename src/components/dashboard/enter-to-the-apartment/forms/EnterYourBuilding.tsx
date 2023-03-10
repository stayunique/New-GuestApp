import { Box, Grid, Typography } from '@mui/material';

export const EnterYourBuilding = () => {
  return (
    <Grid item xs={12} style={{ padding: 0 }} mt={5}>
      <Box
        sx={{
          height: '342px',
          width: '580px',
          borderRadius: '30px',
          border: '2px solid rgba(51, 120, 98, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          mx: 'auto',
        }}
      >
        <Box sx={{ borderRadius: '30px' }}>
          <img src="/assets/images/door-lock-keyboard.svg" alt="keyboard-door-lock" style={{ borderRadius: '30px' }} />
        </Box>
        <Box sx={{ width: '50%' }}>
          <Typography color="secondary" variant="h3">
            FabralPuig
          </Typography>
          <Typography color="secondary" variant="body1" fontSize={24}>
            Encontrará un teclado al lado de la puerta del edificio, el código es:
          </Typography>
          <Typography color="secondary" variant="h3">
            192192A
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
