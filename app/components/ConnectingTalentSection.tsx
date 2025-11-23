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
    topline: isSv
      ? 'Från det att du anländer tills du reser vidare'
      : 'From the moment you arrive to the time you depart',
    heading: isSv ? (
      <>
        Kopplar samman <span className="text-blue-600">företag</span> med rätt{' '}
        <span className="text-blue-600">talanger</span>
      </>
    ) : (
      <>
        Connecting <span className="text-blue-600">Companies</span> with the{' '}
        <span className="text-blue-600">Right Talent</span>
      </>
    ),
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-28">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-wide text-blue-400">
            {texts.topline}
          </p>
          <h2 className="mt-2 text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] 2xl:text-[3rem] 4k:text-[4rem] font-extrabold leading-tight text-slate-900">
            {texts.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 4k:gap-14">
          {cards.map((card) => (
            <div key={card.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-6 sm:p-7 lg:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="relative w-14 h-14 sm:w-[79px] sm:h-[79px] rounded-xl shadow-sm overflow-hidden"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      <Image src={card.icon} alt={card.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl 4k:text-3xl font-bold text-slate-900">
                        {card.title}
                      </h3>
                      <p className={`${card.id === 1 ? 'text-sm sm:text-base 4k:text-lg' : 'text-xs sm:text-sm'} text-slate-500`}>
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600">
                    ⋮
                  </button>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <Image
                    src={card.statsIcon}
                    alt="Stats"
                    width={18}
                    height={18}
                  />
                  <span className="text-sm sm:text-base text-slate-600">{card.statsText}</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {card.features.map((column, colIndex) => (
                    <ul key={colIndex} className="space-y-3 text-slate-600 text-sm sm:text-base">
                      {column.map((feature) => (
                        <li key={feature.text} className="flex items-center gap-2">
                          <div className="w-5 h-5 flex-shrink-0">
                            <Image
                              src={feature.icon}
                              alt=""
                              width={20}
                              height={20}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="px-5 py-2.5 rounded-lg bg-black text-white text-sm sm:text-base font-semibold hover:bg-slate-800 transition-colors">
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