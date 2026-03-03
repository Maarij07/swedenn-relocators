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

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <Navbar />
      
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 sm:space-y-6 mb-8">
            <h1 className="text-3xl xs:text-3.5xl sm:text-4xl lg:text-5xl xl:text-6xl 4k:text-7xl font-extrabold text-gray-900 leading-tight">
              RELOFY Partner Program
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-600 font-semibold">
              Powered by Sweden Relocators
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl leading-relaxed">
              One Network. One Client Profile. Structured Growth.
            </p>
          </div>

          {/* Core Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-5 sm:p-6 lg:p-7 border border-blue-200">
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">Verified Network</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700">Built to deliver complete relocation journeys under one secure system</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-5 sm:p-6 lg:p-7 border border-green-200">
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">Protected Process</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700">Clients become partners only after agreement and payment</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-5 sm:p-6 lg:p-7 border border-purple-200">
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">Global Growth</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700">Expand worldwide through cross-border referrals without new offices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Join Section - Enhanced */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Who Can Join
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              RELOFY is built for verified industry professionals and service providers across these sectors:
            </p>
          </div>

          {/* Professional Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚖️</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Immigration & Legal</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">Consultants, licensed lawyers/law firms, compliance & appeal experts</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏠</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Relocation & Destination</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">Settling-in services, school support, move management</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Housing & Property</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">Rentals, property brokerage, property management, commercial real estate</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Corporate & Compliance</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">Accountants, tax advisors, payroll providers, EOR, HR & global mobility</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🚚</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Logistics & Mobility</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">Shipment, air tickets, airport services, arrival/departure logistics</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💰</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Financial & Insurance</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">Health insurance, money transfer, financial services & advisory</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-3">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💼</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Business & Investment Support</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-700">Business buy/sell services, business setup support, investment advisory</p>
            </div>
          </div>

          {/* Call to action quote */}
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 sm:p-8 lg:p-10">
            <p className="text-base sm:text-lg lg:text-xl text-gray-900 font-semibold">
              If you support a newcomer's life and compliance in a new country, <span className="text-blue-600">you belong in this network.</span>
            </p>
          </div>
        </section>

        {/* How the System Works Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            How the System Works (Easy + Professional)
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 leading-relaxed">
            To keep the process clean for everyone, RELOFY uses two stages:
          </p>

          {/* Stage 1 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500 mb-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3">
              Stage 1: Lead (Interest + Screening)
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
              When someone signs up in the portal/mobile app, they are considered a Lead. A Lead can enter in three ways:
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">1.</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Client signs up via portal/mobile app (Lead created automatically)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">2.</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Partner adds a Lead inside the Partner Portal</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">3.</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Sweden Relocators adds a Lead via marketing/corporate onboarding</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold mb-2">During the Lead stage, we do:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Structured intake (purpose, country, services needed)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Early document requirements (only what's needed to assess)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Initial KYC checks (identity and credibility checks, proportionate to the service)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Internal routing review (which country + which partner)</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4 p-3 bg-blue-50 rounded-lg">
              <strong>Important:</strong> At this stage, no partner is forced into unpaid work. The Lead stage exists to filter noise and protect partner time.
            </p>
          </div>

          {/* Stage 2 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3">
              Stage 2: Client (Agreement + Payment = Activation)
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
              A Lead becomes a Client only when they:
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Sign the service agreement, and</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Pay the service fee</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold mb-2">Then the case is activated:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">The One Profile File becomes "live"</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Responsibilities are assigned</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Milestones start</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Service delivery begins under the network's workflow</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4 p-3 bg-green-50 rounded-lg">
              This protects partners, protects clients, and creates a professional standard.
            </p>
          </div>
        </section>

        {/* The One Profile System Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            The One Profile System (Your Real Advantage)
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            Once converted to Client, RELOFY activates:
          </p>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                One Client = One Digital Case File (Profile)
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                This Profile replaces old paper folders, scattered emails, and WhatsApp threads.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Inside one Profile:
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Verified identity status (KYC completed level shown)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Secure document vault (uploaded once)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Service checklist + milestones (submission, biometrics, decision, move-in, delivery, etc.)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Communication log (all messages and updates in one place)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Audit trail (who did what, when – critical for professional trust)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Partner assignments per service</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-purple-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Role-based sharing
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3">
                Partners see only what they need:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Immigration partner sees immigration scope + documents</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Housing partner sees housing scope + lease documents</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Accountant sees tax/payroll scope + compliance documents</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Logistics sees shipment scope + delivery details</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4">
                This protects privacy and reduces confusion.
              </p>
            </div>
          </div>
        </section>

        {/* Network Growth Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Network Growth = Your Business Growth (Global Without Branches)
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            RELOFY is designed so partners can grow globally without opening offices and without time-zone communication chaos.
          </p>

          <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500 mb-6">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
              Example: You are in UAE
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3">A Lead asks for Denmark work permit help. You:</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Add the Lead into the portal (or it comes via signup)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Leave your note</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Select Denmark service</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold mb-2">Our customer support team:</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Screens the Lead</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Completes the intake/KYC steps needed</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">Forwards the case to the right Denmark partner after conversion</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-4 p-3 bg-blue-50 rounded-lg">
              If the Lead signs + pays (becomes Client): the Profile is assigned to Denmark partner, your referral is recorded automatically, and your commission becomes trackable.
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold mt-4">Reverse it:</p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700">A partner in Sweden receives a Lead for your expertise (Canada, UAE, Australia, UK etc.) → They submit it → we route it to you → you deliver → you invoice under B2B.</p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4 italic">This creates reciprocal flow: you feed the network, the network feeds you.</p>
          </div>
        </section>

        {/* Real Partner Scenarios Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            Real Partner Scenarios
          </h2>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                Scenario 1: Full Family Relocation (multi-service)
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                Client needs immigration + housing + school support + shipment + insurance. One Profile connects all services. Client sees one journey. Partners deliver faster.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                Scenario 2: Cross-border referral (earn without expansion)
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                You add a Denmark case from UAE. Denmark partner delivers. You earn referral commission once converted and paid, without any Denmark office or licensing.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                Scenario 3: Corporate employee relocation (high-value case)
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                Company needs work permit + payroll/tax setup + housing. Immigration + accountant + housing partner collaborate inside one Profile.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                Scenario 4: Add-on services (revenue multiplier)
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                Visa client triggers: pet relocation, money transfer, air ticket, arrival taxi, insurance. More services = more earnings + better client experience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                Scenario 5: Long-term lifecycle (repeat revenue)
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                Client later needs renewals, family cases, accounting/tax, property purchase. Profile history remains structured → easier upsell and long-term retention.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance and Trust Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            Compliance, Safety & Trust (What Partners Expect Today)
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            Because Sweden Relocators is the front-facing brand, we run a serious trust layer:
          </p>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Client trust checks (proportionate)
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Identity verification / KYC</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Document consistency checks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Fraud/spam filtering</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Structured intake quality control</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Partner verification (before activation)
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Company verification + experience review</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Credentials/licenses where applicable</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Service scope approval + territory coverage</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Quality monitoring over time (delivery + reliability)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-purple-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Data protection mindset
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Role-based access</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Controlled sharing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Secure document handling and audit logs</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4">(Designed for a GDPR-aligned way of working.)</p>
            </div>
          </div>
        </section>

        {/* Territory Protection Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Territory Protection (Partner Value Protection)
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            We don't overcrowd the same territory for the same core service. If we already have sufficient active partners in a city/province:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">Your application may be placed on hold, or temporarily declined</span>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mt-4">
            This keeps the program profitable for committed partners and avoids turning it into a crowded marketplace.
          </p>
        </section>

        {/* Fee Transparency Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            Fee Transparency + B2B Payment Flow (Simple)
          </h2>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Partners submit:
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Service list + clear scope (what's included/excluded)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Pricing chart (benchmarked vs market)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Working model
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                Lead → signs agreement + pays → becomes Client → partner delivers → partner invoices → payout processed
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-purple-500">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3">
                Referral commissions:
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Are recorded inside the Profile</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Become payable once conversion conditions are met</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Are paid within the agreed timeframe (e.g., 30 days where applicable)</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-4">Everything remains traceable to the Profile.</p>
            </div>
          </div>
        </section>

        {/* Simple Summary Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            That is RELOFY
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">1.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">Lead enters the system (signup / partner add / our onboarding).</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">2.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">We screen + route.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">3.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">When agreement is signed and fee is paid, Lead becomes Client.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">4.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">One Profile goes live.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">5.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">Right partner delivers.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0 text-lg">6.</span>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">Invoices and commissions are tracked and paid professionally.</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the RELOFY partner network and connect with clients globally. Build your business without expanding your office.
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
            Apply as Partner
          </Button>
        </section>
      </div>
    </div>
  );
}
