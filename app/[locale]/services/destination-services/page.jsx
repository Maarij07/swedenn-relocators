'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function DestinationServicesPage() {
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

  const coreServices = t('destinationServices.coreServices.services', { returnObjects: true }) || [];
  const corporateServices = t('destinationServices.corporateServices.services', { returnObjects: true }) || [];
  const relocationStages = t('destinationServices.relocationJourney.stages', { returnObjects: true }) || [];
  const advantages = t('destinationServices.whyChooseUs.advantages', { returnObjects: true }) || [];

  return (
    <Box sx={{ minHeight: '100vh', bg: '#ffffff' }}>
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px]">
        <div className="mb-16 sm:mb-20 lg:mb-32 xl:mb-40">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 4, color: '#1e293b', lineHeight: 1.1 }}>
            {t('destinationServices.hero.title')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 600, mb: 4, color: '#1e293b', lineHeight: 1.4 }}>
            {t('destinationServices.hero.subtitle')}
          </Typography>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', '4k': '2.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('destinationServices.intro.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
            {t('destinationServices.intro.description')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {t('destinationServices.intro.capabilities')}
          </Typography>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('destinationServices.coreServices.heading')}
        </Typography>

        <div className="space-y-8">
          {Array.isArray(coreServices) && coreServices.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 6, color: '#1e293b' }}>
                {idx + 1}. {service.title}
              </Typography>
              <ul className="space-y-4">
                {Array.isArray(service.details) && service.details.map((detail, didx) => (
                  <li key={didx} className="flex gap-4">
                    <span className="flex-shrink-0 text-blue-600 font-bold">•</span>
                    <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                      {detail}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Services Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
            {t('destinationServices.corporateServices.heading')}
          </Typography>

          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
            {t('destinationServices.corporateServices.intro')}
          </Typography>

          <ul className="space-y-4 mb-8">
            {Array.isArray(corporateServices) && corporateServices.map((service, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="flex-shrink-0 text-blue-600 font-bold">•</span>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {service}
                </Typography>
              </li>
            ))}
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 lg:p-10">
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
              {t('destinationServices.corporateServices.benefit')}
            </Typography>
          </div>
        </div>
      </div>

      {/* Relocation Journey Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('destinationServices.relocationJourney.heading')}
        </Typography>

        <div className="space-y-6">
          {Array.isArray(relocationStages) && relocationStages.map((stage, idx) => (
            <div key={idx} className="flex gap-6 sm:gap-8">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg sm:text-xl">
                  {idx + 1}
                </div>
              </div>
              <div className="flex-1">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {stage.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {stage.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
            {t('destinationServices.whyChooseUs.heading')}
          </Typography>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(advantages) && advantages.map((advantage, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {advantage.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {advantage.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
          {t('destinationServices.contact.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, maxWidth: '900px' }}>
          {t('destinationServices.contact.description')}
        </Typography>
      </div>
    </Box>
  );
}

