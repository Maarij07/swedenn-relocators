'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const features = [
  {
    id: 'smart-onboarding',
    title: 'Smart Onboarding & Eligibility Assessment',
    desc: 'Start with intelligent digital assessments tailored to your situation. Our system evaluates visa, work permit, study, business, family reunification, and long-term residence pathways and provides structured results before you proceed.',
    icon: '/smart-onboarding.svg',
  },
  {
    id: 'centralized-tracking',
    title: 'Centralized Case & Visa Tracking',
    desc: 'Monitor your entire immigration journey in real time. Track submissions, case numbers, authority updates, decision letters, and status changes directly from your dashboard with instant notifications.',
    icon: '/visa-permit-tracking.svg',
  },
  {
    id: 'digital-vault',
    title: 'Secure Digital Document Vault',
    desc: 'Everything stored in one encrypted space. Upload, organize, and manage documents, create folders, connect family members, e-sign Power of Attorney, and download embassy-ready combined files anytime.',
    icon: '/secure-document-management.svg',
  },
  {
    id: 'appointments-payments',
    title: 'Automated Appointments & Payments',
    desc: 'Book, manage, and pay in minutes. Select country, consultation type, available slots, and complete secure payments online. Track invoices, balances, and service history with full transparency.',
    icon: '/automated-appointments.svg',
  },
  {
    id: 'housing-settlement',
    title: 'Housing & Complete Settlement Solutions',
    desc: 'Beyond immigration. Full relocation support. Access housing assistance, logistics, pet relocation, money management, insurance, business services, investor solutions, and partner services all coordinated through the same portal.',
    icon: '/Housing-Accomodation.svg',
  },
  {
    id: 'support-compliance',
    title: 'Dedicated Support & Compliance Management',
    desc: 'Professional guidance with full digital control. Communicate with your assigned advisor, receive structured updates, manage compliance requirements, review service charges, and keep your entire relocation process organized in one place.',
    icon: '/Compliance-Support.svg',
  },
];

export default function DigitalPlatformsSection() {
  const { t, i18n } = useTranslation();
  const isSv = i18n.language === 'sv';
  const [expandedFeature, setExpandedFeature] = useState<string | null>('visa-tracking');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-[#f8fafc] to-[#EBF4FF] overflow-hidden">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-28">
        {/* Header */}
        <div className="mb-12 sm:mb-14 lg:mb-16">
          <div
            className={`bg-blue-50 rounded-lg border-l-4 border-blue-500 px-4 sm:px-5 py-3 sm:py-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="w-full text-center px-4 sm:px-6 lg:px-8 xl:px-12">
              <h2 className="text-[#0f172a] font-extrabold text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] leading-[1.2] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
                {isSv
                  ? 'Vår allt-i-ett digitala plattform'
                  : 'Our All-in-One Digital Platform'}
              </h2>
              <p className="mt-2 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-bold leading-[1.35] text-[#2563eb] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
                {isSv
                  ? 'För privatpersoner, familjer och företag'
                  : 'For Individuals, Families, and Companies'}
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left: Features */}
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const isExpanded = expandedFeature === feature.id;
                return (
                  <div
                    key={feature.id}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${isExpanded ? 'border border-[#2563eb]' : 'border border-slate-100'}`}
                    style={{ borderWidth: isExpanded ? '1px' : '1px', transitionDelay: `${index * 100}ms` }}
                    onClick={() => setExpandedFeature(feature.id)}
                  >
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full" style={{backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, userSelect: 'none'}}>
                            {index + 1}
                          </div>
                          <h4 className="font-bold text-slate-900 text-[1rem] sm:text-[1.1rem]">
                            {feature.title}
                          </h4>
                        </div>
                        <svg
                          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 mt-3' : 'max-h-0'}`}
                      >
                        <p className="text-slate-600 text-sm leading-relaxed pl-[3.75rem]">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Platform Illustration */}
          <div
            className={`flex flex-col items-center gap-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Device Screens: Desktop and Mobile */}
            {(() => {
              // Map feature id to image filenames
              const screenMap = {
                main: 'main-screen',
                'smart-onboarding': 'eligibility-check-screen',
                'centralized-tracking': 'application-status-screen',
                'digital-vault': 'document-screen',
                'appointments-payments': 'appointment-screen',
                'housing-settlement': 'housing-screen',
                'support-compliance': 'support-screen',
              } as const;
              type ScreenKey = keyof typeof screenMap;
              let screenKey: ScreenKey = 'main';
              if (expandedFeature === 'smart-onboarding') screenKey = 'smart-onboarding';
              else if (expandedFeature === 'centralized-tracking') screenKey = 'centralized-tracking';
              else if (expandedFeature === 'digital-vault') screenKey = 'digital-vault';
              else if (expandedFeature === 'appointments-payments') screenKey = 'appointments-payments';
              else if (expandedFeature === 'housing-settlement') screenKey = 'housing-settlement';
              else if (expandedFeature === 'support-compliance') screenKey = 'support-compliance';

              // Desktop/tablet view
              return (
                <>
                  <div className="relative w-full max-w-[600px] lg:max-w-full hidden sm:block">
                    <div className="relative animate-float">
                      <Image
                        src={`/digital-platform/${screenMap[screenKey]}.svg`}
                        alt="Digital Platform Desktop View"
                        width={1200}
                        height={600}
                        className="w-full h-auto drop-shadow-2xl"
                        priority
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  {/* Mobile view */}
                  <div className="relative w-[220px] max-w-full block sm:hidden">
                    <div className="relative animate-float">
                      <Image
                        src={`/digital-platform/${screenMap[screenKey]}.svg`}
                        alt="Digital Platform Mobile View"
                        width={300}
                        height={600}
                        className="w-full h-auto drop-shadow-2xl rounded-2xl"
                        priority
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </>
              );
            })()}
            {/* App Store Buttons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white border border-slate-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Image src="/apple.svg" alt="Apple" width={22} height={22} className="w-5 h-5" />
                <div className="flex flex-col items-start">
                  <span className="text-[0.5rem] font-light text-slate-600 uppercase tracking-wide">
                    DOWNLOAD ON THE
                  </span>
                  <span className="font-semibold text-[0.8rem] text-slate-900 -mt-0.5">
                    {t('digitalPlatforms.appStore')}
                  </span>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white border border-slate-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Image src="/playstore.svg" alt="Google Play" width={22} height={22} className="w-5 h-5" />
                <div className="flex flex-col items-start">
                  <span className="text-[0.5rem] font-light text-slate-600 uppercase tracking-wide">
                    GET IT ON
                  </span>
                  <span className="font-semibold text-[0.8rem] text-slate-900 -mt-0.5">
                    {t('digitalPlatforms.googlePlay')}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
