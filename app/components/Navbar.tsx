'use client';

import Image from 'next/image';
import { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

interface DropdownMenu {
  [key: string]: boolean;
}

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const isSv = i18n.language === 'sv';
  const [isOpen, setIsOpen] = useState(false);
  const [languageSelectorOpen, setLanguageSelectorOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [openDropdowns, setOpenDropdowns] = useState<DropdownMenu>({
    services: false,
    housing: false,
    assessment: false,
  });

  const toggleDropdown = (key: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdowns({ services: false, housing: false, assessment: false });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">

      {/* Top Info Bar with Scrolling Animation */}
      <div className="bg-white/80 border-b border-gray-100 overflow-hidden backdrop-blur-sm">
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
            display: flex;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          .scroll-item {
            white-space: nowrap;
            flex-shrink: 0;
          }
        `}</style>

        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="flex items-center justify-between h-9 sm:h-10 4k:h-16 text-[11px] sm:text-xs 4k:text-xl text-gray-600">

            {/* Left side stats with animation */}
            <div className="hidden md:flex items-center overflow-hidden flex-1">
              <div className="flex items-center gap-8 lg:gap-12 4k:gap-16 animate-scroll">
                {/* First set */}
                <span className="scroll-item whitespace-nowrap text-xs lg:text-sm 4k:text-lg">{t('navbar.topBar.employmentRate')}</span>
                <span className="scroll-item whitespace-nowrap text-xs lg:text-sm 4k:text-lg">{t('navbar.topBar.educationRate')}</span>
                <span className="scroll-item whitespace-nowrap text-xs lg:text-sm 4k:text-lg">{t('navbar.topBar.genderRatio')}</span>
                <span className="scroll-item flex items-center gap-2 4k:gap-3 text-xs lg:text-sm 4k:text-lg">
                  <span className="text-base 4k:text-2xl">🇸🇪</span>
                  <span>{t('navbar.topBar.countryName')}</span>
                </span>
                <span className="scroll-item whitespace-nowrap text-xs lg:text-sm 4k:text-lg">{t('navbar.topBar.gdp')}</span>
                <span className="scroll-item whitespace-nowrap text-xs lg:text-sm 4k:text-lg">{t('navbar.topBar.population')}</span>

                {/* Duplicate for seamless loop */}
                <span className="scroll-item whitespace-nowrap text-xs lg:text-sm 4k:text-lg">{t('navbar.topBar.employmentRate')}</span>
                <span className="scroll-item whitespace-nowrap text-xs lg:text-sm 4k:text-lg">{t('navbar.topBar.educationRate')}</span>
                <span className="scroll-item whitespace-nowrap text-xs lg:text-sm 4k:text-lg">{t('navbar.topBar.genderRatio')}</span>
                <span className="scroll-item flex items-center gap-2 4k:gap-3 text-xs lg:text-sm 4k:text-lg">
                  <span className="text-base 4k:text-2xl">🇸🇪</span>
                  <span>{t('navbar.topBar.countryName')}</span>
                </span>
                <span className="scroll-item whitespace-nowrap text-xs lg:text-sm 4k:text-lg">{t('navbar.topBar.gdp')}</span>
                <span className="scroll-item whitespace-nowrap text-xs lg:text-sm 4k:text-lg">{t('navbar.topBar.population')}</span>
              </div>
            </div>

            {/* RIGHT side - Language Selector */}
            <div className="ml-auto flex items-center gap-4 lg:gap-6 4k:gap-12">
              <button
                onClick={() => setLanguageSelectorOpen(true)}
                className="flex items-center gap-2 4k:gap-4 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <img
                  src={`https://flagcdn.com/w40/us.png`}
                  alt="Language"
                  className="w-5 h-4 4k:w-10 4k:h-8 rounded-sm object-cover"
                />
                <span className="text-sm lg:text-base 4k:text-xl text-gray-700 font-medium hidden sm:inline">
                  {isSv ? 'Engelska' : 'English'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="flex items-center justify-between h-16 sm:h-20 4k:h-32">

            {/* Logo */}
            <a href={`/${locale}`} className="flex items-center flex-shrink-0">
              <div className="relative w-36 sm:w-44 lg:w-48 4k:w-96 h-10 sm:h-12 4k:h-24">
                <Image
                  src="/logo.svg"
                  alt="Sweden Relocators"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 4k:gap-14">
              <style jsx>{`
                @keyframes slideDown {
                  from {
                    opacity: 0;
                    transform: translateY(-12px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .dropdown-menu {
                  animation: slideDown 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                .dropdown-menu--services {
                  /* Narrower on laptops so all 4 columns stay fully visible */
                  width: min(100vw - 40px, 820px);
                }
                @media (min-width: 1280px) {
                  .dropdown-menu--services {
                    width: 90vw;
                    max-width: 1000px;
                  }
                }
              `}</style>

              <a
                href={`/${locale}/new-in-sweden`}
                className="text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
              >
                {t('navbar.links.newInSweden')}
              </a>

              {/* Services Dropdown - label navigates to /services on click */}
              <div className="relative group">
                <a
                  href={`/${locale}/services`}
                  className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
                  onMouseEnter={() => toggleDropdown('services')}
                  onMouseLeave={closeAllDropdowns}
                >
                  {t('navbar.links.services')}
                  <svg className={`w-4 h-4 4k:w-7 4k:h-7 transition-transform duration-200 ${openDropdowns.services ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                {openDropdowns.services && (
                  <div
                    className="dropdown-menu dropdown-menu--services absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 py-8 sm:py-10 px-3 sm:px-6 xl:px-12 z-50"
                    onMouseEnter={() => toggleDropdown('services')}
                    onMouseLeave={closeAllDropdowns}
                  >
                    <div className="grid grid-cols-4 gap-8 xl:gap-12">
                      {/* IMMIGRATION Column */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">IMMIGRATION</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/asylum`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Asylum</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">You must be in Sweden to apply for asylum</div>
                          </a>
                          <a href={`/${locale}/services/relocate-to-sweden`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Relocate to Sweden</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">Personal identification number</div>
                          </a>
                          <a href={`/${locale}/services/relocate-to-denmark`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Relocate to Denmark</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">CPR is the Central Civil Registration</div>
                          </a>
                          <a href={`/${locale}/services/work-permit`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Work Permit</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">Work permit refers to a legal document</div>
                          </a>
                          <a href={`/${locale}/services/study-in-eu`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Study in EU</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">If you're considering studying in Europe</div>
                          </a>
                          <a href={`/${locale}/services/global-visit-visas`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Global Visit Visas</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">For visiting Sweden for a short period</div>
                          </a>
                          <a href={`/${locale}/services/appeal-cases`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Appeal Cases</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">Expert help with immigration appeals</div>
                          </a>
                        </div>
                      </div>

                      {/* BUSINESS Column */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">BUSINESS</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/business-permit`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Business Permit</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">Swedish business culture and practices</div>
                          </a>
                          <a href={`/${locale}/services/business-visit`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Business Visit</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">Foreign individuals wanting to visit Sweden</div>
                          </a>
                          <a href={`/${locale}/services/logistics-services`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Logistics Services</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">Streamline your move with our logistics...</div>
                          </a>
                          <a href={`/${locale}/services/company-registration`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Company Registration</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">If you're planning to register a company</div>
                          </a>
                          <a href={`/${locale}/services/eor-payroll`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">EOR & Payroll</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">We provide you with an easy solution</div>
                          </a>
                        </div>
                      </div>

                      {/* FAMILY Column */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">FAMILY</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/family-reunification`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Family Reunification</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">Family reunification is a legal process</div>
                          </a>
                          <a href={`/${locale}/services/eu-citizens-parents-permit`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">EU Citizens' Parents Permit</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">Parents of a child under 18 years</div>
                          </a>
                        </div>
                      </div>

                      {/* CITIZENSHIP Column */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">CITIZENSHIP</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/citizenship`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">Citizenship</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">When you live in Sweden for a certain period...</div>
                          </a>
                          <a href={`/${locale}/services/eu-citizens-relocation`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">EU Citizens' Relocation</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">Family reunification means family members...</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href={`/${locale}/about`}
                className="text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
              >
                {isSv ? 'Om oss' : 'About us'}
              </a>

              {/* Housing Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
                  onMouseEnter={() => toggleDropdown('housing')}
                  onMouseLeave={closeAllDropdowns}
                >
                  {t('navbar.links.housing')}
                  <svg className={`w-4 h-4 4k:w-7 4k:h-7 transition-transform duration-200 ${openDropdowns.housing ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdowns.housing && (
                  <div
                    className="dropdown-menu absolute left-0 mt-2 w-[28rem] 4k:w-[32rem] bg-white rounded-lg shadow-2xl border border-gray-200 py-6 px-6 z-50"
                    onMouseEnter={() => toggleDropdown('housing')}
                    onMouseLeave={closeAllDropdowns}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-xs 4k:text-sm tracking-wider">AVAILABLE HOUSING</h3>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Available Housing</div>
                          <div className="text-xs text-gray-600 mt-0.5">Browse all available housing options</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Rental Apartments</div>
                          <div className="text-xs text-gray-600 mt-0.5">Find furnished and unfurnished apartments</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Student Housing</div>
                          <div className="text-xs text-gray-600 mt-0.5">Housing dedicated for students</div>
                        </a>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-xs 4k:text-sm tracking-wider">LOOKING FOR HOUSING</h3>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Housing Search</div>
                          <div className="text-xs text-gray-600 mt-0.5">Let us help you find the right home</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Roommate Matching</div>
                          <div className="text-xs text-gray-600 mt-0.5">Find compatible roommates and shared housing</div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Assessment Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
                  onMouseEnter={() => toggleDropdown('assessment')}
                  onMouseLeave={closeAllDropdowns}
                >
                  {t('navbar.links.assessment')}
                  <svg className={`w-4 h-4 4k:w-7 4k:h-7 transition-transform duration-200 ${openDropdowns.assessment ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdowns.assessment && (
                  <div
                    className="dropdown-menu absolute left-0 mt-2 w-[28rem] 4k:w-[32rem] bg-white rounded-lg shadow-2xl border border-gray-200 py-6 px-6 z-50"
                    onMouseEnter={() => toggleDropdown('assessment')}
                    onMouseLeave={closeAllDropdowns}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-xs 4k:text-sm tracking-wider">VISA ASSESSMENTS</h3>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Business Visa</div>
                          <div className="text-xs text-gray-600 mt-0.5">Business visa allows travel for business purposes</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Visit Visa</div>
                          <div className="text-xs text-gray-600 mt-0.5">Visit visa allows short stays in Sweden</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Student Visa</div>
                          <div className="text-xs text-gray-600 mt-0.5">Student visa allows studying in Sweden</div>
                        </a>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-xs 4k:text-sm tracking-wider">PERMITS AND STATUS</h3>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Family Reunification</div>
                          <div className="text-xs text-gray-600 mt-0.5">Family reunification visa allows family members to join</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Work Permit</div>
                          <div className="text-xs text-gray-600 mt-0.5">Work permit authorizes employment in Sweden</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">Long-term EU Residence</div>
                          <div className="text-xs text-gray-600 mt-0.5">Long-term residence status for long-term residents</div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href={`/${locale}/contact`}
                className="text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
              >
                {isSv ? 'Kontakta oss' : 'Contact us'}
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 4k:gap-6 flex-shrink-0">
              <button className="px-5 xl:px-6 4k:px-12 py-2.5 xl:py-3 4k:py-6 text-sm xl:text-[15px] 4k:text-2xl font-medium text-black bg-white border-2 border-black rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                {isSv ? 'Boka möte' : 'Book Appointment'}
              </button>
              <button className="px-5 xl:px-6 4k:px-12 py-2.5 xl:py-3 4k:py-6 text-sm xl:text-[15px] 4k:text-2xl font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-all whitespace-nowrap">
                {isSv ? 'Logga in' : 'Login'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-6 pt-2 space-y-1 border-t border-gray-100">
              <a href={`/${locale}/new-in-sweden`} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                {t('navbar.links.newInSweden')}
              </a>
              <a href={`/${locale}/services`} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                {t('navbar.links.services')}
              </a>
              <a href={`/${locale}/about`} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                {t('navbar.links.aboutUs')}
              </a>
              <a href={`/${locale}/housing`} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                {t('navbar.links.housing')}
              </a>
              <a href={`/${locale}/assessment`} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                {t('navbar.links.assessment')}
              </a>
              <a href={`/${locale}/contact`} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                {t('navbar.links.contactUs')}
              </a>

              <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                <button className="w-full px-4 py-3 text-base text-black bg-white border-2 border-black rounded-lg hover:bg-gray-50 transition-colors">
                  {t('navbar.buttons.bookAppointment')}
                </button>
                <button className="w-full px-4 py-3 text-base text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
                  {t('navbar.buttons.login')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Language Selector Modal */}
      <LanguageSelector
        open={languageSelectorOpen}
        onClose={() => setLanguageSelectorOpen(false)}
        currentLanguage={currentLanguage}
        onLanguageChange={(code) => setCurrentLanguage(code)}
      />
    </nav>
  );
}