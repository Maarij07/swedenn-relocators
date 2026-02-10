'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function LogisticsServicesPage() {
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

  const services = t('logisticsServices.services.services', { returnObjects: true }) || [];
  const benefits = t('logisticsServices.whyChoose.benefits', { returnObjects: true }) || [];
  const steps = t('logisticsServices.process.steps', { returnObjects: true }) || [];

  return (
    <Box sx={{ minHeight: '100vh', bg: '#ffffff' }}>
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px]">
        <div className="mb-16 sm:mb-20 lg:mb-32 xl:mb-40">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 4, color: '#1e293b', lineHeight: 1.1 }}>
            {t('logisticsServices.hero.title')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 600, mb: 4, color: '#1e293b', lineHeight: 1.4 }}>
            {t('logisticsServices.hero.subtitle')}
          </Typography>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', '4k': '2.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('logisticsServices.intro.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6, maxWidth: '900px' }}>
            {t('logisticsServices.intro.description')}
          </Typography>
          <Box sx={{ backgroundColor: '#E0F2FE', border: '1px solid #BAE6FD', borderRadius: '8px', p: { xs: 4, sm: 5, lg: 6, '4k': 8 } }}>
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#0369a1', lineHeight: 1.8 }}>
              {t('logisticsServices.intro.toolLink')}
            </Typography>
          </Box>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('logisticsServices.services.heading')}
        </Typography>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {Array.isArray(services) && services.map((service, idx) => (
            <div key={service.id} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
              <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                {idx + 1}. {service.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 4 }}>
                {service.description}
              </Typography>

              <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.875rem', lg: '0.9375rem', '4k': '1.125rem' }, color: '#3b82f6', fontWeight: 600, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t('logisticsServices.services.requirementsLabel')}
              </Typography>
              <div className="space-y-2">
                {Array.isArray(service.requirements) && service.requirements.map((req, i) => (
                  <div key={i}>
                    <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, fontWeight: 600, color: '#1e293b', mb: 1 }}>
                      {req.label}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.6 }}>
                      {req.description}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 10, color: '#1e293b' }}>
            {t('logisticsServices.whyChoose.heading')}
          </Typography>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {Array.isArray(benefits) && benefits.map((benefit) => (
              <div key={benefit.id}>
                <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.25rem', '4k': '1.75rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                  {benefit.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                  {benefit.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('logisticsServices.process.heading')}
        </Typography>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {Array.isArray(steps) && steps.map((step) => (
            <div key={step.number} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
              <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                {step.number}. {step.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-2xl p-8 sm:p-10 lg:p-14 xl:p-16 4k:p-24 text-center">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.25rem', '4k': '3rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
            {t('logisticsServices.cta.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', mb: 8, maxWidth: '700px', mx: 'auto', lineHeight: 1.8 }}>
            {t('logisticsServices.cta.description')}
          </Typography>
          <Button
            sx={{
              px: { xs: 6, sm: 8, lg: 10, '4k': 14 },
              py: { xs: 3, sm: 3.5, lg: 4, '4k': 6 },
              fontSize: { xs: '1rem', sm: '1.0625rem', lg: '1.125rem', '4k': '1.5rem' },
              fontWeight: 600,
              textTransform: 'none',
              background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
              color: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(31, 41, 55, 0.2)',
              '&:hover': {
                background: 'linear-gradient(135deg, #111827 0%, #000000 100%)',
                boxShadow: '0 6px 16px rgba(31, 41, 55, 0.3)'
              }
            }}
          >
            {t('logisticsServices.cta.button')}
          </Button>
          <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '1rem', '4k': '1.125rem' }, color: '#9CA3AF', mt: 4 }}>
            {t('logisticsServices.cta.subtext')}
          </Typography>
        </div>
      </div>
    </Box>
  );
}
