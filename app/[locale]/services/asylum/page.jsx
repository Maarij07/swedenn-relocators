'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AsylumPage() {
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

  const benefits = t('asylum.whyChooseExpert.benefits', { returnObjects: true }) || [];
  const criteria = t('asylum.eligibility.refugeeDefinition.criteria', { returnObjects: true }) || [];
  const steps = t('asylum.applicationProcess.steps', { returnObjects: true }) || [];
  const legalServices = t('asylum.legalRepresentative.services', { returnObjects: true }) || [];
  const familyReunServices = t('asylum.familyReunificationAssistance.services', { returnObjects: true }) || [];
  const additionalServices = t('asylum.additionalSupport.services', { returnObjects: true }) || [];

  return (
    <Box sx={{ minHeight: '100vh', bg: '#ffffff' }}>
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px]">
        <div className="mb-16 sm:mb-20 lg:mb-32 xl:mb-40">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 4, color: '#1e293b', lineHeight: 1.1 }}>
            {t('asylum.hero.title')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 600, mb: 4, color: '#1e293b', lineHeight: 1.4 }}>
            {t('asylum.hero.subtitle')}
          </Typography>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', '4k': '2.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('asylum.intro.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, maxWidth: '900px' }}>
            {t('asylum.intro.description')}
          </Typography>
        </div>
      </div>

      {/* Why Choose Expert Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('asylum.whyChooseExpert.heading')}
        </Typography>
        
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12 }}>
          {t('asylum.whyChooseExpert.description')}
        </Typography>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {Array.isArray(benefits) && benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 hover:shadow-md transition-shadow">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                {benefit.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {benefit.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
            {t('asylum.eligibility.heading')}
          </Typography>

          {/* Who Can Apply */}
          <div className="mb-12 lg:mb-16">
            <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
              {t('asylum.eligibility.whoCanApply.heading')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 4 }}>
              {t('asylum.eligibility.whoCanApply.intro')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
              {t('asylum.eligibility.whoCanApply.description')}
            </Typography>
          </div>

          {/* Refugee Definition */}
          <div>
            <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
              {t('asylum.eligibility.refugeeDefinition.heading')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
              {t('asylum.eligibility.refugeeDefinition.intro')}
            </Typography>

            <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 mb-6 border border-gray-200">
              <ul className="space-y-3">
                {Array.isArray(criteria) && criteria.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-0.5">•</span>
                    <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>

            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 4 }}>
              {t('asylum.eligibility.refugeeDefinition.additionalInfo')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
              {t('asylum.eligibility.refugeeDefinition.outcome')}
            </Typography>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('asylum.applicationProcess.heading')}
        </Typography>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {Array.isArray(steps) && steps.map((step) => (
            <div key={step.step} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
              <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                Step {step.step}: {step.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Representative Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
            {t('asylum.legalRepresentative.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8, fontWeight: 600 }}>
            {t('asylum.legalRepresentative.intro')}
          </Typography>

          <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 border border-gray-200 mb-8">
            <ul className="space-y-4">
              {Array.isArray(legalServices) && legalServices.map((service, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 mt-0.5">•</span>
                  <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                    {service}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {t('asylum.legalRepresentative.additionalSupport')}
          </Typography>
        </div>
      </div>

      {/* Family Reunification Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
          {t('asylum.familyReunification.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
          {t('asylum.familyReunification.subheading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12 }}>
          {t('asylum.familyReunification.description')}
        </Typography>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* Family Eligibility Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
              {t('asylum.familyReunification.whoCanApply.heading')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8, mb: 4 }}>
              {t('asylum.familyReunification.whoCanApply.intro')}
            </Typography>
            <ul className="space-y-2">
              {['A permanent residence permit', 'A temporary residence permit as a refugee, with reasonable chances of a long-term extension', 'A temporary residence permit based on impediments to return or distressing circumstances, with the likelihood of obtaining a long-term extension'].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2 mt-0.5 text-sm">•</span>
                  <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.6 }}>
                    {t(`asylum.familyReunification.whoCanApply.eligibilityTypes.${idx}`)}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* EU/EEA Citizens Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
              {t('asylum.familyReunification.euEeaCitizens.heading')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
              {t('asylum.familyReunification.euEeaCitizens.description')}
            </Typography>
          </div>

          {/* Temporary Permit Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
              {t('asylum.familyReunification.temporaryPermit.heading')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8, mb: 4 }}>
              {t('asylum.familyReunification.temporaryPermit.description')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8, mb: 4 }}>
              {t('asylum.familyReunification.temporaryPermit.familyMembers')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
              {t('asylum.familyReunification.temporaryPermit.maintenance')}
            </Typography>
          </div>
        </div>
      </div>

      {/* Family Reunification Assistance Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
            {t('asylum.familyReunificationAssistance.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12 }}>
            {t('asylum.familyReunificationAssistance.description')}
          </Typography>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.isArray(familyReunServices) && familyReunServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200">
                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {service.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {service.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Support Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
          {t('asylum.additionalSupport.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12 }}>
          {t('asylum.additionalSupport.intro')}
        </Typography>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {Array.isArray(additionalServices) && additionalServices.map((service, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                {service.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {service.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black/85">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#ffffff' }}>
            {t('asylum.cta.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#e5e7eb', lineHeight: 1.8, mb: 8, maxWidth: '600px' }}>
            {t('asylum.cta.description')}
          </Typography>
          <Button sx={{ backgroundColor: '#ffffff', color: '#374151', fontWeight: 700, px: { xs: 6, sm: 8, lg: 10 }, py: { xs: 1.5, sm: 2, lg: 2.5 }, fontSize: { xs: '0.9rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, borderRadius: '50px', textTransform: 'none', '&:hover': { backgroundColor: '#f3f4f6' } }}>
            {t('asylum.cta.button')}
          </Button>
          <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#d1d5db', lineHeight: 1.8, mt: 6 }}>
            {t('asylum.cta.subtext')}
          </Typography>
        </div>
      </div>
    </Box>
  );
}
