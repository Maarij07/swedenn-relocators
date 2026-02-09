'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function StudyInEuPage() {
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

  const countries = t('studyInEu.countries', { returnObjects: true }) || [];
  const services = t('studyInEu.whyChoose.services', { returnObjects: true }) || [];

  return (
    <Box sx={{ minHeight: '100vh', bg: '#ffffff' }}>
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px]">
        <div className="mb-16 sm:mb-20 lg:mb-32 xl:mb-40">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 4, color: '#1e293b', lineHeight: 1.1 }}>
            {t('studyInEu.hero.title')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 600, mb: 4, color: '#1e293b', lineHeight: 1.4 }}>
            {t('studyInEu.hero.subtitle')}
          </Typography>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', '4k': '2.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('studyInEu.intro.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6, maxWidth: '900px' }}>
            {t('studyInEu.intro.description')}
          </Typography>
        </div>
      </div>

      {/* Countries Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {Array.isArray(countries) && countries.map((country) => (
            <div key={country.id} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
              {/* Country Title */}
              <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
                {country.name}
              </Typography>

              {/* Country Intro */}
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
                {country.intro}
              </Typography>

              {/* Tuition Fees */}
              <div className="mb-8">
                <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                  {country.tuitionFees.heading}
                </Typography>
                <div className="space-y-3 mb-6">
                  {Array.isArray(country.tuitionFees.fees) && country.tuitionFees.fees.map((fee, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, fontWeight: 600, color: '#1e293b', minWidth: '250px' }}>
                        {fee.category}
                      </Typography>
                      <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280' }}>
                        {fee.amount}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admission Intakes */}
              <div className="mb-8">
                <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                  {country.admissionIntakes.heading}
                </Typography>
                <div className="space-y-3 mb-6">
                  {Array.isArray(country.admissionIntakes.intakes) && country.admissionIntakes.intakes.map((intake, idx) => (
                    <div key={idx}>
                      <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, fontWeight: 600, color: '#1e293b', mb: 1 }}>
                        {intake.period}
                      </Typography>
                      <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.6 }}>
                        {intake.details}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Fields */}
              <div className="mb-8">
                <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.875rem', lg: '0.9375rem', '4k': '1.125rem' }, color: '#3b82f6', fontWeight: 600, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Popular Fields
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {country.popularFields}
                </Typography>
              </div>

              {/* Visa Requirements */}
              <div className="mb-8">
                <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                  {country.visaRequirements.heading}
                </Typography>
                <div className="space-y-2 mb-6">
                  {Array.isArray(country.visaRequirements.requirements) && country.visaRequirements.requirements.map((req, idx) => (
                    <Typography key={idx} sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.6, display: 'flex', gap: 2 }}>
                      <span style={{ color: '#3b82f6', fontWeight: 600, minWidth: '20px' }}>•</span>
                      <span>{req}</span>
                    </Typography>
                  ))}
                </div>
              </div>

              {/* Work Rights */}
              {country.workRights && (
                <div className="mb-8 p-4 sm:p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.875rem', lg: '0.9375rem', '4k': '1.125rem' }, color: '#3b82f6', fontWeight: 600, mb: 2, textTransform: 'uppercase' }}>
                    Work Rights
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#1e293b', lineHeight: 1.8 }}>
                    {country.workRights}
                  </Typography>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
            {t('studyInEu.whyChoose.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
            {t('studyInEu.whyChoose.description')}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {Array.isArray(services) && services.map((service, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
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

      {/* CTA Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 sm:p-10 lg:p-12 xl:p-16">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.25rem', '4k': '3rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
            {t('studyInEu.cta.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8, maxWidth: '700px' }}>
            {t('studyInEu.cta.description')}
          </Typography>
          <Button sx={{ backgroundColor: '#3b82f6', color: 'white', padding: '12px 28px', fontSize: { xs: '0.9rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, fontWeight: 600, borderRadius: '8px', textTransform: 'none', '&:hover': { backgroundColor: '#2563eb' } }}>
            {t('studyInEu.cta.button')}
          </Button>
          <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.85rem', lg: '0.875rem', '4k': '1rem' }, color: '#9CA3AF', lineHeight: 1.6, mt: 6 }}>
            {t('studyInEu.cta.subtext')}
          </Typography>
        </div>
      </div>
    </Box>
  );
}
