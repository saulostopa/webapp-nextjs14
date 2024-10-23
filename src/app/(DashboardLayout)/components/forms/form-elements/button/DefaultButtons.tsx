import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';

const DefaultButtons = () => (
  <Stack
    spacing={1}
    direction={{ xs: 'column', sm: 'row' }}
    justifyContent="center"
  >
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button disabled>Disabled</Button>
    <Button href="#text-buttons" variant="contained" color="primary">
      Link
    </Button>
  </Stack>
);

export default DefaultButtons;
