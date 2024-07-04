'use client';

import Grid from '@mui/material/Grid';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import CheckboxesAutocomplete from '@/app/(DashboardLayout)/components/forms/form-elements/autoComplete/CheckboxesAutocomplete';
import ComboBoxAutocomplete from '@/app/(DashboardLayout)/components/forms/form-elements/autoComplete/ComboBoxAutocomplete';
import ControlledStateAutocomplete from '@/app/(DashboardLayout)/components/forms/form-elements/autoComplete/ControlledStateAutocomplete';
import CountrySelectAutocomplete from '@/app/(DashboardLayout)/components/forms/form-elements/autoComplete/CountrySelectAutocomplete';
import FreeSoloAutocomplete from '@/app/(DashboardLayout)/components/forms/form-elements/autoComplete/FreeSoloAutocomplete';
import MultipleValuesAutocomplete from '@/app/(DashboardLayout)/components/forms/form-elements/autoComplete/MultipleValuesAutocomplete';
import SizesAutocomplete from '@/app/(DashboardLayout)/components/forms/form-elements/autoComplete/SizesAutocomplete';
import ChildCard from '@/app/(DashboardLayout)/components/shared/ChildCard';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'AutoComplete',
  },
];

const MuiAutoComplete = () => (
  <PageContainer title="Autocomplete" description="this is Autocomplete">
    {/* breadcrumb */}
    <Breadcrumb title="AutoComplete" items={BCrumb} />
    {/* end breadcrumb */}

    <ParentCard title="Autocomplete">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Combo Box">
            <ComboBoxAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Country Select">
            <CountrySelectAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Controlled State">
            <ControlledStateAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Free Solo">
            <FreeSoloAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Multiple Values">
            <MultipleValuesAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Checkboxes">
            <CheckboxesAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Sizes">
            <SizesAutocomplete />
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiAutoComplete;
