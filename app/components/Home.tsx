'use client';

import dynamic from 'next/dynamic';
import Hero from './Hero';
import CountrySelector from './CountrySelector';
import Services from './Services';
import Offers from './Offers';

const HousingCarousel = dynamic(() => import('./HousingCarousel').then(m => m.HousingCarousel));
const GlobalVisaPlatform = dynamic(() => import('./GlobalVisaPlatform').then(m => m.GlobalVisaPlatform));
const VisaApplicationJourney = dynamic(() => import('./VisaApplicationJourney').then(m => m.default), { ssr: false });
const CitizenshipResidencySection = dynamic(() => import('./CitizenshipResidencySection'));
const VerticalFeatureCarousel = dynamic(() => import('./VerticalFeatureCarousel').then(m => m.default));

export default function Home() {
  return (
    <>
      <Hero />
      <CountrySelector />
      <Services />
      <Offers />
      <HousingCarousel />
      <GlobalVisaPlatform />
      <VisaApplicationJourney />
      <CitizenshipResidencySection />
      <VerticalFeatureCarousel />
    </>
  );
}