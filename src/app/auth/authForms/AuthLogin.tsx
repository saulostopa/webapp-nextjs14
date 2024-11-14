import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { type ChangeEvent, useState } from 'react';
import * as Yup from 'yup';

import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import type { LoginType } from '@/app/(DashboardLayout)/types/auth/auth';

import AuthSocialButtons from './AuthSocialButtons';

const AuthLogin = ({ title, subtitle, subtext }: LoginType) => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [error, setError] = useState('' as any);
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const callbackUrl = '/user/profile';

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setFormErrors({});

      await validationSchema.validate(formValues, { abortEarly: false });

      const res = await signIn('credentials', {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
      });

      if (res?.ok) {
        await signIn('credentials', {
          redirect: true,
          email: formValues.email,
          password: formValues.password,
          callbackUrl,
        });
      } else if (res?.error) {
        setError(res.error);
        setLoading(false);
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors: any = {};
        err.inner.forEach((validationError: any) => {
          if (validationError.path) {
            errors[validationError.path] = validationError.message;
          }
        });
        setFormErrors(errors);
      } else {
        setError(error);
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <AuthSocialButtons title="Sign in with" />
      <Box mt={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign in with
          </Typography>
        </Divider>
      </Box>

      <Stack>
        <Box mb={2}>
          <CustomFormLabel htmlFor="username">Email</CustomFormLabel>
          <CustomTextField
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            id="username"
            variant="outlined"
            fullWidth
            error={!!formErrors.email}
          />
          {formErrors.email && (
            <FormHelperText error>{formErrors.email}</FormHelperText>
          )}
        </Box>
        <Box mb={2}>
          <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
          <CustomTextField
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            id="password"
            variant="outlined"
            fullWidth
            error={!!formErrors.password}
          />
          {formErrors.password && (
            <FormHelperText error>{formErrors.password}</FormHelperText>
          )}
        </Box>

        {error && (
          <p className="mb-6 rounded bg-red-300 py-4 text-center">{error}</p>
        )}

        <Stack
          justifyContent="space-between"
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          my={2}
        >
          <Typography
            component={Link}
            href="/auth/forgot-password"
            fontWeight="500"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Button
          style={{ backgroundColor: `${loading ? '#ccc' : '#0085db'}` }}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          disabled={loading}
        >
          {loading ? 'loading...' : 'Sign In'}
        </Button>
      </Box>
      {subtitle}
    </form>
  );
};

export default AuthLogin;
