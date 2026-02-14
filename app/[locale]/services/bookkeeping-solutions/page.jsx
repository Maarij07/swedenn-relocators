'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    return <div>Loading...</div>;
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
    <div className="min-h-screen bg-[#F8F9FE]">
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-12 sm:pb-16 lg:pb-20">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 3, color: '#1e293b', lineHeight: 1.1 }}>
          {heroData.title}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem', lg: '1.625rem', '4k': '2rem' }, color: '#3B82F6', fontWeight: 600 }}>
          {heroData.subtitle}
        </Typography>
      </div>

      {/* Intro Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 4k:p-12 shadow-sm">
          <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 6, color: '#1e293b' }}>
            {introData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
            {introData.description}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {introData.commitment}
          </Typography>
        </div>
      </div>

      {/* Why Matters Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {whyMattersData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {whyMattersData.description}
        </Typography>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 sm:p-8 lg:p-10 4k:p-12 mb-8">
          <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 6, color: '#991b1b' }}>
            Risks of Non-Compliance
          </Typography>
          <ul className="space-y-4">
            {whyRisks.map((risk, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="flex-shrink-0 text-red-500 font-bold text-lg">•</span>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280' }}>
                  {risk}
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 4k:p-12">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {whyMattersData.closing}
          </Typography>
        </div>
      </div>

      {/* How Works Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {howWorksData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {howWorksData.intro}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workSteps.map((step, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 4k:w-14 4k:h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                  <Typography sx={{ fontSize: { xs: '1.25rem', lg: '1.5rem', '4k': '1.75rem' }, fontWeight: 700, color: 'white' }}>
                    {step.number}
                  </Typography>
                </div>
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, color: '#1e293b', lineHeight: 1.3 }}>
                  {step.title}
                </Typography>
              </div>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {step.details}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Services Included Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {servicesData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {servicesData.intro}
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 6, color: '#1e293b' }}>
                <span className="text-blue-600 font-bold mr-3">{service.number}.</span>
                {service.title}
              </Typography>
              <ul className="space-y-3">
                {Array.isArray(service.items) && service.items.map((item, iidx) => (
                  <li key={iidx} className="flex gap-3">
                    <span className="flex-shrink-0 text-blue-500 font-bold">•</span>
                    <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280' }}>
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {whyChooseUsData.heading}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 4k:p-12">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                {advantage.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {advantage.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* For Companies Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {forCompaniesData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {forCompaniesData.intro}
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {companyMarkets.map((market, idx) => (
            <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#1e293b', lineHeight: 1.8 }}>
                {market}
              </Typography>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 4k:p-12">
          <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 6, color: '#1e293b' }}>
            {forCompaniesData.capabilities}
          </Typography>
          <ul className="space-y-4">
            {companyCapabilities.map((capability, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="flex-shrink-0 text-green-500 font-bold text-lg">✓</span>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280' }}>
                  {capability}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* For Individuals Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {forIndividualsData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
          {forIndividualsData.intro}
        </Typography>

        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 4k:p-12 mb-6">
          <ul className="space-y-4">
            {individualServices.map((service, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="flex-shrink-0 text-blue-500 font-bold text-lg">•</span>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280' }}>
                  {service}
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10 4k:p-12">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {forIndividualsData.closing}
          </Typography>
        </div>
      </div>

      {/* Legal References Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {legalReferencesData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
          {legalReferencesData.intro}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {references.map((reference, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {reference}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Get Started Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {getStartedData.heading}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getStartedSteps.map((step, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 4k:w-16 4k:h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                  <Typography sx={{ fontSize: { xs: '1.5rem', lg: '1.75rem', '4k': '2rem' }, fontWeight: 700, color: 'white' }}>
                    {step.number}
                  </Typography>
                </div>
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, color: '#1e293b' }}>
                  {step.title}
                </Typography>
              </div>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl p-8 sm:p-10 lg:p-12 4k:p-16 text-white">
          <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 4, color: 'white' }}>
            {contactData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, lineHeight: 1.8, mb: 6, color: 'rgba(255,255,255,0.95)' }}>
            {contactData.description}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, lineHeight: 1.8, color: 'rgba(255,255,255,0.95)' }}>
            {contactData.cta}
          </Typography>
        </div>
      </div>
    </div>
  );
}
