import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { IconPlus, IconUser } from '@tabler/icons-react';
import React from 'react';

const emails = ['JohnDeo@gmail.com', 'SmithRocky@gmail.com'];

const SimpleDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<string>(emails[1]!);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleClickOpen}
      >
        Open Simple Dialog
      </Button>
      <Typography variant="subtitle1" component="div" mb={1} textAlign="center">
        Selected: {selectedValue}
      </Typography>
      <Dialog onClose={() => handleClose(selectedValue)} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        <List sx={{ pt: 0 }}>
          {emails.map((email) => (
            <ListItem button onClick={() => handleClose(email)} key={email}>
              <ListItemAvatar>
                <Avatar
                  sx={{ bgcolor: 'primary.light', color: 'primary.main' }}
                >
                  <IconUser width={20} height={20} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItem>
          ))}

          <ListItem autoFocus button onClick={() => handleClose('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <IconPlus width={20} height={20} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItem>
        </List>
      </Dialog>
    </>
  );
};

export default SimpleDialog;
