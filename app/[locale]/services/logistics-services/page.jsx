'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function LogisticsServicesPage() {
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

  const services = t('logisticsServices.services.services', { returnObjects: true }) || [];
  const benefits = t('logisticsServices.whyChoose.benefits', { returnObjects: true }) || [];
  const steps = t('logisticsServices.process.steps', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {t('logisticsServices.hero.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {t('logisticsServices.hero.subtitle')}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {t('logisticsServices.intro.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            {t('logisticsServices.intro.description')}
          </p>
          <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
              {t('logisticsServices.intro.toolLink')}
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('logisticsServices.services.heading')}
          </h2>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {Array.isArray(services) && services.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-blue-500"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>

                <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                  {t('logisticsServices.services.requirementsLabel')}
                </p>
                <div className="space-y-3">
                  {Array.isArray(service.requirements) && service.requirements.map((req, i) => (
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
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('logisticsServices.whyChoose.heading')}
          </h2>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(benefits) && benefits.map((benefit) => (
              <div key={benefit.id} className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-green-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('logisticsServices.process.heading')}
          </h2>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {Array.isArray(steps) && steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-purple-500"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {step.number}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('logisticsServices.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('logisticsServices.cta.description')}
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
            {t('logisticsServices.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('logisticsServices.cta.subtext')}
          </p>
        </section>
      </div>
    </div>
  );
}
