import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountrySelector from './components/CountrySelector';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CountrySelector />
    </main>
  );
}