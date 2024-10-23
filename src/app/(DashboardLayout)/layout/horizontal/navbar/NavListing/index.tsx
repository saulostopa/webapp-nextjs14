import Box from '@mui/material/Box';
import List from '@mui/material/List';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { usePathname } from 'next/navigation';

import { useSelector } from '@/store/hooks';
import type { AppState } from '@/store/store';

import Menudata from '../Menudata';
import NavCollapse from '../NavCollapse';
import NavItem from '../NavItem';

const NavListing = () => {
  const pathname = usePathname();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp
    ? customizer.isCollapse && !customizer.isSidebarHover
    : '';

  return (
    <Box>
      <List sx={{ p: 0, display: 'flex', gap: '3px', zIndex: '100' }}>
        {Menudata.map((item) => {
          if (item.children) {
            return (
              <NavCollapse
                menu={item}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                onClick={undefined}
              />
            );

            // {/********If Sub No Menu**********/}
          }
          return (
            <NavItem
              item={item}
              key={item.id}
              pathDirect={pathDirect}
              hideMenu={hideMenu}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          );
        })}
      </List>
    </Box>
  );
};
export default NavListing;
