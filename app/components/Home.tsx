'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Hero from './Hero';
import CountrySelector from './CountrySelector';
import Services from './Services';
import Offers from './Offers';
import RelocationSuccessSection from './RelocationSuccessSection';

const HousingCarousel = dynamic(() => import('./HousingCarousel').then(m => m.HousingCarousel));
const GlobalVisaPlatform = dynamic(() => import('./GlobalVisaPlatform').then(m => m.GlobalVisaPlatform));
const VisaApplicationJourney = dynamic(() => import('./VisaApplicationJourney').then(m => m.default), { ssr: false });
const CitizenshipResidencySection = dynamic(() => import('./CitizenshipResidencySection'));
const VerticalFeatureCarousel = dynamic(() => import('./VerticalFeatureCarousel').then(m => m.default));

export default function Home() {
  useEffect(() => {
    // Cleanup only — the class is added synchronously via inline script to avoid layout shift
    return () => {
      document.body.classList.remove('home-snap-page');
    };
  }, []);

  return (
    <>
      {/* Inline script runs synchronously before paint, preventing layout shift from
          the home-snap-section min-height being applied after hydration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.body.classList.add('home-snap-page');`,
        }}
      />
      <div className="home-snap-section"><Hero /></div>
      <div className="home-snap-section"><CountrySelector /></div>
      <div className="home-snap-section"><Services /></div>
      <div className="home-snap-section"><Offers /></div>
      <div className="home-snap-section"><HousingCarousel /></div>
      <div className="home-snap-section"><GlobalVisaPlatform /></div>
      <div className="home-snap-section"><VisaApplicationJourney /></div>
      <div className="home-snap-section" ><CitizenshipResidencySection /></div>
      <div className="home-snap-section"><VerticalFeatureCarousel /></div>
    </>
  );
}