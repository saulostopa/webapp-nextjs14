'use client';

import Link from 'next/link';

type Props = {
  title: string;
};

export default function FooterLink({ title }: Props) {
  return (
    <Link
      href="/"
      className="light:text-gray-500 w-full rounded-md px-4 py-2 focus:outline-none dark:text-gray-300 "
      onClick={(e) => {
        e.preventDefault();
        const linkItem = document.getElementById(title);
        if (linkItem)
          window.scrollTo({
            // Hardcoded considering header height
            top: linkItem.offsetTop - 100,
            behavior: 'smooth',
          });
      }}
    >
      {title}
    </Link>
  );
}
