import { Grid, InputLabel, TextField, Typography } from '@mui/material';

export const CheckIn = ({ containerProps = {} }) => {
  return (
    <Grid container {...containerProps} spacing={2}>
      {/* Title */}
      <Grid item xs={12}>
        <Typography color="primary" variant="h3">
          Check In
        </Typography>
      </Grid>

      {/* Form */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InputLabel htmlFor="time-apartment" sx={{ mb: 1, fontWeight: '500', color: theme => theme.palette.secondary.main }}>
          Request time at apartment
        </InputLabel>
        <TextField
          id="time-apartment"
          name="time-apartment"
          size="small"
          fullWidth
          placeholder="Write the time you arrive at the apartment"
          sx={{ '::placeholder': { fontSize: '12px' }, '::-webkit-input-placeholder': { fontSize: '12px' }, '::-moz-placeholder': { fontSize: '12px' } }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InputLabel htmlFor="time-apartment" sx={{ mb: 1, fontWeight: '500', color: theme => theme.palette.secondary.main }}>
          Request time at apartment
        </InputLabel>
        <TextField id="time-apartment" name="time-apartment" size="small" fullWidth placeholder="How do you arrive" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InputLabel htmlFor="time-apartment" sx={{ mb: 1, fontWeight: '500', color: theme => theme.palette.secondary.main }}>
          Request time at apartment
        </InputLabel>
        <TextField id="time-apartment" name="time-apartment" size="small" fullWidth placeholder="Number of your Flight, Cruise or Train" />
      </Grid>

      {/* Caption */}
      <Grid item xs={12}>
        <Typography variant="caption" color="secondary">
          Please take into consideration that transfer between the airport/train station and the apartment usually takes up to 1 hour.
        </Typography>
      </Grid>
    </Grid>
  );
};
