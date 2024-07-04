import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import React from 'react';

const SizesSwitch = () => (
  <Box textAlign="center">
    <Switch defaultChecked size="small" />
    <Switch defaultChecked />
  </Box>
);
export default SizesSwitch;
