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
      className="dark:text-s2pro-primary light:text-gray-800 flex justify-center rounded-md text-lg font-normal no-underline focus:outline-none dark:focus:bg-gray-800"
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
