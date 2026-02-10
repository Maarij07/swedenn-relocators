'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function EUCitizensRelocationPage() {
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

  const heroData = t('euCitizensRelocation.hero', { returnObjects: true }) || {};
  const introData = t('euCitizensRelocation.intro', { returnObjects: true }) || {};
  const whatIsData = t('euCitizensRelocation.whatIs', { returnObjects: true }) || {};
  const immediateFamily = t('euCitizensRelocation.immediateFamily', { returnObjects: true }) || [];
  const extendedFamilyData = t('euCitizensRelocation.extendedFamily', { returnObjects: true }) || {};
  const longTermPermitRequirements = t('euCitizensRelocation.longTermPermitRequirements', { returnObjects: true }) || [];
  const residenceCardData = t('euCitizensRelocation.residenceCard', { returnObjects: true }) || {};
  const personnummerData = t('euCitizensRelocation.personnummer', { returnObjects: true }) || {};
  const healthcareData = t('euCitizensRelocation.healthcare', { returnObjects: true }) || {};
  const educationData = t('euCitizensRelocation.education', { returnObjects: true }) || {};
  const bankAccountsData = t('euCitizensRelocation.bankAccounts', { returnObjects: true }) || {};
  const languageData = t('euCitizensRelocation.language', { returnObjects: true }) || {};
  const applicationProcess = t('euCitizensRelocation.applicationProcess', { returnObjects: true }) || [];
  const servicesData = t('euCitizensRelocation.services', { returnObjects: true }) || {};
  const whySweden = t('euCitizensRelocation.whySweden', { returnObjects: true }) || [];
  const ctaData = t('euCitizensRelocation.cta', { returnObjects: true }) || {};

  return (
    <Box sx={{ minHeight: '100vh', bg: '#ffffff' }}>
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px]">
        <div className="mb-16 sm:mb-20 lg:mb-32 xl:mb-40">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 4, color: '#1e293b', lineHeight: 1.1 }}>
            {heroData.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 600, mb: 4, color: '#1e293b', lineHeight: 1.4 }}>
            {heroData.subtitle}
          </Typography>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', '4k': '2.5rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {introData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6, maxWidth: '900px' }}>
            {introData.description}
          </Typography>
          <Box sx={{ backgroundColor: '#E0F2FE', border: '1px solid #BAE6FD', borderRadius: '8px', p: { xs: 4, sm: 5, lg: 6, '4k': 8 } }}>
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#0369a1', lineHeight: 1.8 }}>
              {introData.infoBox}
            </Typography>
          </Box>
        </div>
      </div>

      {/* What is EU Family Reunification */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
          {whatIsData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 10, maxWidth: '900px' }}>
          {whatIsData.description}
        </Typography>
      </div>

      {/* Immediate Family Members */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
            {t('euCitizensRelocation.immediateFamilyHeading')}
          </Typography>
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {Array.isArray(immediateFamily) &&
              immediateFamily.map((member, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                  <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.875rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                    {member.type}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                    {member.description}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Extended Family */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
          {extendedFamilyData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 10, maxWidth: '900px' }}>
          {extendedFamilyData.description}
        </Typography>
      </div>

      {/* Long-Term EU Residence */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 10, color: '#1e293b' }}>
            {t('euCitizensRelocation.longTermPermitHeading')}
          </Typography>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {Array.isArray(longTermPermitRequirements) &&
              longTermPermitRequirements.map((req, idx) => (
                <div key={idx}>
                  <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.25rem', '4k': '1.75rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                    {idx + 1}. {req}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Residence Card */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
          {residenceCardData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6, maxWidth: '900px' }}>
          {residenceCardData.intro}
        </Typography>

        <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', lg: '0.875rem', '4k': '1.0625rem' }, color: '#3b82f6', fontWeight: 600, mb: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {residenceCardData.documentsLabel}
        </Typography>
        <div className="space-y-3 mb-6">
          {Array.isArray(residenceCardData.documents) &&
            residenceCardData.documents.map((doc, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.6 }}>
                  {doc}
                </Typography>
              </div>
            ))}
        </div>

        <Box sx={{ backgroundColor: '#E0F2FE', border: '1px solid #BAE6FD', borderRadius: '8px', p: { xs: 3, sm: 4, lg: 5, '4k': 6 } }}>
          <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#0369a1', lineHeight: 1.8 }}>
            {residenceCardData.note}
          </Typography>
        </Box>
      </div>

      {/* Personnummer */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
            {personnummerData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6, maxWidth: '900px' }}>
            {personnummerData.intro}
          </Typography>

          <div className="space-y-3">
            {Array.isArray(personnummerData.uses) &&
              personnummerData.uses.map((use, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.6 }}>
                    {use}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Healthcare */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
          {healthcareData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 10, maxWidth: '900px' }}>
          {healthcareData.description}
        </Typography>
      </div>

      {/* Education */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
            {educationData.heading}
          </Typography>
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {Array.isArray(educationData.programs) &&
              educationData.programs.map((program, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                  <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
                    {program.name}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                    {program.description}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Bank Accounts */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
          {bankAccountsData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6, maxWidth: '900px' }}>
          {bankAccountsData.intro}
        </Typography>

        <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', lg: '0.875rem', '4k': '1.0625rem' }, color: '#3b82f6', fontWeight: 600, mb: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {bankAccountsData.documentsLabel}
        </Typography>
        <div className="space-y-3 mb-6">
          {Array.isArray(bankAccountsData.documents) &&
            bankAccountsData.documents.map((doc, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.6 }}>
                  {doc}
                </Typography>
              </div>
            ))}
        </div>

        <Box sx={{ backgroundColor: '#E0F2FE', border: '1px solid #BAE6FD', borderRadius: '8px', p: { xs: 3, sm: 4, lg: 5, '4k': 6 } }}>
          <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#0369a1', lineHeight: 1.8 }}>
            {bankAccountsData.note}
          </Typography>
        </Box>
      </div>

      {/* Language & Integration */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
            {languageData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 10, maxWidth: '900px' }}>
            {languageData.description}
          </Typography>
        </div>
      </div>

      {/* Application Process */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          Application Process Step by Step
        </Typography>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {Array.isArray(applicationProcess) &&
            applicationProcess.map((step, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', lg: '0.875rem', '4k': '1.0625rem' }, color: '#3b82f6', fontWeight: 600, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Step {step.step}
                </Typography>
                <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.25rem', '4k': '1.75rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                  {step.description}
                </Typography>
              </div>
            ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 10, color: '#1e293b' }}>
            {servicesData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 10, maxWidth: '900px' }}>
            {servicesData.description}
          </Typography>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {Array.isArray(servicesData.servicesList) &&
              servicesData.servicesList.map((service, idx) => (
                <div key={idx}>
                  <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.25rem', '4k': '1.75rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                    {idx + 1}. {service.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                    {service.description}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Why Sweden */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
          Why Choose Sweden for Family Reunification?
        </Typography>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {Array.isArray(whySweden) &&
            whySweden.map((item, idx) => (
              <div key={idx}>
                <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.25rem', '4k': '1.75rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                  {idx + 1}. {item.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                  {item.description}
                </Typography>
              </div>
            ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-2xl p-8 sm:p-10 lg:p-14 xl:p-16 4k:p-24 text-center">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.25rem', '4k': '3rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
            {ctaData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', mb: 8, maxWidth: '700px', mx: 'auto', lineHeight: 1.8 }}>
            {ctaData.description}
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
            {ctaData.button}
          </Button>
          <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '1rem', '4k': '1.125rem' }, color: '#9CA3AF', mt: 4 }}>
            {ctaData.subtext}
          </Typography>
        </div>
      </div>
    </Box>
  );
}
