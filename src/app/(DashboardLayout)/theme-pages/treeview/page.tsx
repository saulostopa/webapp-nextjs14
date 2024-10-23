'use client';

import Collapse from '@mui/material/Collapse';
import { alpha, styled } from '@mui/material/styles';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { TransitionProps } from '@mui/material/transitions';
import type { TreeItemProps } from '@mui/x-tree-view/TreeItem';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import { TreeView } from '@mui/x-tree-view/TreeView';
import {
  IconFolder,
  IconFolderMinus,
  IconFolderPlus,
} from '@tabler/icons-react';
import { animated, useSpring } from 'react-spring';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ChildCard from '@/app/(DashboardLayout)/components/shared/ChildCard';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Treeview',
  },
];

function MinusSquare(props: SvgIconProps) {
  return <IconFolderMinus style={{ width: 22, height: 22 }} {...props} />;
}

function PlusSquare(props: SvgIconProps) {
  return <IconFolderPlus style={{ width: 22, height: 22 }} {...props} />;
}

function CloseSquare(props: SvgIconProps) {
  return <IconFolder style={{ width: 22, height: 22 }} {...props} />;
}

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(20px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const StyledTreeItem = styled((props: TreeItemProps) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

const Treeview = () => {
  return (
    <PageContainer title="Treeview" description="this is Treeview">
      {/* breadcrumb */}
      <Breadcrumb title="Treeview" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Treeview">
        <ChildCard>
          <TreeView
            aria-label="customized"
            defaultExpanded={['1']}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            defaultEndIcon={<CloseSquare />}
            sx={{ height: 200, flexGrow: 1, overflowY: 'auto' }}
          >
            <StyledTreeItem nodeId="1" label="Main">
              <StyledTreeItem nodeId="2" label="Hello" />
              <StyledTreeItem nodeId="3" label="Subtree with children">
                <StyledTreeItem nodeId="6" label="Hello" />
                <StyledTreeItem nodeId="7" label="Sub-subtree with children">
                  <StyledTreeItem nodeId="9" label="Child 1" />
                  <StyledTreeItem nodeId="10" label="Child 2" />
                  <StyledTreeItem nodeId="11" label="Child 3" />
                </StyledTreeItem>
                <StyledTreeItem nodeId="8" label="Hello" />
              </StyledTreeItem>
              <StyledTreeItem nodeId="4" label="World" />
              <StyledTreeItem nodeId="5" label="Something something" />
            </StyledTreeItem>
          </TreeView>
        </ChildCard>
      </ParentCard>
    </PageContainer>
  );
};

export default Treeview;