'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function BuySellPropertyPage() {
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

  const heroData = t('buySellProperty.hero', { returnObjects: true }) || {};
  const introData = t('buySellProperty.intro', { returnObjects: true }) || {};
  const buyOrSellData = t('buySellProperty.buyOrSell', { returnObjects: true }) || {};
  const shortTermData = t('buySellProperty.shortTermRentals', { returnObjects: true }) || {};
  const longTermData = t('buySellProperty.longTermRentals', { returnObjects: true }) || {};
  const whyChooseData = t('buySellProperty.whyChoose', { returnObjects: true }) || {};
  const digitalPortalData = t('buySellProperty.digitalPortal', { returnObjects: true }) || {};
  const corporateData = t('buySellProperty.corporateHousing', { returnObjects: true }) || {};
  const ctaData = t('buySellProperty.cta', { returnObjects: true }) || {};

  const coverageItems = t('buySellProperty.intro.coverageItems', { returnObjects: true }) || [];
  const supportItems = t('buySellProperty.buyOrSell.supportItems', { returnObjects: true }) || [];
  const suitableFor = t('buySellProperty.shortTermRentals.suitableFor', { returnObjects: true }) || [];
  const longTermItems = t('buySellProperty.longTermRentals.items', { returnObjects: true }) || [];
  const advantages = t('buySellProperty.whyChoose.advantages', { returnObjects: true }) || [];
  const features = t('buySellProperty.digitalPortal.features', { returnObjects: true }) || [];
  const corporateServices = t('buySellProperty.corporateHousing.services', { returnObjects: true }) || [];

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
          {introData.coverageHeading && (
            <>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                {introData.coverageHeading}
              </h3>
              <ul className="space-y-2">
                {Array.isArray(coverageItems) && coverageItems.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* Buy or Sell Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {buyOrSellData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
            {buyOrSellData.subheading}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {buyOrSellData.description}
          </p>
          {buyOrSellData.supportHeading && (
            <>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                {buyOrSellData.supportHeading}
              </h3>
              <ul className="space-y-2">
                {Array.isArray(supportItems) && supportItems.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* Short Term Rentals Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-blue-500 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {shortTermData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
            {shortTermData.subheading}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
            {shortTermData.description}
          </p>
          <ul className="space-y-2 mb-4">
            {Array.isArray(suitableFor) && suitableFor.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          {shortTermData.note && (
            <p className="text-xs sm:text-sm text-gray-600 italic bg-blue-50 p-3 rounded-lg">
              {shortTermData.note}
            </p>
          )}
        </section>

        {/* Long Term Rentals Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-green-500 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {longTermData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
            {longTermData.subheading}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
            {longTermData.intro}
          </p>
          <ul className="space-y-2">
            {Array.isArray(longTermItems) && longTermItems.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Why Choose Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {whyChooseData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
            {whyChooseData.subheading}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {whyChooseData.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(advantages) && advantages.map((adv, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-purple-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Digital Portal Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {digitalPortalData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
            {digitalPortalData.subheading}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
            {digitalPortalData.intro}
          </p>
          <ul className="space-y-2 mb-4">
            {Array.isArray(features) && features.map((feature, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-indigo-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          {digitalPortalData.note && (
            <p className="text-xs sm:text-sm text-gray-600 italic bg-white p-3 rounded-lg">
              {digitalPortalData.note}
            </p>
          )}
        </section>

        {/* Corporate Housing Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {corporateData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
            {corporateData.subheading}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
            {corporateData.intro}
          </p>
          <ul className="space-y-2">
            {Array.isArray(corporateServices) && corporateServices.map((service, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-orange-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('buySellProperty.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('buySellProperty.cta.description')}
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
            {t('buySellProperty.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('buySellProperty.cta.subtext')}
          </p>
        </section>
      </div>
    </div>
  );
}
