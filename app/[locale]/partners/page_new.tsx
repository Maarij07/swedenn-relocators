'use client';

import Navbar from '../../components/Navbar';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function PartnersPage() {
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

  // Get all translation data with returnObjects to get nested objects
  const heroData = (t('partners.hero', { returnObjects: true }) || {}) as any;
  const coreValuesData = (t('partners.coreValues', { returnObjects: true }) || {}) as any;
  const whoCanData = (t('partners.whoCan', { returnObjects: true }) || {}) as any;
  const howitWorksData = (t('partners.howitWorks', { returnObjects: true }) || {}) as any;
  const oneProfileData = (t('partners.oneProfile', { returnObjects: true }) || {}) as any;
  const networkGrowthData = (t('partners.networkGrowth', { returnObjects: true }) || {}) as any;
  const scenariosData = (t('partners.scenarios', { returnObjects: true }) || {}) as any;
  const complianceData = (t('partners.compliance', { returnObjects: true }) || {}) as any;
  const territoryData = (t('partners.territory', { returnObjects: true }) || {}) as any;
  const feesData = (t('partners.fees', { returnObjects: true }) || {}) as any;
  const summaryData = (t('partners.summary', { returnObjects: true }) || {}) as any;
  const ctaData = (t('partners.cta', { returnObjects: true }) || {}) as any;

  // Extract arrays from object structures
  const categories = [
    { icon: '⚖️', title: whoCanData.immigration?.title, desc: whoCanData.immigration?.description },
    { icon: '🏠', title: whoCanData.relocation?.title, desc: whoCanData.relocation?.description },
    { icon: '🏢', title: whoCanData.housing?.title, desc: whoCanData.housing?.description },
    { icon: '📊', title: whoCanData.corporate?.title, desc: whoCanData.corporate?.description },
    { icon: '🚚', title: whoCanData.logistics?.title, desc: whoCanData.logistics?.description },
    { icon: '💰', title: whoCanData.financial?.title, desc: whoCanData.financial?.description },
    { icon: '💼', title: whoCanData.business?.title, desc: whoCanData.business?.description },
  ];

  const complianceChecks = [
    { title: complianceData.clientTrust?.title, items: [complianceData.clientTrust?.identity, complianceData.clientTrust?.documents, complianceData.clientTrust?.fraud, complianceData.clientTrust?.intake] },
    { title: complianceData.partnerVerification?.title, items: [complianceData.partnerVerification?.company, complianceData.partnerVerification?.credentials, complianceData.partnerVerification?.scope, complianceData.partnerVerification?.monitoring] },
    { title: complianceData.dataProtection?.title, items: [complianceData.dataProtection?.access, complianceData.dataProtection?.sharing, complianceData.dataProtection?.documents, complianceData.dataProtection?.gdpr] },
  ];

  const scenarios = [
    { title: scenariosData.scenario1?.title, desc: scenariosData.scenario1?.description },
    { title: scenariosData.scenario2?.title, desc: scenariosData.scenario2?.description },
    { title: scenariosData.scenario3?.title, desc: scenariosData.scenario3?.description },
    { title: scenariosData.scenario4?.title, desc: scenariosData.scenario4?.description },
    { title: scenariosData.scenario5?.title, desc: scenariosData.scenario5?.description },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <Navbar />
      
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 sm:space-y-6 mb-8">
            <h1 className="text-3xl xs:text-3.5xl sm:text-4xl lg:text-5xl xl:text-6xl 4k:text-7xl font-extrabold text-gray-900 leading-tight">
              {heroData.mainTitle}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-600 font-semibold">
              {heroData.poweredBy}
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl leading-relaxed">
              {heroData.tagline}
            </p>
          </div>

          {/* Core Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-5 sm:p-6 lg:p-7 border border-blue-200">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">{coreValuesData.verified?.title}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">{coreValuesData.verified?.description}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-5 sm:p-6 lg:p-7 border border-green-200">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">{coreValuesData.protected?.title}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">{coreValuesData.protected?.description}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-5 sm:p-6 lg:p-7 border border-purple-200">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">{coreValuesData.global?.title}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">{coreValuesData.global?.description}</p>
            </div>
          </div>
        </section>

        {/* Who Can Join Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {whoCanData.heading}
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              {whoCanData.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{cat.icon}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{cat.title}</h3>
                </div>
                <p className="text-sm lg:text-base text-gray-700">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 sm:p-8 lg:p-10">
            <p className="text-base sm:text-lg lg:text-xl text-gray-900 font-semibold">
              {whoCanData.quote}
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {howitWorksData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 leading-relaxed">
            {howitWorksData.intro}
          </p>

          {/* Stage 1 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500 mb-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3">
              {howitWorksData.stage1?.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
              {howitWorksData.stage1?.description}
            </p>
            <div className="space-y-2 mb-4">
              {[howitWorksData.stage1?.entry1, howitWorksData.stage1?.entry2, howitWorksData.stage1?.entry3].map((entry, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">{idx + 1}.</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{entry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stage 2 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3">
              {howitWorksData.stage2?.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
              {howitWorksData.stage2?.description}
            </p>
          </div>
        </section>

        {/* One Profile System Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {oneProfileData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {oneProfileData.intro}
          </p>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {oneProfileData.oneClient?.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.oneClient?.description}</p>
            </div>
          </div>
        </section>

        {/* Network Growth Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {networkGrowthData.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            {networkGrowthData.intro}
          </p>
        </section>

        {/* Real Scenarios Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            {scenariosData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((scenario, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{scenario.title}</h3>
                <p className="text-gray-700 text-sm">{scenario.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {complianceData.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            {complianceData.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceChecks.map((check, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{check.title}</h3>
                <ul className="space-y-2">
                  {check.items.filter(Boolean).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Territory Protection Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {territoryData.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">{territoryData.intro}</p>
          <p className="text-base sm:text-lg text-gray-700">{territoryData.onHold}</p>
        </section>

        {/* Fees Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            {feesData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{feesData.submit?.title}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-blue-600">•</span>{feesData.submit?.services}</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span>{feesData.submit?.pricing}</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{feesData.workingModel?.title}</h3>
              <p className="text-gray-700">{feesData.workingModel?.flow}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 lg:p-16 text-center text-white mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {ctaData.heading}
          </h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            {ctaData.description}
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: '#3B82F6',
              fontWeight: 600,
              padding: '12px 32px',
              fontSize: '1rem',
              '&:hover': { backgroundColor: '#F0F9FF' },
            }}
          >
            {ctaData.button}
          </Button>
        </section>
      </div>
    </div>
  );
}
