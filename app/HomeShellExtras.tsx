'use client';

import { usePathname } from 'next/navigation';
import ConnectingTalentSection from './components/ConnectingTalentSection';
import PayrollEORSection from './components/PayrollEORSection';
import BusinessMarketplaceSection from './components/BusinessMarketplaceSection';
import RelocationSuccessSection from './components/RelocationSuccessSection';
import DigitalPlatformsSection from './components/DigitalPlatformsSection';
import BlogsSection from './components/BlogsSection';

export default function HomeShellExtras() {
  const pathname = usePathname();

  // Hide these sections on the services page and blogs page
  // so they only show their own content + footer.
  // Check if pathname contains the sections, handling locale prefixes
  const isServices = pathname?.includes('/services');
  const isBlogs = pathname?.includes('/blogs');
  const isAbout = pathname?.includes('/about');
  const isContact = pathname?.includes('/contact');

  if (isServices || isBlogs || isAbout || isContact) {
    return null;
  }

  return (
    <>
      <ConnectingTalentSection />
      <PayrollEORSection />
      <BusinessMarketplaceSection />
      <RelocationSuccessSection />
      <DigitalPlatformsSection />
      <BlogsSection />
    </>
  );
}
