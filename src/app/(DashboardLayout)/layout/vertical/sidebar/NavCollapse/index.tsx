import { Icon } from '@iconify/react';
// mui imports
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { styled, Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// plugins
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { isNull } from 'lodash';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from '@/store/hooks';
import type { AppState } from '@/store/store';

// custom imports
import NavItem from '../NavItem';

type NavGroupProps = {
  [x: string]: any;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
};

interface NavCollapseProps {
  menu: NavGroupProps;
  level: number;
  pathWithoutLastPart: any;
  pathDirect: any;
  hideMenu: any;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

// FC Component For Dropdown Menu
export default function NavCollapse({
  menu,
  level,
  pathWithoutLastPart,
  pathDirect,
  hideMenu,
  onClick,
}: NavCollapseProps) {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const customizer = useSelector((state: AppState) => state.customizer);
  // const Icon = menu?.icon;
  const theme = useTheme();
  const pathname = usePathname();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  // const menuIcon =
  //   level > 1 ? (
  //     <Icon stroke={1.5} size="1.3rem" />
  //   ) : (
  //     <Icon stroke={1.5} size="1.5rem" />
  //   );

  const handleClick = () => {
    setOpen(!open);
  };

  // menu collapse for sub-levels
  React.useEffect(() => {
    setOpen(false);
    menu?.children?.forEach((item: any) => {
      if (item?.href === pathname) {
        setOpen(true);
      }
    });
  }, [pathname, menu.children]);

  const ListItemStyled = styled(ListItemButton)(() => ({
    marginBottom: '2px',
    padding: '5px 10px 5px 0',
    paddingLeft: hideMenu
      ? '0'
      : level > 2
        ? `${level * 15}px`
        : level > 1
          ? '10px'
          : '0',
    whiteSpace: 'nowrap',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '-20px',
      height: '100%',
      zIndex: '-1',
      borderRadius: ' 0 24px 24px 0',
      transition: 'all .3s ease-in-out',
      width: open && level < 2 ? 'calc(100% + 20px)' : '0',
      backgroundColor: open && level < 2 ? theme.palette.primary.light : '',
    },
    '&:hover::before': {
      width: 'calc(100% + 20px)',
      backgroundColor: theme.palette.primary.light,
    },
    '.MuiListItemIcon-root': {
      width: 45,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      marginRight: '8px',
      transition: 'all .3s ease-in-out',
      // color: theme.palette.primary.main,
      // backgroundColor: theme.palette.primary.light,
    },
    '&:hover': {
      backgroundColor:
        pathname.includes(menu.href) || open
          ? theme.palette.primary.light
          : 'transparent',
    },

    // color:
    //   open && level < 2
    //     ? theme.palette.text.primary
    //     : `inherit` && level > 1 && open
    //     ? theme.palette.primary.main
    //     : theme.palette.text.secondary,
    borderRadius: ' 0 24px 24px 0',
  }));

  // If Menu has Children
  const submenus = menu.children?.map((item: any) => {
    if (item.children) {
      return (
        <NavCollapse
          key={item?.id}
          menu={item}
          level={level + 1}
          pathWithoutLastPart={pathWithoutLastPart}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={onClick}
        />
      );
    }
    return (
      <NavItem
        key={item.id}
        item={item}
        level={level + 1}
        pathDirect={pathDirect}
        hideMenu={hideMenu}
        onClick={lgDown ? onClick : isNull}
      />
    );
  });

  return (
    <>
      <ListItemStyled
        onClick={handleClick}
        selected={pathWithoutLastPart === menu.href}
        key={menu?.id}
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
            '.MuiListItemIcon-root': {
              color: level < 2 ? `${menu.bgcolor}.main` : '',
              // backgroundColor: level < 2 ? menu.bgcolor + ".light" : "",
            },
          },
          '&:hover::before': {
            backgroundColor: `${menu.bgcolor}.light`,
          },

          '&:before': {
            backgroundColor: open && level < 2 ? `${menu.bgcolor}.light` : '',
          },

          color:
            open && level < 2
              ? `${menu.bgcolor}.main`
              : `inherit` && level > 1 && open
                ? `${menu.bgcolor}.main`
                : `inherit`,
          '.MuiListItemIcon-root': {
            color: open && level < 2 ? `${menu.bgcolor}.main` : '',
          },
          // "&:before": {
          //   backgroundColor: menu.bgcolor + ".light",
          // },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: '36px',
            p: '3px 0',
            color: 'inherit',
          }}
        >
          {level < 2 ? (
            <Icon icon={`solar:${menu.icon}`} width="24" height="24" />
          ) : (
            <Box
              sx={{
                width: '6px',
                height: '6px',
                opacity:
                  level > 1 && pathWithoutLastPart === menu.href ? 1 : '0.3',
                backgroundColor:
                  level > 1 && pathWithoutLastPart === menu.href
                    ? `${theme.palette.primary.main}!important`
                    : theme.palette.text.secondary,
              }}
            />
          )}
        </ListItemIcon>
        <ListItemText color="inherit">
          {hideMenu ? '' : <>{t(`${menu.title}`)}</>}
        </ListItemText>
        {!open ? (
          <IconChevronDown size="1rem" />
        ) : (
          <IconChevronUp size="1rem" />
        )}
      </ListItemStyled>
      <Collapse
        in={open}
        timeout="auto"
        sx={{
          '.MuiListItemButton-root:before': {
            display: 'none',
          },
          '.MuiListItemIcon-root': {
            backgroundColor: 'unset !important',
          },
        }}
      >
        {submenus}
      </Collapse>
    </>
  );
}
