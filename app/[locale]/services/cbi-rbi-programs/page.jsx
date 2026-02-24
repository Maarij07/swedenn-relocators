'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function CBSBBProgrammePage() {
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

  const heroData = t('cbiBbi.hero', { returnObjects: true }) || {};
  const introData = t('cbiBbi.intro', { returnObjects: true }) || {};
  const understandingData = t('cbiBbi.understanding', { returnObjects: true }) || {};
  const countryProgramsData = t('cbiBbi.countryPrograms', { returnObjects: true }) || {};
  const caribbeanData = t('cbiBbi.caribbean', { returnObjects: true }) || {};
  const europeanData = t('cbiBbi.european', { returnObjects: true }) || {};
  const middleEastData = t('cbiBbi.middleEastGlobal', { returnObjects: true }) || {};
  const howWeAssistData = t('cbiBbi.howWeAssist', { returnObjects: true }) || {};
  const whoShouldData = t('cbiBbi.whoShould', { returnObjects: true }) || {};
  const ctaData = t('cbiBbi.cta', { returnObjects: true }) || {};

  const definitions = t('cbiBbi.understanding.definitions', { returnObjects: true }) || [];
  const assistSteps = t('cbiBbi.howWeAssist.steps', { returnObjects: true }) || [];
  const reasons = t('cbiBbi.whoShould.reasons', { returnObjects: true }) || [];

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
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {introData.description}
          </p>
        </section>

        {/* Understanding CBI and RBI Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {understandingData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {understandingData.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6">
            {Array.isArray(definitions) && definitions.map((def, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {def.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {def.description}
                </p>
              </div>
            ))}
          </div>
          {understandingData.benefits && (
            <div className="bg-blue-50 rounded-xl p-5 sm:p-6 border-l-4 border-blue-500">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                {understandingData.benefits}
              </p>
            </div>
          )}
        </section>

        {/* Country Programs Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {countryProgramsData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {countryProgramsData.intro}
          </p>
        </section>

        {/* Caribbean Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {caribbeanData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {caribbeanData.intro}
          </p>
          <div className="space-y-4 sm:space-y-6">
            {Array.isArray(caribbeanData.countries) && caribbeanData.countries.map((country, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-green-500">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {country.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 italic">{country.type}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Investment Options:</h4>
                    <ul className="space-y-1">
                      {Array.isArray(country.investmentOptions) && country.investmentOptions.map((opt, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-700 flex gap-2">
                          <span className="text-green-600 flex-shrink-0">•</span>
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Family Members: {country.familyMembers}</h4>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {Array.isArray(country.benefits) && country.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-700 flex gap-2">
                          <span className="text-green-600 flex-shrink-0">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* European Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {europeanData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {europeanData.intro}
          </p>
          <div className="space-y-4 sm:space-y-6">
            {Array.isArray(europeanData.countries) && europeanData.countries.map((country, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-purple-500">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {country.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 italic">{country.type}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Investment Options:</h4>
                    <ul className="space-y-1">
                      {Array.isArray(country.investmentOptions) && country.investmentOptions.map((opt, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-700 flex gap-2">
                          <span className="text-purple-600 flex-shrink-0">•</span>
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Family Members: {country.familyMembers}</h4>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {Array.isArray(country.benefits) && country.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-700 flex gap-2">
                          <span className="text-purple-600 flex-shrink-0">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Middle East and Global Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {middleEastData.heading}
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {Array.isArray(middleEastData.countries) && middleEastData.countries.map((country, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-orange-500">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {country.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 italic">{country.type}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Investment Options:</h4>
                    <ul className="space-y-1">
                      {Array.isArray(country.investmentOptions) && country.investmentOptions.map((opt, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-700 flex gap-2">
                          <span className="text-orange-600 flex-shrink-0">•</span>
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Family Members: {country.familyMembers}</h4>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {Array.isArray(country.benefits) && country.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-700 flex gap-2">
                          <span className="text-orange-600 flex-shrink-0">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Assist Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            {howWeAssistData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(assistSteps) && assistSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {step.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should Consider Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {whoShouldData.heading}
          </h2>
          <ul className="space-y-3">
            {Array.isArray(reasons) && reasons.map((reason, idx) => (
              <li key={idx} className="flex gap-3 bg-white rounded-lg p-4 sm:p-5 border-l-4 border-indigo-500">
                <span className="text-indigo-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
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
