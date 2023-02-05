import { Box, Button, Container, Grid, Typography } from '@mui/material';

export const Components = () => {
  return (
    <Container maxWidth="xl">
      {/* Buttons */}
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography color="primary" variant="h4">
              Variants
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained">
              Contained
            </Button>

            <Button color="primary" variant="outlined" sx={{ ml: 1 }}>
              Outlined
            </Button>

            <Button color="primary" variant="soft" sx={{ ml: 1 }}>
              Soft
            </Button>

            <Button color="primary" variant="text" sx={{ ml: 1 }}>
              Text
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary" variant="h4">
              Sizes
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" size="small" variant="outlined">
              Small
            </Button>

            <Button color="secondary" size="medium" variant="outlined" sx={{ ml: 1 }}>
              Medium
            </Button>

            <Button color="secondary" size="large" variant="outlined" sx={{ ml: 1 }}>
              Large
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
