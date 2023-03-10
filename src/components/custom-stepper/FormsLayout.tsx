import { Grid, Typography, SxProps } from '@mui/material';

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  containerProps?: {
    sx?: SxProps;
  };
}

export const FormsLayout = ({ title, subtitle, children, containerProps = {} }: Props) => {
  return (
    <Grid container {...containerProps} spacing={2}>
      <Grid item xs={12}>
        <Typography color="primary" variant="h3">
          {title}
        </Typography>
        <Typography color="secondary" variant="caption">
          {subtitle}
        </Typography>
      </Grid>

      {children}
    </Grid>
  );
};
