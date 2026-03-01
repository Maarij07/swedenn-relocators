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
    <main className="min-h-screen bg-white">
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
      `}</style>

      {/* Hero Section - CARD STYLE FROM FIGMA */}
      <section className="relative overflow-hidden border border-gray-300 rounded-lg mx-auto" style={{
        backgroundImage: 'url(/bg-new-in-sweden.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '1400px',
        maxWidth: 'calc(100% - 32px)',
        height: '289px',
        margin: '200px auto 0',
        marginTop: '160px'
      }}>
        {/* Overlay - Dark with #141A21 at 88% opacity */}
        <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: 'rgba(20, 26, 33, 0.88)' }}></div>

        <div className="relative h-full pt-6 sm:pt-8 pb-6 sm:pb-8 px-8 sm:px-10">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto h-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left Content */}
              <div>
                <p className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-bold text-white mb-2">
                  {t('servicesPage.hero.subtitle')}
                </p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-400 leading-[1.5] pr-12 font-normal">
                  {t('servicesPage.hero.description')}
                </p>
              </div>

              {/* Right - Illustration */}
              <div className="relative w-full flex justify-center lg:justify-end">
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

      {/* Section Heading - Our Services */}

      {/* Immigration Solutions Band - Styled like Home Page */}
      <section className="py-6 sm:py-8 lg:py-10 mt-14 sm:mt-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="bg-[#f2f7fd] border-l-4 border-[#247FE1] rounded-xl px-6 py-7 flex flex-col items-center max-w-[1400px] mx-auto" style={{width:'1400px', maxWidth:'calc(100% - 32px)'}}>
            <h2 className="font-black text-[#10182b] text-center mb-2" style={{ fontSize: '2.5rem', lineHeight: 1.1 }}>
              Immigration Solutions For
            </h2>
            <span className="block text-[#247FE1] text-[1.35rem] font-semibold text-center mt-1" style={{lineHeight:1.2}}>
              Individual-Families- Businesses
            </span>
          </div>
        </div>
      </section>

      {/* Services cards grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{
            width: '1400px',
            maxWidth: 'calc(100% - 32px)'
          }}>
            <div className="flex flex-wrap gap-8 justify-start">
              {servicesCards.map((card, index) => (
                <article
                  key={card.id}
                  className="bg-white rounded-[20px] border border-gray-100 flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    width: '445px',
                    height: '577px',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    animation: 'fadeInUp 0.7s ease-out',
                    animationDelay: `${index * 60}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  <div className="relative w-full bg-gray-50">
                    <div className="relative w-full h-64 flex items-center justify-center">
                      <Image
                        src={`/services/s${card.id}.svg`}
                        alt={card.title}
                        width={260}
                        height={256}
                        className="object-contain p-4"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col px-6 pb-6 pt-5 space-y-2">
                    <h3 className="text-[20px] font-bold text-gray-900 leading-snug text-center">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-3 flex-grow text-center mx-auto max-w-xs">
                      {card.description}
                    </p>

                    <Link href={`/${locale}${serviceRoutes[card.title] || '#'}`} className="mx-auto flex items-center justify-center px-8 py-2.5 text-[13px] font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors mt-0 shadow-md">
                      {t('servicesPage.readMore')}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to start – Individual & Company */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto" style={{
            width: '1400px',
            maxWidth: 'calc(100% - 32px)'
          }}>
            {/* Heading */}
            <div
              className="mx-auto mb-10 sm:mb-12 lg:mb-14 mt-14 sm:mt-20"
              style={{ animation: 'fadeInUp 0.8s ease-out', width: '1400px', maxWidth: 'calc(100% - 32px)' }}
            >
              <div className="bg-[#f2f7fd] border-l-4 border-[#247FE1] rounded-xl px-6 py-7 flex flex-col items-center w-full">
                <h2 className="font-black text-[#10182b] text-center mb-2" style={{ fontSize: '2.5rem', lineHeight: 1.1 }}>
                  Individual Clients & Corporate Organizations
                </h2>
                <span className="block text-[#247FE1] text-[1.35rem] font-semibold text-center mt-1" style={{lineHeight:1.2}}>
                  Our Complete Digital Solutions Are Designed For Both
                </span>
              </div>
            </div>

            {/* Two-column how-to-start cards, each in its own card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-10">
              {/* Individual card */}
              <article
                className="w-full h-full flex flex-col rounded-2xl shadow-2xl bg-white p-4 sm:p-6 lg:p-8"
              >
                {/* Header bar */}
                <div className="bg-[#DEEEFF] rounded-[12px] px-6 py-3 flex items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)] border-l-4 border-[#247FE1]">
                  <h3 className="text-sm sm:text-[0.95rem] font-medium text-[#174D87]">
                    {t('servicesPage.howToStart.individual.title')}
                  </h3>
                </div>

                {/* Step cards */}
                <div className="mt-4 flex flex-col gap-3">
                  {individualSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] px-5 py-3 min-h-[56px] sm:min-h-[60px] text-[12px] sm:text-[13px] lg:text-[14px] text-gray-700 step-hover-anim"
                    >
                      <span className="inline-flex items-center justify-center w-5 text-[12px] font-semibold text-[#174D87]">
                        {idx + 1}.
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="mt-6 w-full inline-flex items-center justify-center rounded-[999px] bg-black hover:bg-gray-800 px-6 py-3 text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-colors">
                  {t('servicesPage.howToStart.individual.cta')}
                </button>

                <p className="mt-3 text-[10px] sm:text-[11px] text-gray-500 text-center leading-relaxed">
                  {t('servicesPage.howToStart.individual.note')}
                </p>
                <p className="mt-1 text-[11px] sm:text-xs font-semibold text-[#2F66D5] text-center">
                  {t('servicesPage.howToStart.individual.subNote')}
                </p>
              </article>

              {/* Company card */}
              <article
                className="w-full h-full flex flex-col rounded-2xl shadow-2xl bg-white p-4 sm:p-6 lg:p-8"
              >
                {/* Header bar */}
                <div className="bg-[#DEEEFF] rounded-[12px] px-6 py-3 flex items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)] border-l-4 border-[#247FE1]">
                  <h3 className="text-sm sm:text-[0.95rem] font-medium text-[#174D87]">
                    {t('servicesPage.howToStart.company.title')}
                  </h3>
                </div>

                {/* Step cards */}
                <div className="mt-4 flex flex-col gap-3">
                  {companySteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] px-5 py-3 min-h-[56px] sm:min-h-[60px] text-[12px] sm:text-[13px] lg:text-[14px] text-gray-700 step-hover-anim"
                    >
                      <span className="inline-flex items-center justify-center w-5 text-[12px] font-semibold text-[#174D87]">
                        {idx + 1}.
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="mt-6 w-full inline-flex items-center justify-center rounded-[999px] bg-black hover:bg-gray-800 px-6 py-3 text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-colors">
                  {t('servicesPage.howToStart.company.cta')}
                </button>

                <p className="mt-3 text-[10px] sm:text-[11px] text-gray-500 text-center leading-relaxed">
                  {t('servicesPage.howToStart.company.note')}
                </p>
                <p className="mt-1 text-[11px] sm:text-xs font-semibold text-[#2F66D5] text-center">
                  {t('servicesPage.howToStart.company.subNote')}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto" style={{
            width: '1400px',
            maxWidth: 'calc(100% - 32px)'
          }}>
            {/* Video Container */}
            <div className="relative rounded-[20px] sm:rounded-3xl overflow-hidden shadow-2xl mb-8 sm:mb-10 lg:mb-12">
              <div className="relative w-full aspect-video bg-black">
                {showVideo ? (
                  <iframe
                    src="https://share.synthesia.io/embeds/videos/7ffc5155-81ff-4153-b235-6fa60d54a4ef"
                    className="w-full h-full"
                    loading="lazy"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{ border: 'none' }}
                    title="Immigration & Relocation"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowVideo(true)}
                    className="w-full h-full relative flex items-center justify-center text-white"
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/20" />
                    <div className="relative z-10 flex items-center justify-center">
                      <Image
                        src="/services-video-button-icon.svg"
                        alt="Play video"
                        width={80}
                        height={80}
                        className="hover:opacity-80 transition-opacity"
                      />
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Subscribe Button */}
            <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
              <a
                href="https://www.youtube.com/@swedenrelocators"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-2.5 sm:py-3 bg-blue-50 hover:bg-blue-100 font-semibold rounded-full transition-colors shadow-sm hover:shadow-md"
                style={{ color: '#174D87' }}
              >
                <span>
                  {isInitialized 
                    ? (t('servicesPage.subscribeButton')?.toString().startsWith('servicesPage') 
                        ? 'Subscribe For More Videos' 
                        : t('servicesPage.subscribeButton'))
                    : 'Subscribe For More Videos'}
                </span>
                <Image
                  src="/services-video-button-icon.svg"
                  alt="Subscribe"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
