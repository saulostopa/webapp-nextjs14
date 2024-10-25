'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Shadow = () => {
  return (
    <PageContainer title="Shadow" description="this is Shadow">
      <DashboardCard title="Shadow">
        <Grid container spacing={2}>
          {[lightTheme, darkTheme].map((theme) => (
            <Grid item xs={6} key={`${theme}`}>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr' },
                    gap: 2,
                  }}
                >
                  {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                    <Item key={elevation} elevation={elevation}>
                      {`elevation=${elevation}`}
                    </Item>
                  ))}
                </Box>
              </ThemeProvider>
            </Grid>
          ))}
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default Shadow;
