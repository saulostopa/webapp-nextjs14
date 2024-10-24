import ListSubheader from '@mui/material/ListSubheader';
import { styled, Theme } from '@mui/material/styles';
import { IconDots } from '@tabler/icons-react';
import React from 'react';

type NavGroup = {
  navlabel?: boolean;
  subheader?: string;
};

interface ItemType {
  item: NavGroup;
  hideMenu: string | boolean;
}

const NavGroup = ({ item, hideMenu }: ItemType) => {
  const ListSubheaderStyle = styled((props: Theme | any) => (
    <ListSubheader disableSticky {...props} />
  ))(({ theme }) => ({
    ...theme.typography.overline,
    fontWeight: '700',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    color: (theme: any) => theme.palette.text.Primary,
    opacity: '0.50',
    lineHeight: '26px',
    padding: '3px 20px',
    marginLeft: hideMenu ? '' : '-10px',
  }));

  return (
    <ListSubheaderStyle>
      {hideMenu ? <IconDots size="14" /> : item?.subheader}
    </ListSubheaderStyle>
  );
};

export default NavGroup;
