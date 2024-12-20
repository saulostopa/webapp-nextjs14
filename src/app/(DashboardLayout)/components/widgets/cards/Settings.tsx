import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/system';
import { IconMessage, IconVolume } from '@tabler/icons-react';
import React from 'react';

import BlankCard from '../../shared/BlankCard';

const Settings = () => {
  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Typography variant="h5">Settings</Typography>
        <Stack spacing={2} mt={3}>
          <Stack direction="row" spacing={2}>
            <Avatar
              variant="rounded"
              sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}
            >
              <IconVolume width={22} />
            </Avatar>
            <Box width="100%">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6">Sound</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  45%
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Divider />
          <Stack direction="row" spacing={2}>
            <Avatar
              variant="rounded"
              sx={{ bgcolor: 'secondary.main', width: 48, height: 48 }}
            >
              <IconMessage width={22} />
            </Avatar>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box>
                <Typography variant="h6" mb={1}>
                  Chat
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Turn on chat during call
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Divider />
        </Stack>
        <Stack direction="row" justifyContent="end" spacing={2} mt={2}>
          <Button variant="outlined" color="error">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Stack>
      </CardContent>
    </BlankCard>
  );
};

export default Settings;
