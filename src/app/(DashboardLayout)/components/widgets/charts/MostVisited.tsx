import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/system';
import dynamic from 'next/dynamic';
import React from 'react';

import BlankCard from '../../shared/BlankCard';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MostVisited = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 250,
      stacked: true,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        borderRadius: [6],
        horizontal: false,
        barHeight: '60%',
        columnWidth: '25%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06'],
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [
    {
      name: 'San Francisco',
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: 'Diego',
      data: [13, 23, 20, 8, 13, 27],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Most Visited</Typography>
        </Stack>
        <Box>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="bar"
            height="250px"
            width="100%"
          />
        </Box>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              sx={{
                width: '8px',
                height: '8px',
                backgroundColor: 'primary.main',
                borderRadius: '100%',
              }}
            />
            <Typography variant="subtitle2" color="textSecondary">
              San Francisco
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              sx={{
                width: '8px',
                height: '8px',
                backgroundColor: 'secondary.main',
                borderRadius: '100%',
              }}
            />
            <Typography variant="subtitle2" color="textSecondary">
              Diego
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </BlankCard>
  );
};

export default MostVisited;
