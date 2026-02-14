'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CBIBBIPage() {
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

  const heroData = t('cbiBbi.hero', { returnObjects: true }) || {};
  const introData = t('cbiBbi.intro', { returnObjects: true }) || {};
  const understandingData = t('cbiBbi.understanding', { returnObjects: true }) || {};
  const countryProgramsData = t('cbiBbi.countryPrograms', { returnObjects: true }) || {};
  const caribbeanData = t('cbiBbi.caribbean', { returnObjects: true }) || {};
  const europeanData = t('cbiBbi.european', { returnObjects: true }) || {};
  const middleEastData = t('cbiBbi.middleEastGlobal', { returnObjects: true }) || {};
  const howWeAssistData = t('cbiBbi.howWeAssist', { returnObjects: true }) || {};
  const whoShouldData = t('cbiBbi.whoShould', { returnObjects: true }) || {};
  const getStartedData = t('cbiBbi.getStarted', { returnObjects: true }) || {};

  const definitions = Array.isArray(understandingData.definitions) ? understandingData.definitions : [];
  const caribbeanCountries = Array.isArray(caribbeanData.countries) ? caribbeanData.countries : [];
  const europeanCountries = Array.isArray(europeanData.countries) ? europeanData.countries : [];
  const middleEastCountries = Array.isArray(middleEastData.countries) ? middleEastData.countries : [];
  const steps = Array.isArray(howWeAssistData.steps) ? howWeAssistData.steps : [];
  const reasons = Array.isArray(whoShouldData.reasons) ? whoShouldData.reasons : [];

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
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
            {introData.description}
          </Typography>
        </div>
      </div>

      {/* Understanding CBI and RBI Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {understandingData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {understandingData.intro}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {definitions.map((def, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                {def.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {def.description}
              </Typography>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {understandingData.benefits}
          </Typography>
        </div>
      </div>

      {/* Country Programs Intro */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {countryProgramsData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
          {countryProgramsData.intro}
        </Typography>
      </div>

      {/* Caribbean Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {caribbeanData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {caribbeanData.intro}
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caribbeanCountries.map((country, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                {country.name}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#3B82F6', fontWeight: 600, mb: 4 }}>
                {country.type}
              </Typography>

              <div className="mb-4">
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                  Investment Options:
                </Typography>
                {country.investmentOptions?.map((opt, i) => (
                  <Typography key={i} sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#6B7280', mb: 1 }}>
                    •&nbsp;{opt}
                  </Typography>
                ))}
              </div>

              <div className="mb-4">
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                  Family Members:
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#6B7280' }}>
                  {country.familyMembers}
                </Typography>
              </div>

              <div>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                  Benefits:
                </Typography>
                {country.benefits?.map((benefit, i) => (
                  <Typography key={i} sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#6B7280', mb: 1 }}>
                    •&nbsp;{benefit}
                  </Typography>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* European Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {europeanData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {europeanData.intro}
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {europeanCountries.map((country, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                {country.name}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#3B82F6', fontWeight: 600, mb: 4 }}>
                {country.type}
              </Typography>

              <div className="mb-4">
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                  Investment Options:
                </Typography>
                {country.investmentOptions?.map((opt, i) => (
                  <Typography key={i} sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#6B7280', mb: 1 }}>
                    •&nbsp;{opt}
                  </Typography>
                ))}
              </div>

              <div className="mb-4">
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                  Family Members:
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#6B7280' }}>
                  {country.familyMembers}
                </Typography>
              </div>

              <div>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                  Benefits:
                </Typography>
                {country.benefits?.map((benefit, i) => (
                  <Typography key={i} sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#6B7280', mb: 1 }}>
                    •&nbsp;{benefit}
                  </Typography>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle East and Global Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {middleEastData.heading}
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {middleEastCountries.map((country, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                {country.name}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#3B82F6', fontWeight: 600, mb: 4 }}>
                {country.type}
              </Typography>

              <div className="mb-4">
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                  Investment Options:
                </Typography>
                {country.investmentOptions?.map((opt, i) => (
                  <Typography key={i} sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#6B7280', mb: 1 }}>
                    •&nbsp;{opt}
                  </Typography>
                ))}
              </div>

              <div className="mb-4">
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                  Family Members:
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#6B7280' }}>
                  {country.familyMembers}
                </Typography>
              </div>

              <div>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                  Benefits:
                </Typography>
                {country.benefits?.map((benefit, i) => (
                  <Typography key={i} sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.95rem', '4k': '1rem' }, color: '#6B7280', mb: 1 }}>
                    •&nbsp;{benefit}
                  </Typography>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How We Assist Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {howWeAssistData.heading}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
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

      {/* Who Should Consider Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {whoShouldData.heading}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                <span className="text-blue-600 font-bold mr-2">•</span>{reason}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Get Started Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl p-8 sm:p-10 lg:p-12 4k:p-16 text-white">
          <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 6, color: 'white' }}>
            {getStartedData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, lineHeight: 1.8, color: 'rgba(255,255,255,0.95)' }}>
            {getStartedData.description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
