'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
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

export default function ServicesPage() {
  const { t, i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

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
      <section className="bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20">
          <div className="text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <p className="text-sm md:text-base lg:text-lg font-normal mb-4" style={{ color: '#002C5C', fontSize: '16px' }}>
              {t('servicesPage.sectionHeading.badge')}
            </p>
            <h2 className="font-black leading-tight" style={{ fontSize: '40px' }}>
              <span style={{ color: '#000000' }}>{t('servicesPage.sectionHeading.titlePart1')}&nbsp;</span>
              <span style={{ color: '#6FAAEA' }}>{t('servicesPage.sectionHeading.titlePart2')}</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Immigration Solutions Band */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="rounded-lg p-8 sm:p-10 lg:p-12 text-center" style={{
            backgroundColor: '#DEEEFF',
            width: '1400px',
            maxWidth: 'calc(100% - 32px)',
            margin: '0 auto',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            <h3 className="font-black leading-tight" style={{ fontSize: '42px', color: '#1D2F43', marginBottom: '8px' }}>
              {t('servicesPage.immigrationBand.titlePart1')}
            </h3>
            <h3 className="font-black leading-tight" style={{ fontSize: '42px', color: '#247FE1' }}>
              {t('servicesPage.immigrationBand.titlePart2')}
            </h3>
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

                    <button className="mx-auto flex items-center justify-center px-8 py-2.5 text-[13px] font-semibold text-white bg-[#032B5F] rounded-full hover:bg-[#021C3D] transition-colors mt-0">
                      {t('servicesPage.readMore')}
                    </button>
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
            className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-14"
            style={{ animation: 'fadeInUp 0.8s ease-out' }}
          >
            <p className="text-[14px] sm:text-[15px] text-[#647ACB] mb-4 font-medium">
              Our Complete Digital Solutions Are Designed For Both
            </p>
            <h2 className="text-[36px] sm:text-[40px] md:text-[42px] lg:text-[44px] font-bold leading-tight">
              <span className="text-[#1D2F43]">Individual Clients & </span>
              <span className="text-[#247FE1]">Corporate Organizations</span>
            </h2>
          </div>

          {/* Two-column how-to-start cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Individual card */}
            <article
              className="w-full h-full flex flex-col"
              style={{ animation: 'fadeInUp 0.8s ease-out', animationDelay: '80ms', animationFillMode: 'both' }}
            >
              {/* Header bar */}
              <div className="bg-[#DEEEFF] rounded-[12px] px-6 py-3 flex items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <h3 className="text-sm sm:text-[0.95rem] font-medium text-[#174D87]">
                  {t('servicesPage.howToStart.individual.title')}
                </h3>
              </div>

              {/* Step cards */}
              <div className="mt-4 flex flex-col gap-3">
                {individualSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] px-5 py-3 min-h-[56px] sm:min-h-[60px] text-[12px] sm:text-[13px] lg:text-[14px] text-gray-700"
                  >
                    <span className="inline-flex items-center justify-center w-5 text-[12px] font-semibold text-[#174D87]">
                      {idx + 1}.
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-6 w-full inline-flex items-center justify-center rounded-[999px] bg-[#0A3A78] px-6 py-3 text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(10,58,120,0.35)] hover:bg-[#07294F] transition-colors">
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
              className="w-full h-full flex flex-col"
              style={{ animation: 'fadeInUp 0.8s ease-out', animationDelay: '140ms', animationFillMode: 'both' }}
            >
              {/* Header bar */}
              <div className="bg-[#DEEEFF] rounded-[12px] px-6 py-3 flex items-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <h3 className="text-sm sm:text-[0.95rem] font-medium text-[#174D87]">
                  {t('servicesPage.howToStart.company.title')}
                </h3>
              </div>

              {/* Step cards */}
              <div className="mt-4 flex flex-col gap-3">
                {companySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] px-5 py-3 min-h-[56px] sm:min-h-[60px] text-[12px] sm:text-[13px] lg:text-[14px] text-gray-700"
                  >
                    <span className="inline-flex items-center justify-center w-5 text-[12px] font-semibold text-[#174D87]">
                      {idx + 1}.
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-6 w-full inline-flex items-center justify-center rounded-[999px] bg-[#0A3A78] px-6 py-3 text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(10,58,120,0.35)] hover:bg-[#07294F] transition-colors">
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
