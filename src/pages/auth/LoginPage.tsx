import { Paper } from '@mui/material';
import { PageContainer } from '../../components/containers/page';

// ** Layouts
import LoginLayout from '../../layouts/login';

// ** Components
import { LoginForm } from '../../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <PageContainer title="Login">
      <LoginLayout>
        <Paper sx={{ p: 5, borderRadius: '32px' }} elevation={10}>
          <LoginForm />
        </Paper>
      </LoginLayout>
    </PageContainer>
  );
}
