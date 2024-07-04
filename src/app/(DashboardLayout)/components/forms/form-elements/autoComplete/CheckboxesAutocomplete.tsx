import Autocomplete from '@mui/material/Autocomplete';
import React from 'react';

import CustomCheckbox from '../../theme-elements/CustomCheckbox';
import CustomTextField from '../../theme-elements/CustomTextField';
import top100Films from './data';

const CheckboxesAutocomplete = () => (
  <Autocomplete
    multiple
    id="checkboxes-tags-demo"
    options={top100Films}
    disableCloseOnSelect
    getOptionLabel={(option) => option.title}
    renderOption={(props, option, { selected }) => (
      <li {...props}>
        <CustomCheckbox style={{ marginRight: 8 }} checked={selected} />
        {option.title}
      </li>
    )}
    fullWidth
    renderInput={(params) => (
      <CustomTextField
        {...params}
        placeholder="Favorites"
        aria-label="Favorites"
      />
    )}
  />
);

export default CheckboxesAutocomplete;
