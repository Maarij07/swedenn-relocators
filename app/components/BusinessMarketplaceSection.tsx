'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const BUSINESS_CARDS_EN = [
  {
    id: 1,
    icon: '/b1.svg',
    category: 'Restaurant in Central Malmo',
    location: 'The Heart of Malmo, Sweden',
    image: '/r1.svg',
    postedDate: 'Posted date: 2025-08-28 03:00 PM',
    price: '300,000 SEK',
    title: 'Restaurant Business for Sale',
    city: 'Malmo',
    listedDate: 'Listed on 2025-08-12',
    visitorCount: '120 Visitors',
    buttonText: 'Buy Now',
  },
  {
    id: 2,
    icon: '/b1.svg',
    category: 'Advertisement Agency',
    location: 'Online Business Opportunity',
    image: '/r2.svg',
    postedDate: 'Posted date: 2025-08-28 02:30 PM',
    price: '150,000 SEK',
    title: 'Online Advertisement Agency with clients',
    city: 'Malmo',
    listedDate: 'Listed on 2025-08-23',
    visitorCount: '15 Visitors',
    buttonText: 'List Your Business',
  },
];

const BUSINESS_CARDS_SV = [
  {
    id: 1,
    icon: '/b1.svg',
    category: 'Restaurang i centrala Malmö',
    location: 'Hjärtat av Malmö, Sverige',
    image: '/r1.svg',
    postedDate: 'Publicerad: 2025-08-28 kl. 15:00',
    price: '300,000 SEK',
    title: 'Restaurangverksamhet till salu',
    city: 'Malmö',
    listedDate: 'Listad 2025-08-12',
    visitorCount: '120 besökare',
    buttonText: 'Köp nu',
  },
  {
    id: 2,
    icon: '/b1.svg',
    category: 'Reklambyrå',
    location: 'Affärsmöjlighet online',
    image: '/r2.svg',
    postedDate: 'Publicerad: 2025-08-28 kl. 14:30',
    price: '150,000 SEK',
    title: 'Online‑reklambyrå med kunder',
    city: 'Malmö',
    listedDate: 'Listad 2025-08-23',
    visitorCount: '15 besökare',
    buttonText: 'Lista ditt företag',
  },
];

export default function BusinessMarketplaceSection() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  // Select the appropriate business cards based on language
  const businessCards = isSv ? BUSINESS_CARDS_SV : BUSINESS_CARDS_EN;

  // Translations for heading/subheading
  const heading = isSv
    ? 'Köp eller lista ditt företag till salu'
    : 'Buy or List your Business To Sell';

  const subtitle = isSv
    ? 'Utforska möjligheter eller publicera din verksamhet på marknadsplatsen.'
    : 'Explore opportunities or publish your business on the marketplace.';

  return (
    <section className="bg-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-24">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="bg-blue-50 rounded-lg border-l-4 border-blue-500 px-4 sm:px-5 py-3 sm:py-4">
            <h2 className="text-[#0f172a] font-extrabold leading-[1.2] text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
              {heading}
            </h2>
            <p className="mt-2 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-bold leading-[1.35] text-[#2563eb] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {businessCards.map((card) => (
            <article
              key={card.id}
              className="group relative rounded-3xl bg-slate-50 border border-slate-100 border-b-4 border-b-blue-500 shadow-[0_24px_80px_rgba(15,23,42,0.06)] hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 px-5 pt-5 pb-4 border-b border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Image src={card.icon} alt={card.category} width={32} height={32} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <div className="space-y-0.5">
                    <p className="text-[0.7rem] sm:text-[0.75rem] text-slate-500 font-medium">
                      {card.category}
                    </p>
                    <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-400">
                      {card.location}
                    </p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600">
                  ⋮
                </button>
              </div>

              <div className="relative z-10 px-5 pt-3 pb-2">
                <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                  <Image src="/peoples.svg" alt="Visitors" width={14} height={14} />
                  <span>{card.visitorCount}</span>
                </div>
              </div>

              <div className="relative z-10 px-5 pt-2">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={640}
                    height={360}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="relative z-10 px-5 pt-4 pb-5 space-y-3 text-[0.8rem] sm:text-[0.85rem]">
                <div className="flex items-center justify-between text-[0.65rem] text-slate-400">
                  <span>{card.postedDate}</span>
                  <span className="font-semibold text-slate-500">{card.price}</span>
                </div>

                <h3 className="text-slate-900 font-semibold text-sm sm:text-base transition-colors duration-300 group-hover:text-blue-600">
                  {card.title}
                </h3>

                <div className="space-y-1.5 text-slate-500 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Image src="/location.svg" alt="Location" width={14} height={14} />
                    <span>{card.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/time.svg" alt="Updated" width={14} height={14} />
                    <span>{card.listedDate}</span>
                  </div>
                </div>

                <div className="pt-3 flex justify-center">
                  <button className="group/btn flex items-center justify-between gap-2 rounded-xl border border-slate-300 bg-white px-6 py-2.5 text-[0.8rem] font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:bg-slate-50 hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)] transition-all duration-300 w-fit">
                    <span>{card.buttonText}</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}