'use client';

import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {
  IconArticle,
  IconBell,
  IconLock,
  IconUserCircle,
} from '@tabler/icons-react';
import * as React from 'react';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import AccountTab from '@/app/(DashboardLayout)/components/pages/account-setting/AccountTab';
import BillsTab from '@/app/(DashboardLayout)/components/pages/account-setting/BillsTab';
import NotificationTab from '@/app/(DashboardLayout)/components/pages/account-setting/NotificationTab';
import SecurityTab from '@/app/(DashboardLayout)/components/pages/account-setting/SecurityTab';
import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Account Setting',
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AccountSetting = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PageContainer
      title="Account Setting"
      description="this is Account Setting"
    >
      {/* breadcrumb */}
      <Breadcrumb title="Account Setting" items={BCrumb} />
      {/* end breadcrumb */}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BlankCard>
            <Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
              <Tabs
                value={value}
                onChange={handleChange}
                scrollButtons="auto"
                aria-label="basic tabs example"
              >
                <Tab
                  iconPosition="start"
                  icon={<IconUserCircle size="22" />}
                  label="Account"
                  {...a11yProps(0)}
                />

                <Tab
                  iconPosition="start"
                  icon={<IconBell size="22" />}
                  label="Notifications"
                  {...a11yProps(1)}
                />
                <Tab
                  iconPosition="start"
                  icon={<IconArticle size="22" />}
                  label="Bills"
                  {...a11yProps(2)}
                />
                <Tab
                  iconPosition="start"
                  icon={<IconLock size="22" />}
                  label="Security"
                  {...a11yProps(3)}
                />
              </Tabs>
            </Box>
            <Divider />
            <CardContent>
              <TabPanel value={value} index={0}>
                <AccountTab />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <NotificationTab />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <BillsTab />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <SecurityTab />
              </TabPanel>
            </CardContent>
          </BlankCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AccountSetting;
