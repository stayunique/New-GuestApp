import * as React from 'react';

// ** Material UI
import { Box, Stepper, Step, StepLabel, StepConnector, stepConnectorClasses, StepIconProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// ** Icons
// import SettingsIcon from '@mui/icons-material/Settings';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import VideoLabelIcon from '@mui/icons-material/VideoLabel';

// ** Custom components
import SvgColor from '../../../svg-color/SvgColor';

const backgroundImagesPath = '/assets/images/backgrounds/dashboard/check-in/bg-';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 21,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#609B88',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#609B88',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#DADADA',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 36.88,
  height: 33.83,
  display: 'flex',
  // borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${backgroundImagesPath}check-in-step-inactive.svg)`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  ...(ownerState.active && {
    marginTop: '-5px',
    width: 58.68,
    height: 53.83,
    backgroundImage: `url(${backgroundImagesPath}check-in-step-active.svg)`,
    // backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: `url(${backgroundImagesPath}check-in-step-completed.svg)`,
    // backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  // const icons: { [index: string]: React.ReactElement } = {
  //   1: <SettingsIcon />,
  //   2: <GroupAddIcon />,
  //   3: <VideoLabelIcon />,
  // };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {/* {icons[String(props.icon)]} */}
      <SvgColor src={`/assets/images/logos/stay-u-nique-isotipo.svg`} sx={{ color: 'white', width: active ? '36px' : '21px', height: active ? '36px' : '21px' }} />
    </ColorlibStepIconRoot>
  );
}

const steps = ['Arrival time', 'Passport', 'Personal Information', 'Extras', 'Payments', 'Contract'];

export const CheckInStepper = () => {
  return (
    <Box sx={{ border: '2px solid #609B88', borderRadius: '32px', px: 6, py: 4, mt: 4 }}>
      <Typography variant="h3" color="primary">
        Before Arrival
      </Typography>
      <Typography variant="h5" fontWeight="regular" color="secondary">
        Follow the next steps
      </Typography>
      <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />} sx={{ width: '100%', my: '3em' }}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography variant="body1" fontWeight="regular" color="secondary" lineHeight={2.5}>
        Please fill in this information at least one week in advance. <br />
        Please keep in mind the official checking time is at 15h. Early Checking are subject to our availability.
      </Typography>
      {/* <Typography variant="body1">Please keep in mind the official checking time is at 15h. Early Checking are subject to our availability.</Typography> */}
    </Box>
  );
};
