      'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFAQ = pathname === '/faq';

  return (
    <>
      {!isFAQ && <Navbar />}
      <main className="flex-grow">{children}</main>
    </>
  );
}

