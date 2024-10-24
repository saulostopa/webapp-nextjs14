import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { IconSend, IconTrash } from '@tabler/icons-react';

const OutlinedIconButtons = () => (
  <Stack
    spacing={1}
    direction={{ xs: 'column', sm: 'row' }}
    justifyContent="center"
  >
    <Button
      variant="outlined"
      color="error"
      startIcon={<IconTrash width={18} />}
    >
      Left Icon
    </Button>
    <Button
      variant="outlined"
      color="secondary"
      endIcon={<IconSend width={18} />}
    >
      Right Icon
    </Button>
  </Stack>
);

export default OutlinedIconButtons;
