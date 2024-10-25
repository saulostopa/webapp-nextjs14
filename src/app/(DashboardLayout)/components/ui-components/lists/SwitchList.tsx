import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { IconBluetooth, IconWifi } from '@tabler/icons-react';
import React from 'react';

import BlankCard from '../../shared/BlankCard';

const SwitchList = () => {
  return (
    <BlankCard>
      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        <ListItem>
          <ListItemIcon>
            <IconWifi width={20} height={20} />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <IconBluetooth width={20} height={20} />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
        </ListItem>
      </List>
    </BlankCard>
  );
};

export default SwitchList;
