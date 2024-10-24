'use client';

import Link from 'next/link';

type Props = {
  title: string;
};

export default function FooterLink({ title }: Props) {
  return (
    <Link
      href="/"
      className="hover:text-s2pro-primary0 focus:text-s2pro-primary0 w-full rounded-md px-4 py-2 text-gray-500 focus:bg-slate-200 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
      onClick={(e) => {
        e.preventDefault();
        const linkItem = document.getElementById(title);
        if (linkItem)
          linkItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState('linkItem', 'linkItem', `#${title}`);
      }}
    >
      {title}
    </Link>
  );
}
