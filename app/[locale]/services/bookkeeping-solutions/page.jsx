'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function BookkeepingSolutionsPage() {
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

  const heroData = t('bookkeepingSolutions.hero', { returnObjects: true }) || {};
  const introData = t('bookkeepingSolutions.intro', { returnObjects: true }) || {};
  const whyMattersData = t('bookkeepingSolutions.whyMatters', { returnObjects: true }) || {};
  const howWorksData = t('bookkeepingSolutions.howWorks', { returnObjects: true }) || {};
  const servicesData = t('bookkeepingSolutions.servicesIncluded', { returnObjects: true }) || {};
  const whyChooseUsData = t('bookkeepingSolutions.whyChooseUs', { returnObjects: true }) || {};
  const forCompaniesData = t('bookkeepingSolutions.forCompanies', { returnObjects: true }) || {};
  const forIndividualsData = t('bookkeepingSolutions.forIndividuals', { returnObjects: true }) || {};
  const legalReferencesData = t('bookkeepingSolutions.legalReferences', { returnObjects: true }) || {};
  const getStartedData = t('bookkeepingSolutions.getStarted', { returnObjects: true }) || {};
  const contactData = t('bookkeepingSolutions.contact', { returnObjects: true }) || {};
  const ctaData = t('bookkeepingSolutions.cta', { returnObjects: true }) || {};

  const whyRisks = Array.isArray(whyMattersData.risks) ? whyMattersData.risks : [];
  const workSteps = Array.isArray(howWorksData.steps) ? howWorksData.steps : [];
  const services = Array.isArray(servicesData.services) ? servicesData.services : [];
  const advantages = Array.isArray(whyChooseUsData.advantages) ? whyChooseUsData.advantages : [];
  const companyMarkets = Array.isArray(forCompaniesData.targetMarkets) ? forCompaniesData.targetMarkets : [];
  const companyCapabilities = Array.isArray(forCompaniesData.capabilities_items) ? forCompaniesData.capabilities_items : [];
  const individualServices = Array.isArray(forIndividualsData.services) ? forIndividualsData.services : [];
  const references = Array.isArray(legalReferencesData.references) ? legalReferencesData.references : [];
  const getStartedSteps = Array.isArray(getStartedData.steps) ? getStartedData.steps : [];

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
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {introData.commitment}
          </p>
        </section>

        {/* Why Matters Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {whyMattersData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {whyMattersData.description}
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 sm:p-8 mb-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-red-900 mb-4">
              Risks of Non-Compliance
            </h3>
            <ul className="space-y-3">
              {whyRisks.map((risk, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">•</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                    {risk}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
              {whyMattersData.closing}
            </p>
          </div>
        </section>

        {/* How Works Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {howWorksData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {howWorksData.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {workSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {step.number}
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Included Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {servicesData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {servicesData.intro}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-green-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-4">
                  <span className="text-blue-600 font-bold mr-2">{service.number}.</span>
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {Array.isArray(service.items) && service.items.map((item, iidx) => (
                    <li key={iidx} className="flex gap-2">
                      <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
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
            {advantages.map((advantage, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-purple-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* For Companies Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {forCompaniesData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {forCompaniesData.intro}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6">
            {companyMarkets.map((market, idx) => (
              <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {market}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-blue-500">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
              {forCompaniesData.capabilities}
            </h3>
            <ul className="space-y-3">
              {companyCapabilities.map((capability, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                    {capability}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* For Individuals Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {forIndividualsData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {forIndividualsData.intro}
          </p>
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-blue-500 mb-6">
            <ul className="space-y-3">
              {individualServices.map((service, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                    {service}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
              {forIndividualsData.closing}
            </p>
          </div>
        </section>

        {/* Legal References Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {legalReferencesData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {legalReferencesData.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {references.map((reference, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {reference}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Get Started Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {getStartedData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {getStartedSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {step.number}
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
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
            {t('bookkeepingSolutions.contact.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('bookkeepingSolutions.contact.description')}
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
            Get Started
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('bookkeepingSolutions.contact.cta')}
          </p>
        </section>
      </div>
    </div>
  );
}
