'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function AuPairHostFamilyPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(i18n.isInitialized);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.on('initialized', () => setIsReady(true));
    } else {
      setIsReady(true);
    }
  }, [i18n]);

  if (!isReady) return null;

  const heroData = t('auPairHostFamily.hero', { returnObjects: true }) || {};
  const introData = t('auPairHostFamily.intro', { returnObjects: true }) || {};
  const whyFamilies = t('auPairHostFamily.whyFamiliesChoose.benefits', { returnObjects: true }) || [];
  const whyAuPairs = t('auPairHostFamily.whyAuPairsChoose.benefits', { returnObjects: true }) || [];
  const legalRequirements = t('auPairHostFamily.legalFramework.requirements', { returnObjects: true }) || [];
  const hostFamilyServices = t('auPairHostFamily.supportHostFamilies.services', { returnObjects: true }) || [];
  const auPairServices = t('auPairHostFamily.supportAuPairs.services', { returnObjects: true }) || [];
  const contractItems = t('auPairHostFamily.contractsObligations.items', { returnObjects: true }) || [];
  const additionalServicesData = t('auPairHostFamily.additionalServices.services', { returnObjects: true }) || [];
  const whyChooseAdvantages = t('auPairHostFamily.whyChooseUs.advantages', { returnObjects: true }) || [];
  const disclaimerData = t('auPairHostFamily.disclaimer', { returnObjects: true }) || {};
  const ctaData = t('auPairHostFamily.cta', { returnObjects: true }) || {};

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

        {/* Why Families Choose */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('auPairHostFamily.whyFamiliesChoose.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('auPairHostFamily.whyFamiliesChoose.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6">
            {whyFamilies.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 sm:p-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed italic">
              {t('auPairHostFamily.whyFamiliesChoose.conclusion')}
            </p>
          </div>
        </section>

        {/* Why Young People Choose */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('auPairHostFamily.whyAuPairsChoose.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('auPairHostFamily.whyAuPairsChoose.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6">
            {whyAuPairs.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-green-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-4 sm:p-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed italic">
              {t('auPairHostFamily.whyAuPairsChoose.conclusion')}
            </p>
          </div>
        </section>

        {/* Legal Framework */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('auPairHostFamily.legalFramework.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('auPairHostFamily.legalFramework.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6">
            {legalRequirements.map((req, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-purple-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {req.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 sm:p-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
              {t('auPairHostFamily.legalFramework.euNote')}
            </p>
          </div>
        </section>

        {/* Support Host Families */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('auPairHostFamily.supportHostFamilies.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('auPairHostFamily.supportHostFamilies.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6">
            {hostFamilyServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-t-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {service.number}
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 sm:p-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
              {t('auPairHostFamily.supportHostFamilies.conclusion')}
            </p>
          </div>
        </section>

        {/* Support Au Pairs */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('auPairHostFamily.supportAuPairs.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('auPairHostFamily.supportAuPairs.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6">
            {auPairServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-green-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-4 sm:p-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
              {t('auPairHostFamily.supportAuPairs.conclusion')}
            </p>
          </div>
        </section>

        {/* Contracts and Obligations */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('auPairHostFamily.contractsObligations.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('auPairHostFamily.contractsObligations.intro')}
          </p>
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-blue-500 mb-6">
            <ul className="space-y-3">
              {contractItems.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 sm:p-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
              {t('auPairHostFamily.contractsObligations.conclusion')}
            </p>
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('auPairHostFamily.additionalServices.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('auPairHostFamily.additionalServices.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {additionalServicesData.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-orange-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('auPairHostFamily.whyChooseUs.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseAdvantages.map((adv, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {disclaimerData.heading}
          </h2>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 sm:p-6 mb-4">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-3">
              {disclaimerData.note}
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
              {disclaimerData.disclaimer}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('auPairHostFamily.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('auPairHostFamily.cta.description')}
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
            {t('auPairHostFamily.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('auPairHostFamily.cta.subtext')}
          </p>
        </section>
      </div>
    </div>
  );
}
