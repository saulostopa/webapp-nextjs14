import Box from '@mui/material/Box';
import React from 'react';

import CustomSwitch from '../../theme-elements/CustomSwitch';

const CustomExSwitch = () => (
  <Box textAlign="center">
    <CustomSwitch checked />
    <CustomSwitch />
    <CustomSwitch disabled defaultChecked />
    <CustomSwitch disabled />
  </Box>
);
export default CustomExSwitch;
