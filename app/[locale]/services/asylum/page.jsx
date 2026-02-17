'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

export default function AsylumPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
      return;
    }

    const handleInit = () => setIsReady(true);
    i18n.on('initialized', handleInit);
    return () => i18n.off('initialized', handleInit);
  }, [i18n]);

  if (!isReady) {
    return null;
  }

  const heroData = t('asylum.hero', { returnObjects: true }) || {};
  const introData = t('asylum.intro', { returnObjects: true }) || {};
  const whyChooseData = t('asylum.whyChooseExpert', { returnObjects: true }) || {};
  const benefits = t('asylum.whyChooseExpert.benefits', { returnObjects: true }) || [];
  const eligibilityData = t('asylum.eligibility', { returnObjects: true }) || {};
  const criteria = t('asylum.eligibility.refugeeDefinition.criteria', { returnObjects: true }) || [];
  const steps = t('asylum.applicationProcess.steps', { returnObjects: true }) || [];
  const legalData = t('asylum.legalRepresentative', { returnObjects: true }) || {};
  const legalServices = t('asylum.legalRepresentative.services', { returnObjects: true }) || [];
  const familyReunData = t('asylum.familyReunification', { returnObjects: true }) || {};
  const eligibilityTypes = t('asylum.familyReunification.whoCanApply.eligibilityTypes', { returnObjects: true }) || [];
  const familyReunServices = t('asylum.familyReunificationAssistance.services', { returnObjects: true }) || [];
  const additionalServices = t('asylum.additionalSupport.services', { returnObjects: true }) || [];
  const ctaData = t('asylum.cta', { returnObjects: true }) || {};

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
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

        {/* Why Choose Expert Section */}
        <section className="bg-blue-50 rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12 border border-blue-100">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {whyChooseData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {whyChooseData.description}
          </p>
        </section>

        {/* Benefits Cards */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(benefits) && benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500 hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {eligibilityData.heading}
          </h2>
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {t('asylum.eligibility.whoCanApply.heading')}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-2">
                {t('asylum.eligibility.whoCanApply.intro')}
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                {t('asylum.eligibility.whoCanApply.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-green-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {t('asylum.eligibility.refugeeDefinition.heading')}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-3">
                {t('asylum.eligibility.refugeeDefinition.intro')}
              </p>
              <ul className="space-y-2 mb-3">
                {Array.isArray(criteria) && criteria.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm lg:text-base text-gray-600">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                {t('asylum.eligibility.refugeeDefinition.additionalInfo')}
              </p>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('asylum.applicationProcess.heading')}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(steps) && steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-blue-500"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {step.step}
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

        {/* Legal Representative */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {legalData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {legalData.intro}
          </p>
          <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500 mb-6">
            <ul className="space-y-2 sm:space-y-3">
              {Array.isArray(legalServices) && legalServices.map((service, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-gray-700">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
            {legalData.additionalSupport}
          </p>
        </section>

        {/* Family Reunification */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {familyReunData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-600 font-semibold mb-3 sm:mb-4">
            {familyReunData.subheading}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {familyReunData.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {t('asylum.familyReunification.whoCanApply.heading')}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-3">
                {t('asylum.familyReunification.whoCanApply.intro')}
              </p>
              <ul className="space-y-2">
                {Array.isArray(eligibilityTypes) && eligibilityTypes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm lg:text-base text-gray-600">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-green-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {t('asylum.familyReunification.euEeaCitizens.heading')}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                {t('asylum.familyReunification.euEeaCitizens.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-purple-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {t('asylum.familyReunification.temporaryPermit.heading')}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-2">
                {t('asylum.familyReunification.temporaryPermit.description')}
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-2">
                {t('asylum.familyReunification.temporaryPermit.familyMembers')}
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                {t('asylum.familyReunification.temporaryPermit.maintenance')}
              </p>
            </div>
          </div>
        </section>

        {/* Family Reunification Assistance */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('asylum.familyReunificationAssistance.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('asylum.familyReunificationAssistance.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(familyReunServices) && familyReunServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500 hover:shadow-md transition-shadow"
              >
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

        {/* Additional Support */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('asylum.additionalSupport.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('asylum.additionalSupport.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(additionalServices) && additionalServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-green-500 hover:shadow-md transition-shadow"
              >
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

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('asylum.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('asylum.cta.description')}
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
            {t('asylum.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('asylum.cta.subtext')}
          </p>
        </section>
      </div>
    </main>
  );
}
