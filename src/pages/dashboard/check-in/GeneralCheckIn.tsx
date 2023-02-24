import { Container } from '@mui/material';

// ** Custom components
import { PageContainer } from '../../../components/containers/page';
// import { CheckIn } from '../../../components/dashboard/check-in/forms/CheckIn';
import { CheckInStepper } from '../../../components/dashboard/check-in/stepper/CheckInStepper';

export default function GeneralCheckIn() {
  return (
    <PageContainer title="Check-in">
      <Container maxWidth="xl">
        {/* Check-in Stepper */}
        <CheckInStepper />

        {/* Forms */}
        {/* <CheckIn containerProps={{ mt: '1em' }} /> */}
      </Container>
    </PageContainer>
  );
}
