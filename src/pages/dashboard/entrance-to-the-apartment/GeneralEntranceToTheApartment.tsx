import { Container } from '@mui/material';

// ** Custom components
import { PageContainer } from '../../../components/containers/page';
import { CustomStepper, CustomStepContentProps } from '../../../components/custom-stepper/CustomStepper';
import { FindYourBuilding, EnterYourBuilding, FindYourApartment, EnterYourApartment } from '../../../components/dashboard/enter-to-the-apartment/forms';

export default function GeneralEntranceToTheApartment() {
  const stepsContent: CustomStepContentProps = {
    0: {
      stepTitle: 'Find your building',
      stepSubtitle: '',
      title: 'Find your building',
      subtitle: 'Click on see my door to see the real image of the door of the building or you can look for it on the map to know that you are in the right place',
      component: <FindYourBuilding />,
    },
    1: {
      stepTitle: 'Enter your building',
      stepSubtitle: '',
      title: 'Enter your building',
      subtitle: 'Follow the instructions of how to enter the building',
      component: <EnterYourBuilding />,
    },
    2: {
      stepTitle: 'Find your apartment',
      stepSubtitle: '',
      title: 'Find your apartment',
      subtitle: 'Click on see my door to see the real image of the door of the apartment ',
      component: <FindYourApartment />,
    },
    3: {
      stepTitle: 'Enter your apartment',
      stepSubtitle: '',
      title: 'Enter your apartment',
      subtitle: 'Follow the instructions of how to enter the apartment',
      component: <EnterYourApartment />,
    },
  };

  return (
    <PageContainer title="Check-in">
      <Container maxWidth="xl">
        <CustomStepper stepperTitle="To enter at the Apartment" stepperSubtitle="Follow the next steps" stepsContent={stepsContent} />
      </Container>
    </PageContainer>
  );
}
