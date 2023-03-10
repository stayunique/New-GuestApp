import { Button, Grid, Typography } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

export const FindYourApartment = () => {
  return (
    <Grid item xs={12} sx={{ mt: 6, mb: 4 }} style={{ padding: 0 }}>
      <Button
        sx={{
          width: '181px',
          height: '172px',
          bgcolor: '#5E8F7C',
          borderRadius: '15px',
          display: 'block',
          mx: 'auto',
          '&:hover': {
            bgcolor: 'primary.main',
          },
        }}
      >
        <ImageOutlinedIcon
          sx={{
            height: '87px',
            width: '87px',
            color: 'white',
          }}
        />
        <Typography color="white" variant="body1">
          See my door
        </Typography>
      </Button>
    </Grid>
  );
};
