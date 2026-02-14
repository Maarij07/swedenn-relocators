'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SelfEmployedPage() {
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

  const advantages = t('selfEmployed.whyChooseSweden.advantages', { returnObjects: true }) || [];
  const requirements = t('selfEmployed.keyRequirements.requirements', { returnObjects: true }) || [];
  const steps = t('selfEmployed.applicationProcess.steps', { returnObjects: true }) || [];
  const businessTypes = t('selfEmployed.businessStructures.types', { returnObjects: true }) || [];
  const businessAdvantages = t('selfEmployed.advantages.items', { returnObjects: true }) || [];
  const services = t('selfEmployed.howWeCanAssist.services', { returnObjects: true }) || [];
  const whyUs = t('selfEmployed.whyWorkWithUs.advantages', { returnObjects: true }) || [];

  return (
    <Box sx={{ minHeight: '100vh', bg: '#ffffff' }}>
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px]">
        <div className="mb-16 sm:mb-20 lg:mb-32 xl:mb-40">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 4, color: '#1e293b', lineHeight: 1.1 }}>
            {t('selfEmployed.hero.title')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 600, mb: 4, color: '#1e293b', lineHeight: 1.4 }}>
            {t('selfEmployed.hero.subtitle')}
          </Typography>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', '4k': '2.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('selfEmployed.intro.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, maxWidth: '900px' }}>
            {t('selfEmployed.intro.description')}
          </Typography>
        </div>
      </div>

      {/* Why Choose Sweden Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
          {t('selfEmployed.whyChooseSweden.heading')}
        </Typography>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {Array.isArray(advantages) && advantages.map((advantage, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 hover:shadow-md transition-shadow">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                {advantage.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {advantage.description}
              </Typography>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10">
          <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('selfEmployed.whyChooseSweden.businessStructures.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {t('selfEmployed.whyChooseSweden.businessStructures.description')}
          </Typography>
        </div>
      </div>

      {/* Key Requirements Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
            {t('selfEmployed.keyRequirements.heading')}
          </Typography>

          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
            {t('selfEmployed.keyRequirements.intro')}
          </Typography>

          <div className="grid md:grid-cols-1 gap-6">
            {Array.isArray(requirements) && requirements.map((req, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {idx + 1}. {req.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {req.details}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('selfEmployed.applicationProcess.heading')}
        </Typography>

        <div className="space-y-6">
          {Array.isArray(steps) && steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 sm:gap-8">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg sm:text-xl">
                  {idx + 1}
                </div>
              </div>
              <div className="flex-1">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {step.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Structures Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
            {t('selfEmployed.businessStructures.heading')}
          </Typography>

          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
            {t('selfEmployed.businessStructures.intro')}
          </Typography>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {Array.isArray(businessTypes) && businessTypes.map((type, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {type.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {type.description}
                </Typography>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 sm:p-8 lg:p-10">
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
              {t('selfEmployed.businessStructures.nota')}
            </Typography>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
          {t('selfEmployed.advantages.heading')}
        </Typography>

        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {t('selfEmployed.advantages.description')}
        </Typography>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {Array.isArray(businessAdvantages) && businessAdvantages.map((adv, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 hover:shadow-md transition-shadow">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                {adv.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {adv.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* How We Can Assist Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
            {t('selfEmployed.howWeCanAssist.heading')}
          </Typography>

          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12 }}>
            {t('selfEmployed.howWeCanAssist.intro')}
          </Typography>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {Array.isArray(services) && services.map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {service.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {service.description}
                </Typography>
              </div>
            ))}
          </div>

          {/* Why Work With Us */}
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.25rem', '4k': '3rem' }, fontWeight: 800, mb: 8, color: '#1e293b' }}>
            {t('selfEmployed.whyWorkWithUs.heading')}
          </Typography>

          <div className="grid md:grid-cols-3 gap-6">
            {Array.isArray(whyUs) && whyUs.map((item, idx) => (
              <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
          {t('selfEmployed.contact.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, maxWidth: '900px' }}>
          {t('selfEmployed.contact.description')}
        </Typography>
      </div>
    </Box>
  );
}

