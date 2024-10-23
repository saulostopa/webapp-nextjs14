import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';

import { useSelector } from '@/store/hooks';
import type { AppState } from '@/store/store';

export default function Logo() {
  const customizer = useSelector((state: AppState) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? '40px' : '180px',
    overflow: 'hidden',
    display: 'block',
  }));

  if (customizer.activeDir === 'ltr') {
    return (
      <LinkStyled href="/">
        {customizer.activeMode === 'dark' ? (
          <Image
            src="/images/logos/logo-light.svg"
            alt="logo"
            height={customizer.TopbarHeight}
            width={174}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            className="size-auto object-cover"
            priority
          />
        ) : (
          <Image
            src="/images/logos/logo-dark.svg"
            alt="logo"
            height={customizer.TopbarHeight}
            width={174}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            className="size-auto object-cover"
            priority
          />
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled href="/">
      {customizer.activeMode === 'dark' ? (
        <Image
          src="/images/logos/logo-light-rtl.svg"
          alt="logo"
          height={customizer.TopbarHeight}
          width={174}
          priority
        />
      ) : (
        <Image
          src="/images/logos/logo-dark-rtl.svg"
          alt="logo"
          height={customizer.TopbarHeight}
          width={174}
          priority
        />
      )}
    </LinkStyled>
  );
}
