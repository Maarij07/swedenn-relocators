'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

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
    <div className="min-h-screen bg-white pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <style>{fadeInUp}</style>
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

        {/* Who Can Join - List View with Illustration */}
        <section className="mb-16 sm:mb-20 lg:mb-24 py-12">
          {/* Heading + List + Image in one grid so image aligns with heading */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4">
                  {whoCanData.heading}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
                  {whoCanData.intro}
                </p>
              </div>
              {/* List View */}
              <div className="space-y-4 sm:space-y-6 mb-12">
            {/* Immigration & Legal */}
            <div className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl flex-shrink-0 mt-1">⚖️</div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{whoCanData.immigration?.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{whoCanData.immigration?.description}</p>
              </div>
            </div>

            {/* Relocation & Destination */}
            <div className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 border border-gray-200 rounded-lg hover:border-green-400 hover:bg-green-50/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl flex-shrink-0 mt-1">🏠</div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{whoCanData.relocation?.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{whoCanData.relocation?.description}</p>
              </div>
            </div>

            {/* Housing & Property */}
            <div className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 border border-gray-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl flex-shrink-0 mt-1">🏢</div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{whoCanData.housing?.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{whoCanData.housing?.description}</p>
              </div>
            </div>

            {/* Corporate & Compliance */}
            <div className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 border border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl flex-shrink-0 mt-1">📊</div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{whoCanData.corporate?.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{whoCanData.corporate?.description}</p>
              </div>
            </div>

            {/* Logistics & Mobility */}
            <div className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 border border-gray-200 rounded-lg hover:border-red-400 hover:bg-red-50/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl flex-shrink-0 mt-1">🚚</div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{whoCanData.logistics?.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{whoCanData.logistics?.description}</p>
              </div>
            </div>

            {/* Financial & Insurance */}
            <div className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 border border-gray-200 rounded-lg hover:border-orange-400 hover:bg-orange-50/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl flex-shrink-0 mt-1">💰</div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{whoCanData.financial?.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{whoCanData.financial?.description}</p>
              </div>
            </div>

            {/* Business & Investment Support */}
            <div className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 border border-gray-200 rounded-lg hover:border-indigo-400 hover:bg-indigo-50/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl flex-shrink-0 mt-1">💼</div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{whoCanData.business?.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{whoCanData.business?.description}</p>
              </div>
            </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden lg:flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.15)] border border-gray-200 bg-white w-[85%] max-w-[520px]">
                <Image
                  src="/understanding-partner.jpeg"
                  alt="Understanding the Partner Program"
                  width={520}
                  height={520}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Motivational callout */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-600">
            <p className="text-base sm:text-lg lg:text-xl text-gray-900 font-semibold">
              ✓ {whoCanData.quote}
            </p>
          </div>
        </section>

        {/* The System - Lead to Client to Delivery */}
        <section className="mb-16 sm:mb-20 lg:mb-24 py-12">
          <div className="mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4">
              How RELOFY Works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
              {howitWorksData.intro} From first touch to active partnership, the system is designed to protect both partners and clients.
            </p>
          </div>

          {/* Two-part flow visualization */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Stage 1: Lead */}
            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{howitWorksData.stage1?.title}</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{howitWorksData.stage1?.description}</p>
              
              <div className="space-y-3 mb-6 bg-white rounded-lg p-5">
                <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold">Entry Points:</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">• {howitWorksData.stage1?.entry1}</p>
                  <p className="text-sm text-gray-700">• {howitWorksData.stage1?.entry2}</p>
                  <p className="text-sm text-gray-700">• {howitWorksData.stage1?.entry3}</p>
                </div>
              </div>

              <div className="space-y-3 bg-white rounded-lg p-5">
                <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold">During this stage:</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">✓ {howitWorksData.stage1?.intake}</p>
                  <p className="text-sm text-gray-700">✓ {howitWorksData.stage1?.documents}</p>
                  <p className="text-sm text-gray-700">✓ {howitWorksData.stage1?.kyc}</p>
                  <p className="text-sm text-gray-700">✓ {howitWorksData.stage1?.routing}</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 mt-6 italic">{howitWorksData.stage1?.note}</p>
            </div>

            {/* Stage 2: Client */}
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{howitWorksData.stage2?.title}</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{howitWorksData.stage2?.description}</p>
              
              <div className="space-y-3 mb-6 bg-white rounded-lg p-5">
                <p className="text-xs uppercase tracking-wide text-green-600 font-semibold">Conversion Happens When:</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">✓ {howitWorksData.stage2?.agreement}</p>
                  <p className="text-sm text-gray-700">✓ {howitWorksData.stage2?.payment}</p>
                </div>
              </div>

              <div className="space-y-3 bg-white rounded-lg p-5">
                <p className="text-xs uppercase tracking-wide text-green-600 font-semibold">Then Immediately:</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">• {howitWorksData.stage2?.profile}</p>
                  <p className="text-sm text-gray-700">• {howitWorksData.stage2?.responsibilities}</p>
                  <p className="text-sm text-gray-700">• {howitWorksData.stage2?.milestones}</p>
                  <p className="text-sm text-gray-700">• {howitWorksData.stage2?.delivery}</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 mt-6 italic">{howitWorksData.stage2?.benefit}</p>
            </div>
          </div>

          {/* The One Profile Advantage */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-10 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Your Real Advantage: The One Profile System</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">{oneProfileData.intro}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-blue-100">What's Inside:</h4>
                <div className="space-y-2">
                  <p className="text-sm">✓ {oneProfileData.inside?.identity}</p>
                  <p className="text-sm">✓ {oneProfileData.inside?.vault}</p>
                  <p className="text-sm">✓ {oneProfileData.inside?.checklist}</p>
                  <p className="text-sm">✓ {oneProfileData.inside?.log}</p>
                  <p className="text-sm">✓ {oneProfileData.inside?.audit}</p>
                  <p className="text-sm">✓ {oneProfileData.inside?.assignment}</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-blue-100">Privacy by Design:</h4>
                <p className="text-sm text-blue-100 mb-3">{oneProfileData.sharing?.intro}</p>
                <div className="space-y-2 text-sm">
                  <p>• {oneProfileData.sharing?.immigration}</p>
                  <p>• {oneProfileData.sharing?.housing}</p>
                  <p>• {oneProfileData.sharing?.accountant}</p>
                  <p>• {oneProfileData.sharing?.logistics}</p>
                </div>
              </div>
            </div>

            <p className="text-blue-100 text-sm mt-6 italic">{oneProfileData.sharing?.benefit}</p>
          </div>
        </section>

        {/* Visual: How Partner Works */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
              How Partner Works
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
              A quick visual of the journey from interest to onboarding and delivery.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.12)] border border-gray-200 bg-white w-full max-w-[980px]">
              <Image
                src="/How%20Partner%20Works.png"
                alt="How Partner Works"
                width={980}
                height={980}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* For Your Business - Combined Growth + Scenarios */}
        <section className="mb-16 sm:mb-20 lg:mb-24 py-12">
          <div className="mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4">
              {networkGrowthData.heading}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
              {networkGrowthData.intro}
            </p>
          </div>

          {/* Use Case Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{networkGrowthData.example?.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{networkGrowthData.example?.scenario}</p>
              <div className="text-xs sm:text-sm space-y-2 text-gray-700">
                <p><strong>You:</strong> {networkGrowthData.example?.add}</p>
                <p><strong>Support Team:</strong> {networkGrowthData.example?.screens}</p>
                <p><strong>Result:</strong> {networkGrowthData.example?.benefit}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 sm:p-8 border-2 border-green-200 hover:border-green-400 transition-colors">
              <div className="text-3xl mb-3">↔️</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Reverse Flow: Partners Feed You</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{networkGrowthData.example?.reverseSub}</p>
              <p className="text-xs sm:text-sm text-gray-700 italic">{networkGrowthData.example?.flow}</p>
            </div>
          </div>

          {/* Real scenarios showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h4 className="font-bold text-gray-900 mb-2">{scenariosData.scenario1?.title}</h4>
              <p className="text-sm text-gray-700">{scenariosData.scenario1?.description}</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <h4 className="font-bold text-gray-900 mb-2">{scenariosData.scenario2?.title}</h4>
              <p className="text-sm text-gray-700">{scenariosData.scenario2?.description}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <h4 className="font-bold text-gray-900 mb-2">{scenariosData.scenario3?.title}</h4>
              <p className="text-sm text-gray-700">{scenariosData.scenario3?.description}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
              <h4 className="font-bold text-gray-900 mb-2">{scenariosData.scenario4?.title}</h4>
              <p className="text-sm text-gray-700">{scenariosData.scenario4?.description}</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200 md:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-gray-900 mb-2">{scenariosData.scenario5?.title}</h4>
              <p className="text-sm text-gray-700">{scenariosData.scenario5?.description}</p>
            </div>
          </div>
        </section>

        {/* Built on Trust - Compressed Compliance + Territory + Fees */}
        <section className="mb-20 sm:mb-24 lg:mb-28 py-12">
          <div className="mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4">
              Built on Trust
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
              We protect both clients and partners with verified processes, clear fees, and professional standards.
            </p>
          </div>

          {/* Three-column trust factors */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Compliance */}
            <div className="bg-blue-50 rounded-xl p-7 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🔒 {complianceData.heading}</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-blue-600 mb-2">Client Trust:</p>
                  <p>• {complianceData.clientTrust?.identity}</p>
                  <p>• {complianceData.clientTrust?.documents}</p>
                  <p>• {complianceData.clientTrust?.fraud}</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">Partner Verification:</p>
                  <p>• {complianceData.partnerVerification?.company}</p>
                  <p>• {complianceData.partnerVerification?.credentials}</p>
                </div>
              </div>
            </div>

            {/* Territory + Fees */}
            <div className="bg-green-50 rounded-xl p-7 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">💰 Growth Opportunities</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-green-600 mb-1">{territoryData.heading}</p>
                  <p className="text-xs text-gray-600">{territoryData.benefit}</p>
                </div>
                <div>
                  <p className="font-semibold text-green-600 mb-2">Clear Payment Flow:</p>
                  <p>{feesData.workingModel?.flow}</p>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="bg-purple-50 rounded-xl p-7 border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🛡️ Your Data is Safe</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• {complianceData.dataProtection?.access}</p>
                <p>• {complianceData.dataProtection?.sharing}</p>
                <p>• {complianceData.dataProtection?.documents}</p>
                <p className="text-xs text-gray-600 italic mt-3">{complianceData.dataProtection?.gdpr}</p>
              </div>
            </div>
          </div>

          {/* Commission clarity box */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-7 border border-blue-300">
            <h3 className="font-bold text-gray-900 mb-3">How Commissions Work</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-blue-600 mb-2">You Submit:</p>
                <p>• {feesData.submit?.services}</p>
                <p>• {feesData.submit?.pricing}</p>
              </div>
              <div>
                <p className="font-semibold text-blue-600 mb-2">We Track:</p>
                <p>• {feesData.commissions?.recorded}</p>
                <p>• {feesData.commissions?.paid}</p>
                <p className="italic text-xs text-gray-600 mt-2">{feesData.commissions?.traceable}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section (match services page style) */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              {ctaData.heading}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              {ctaData.description}
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-neutral-900/60 rounded-lg p-4 border border-neutral-700">
                <p className="text-2xl mb-2 text-gray-200">✓</p>
                <p className="text-sm text-gray-200">Zero Office Overhead</p>
              </div>
              <div className="bg-neutral-900/60 rounded-lg p-4 border border-neutral-700">
                <p className="text-2xl mb-2 text-gray-200">✓</p>
                <p className="text-sm text-gray-200">Global Referrals</p>
              </div>
              <div className="bg-neutral-900/60 rounded-lg p-4 border border-neutral-700">
                <p className="text-2xl mb-2 text-gray-200">✓</p>
                <p className="text-sm text-gray-200">Transparent Commissions</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' },
                fontWeight: 600,
                px: { xs: 6, sm: 8, lg: 10 },
                py: { xs: 1.5, sm: 1.8, lg: 2 },
                borderRadius: '9999px',
                textTransform: 'none',
                boxShadow: '0 10px 24px rgba(0,0,0,0.25)',
                transition: 'all 0.3s ease',
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

            <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
              🔒 Verified network. Professional standards. Real partnerships.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
