'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function PetRelocationPage() {
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

  const heroData = t('petRelocation.hero', { returnObjects: true }) || {};
  const introData = t('petRelocation.intro', { returnObjects: true }) || {};
  const whyChooseData = t('petRelocation.whyChoose', { returnObjects: true }) || {};
  const servicesData = t('petRelocation.services', { returnObjects: true }) || {};
  const countryReqData = t('petRelocation.countryRequirements', { returnObjects: true }) || {};
  const processData = t('petRelocation.process', { returnObjects: true }) || {};
  const ctaData = t('petRelocation.cta', { returnObjects: true }) || {};

  const reasons = t('petRelocation.whyChoose.reasons', { returnObjects: true }) || [];
  const categories = t('petRelocation.services.categories', { returnObjects: true }) || [];
  const regions = t('petRelocation.countryRequirements.regions', { returnObjects: true }) || [];
  const steps = t('petRelocation.process.steps', { returnObjects: true }) || [];

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
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {introData.description}
          </p>
        </section>

        {/* Why Choose Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {whyChooseData.heading}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(reasons) && reasons.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Cover Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {servicesData.heading}
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {Array.isArray(categories) && categories.map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {Array.isArray(section.items) && section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-xs sm:text-sm lg:text-base text-gray-700">
                      <span className="text-green-600 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Country-Specific Requirements */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {countryReqData.heading}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(regions) && regions.map((region, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-purple-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                  {region.title}
                </h3>
                <ul className="space-y-2">
                  {Array.isArray(region.items) && region.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-xs sm:text-sm lg:text-base text-gray-700">
                      <span className="text-purple-600 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How Our Process Works */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {processData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(steps) && steps.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {item.step}
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {item.description}
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
