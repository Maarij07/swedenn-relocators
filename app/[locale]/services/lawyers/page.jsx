'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function LawyersPage() {
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

  const problems = t('lawyersConnect.whyNeeded.problems', { returnObjects: true }) || [];
  const clientAdvantages = t('lawyersConnect.advantages.forClients.items', { returnObjects: true }) || [];
  const lawyerAdvantages = t('lawyersConnect.advantages.forLawyers.items', { returnObjects: true }) || [];
  const workSteps = t('lawyersConnect.howWorks.steps', { returnObjects: true }) || [];
  const clientReasons = t('lawyersConnect.forClients.reasons', { returnObjects: true }) || [];
  const lawyerBenefits = t('lawyersConnect.forLawyers.benefits', { returnObjects: true }) || [];
  const companiesCapabilities = t('lawyersConnect.forCompanies.capabilities', { returnObjects: true }) || [];
  const importanceBenefits = t('lawyersConnect.importance.benefits', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {t('lawyersConnect.hero.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {t('lawyersConnect.hero.subtitle')}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {t('lawyersConnect.intro.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-3">
            {t('lawyersConnect.intro.description')}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-3">
            {t('lawyersConnect.intro.solution')}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {t('lawyersConnect.intro.closing')}
          </p>
        </section>

        {/* Why Needed Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('lawyersConnect.whyNeeded.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('lawyersConnect.whyNeeded.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {Array.isArray(problems) && problems.map((problem, idx) => (
              <div key={idx} className="bg-red-50 rounded-lg p-4 sm:p-5 border-l-4 border-red-500">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
              {t('lawyersConnect.whyNeeded.solution')}
            </p>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* For Clients */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                {t('lawyersConnect.advantages.forClients.heading')}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {Array.isArray(clientAdvantages) && clientAdvantages.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-blue-500">
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Lawyers */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                {t('lawyersConnect.advantages.forLawyers.heading')}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {Array.isArray(lawyerAdvantages) && lawyerAdvantages.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-green-500">
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How Works Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('lawyersConnect.howWorks.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('lawyersConnect.howWorks.intro')}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(workSteps) && workSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-t-4 border-purple-500"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {step.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* For Clients Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('lawyersConnect.forClients.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(clientReasons) && clientReasons.map((reason) => (
              <div
                key={reason.number}
                className="bg-white rounded-lg p-4 sm:p-5 border-t-4 border-blue-500"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {reason.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* For Lawyers Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('lawyersConnect.forLawyers.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('lawyersConnect.forLawyers.intro')}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {Array.isArray(lawyerBenefits) && lawyerBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-green-500"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-l-4 border-green-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
              {t('lawyersConnect.forLawyers.closing')}
            </p>
          </div>
        </section>

        {/* For Companies Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('lawyersConnect.forCompanies.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('lawyersConnect.forCompanies.intro')}
          </p>
          <div className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-orange-500 mb-6 sm:mb-8">
            <ul className="space-y-3">
              {Array.isArray(companiesCapabilities) && companiesCapabilities.map((capability, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 sm:p-5 border-l-4 border-orange-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
              {t('lawyersConnect.forCompanies.benefit')}
            </p>
          </div>
        </section>

        {/* Importance Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('lawyersConnect.importance.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('lawyersConnect.importance.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {Array.isArray(importanceBenefits) && importanceBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-indigo-500">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 sm:p-5 border-l-4 border-indigo-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
              {t('lawyersConnect.importance.closing')}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('lawyersConnect.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('lawyersConnect.cta.description')}
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
            {t('lawyersConnect.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('lawyersConnect.cta.subtext')}
          </p>
        </section>
      </div>
    </div>
  );
}
