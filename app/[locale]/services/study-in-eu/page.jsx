'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function StudyInEuPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      i18n.on('initialized', () => setIsReady(true));
    }
  }, [i18n]);

  if (!isReady) return null;

  const countries = t('studyInEu.countries', { returnObjects: true }) || [];
  const services = t('studyInEu.whyChoose.services', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {t('studyInEu.hero.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {t('studyInEu.hero.subtitle')}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {t('studyInEu.intro.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {t('studyInEu.intro.description')}
          </p>
        </section>

        {/* Countries Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {Array.isArray(countries) && countries.map((country) => (
              <div key={country.id} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                {/* Country Title */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {country.name}
                </h2>

                {/* Country Intro */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                  {country.intro}
                </p>

                {/* Tuition Fees */}
                <div className="mb-8">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                    {country.tuitionFees.heading}
                  </h3>
                  <div className="space-y-3 mb-6">
                    {Array.isArray(country.tuitionFees.fees) && country.tuitionFees.fees.map((fee, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:justify-between gap-2 bg-gray-50 rounded-lg p-3 sm:p-4">
                        <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 min-w-[250px]">
                          {fee.category}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                          {fee.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Admission Intakes */}
                <div className="mb-8">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                    {country.admissionIntakes.heading}
                  </h3>
                  <div className="space-y-3 mb-6">
                    {Array.isArray(country.admissionIntakes.intakes) && country.admissionIntakes.intakes.map((intake, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-green-500">
                        <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 mb-1">
                          {intake.period}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                          {intake.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Fields */}
                <div className="mb-8">
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                    Popular Fields
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    {country.popularFields}
                  </p>
                </div>

                {/* Visa Requirements */}
                <div className="mb-8">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                    {country.visaRequirements.heading}
                  </h3>
                  <div className="space-y-2 mb-6">
                    {Array.isArray(country.visaRequirements.requirements) && country.visaRequirements.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700">{req}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Rights */}
                {country.workRights && (
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-500">
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 uppercase">
                      Work Rights
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {country.workRights}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('studyInEu.whyChoose.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-3xl">
            {t('studyInEu.whyChoose.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(services) && services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-purple-500"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('studyInEu.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('studyInEu.cta.description')}
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
            {t('studyInEu.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('studyInEu.cta.subtext')}
          </p>
        </section>
      </div>
    </div>
  );
}
