import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { useSelector } from '@/store/hooks';
import type { AppState } from '@/store/store';

const NewGoals = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card
      sx={{
        padding: 0,
        border: !customizer.isCardShadow ? `1px solid ${borderColor}` : 'none',
        backgroundColor: 'info.light',
        position: 'relative',
      }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      <Image
        src="/images/backgrounds/top-info-shape.png"
        alt="img"
        className="top-img"
        width={59}
        height={81}
      />
      <CardContent>
        <Box mb={5}>
          <Avatar
            sx={{
              bgcolor: 'info.main',
              width: 48,
              height: 48,
            }}
          >
            <Image
              src="/images/svgs/icon-idea.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </Avatar>
        </Box>
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <Typography variant="h6">New Goals</Typography>
          <Typography variant="subtitle1" fontWeight={500} color="primary.main">
            83%
          </Typography>
        </Stack>
        <LinearProgress value={83} variant="determinate" />
      </CardContent>
    </Card>
  );
};

export default NewGoals;
