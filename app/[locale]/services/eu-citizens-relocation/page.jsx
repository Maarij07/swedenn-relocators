'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
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
    return null;
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

        {/* What is EU Family Reunification */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {whatIsData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {whatIsData.description}
          </p>
        </section>

        {/* Immediate Family Members */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('euCitizensRelocation.immediateFamilyHeading')}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(immediateFamily) && immediateFamily.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {member.type}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Extended Family */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {extendedFamilyData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {extendedFamilyData.description}
          </p>
        </section>

        {/* Long-Term EU Residence */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('euCitizensRelocation.longTermPermitHeading')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {Array.isArray(longTermPermitRequirements) && longTermPermitRequirements.map((req, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{req}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Residence Card */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {residenceCardData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {residenceCardData.intro}
          </p>
          <div className="space-y-3 sm:space-y-4 mb-6">
            {Array.isArray(residenceCardData.documents) && residenceCardData.documents.map((doc, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
          {residenceCardData.note && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-lg">
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                {residenceCardData.note}
              </p>
            </div>
          )}
        </section>

        {/* Personnummer */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {personnummerData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {personnummerData.intro}
          </p>
          <div className="space-y-3 sm:space-y-4">
            {Array.isArray(personnummerData.uses) && personnummerData.uses.map((use, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{use}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Healthcare */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {healthcareData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {healthcareData.description}
          </p>
        </section>

        {/* Education */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {educationData.heading}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(educationData.programs) && educationData.programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {program.name}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bank Accounts */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {bankAccountsData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {bankAccountsData.intro}
          </p>
          <div className="space-y-3 sm:space-y-4 mb-6">
            {Array.isArray(bankAccountsData.documents) && bankAccountsData.documents.map((doc, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
          {bankAccountsData.note && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-lg">
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                {bankAccountsData.note}
              </p>
            </div>
          )}
        </section>

        {/* Language & Integration */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {languageData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {languageData.description}
          </p>
        </section>

        {/* Application Process */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.isArray(applicationProcess) && applicationProcess.map((step, idx) => (
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

        {/* Services */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {servicesData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {servicesData.description}
          </p>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(servicesData.servicesList) && servicesData.servicesList.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {idx + 1}. {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Sweden */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            Why Sweden?
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {Array.isArray(whySweden) && whySweden.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {idx + 1}. {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {item.description}
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
