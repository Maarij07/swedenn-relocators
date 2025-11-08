import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Next Section */}
      <section className="py-14 sm:py-16 lg:py-20 3xl:py-28 4k:py-40 bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[2000px] 4k:max-w-[3200px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 3xl:px-16 4k:px-32 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[2.25rem] 3xl:text-[2.75rem] 4k:text-[4.5rem] 5k:text-[5.5rem] text-gray-900 mb-3 3xl:mb-5 4k:mb-8 font-bold">
            Select Your Relocation Route Today
          </h2>
          <p className="text-[13px] sm:text-sm lg:text-base xl:text-[1.05rem] 3xl:text-[1.25rem] 4k:text-[2rem] 5k:text-[2.5rem] text-gray-600 max-w-2xl 3xl:max-w-3xl 4k:max-w-5xl mx-auto leading-relaxed">
            Choose your preferred immigration pathway and start your journey to Sweden
          </p>
        </div>
      </section>
    </main>
  );
}