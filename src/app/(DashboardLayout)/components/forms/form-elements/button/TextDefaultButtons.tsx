import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';

const TextDefaultButtons = () => (
  <Stack
    spacing={1}
    direction={{ xs: 'column', sm: 'row' }}
    justifyContent="center"
  >
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button disabled>Disabled</Button>
    <Button href="#text-buttons" color="primary">
      Link
    </Button>
  </Stack>
);

export default TextDefaultButtons;
