'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ManpowerSolutionsPage() {
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

  const companyFeatures = t('manpowerSolutions.forCompanies.features', { returnObjects: true }) || [];
  const jobSeekerFeatures = t('manpowerSolutions.forJobSeekers.features', { returnObjects: true }) || [];
  const whyReasons = t('manpowerSolutions.whyMatters.reasons', { returnObjects: true }) || [];
  const processSteps = t('manpowerSolutions.process.steps', { returnObjects: true }) || [];
  const advantages = t('manpowerSolutions.whyChooseUs.advantages', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {t('manpowerSolutions.hero.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {t('manpowerSolutions.hero.subtitle')}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {t('manpowerSolutions.intro.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {t('manpowerSolutions.intro.description')}
          </p>
        </section>

        {/* For Companies Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('manpowerSolutions.forCompanies.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('manpowerSolutions.forCompanies.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {Array.isArray(companyFeatures) && companyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
              {t('manpowerSolutions.forCompanies.closing')}
            </p>
          </div>
        </section>

        {/* For Job Seekers Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('manpowerSolutions.forJobSeekers.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('manpowerSolutions.forJobSeekers.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {Array.isArray(jobSeekerFeatures) && jobSeekerFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-green-500"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-l-4 border-green-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
              {t('manpowerSolutions.forJobSeekers.closing')}
            </p>
          </div>
        </section>

        {/* Why Matters Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('manpowerSolutions.whyMatters.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('manpowerSolutions.whyMatters.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {Array.isArray(whyReasons) && whyReasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-purple-500">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 rounded-lg p-4 sm:p-5 border-l-4 border-purple-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
              {t('manpowerSolutions.whyMatters.closing')}
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('manpowerSolutions.process.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(processSteps) && processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-lg p-4 sm:p-5 border-t-4 border-blue-500"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {step.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('manpowerSolutions.whyChooseUs.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(advantages) && advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-orange-500"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-3">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('manpowerSolutions.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('manpowerSolutions.cta.description')}
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
            {t('manpowerSolutions.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('manpowerSolutions.cta.subtext')}
          </p>
        </section>
      </div>
    </div>
  );
}
