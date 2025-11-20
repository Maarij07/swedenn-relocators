'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useTranslation } from 'react-i18next';

const SUCCESS_ITEMS_EN = [
  {
    label: 'Study in Sweden Applications',
    value: 94,
    icon: 's.svg',
    barColor: '#60a5fa',
    trackColor: '#e5f0ff',
  },
  {
    label: 'EU Family Reunification',
    value: 100,
    icon: 'eu.svg',
    barColor: '#4ade80',
    trackColor: '#dcfce7',
  },
  {
    label: 'Work Permit Applications',
    value: 98,
    icon: 'wp.svg',
    barColor: '#fdba74',
    trackColor: '#ffedd5',
  },
  {
    label: 'LTR Residents EU Countries',
    value: 96,
    icon: 'lt.svg',
    barColor: '#facc15',
    trackColor: '#fef9c3',
  },
  {
    label: 'Relocation with Investment Solutions',
    value: 78,
    icon: 'inv.svg',
    barColor: '#fca5a5',
    trackColor: '#fee2e2',
  },
];

const SUCCESS_ITEMS_SV = [
  {
    label: 'Studier i Sverige-ansökningar',
    value: 94,
    icon: 's.svg',
    barColor: '#60a5fa',
    trackColor: '#e5f0ff',
  },
  {
    label: 'EU-familjeåterförening',
    value: 100,
    icon: 'eu.svg',
    barColor: '#4ade80',
    trackColor: '#dcfce7',
  },
  {
    label: 'Arbetstillståndsansökningar',
    value: 98,
    icon: 'wp.svg',
    barColor: '#fdba74',
    trackColor: '#ffedd5',
  },
  {
    label: 'Långvariga bosättningar EU-länder',
    value: 96,
    icon: 'lt.svg',
    barColor: '#facc15',
    trackColor: '#fef9c3',
  },
  {
    label: 'Relocation med investeringslösningar',
    value: 78,
    icon: 'inv.svg',
    barColor: '#fca5a5',
    trackColor: '#fee2e2',
  },
];

export default function RelocationSuccessSection() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  // Select the appropriate success items based on language
  const successItems = isSv ? SUCCESS_ITEMS_SV : SUCCESS_ITEMS_EN;

  // Translations for UI elements
  const texts = {
    whyChooseUs: isSv ? 'VARFÖR VÄLJA OSS' : 'Why Choose Us',
    teamProvide: isSv ? 'Vårt erfarna team erbjuder' : 'Our Experienced Team Provide',
    relocationServices: isSv ? 'RELOCATION‑TJÄNSTER' : 'RELOCATION SERVICES',
    readMore: isSv ? 'Läs mer' : 'Read More',
    successGraph: isSv ? 'Vår framgångsgraf' : 'Our Success Graph',
    description: isSv
      ? 'Över ett decenniums beprövad erfarenhet av smidiga relocation‑ och immigrationslösningar med mycket höga framgångstal.'
      : 'A decade of proven expertise, providing seamless relocation and immigration solutions with outstanding success rates.',
  };

  return (
    <section className="bg-[#EBF4FF]">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-24">
        {/* Centered headings with Read More button */}
        <div className="relative text-center mb-10 sm:mb-12 lg:mb-14">
          <p className="text-[0.7rem] sm:text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase mb-2.5">
            {texts.whyChooseUs}
          </p>
          <div className="relative">
            <h2 className="text-slate-900 font-extrabold leading-tight text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-[2.75rem] 4k:text-[3.25rem] mb-2">
              {texts.teamProvide}
            </h2>
            <button className="absolute top-0 right-0 sm:right-4 lg:right-6 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white text-[0.65rem] sm:text-[0.75rem] font-semibold px-3.5 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap shadow-[0 12px 30px rgba(15,23,42,0.25)] hover:bg-slate-800 transition-colors">
              {texts.readMore}
            </button>
          </div>
          <h3 className="text-[1.35rem] sm:text-[1.5rem] lg:text-[1.75rem] 2xl:text-[2rem] 4k:text-[2.5rem] font-extrabold tracking-tight text-[#3b82f6]">
            {texts.relocationServices}
          </h3>
        </div>

        {/* Content row - Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left illustration */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[400px] 2xl:max-w-[480px] 4k:max-w-[580px]">
              <Image
                src="/p1.svg"
                alt="Relocation success illustration"
                width={800}
                height={800}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 400px"
                className="w-full h-auto object-contain"
                quality={100}
              />
            </div>
          </div>

          {/* Right content - Success Graph */}
          <div className="flex flex-col order-1 lg:order-2">
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: { xs: '18px', sm: '20px', md: '22px' },
                px: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                py: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
                boxShadow: '0 22px 45px rgba(15, 23, 42, 0.08)',
                border: '1px solid rgba(148, 163, 184, 0.12)',
              }}
            >
              {/* Header with title */}
              <div className="mb-6 sm:mb-7 lg:mb-8">
                <h4 className="text-base sm:text-lg lg:text-[1.125rem] font-bold text-slate-900 mb-1.5 lg:mb-2">
                  {texts.successGraph}
                </h4>
                <p className="text-[0.7rem] sm:text-xs lg:text-[0.8125rem] text-slate-500 leading-relaxed max-w-sm">
                  {texts.description}
                </p>
              </div>

              {/* Success items list */}
              <div className="space-y-3 sm:space-y-3.5">
                {successItems.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    {/* Icon - Direct SVG */}
                    <Image
                      src={`/${item.icon}`}
                      alt={item.label}
                      width={48}
                      height={48}
                      className="object-contain flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-[0.8rem] sm:text-[0.875rem] font-medium text-slate-700 truncate">
                          {item.label}
                        </span>
                        <span className="text-[0.75rem] sm:text-[0.8rem] font-bold text-slate-900 flex-shrink-0">
                          {item.value}%
                        </span>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={item.value}
                        sx={{
                          height: { xs: 7, sm: 8 },
                          borderRadius: 999,
                          bgcolor: item.trackColor,
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 999,
                            backgroundColor: item.barColor,
                          },
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}