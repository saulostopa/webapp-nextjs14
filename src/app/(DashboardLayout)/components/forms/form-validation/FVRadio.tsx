import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
  color: yup.string().required('Color selection is required'),
});

const FVRadio = () => {
  const formik = useFormik({
    initialValues: {
      color: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(values.color);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack>
        <Box mt="-10px" mb={3}>
          <FormControl>
            <RadioGroup
              row
              aria-label="color"
              value={formik.values.color}
              onChange={formik.handleChange}
              name="color"
              id="color"
            >
              <FormControlLabel
                value="primary"
                control={
                  <Radio
                    sx={{
                      color: 'primary.main',
                      '&.Mui-checked': { color: 'primary.main' },
                    }}
                  />
                }
                label="Primary"
              />
              <FormControlLabel
                value="error"
                control={
                  <Radio
                    sx={{
                      color: 'error.main',
                      '&.Mui-checked': { color: 'error.main' },
                    }}
                  />
                }
                label="Error"
              />
              <FormControlLabel
                value="secondary"
                control={
                  <Radio
                    sx={{
                      color: 'secondary.main',
                      '&.Mui-checked': { color: 'secondary.main' },
                    }}
                  />
                }
                label="Secondary"
              />
            </RadioGroup>
          </FormControl>
          {formik.errors.color && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {' '}
              {formik.errors.color}{' '}
            </FormHelperText>
          )}
        </Box>
        <Stack direction="row" justifyContent="flex-end">
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default FVRadio;
