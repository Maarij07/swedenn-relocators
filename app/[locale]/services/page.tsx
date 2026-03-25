'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { useTranslation } from 'react-i18next';

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Map service titles to their routes
const serviceRoutes: Record<string, string> = {
  'Family Reunification - National Laws': '/services/family-reunification',
  'Family Reunification - EU Laws': '/services/family-reunification',
  'Work Permit Sweden': '/services/work-permit',
  'Self-Employed in Sweden': '/services/self-employed',
  'Study in Sweden': '/services/study-in-eu',
  'CBI - RBI Programs': '/services/cbi-rbi-programs',
  'Swedish Citizenship': '/services/citizenship',
  'AU Pair and Host Family Solutions': '/services/au-pair-host-family',
  'Appeal Cases': '/services/appeal-cases',
  'Destination Services': '/services/destination-services',
  'Housing Solutions': '/services/housing',
  'Buy / Sell Property': '/services/buy-sell-property',
  'Bookkeeping Solutions': '/services/bookkeeping-solutions',
  'EOR & Payroll': '/services/eor-payroll',
  'Financial Management': '/services/financial-management',
  'Lawyers Assistance': '/services/lawyers',
  'Manpower Solutions': '/services/manpower-solutions',
  'Logistics Management': '/services/logistics-services',
  'Pet Relocation': '/services/pet-relocation',
  'Invest in Sweden - Business Sale Purchase': '/services/business-sale-purchase',
};

