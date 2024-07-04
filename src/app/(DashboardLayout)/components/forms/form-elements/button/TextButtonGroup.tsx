import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import React from 'react';

const TextButtonGroup = () => (
  <Stack spacing={1} direction="column" justifyContent="center">
    <ButtonGroup variant="text" aria-label="text button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      color="secondary"
      variant="text"
      aria-label="text button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup color="error" variant="text" aria-label="text button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </Stack>
);

export default TextButtonGroup;
