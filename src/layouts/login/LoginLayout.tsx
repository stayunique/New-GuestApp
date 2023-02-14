import { Container, Box } from '@mui/material';

// ** Components
import Logo from '../../components/logo/Logo';
import BackgroundSlider from '../../lib';
import Footer from '../main/Footer';

type Props = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: Props) {
  return (
    <>
      <Box sx={{ height: '95vh' }} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <BackgroundSlider
          images={[
            '/assets/images/backgrounds/login-bg-1.svg',
            '/assets/images/backgrounds/login-bg-2.svg',
            '/assets/images/backgrounds/login-bg-3.svg',
            '/assets/images/backgrounds/login-bg-4.svg',
            '/assets/images/backgrounds/login-bg-5.svg',
          ]}
          duration={5}
          transition={1.2}
        />

        <Logo sx={{ width: 550.55, height: 137.72, mb: 10 }} />
        <Container maxWidth="xs" sx={{ mb: 20 }}>
          {children}
        </Container>
      </Box>

      <Footer />
    </>
  );
}
