'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function GlobalVisitVisasPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(i18n.isInitialized);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.on('initialized', () => setIsReady(true));
    } else {
      setIsReady(true);
    }
  }, [i18n]);

  if (!isReady) {
    return null;
  }

  const heroData = t('globalVisitVisas.hero', { returnObjects: true }) || {};
  const introData = t('globalVisitVisas.intro', { returnObjects: true }) || {};
  const ctaData = t('globalVisitVisas.cta', { returnObjects: true }) || {};

  const services = t('globalVisitVisas.services.services', { returnObjects: true }) || [];
  const visas = t('globalVisitVisas.categories.visas', { returnObjects: true }) || [];
  const purposes = t('globalVisitVisas.purposes.purposes', { returnObjects: true }) || [];
  const steps = t('globalVisitVisas.process.steps', { returnObjects: true }) || [];
  const faqs = t('globalVisitVisas.faq.faqs', { returnObjects: true }) || [];
  const benefits = t('globalVisitVisas.whyChoose.benefits', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {heroData.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {heroData.subtitle}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {introData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            {introData.description}
          </p>
          {introData.toolLink && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-lg">
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                {introData.toolLink}
              </p>
            </div>
          )}
        </section>

        {/* Services Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('globalVisitVisas.services.heading')}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(services) && services.map((service, idx) => (
              <div key={service.id} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                  {idx + 1}. {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>
                {Array.isArray(service.requirements) && (
                  <div className="space-y-2">
                    {service.requirements.map((req, i) => (
                      <div key={i}>
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">{req.label}</p>
                        <p className="text-xs sm:text-sm text-gray-700">{req.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t('globalVisitVisas.categories.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {t('globalVisitVisas.categories.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {Array.isArray(visas) && visas.map((visa, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-blue-500">
                <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">{visa}</p>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700">
            {t('globalVisitVisas.categories.additional')}
          </p>
        </section>

        {/* Purposes Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('globalVisitVisas.purposes.heading')}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(purposes) && purposes.map((purpose) => (
              <div key={purpose.id} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {purpose.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {purpose.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('globalVisitVisas.process.heading')}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(steps) && steps.map((step) => (
              <div key={step.number} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {step.number}. {step.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('globalVisitVisas.faq.heading')}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(faqs) && faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-purple-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('globalVisitVisas.whyChoose.heading')}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(benefits) && benefits.map((benefit) => (
              <div key={benefit.id} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-orange-500">
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

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {ctaData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {ctaData.description}
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
            {ctaData.button}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {ctaData.subtext}
          </p>
        </section>
      </div>
    </div>
  );
}
