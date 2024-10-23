import 'simplebar-react/dist/simplebar.min.css';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import SimpleBar from 'simplebar-react';

const SimpleBarStyle = styled(SimpleBar)(() => ({
  maxHeight: '100%',
}));

interface PropsType {
  children: React.ReactElement | React.ReactNode;
  sx: SxProps;
}

const Scrollbar = (props: PropsType) => {
  const { children, sx, ...other } = props;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  if (isMobile) {
    return <Box sx={{ overflowX: 'auto' }}>{children}</Box>;
  }

  return (
    <SimpleBarStyle sx={sx} {...other}>
      {children}
    </SimpleBarStyle>
  );
};

export default Scrollbar;
