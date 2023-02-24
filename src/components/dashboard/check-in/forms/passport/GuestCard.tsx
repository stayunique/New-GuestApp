import { Box, Typography, SxProps, useTheme, Button } from '@mui/material';
import SvgColor from '../../../../svg-color/SvgColor';

export const GuestCard = ({ sx = {} }: { sx?: SxProps }) => {
  const theme = useTheme();

  return (
    <Box
      component={Button}
      sx={{
        height: '196px',
        width: '346px',
        borderRadius: '15px',
        bgcolor: '#F4F4F4',
        boxShadow: '1px 1px 27px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        overflow: 'clip',
        transition: theme.transitions.create(['box-shadow'], {
          duration: theme.transitions.duration.shorter,
        }),
        '& .MuiTouchRipple-child': {
          backgroundColor: `#e0e0e0`,
        },
        '&:hover': {
          bgcolor: '#F4F4F4',
          boxShadow: '1px 1px 27px rgba(0, 0, 0, 0.50)',
        },
        ...sx,
      }}
    >
      <SvgColor
        src={`/assets/images/backgrounds/forms/passport/bg-new-guest-plus-icon.svg`}
        sx={{
          height: '93.15px',
          width: '108.67px',
          position: 'absolute',
          left: '260.62px',
          top: '18px',
          color: '#EBEBEB',
        }}
      />
      <SvgColor
        src={`/assets/images/backgrounds/forms/passport/bg-new-guest.svg`}
        sx={{
          height: '169.9570770263672px',
          width: '169.9570770263672px',
          position: 'absolute',
          left: '33.82%',
          right: '17.06%',
          top: '26.7%',
          bottom: '-13.41%',
          color: '#EBEBEB',
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          left: '17px',
          top: '140px',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '28px',
          color: '#B1B1B1',
        }}
      >
        Add new guest
      </Typography>
    </Box>
  );
};
