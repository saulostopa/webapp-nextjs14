import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import React from 'react';

const PositionSwitch = () => (
  <Box textAlign="center">
    <FormGroup aria-label="position" row>
      <FormControlLabel
        value="top"
        control={<Switch color="primary" />}
        label="Top"
        labelPlacement="top"
      />
      <FormControlLabel
        value="start"
        control={<Switch color="primary" />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        value="bottom"
        control={<Switch color="primary" />}
        label="Bottom"
        labelPlacement="bottom"
      />
      <FormControlLabel
        value="end"
        control={<Switch color="primary" />}
        label="End"
        labelPlacement="end"
      />
    </FormGroup>
  </Box>
);
export default PositionSwitch;
