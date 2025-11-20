'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const SERVICES_EN = [
  {
    id: 1,
    icon: '/doc1.svg',
    iconSize: { width: 48, height: 48 },
    title: 'Employer of Record (EOR)',
    description:
      'Expand your workforce globally without setting up a local entity. Our Employer of Record solutions allow your company to hire and manage employees in Sweden and Denmark compliantly while we handle all legal, administrative, and payroll responsibilities.',
    bullets: [
      'International companies hiring employees in Sweden or Denmark.',
      'Startups testing new markets before establishing a local branch.',
      'Businesses relocating staff who require compliant employment structures.',
    ],
    buttonText: 'Read More',
  },
  {
    id: 2,
    icon: '/doc2.svg',
    iconSize: { width: 32, height: 32 },
    title: 'Pay Roll Services',
    description:
      'Managing payroll in Sweden and Denmark can be complex, with strict labor laws, tax regulations, and social security requirements. Our Payroll Services ensure that your operations are accurate, on time, and in full compliance with local legislation.',
    bullets: [
      'International companies hiring in Sweden or Denmark.',
      'Local businesses looking for professional payroll management.',
      'Companies expanding without needing complex payroll workflows.',
    ],
    buttonText: 'Read More',
  },
];

const SERVICES_SV = [
  {
    id: 1,
    icon: '/doc1.svg',
    iconSize: { width: 48, height: 48 },
    title: 'Employer of Record (EOR)',
    description:
      'Bygg upp din arbetsstyrka globalt utan att behöva starta lokala bolag. Med våra Employer of Record‑lösningar kan ditt företag anställa och hantera personal i Sverige och Danmark på ett regelriktigt sätt medan vi sköter all juridik, administration och lönehantering.',
    bullets: [
      'Internationella företag som anställer medarbetare i Sverige eller Danmark.',
      'Startups som testar nya marknader innan de öppnar lokala filialer.',
      'Företag som relocerar personal och behöver korrekta anställningsstrukturer.',
    ],
    buttonText: 'Läs mer',
  },
  {
    id: 2,
    icon: '/doc2.svg',
    iconSize: { width: 32, height: 32 },
    title: 'Lönetjänster',
    description:
      'Lönehantering i Sverige och Danmark kan vara komplex med hårda arbetsrättsliga regler, skatteregler och socialförsäkringskrav. Våra lönetjänster säkerställer att allt sköts korrekt, i tid och i full överensstämmelse med lokal lagstiftning.',
    bullets: [
      'Internationella företag som anställer i Sverige eller Danmark.',
      'Lokala bolag som vill ha professionell löneadministration.',
      'Företag som växer utan att bygga upp komplexa löneprocesser.',
    ],
    buttonText: 'Läs mer',
  },
];

export default function PayrollEORSection() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  // Select the appropriate services based on language
  const services = isSv ? SERVICES_SV : SERVICES_EN;

  // Translations for heading
  const texts = {
    mainHeading: isSv ? 'Väx globalt, hantera lokalt' : 'Expand Globally, Manage Locally',
    subHeading: isSv ? 'Lönehantering & EOR‑lösningar' : 'Payroll & EOR Solutions',
  };

  return (
    <section className="bg-[#EBF4FF]">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-28">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-slate-900 font-extrabold leading-tight text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] 2xl:text-[3rem] 4k:text-[4rem]">
            {texts.mainHeading}
          </h2>
          <p className="mt-2 text-blue-600 font-extrabold text-[1.25rem] sm:text-[1.35rem] lg:text-[1.5rem] 4k:text-[2rem]">
            {texts.subHeading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-white border border-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="p-6 sm:p-7 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={service.iconSize.width}
                    height={service.iconSize.height}
                    className="shrink-0"
                  />
                  <h3 className="text-slate-900 font-bold text-lg sm:text-xl">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                      <Image src="/bullet.svg" alt="•" width={10} height={10} className="mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-5 py-2.5 rounded-lg bg-black text-white text-sm sm:text-base font-semibold hover:bg-slate-800 transition-colors">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}