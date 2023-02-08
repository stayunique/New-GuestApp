import { Container, Box } from '@mui/material';

// ** Components
import Logo from '../../components/logo/Logo';
import Footer from '../main/Footer';

type Props = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: Props) {
  return (
    <>
      <Box sx={{ height: '95vh', backgroundColor: theme => theme.palette.secondary.lighter }} display="flex" alignItems="center" justifyContent="center">
        <Container maxWidth="sm">
          <Logo sx={{ width: 550.55, height: 137.72, mb: 10 }} />
          {children}
        </Container>
      </Box>

      <Footer />
    </>
  );
}
