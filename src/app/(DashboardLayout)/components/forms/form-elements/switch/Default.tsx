import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import React from 'react';

const DefaultSwitch = () => (
  <Box textAlign="center">
    <Switch defaultChecked />
    <Switch />
    <Switch disabled defaultChecked />
    <Switch disabled />
  </Box>
);
export default DefaultSwitch;
