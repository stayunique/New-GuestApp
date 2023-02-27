import { Grid, InputLabel, TextField, Typography } from '@mui/material';

export const PersonalInfo = ({ containerProps = {} }) => {
  return (
    <Grid container {...containerProps} spacing={2}>
      {/* Title */}
      <Grid item xs={12} mb={2}>
        <Typography color="primary" variant="h3">
          Personal information
        </Typography>
      </Grid>

      {/* Form */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InputLabel htmlFor="fistName" sx={{ mb: 1, fontWeight: '500', color: theme => theme.palette.secondary.main }}>
          First Name
        </InputLabel>
        <TextField
          id="fistName"
          name="fistName"
          size="small"
          fullWidth
          placeholder="Write your first name"
          sx={{ '::placeholder': { fontSize: '12px' }, '::-webkit-input-placeholder': { fontSize: '12px' }, '::-moz-placeholder': { fontSize: '12px' } }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InputLabel htmlFor="LastName" sx={{ mb: 1, fontWeight: '500', color: theme => theme.palette.secondary.main }}>
          Last Name
        </InputLabel>
        <TextField id="LastName" name="LastName" size="small" fullWidth placeholder="How do you arrive" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InputLabel htmlFor="email" sx={{ mb: 1, fontWeight: '500', color: theme => theme.palette.secondary.main }}>
          Email Address
        </InputLabel>
        <TextField id="email" name="email" type="email" size="small" fullWidth placeholder="email@xxx.com" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InputLabel htmlFor="phone" sx={{ mb: 1, fontWeight: '500', color: theme => theme.palette.secondary.main }}>
          Phone
        </InputLabel>
        <TextField id="phone" name="phone" type="text" size="small" fullWidth placeholder="+34 000 000 000" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InputLabel htmlFor="language" sx={{ mb: 1, fontWeight: '500', color: theme => theme.palette.secondary.main }}>
          Language
        </InputLabel>
        <TextField select id="language" name="language" type="text" size="small" fullWidth placeholder="English">
          <option value="">Select language</option>
        </TextField>
      </Grid>
    </Grid>
  );
};
