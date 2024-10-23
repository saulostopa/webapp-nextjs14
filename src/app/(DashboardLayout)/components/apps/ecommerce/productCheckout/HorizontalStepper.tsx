import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Link from 'next/link';
import * as React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
  steps: any[];
  activeStep: number;
  handleReset: (event: React.SyntheticEvent | Event) => void;
  finalStep: JSX.Element | JSX.Element[];
}

const HorizontalStepper = ({
  children,
  steps,
  activeStep,
  handleReset,
  finalStep,
}: Props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Box>{finalStep}</Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, gap: 3 }}>
            <Button
              variant="contained"
              color="success"
              component={Link}
              href="/apps/ecommerce/shop"
            >
              Continue Shopping
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant="contained">Download Receipt</Button>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <Box sx={{ mt: 2, mb: 1 }}>{children}</Box>
      )}
    </Box>
  );
};

export default HorizontalStepper;
