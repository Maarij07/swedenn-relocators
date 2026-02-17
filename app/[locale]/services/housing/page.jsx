'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function HousingPage() {
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

  const forIndividualsServices = t('housing.forIndividuals.services', { returnObjects: true }) || [];
  const forEmployersServices = t('housing.forEmployers.services', { returnObjects: true }) || [];
  const providerSteps = t('housing.forProviders.process.steps', { returnObjects: true }) || [];
  const providerBenefits = t('housing.forProviders.benefits.items', { returnObjects: true }) || [];
  const advantages = t('housing.whyChooseUs.advantages', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {t('housing.hero.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {t('housing.hero.subtitle')}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {t('housing.intro.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            {t('housing.intro.description')}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {t('housing.intro.platform')}
          </p>
        </section>

        {/* For Individuals Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('housing.forIndividuals.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('housing.forIndividuals.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(forIndividualsServices) && forIndividualsServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-3">
                  {service.description}
                </p>
                {Array.isArray(service.features) && service.features.length > 0 && (
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">•</span>
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* For Employers Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('housing.forEmployers.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('housing.forEmployers.intro')}
          </p>
          <div className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-green-500 mb-6 sm:mb-8">
            <ul className="space-y-3">
              {Array.isArray(forEmployersServices) && forEmployersServices.map((service, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-green-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
              {t('housing.forEmployers.ideal')}
            </p>
          </div>
        </section>

        {/* For Providers Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('housing.forProviders.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('housing.forProviders.intro')}
          </p>

          {/* Process Steps */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t('housing.forProviders.process.heading')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {Array.isArray(providerSteps) && providerSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white rounded-lg p-4 sm:p-5 border-t-4 border-purple-500"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                      {step.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-orange-500">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
              {t('housing.forProviders.benefits.heading')}
            </h3>
            <ul className="space-y-3">
              {Array.isArray(providerBenefits) && providerBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('housing.whyChooseUs.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(advantages) && advantages.map((advantage, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 sm:p-6 border-l-4 border-indigo-500"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('housing.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('housing.cta.description')}
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
            {t('housing.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('housing.cta.subtext')}
          </p>
        </section>
      </div>
    </div>
  );
}
