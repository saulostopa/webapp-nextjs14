import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link className="block overflow-hidden" href="/">
      <Image
        src="/images/landingpage/logo.svg"
        alt="logo"
        width="48"
        height="48"
        className="object-cover xl:size-20"
        priority
      />
    </Link>
  );
}
