'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const CARDS_EN = [
  {
    id: 1,
    icon: '/b1.svg',
    bgColor: '#0052cc',
    title: 'Simplify Recruitment',
    subtitle: 'For Employers Looking for Global Talent',
    statsIcon: '/peoples.svg',
    statsText: '223 candidates',
    features: [
      [
        { text: 'Remote/Physical Jobs', icon: '/progress.svg' },
        { text: 'Optimum Salary', icon: '/money.svg' }
      ],
      [
        { text: 'Full/Part Timings', icon: '/watch.svg' },
        { text: 'Hierarchical Positions', icon: '/people.svg' }
      ],
    ],
    buttonText: 'Announce Job',
  },
  {
    id: 2,
    icon: '/b2.svg',
    bgColor: '#1e3a8a',
    title: 'Profile-Job Seeker',
    subtitle: 'Posted date: 28 Jul 2025 7:00 AM',
    statsIcon: '/trendup.svg',
    statsText: '2,203 companies',
    features: [
      [
        { text: 'Desired Location', icon: '/place.svg' },
        { text: 'Best Salary Offerings', icon: '/money.svg' }
      ],
      [
        { text: 'Flexible Availability', icon: '/watch.svg' },
        { text: 'Future Career Goals', icon: '/people.svg' }
      ],
    ],
    buttonText: 'Create C.V',
  },
];

const CARDS_SV = [
  {
    id: 1,
    icon: '/b1.svg',
    bgColor: '#0052cc',
    title: 'Förenkla rekryteringen',
    subtitle: 'För arbetsgivare som söker internationella talanger',
    statsIcon: '/peoples.svg',
    statsText: '223 kandidater',
    features: [
      [
        { text: 'Distans- och platsbaserade jobb', icon: '/progress.svg' },
        { text: 'Optimala lönelösningar', icon: '/money.svg' }
      ],
      [
        { text: 'Heltid / deltid', icon: '/watch.svg' },
        { text: 'Roller på flera nivåer', icon: '/people.svg' }
      ],
    ],
    buttonText: 'Publicera jobb',
  },
  {
    id: 2,
    icon: '/b2.svg',
    bgColor: '#1e3a8a',
    title: 'Profil – arbetssökande',
    subtitle: 'Publicerad: 28 juli 2025 kl. 07:00',
    statsIcon: '/trendup.svg',
    statsText: '2 203 företag',
    features: [
      [
        { text: 'Önskad plats', icon: '/place.svg' },
        { text: 'Bästa löneerbjudanden', icon: '/money.svg' }
      ],
      [
        { text: 'Flexibel tillgänglighet', icon: '/watch.svg' },
        { text: 'Framtida karriärmål', icon: '/people.svg' }
      ],
    ],
    buttonText: 'Skapa CV',
  },
];

export default function ConnectingTalentSection() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  // Select the appropriate cards based on language
  const cards = isSv ? CARDS_SV : CARDS_EN;

  // Translations for headings
  const texts = {
    subtitle: isSv
      ? 'Från det att du anländer tills du reser vidare'
      : 'From the moment you arrive to the time you depart',
    heading: isSv
      ? 'Kopplar samman företag med rätt talanger'
      : 'Connecting Companies with the Right Talent',
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-28">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] font-extrabold leading-[1.2] text-[#0f172a] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
            {texts.heading}
          </h2>
          <p className="mt-2 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-bold leading-[1.35] text-[#2563eb] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
            {texts.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 4k:gap-14">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="group relative rounded-3xl bg-white shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />
              
              <div className="relative p-6 sm:p-7 lg:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg overflow-hidden ring-4 ring-white group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      <Image src={card.icon} alt={card.title} fill className="object-cover p-3" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-[1.4rem] 4k:text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className={`${card.id === 1 ? 'text-sm sm:text-base 4k:text-lg' : 'text-xs sm:text-sm'} text-slate-500 mt-1`}>
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all duration-300">
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
                      <circle cx="2" cy="2" r="2"/>
                      <circle cx="2" cy="8" r="2"/>
                      <circle cx="2" cy="14" r="2"/>
                    </svg>
                  </button>
                </div>

                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl mb-6 border border-blue-100">
                  <div className="w-5 h-5 flex-shrink-0">
                    <Image
                      src={card.statsIcon}
                      alt="Stats"
                      width={20}
                      height={20}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-700">{card.statsText}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-8">
                  {card.features.map((column, colIndex) => (
                    <ul key={colIndex} className="space-y-4">
                      {column.map((feature) => (
                        <li key={feature.text} className="flex items-center gap-3 group/item">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                            <Image
                              src={feature.icon}
                              alt=""
                              width={20}
                              height={20}
                              className="w-5 h-5 object-contain"
                            />
                          </div>
                          <span className="text-sm sm:text-[0.95rem] text-slate-700 font-medium leading-tight">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>

                <div className="flex justify-end pt-2">
                  <button className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}