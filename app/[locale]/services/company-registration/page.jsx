'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function CompanyRegistrationPage() {
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

  const whyImportantReasons = t('companyRegistration.whyImportant.reasons', { returnObjects: true }) || [];
  const companyTypes = t('companyRegistration.companyTypes.types', { returnObjects: true }) || [];
  const registrationSteps = t('companyRegistration.registrationProcess.steps', { returnObjects: true }) || [];
  const helpServices = t('companyRegistration.howWeHelp.services', { returnObjects: true }) || [];
  const whyChooseUsReasons = t('companyRegistration.whyChooseUs.reasons', { returnObjects: true }) || [];

  return (
    <Box sx={{ minHeight: '100vh', bg: '#ffffff' }}>
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px]">
        <div className="mb-16 sm:mb-20 lg:mb-32 xl:mb-40">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 4, color: '#1e293b', lineHeight: 1.1 }}>
            {t('companyRegistration.hero.title')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 600, mb: 4, color: '#1e293b', lineHeight: 1.4 }}>
            {t('companyRegistration.hero.subtitle')}
          </Typography>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', '4k': '2.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('companyRegistration.intro.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {t('companyRegistration.intro.description')}
          </Typography>
        </div>
      </div>

      {/* Why Important Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('companyRegistration.whyImportant.heading')}
        </Typography>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Array.isArray(whyImportantReasons) && whyImportantReasons.map((reason) => (
            <div key={reason.number} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold">
                    {reason.number}
                  </div>
                </div>
                <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, color: '#1e293b', ml: 4 }}>
                  {reason.title}
                </Typography>
              </div>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {reason.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Company Types Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
            {t('companyRegistration.companyTypes.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12 }}>
            {t('companyRegistration.companyTypes.intro')}
          </Typography>

          <div className="space-y-10 lg:space-y-12">
            {Array.isArray(companyTypes) && companyTypes.map((company) => (
              <div key={company.number} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 sm:px-8 py-6">
                  <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, color: '#1e293b' }}>
                    {company.number}. {company.name}
                  </Typography>
                </div>
                <div className="p-6 sm:p-8">
                  <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
                    {company.description}
                  </Typography>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                        Advantages
                      </Typography>
                      <ul className="space-y-2">
                        {Array.isArray(company.advantages) && company.advantages.map((adv, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 font-bold mr-3 mt-0.5">✓</span>
                            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                              {adv}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                        Disadvantages
                      </Typography>
                      <ul className="space-y-2">
                        {Array.isArray(company.disadvantages) && company.disadvantages.map((dis, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-600 font-bold mr-3 mt-0.5">✕</span>
                            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                              {dis}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#1e293b', lineHeight: 1.8 }}>
                      <strong>When to Register:</strong> {company.when}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Process Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('companyRegistration.registrationProcess.heading')}
        </Typography>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {Array.isArray(registrationSteps) && registrationSteps.map((step) => (
            <div key={step.step} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
              <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                Step {step.step}: {step.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 4 }}>
                {step.description}
              </Typography>
              {step.details && (
                <ul className="space-y-2">
                  {Array.isArray(step.details) && step.details.map((detail, idx) => (
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

      {/* How We Help Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 6, color: '#1e293b' }}>
            {t('companyRegistration.howWeHelp.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
            {t('companyRegistration.howWeHelp.intro')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, mb: 12, color: '#1e293b' }}>
            {t('companyRegistration.howWeHelp.subheading')}
          </Typography>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.isArray(helpServices) && helpServices.map((service) => (
              <div key={service.number} className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold">
                      {service.number}
                    </div>
                  </div>
                  <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.75rem' }, fontWeight: 700, color: '#1e293b', ml: 3 }}>
                    {service.title}
                  </Typography>
                </div>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {service.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          {t('companyRegistration.whyChooseUs.heading')}
        </Typography>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {Array.isArray(whyChooseUsReasons) && whyChooseUsReasons.map((reason, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
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
      <div className="bg-black/85">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#ffffff' }}>
            {t('companyRegistration.cta.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#e5e7eb', lineHeight: 1.8, mb: 8, maxWidth: '600px' }}>
            {t('companyRegistration.cta.description')}
          </Typography>
          <Button sx={{ backgroundColor: '#ffffff', color: '#374151', fontWeight: 700, px: { xs: 6, sm: 8, lg: 10 }, py: { xs: 1.5, sm: 2, lg: 2.5 }, fontSize: { xs: '0.9rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, borderRadius: '50px', textTransform: 'none', '&:hover': { backgroundColor: '#f3f4f6' } }}>
            {t('companyRegistration.cta.button')}
          </Button>
          <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '0.9375rem', '4k': '1.0625rem' }, color: '#d1d5db', lineHeight: 1.8, mt: 6 }}>
            {t('companyRegistration.cta.subtext')}
          </Typography>
        </div>
      </div>
    </Box>
  );
}
