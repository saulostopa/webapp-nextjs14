import { Icon } from '@iconify/react';
import type { BoxProps } from '@mui/material/Box';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { setDarkMode } from '@/store/customizer/CustomizerSlice';
import { useDispatch, useSelector } from '@/store/hooks';
import type { AppState } from '@/store/store';

export default function ThemeSwitcher() {
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const StyledBox = styled(Box)<BoxProps>(() => ({
    padding: '8px',
    cursor: 'pointer',
    justifyContent: 'center',
    display: 'flex',
    transition: '0.1s ease-in',
    '&:hover': {
      transform: 'scale(1.10)',
    },
  }));

  return (
    <>
      {customizer.activeMode === 'light' && (
        <StyledBox
          onClick={() => dispatch(setDarkMode('dark'))}
          display="flex"
          gap={1}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{
              color: customizer.activeMode === 'light' ? 'primary' : 'inherit',
            }}
          >
            <Icon icon="solar:moon-bold-duotone" width={24} height={24} />
          </Box>
        </StyledBox>
      )}

      {customizer.activeMode === 'dark' && (
        <StyledBox
          onClick={() => dispatch(setDarkMode('light'))}
          display="flex"
          gap={1}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{
              color: customizer.activeMode === 'dark' ? 'primary' : 'inherit',
            }}
          >
            <Icon icon="solar:sun-2-bold-duotone" width={24} height={24} />
          </Box>
        </StyledBox>
      )}
    </>
  );
}
