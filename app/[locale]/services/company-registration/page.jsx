'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function CompanyRegistrationPage() {
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

  const heroData = t('companyRegistration.hero', { returnObjects: true }) || {};
  const introData = t('companyRegistration.intro', { returnObjects: true }) || {};
  const whyImportantData = t('companyRegistration.whyImportant', { returnObjects: true }) || {};
  const companyTypesData = t('companyRegistration.companyTypes', { returnObjects: true }) || {};
  const registrationProcessData = t('companyRegistration.registrationProcess', { returnObjects: true }) || {};
  const howWeHelpData = t('companyRegistration.howWeHelp', { returnObjects: true }) || {};
  const whyChooseUsData = t('companyRegistration.whyChooseUs', { returnObjects: true }) || {};
  const ctaData = t('companyRegistration.cta', { returnObjects: true }) || {};

  const whyImportantReasons = t('companyRegistration.whyImportant.reasons', { returnObjects: true }) || [];
  const companyTypes = t('companyRegistration.companyTypes.types', { returnObjects: true }) || [];
  const registrationSteps = t('companyRegistration.registrationProcess.steps', { returnObjects: true }) || [];
  const helpServices = t('companyRegistration.howWeHelp.services', { returnObjects: true }) || [];
  const whyChooseUsReasons = t('companyRegistration.whyChooseUs.reasons', { returnObjects: true }) || [];

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

        {/* Why Important Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {whyImportantData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(whyImportantReasons) && whyImportantReasons.map((reason) => (
              <div key={reason.number} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {reason.number}
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Types Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {companyTypesData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {companyTypesData.intro}
          </p>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {Array.isArray(companyTypes) && companyTypes.map((company) => (
              <div key={company.number} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-blue-500">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                  {company.number}. {company.name}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
                  {company.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">Advantages</h4>
                    <ul className="space-y-2">
                      {Array.isArray(company.advantages) && company.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                          <span className="text-xs sm:text-sm lg:text-base text-gray-700">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">Disadvantages</h4>
                    <ul className="space-y-2">
                      {Array.isArray(company.disadvantages) && company.disadvantages.map((dis, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span>
                          <span className="text-xs sm:text-sm lg:text-base text-gray-700">{dis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-lg">
                  <p className="text-xs sm:text-sm lg:text-base text-gray-900">
                    <strong>When to Register:</strong> {company.when}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Process Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {registrationProcessData.heading}
          </h2>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {Array.isArray(registrationSteps) && registrationSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {step.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    {step.details && (
                      <ul className="space-y-2">
                        {Array.isArray(step.details) && step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                            <span className="text-xs sm:text-sm lg:text-base text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Help Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {howWeHelpData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {howWeHelpData.intro}
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-6 sm:mb-8">
            {howWeHelpData.subheading}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(helpServices) && helpServices.map((service) => (
              <div key={service.number} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {service.number}
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {whyChooseUsData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(whyChooseUsReasons) && whyChooseUsReasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-green-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
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
