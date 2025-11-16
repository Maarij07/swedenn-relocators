
import dynamic from 'next/dynamic';
import Hero from './Hero';
import CountrySelector from './CountrySelector';
import Services from './Services';
import Offers from './Offers';

const HousingCarousel = dynamic(() => import('./HousingCarousel').then(m => m.HousingCarousel));
const MovingFlagsCarousel = dynamic(() => import('./MovingFlagsCarousel').then(m => m.MovingFlagsCarousel));
const GlobalVisaPlatform = dynamic(() => import('./GlobalVisaPlatform').then(m => m.GlobalVisaPlatform));
const VisaApplicationJourney = dynamic(() => import('./VisaApplicationJourney'), { ssr: false });
const CitizenshipResidencySection = dynamic(() => import('./CitizenshipResidencySection'));

export default function Home() {
  return (
    <>
      <Hero />
      <CountrySelector />
      <Services />
      <Offers />
      <HousingCarousel />
      <MovingFlagsCarousel />
      <GlobalVisaPlatform />
      <VisaApplicationJourney />
      <CitizenshipResidencySection />
    </>
  );
}
