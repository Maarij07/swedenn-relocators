'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-[#dbe9ff]">
      
      {/* Top spacing = navbar height + extra breathing */}
      <div className="pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 3xl:pb-36 4k:pb-40">
        {/* EXACT same container as navbar and CountrySelector */}
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 3xl:gap-24 4k:gap-32 items-center">
            
            {/* LEFT SIDE */}
            <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-9 3xl:space-y-12 4k:space-y-16">
              
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] 2xl:text-[3.75rem] 3xl:text-[4.5rem] 4k:text-[7rem] leading-[1.15] font-bold">
                <span className="block text-gray-900">Relocate To Sweden</span>
                <span className="block text-blue-600">With an Expert Advise</span>
              </h1>

              <p className="text-[14px] sm:text-[15px] md:text-base lg:text-[17px] xl:text-[18px] 3xl:text-[20px] 4k:text-[2rem] text-gray-600 leading-[1.7] max-w-xl 3xl:max-w-2xl 4k:max-w-5xl">
                We provide comprehensive relocation and immigration support for individuals,
                employees, and companies, covering residence permits, housing, school placements,
                and integration — all seamlessly managed through our secure web and mobile platform
                across Sweden, Denmark, and the wider Nordic region.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 3xl:gap-6 4k:gap-8 pt-2">
                {/* BOTH buttons BLACK with white text */}
                <button className="px-7 sm:px-8 md:px-9 3xl:px-14 4k:px-22 py-3 sm:py-3.5 md:py-4 3xl:py-6 4k:py-9 text-[14px] sm:text-[15px] md:text-base 3xl:text-lg 4k:text-3xl font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md">
                  Our Services
                </button>
                <button className="px-7 sm:px-8 md:px-9 3xl:px-14 4k:px-22 py-3 sm:py-3.5 md:py-4 3xl:py-6 4k:py-9 text-[14px] sm:text-[15px] md:text-base 3xl:text-lg 4k:text-3xl font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - SUPER SIMPLE VIDEO */}
            <div className="relative w-full max-w-2xl 3xl:max-w-3xl 4k:max-w-6xl mx-auto lg:mx-0 lg:ml-auto">
              
              {/* Simple video with rounded corners - NO frame, NO badge, NOTHING */}
              <div className="relative rounded-2xl sm:rounded-3xl 3xl:rounded-[2.5rem] 4k:rounded-[4rem] overflow-hidden shadow-2xl">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://share.synthesia.io/embeds/videos/7ffc5155-81ff-4153-b235-6fa60d54a4ef"
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{ border: 'none' }}
                    title="Immigration & Relocation"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* WAVE */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px] sm:h-[120px] lg:h-[140px] 3xl:h-[180px] 4k:h-[240px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <path
            d="M0,50 C360,80 720,80 1080,50 C1260,35 1350,20 1440,20 L1440,100 L0,100 Z"
            fill="white"
            opacity="0.9"
          />
          <path
            d="M0,60 C360,90 720,90 1080,60 C1260,45 1350,30 1440,30 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>

    </section>
  );
}