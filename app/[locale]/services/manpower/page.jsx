'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ManpowerPage() {
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

  const heroData = t('manpowerSolutions.hero', { returnObjects: true }) || {};
  const introData = t('manpowerSolutions.intro', { returnObjects: true }) || {};
  const forCompaniesData = t('manpowerSolutions.forCompanies', { returnObjects: true }) || {};
  const forJobSeekersData = t('manpowerSolutions.forJobSeekers', { returnObjects: true }) || {};
  const whyMattersData = t('manpowerSolutions.whyMatters', { returnObjects: true }) || {};
  const processData = t('manpowerSolutions.process', { returnObjects: true }) || {};
  const whyChooseUsData = t('manpowerSolutions.whyChooseUs', { returnObjects: true }) || {};
  const nextStepsData = t('manpowerSolutions.nextSteps', { returnObjects: true }) || {};

  const companyFeatures = Array.isArray(forCompaniesData.features) ? forCompaniesData.features : [];
  const jobSeekerFeatures = Array.isArray(forJobSeekersData.features) ? forJobSeekersData.features : [];
  const whyReasons = Array.isArray(whyMattersData.reasons) ? whyMattersData.reasons : [];
  const processSteps = Array.isArray(processData.steps) ? processData.steps : [];
  const advantages = Array.isArray(whyChooseUsData.advantages) ? whyChooseUsData.advantages : [];

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
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {introData.description}
          </Typography>
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
          {companyFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                {feature.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {feature.description}
              </Typography>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {forCompaniesData.closing}
          </Typography>
        </div>
      </div>

      {/* For Job Seekers Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {forJobSeekersData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {forJobSeekersData.intro}
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {jobSeekerFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                {feature.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {feature.description}
              </Typography>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {forJobSeekersData.closing}
          </Typography>
        </div>
      </div>

      {/* Why Matters Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {whyMattersData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {whyMattersData.intro}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {whyReasons.map((reason, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                <span className="text-blue-600 font-bold mr-2">•</span>{reason}
              </Typography>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {whyMattersData.closing}
          </Typography>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {processData.heading}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
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

      {/* Why Choose Us Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {whyChooseUsData.heading}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 4k:p-12">
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

      {/* Next Steps Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl p-8 sm:p-10 lg:p-12 4k:p-16 text-white">
          <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: 'white' }}>
            {nextStepsData.heading}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: 'white' }}>
                For Companies:
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, lineHeight: 1.8, color: 'rgba(255,255,255,0.95)' }}>
                {nextStepsData.forCompanies}
              </Typography>
            </div>
            <div>
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: 'white' }}>
                For Job Seekers:
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, lineHeight: 1.8, color: 'rgba(255,255,255,0.95)' }}>
                {nextStepsData.forJobSeekers}
              </Typography>
            </div>
          </div>

          <div className="border-t border-blue-300 pt-8">
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, lineHeight: 1.8, color: 'rgba(255,255,255,0.95)' }}>
              {nextStepsData.closing}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
