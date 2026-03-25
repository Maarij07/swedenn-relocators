'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useParams, usePathname } from 'next/navigation';
import { NavDropdownPaper } from './NavDropdown.styles';
import OutlinedNavButton from './OutlinedNavButton';
import ContainedNavButton from './ContainedNavButton';

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
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path + '/');
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
      <div className="bg-[#F8F9FE]/80 border-b border-gray-100 overflow-hidden backdrop-blur-sm">
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
      <div className="bg-[#F8F9FE] shadow-sm">
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
                  /* Force compact width for styling verification */
                  width: min(90vw, 70vw) !important;
                  left: 50% !important;
                  transform: translateX(-50%) !important;
                }
                @media (min-width: 1280px) {
                  .dropdown-menu--services {
                    width: min(90vw, 70vw) !important;
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                  }
                }

              `}</style>

              <a
                href={`/${locale}/new-in-sweden`}
                className={`inline-flex items-center gap-1.5 text-[0.875rem] leading-[1.57] 4k:text-2xl transition-colors whitespace-nowrap ${isActive(`/${locale}/new-in-sweden`) ? 'text-[#2563eb] font-semibold' : 'text-[#637381] font-medium hover:text-[#2563eb]'}`}
              >
                {isActive(`/${locale}/new-in-sweden`) && <span className="w-2 h-2 rounded-full bg-[#2563eb] flex-shrink-0" />}
                {t('navbar.links.newInSweden')}
              </a>

              <style>{`
                .dropdown-menu a:hover > div:first-child {
                  color: #2563eb;
                }
              `}</style>

              {/* Services Dropdown - label navigates to /services on click */}
              <div className="relative group" ref={(el: HTMLDivElement | null) => { if (el) dropdownRefs.current['services'] = el; }}>
                <div className="flex items-center gap-1">
                  <a
                    href={`/${locale}/services`}
                    className={`inline-flex items-center gap-1.5 text-[0.875rem] leading-[1.57] 4k:text-2xl transition-colors whitespace-nowrap ${isActive(`/${locale}/services`) ? 'text-[#2563eb] font-semibold' : 'text-[#637381] font-medium hover:text-[#2563eb]'}`}
                  >
                    {isActive(`/${locale}/services`) && <span className="w-2 h-2 rounded-full bg-[#2563eb] flex-shrink-0" />}
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
                    className="p-1 hover:text-[#2563eb] transition-colors"
                    aria-label="Toggle services menu"
                  >
                    <svg className={`w-4 h-4 4k:w-7 4k:h-7 transition-transform duration-200 ${openDropdowns.services ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {openDropdowns.services && (
                  <NavDropdownPaper
                    className="dropdown-menu dropdown-menu--services absolute left-1/2 mt-2 z-50"
                    style={{ width: '70vw', maxWidth: '70vw', transform: 'translateX(-50%)' }}
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-8 2xl:gap-12">
                      {/* Column 1: Immigration */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">{t('navbar.dropdowns.services.immigration')}</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/appeal-cases`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.appealCases')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.appealCasesDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/family-reunification`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.familyReunification')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.familyReunificationDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/study-in-eu`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.studyInEu')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.studyInEuDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/work-permit`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.workPermit')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.workPermitDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/self-employed`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.selfEmployed')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.selfEmployedDesc')}</div>
                          </a>
                        </div>
                      </div>

                      {/* Column 2: Relocation & Lifestyle */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">{t('navbar.dropdowns.services.relocation')}</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/au-pair-host-family`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.auPair')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.auPairDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/destination-services`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.destinationServices')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.destinationServicesDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/housing`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.housingServices')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.housingServicesDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/pet-relocation`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.petRelocation')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.petRelocationDesc')}</div>
                          </a>
                        </div>
                      </div>

                      {/* Column 3: Business & Finance */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">{t('navbar.dropdowns.services.business')}</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/bookkeeping-solutions`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.bookkeeping')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.bookkeepingDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/business-sale-purchase`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.businessSale')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.businessSaleDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/eor-payroll`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.eorPayroll')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.eorPayrollDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/financial-management`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.financialManagement')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.financialManagementDesc')}</div>
                          </a>
                        </div>
                      </div>

                      {/* Column 4: EU & Citizenship */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">{t('navbar.dropdowns.services.citizenship')}</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/citizenship`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.swedishCitizenship')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.swedishCitizenshipDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/eu-citizens-parents-permit`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.euParentsPermit')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.euParentsPermitDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/eu-citizens-relocation`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.euCitizensRelocation')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.euCitizensRelocationDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/cbi-rbi-programs`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.cbiRbi')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.cbiRbiDesc')}</div>
                          </a>
                        </div>
                      </div>

                      {/* Column 5: Support Services */}
                      <div>
                        <h3 className="text-[10px] font-bold text-gray-400 mb-5 tracking-[0.15em] uppercase">{t('navbar.dropdowns.services.support')}</h3>
                        <div className="space-y-4">
                          <a href={`/${locale}/services/buy-sell-property`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.buySellProperty')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.buySellPropertyDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/lawyers`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.lawyers')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.lawyersDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/logistics-services`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.logistics')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.logisticsDesc')}</div>
                          </a>
                          <a href={`/${locale}/services/manpower-solutions`} className="block">
                            <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.services.manpower')}</div>
                            <div className="text-[13px] text-gray-600 leading-relaxed">{t('navbar.dropdowns.services.manpowerDesc')}</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavDropdownPaper>
                )}
              </div>

              <a
                href={`/${locale}/about`}
                className={`inline-flex items-center gap-1.5 text-[0.875rem] leading-[1.57] 4k:text-2xl transition-colors whitespace-nowrap ${isActive(`/${locale}/about`) ? 'text-[#2563eb] font-semibold' : 'text-[#637381] font-medium hover:text-[#2563eb]'}`}
              >
                {isActive(`/${locale}/about`) && <span className="w-2 h-2 rounded-full bg-[#2563eb] flex-shrink-0" />}
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
                  className={`flex items-center gap-1.5 text-[0.875rem] leading-[1.57] 4k:text-2xl transition-colors whitespace-nowrap ${isActive(`/${locale}/housing`) ? 'text-[#2563eb] font-semibold' : 'text-[#637381] font-medium hover:text-[#2563eb]'}`}
                  aria-label="Toggle housing menu"
                >
                  {isActive(`/${locale}/housing`) && <span className="w-2 h-2 rounded-full bg-[#2563eb] flex-shrink-0" />}
                  {t('navbar.links.housing')}
                  <svg className={`w-4 h-4 4k:w-7 4k:h-7 transition-transform duration-200 ${openDropdowns.housing ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdowns.housing && (
                  <NavDropdownPaper
                    className="dropdown-menu absolute left-1/2 mt-2 z-50"
                    style={{ width: '40vw', maxWidth: '40vw', transform: 'translateX(-50%)' }}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <a href="https://portal.swedenrelocators.se/property-management/housing/short-rental/book-now/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.housing.shortTermRentals')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.housing.shortTermRentalsDesc')}</div>
                        </a>
                        <a href="https://portal.swedenrelocators.se/property-management/housing/buy-property/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.housing.buySellProperty')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.housing.buySellPropertyDesc')}</div>
                        </a>
                      </div>
                      <div className="space-y-4">
                        <a href="https://portal.swedenrelocators.se/property-management/housing/long-rental/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.housing.longTermRentals')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.housing.longTermRentalsDesc')}</div>
                        </a>
                        <a href="https://portal.swedenrelocators.se/property-management/housing/list-property/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.housing.listYourProperty')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.housing.listYourPropertyDesc')}</div>
                        </a>
                      </div>
                    </div>
                  </NavDropdownPaper>
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
                  className={`flex items-center gap-1.5 text-[0.875rem] leading-[1.57] 4k:text-2xl transition-colors whitespace-nowrap ${isActive(`/${locale}/assessment`) ? 'text-[#2563eb] font-semibold' : 'text-[#637381] font-medium hover:text-[#2563eb]'}`}
                  aria-label="Toggle assessment menu"
                >
                  {isActive(`/${locale}/assessment`) && <span className="w-2 h-2 rounded-full bg-[#2563eb] flex-shrink-0" />}
                  {t('navbar.links.assessment')}
                  <svg className={`w-4 h-4 4k:w-7 4k:h-7 transition-transform duration-200 ${openDropdowns.assessment ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdowns.assessment && (
                  <NavDropdownPaper
                    className="dropdown-menu absolute left-1/2 mt-2 z-50"
                    style={{ width: '40vw', maxWidth: '40vw', transform: 'translateX(-50%)' }}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <a href="https://portal.swedenrelocators.se/immigration-services/eligibility/assessment/sweden/familyReunification/eu-family-reunification-eu-directive/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.assessment.familyReunificationEU')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.assessment.familyReunificationEUDesc')}</div>
                        </a>
                        <a href="https://portal.swedenrelocators.se/immigration-services/eligibility/assessment/sweden/familyReunification/family-reunification-national-law/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.assessment.familyReunificationNational')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.assessment.familyReunificationNationalDesc')}</div>
                        </a>
                        <a href="https://portal.swedenrelocators.se/immigration-services/eligibility/assessment/sweden/familyReunification/family-maintenance-requirement/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.assessment.familyMaintenance')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.assessment.familyMaintenanceDesc')}</div>
                        </a>
                        <a href="https://portal.swedenrelocators.se/immigration-services/eligibility/assessment/sweden/self-employed/self-employed-permit-assessment/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.assessment.selfEmployed')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.assessment.selfEmployedDesc')}</div>
                        </a>
                        <a href="https://portal.swedenrelocators.se/immigration-services/eligibility/assessment/sweden/studyingSweden/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.assessment.studySweden')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.assessment.studySwedenDesc')}</div>
                        </a>
                      </div>
                      <div className="space-y-4">
                        <a href="https://portal.swedenrelocators.se/immigration-services/eligibility/assessment/sweden/workPermit/work-permit-sweden/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.assessment.workPermit')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.assessment.workPermitDesc')}</div>
                        </a>
                        <a href="https://portal.swedenrelocators.se/immigration-services/eligibility/assessment/sweden/workPermit/eu-long-term-residence-holders/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.assessment.longtermEuStatus')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.assessment.longtermEuStatusDesc')}</div>
                        </a>
                        <a href="https://portal.swedenrelocators.se/immigration-services/eligibility/assessment/GeneralAssessment/EuropeDigitalNomadVisa/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.assessment.digitalNomadVisa')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.assessment.digitalNomadVisaDesc')}</div>
                        </a>
                        <a href="https://portal.swedenrelocators.se/immigration-services/eligibility/assessment/sweden/workPermit/job-seeker-visa-eligibility/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.assessment.jobSeekerSweden')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.assessment.jobSeekerSwedenDesc')}</div>
                        </a>
                        <a href="https://portal.swedenrelocators.se/immigration-services/visa/visit/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">{t('navbar.dropdowns.assessment.globalVisitVisa')}</div>
                          <div className="text-[13px] text-gray-600">{t('navbar.dropdowns.assessment.globalVisitVisaDesc')}</div>
                        </a>
                      </div>
                    </div>
                  </NavDropdownPaper>
                )}
              </div>

              <a
                href={`/${locale}/contact`}
                className={`inline-flex items-center gap-1.5 text-[0.875rem] leading-[1.57] 4k:text-2xl transition-colors whitespace-nowrap ${isActive(`/${locale}/contact`) ? 'text-[#2563eb] font-semibold' : 'text-[#637381] font-medium hover:text-[#2563eb]'}`}
              >
                {isActive(`/${locale}/contact`) && <span className="w-2 h-2 rounded-full bg-[#2563eb] flex-shrink-0" />}
                {t('navbar.links.contact')}
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 4k:gap-6 flex-shrink-0">
              <OutlinedNavButton
                href="https://portal.swedenrelocators.se/management/appointments/book/"
                label={t('navbar.links.bookAppointment')}
              />
              <ContainedNavButton
                href="https://portal.swedenrelocators.se/signin/?returnTo=%2F"
                label={t('navbar.links.login')}
              />
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
                <OutlinedNavButton
                  href="https://portal.swedenrelocators.se/management/appointments/book/"
                  label={t('navbar.links.bookAppointment')}
                  className="w-full px-4 py-3 text-base"
                />
                <ContainedNavButton
                  href="https://portal.swedenrelocators.se/signin/?returnTo=%2F"
                  label={t('navbar.links.login')}
                  className="w-full px-4 py-3 text-base"
                />
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
