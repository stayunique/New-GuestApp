import { Grid, Typography } from '@mui/material';

// ** Custom components
import { GuestCard } from './passport/GuestCard';

export const Passport = ({ containerProps = {} }) => {
  return (
    <Grid container {...containerProps} spacing={2}>
      {/* Title */}
      <Grid item xs={12}>
        <Typography color="primary" variant="h3">
          Passport
        </Typography>
        <Typography color="secondary" variant="caption">
          Enter a new user to proceed:
        </Typography>
      </Grid>

      <Grid item xs={12} mt={2}>
        <GuestCard />
      </Grid>
    </Grid>
  );
};
