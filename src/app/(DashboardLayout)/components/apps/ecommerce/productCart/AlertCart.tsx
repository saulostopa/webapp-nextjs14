import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';

interface Props {
  handleClose: (event: React.SyntheticEvent | any) => void;
  openCartAlert: boolean;
}

const AlertCart = ({ handleClose, openCartAlert }: Props) => {
  return (
    <Snackbar
      open={openCartAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={1000}
      onClose={handleClose}
    >
      <Alert
        severity="success"
        variant="filled"
        sx={{ width: '100%', color: 'white' }}
      >
        Item Added to the Cart!!!
      </Alert>
    </Snackbar>
  );
};

export default AlertCart;
