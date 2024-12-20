import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import * as dropdownData from './data';

const QuickLinks = () => {
  return (
    <>
      <Typography variant="h5">Quick Links</Typography>
      <Stack spacing={2} mt={2}>
        {dropdownData.pageLinks.map((pagelink) => (
          <Link
            href={pagelink.href}
            key={`${pagelink.title}`}
            className="hover-text-primary"
          >
            <Typography
              variant="subtitle2"
              color="textPrimary"
              className="text-hover"
              fontWeight={600}
            >
              {pagelink.title}
            </Typography>
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default QuickLinks;
