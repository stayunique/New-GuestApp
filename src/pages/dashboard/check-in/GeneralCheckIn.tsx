// ** Custom components
import { PageContainer } from '../../../components/containers/page';
import { CheckInStepper } from '../../../components/dashboard/check-in/CheckInStepper';

export default function GeneralCheckIn() {
  return (
    <PageContainer title="Check-in">
      {/* Check-in Stepper */}
      <CheckInStepper />
    </PageContainer>
  );
}