export default function ServicesPage() {
  const { t, i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  const params = useParams();
  const locale = params?.locale || 'en';

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsInitialized(true);
    }
  }, [i18n.isInitialized]);

  const servicesCards = (t('servicesPage.cards', { returnObjects: true }) as Array<{ title: string; description: string }>).map((card, index) => ({
    ...card,
    id: index + 1
  }));

  const individualSteps = t('servicesPage.howToStart.individual.steps', { returnObjects: true }) as string[];
  const companySteps = t('servicesPage.howToStart.company.steps', { returnObjects: true }) as string[];

  return (
    <main className="min-h-screen bg-[#F8F9FE]">
      <Navbar />

      {/* Animations keyframes */}
      <style>{fadeInUp}</style>
      <style>{`
        .step-hover-anim {
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .step-hover-anim:hover {
          box-shadow: 0 4px 16px 0 rgba(36,127,225,0.10);
          transform: scale(1.025);
        }

        .sr-service-card {
          transition: transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 280ms ease, border-color 200ms ease, background-color 200ms ease;
          will-change: transform, box-shadow;
          position: relative;
          z-index: 1;
        }
        .sr-service-card:hover {
          transform: translateY(-20px) scale(1.08) !important;
          box-shadow: 0 40px 80px rgba(0,0,0,0.22), 0 16px 32px rgba(36,127,225,0.35) !important;
          border-color: #3b82f6 !important;
          background-color: #fff !important;
          cursor: pointer;
          z-index: 20;
        }
        .sr-service-card:active {
          transform: translateY(-6px) scale(1.02) !important;
          transition-duration: 80ms;
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mt-[160px]">
      <section
        className="relative overflow-hidden border border-gray-300 rounded-lg"
        style={{
          backgroundImage: 'url(/bg-new-in-sweden.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: 'rgba(20, 26, 33, 0.88)' }} />

        <div className="relative px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-0 lg:h-[289px] flex items-center">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left Content */}
              <div>
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight font-bold text-white mb-2">
                  {t('servicesPage.hero.subtitle')}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed font-normal">
                  {t('servicesPage.hero.description')}
                </p>
              </div>

              {/* Right - Illustration (hidden on small screens) */}
              <div className="hidden lg:flex w-full justify-end">
                <Image
                  src="/service-illustration.svg"
                  alt="Services illustration"
                  width={300}
                  height={200}
                  style={{ maxWidth: '100%', height: 'auto' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* ── SERVICES CARDS GRID ───────────────────────────────── */}
      <section className="py-10 sm:py-14 lg:py-20 bg-[#F8F9FE]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

          {/* Search bar + view toggle — mobile only */}
          <div className="flex items-center gap-2 mb-4 sm:hidden">
            {/* Search input */}
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-[#247FE1] transition-colors shadow-sm"
              />
            </div>

            {/* Card view toggle */}
            <button
              onClick={() => setViewMode('card')}
              className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                viewMode === 'card'
                  ? 'bg-black border-black text-white'
                  : 'bg-white border-gray-200 text-gray-500'
              }`}
              aria-label="Card view"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="8" height="8" rx="1.5" />
                <rect x="13" y="3" width="8" height="8" rx="1.5" />
                <rect x="3" y="13" width="8" height="8" rx="1.5" />
                <rect x="13" y="13" width="8" height="8" rx="1.5" />
              </svg>
            </button>

            {/* List view toggle */}
            <button
              onClick={() => setViewMode('list')}
              className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                viewMode === 'list'
                  ? 'bg-black border-black text-white'
                  : 'bg-white border-gray-200 text-gray-500'
              }`}
              aria-label="List view"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* No results */}
          {searchQuery && servicesCards.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
            <div className="sm:hidden text-center py-10 text-sm text-gray-400">
              No services found for &quot;{searchQuery}&quot;
            </div>
          )}

          {/* ── LIST VIEW — mobile only ── */}
          <div className={`sm:hidden flex flex-col gap-2 ${viewMode === 'list' ? 'block' : 'hidden'}`}>
            {servicesCards
              .filter(card => !searchQuery || card.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((card, index) => (
                <Link
                  key={card.id}
                  href={`/${locale}${serviceRoutes[card.title] || '#'}`}
                  className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-3 py-2.5 shadow-sm active:scale-[0.99] transition-transform"
                  style={{ textDecoration: 'none', borderLeft: '3px solid #3b82f6' }}
                >
                  <div className="flex-shrink-0 w-11 h-11 bg-gray-50 rounded-lg flex items-center justify-center">
                    <Image
                      src={`/services/s${card.id}.svg`}
                      alt={card.title}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <span className="flex-1 text-xs font-semibold text-gray-900 leading-snug">
                    {card.title}
                  </span>
                  <span className="flex-shrink-0 px-3 py-1.5 text-[10px] font-semibold text-white bg-black rounded-full">
                    {t('servicesPage.readMore')}
                  </span>
                </Link>
              ))}
          </div>

          {/* ── CARD GRID — card mode on mobile + always on sm+ ── */}
          <div style={{ isolation: 'isolate' }} className={`grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5 lg:gap-8 ${viewMode === 'card' ? 'grid' : 'hidden sm:grid'}`}>
            {servicesCards
              .filter(card => !searchQuery || card.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((card, index) => (
                <Link
                  key={card.id}
                  href={`/${locale}${serviceRoutes[card.title] || '#'}`}
                  className="bg-[#F8F9FE] rounded-[16px] sm:rounded-[20px] border border-gray-100 flex flex-col overflow-hidden sr-service-card cursor-pointer"
                  style={{
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    borderBottom: '4px solid #3b82f6',
                    animation: 'fadeInUp 0.7s ease-out',
                    animationDelay: `${index * 60}ms`,
                    animationFillMode: 'both',
                    textDecoration: 'none',
                  }}
                >
                  <div className="relative w-full bg-gray-50">
                    <div className="relative w-full h-28 sm:h-56 lg:h-60 flex items-center justify-center overflow-hidden">
                      <Image
                        src={`/services/s${card.id}.svg`}
                        alt={card.title}
                        width={260}
                        height={260}
                        className="object-contain w-20 h-20 sm:w-44 sm:h-44 lg:w-48 lg:h-48"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col px-3 sm:px-5 lg:px-6 pb-4 sm:pb-6 pt-3 sm:pt-5 space-y-1 sm:space-y-2">
                    <h3 className="text-[11px] sm:text-sm lg:text-lg xl:text-xl font-bold text-gray-900 leading-snug text-center">
                      {card.title}
                    </h3>
                    <p className="hidden sm:block text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed line-clamp-3 flex-grow text-center mx-auto max-w-xs">
                      {card.description}
                    </p>
                    <span className="mx-auto flex items-center justify-center px-4 sm:px-8 py-1.5 sm:py-2.5 text-[10px] sm:text-xs lg:text-sm font-semibold text-white bg-black rounded-full mt-3 sm:mt-6 shadow-md">
                      {t('servicesPage.readMore')}
                    </span>
                  </div>
                </Link>
              ))}
          </div>

        </div>
      </section>

      {/* ── HOW TO START ─────────────────────────────────────── */}
      <section className="bg-[#F8F9FE] pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

          {/* Heading */}
          <div className="mb-8 sm:mb-10 lg:mb-14 mt-10 sm:mt-14 lg:mt-20" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <div className="bg-[#f2f7fd] border-l-4 border-[#247FE1] rounded-xl px-5 sm:px-6 py-6 sm:py-7 flex flex-col items-center w-full">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-2 leading-tight">
                Individual Clients & Corporate Organizations
              </h2>
              <span className="block text-[#247FE1] text-base sm:text-lg lg:text-xl font-semibold text-center mt-1 leading-tight">
                Our Complete Digital Solutions Are Designed For Both
              </span>
            </div>
          </div>

          {/* Two-column cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch mb-10">

            {/* Individual card */}
            <article className="w-full h-full flex flex-col rounded-2xl shadow-2xl bg-[#F8F9FE] p-4 sm:p-6 lg:p-8">
              <div className="bg-[#DEEEFF] rounded-[12px] px-5 sm:px-6 py-3 flex items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)] border-l-4 border-[#247FE1]">
                <h3 className="text-xs sm:text-sm lg:text-base font-medium text-[#174D87]">
                  {t('servicesPage.howToStart.individual.title')}
                </h3>
              </div>

              <div className="mt-4 flex flex-col gap-3 flex-1">
                {individualSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-[12px] bg-[#F8F9FE] shadow-[0_4px_12px_rgba(0,0,0,0.08)] px-4 sm:px-5 py-3 min-h-[52px] sm:min-h-[56px] text-xs sm:text-sm lg:text-base text-gray-700 step-hover-anim"
                  >
                    <span className="inline-flex items-center justify-center w-5 text-[12px] font-semibold text-[#174D87] flex-shrink-0">
                      {idx + 1}.
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://portal.swedenrelocators.se/signup/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center rounded-[999px] bg-black hover:bg-gray-800 px-6 py-3 text-xs sm:text-sm lg:text-base font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-colors"
              >
                {t('servicesPage.howToStart.individual.cta')}
              </a>

              <p className="mt-3 text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
                {t('servicesPage.howToStart.individual.note')}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#2F66D5] text-center">
                {t('servicesPage.howToStart.individual.subNote')}
              </p>
            </article>

            {/* Company card */}
            <article className="w-full h-full flex flex-col rounded-2xl shadow-2xl bg-[#F8F9FE] p-4 sm:p-6 lg:p-8">
              <div className="bg-[#DEEEFF] rounded-[12px] px-5 sm:px-6 py-3 flex items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)] border-l-4 border-[#247FE1]">
                <h3 className="text-xs sm:text-sm lg:text-base font-medium text-[#174D87]">
                  {t('servicesPage.howToStart.company.title')}
                </h3>
              </div>

              <div className="mt-4 flex flex-col gap-3 flex-1">
                {companySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-[12px] bg-[#F8F9FE] shadow-[0_4px_12px_rgba(0,0,0,0.08)] px-4 sm:px-5 py-3 min-h-[52px] sm:min-h-[56px] text-xs sm:text-sm lg:text-base text-gray-700 step-hover-anim"
                  >
                    <span className="inline-flex items-center justify-center w-5 text-xs font-semibold text-[#174D87] flex-shrink-0">
                      {idx + 1}.
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://portal.swedenrelocators.se/signup/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center rounded-[999px] bg-black hover:bg-gray-800 px-6 py-3 text-xs sm:text-sm lg:text-base font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-colors"
              >
                {t('servicesPage.howToStart.company.cta')}
              </a>

              <p className="mt-3 text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
                {t('servicesPage.howToStart.company.note')}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#2F66D5] text-center">
                {t('servicesPage.howToStart.company.subNote')}
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* Video Section removed per request */}
    </main>
  );
}
