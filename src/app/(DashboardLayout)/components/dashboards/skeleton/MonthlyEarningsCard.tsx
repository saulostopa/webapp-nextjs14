import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

import DashboardCard from '../../shared/DashboardCard';

const SkeletonMonthlyEarningsCard = () => {
  return (
    <DashboardCard>
      <>
        <Stack direction="row" spacing={1} alignItems="center" mb={3}>
          <Typography variant="h3" fontWeight="700">
            <Skeleton variant="rounded" width={90} height={21} />
          </Typography>
          <Stack
            direction="row"
            ml={1}
            spacing={1}
            mt={1}
            mb={2}
            alignItems="center"
          >
            <Skeleton variant="rounded" width={90} height={21} />
          </Stack>
        </Stack>

        <Skeleton variant="rounded" width={300} height={140} />
      </>
    </DashboardCard>
  );
};

export default SkeletonMonthlyEarningsCard;
