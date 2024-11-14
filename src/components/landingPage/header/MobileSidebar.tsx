import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo';
import Language from '@/app/(DashboardLayout)/layout/vertical/header/Language';

import Navigations from './Navigations';
import ThemeSwitcher from './ThemeSwitcher';

const MobileSidebar = () => {
  const { t } = useTranslation();
  const tIndexPage: any = t('IndexPage', { returnObjects: true });
  const tHeaderMenu: any = t('NavigationMenu', { returnObjects: true });

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Logo />
      </Box>
      <Box p={3}>
        <Stack direction="column" spacing={2}>
          {tHeaderMenu.questions.map((question: any) => (
            <Navigations key={question.title} href={question.title}>
              {question.title}
            </Navigations>
          ))}

          <Link
            href="/auth/login"
            className="bg-s2pro-primary flex justify-center rounded-md px-6 py-2 text-white md:ml-5"
          >
            {tIndexPage.btnEntrar}
          </Link>
          <ThemeSwitcher />
          <Language />
        </Stack>
      </Box>
    </>
  );
};

export default MobileSidebar;
