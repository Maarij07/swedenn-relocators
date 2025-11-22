'use client';

import { usePathname } from 'next/navigation';
import ConnectingTalentSection from './components/ConnectingTalentSection';
import PayrollEORSection from './components/PayrollEORSection';
import BusinessMarketplaceSection from './components/BusinessMarketplaceSection';
import RelocationSuccessSection from './components/RelocationSuccessSection';
import BlogsSection from './components/BlogsSection';

export default function HomeShellExtras() {
  const pathname = usePathname();

  // Hide these sections on the services page and blogs page
  // so they only show their own content + footer.
  if (pathname === '/services' || pathname?.startsWith('/services/') || pathname === '/blogs' || pathname?.startsWith('/blogs/')) {
    return null;
  }

  return (
    <>
      <ConnectingTalentSection />
      <PayrollEORSection />
      <BusinessMarketplaceSection />
      <RelocationSuccessSection />
      <BlogsSection />
    </>
  );
}
