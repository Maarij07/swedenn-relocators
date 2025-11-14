'use client';

import Hero from './Hero';
import CountrySelector from './CountrySelector';
import Services from './Services';
import Offers from './Offers';
import { HousingSolutionShared } from './HousingSolutionShared';
import { MovingFlagsCarousel } from './MovingFlagsCarousel';
import { GlobalVisaPlatform } from './GlobalVisaPlatform';

export default function Home() {
  return (
    <>
      <Hero />
      <CountrySelector />
      <Services />
      <Offers />
      <HousingSolutionShared />
      <MovingFlagsCarousel />
      <GlobalVisaPlatform />
    </>
  );
}
