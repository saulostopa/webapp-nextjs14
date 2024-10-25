'use client';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { type ComponentProps } from 'react';

export default function Navigations({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '15px',
    color: theme.palette.text.secondary,
    fontWeight: 500,
  }));

  return (
    <StyledButton color="inherit" variant="text">
      <li className="mr-3 list-none" key={href as string}>
        <Link
          aria-current={isActive ? 'page' : undefined}
          className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline focus:bg-indigo-100 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800"
          href="/Home"
          {...rest}
          onClick={(e) => {
            e.preventDefault();
            const linkItem = document.getElementById(href as string);
            if (linkItem)
              linkItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />
      </li>
    </StyledButton>
  );
}
