'use client';

export default function GalleryPage() {
  // Placeholder items — replace with API data later
  const placeholders = Array.from({ length: 12 });

  return (
    <div className="min-h-screen bg-[#F8F9FE] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">

        {/* Hero */}
        <section className="mb-10 sm:mb-14 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Gallery
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            A look into our work, offices, and the journeys we help make possible across Europe.
          </p>
        </section>

        {/* Filter tabs — ready for API categories */}
        <div className="flex flex-wrap gap-3 mb-10 sm:mb-12">
          {['All', 'Offices', 'Events', 'Relocations', 'Team'].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm lg:text-base font-semibold border transition-all duration-200 ${
                tab === 'All'
                  ? 'bg-black text-white border-black'
                  : 'bg-[#F8F9FE] text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {placeholders.map((_, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              {/* Image placeholder */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#EBF4FF] to-[#F0F5FF] flex flex-col items-center justify-center gap-2">
                <svg className="w-10 h-10 text-[#247FE1]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs text-[#247FE1]/50 font-medium">Image coming soon</span>
              </div>

              {/* Caption area */}
              <div className="px-4 py-4">
                <div className="h-3 bg-gray-100 rounded-full w-3/4 mb-2" />
                <div className="h-3 bg-gray-100 rounded-full w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty state hint */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm lg:text-base text-gray-400">
            Images will be loaded from our API. Check back soon.
          </p>
        </div>

      </div>
    </div>
  );
}
