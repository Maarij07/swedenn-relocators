'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const features = [
  {
    id: 'visa-tracking',
    titleKey: 'digitalPlatforms.features.visaTracking.title',
    descKey: 'digitalPlatforms.features.visaTracking.desc',
    icon: '/Work-permit-illustration.svg',
  },
  {
    id: 'document-management',
    titleKey: 'digitalPlatforms.features.documentManagement.title',
    descKey: 'digitalPlatforms.features.documentManagement.desc',
    icon: '/doc1.svg',
  },
  {
    id: 'housing-solutions',
    titleKey: 'digitalPlatforms.features.housingSolutions.title',
    descKey: 'digitalPlatforms.features.housingSolutions.desc',
    icon: '/s5.svg',
  },
  {
    id: 'compliance-management',
    titleKey: 'digitalPlatforms.features.complianceManagement.title',
    descKey: 'digitalPlatforms.features.complianceManagement.desc',
    icon: '/service-illustration.svg',
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
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2
            className={`text-[#0f172a] font-extrabold text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] leading-[1.2] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            {isSv
              ? 'Vår allt-i-ett digitala plattform'
              : 'Our All-in-One Digital Platform'}
          </h2>
          <p
            className={`mt-2 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-bold leading-[1.35] text-[#2563eb] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            {isSv
              ? 'För privatpersoner, familjer och företag'
              : 'For Individuals, Families, and Companies'}
          </p>
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
                    className={`bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
                      isExpanded ? 'ring-2 ring-blue-400' : ''
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                    onClick={() => setExpandedFeature(feature.id)}
                  >
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-[#EBF4FF] flex items-center justify-center flex-shrink-0 p-2.5">
                            <img 
                              src={feature.icon} 
                              alt={t(feature.titleKey)} 
                              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <h4 className="font-bold text-slate-900 text-[0.9rem] sm:text-[0.95rem]">
                            {t(feature.titleKey)}
                          </h4>
                        </div>
                        <svg
                          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? 'max-h-96 mt-3' : 'max-h-0'
                        }`}
                      >
                        <p className="text-slate-600 text-sm leading-relaxed pl-[3.75rem]">
                          {t(feature.descKey)}
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
            <div className="relative w-full max-w-[600px] lg:max-w-full">
              <div className="relative animate-float">
                <Image
                  src="/desktop-app-view.svg"
                  alt="Digital Platform Desktop and Mobile App View"
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
