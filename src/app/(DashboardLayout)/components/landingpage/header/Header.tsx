import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled, type Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo';

import MobileSidebar from './MobileSidebar';
import Navigations from './Navigations';

export default function Header() {
  const { t } = useTranslation();
  const tIndexPage: any = t('IndexPage', { returnObjects: true });
  const tHeaderMenu: any = t('NavigationMenu', { returnObjects: true });

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      minHeight: '100px',
    },
    backgroundColor: theme.palette.background.default,
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    color: theme.palette.text.secondary,
  }));

  //   sidebar
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBarStyled position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <ToolbarStyled>
          <Logo />
          {lgDown ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <IconMenu2 size="20" />
            </IconButton>
          ) : null}
          {lgUp ? (
            <>
              <Stack spacing={1} direction="row" alignItems="center" gap={1}>
                {tHeaderMenu.questions.map((question: any) => (
                  <Navigations key={question.title} href={question.title}>
                    {question.title}
                  </Navigations>
                ))}
              </Stack>
              <Link
                href="/api/auth/login"
                className="bg-s2pro-primary rounded-md px-6 py-2 text-white md:ml-5"
              >
                {tIndexPage.btnEntrar}
              </Link>
            </>
          ) : null}
        </ToolbarStyled>
      </Container>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 270,
            border: '0 !important',
            paddingTop: 2,
            boxShadow: (theme) => theme.shadows[8],
          },
        }}
      >
        <MobileSidebar />
      </Drawer>
    </AppBarStyled>
  );
}
