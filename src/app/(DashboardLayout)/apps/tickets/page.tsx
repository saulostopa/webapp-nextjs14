'use client';

import TicketFilter from '@/app/(DashboardLayout)/components/apps/tickets/TicketFilter';
import TicketListing from '@/app/(DashboardLayout)/components/apps/tickets/TicketListing';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ChildCard from '@/app/(DashboardLayout)/components/shared/ChildCard';

const TicketList = () => {
  return (
    <PageContainer title="Ticket App" description="this is Ticket App">
      <ChildCard>
        <TicketFilter />
        <TicketListing />
      </ChildCard>
    </PageContainer>
  );
};

export default TicketList;
