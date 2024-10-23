import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { IconSend, IconTrash } from '@tabler/icons-react';
import React from 'react';

const TextIconButtons = () => (
  <Stack spacing={1} direction="row" justifyContent="center">
    <Button color="error" startIcon={<IconTrash width={18} />}>
      Left Icon
    </Button>
    <Button color="secondary" endIcon={<IconSend width={18} />}>
      Right Icon
    </Button>
  </Stack>
);

export default TextIconButtons;
