'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function BusinessPermitPage() {
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

  const heroData = t('businessPermit.hero', { returnObjects: true }) || {};
  const introData = t('businessPermit.intro', { returnObjects: true }) || {};
  const whyChooseSwedenData = t('businessPermit.whyChooseSweden', { returnObjects: true }) || {};
  const advantages = t('businessPermit.whyChooseSweden.advantages', { returnObjects: true }) || [];
  const structures = t('businessPermit.whyChooseSweden.businessStructures.structures', { returnObjects: true }) || [];
  const requirements = t('businessPermit.keyRequirements.requirements', { returnObjects: true }) || [];
  const steps = t('businessPermit.applicationProcess.steps', { returnObjects: true }) || [];
  const businessStructures = t('businessPermit.businessStructuresDetail.structures', { returnObjects: true }) || [];
  const businessAdvantages = t('businessPermit.advantagesOfSwedenBusiness.advantages', { returnObjects: true }) || [];
  const services = t('businessPermit.howWeCanAssist.services', { returnObjects: true }) || [];
  const reasons = t('businessPermit.whyWorkWithUs.reasons', { returnObjects: true }) || [];
  const ctaData = t('businessPermit.cta', { returnObjects: true }) || {};

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
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {introData.description}
          </p>
        </section>

        {/* Why Choose Sweden Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {whyChooseSwedenData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {whyChooseSwedenData.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6">
            {Array.isArray(advantages) && advantages.map((adv, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 sm:p-8">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
              {whyChooseSwedenData.businessStructures.intro}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {Array.isArray(structures) && structures.map((struct, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-6 rounded-lg">
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                    {struct.name}
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                    {struct.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Requirements Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('businessPermit.keyRequirements.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('businessPermit.keyRequirements.intro')}
          </p>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(requirements) && requirements.map((req) => (
              <div key={req.id} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {req.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {req.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('businessPermit.applicationProcess.heading')}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(steps) && steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-purple-500"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm sm:text-base">
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

        {/* Business Structures Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('businessPermit.businessStructuresDetail.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('businessPermit.businessStructuresDetail.intro')}
          </p>
          <div className="space-y-4 sm:space-y-6 mb-6">
            {Array.isArray(businessStructures) && businessStructures.map((struct, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {struct.name}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {struct.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 sm:p-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
              <strong>{t('businessPermit.businessStructuresDetail.note')}</strong>
            </p>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('businessPermit.advantagesOfSwedenBusiness.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('businessPermit.advantagesOfSwedenBusiness.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(businessAdvantages) && businessAdvantages.map((adv, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-green-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Can Assist Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('businessPermit.howWeCanAssist.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('businessPermit.howWeCanAssist.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(services) && services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-orange-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Work with Us Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('businessPermit.whyWorkWithUs.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(reasons) && reasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {reason.description}
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
