'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function EORPayrollPage() {
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

  const heroData = t('eorPayroll.hero', { returnObjects: true }) || {};
  const introData = t('eorPayroll.intro', { returnObjects: true }) || {};
  const whatIsEORData = t('eorPayroll.whatIsEOR', { returnObjects: true }) || {};
  const whyCompaniesUseData = t('eorPayroll.whyCompaniesUse', { returnObjects: true }) || {};
  const howItWorksData = t('eorPayroll.howItWorks', { returnObjects: true }) || {};
  const payrollProcessData = t('eorPayroll.payrollProcess', { returnObjects: true }) || {};
  const complianceData = t('eorPayroll.complianceAndLegal', { returnObjects: true }) || {};
  const benefitsCompaniesData = t('eorPayroll.benefitsForCompanies', { returnObjects: true }) || {};
  const benefitsEmployeesData = t('eorPayroll.benefitsForEmployees', { returnObjects: true }) || {};
  const whoShouldUseData = t('eorPayroll.whoShouldUse', { returnObjects: true }) || {};
  const whyChooseData = t('eorPayroll.whyChoose', { returnObjects: true }) || {};
  const gettingStartedData = t('eorPayroll.gettingStarted', { returnObjects: true }) || {};
  const conclusionData = t('eorPayroll.conclusion', { returnObjects: true }) || {};
  const ctaData = t('eorPayroll.cta', { returnObjects: true }) || {};

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

      {/* What is EOR */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
          {whatIsEORData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 10, maxWidth: '900px' }}>
          {whatIsEORData.description}
        </Typography>
      </div>

      {/* Why Companies Use EOR */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
            {whyCompaniesUseData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
            {whyCompaniesUseData.intro}
          </Typography>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12 mb-12">
            {Array.isArray(whyCompaniesUseData.challenges) &&
              whyCompaniesUseData.challenges.map((challenge, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                  <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.875rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                    {challenge.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                    {challenge.description}
                  </Typography>
                </div>
              ))}
          </div>

          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, maxWidth: '900px' }}>
            {whyCompaniesUseData.conclusion}
          </Typography>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
          {howItWorksData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
          {howItWorksData.description}
        </Typography>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {Array.isArray(howItWorksData.steps) &&
            howItWorksData.steps.map((step, idx) => (
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

      {/* Payroll Process */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
            {payrollProcessData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
            {payrollProcessData.intro}
          </Typography>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {Array.isArray(payrollProcessData.steps) &&
              payrollProcessData.steps.map((step, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                  <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', lg: '0.875rem', '4k': '1.0625rem' }, color: '#3b82f6', fontWeight: 600, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Step {step.step} - {step.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                    {step.description}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Compliance and Legal */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
          {complianceData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 10, maxWidth: '900px' }}>
          {complianceData.intro}
        </Typography>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10 mb-12">
          {Array.isArray(complianceData.references) &&
            complianceData.references.map((ref, idx) => (
              <div key={idx}>
                <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.25rem', '4k': '1.75rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                  {ref.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                  {ref.description}
                </Typography>
              </div>
            ))}
        </div>

        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, maxWidth: '900px' }}>
          {complianceData.conclusion}
        </Typography>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* For Companies */}
            <div>
              <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 800, mb: 10, color: '#1e293b' }}>
                {benefitsCompaniesData.heading}
              </Typography>
              <div className="space-y-6 sm:space-y-8">
                {Array.isArray(benefitsCompaniesData.benefits) &&
                  benefitsCompaniesData.benefits.map((benefit, idx) => (
                    <div key={idx}>
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

            {/* For Employees */}
            <div>
              <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', lg: '2rem', '4k': '2.75rem' }, fontWeight: 800, mb: 10, color: '#1e293b' }}>
                {benefitsEmployeesData.heading}
              </Typography>
              <div className="space-y-6 sm:space-y-8">
                {Array.isArray(benefitsEmployeesData.benefits) &&
                  benefitsEmployeesData.benefits.map((benefit, idx) => (
                    <div key={idx}>
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
        </div>
      </div>

      {/* Who Should Use */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 3, color: '#1e293b' }}>
          {whoShouldUseData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 12, maxWidth: '900px' }}>
          {whoShouldUseData.intro}
        </Typography>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {Array.isArray(whoShouldUseData.solutions) &&
            whoShouldUseData.solutions.map((solution, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.25rem', '4k': '1.75rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                  {solution.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                  {solution.description}
                </Typography>
              </div>
            ))}
        </div>
      </div>

      {/* Why Choose */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 12, color: '#1e293b' }}>
            {whyChooseData.heading}
          </Typography>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {Array.isArray(whyChooseData.reasons) &&
              whyChooseData.reasons.map((reason, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                  <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.875rem' }, fontWeight: 700, mb: 2, color: '#1e293b' }}>
                    {reason.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.125rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                    {reason.description}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 10, color: '#1e293b' }}>
          {gettingStartedData.heading}
        </Typography>

        <div className="space-y-4 sm:space-y-6">
          {Array.isArray(gettingStartedData.steps) &&
            gettingStartedData.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem', '4k': '1.25rem' }, color: '#ffffff', fontWeight: 700 }}>
                    {idx + 1}
                  </Typography>
                </div>
                <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                  {step}
                </Typography>
              </div>
            ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 800, mb: 4, color: '#1e293b' }}>
            {conclusionData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, maxWidth: '900px' }}>
            {conclusionData.description}
          </Typography>
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
