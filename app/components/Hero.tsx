'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-[#dbe9ff]">
      
      {/* Top spacing = navbar height + extra breathing */}
      <div className="pt-[140px] sm:pt-[160px] lg:pt-[176px] xl:pt-[192px] 4k:pt-[200px] pb-32 sm:pb-36 lg:pb-40 xl:pb-44 3xl:pb-48 4k:pb-52">
        {/* EXACT same as navbar - DO NOT CHANGE THIS */}
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-32 4k:gap-48 items-center">
            
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
                <button className="px-7 sm:px-8 md:px-9 3xl:px-14 4k:px-22 py-3 sm:py-3.5 md:py-4 3xl:py-6 4k:py-9 text-[14px] sm:text-[15px] md:text-base 3xl:text-lg 4k:text-3xl font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300">
                  Our Services
                </button>
                <button className="px-7 sm:px-8 md:px-9 3xl:px-14 4k:px-22 py-3 sm:py-3.5 md:py-4 3xl:py-6 4k:py-9 text-[14px] sm:text-[15px] md:text-base 3xl:text-lg 4k:text-3xl font-medium text-black bg-white border-2 4k:border-[5px] border-black rounded-lg hover:bg-gray-50 transition-all duration-300">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - VIDEO */}
            <div className="relative w-full max-w-2xl 3xl:max-w-3xl 4k:max-w-6xl mx-auto lg:mx-0">
              
              {/* Blue border container */}
              <div className="relative rounded-2xl sm:rounded-3xl 3xl:rounded-[2.5rem] 4k:rounded-[4rem] border-[4px] sm:border-[5px] 3xl:border-[6px] 4k:border-[8px] border-blue-600 overflow-hidden shadow-2xl bg-blue-600 p-3 sm:p-4 3xl:p-5 4k:p-8">
                
                {/* Inner video container with its own border */}
                <div className="relative rounded-xl sm:rounded-2xl 3xl:rounded-[2rem] 4k:rounded-[3rem] overflow-hidden">
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
              
              {/* SINGLE Bottom Badge - OUTSIDE the blue border */}
              <div className="absolute -bottom-4 sm:-bottom-5 3xl:-bottom-6 4k:-bottom-10 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-black text-white text-[10px] sm:text-[11px] md:text-xs 3xl:text-base 4k:text-2xl font-semibold px-5 sm:px-6 md:px-8 3xl:px-12 4k:px-18 py-2 sm:py-2.5 md:py-3 3xl:py-4 4k:py-7 rounded-full shadow-xl whitespace-nowrap uppercase tracking-wider">
                  Immigration & Relocation Assistance
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