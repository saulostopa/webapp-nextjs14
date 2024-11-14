'use client';

import '@/utils/i18n';
import 'react-quill/dist/quill.snow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { type ReactNode, useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import RTL from '@/app/(DashboardLayout)/layout/shared/customizer/RTL';
import LoadingComponent from '@/components/loadingComponent';
import { NextAuthProvider } from '@/lib/providers';
import { useSelector } from '@/store/hooks';
import type { AppState } from '@/store/store';
import { store } from '@/store/store';
import { NextAppDirEmotionCacheProvider } from '@/utils/theme/EmotionCache';
import { ThemeSettings } from '@/utils/theme/Theme';

export function MyApp({ children }: { children: React.ReactNode }) {
  const theme = ThemeSettings();

  const customizer = useSelector((state: AppState) => state.customizer);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'modernize' }}>
      <ThemeProvider theme={theme}>
        <RTL direction={customizer.activeDir}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <NextAuthProvider>{children}</NextAuthProvider>
        </RTL>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          {loading ? <MyApp>{children}</MyApp> : <LoadingComponent />}
        </Provider>
      </body>
    </html>
  );
}
