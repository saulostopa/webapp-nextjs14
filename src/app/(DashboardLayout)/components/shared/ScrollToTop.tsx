import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useEffect } from 'react';

export default function ScrollToTop({
  children,
}: {
  children: ReactElement | null;
}) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return children || null;
}
