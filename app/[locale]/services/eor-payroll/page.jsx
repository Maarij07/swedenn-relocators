'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
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
    return null;
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
  const ctaData = t('eorPayroll.cta', { returnObjects: true }) || {};

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {heroData.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {heroData.subtitle}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {introData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            {introData.description}
          </p>
          {introData.infoBox && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-lg">
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                {introData.infoBox}
              </p>
            </div>
          )}
        </section>

        {/* What is EOR Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {whatIsEORData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {whatIsEORData.description}
          </p>
        </section>

        {/* Why Companies Use EOR Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {whyCompaniesUseData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {whyCompaniesUseData.intro}
          </p>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-6">
            {Array.isArray(whyCompaniesUseData.challenges) && whyCompaniesUseData.challenges.map((challenge, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
          {whyCompaniesUseData.conclusion && (
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              {whyCompaniesUseData.conclusion}
            </p>
          )}
        </section>

        {/* How It Works Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {howItWorksData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {howItWorksData.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(howItWorksData.steps) && howItWorksData.steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {step.step}
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Payroll Process Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {payrollProcessData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {payrollProcessData.intro}
          </p>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(payrollProcessData.steps) && payrollProcessData.steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  Step {step.step}: {step.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance and Legal Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {complianceData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {complianceData.intro}
          </p>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-6">
            {Array.isArray(complianceData.references) && complianceData.references.map((ref, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {ref.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {ref.description}
                </p>
              </div>
            ))}
          </div>
          {complianceData.conclusion && (
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              {complianceData.conclusion}
            </p>
          )}
        </section>

        {/* Benefits Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* For Companies */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                {benefitsCompaniesData.heading}
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {Array.isArray(benefitsCompaniesData.benefits) && benefitsCompaniesData.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Employees */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                {benefitsEmployeesData.heading}
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {Array.isArray(benefitsEmployeesData.benefits) && benefitsEmployeesData.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Use Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {whoShouldUseData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {whoShouldUseData.intro}
          </p>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(whoShouldUseData.solutions) && whoShouldUseData.solutions.map((solution, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {whyChooseData.heading}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(whyChooseData.reasons) && whyChooseData.reasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-purple-500">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {ctaData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {ctaData.description}
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffffff',
              color: '#000000',
              fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' },
              fontWeight: 600,
              px: { xs: 4, sm: 6, lg: 8 },
              py: { xs: 1.2, sm: 1.5, lg: 1.8 },
              borderRadius: '9999px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#f3f4f6',
              },
            }}
          >
            {ctaData.button}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {ctaData.subtext}
          </p>
        </section>
      </div>
    </div>
  );
}
