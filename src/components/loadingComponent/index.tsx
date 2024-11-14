import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingProps {
  text?: string;
}

const LoadingComponent = ({ text }: LoadingProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <CircularProgress />
      {text && (
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingComponent;
