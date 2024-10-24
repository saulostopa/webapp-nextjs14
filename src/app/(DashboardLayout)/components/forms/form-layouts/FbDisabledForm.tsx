import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';

import ParentCard from '../../shared/ParentCard';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import CustomTextField from '../theme-elements/CustomTextField';

const FbDisabledForm = () => (
  <ParentCard title="Disabled Form">
    <form>
      <CustomFormLabel
        sx={{
          mt: 0,
        }}
        htmlFor="df-name"
      >
        Name
      </CustomFormLabel>
      <CustomTextField id="df-name" variant="outlined" fullWidth disabled />
      <CustomFormLabel htmlFor="df-email-address">Email</CustomFormLabel>
      <CustomTextField
        id="df-email-address"
        helperText="We'll never share your email with anyone else."
        variant="outlined"
        fullWidth
        disabled
      />
      <CustomFormLabel htmlFor="df-outlined-password-input">
        Password
      </CustomFormLabel>
      <CustomTextField
        id="df-outlined-password-input"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        fullWidth
        disabled
      />
      <Box mt={2}>
        <Button color="primary" variant="contained" disabled>
          Submit
        </Button>
      </Box>
    </form>
  </ParentCard>
);

export default FbDisabledForm;
