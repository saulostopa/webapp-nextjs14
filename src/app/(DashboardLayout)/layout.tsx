'use client';

import '@/app/global.css';

import { Box, Container, styled, useTheme } from '@mui/material';
import { useSession } from 'next-auth/react';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import AccessPage from '@/components/accessPage';
import { AuthProvider } from '@/contexts/auth';
import { useSelector } from '@/store/hooks';
import type { AppState } from '@/store/store';
import type { Session } from '@/types/models/session';

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: 'transparent',
}));

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const { data: session } = useSession();

  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();
  const { t } = useTranslation();
  const tLocaleLayout: any = t('LocaleLayout', { returnObjects: true });

  const MainWrapper = styled('div')(() => ({
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    padding: customizer.isHorizontal ? 0 : '20px',
  }));

  return (
    <MainWrapper>
      <title>{tLocaleLayout.title}</title>
      <Box width="100%">
        <PageWrapper
          sx={{
            ...(customizer.isCollapse && {
              [theme.breakpoints.up('lg')]: {
                ml: `${customizer.MiniSidebarWidth}px`,
              },
            }),
            ...(!customizer.isCollapse &&
              !customizer.isHorizontal && {
                [theme.breakpoints.up('lg')]: {
                  ml: `${customizer.SidebarWidth}px`,
                },
              }),
          }}
        >
          <Container
            sx={{
              maxWidth:
                customizer.isLayout === 'boxed' ? 'lg' : '100%!important',
            }}
          >
            <Box
              sx={{
                minHeight: 'calc(100vh - 170px)',

                py: { sm: 3 },
              }}
            >
              <AuthProvider session={session as Session}>
                <AccessPage>{children as ReactElement}</AccessPage>
              </AuthProvider>
            </Box>
          </Container>
        </PageWrapper>
      </Box>
    </MainWrapper>
  );
}
