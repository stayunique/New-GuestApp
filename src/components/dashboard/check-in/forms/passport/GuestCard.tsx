import { Box, Typography, SxProps, useTheme, Button } from '@mui/material';

// ** Icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import LanguageIcon from '@mui/icons-material/Language';

// ** Custom components
import SvgColor from '../../../../svg-color/SvgColor';

interface Props {
  sx?: SxProps;
  onClick?: () => void;
  guest?: {
    firstName: string;
    lastName: string;
    date: string;
    passport: string;
    country: string;
  } | null;
}

export const GuestCard = ({ sx = {}, onClick, guest = null }: Props) => {
  const theme = useTheme();
  const isGuest = !!guest;

  return (
    <Box
      component={Button}
      onClick={onClick}
      sx={{
        height: '196px',
        width: '346px',
        borderRadius: '15px',
        bgcolor: isGuest ? '#609B88' : '#F4F4F4',
        boxShadow: isGuest ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : '1px 1px 27px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        overflow: 'clip',
        transition: theme.transitions.create(['box-shadow'], {
          duration: theme.transitions.duration.shorter,
        }),
        '& .MuiTouchRipple-child': {
          backgroundColor: isGuest ? '#609B88' : `#e0e0e0`,
        },
        '&:hover': {
          bgcolor: isGuest ? '#609B88' : '#F4F4F4',
          boxShadow: '1px 1px 27px rgba(0, 0, 0, 0.50)',
        },
        ...sx,
      }}
    >
      {isGuest ? (
        <SvgColor
          src={`/assets/images/backgrounds/forms/passport/bg-guest-star-icon.svg`}
          sx={{
            height: '40px',
            width: '42px',

            position: 'absolute',
            left: '82.95%',
            right: '4.91%',
            top: '6.63%',
            bottom: '72.96%',

            color: '#FCBE4F',
          }}
        />
      ) : (
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
      )}
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
          ...(isGuest && {
            left: '48.84%',
            right: '2.04%',
            top: '20.92%',
            bottom: '-7.63%',
            color: '#4F957E',
          }),
        }}
      />
      <Typography
        noWrap
        sx={{
          width: '193px',
          position: 'absolute',
          fontWeight: '600',
          left: '17px',
          top: '140px',
          fontSize: '24px',
          lineHeight: '28px',
          color: '#B1B1B1',
          ...(isGuest && {
            left: '23px',
            top: '41px',
            fontSize: '31.4323px',
            lineHeight: '37px',
            color: '#FFFFFF',
          }),
        }}
      >
        {isGuest ? `${guest.firstName || 'N/A'} ${guest.lastName || 'N/A'}` : 'Add new guest'}
      </Typography>

      {isGuest && (
        <>
          {/* Date */}
          <CalendarMonthIcon
            color="secondary"
            sx={{
              position: 'absolute',
              left: '7.8%',
              right: '87.86%',
              top: '44.9%',
              bottom: '47.17%',
            }}
          />
          <Typography
            noWrap
            sx={{
              position: 'absolute',
              fontWeight: '400',
              width: '75px',
              ml: 1,
              left: '50px',
              top: '94px',
              fontSize: '13px',
              lineHeight: '15px',
              color: '#FFFFFF',
            }}
          >
            {guest.date || 'N/A'}
          </Typography>

          {/* Passport */}
          <BookOnlineIcon
            color="secondary"
            sx={{
              position: 'absolute',
              left: '7.8%',
              right: '83.82%',
              top: '60%',
              bottom: '33.77%',
            }}
          />
          <Typography
            noWrap
            sx={{
              width: '75px',
              position: 'absolute',
              fontWeight: '400',
              ml: 1,
              left: '50px',
              top: '122px',
              fontSize: '13px',
              lineHeight: '15px',
              color: '#FFFFFF',
            }}
          >
            {guest.passport || 'N/A'}
          </Typography>

          {/* Country */}
          <LanguageIcon
            color="secondary"
            sx={{
              position: 'absolute',
              left: '7.8%',
              right: '87.57%',
              top: '75.1%',
              bottom: '20.41%',
            }}
          />
          <Typography
            noWrap
            sx={{
              width: '75px',
              position: 'absolute',
              fontWeight: '400',
              ml: 1,
              left: '50px',
              top: '152px',
              fontSize: '13px',
              lineHeight: '15px',
              color: '#FFFFFF',
            }}
          >
            {guest.country || 'N/A'}
          </Typography>
        </>
      )}
    </Box>
  );
};
