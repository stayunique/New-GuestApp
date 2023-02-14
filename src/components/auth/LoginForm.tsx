import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// ** Form components
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// ** Material UI
import { Link, Stack, Alert, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ** Routes
import { PATH_AUTH } from '../../routes/paths';

// ** Hooks
import { useTranslation } from 'react-i18next';

// ** Auth
// import { useAuthContext } from '../../auth/useAuthContext';

// ** Components
import Iconify from '../../components/iconify';

type FormValuesProps = {
  username: string | undefined;
  password: string | undefined;
  afterSubmit?: string;
};

const isDev = process.env.NODE_ENV === 'development';

export const LoginForm = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false);

  // ** Hooks
  const { t } = useTranslation();

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required(t('login.form.validations.username.required') || 'Username is required'),
    password: Yup.string().required(t('login.form.validations.password.required') || 'Password is required'),
  });

  const defaultValues = {
    username: isDev && process.env.REACT_APP_DEFAULT_USER ? process.env.REACT_APP_DEFAULT_USER : '',
    password: isDev && process.env.REACT_APP_DEFAULT_USER_PASSWORD ? process.env.REACT_APP_DEFAULT_USER_PASSWORD : '',
  };

  const onSubmit = async (values: FormValuesProps) => {
    console.log(values);
  };

  return (
    <Formik initialValues={defaultValues} onSubmit={onSubmit} validationSchema={LoginSchema}>
      {({ values, touched, errors, handleChange, isSubmitting, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              name="username"
              type="text"
              placeholder={t('login.form.fields.username') || 'Username'}
              value={values.username}
              onChange={handleChange}
              error={Boolean(errors.username && touched.username)}
              helperText={Boolean(errors.username && touched.username) ? errors.username : ''}
            />

            <TextField
              name="password"
              placeholder={t('login.form.fields.password') || 'Password'}
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange}
              value={values.password}
              error={Boolean(touched.password && errors.password)}
              helperText={Boolean(errors.password && touched.password) ? errors.password : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ ml: -2 }}>
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

            <LoadingButton
              fullWidth
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disableElevation
              sx={{
                borderRadius: 136.98,
                bgcolor: 'text.primary.main',
                color: theme => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                '&:hover': {
                  bgcolor: 'text.primary.darker',
                  color: theme => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                },
                textTransform: 'capitalize',
              }}
            >
              {t('login.form.button')}
            </LoadingButton>
          </Stack>

          <Stack alignItems="center" sx={{ my: 2 }}>
            <Link component={RouterLink} to={PATH_AUTH.resetPassword} variant="body2" color="primary.lighter" underline="hover">
              {t('login.forgotPassword')}
            </Link>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
