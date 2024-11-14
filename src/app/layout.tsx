'use client';

import '@/utils/i18n';
import 'react-quill/dist/quill.snow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { type ReactNode, useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import LoadingComponent from '@/components/loadingComponent';
import { NextAuthProvider } from '@/lib/providers';
import { store } from '@/store/store';
import { ThemeSettings } from '@/utils/theme/Theme';

export function MyApp({ children }: { children: React.ReactNode }) {
  const theme = ThemeSettings();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NextAuthProvider>{children}</NextAuthProvider>
    </ThemeProvider>
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
