import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import React from 'react';

const ColorsSwitch = () => (
  <Box textAlign="center">
    <Switch defaultChecked />
    <Switch defaultChecked color="secondary" />
    <Switch defaultChecked color="error" />
    <Switch defaultChecked color="warning" />
    <Switch defaultChecked color="success" />
    <Switch defaultChecked color="default" />
  </Box>
);
export default ColorsSwitch;
