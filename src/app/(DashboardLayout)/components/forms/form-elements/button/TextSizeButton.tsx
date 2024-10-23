import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';

const TextSizeButton = () => (
  <Stack
    spacing={1}
    direction="row"
    alignItems="center"
    justifyContent="center"
  >
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </Stack>
);

export default TextSizeButton;
