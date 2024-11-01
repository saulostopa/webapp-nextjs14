import * as locales from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import _ from 'lodash';
import { useEffect } from 'react';

import { useSelector } from '@/store/hooks';
import type { AppState } from '@/store/store';

import components from './Components';
import { baseDarkTheme, baselightTheme } from './DefaultColors';
import { darkshadows, shadows } from './Shadows';
import typography from './Typography';

export const BuildTheme = (config: any = {}) => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const defaultTheme =
    customizer.activeMode === 'dark' ? baseDarkTheme : baselightTheme;
  const defaultShadow =
    customizer.activeMode === 'dark' ? darkshadows : shadows;
  const themeSelect = defaultTheme;
  const baseMode = {
    palette: {
      mode: customizer.activeMode,
    },
    shape: {
      borderRadius: customizer.borderRadius,
    },
    shadows: defaultShadow,
    typography,
  };
  const theme = createTheme(
    _.merge({}, baseMode, defaultTheme, locales, themeSelect, {
      direction: config.direction,
    }),
  );
  theme.components = components(theme);

  return theme;
};

const ThemeSettings = () => {
  const activDir = useSelector((state: AppState) => state.customizer.activeDir);
  const theme = BuildTheme({
    direction: activDir,
  });
  useEffect(() => {
    document.dir = activDir;
  }, [activDir]);

  return theme;
};

export { ThemeSettings };
