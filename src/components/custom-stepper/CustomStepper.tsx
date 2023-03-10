import { useState } from 'react';

// ** Material UI
import { Box, Container, Stepper, Step, StepLabel, StepConnector, stepConnectorClasses, StepIconProps, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// ** Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// ** Custom components
import SvgColor from '../svg-color/SvgColor';
import { FormsLayout } from './FormsLayout';

const backgroundImagesPath = '/assets/images/backgrounds/dashboard/check-in/bg-';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 21,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#609B88',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
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
}>(({ ownerState }) => ({
  zIndex: 1,
  color: '#fff',
  width: 36.88,
  height: 33.83,
  display: 'flex',
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
  }),
  ...(ownerState.completed && {
    backgroundImage: `url(${backgroundImagesPath}check-in-step-completed.svg)`,
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      <SvgColor src={`/assets/images/logos/stay-u-nique-isotipo.svg`} sx={{ color: 'white', width: active ? '36px' : '21px', height: active ? '36px' : '21px' }} />
    </ColorlibStepIconRoot>
  );
}

export interface CustomStepContentProps {
  [index: string]: {
    stepTitle: string;
    stepSubtitle: string;
    title: string;
    subtitle: string;
    component: React.ReactElement;
  };
}

export interface CustomStepperProps {
  stepperTitle: string;
  stepperSubtitle: string;
  stepsContent: CustomStepContentProps;
}

export const CustomStepper = ({ stepsContent = {}, stepperTitle, stepperSubtitle }: CustomStepperProps) => {
  //  ** States
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <>
      <Box sx={{ border: '2px solid #609B88', borderRadius: '32px', px: 6, py: 4, mt: 4 }}>
        <Typography variant="h3" color="primary">
          {stepperTitle}
        </Typography>
        <Typography variant="h5" fontWeight="regular" color="secondary">
          {stepperSubtitle}
        </Typography>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} sx={{ width: '100%', my: '3em' }}>
          {Object.entries(stepsContent).map(([key, value]) => (
            <Step key={key}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{value.stepTitle}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Typography variant="body1" fontWeight="regular" color="secondary" lineHeight={2.5}>
          {stepsContent[activeStep]?.stepSubtitle || ''}
        </Typography>
      </Box>

      {/* Forms */}
      <Container maxWidth="lg">
        <FormsLayout title={stepsContent[activeStep]?.title} subtitle={stepsContent[activeStep]?.subtitle} containerProps={{ sx: { mt: 2 } }}>
          {stepsContent[activeStep]?.component}
        </FormsLayout>
      </Container>

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
          {activeStep === Object.keys(stepsContent).length - 1 ? 'Back to home' : 'Save'}
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
          {activeStep === Object.keys(stepsContent).length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </>
  );
};
