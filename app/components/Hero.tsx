'use client';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 3xl:pt-40 4k:pt-60 pb-36 sm:pb-40 lg:pb-44 3xl:pb-52 4k:pb-72 overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-[#e7f1ff]">
      {/* --- CONTENT --- */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[2000px] 4k:max-w-[3200px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 3xl:px-16 4k:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 3xl:gap-28 4k:gap-40 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8 3xl:space-y-10 4k:space-y-16 max-w-2xl 3xl:max-w-3xl 4k:max-w-6xl">
            <h1 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.25rem] xl:text-[3.5rem] 2xl:text-[3.75rem] 3xl:text-[4.5rem] 4k:text-[7rem] leading-[1.15]">
              <span className="block text-gray-900">Relocate To Sweden</span>
              <span className="block text-blue-600">With an Expert Advise</span>
            </h1>

            <p className="text-sm sm:text-[15px] lg:text-base xl:text-[16.5px] 3xl:text-[19px] 4k:text-[2rem] text-gray-600 leading-[1.65] max-w-xl 3xl:max-w-2xl 4k:max-w-5xl">
              We provide comprehensive relocation and immigration support for individuals,
              employees, and companies, covering residence permits, housing, school placements,
              and integration — all seamlessly managed through our secure web and mobile platform
              across Sweden, Denmark, and the wider Nordic region.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 3xl:gap-5 4k:gap-8 pt-1">
              <button className="px-7 sm:px-8 3xl:px-12 4k:px-20 py-3 sm:py-3.5 3xl:py-5 4k:py-8 text-sm sm:text-[15px] 3xl:text-lg 4k:text-3xl text-white bg-black rounded-xl 3xl:rounded-2xl 4k:rounded-3xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Our Services
              </button>
              <button className="px-7 sm:px-8 3xl:px-12 4k:px-20 py-3 sm:py-3.5 3xl:py-5 4k:py-8 text-sm sm:text-[15px] 3xl:text-lg 4k:text-3xl text-black bg-white border-2 4k:border-4 border-black rounded-xl 3xl:rounded-2xl 4k:rounded-3xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - VIDEO */}
          <div className="relative w-full max-w-2xl 3xl:max-w-3xl 4k:max-w-6xl mx-auto lg:mx-0">
            {/* Decorative background blur circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 3xl:w-60 3xl:h-60 4k:w-96 4k:h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 3xl:w-60 3xl:h-60 4k:w-96 4k:h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
            
            {/* Main video frame */}
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl sm:rounded-[2rem] 3xl:rounded-[2.75rem] 4k:rounded-[4.5rem] blur-xl opacity-50"></div>
              
              {/* Frame container */}
              <div className="relative rounded-3xl sm:rounded-[2rem] 3xl:rounded-[2.75rem] 4k:rounded-[4.5rem] p-1.5 sm:p-2 3xl:p-3 4k:p-5 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-2xl">
                {/* Inner white border */}
                <div className="rounded-[1.3rem] sm:rounded-[1.75rem] 3xl:rounded-[2.4rem] 4k:rounded-[4rem] p-2 sm:p-3 3xl:p-4 4k:p-7 bg-white">
                  {/* Video container with subtle inner shadow */}
                  <div className="relative rounded-2xl sm:rounded-[1.5rem] 3xl:rounded-[2rem] 4k:rounded-[3.5rem] overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-50 shadow-inner">
                    <iframe
                      src="https://share.synthesia.io/embeds/videos/7ffc5155-81ff-4153-b235-6fa60d54a4ef"
                      className="w-full h-full relative z-10"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      style={{ border: 'none' }}
                      title="Immigration & Relocation"
                    />
                  </div>
                </div>
              </div>
              
              {/* Premium badge with better styling */}
              <div className="absolute -top-4 sm:-top-5 3xl:-top-6 4k:-top-10 left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative">
                  {/* Badge glow */}
                  <div className="absolute inset-0 bg-blue-500 blur-lg opacity-60 rounded-full"></div>
                  {/* Badge */}
                  <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[9px] sm:text-[10px] 3xl:text-xs 4k:text-xl px-5 sm:px-7 3xl:px-10 4k:px-16 py-2 sm:py-2.5 3xl:py-3.5 4k:py-6 rounded-full shadow-xl border-2 border-white/20 backdrop-blur-sm whitespace-nowrap tracking-wider uppercase">
                    <span className="relative z-10">Immigration & Relocation</span>
                  </div>
                </div>
              </div>
              
              {/* Corner accent - top right */}
              <div className="absolute -top-2 -right-2 3xl:-top-3 3xl:-right-3 4k:-top-5 4k:-right-5 w-8 h-8 3xl:w-12 3xl:h-12 4k:w-20 4k:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg opacity-80"></div>
              
              {/* Corner accent - bottom left */}
              <div className="absolute -bottom-2 -left-2 3xl:-bottom-3 3xl:-left-3 4k:-bottom-5 4k:-left-5 w-6 h-6 3xl:w-10 3xl:h-10 4k:w-16 4k:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg opacity-80"></div>
              
              {/* Floating mini badge - bottom right */}
              <div className="absolute -bottom-3 -right-3 3xl:-bottom-4 3xl:-right-4 4k:-bottom-8 4k:-right-8 bg-white rounded-full p-2 3xl:p-3 4k:p-5 shadow-xl border-2 3xl:border-3 4k:border-4 border-blue-100">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-2 3xl:p-3 4k:p-5">
                  <svg className="w-4 h-4 3xl:w-6 3xl:h-6 4k:w-10 4k:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WAVE SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(120%+1.3px)] h-[60px] sm:h-[80px] lg:h-[100px] 3xl:h-[130px] 4k:h-[200px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44C211.14,71,105.57,64,0,46.29V120H1200V16.48c-105.14-12.63-209.71-8.38-321.39,16.52C729.63,59.75,625.06,87,518.61,89.51,412.17,92,415,39.14,321.39,56.44Z"
            fill="#e7f1ff"
          ></path>
        </svg>
      </div>
    </section>
  );
}