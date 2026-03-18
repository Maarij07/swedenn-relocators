'use client';

import Navbar from '../../components/Navbar';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const INDUSTRY_PROFESSIONALS = [
  { label: 'Immigration Consultant', icon: '⚖️' },
  { label: 'Freelancer / Independent Expert', icon: '🧑‍💻' },
  { label: 'Property Broker', icon: '🏠' },
  { label: 'Relocation Company', icon: '🚚' },
  { label: 'Immigration Firm', icon: '🏛️' },
  { label: 'Lawyer / Legal Advisor / Law Firm', icon: '📜' },
  { label: 'Visa & Travel Consultant', icon: '✈️' },
  { label: 'Self Employed Specialist', icon: '💼' },
  { label: 'University / Education Provider', icon: '🎓' },
];

const SERVICE_PROVIDERS = [
  { label: 'Expat & Business Support Services', icon: '🌍' },
  { label: 'Health Insurance Companies', icon: '🏥' },
  { label: 'Logistics Partners', icon: '📦' },
  { label: 'Pet Relocation Firms', icon: '🐾' },
  { label: 'Accounting Firms', icon: '📊' },
  { label: 'Money Transfer Firms', icon: '💳' },
  { label: 'Property Management Firms', icon: '🏢' },
];

const BENEFITS = [
  {
    title: 'Qualified Client Pipeline',
    description: 'Access a steady stream of pre-screened, ready-to-act clients who need exactly what you offer. No cold outreach. Every lead is already in motion.',
    accent: 'bg-blue-50 border-blue-200',
    dot: 'bg-blue-500',
  },
  {
    title: 'Zero Office Overhead',
    description: 'Expand your service reach across Sweden and the Nordics without opening new offices or hiring extra staff. Grow through the platform.',
    accent: 'bg-green-50 border-green-200',
    dot: 'bg-green-500',
  },
  {
    title: 'Transparent Commissions',
    description: 'Every referral, every conversion, every payment tracked in real time on your dashboard. No black box. No chasing invoices.',
    accent: 'bg-purple-50 border-purple-200',
    dot: 'bg-purple-500',
  },
  {
    title: 'One Verified Profile',
    description: 'Your credentials, services, pricing, and availability in one digital profile. Clients and the RELOFY system match you automatically.',
    accent: 'bg-orange-50 border-orange-200',
    dot: 'bg-orange-500',
  },
  {
    title: 'GDPR-Compliant by Design',
    description: 'You only see the client data you need, when you need it. Privacy-first architecture protects both you and your clients.',
    accent: 'bg-red-50 border-red-200',
    dot: 'bg-red-500',
  },
  {
    title: 'Cross-Referral Network',
    description: 'Partners refer clients to each other within the network. A property broker refers to an immigration consultant. A law firm refers to a relocation company. Everyone grows.',
    accent: 'bg-indigo-50 border-indigo-200',
    dot: 'bg-indigo-500',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Apply & Get Verified',
    description: 'Submit your partner application through the portal. Our team reviews your credentials, company registration, and service area. Verified partners gain full access.',
    color: 'text-[#247FE1]',
    bg: 'bg-[#EBF4FF]',
  },
  {
    step: '02',
    title: 'Build Your Profile',
    description: 'Set up your one digital profile: specialisations, pricing, availability, languages, and coverage area. This is what the system uses to match you with clients.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    step: '03',
    title: 'Receive Matched Leads',
    description: "When a client's case matches your profile, you receive a notification. Review the case, accept or decline. You are always in control.",
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    step: '04',
    title: 'Deliver & Earn',
    description: 'Complete the service, update milestones on the platform, and get paid. Commissions are tracked automatically and paid on confirmed conversions.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
];

const TRUST_POINTS = [
  { label: 'Identity & credential verification for all partners', icon: '🔐' },
  { label: 'Client KYC and document validation before case assignment', icon: '📋' },
  { label: 'Fraud prevention built into the intake process', icon: '🛡️' },
  { label: "GDPR-compliant data sharing. Only what's needed, when it's needed", icon: '🔒' },
  { label: 'All commissions recorded and traceable on your dashboard', icon: '📈' },
  { label: 'Professional standards enforced across the network', icon: '✅' },
];

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

  if (!isReady) return null;

  return (
    <div className="min-h-screen bg-[#F8F9FE]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] pb-20 sm:pb-24 lg:pb-28 bg-[#F8F9FE]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Grow Your Business.<br />
                <span className="text-[#247FE1]">Join the Network</span> That<br />
                Moves People Forward.
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed mb-8">
                RELOFY is Sweden Relocators' verified partner ecosystem, connecting immigration professionals, legal experts, property specialists, and service providers with qualified clients across the Nordic region and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://portal.swedenrelocators.se/partner-signup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white text-sm sm:text-base font-semibold rounded-full hover:bg-gray-800 transition-colors shadow-md"
                >
                  Become a Partner
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-gray-800 text-sm sm:text-base font-semibold rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
                >
                  See How It Works
                </a>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-gray-200">
                {[
                  { value: '4', label: 'Countries' },
                  { value: '21+', label: 'Service Categories' },
                  { value: '19+', label: 'Languages Served' },
                  { value: '2015', label: 'Established' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-[480px] aspect-square rounded-3xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center gap-3 text-gray-400">
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium text-gray-400">Visual — Napkin AI</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">

          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Who Can Join RELOFY?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Two distinct partner tracks, each designed to match the way you already work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">

            {/* Industry Professionals */}
            <div className="bg-[#F8F9FE] rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-[#0f172a] px-6 sm:px-8 py-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#247FE1]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#247FE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Industry Professionals</h3>
                  <p className="text-xs sm:text-sm text-white/60">Experts who guide clients through the process</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {INDUSTRY_PROFESSIONALS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-[#247FE1]/40 hover:shadow-sm transition-all duration-200"
                    >
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Providers */}
            <div className="bg-[#F8F9FE] rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-[#0f172a] px-6 sm:px-8 py-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Service Providers</h3>
                  <p className="text-xs sm:text-sm text-white/60">Companies that deliver on-the-ground services</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICE_PROVIDERS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-green-400/50 hover:shadow-sm transition-all duration-200"
                    >
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Visual placeholder inside card */}
                <div className="mt-6 w-full h-36 rounded-xl border-2 border-dashed border-gray-200 bg-[#F8F9FE] flex flex-col items-center justify-center gap-2 text-gray-400">
                  <svg className="w-7 h-7 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs font-medium">Visual — Napkin AI</p>
                </div>
              </div>
            </div>

          </div>

          {/* Callout */}
          <div className="mt-10 bg-[#EBF4FF] border-l-4 border-[#247FE1] rounded-xl px-6 sm:px-8 py-5 sm:py-6">
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
              ✓ Whether you work independently or run a firm, if you serve people relocating to or from Sweden, RELOFY has a place for you.
            </p>
          </div>

        </div>
      </section>

      {/* ── WHY JOIN ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FE]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">

          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              What You Get as a Partner
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl">
              RELOFY isn't just a referral list. It's a structured business growth platform built for relocation professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className={`rounded-2xl border p-6 sm:p-7 ${benefit.accent} hover:shadow-md transition-shadow duration-300`}
              >
                <div className={`w-3 h-3 rounded-full ${benefit.dot} mb-4`} />
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                How RELOFY Works
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10">
                From application to active partnership. A clear, protected process that puts you in control.
              </p>

              <div className="space-y-6">
                {HOW_IT_WORKS.map((step, idx) => (
                  <div key={step.step} className="flex gap-5">
                    <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center flex-shrink-0`}>
                      <span className={`text-sm font-bold ${step.color}`}>{step.step}</span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">{step.description}</p>
                      {idx < HOW_IT_WORKS.length - 1 && (
                        <div className="mt-4 ml-[-29px] pl-[29px] border-l-2 border-dashed border-gray-200 h-4" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="lg:sticky lg:top-32">
              <div className="w-full aspect-[4/3] rounded-3xl border-2 border-dashed border-gray-300 bg-[#F8F9FE] flex flex-col items-center justify-center gap-3 text-gray-400">
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium text-gray-400">How It Works Flow — Napkin AI</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── ONE PROFILE SYSTEM ───────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0f172a]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Your Biggest Advantage
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                The One Profile System
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
                One verified digital profile is all you need. Your credentials, services, pricing, availability, and coverage area in one place. The RELOFY system automatically matches you with the right clients.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Verified identity & company registration', desc: 'Your profile is backed by real verification. Clients trust you before you even speak.' },
                  { label: 'Document vault & checklist tracking', desc: 'Every case has its own secure space. Nothing falls through the cracks.' },
                  { label: 'Privacy by design', desc: 'Only the partners who need specific data receive it: housing, immigration, legal, logistics. Each sees only their part.' },
                  { label: 'Real-time milestone tracking', desc: 'You, the client, and Sweden Relocators all see progress at the same time. Total transparency.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                    <div className="w-5 h-5 rounded-full bg-[#247FE1] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white mb-0.5">{item.label}</p>
                      <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="w-full aspect-square rounded-3xl border-2 border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center gap-3 text-white/30">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium">One Profile Visual — Napkin AI</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── TRUST & COMPLIANCE ───────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FE]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Visual placeholder */}
            <div className="hidden lg:flex w-full aspect-[4/3] rounded-3xl border-2 border-dashed border-gray-300 bg-white items-center justify-center gap-3 text-gray-400 flex-col">
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium text-gray-400">Trust Framework — Napkin AI</p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Built on Trust. Protected by Design.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                We protect both partners and clients with verified processes, professional standards, and transparent financial flows.
              </p>

              <div className="space-y-3">
                {TRUST_POINTS.map((point) => (
                  <div key={point.label} className="flex items-start gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                    <span className="text-xl flex-shrink-0">{point.icon}</span>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">{point.label}</p>
                  </div>
                ))}
              </div>

              {/* Commission clarity */}
              <div className="mt-8 rounded-2xl bg-[#EBF4FF] border-l-4 border-[#247FE1] p-6">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3">How Commissions Work</h3>
                <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <p>• You submit your services and pricing to your profile</p>
                  <p>• When a client converts, the commission is automatically recorded</p>
                  <p>• Payments are traceable on your dashboard. No chasing required</p>
                  <p>• No hidden fees. No ambiguity. What you see is what you earn.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── REAL SCENARIOS ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">

          <div className="text-center mb-12 sm:mb-14">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Real Scenarios. Real Growth.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              See how partners across different specialisations grow within the RELOFY network.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                role: 'Immigration Consultant',
                scenario: 'A client arrives on the platform needing a work permit. You handle the permit. The system assigns a housing partner and an accountant automatically. Everyone delivers. Everyone earns.',
                border: 'border-blue-200',
                tag: 'Industry Professional',
                tagColor: 'bg-blue-50 text-blue-700',
              },
              {
                role: 'Property Broker',
                scenario: "A relocation case comes in. The immigration side is handled by a verified consultant. You receive the housing component. Your listings are pre-matched to the client's budget and preferred area.",
                border: 'border-green-200',
                tag: 'Industry Professional',
                tagColor: 'bg-green-50 text-green-700',
              },
              {
                role: 'Logistics Partner',
                scenario: 'A family relocating from Germany needs their belongings moved to Malmö. The platform assigns you the logistics component. You deliver, update milestones, and get paid.',
                border: 'border-purple-200',
                tag: 'Service Provider',
                tagColor: 'bg-purple-50 text-purple-700',
              },
              {
                role: 'Health Insurance Company',
                scenario: 'Every client who arrives in Sweden needs health coverage. You are pre-listed as a verified insurance partner. Eligible clients see your offerings at the right moment in their journey.',
                border: 'border-orange-200',
                tag: 'Service Provider',
                tagColor: 'bg-orange-50 text-orange-700',
              },
              {
                role: 'Accounting Firm',
                scenario: 'Self-employed professionals and new business owners need local tax and bookkeeping support. You receive referrals from immigration cases that reach the financial setup stage.',
                border: 'border-red-200',
                tag: 'Service Provider',
                tagColor: 'bg-red-50 text-red-700',
              },
              {
                role: 'University / Education Provider',
                scenario: 'Families relocating with children need school placement. Your institution is listed and matched with incoming families in your catchment area. Qualified leads. Zero cold outreach.',
                border: 'border-indigo-200',
                tag: 'Industry Professional',
                tagColor: 'bg-indigo-50 text-indigo-700',
              },
            ].map((s) => (
              <div key={s.role} className={`bg-[#F8F9FE] rounded-2xl border ${s.border} p-6 sm:p-7 hover:shadow-md transition-shadow duration-300`}>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">{s.role}</h3>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${s.tagColor}`}>{s.tag}</span>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">{s.scenario}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FE]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">

          <div className="bg-[#0f172a] rounded-3xl p-10 sm:p-14 lg:p-16 text-center relative overflow-hidden">
            {/* Subtle grid background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />

            <div className="relative">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
                Ready to Grow Within a Network That Actually Works?
              </h2>
              <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
                Apply today. Get verified. Start receiving matched client cases across the Nordic region, with full transparency and zero overhead.
              </p>

              {/* 3 quick wins */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {['Zero office overhead', 'Transparent commissions', 'Qualified client pipeline'].map((point) => (
                  <div key={point} className="flex items-center gap-2 bg-white/10 text-white text-xs sm:text-sm px-4 py-2 rounded-full border border-white/10">
                    <svg className="w-3.5 h-3.5 text-[#247FE1]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>

              <a
                href="https://portal.swedenrelocators.se/partner-signup/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-gray-900 text-sm sm:text-base font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                Join RELOFY. Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <p className="mt-5 text-xs text-white/40">
                Applications are reviewed within 3–5 business days. Verified partners gain immediate portal access.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
