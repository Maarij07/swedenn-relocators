'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function DigitalPlatformsSection() {
  const { t, i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  return (
    <section className="bg-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-28">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-wider uppercase text-blue-400 mb-3">
            {t('digitalPlatforms.badge')}
          </p>
          <h2 className="text-slate-900 font-extrabold tracking-tight text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-[2.75rem] 4k:text-[3.25rem] mb-2 leading-tight">
            {isSv ? (
              <>
                Vår{' '}
                <span className="text-blue-600">allt-i-ett digital plattform</span> för
                <br />
                privatpersoner och företag
              </>
            ) : (
              <>
                Our{' '}
                <span className="text-blue-600">All-in-One Digital Platforms</span> for
                <br />
                Individuals and Companies
              </>
            )}
          </h2>
        </div>

        {/* Platform Illustration */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <div className="w-full max-w-5xl">
            <Image
              src="/desktop-app-view.svg"
              alt="Digital Platform Desktop and Mobile App View"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          {/* Subheading */}
          <h3 className="text-center text-slate-900 font-bold text-lg sm:text-xl lg:text-[1.35rem] mb-4">
            {isSv ? (
              <>
                Sömlös flytt- och immigrationslösningar för{' '}
                <span className="text-blue-500">
                  medarbetare, privatpersoner, familjer och företag
                </span>
              </>
            ) : (
              <>
                Seamless Relocation & Immigration solutions for{' '}
                <span className="text-blue-500">
                  Employees, Individuals, Families, & Companies
                </span>
              </>
            )}
          </h3>

          {/* Description */}
          <p className="text-center text-slate-600 text-[0.9rem] sm:text-[0.95rem] lg:text-base leading-relaxed mb-8">
            {t('digitalPlatforms.description')}
          </p>

          {/* App Store Buttons */}
          <div className="flex justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 bg-white border border-slate-200 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              <Image
                src="/apple.svg"
                alt="Apple"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex flex-col items-start">
                <span className="text-[0.5rem] sm:text-[0.55rem] font-light text-slate-600 uppercase tracking-wide">
                  DOWNLOAD ON THE
                </span>
                <span className="font-semibold text-[0.85rem] sm:text-[0.9rem] text-slate-900 -mt-0.5">
                  {t('digitalPlatforms.appStore')}
                </span>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 bg-white border border-slate-200 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              <Image
                src="/playstore.svg"
                alt="Google Play"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex flex-col items-start">
                <span className="text-[0.5rem] sm:text-[0.55rem] font-light text-slate-600 uppercase tracking-wide">
                  GET IT ON
                </span>
                <span className="font-semibold text-[0.85rem] sm:text-[0.9rem] text-slate-900 -mt-0.5">
                  {t('digitalPlatforms.googlePlay')}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
