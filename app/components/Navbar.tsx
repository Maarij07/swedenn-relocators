'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

interface DropdownMenu {
  [key: string]: boolean;
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flagCode: string;
}

const languageMap: Record<string, Language> = {
  en: { code: 'en', name: 'English', nativeName: 'English', flagCode: 'us' },
  sv: { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flagCode: 'se' },
  da: { code: 'da', name: 'Danish', nativeName: 'Dansk', flagCode: 'dk' },
  no: { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flagCode: 'no' },
  fi: { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flagCode: 'fi' },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', flagCode: 'de' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', flagCode: 'fr' },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', flagCode: 'it' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', flagCode: 'es' },
  el: { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flagCode: 'gr' },
  nl: { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flagCode: 'nl' },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', flagCode: 'ae' },
  fa: { code: 'fa', name: 'Persian', nativeName: 'فارسی', flagCode: 'ir' },
  ur: { code: 'ur', name: 'Urdu', nativeName: 'اردو', flagCode: 'pk' },
  pa: { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flagCode: 'in' },
  ps: { code: 'ps', name: 'Pashto', nativeName: 'پشتو', flagCode: 'af' },
  te: { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flagCode: 'in' },
  ta: { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flagCode: 'in' },
  nb: { code: 'nb', name: 'Norwegian', nativeName: 'Norsk', flagCode: 'no' },
};

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const [isOpen, setIsOpen] = useState(false);
  const [languageSelectorOpen, setLanguageSelectorOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [displayLanguage, setDisplayLanguage] = useState<Language>(languageMap.en);
  const [openDropdowns, setOpenDropdowns] = useState<DropdownMenu>({
    services: false,
    housing: false,
    assessment: false,
  });
  
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Update display language when i18n language changes
    const langCode = i18n.language || 'en';
    setCurrentLanguage(langCode);
    setDisplayLanguage(languageMap[langCode] || languageMap.en);
  }, [i18n.language]);

  useEffect(() => {
    // Close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.keys(dropdownRefs.current).every(key => {
        const ref = dropdownRefs.current[key];
        return !ref || !ref.contains(event.target as Node);
      });
      
      if (clickedOutside) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (key: string) => {
    setOpenDropdowns(prev => ({
      services: false,
      housing: false,
      assessment: false,
      [key]: !prev[key]
    }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdowns({ services: false, housing: false, assessment: false });
  };

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    setDisplayLanguage(languageMap[languageCode] || languageMap.en);
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
                  src={`https://flagcdn.com/w40/${displayLanguage.flagCode}.png`}
                  alt={displayLanguage.name}
                  className="w-5 h-4 4k:w-10 4k:h-8 rounded-sm object-cover"
                />
                <span className="text-sm lg:text-base 4k:text-xl text-gray-700 font-medium hidden sm:inline">
                  {displayLanguage.name}
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
              <div className="relative group" ref={(el: HTMLDivElement | null) => { if (el) dropdownRefs.current['services'] = el; }}>
                <div className="flex items-center gap-1">
                  <a
                    href={`/${locale}/services`}
                    className="text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
                  >
                    {t('navbar.links.services')}
                  </a>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('services');
                    }}
                    onMouseEnter={() => {
                      if (!openDropdowns.services) {
                        toggleDropdown('services');
                      }
                    }}
                    className="p-1 hover:text-blue-600 transition-colors"
                    aria-label="Toggle services menu"
                  >
                    <svg className={`w-4 h-4 4k:w-7 4k:h-7 transition-transform duration-200 ${openDropdowns.services ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {openDropdowns.services && (
                  <div
                    className="dropdown-menu dropdown-menu--services absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 py-8 sm:py-10 px-3 sm:px-6 xl:px-12 z-50"
                  >
                    <div className="grid grid-cols-4 gap-8 xl:gap-12">
                      {/* IMMIGRATION Column */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">{t('navbar.dropdowns.services.immigration')}</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/asylum`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.asylum')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.asylumDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/relocate-to-sweden`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.relocateToSweden')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.relocateToSwedenDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/relocate-to-denmark`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.relocateToDenmark')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.relocateToDenmarkDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/work-permit`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.workPermit')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.workPermitDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/study-in-eu`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.studyInEu')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.studyInEuDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/global-visit-visas`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.globalVisitVisas')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.globalVisitVisasDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/appeal-cases`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.appealCases')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.appealCasesDesc')}</div>
                          </a>
                        </div>
                      </div>

                      {/* BUSINESS Column */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">{t('navbar.dropdowns.services.business')}</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/business-permit`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.businessPermit')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.businessPermitDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/business-visit`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.businessVisit')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.businessVisitDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/logistics-services`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.logisticsServices')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.logisticsServicesDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/company-registration`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.companyRegistration')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.companyRegistrationDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/eor-payroll`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.eorPayroll')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.eorPayrollDesc')}</div>
                          </a>
                        </div>
                      </div>

                      {/* FAMILY Column */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">{t('navbar.dropdowns.services.family')}</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/family-reunification`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.familyReunification')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.familyReunificationDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/eu-citizens-parents-permit`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.euCitizensParentsPermit')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.euCitizensParentsPermitDesc')}</div>
                          </a>
                        </div>
                      </div>

                      {/* CITIZENSHIP Column */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">{t('navbar.dropdowns.services.citizenship')}</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/citizenship`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.citizenshipLabel')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.citizenshipDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/eu-citizens-relocation`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.euCitizensRelocation')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.euCitizensRelocationDesc')}</div>
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
                {t('navbar.links.about')}
              </a>

              {/* Housing Dropdown */}
              <div className="relative group" ref={(el: HTMLDivElement | null) => { if (el) dropdownRefs.current['housing'] = el; }}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('housing');
                  }}
                  onMouseEnter={() => {
                    if (!openDropdowns.housing) {
                      toggleDropdown('housing');
                    }
                  }}
                  className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
                  aria-label="Toggle housing menu"
                >
                  {t('navbar.links.housing')}
                  <svg className={`w-4 h-4 4k:w-7 4k:h-7 transition-transform duration-200 ${openDropdowns.housing ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdowns.housing && (
                  <div
                    className="dropdown-menu absolute left-0 mt-2 w-[28rem] 4k:w-[32rem] bg-white rounded-lg shadow-2xl border border-gray-200 py-6 px-6 z-50"
                  >
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-xs 4k:text-sm tracking-wider">{t('navbar.dropdowns.housing.availableHousing')}</h3>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.housing.availableHousingLink')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.housing.availableHousingDesc')}</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.housing.rentalApartments')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.housing.rentalApartmentsDesc')}</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.housing.studentHousing')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.housing.studentHousingDesc')}</div>
                        </a>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-xs 4k:text-sm tracking-wider">{t('navbar.dropdowns.housing.lookingForHousing')}</h3>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.housing.housingSearch')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.housing.housingSearchDesc')}</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.housing.roommateMatching')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.housing.roommateMatchingDesc')}</div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Assessment Dropdown */}
              <div className="relative group" ref={(el: HTMLDivElement | null) => { if (el) dropdownRefs.current['assessment'] = el; }}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('assessment');
                  }}
                  onMouseEnter={() => {
                    if (!openDropdowns.assessment) {
                      toggleDropdown('assessment');
                    }
                  }}
                  className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
                  aria-label="Toggle assessment menu"
                >
                  {t('navbar.links.assessment')}
                  <svg className={`w-4 h-4 4k:w-7 4k:h-7 transition-transform duration-200 ${openDropdowns.assessment ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdowns.assessment && (
                  <div
                    className="dropdown-menu absolute left-0 mt-2 w-[28rem] 4k:w-[32rem] bg-white rounded-lg shadow-2xl border border-gray-200 py-6 px-6 z-50"
                  >
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-xs 4k:text-sm tracking-wider">{t('navbar.dropdowns.assessment.visaAssessments')}</h3>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.assessment.businessVisa')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.assessment.businessVisaDesc')}</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.assessment.visitVisa')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.assessment.visitVisaDesc')}</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.assessment.studentVisa')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.assessment.studentVisaDesc')}</div>
                        </a>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-xs 4k:text-sm tracking-wider">{t('navbar.dropdowns.assessment.permitsAndStatus')}</h3>
                        <a href={`/${locale}/assessment/family-reunification`} className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.assessment.familyReunification')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.assessment.familyReunificationDesc')}</div>
                        </a>
                        <a href={`/${locale}/assessment/work-permit`} className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.assessment.workPermit')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.assessment.workPermitDesc')}</div>
                        </a>
                        <a href="#" className="block px-2 py-2.5 text-sm 4k:text-base text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="font-semibold">{t('navbar.dropdowns.assessment.longTermEU')}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{t('navbar.dropdowns.assessment.longTermEUDesc')}</div>
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
                {t('navbar.links.contact')}
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 4k:gap-6 flex-shrink-0">
              <button className="px-5 xl:px-6 4k:px-12 py-2.5 xl:py-3 4k:py-6 text-sm xl:text-[15px] 4k:text-2xl font-medium text-black bg-white border-2 border-black rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                {t('navbar.links.bookAppointment')}
              </button>
              <button className="px-5 xl:px-6 4k:px-12 py-2.5 xl:py-3 4k:py-6 text-sm xl:text-[15px] 4k:text-2xl font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-all whitespace-nowrap">
                {t('navbar.links.login')}
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
                {t('navbar.links.about')}
              </a>
              <a href={`/${locale}/housing`} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                {t('navbar.links.housing')}
              </a>
              <a href={`/${locale}/assessment`} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                {t('navbar.links.assessment')}
              </a>
              <a href={`/${locale}/contact`} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                {t('navbar.links.contact')}
              </a>

              <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                <button className="w-full px-4 py-3 text-base text-black bg-white border-2 border-black rounded-lg hover:bg-gray-50 transition-colors">
                  {t('navbar.links.bookAppointment')}
                </button>
                <button className="w-full px-4 py-3 text-base text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
                  {t('navbar.links.login')}
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
        onLanguageChange={handleLanguageChange}
      />
    </nav>
  );
}