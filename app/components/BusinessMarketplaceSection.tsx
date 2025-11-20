'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const BUSINESS_CARDS_EN = [
  {
    id: 1,
    icon: '/b1.svg',
    category: 'Restaurant in Central Malmo',
    location: 'The Heart of Malmo, Sweden',
    visitors: '120 Visitors',
    headerVisitors: '120 Visitors',
    image: '/r1.svg',
    postedDate: 'Posted date: 2025-08-28 03:00 PM',
    price: '300,000 SEK',
    title: 'Restaurant Business for Sale',
    city: 'Malmo',
    listedDate: 'Listed on 2025-08-12',
    visitorCount: '250 Visitors',
    buttonText: 'Buy Now',
  },
  {
    id: 2,
    icon: '/b2.svg',
    category: 'Advertisement Agency',
    location: 'Online Business Opportunity',
    visitors: '85 Visitors',
    headerVisitors: '85 Visitors',
    image: '/r2.svg',
    postedDate: 'Posted date: 2025-08-28 02:30 PM',
    price: '150,000 SEK',
    title: 'Online Advertisement Agency with clients',
    city: 'Malmo',
    listedDate: 'Listed on 2025-08-23',
    visitorCount: '1k Visitors',
    buttonText: 'List Your Business',
  },
];

const BUSINESS_CARDS_SV = [
  {
    id: 1,
    icon: '/b1.svg',
    category: 'Restaurang i centrala Malmö',
    location: 'Hjärtat av Malmö, Sverige',
    visitors: '120 besökare',
    headerVisitors: '120 besökare',
    image: '/r1.svg',
    postedDate: 'Publicerad: 2025-08-28 kl. 15:00',
    price: '300,000 SEK',
    title: 'Restaurangverksamhet till salu',
    city: 'Malmö',
    listedDate: 'Listad 2025-08-12',
    visitorCount: '250 besökare',
    buttonText: 'Köp nu',
  },
  {
    id: 2,
    icon: '/b2.svg',
    category: 'Reklambyrå',
    location: 'Affärsmöjlighet online',
    visitors: '85 besökare',
    headerVisitors: '85 besökare',
    image: '/r2.svg',
    postedDate: 'Publicerad: 2025-08-28 kl. 14:30',
    price: '150,000 SEK',
    title: 'Online‑reklambyrå med kunder',
    city: 'Malmö',
    listedDate: 'Listad 2025-08-23',
    visitorCount: '1k besökare',
    buttonText: 'Lista ditt företag',
  },
];

export default function BusinessMarketplaceSection() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  // Select the appropriate business cards based on language
  const businessCards = isSv ? BUSINESS_CARDS_SV : BUSINESS_CARDS_EN;

  // Translations for heading
  const heading = isSv ? (
    <>
      Köp eller <span className="text-[#2563eb]">lista ditt företag</span> för försäljning
    </>
  ) : (
    <>
      Buy or <span className="text-[#2563eb]">List your Business</span> To Sell
    </>
  );

  return (
    <section className="bg-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-24">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-slate-900 font-extrabold tracking-tight text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-[2.75rem] 4k:text-[3.25rem]">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {businessCards.map((card) => (
            <article
              key={card.id}
              className="rounded-3xl bg-slate-50 border border-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.06)] overflow-hidden"
            >
              <div className="px-5 pt-5 pb-4 border-b border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Image src={card.icon} alt={card.category} width={32} height={32} className="shrink-0" />
                  <div className="space-y-0.5">
                    <p className="text-[0.7rem] sm:text-[0.75rem] text-slate-500 font-medium">
                      {card.category}
                    </p>
                    <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-400">
                      {card.location}
                    </p>
                  </div>
                </div>
                <span className="inline-flex h-6 items-center rounded-full bg-slate-50 px-2 text-[0.65rem] text-slate-400">
                  {card.headerVisitors}
                </span>
              </div>

              <div className="px-5 pt-4">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={640}
                    height={360}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="px-5 pt-4 pb-5 space-y-3 text-[0.8rem] sm:text-[0.85rem]">
                <div className="flex items-center justify-between text-[0.65rem] text-slate-400">
                  <span>{card.postedDate}</span>
                  <span className="font-semibold text-slate-500">{card.price}</span>
                </div>

                <h3 className="text-slate-900 font-semibold text-sm sm:text-base">
                  {card.title}
                </h3>

                <div className="space-y-1.5 text-slate-500">
                  <div className="flex items-center gap-2">
                    <Image src="/location.svg" alt="Location" width={14} height={14} />
                    <span>{card.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/time.svg" alt="Updated" width={14} height={14} />
                    <span>{card.listedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/peoples.svg" alt="Visitors" width={14} height={14} />
                    <span>{card.visitorCount}</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[0.8rem] font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:bg-slate-50 transition-colors">
                    {card.buttonText}
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