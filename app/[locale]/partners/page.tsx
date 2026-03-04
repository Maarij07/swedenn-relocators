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

  // Get all translation data
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
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">{coreValuesData.verified?.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700">{coreValuesData.verified?.description}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-5 sm:p-6 lg:p-7 border border-green-200">
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">{coreValuesData.protected?.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700">{coreValuesData.protected?.description}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-5 sm:p-6 lg:p-7 border border-purple-200">
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">{coreValuesData.global?.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700">{coreValuesData.global?.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Join Section - Enhanced */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {whoCanData.heading}
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              {whoCanData.intro}
            </p>
          </div>

          {/* Professional Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚖️</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{whoCanData.immigration?.title}</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">{whoCanData.immigration?.description}</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏠</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{whoCanData.relocation?.title}</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">{whoCanData.relocation?.description}</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{whoCanData.housing?.title}</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">{whoCanData.housing?.description}</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{whoCanData.corporate?.title}</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">{whoCanData.corporate?.description}</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🚚</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{whoCanData.logistics?.title}</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">{whoCanData.logistics?.description}</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💰</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{whoCanData.financial?.title}</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">{whoCanData.financial?.description}</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-3">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💼</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{whoCanData.business?.title}</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">{whoCanData.business?.description}</p>
            </div>
          </div>

          {/* Call to action quote */}
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 sm:p-8 lg:p-10">
            <p className="text-base sm:text-lg lg:text-xl text-gray-900 font-semibold">
              {whoCanData.quote} <span className="text-blue-600"></span>
            </p>
          </div>
        </section>

        {/* How the System Works Section */}
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
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">1.</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage1?.entry1}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">2.</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage1?.entry2}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">3.</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage1?.entry3}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold mb-2">{howitWorksData.stage1?.during}</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage1?.intake}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage1?.documents}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage1?.kyc}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage1?.routing}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4 p-3 bg-blue-50 rounded-lg">
              <strong>Important:</strong> {howitWorksData.stage1?.note}
            </p>
          </div>

          {/* Stage 2 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3">
              {howitWorksData.stage2?.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
              {howitWorksData.stage2?.description}
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage2?.agreement}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage2?.payment}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold mb-2">{howitWorksData.stage2?.then}</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage2?.profile}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage2?.responsibilities}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage2?.milestones}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{howitWorksData.stage2?.delivery}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4 p-3 bg-green-50 rounded-lg">
              {howitWorksData.stage2?.benefit}
            </p>
          </div>
        </section>

        {/* The One Profile System Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {oneProfileData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {oneProfileData.intro}
          </p>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {oneProfileData.oneClient?.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {oneProfileData.oneClient?.description}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {oneProfileData.inside?.title}
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.inside?.identity}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.inside?.vault}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.inside?.checklist}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.inside?.log}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.inside?.audit}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.inside?.assignment}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-purple-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {oneProfileData.sharing?.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3">
                {oneProfileData.sharing?.intro}
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.sharing?.immigration}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.sharing?.housing}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.sharing?.accountant}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{oneProfileData.sharing?.logistics}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4">
                {oneProfileData.sharing?.benefit}
              </p>
            </div>
          </div>
        </section>

        {/* Network Growth Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {networkGrowthData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {networkGrowthData.intro}
          </p>

          <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500 mb-6">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
              {networkGrowthData.example?.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3">{networkGrowthData.example?.scenario}</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{networkGrowthData.example?.add}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{networkGrowthData.example?.leave}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{networkGrowthData.example?.select}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold mb-2">{networkGrowthData.example?.team}</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{networkGrowthData.example?.screens}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{networkGrowthData.example?.completes}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{networkGrowthData.example?.forwards}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-4 p-3 bg-blue-50 rounded-lg">
              {networkGrowthData.example?.benefit}
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold mt-4">{networkGrowthData.example?.reverse}</p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">{networkGrowthData.example?.reverseSub}</p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4 italic">{networkGrowthData.example?.flow}</p>
          </div>
        </section>

        {/* Real Partner Scenarios Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {scenariosData.heading}
          </h2>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                {scenariosData.scenario1?.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {scenariosData.scenario1?.description}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                {scenariosData.scenario2?.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {scenariosData.scenario2?.description}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                {scenariosData.scenario3?.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {scenariosData.scenario3?.description}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                {scenariosData.scenario4?.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {scenariosData.scenario4?.description}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                {scenariosData.scenario5?.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {scenariosData.scenario5?.description}
              </p>
            </div>
          </div>
        </section>

        {/* Compliance and Trust Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {complianceData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            {complianceData.intro}
          </p>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {complianceData.clientTrust?.title}
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.clientTrust?.identity}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.clientTrust?.documents}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.clientTrust?.fraud}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.clientTrust?.intake}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {complianceData.partnerVerification?.title}
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.partnerVerification?.company}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.partnerVerification?.credentials}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.partnerVerification?.scope}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.partnerVerification?.monitoring}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-purple-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {complianceData.dataProtection?.title}
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.dataProtection?.access}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.dataProtection?.sharing}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{complianceData.dataProtection?.documents}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4">({complianceData.dataProtection?.gdpr})</p>
            </div>
          </div>
        </section>

        {/* Territory Protection Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {territoryData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            {territoryData.intro}
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">{territoryData.onHold}</span>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mt-4">
            {territoryData.benefit}
          </p>
        </section>

        {/* Fee Transparency Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {feesData.heading}
          </h2>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {feesData.submit?.title}
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{feesData.submit?.services}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{feesData.submit?.pricing}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {feesData.workingModel?.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {feesData.workingModel?.flow}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-purple-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                {feesData.commissions?.title}
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{feesData.commissions?.recorded}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{feesData.commissions?.payable}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{feesData.commissions?.paid}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4">{feesData.commissions?.traceable}</p>
            </div>
          </div>
        </section>

        {/* Simple Summary Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            {summaryData.heading}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">1.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">{summaryData.step1}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">2.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">{summaryData.step2}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">3.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">{summaryData.step3}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">4.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">{summaryData.step4}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">5.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">{summaryData.step5}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">6.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">{summaryData.step6}</span>
            </div>
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
            href="https://portal.swedenrelocators.se/partner-signup/"
            target="_blank"
            rel="noopener noreferrer"
            component="a"
          >
            {ctaData.button}
          </Button>
        </section>
      </div>
    </div>
  );
}
