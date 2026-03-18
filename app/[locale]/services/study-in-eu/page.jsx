'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ChevronDown } from 'lucide-react';

const countryFlags = {
  'sweden': 'SE',
  'denmark': 'DK',
  'norway': 'NO',
  'finland': 'FI',
  'iceland': 'IS',
  'germany': 'DE',
  'latvia': 'LV',
  'netherlands': 'NL',
  'uk': 'GB',
  'france': 'FR',
  'italy': 'IT',
  'spain': 'ES',
  'poland': 'PL',
  'portugal': 'PT',
  'lithuania': 'LT',
  'czechRepublic': 'CZ',
};

export default function StudyInEuPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const [expandedCountry, setExpandedCountry] = useState(null);

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

  const toggleCountry = (countryId) => {
    setExpandedCountry(expandedCountry === countryId ? null : countryId);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
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
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {Array.isArray(countries) && countries.map((country) => (
              <div key={country.id} className="border-l-4 border-blue-500 rounded-lg overflow-hidden bg-white shadow-sm">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleCountry(country.id)}
                  className="w-full px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 text-left">
                    {/* Flag */}
                    <img
                      src={`https://flagcdn.com/w320/${(countryFlags[country.id] || 'XX').toLowerCase()}.png`}
                      alt={country.name}
                      className="rounded w-10 h-7 object-cover"
                    />
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                      {country.name}
                    </h2>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                      expandedCountry === country.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                {expandedCountry === country.id && (
                  <div className="px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 border-t border-gray-100">
                    {/* Country Intro */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                      {country.intro}
                    </p>

                    {/* Tuition Fees */}
                    <div className="mb-8">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                        {country.tuitionFees.heading}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                        {Array.isArray(country.tuitionFees.fees) && country.tuitionFees.fees.map((fee, idx) => (
                          <div key={idx} className="bg-[#EFF6FF] rounded-lg p-4 border border-blue-200 hover:shadow-md transition-shadow">
                            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                              {fee.category}
                            </p>
                            <p className="text-lg sm:text-xl font-bold text-blue-600">
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
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">
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
