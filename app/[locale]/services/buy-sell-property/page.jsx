'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    return <div>Loading...</div>;
  }

  const heroData = t('buySellProperty.hero', { returnObjects: true }) || {};
  const introData = t('buySellProperty.intro', { returnObjects: true }) || {};
  const buyOrSellData = t('buySellProperty.buyOrSell', { returnObjects: true }) || {};
  const shortTermData = t('buySellProperty.shortTermRentals', { returnObjects: true }) || {};
  const longTermData = t('buySellProperty.longTermRentals', { returnObjects: true }) || {};
  const whyChooseData = t('buySellProperty.whyChoose', { returnObjects: true }) || {};
  const portalData = t('buySellProperty.digitalPortal', { returnObjects: true }) || {};
  const corporateData = t('buySellProperty.corporateHousing', { returnObjects: true }) || {};
  const getStartedData = t('buySellProperty.getStarted', { returnObjects: true }) || {};

  const coverageItems = Array.isArray(introData.coverageItems) ? introData.coverageItems : [];
  const buyOrSellItems = Array.isArray(buyOrSellData.supportItems) ? buyOrSellData.supportItems : [];
  const shortTermItems = Array.isArray(shortTermData.suitableFor) ? shortTermData.suitableFor : [];
  const longTermItems = Array.isArray(longTermData.items) ? longTermData.items : [];
  const advantages = Array.isArray(whyChooseData.advantages) ? whyChooseData.advantages : [];
  const portalFeatures = Array.isArray(portalData.features) ? portalData.features : [];
  const corporateServices = Array.isArray(corporateData.services) ? corporateData.services : [];

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
          <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
            {introData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem', lg: '1.25rem', '4k': '1.375rem' }, color: '#3B82F6', fontWeight: 600, mb: 6 }}>
            {introData.subheading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8, whiteSpace: 'pre-wrap' }}>
            {introData.description}
          </Typography>

          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, fontWeight: 700, color: '#1e293b', mb: 4 }}>
            {introData.coverageHeading}
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {coverageItems.map((item, idx) => (
              <Typography key={idx} sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280' }}>
                <span className="text-blue-600 font-bold mr-2">•</span>{item}
              </Typography>
            ))}
          </div>
        </div>
      </div>

      {/* Buy or Sell Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
          {buyOrSellData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem', lg: '1.25rem', '4k': '1.375rem' }, color: '#3B82F6', fontWeight: 600, mb: 6 }}>
          {buyOrSellData.subheading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {buyOrSellData.description}
        </Typography>

        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, fontWeight: 700, color: '#1e293b', mb: 6 }}>
          {buyOrSellData.supportHeading}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {buyOrSellItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                <span className="text-blue-600 font-bold mr-2">•</span>{item}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Short Term Rentals Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
          {shortTermData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem', lg: '1.25rem', '4k': '1.375rem' }, color: '#3B82F6', fontWeight: 600, mb: 6 }}>
          {shortTermData.subheading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {shortTermData.description}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {shortTermItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                <span className="text-blue-600 font-bold mr-2">•</span>{item}
              </Typography>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {shortTermData.note}
          </Typography>
        </div>
      </div>

      {/* Long Term Rentals Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
          {longTermData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem', lg: '1.25rem', '4k': '1.375rem' }, color: '#3B82F6', fontWeight: 600, mb: 6 }}>
          {longTermData.subheading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
          {longTermData.intro}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {longTermItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                <span className="text-blue-600 font-bold mr-2">•</span>{item}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
          {whyChooseData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem', lg: '1.25rem', '4k': '1.375rem' }, color: '#3B82F6', fontWeight: 600, mb: 3 }}>
          {whyChooseData.subheading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {whyChooseData.intro}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                {adv.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {adv.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Portal Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
          {portalData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem', lg: '1.25rem', '4k': '1.375rem' }, color: '#3B82F6', fontWeight: 600, mb: 6 }}>
          {portalData.subheading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
          {portalData.intro}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {portalFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                <span className="text-blue-600 font-bold mr-2">•</span>{feature}
              </Typography>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {portalData.note}
          </Typography>
        </div>
      </div>

      {/* Corporate Housing Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
          {corporateData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem', lg: '1.25rem', '4k': '1.375rem' }, color: '#3B82F6', fontWeight: 600, mb: 6 }}>
          {corporateData.subheading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
          {corporateData.intro}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {corporateServices.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                <span className="text-blue-600 font-bold mr-2">•</span>{service}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Get Started Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl p-8 sm:p-10 lg:p-12 4k:p-16 text-white">
          <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 2, color: 'white' }}>
            {getStartedData.heading}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: 'rgba(255,255,255,0.95)' }}>
                • {getStartedData.primaryCTA}
              </Typography>
            </div>
            <div>
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: 'rgba(255,255,255,0.95)' }}>
                • {getStartedData.secondaryCTA}
              </Typography>
            </div>
          </div>

          <div className="border-t border-blue-300 pt-8">
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, lineHeight: 1.8, color: 'rgba(255,255,255,0.95)' }}>
              {getStartedData.description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
