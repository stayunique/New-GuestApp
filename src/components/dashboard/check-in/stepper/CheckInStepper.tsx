import { useState } from 'react';

// ** Material UI
import { Box, Container, Stepper, Step, StepLabel, StepConnector, stepConnectorClasses, StepIconProps, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// ** Icons
// import SettingsIcon from '@mui/icons-material/Settings';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// ** Custom components
import SvgColor from '../../../svg-color/SvgColor';
import { CheckIn, Contract, Extras, Passport, Payments, PersonalInfo } from '../forms';

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
const stepsSubtitles = [
  'Please fill in this information at least one week in advance. <br /> Please keep in mind the official checking time is at 15h. Early Checking are subject to our availability.',

  'This information is compulsory (article 2....).',
  'Please provide these contact details. It will make easy us to provide information for your stay.',
  'Please provide these contact details. It will make easy us to provide information for your stay.',
  'Please provide these contact details. It will make easy us to provide information for your stay.',
  'You have completed the process, you can return to the dashboard to continue discovering...',
];
const stepsContent: { [index: string]: React.ReactElement } = {
  0: <CheckIn containerProps={{ mt: '1em' }} />,
  1: <Passport containerProps={{ mt: '1em' }} />,
  2: <PersonalInfo containerProps={{ mt: '1em' }} />,
  3: <Extras containerProps={{ mt: '1em' }} />,
  4: <Payments containerProps={{ mt: '1em' }} />,
  5: <Contract containerProps={{ mt: '1em' }} />,
};

export const CheckInStepper = () => {
  //  ** States
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <>
      <Box sx={{ border: '2px solid #609B88', borderRadius: '32px', px: 6, py: 4, mt: 4 }}>
        <Typography variant="h3" color="primary">
          Before Arrival
        </Typography>
        <Typography variant="h5" fontWeight="regular" color="secondary">
          Follow the next steps
        </Typography>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} sx={{ width: '100%', my: '3em' }}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Typography variant="body1" fontWeight="regular" color="secondary" lineHeight={2.5}>
          {stepsSubtitles[activeStep]}
        </Typography>
      </Box>

      {/* Forms */}
      <Container maxWidth="lg">{stepsContent[activeStep]}</Container>

      {/* Actions */}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
        <Button color="primary" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }} startIcon={<KeyboardArrowLeftIcon />}>
          Back
        </Button>

        <Box flexGrow={1} />

        {/* Save Button */}
        <Button
          variant="outlined"
          onClick={handleNext}
          sx={{
            width: '178.4px',
            borderRadius: 136.98,
            fontWeight: 400, // 600 -> Should be
            fontSize: '20px',
            color: theme => (theme.palette.mode === 'light' ? 'primary' : 'grey.800'),
            '&:hover': {
              color: theme => (theme.palette.mode === 'light' ? 'primary' : 'grey.800'),
            },
            textTransform: 'capitalize',
          }}
        >
          {activeStep === steps.length - 1 ? 'Back to home' : 'Save'}
        </Button>

        {/* Next Button */}
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            ml: 1,
            width: '178.4px',
            borderRadius: 136.98,
            fontWeight: 400, // 600 -> Should be
            fontSize: '20px',
            bgcolor: 'primary.main',
            color: theme => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.primary.darker',
              color: theme => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
            textTransform: 'capitalize',
          }}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </>
  );
};
