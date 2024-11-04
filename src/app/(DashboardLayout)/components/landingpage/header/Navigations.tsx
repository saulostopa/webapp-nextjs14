'use client';

import Link from 'next/link';
import { type ComponentProps } from 'react';

export default function Navigations({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  return (
    <Link
      href="/Home"
      className="flex justify-center rounded-md text-lg font-normal no-underline focus:outline-none"
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        const linkItem = document.getElementById(href as string);
        if (linkItem)
          window.scrollTo({
            // Hardcoded considering header height
            top: linkItem.offsetTop - 100,
            behavior: 'smooth',
          });
      }}
    />
  );
}
