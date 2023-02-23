import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, BoxProps } from '@mui/material';

export interface IsoProps extends BoxProps {
  disabledLink?: boolean;
}

const Iso = forwardRef<HTMLDivElement, IsoProps>(({ disabledLink = false, sx, ...other }, ref) => {
  const iso = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 60,
        height: 60,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <img src="/assets/images/logos/stay-u-nique-isotipo.svg" alt="Stay U-nique. Always with you (iso presentation)" />
    </Box>
  );

  if (disabledLink) {
    return iso;
  }

  return (
    <Link component={RouterLink} to="/" sx={{ display: 'contents' }}>
      {iso}
    </Link>
  );
});

export default Iso;
