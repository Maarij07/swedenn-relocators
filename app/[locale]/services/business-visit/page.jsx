'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BusinessVisitPage() {
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

  const benefits = t('businessVisit.whyYouNeedVisa.benefits', { returnObjects: true }) || [];
  const basicReqs = t('businessVisit.basicRequirements.requirements', { returnObjects: true }) || [];
  const employerReqs = t('businessVisit.employerRequirements.requirements', { returnObjects: true }) || [];
  const additionalDocs = t('businessVisit.additionalDocuments.documents', { returnObjects: true }) || [];
  const assistanceServices = t('businessVisit.howWeAssist.services', { returnObjects: true }) || [];

  return (
    <Box sx={{ minHeight: '100vh', bg: '#ffffff' }}>
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px]">
        <div className="mb-16 sm:mb-20 lg:mb-32 xl:mb-40">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 4, color: '#1e293b', lineHeight: 1.1 }}>
            {t('businessVisit.hero.title')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 600, mb: 4, color: '#1e293b', lineHeight: 1.4 }}>
            {t('businessVisit.hero.subtitle')}
          </Typography>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', '4k': '2.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('businessVisit.intro.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {t('businessVisit.intro.description')}
          </Typography>
        </div>
      </div>

      {/* Why You Need Visa Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
          {t('businessVisit.whyYouNeedVisa.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {t('businessVisit.whyYouNeedVisa.intro')}
        </Typography>

        <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 6, color: '#1e293b' }}>
          {t('businessVisit.whyYouNeedVisa.subheading')}
        </Typography>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {Array.isArray(benefits) && benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                {benefit.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {benefit.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Basic Requirements Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
            {t('businessVisit.basicRequirements.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12 }}>
            {t('businessVisit.basicRequirements.intro')}
          </Typography>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {Array.isArray(basicReqs) && basicReqs.map((req) => (
              <div key={req.number} className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200">
                <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {req.number}. {req.title}
                </Typography>
                {req.description && (
                  <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 4 }}>
                    {req.description}
                  </Typography>
                )}
                {req.details && (
                  <ul className="space-y-2">
                    {Array.isArray(req.details) && req.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 font-bold mr-3 mt-0.5">•</span>
                        <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                          {detail}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Employer Requirements Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
          {t('businessVisit.employerRequirements.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {t('businessVisit.employerRequirements.intro')}
        </Typography>

        <div className="space-y-6">
          {Array.isArray(employerReqs) && employerReqs.map((req, idx) => (
            <div key={idx} className="bg-white border-l-4 border-blue-500 rounded-lg p-6 sm:p-8">
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                {req.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {req.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Documents Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
            {t('businessVisit.additionalDocuments.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
            {t('businessVisit.additionalDocuments.intro')}
          </Typography>

          <div className="space-y-6">
            {Array.isArray(additionalDocs) && additionalDocs.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                  {doc.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {doc.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Foreign Investors Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
          {t('businessVisit.foreignInvestors.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
          {t('businessVisit.foreignInvestors.description')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
          {t('businessVisit.foreignInvestors.additional')}
        </Typography>
      </div>

      {/* How We Assist Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
            {t('businessVisit.howWeAssist.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12 }}>
            {t('businessVisit.howWeAssist.intro')}
          </Typography>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {Array.isArray(assistanceServices) && assistanceServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200">
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                  {service.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {service.description}
                </Typography>
              </div>
            ))}
          </div>

          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mt: 12 }}>
            {t('businessVisit.closing.description')}
          </Typography>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black/85">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#ffffff' }}>
            {t('businessVisit.cta.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#e5e7eb', lineHeight: 1.8, mb: 8, maxWidth: '600px' }}>
            {t('businessVisit.cta.description')}
          </Typography>
          <Button sx={{ backgroundColor: '#ffffff', color: '#374151', fontWeight: 700, px: { xs: 6, sm: 8, lg: 10 }, py: { xs: 1.5, sm: 2, lg: 2.5 }, fontSize: { xs: '0.9rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, borderRadius: '50px', textTransform: 'none', '&:hover': { backgroundColor: '#f3f4f6' } }}>
            {t('businessVisit.cta.button')}
          </Button>
          <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#d1d5db', lineHeight: 1.8, mt: 6 }}>
            {t('businessVisit.cta.subtext')}
          </Typography>
        </div>
      </div>
    </Box>
  );
}
