'use client';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import type { IconContainerProps } from '@mui/material/Rating';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { IconStar } from '@tabler/icons-react';
import * as React from 'react';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ChildCard from '@/app/(DashboardLayout)/components/shared/ChildCard';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Rating',
  },
];
const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});
const RadioRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));
const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;

  return <span {...other}>{customIcons[value]?.icon}</span>;
}

const MuiRating = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <PageContainer title="Rating" description="this is Rating">
      {/* breadcrumb */}
      <Breadcrumb title="Rating" items={BCrumb} />
      {/* end breadcrumb */}

      <ParentCard title="Rating">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Controlled">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(_, newValue) => {
                  setValue(newValue);
                }}
              />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Read Only">
              <Rating name="read-only" value={value} readOnly />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Disabled">
              <Rating name="disabled" value={value} disabled />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="No Rating">
              <Rating name="no-value" value={null} />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Rating precision">
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Hover feedback">
              <Stack direction="row" spacing={2} alignItems="center">
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(_, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(_, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <IconStar
                      width={20}
                      style={{ opacity: 0.55 }}
                      fontSize="inherit"
                    />
                  }
                />
                {value !== null && (
                  <Box>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Stack>
            </ChildCard>
          </Grid>

          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Custom Icon Set">
              <Stack spacing={2}>
                <StyledRating
                  name="customized-color"
                  defaultValue={2}
                  getLabelText={(labelText) =>
                    `${labelText} Heart${labelText !== 1 ? 's' : ''}`
                  }
                  precision={0.5}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
              </Stack>
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="10 Stars">
              <Rating name="customized-10" defaultValue={2} max={10} />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Radio Group">
              <RadioRating
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(labelText: number) =>
                  customIcons[labelText]?.label!
                }
                highlightSelectedOnly
              />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Sizes">
              <Stack spacing={2}>
                <Rating name="size-small" defaultValue={2} size="small" />
                <Rating name="size-medium" defaultValue={2} />
                <Rating name="size-large" defaultValue={2} size="large" />
              </Stack>
            </ChildCard>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};
export default MuiRating;
