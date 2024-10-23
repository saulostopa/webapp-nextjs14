import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { IconArrowBack } from '@tabler/icons-react';
import { sum } from 'lodash';
import React from 'react';

import { useSelector } from '@/store/hooks';

import type { ProductType } from '../../../../types/apps/eCommerce';
import AddToCart from '../productCart/AddToCart';
import FinalStep from './FinalStep';
import FirstStep from './FirstStep';
import HorizontalStepper from './HorizontalStepper';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const ProductChecout = () => {
  const checkout = useSelector((state) => state.ecommerceReducer.cart);
  const steps = ['Cart', 'Billing & address', 'Payment'];
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const total = sum(
    checkout.map((product: ProductType) => product.price * product.qty),
  );
  const Discount = Math.round(total * (5 / 100));

  return (
    <Box>
      <HorizontalStepper
        steps={steps}
        handleReset={handleReset}
        activeStep={activeStep}
        finalStep={<FinalStep />}
      >
        {/* ------------------------------------------- */}
        {/* Step1 */}
        {/* ------------------------------------------- */}
        {activeStep === 0 ? (
          <>
            <Box my={3}>
              <AddToCart />
            </Box>
            {checkout.length > 0 ? (
              <>
                {/* ------------------------------------------- */}
                {/* Cart Total */}
                {/* ------------------------------------------- */}
                <FirstStep total={total} Discount={Discount} />
                <Stack direction="row" justifyContent="space-between">
                  <Button
                    color="secondary"
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button variant="contained" onClick={handleNext}>
                    Checkout
                  </Button>
                </Stack>
              </>
            ) : (
              ''
            )}
          </>
        ) : activeStep === 1 ? (
          <>
            {/* ------------------------------------------- */}
            {/* Step2 */}
            {/* ------------------------------------------- */}
            <SecondStep nexStep={handleNext} />
            <FirstStep total={total} Discount={Discount} />
            <Stack direction="row" justifyContent="space-between">
              <Button
                color="inherit"
                disabled={activeStep !== 1}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button color="inherit" variant="outlined">
                Select Address to go next
              </Button>
            </Stack>
          </>
        ) : (
          <>
            {/* ------------------------------------------- */}
            {/* Step3 */}
            {/* ------------------------------------------- */}
            <ThirdStep />
            <FirstStep total={total} Discount={Discount} />
            <Stack direction="row" justifyContent="space-between">
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                <IconArrowBack /> Back
              </Button>
              <Button onClick={handleNext} size="large" variant="contained">
                Complete an Order
              </Button>
            </Stack>
          </>
        )}
      </HorizontalStepper>
    </Box>
  );
};

export default ProductChecout;