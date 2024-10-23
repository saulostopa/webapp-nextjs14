'use client';

import BlogListing from '@/app/(DashboardLayout)/components/apps/blog/BlogListing';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

const Blog = () => {
  return (
    <PageContainer title="Blog" description="this is Blog">
      {/* ------------------------------------------- */}
      {/* Blog Listing */}
      {/* ------------------------------------------- */}
      <BlogListing />
    </PageContainer>
  );
};

export default Blog;
