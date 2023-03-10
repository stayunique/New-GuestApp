import { Box, Grid, Typography } from '@mui/material';

export const EnterYourApartment = () => {
  return (
    <Grid item xs={12} style={{ padding: 0 }} mt={5}>
      <Box
        sx={{
          // height: '290px',
          width: '767px',
          borderRadius: '30px',
          border: '2px solid rgba(51, 120, 98, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          mx: 'auto',
          position: 'relative',
          py: 6,
          px: 6,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            height: '92px',
            width: '92px',
            left: '45%',
            top: '-14.5%',
            borderRadius: '50%',
            bgcolor: '#337862',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography color="white" component="span" fontWeight="bold" fontSize="27.6056px">
            347
          </Typography>
          <img src="/assets/icons/key.svg" alt="key" style={{ width: '53.11px', height: '23.61px', marginTop: '-5px' }} />
        </Box>
        <Box sx={{ borderRadius: '30px' }}>
          <img src="/assets/images/master-lock-box.svg" alt="master-lock-box" style={{ borderRadius: '30px', width: '248px', height: '210px' }} />
        </Box>
        <Box sx={{ width: '45%' }}>
          <Typography color="secondary" variant="body1" fontSize="22.2613px">
            Find your apartment door, there is a key box that you need to press the code:
          </Typography>
          <Typography color="secondary" variant="h3" my={2}>
            347
          </Typography>
          <Typography color="secondary" variant="body1" fontSize="22.2613px">
            There you will find a set of keys.
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
