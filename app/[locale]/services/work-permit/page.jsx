'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function WorkPermitPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      i18n.on('initialized', () => setIsReady(true));
    }
  }, [i18n]);

  if (!isReady) return null;

  const permitCards = t('workPermit.permitTypes.permits', { returnObjects: true }) || [];
  const generalReqs = t('workPermit.generalRequirements.requirements', { returnObjects: true }) || [];
  const services = t('workPermit.support.services', { returnObjects: true }) || [];
  const waitingTimes = t('workPermit.process.waitingTimes', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {t('workPermit.hero.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {t('workPermit.hero.subtitle')}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {t('workPermit.intro.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            {t('workPermit.intro.description')}
          </p>
          <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
              {t('workPermit.intro.toolLink')}
            </p>
          </div>
        </section>

        {/* Permit Types Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('workPermit.permitTypes.heading')}
          </h2>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {Array.isArray(permitCards) && permitCards.map((permit, idx) => (
              <div
                key={permit.id}
                className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-blue-500"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                    {permit.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                  {permit.description}
                </p>

                <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                  {t('workPermit.permitTypes.requirementsLabel')}
                </p>
                <div className="space-y-3 mb-6">
                  {Array.isArray(permit.requirements) && permit.requirements.map((req, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-300">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                        {req.label}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {req.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 uppercase">
                      {t('workPermit.permitTypes.processingTimeLabel')}
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                      {permit.waitingTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 uppercase">
                      {t('workPermit.permitTypes.durationLabel')}
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                      {permit.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Waiting Times Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('workPermit.process.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            {t('workPermit.process.intro')}
          </p>

          <div className="space-y-3 sm:space-y-4">
            {Array.isArray(waitingTimes) && waitingTimes.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-300 last:border-b-0">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">
                  {item.permit}
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-bold text-blue-600">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* General Requirements Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('workPermit.generalRequirements.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-3xl">
            {t('workPermit.generalRequirements.description')}
          </p>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {Array.isArray(generalReqs) && generalReqs.map((req, idx) => (
              <div key={idx} className="border-l-4 border-green-500 pl-6 sm:pl-8 lg:pl-10">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {req.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Services Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('workPermit.support.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-3xl">
            {t('workPermit.support.description')}
          </p>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {Array.isArray(services) && services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-purple-500">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('workPermit.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('workPermit.cta.description')}
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffffff',
              color: '#000000',
              fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' },
              fontWeight: 600,
              px: { xs: 4, sm: 6, lg: 8 },
              py: { xs: 1.2, sm: 1.5, lg: 1.8 },
              borderRadius: '9999px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#f3f4f6',
              },
            }}
          >
            {t('workPermit.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('workPermit.cta.subtext')}
          </p>
        </section>
      </div>
    </div>
  );
}
