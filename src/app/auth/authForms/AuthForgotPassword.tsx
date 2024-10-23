import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';

export default function AuthForgotPassword() {
  return (
    <Stack mt={4} spacing={2}>
      <CustomFormLabel htmlFor="reset-email">Email Adddress</CustomFormLabel>
      <CustomTextField id="reset-email" variant="outlined" fullWidth />

      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/"
      >
        Forgot Password
      </Button>
      <Button
        color="primary"
        size="large"
        fullWidth
        component={Link}
        href="/auth/auth1/login"
      >
        Back to Login
      </Button>
    </Stack>
  );
}
