'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BusinessPermitPage() {
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

  const requirements = t('businessPermit.keyRequirements.requirements', { returnObjects: true }) || [];
  const advantages = t('businessPermit.whyChooseSweden.advantages', { returnObjects: true }) || [];
  const structures = t('businessPermit.whyChooseSweden.businessStructures.structures', { returnObjects: true }) || [];
  const steps = t('businessPermit.applicationProcess.steps', { returnObjects: true }) || [];
  const businessStructures = t('businessPermit.businessStructuresDetail.structures', { returnObjects: true }) || [];
  const businessAdvantages = t('businessPermit.advantagesOfSwedenBusiness.advantages', { returnObjects: true }) || [];
  const services = t('businessPermit.howWeCanAssist.services', { returnObjects: true }) || [];
  const reasons = t('businessPermit.whyWorkWithUs.reasons', { returnObjects: true }) || [];

  return (
    <Box sx={{ minHeight: '100vh', bg: '#ffffff' }}>
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px]">
        <div className="mb-16 sm:mb-20 lg:mb-32 xl:mb-40">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 4, color: '#1e293b', lineHeight: 1.1 }}>
            {t('businessPermit.hero.title')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 600, mb: 4, color: '#1e293b', lineHeight: 1.4 }}>
            {t('businessPermit.hero.subtitle')}
          </Typography>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', '4k': '2.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('businessPermit.intro.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6, maxWidth: '900px' }}>
            {t('businessPermit.intro.description')}
          </Typography>
        </div>
      </div>

      {/* Why Choose Sweden Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
          {t('businessPermit.whyChooseSweden.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
          {t('businessPermit.whyChooseSweden.intro')}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {Array.isArray(advantages) && advantages.map((adv, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                {adv.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {adv.description}
              </Typography>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 sm:p-10 lg:p-12">
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 6, color: '#1e293b' }}>
            {t('businessPermit.whyChooseSweden.businessStructures.intro')}
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(structures) && structures.map((struct, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 rounded-lg">
                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', lg: '1.125rem', '4k': '1.375rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                  {struct.name}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.6 }}>
                  {struct.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Requirements Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
            {t('businessPermit.keyRequirements.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
            {t('businessPermit.keyRequirements.intro')}
          </Typography>

          <div className="space-y-8">
            {Array.isArray(requirements) && requirements.map((req) => (
              <div key={req.id} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {req.id}. {req.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {req.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('businessPermit.applicationProcess.heading')}
        </Typography>

        <div className="space-y-8">
          {Array.isArray(steps) && steps.map((step) => (
            <div key={step.number} className="border-l-4 border-purple-500 pl-6 sm:pl-8 lg:pl-10">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 text-purple-700 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.number}
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
            </div>
          ))}
        </div>
      </div>

      {/* Business Structures Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
            {t('businessPermit.businessStructuresDetail.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
            {t('businessPermit.businessStructuresDetail.intro')}
          </Typography>

          <div className="space-y-6 mb-8">
            {Array.isArray(businessStructures) && businessStructures.map((struct, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', lg: '1.125rem', '4k': '1.375rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                  {struct.name}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.6 }}>
                  {struct.description}
                </Typography>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#0369a1', lineHeight: 1.6 }}>
              <strong>{t('businessPermit.businessStructuresDetail.note')}</strong>
            </Typography>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
          {t('businessPermit.advantagesOfSwedenBusiness.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
          {t('businessPermit.advantagesOfSwedenBusiness.intro')}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {Array.isArray(businessAdvantages) && businessAdvantages.map((adv, idx) => (
            <div key={idx} className="border-l-4 border-green-500 pl-6 sm:pl-8 lg:pl-10">
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
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
            {t('businessPermit.howWeCanAssist.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
            {t('businessPermit.howWeCanAssist.intro')}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {Array.isArray(services) && services.map((service, idx) => (
              <div key={idx} className="border-l-4 border-orange-500 pl-6 sm:pl-8 lg:pl-10">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {service.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {service.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Work with Us Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('businessPermit.whyWorkWithUs.heading')}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {Array.isArray(reasons) && reasons.map((reason, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                {reason.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {reason.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <div className="bg-white border border-blue-200 rounded-2xl p-8 sm:p-10 lg:p-12 xl:p-16">
            <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.25rem', '4k': '3rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
              {t('businessPermit.cta.heading')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8, maxWidth: '700px' }}>
              {t('businessPermit.cta.description')}
            </Typography>
            <Button sx={{ backgroundColor: '#3b82f6', color: 'white', padding: '12px 28px', fontSize: { xs: '0.9rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, fontWeight: 600, borderRadius: '8px', textTransform: 'none', '&:hover': { backgroundColor: '#2563eb' } }}>
              {t('businessPermit.cta.button')}
            </Button>
            <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.85rem', lg: '0.875rem', '4k': '1rem' }, color: '#9CA3AF', lineHeight: 1.6, mt: 6 }}>
              {t('businessPermit.cta.subtext')}
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
}
