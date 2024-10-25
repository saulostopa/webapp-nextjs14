import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

export default function AuthForgotPassword() {
  return (
    <Stack mt={4} spacing={2}>
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
