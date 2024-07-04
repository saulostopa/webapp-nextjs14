import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import React from 'react';

const CustomSelect = styled((props: any) => <Select {...props} />)(
  ({}) => ({}),
);

export default CustomSelect;
