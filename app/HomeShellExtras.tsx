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
  const isNewInSweden = pathname?.includes('/new-in-sweden');
  const isFaqs = pathname?.includes('/faqs');
  const isCareer = pathname?.includes('/career');
  const isPrivacyPolicy = pathname?.includes('/privacy-policy');
  const isTermsAndConditions = pathname?.includes('/terms-and-conditions');

  if (isServices || isBlogs || isAbout || isContact || isNewInSweden || isFaqs || isCareer || isPrivacyPolicy || isTermsAndConditions) {
    return null;
  }

  return (
    <>
      <div className="home-snap-section"><ConnectingTalentSection /></div>
      <div className="home-snap-section"><PayrollEORSection /></div>
      <div className="home-snap-section"><BusinessMarketplaceSection /></div>
      <div className="home-snap-section"><RelocationSuccessSection /></div>
      <div className="home-snap-section"><DigitalPlatformsSection /></div>
      <div className="home-snap-section"><BlogsSection /></div>
    </>
  );
}
