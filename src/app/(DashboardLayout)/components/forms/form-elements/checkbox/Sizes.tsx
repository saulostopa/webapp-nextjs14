import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';

const SizesCheckbox = () => (
  <FormGroup
    row
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <FormControlLabel
      control={
        <Checkbox
          color="primary"
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<CheckBoxIcon />}
          name="checkednormal"
        />
      }
      label="Normal Size"
    />
    <FormControlLabel
      control={
        <Checkbox
          color="secondary"
          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
          checkedIcon={<CheckBoxIcon fontSize="small" />}
          name="checkedsmall"
        />
      }
      label="Small size"
    />
    <FormControlLabel
      control={
        <Checkbox
          color="error"
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          name="checkedH"
        />
      }
      label="Heart"
    />
  </FormGroup>
);

export default SizesCheckbox;
