import { Container } from '@mui/material';

// ** Custom components
import { PageContainer } from '../../../components/containers/page';
import { CheckInStepper } from '../../../components/dashboard/check-in/stepper/CheckInStepper';

export default function GeneralCheckIn() {
  return (
    <PageContainer title="Check-in">
      <Container maxWidth="xl">
        {/* Check-in Stepper */}
        <CheckInStepper />
      </Container>
    </PageContainer>
  );
}
