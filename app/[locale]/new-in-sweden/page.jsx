'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import React from 'react';

/**
 * @typedef {Object} QuickLinkItem
 * @property {string} title
 * @property {React.ReactElement} icon
 * @property {string} content
 */

/**
 * Memoized Quick Link Item Component
 * @param {{item: QuickLinkItem, index: number, expanded: number|boolean, onChange: Function}} props
 */
const QuickLinkItem = React.memo(({ item, index, expanded, onChange }) => (
  <Accordion
    expanded={expanded === index}
    onChange={onChange}
    sx={{
      mb: 1,
      boxShadow: 'none',
      border: '1px solid #e5e7eb',
      borderRadius: '8px !important',
      '&:before': { display: 'none' },
      '&.Mui-expanded': {
        margin: '0 0 8px 0',
      },
      '&:last-child': {
        mb: 0
      }
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: '#6b7280' }} />}
      sx={{
        minHeight: 48,
        '&.Mui-expanded': {
          minHeight: 48,
        },
        '& .MuiAccordionSummary-content': {
          margin: '8px 0',
          '&.Mui-expanded': {
            margin: '8px 0',
          }
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            bgcolor: '#174D87',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          {item.icon}
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#1f2937',
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </AccordionSummary>
    <AccordionDetails
      sx={{
        pt: 0,
        pb: 2,
        px: 2
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.7rem',
          color: '#6b7280',
          lineHeight: 1.6,
          whiteSpace: 'pre-line'
        }}
      >
        {item.content}
      </Typography>
    </AccordionDetails>
  </Accordion>
));

QuickLinkItem.displayName = 'QuickLinkItem';

export default function NewInSwedenPage() {
  const { t, i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);
  const [showAllUsefulLinks, setShowAllUsefulLinks] = useState(true);
  const [expandedQuickLink, setExpandedQuickLink] = useState(false);
  const [expandedSystemGuideSection, setExpandedSystemGuideSection] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsInitialized(true);
      window.scrollTo(0, 0);
    }
  }, [i18n.isInitialized]);

  const quickLinksData = React.useMemo(() => [
    { 
      title: t('newInSweden.systemGuide.quickLinks.emergency.title'), 
      icon: (
        <Box 
          component="img" 
          src="/emergency.svg" 
          alt="Emergency services icon"
          sx={{ 
            width: 24, 
            height: 24,
            filter: 'brightness(0) invert(1)'
          }}
        />
      ),
      content: t('newInSweden.systemGuide.quickLinks.emergency.content')
    },
    { 
      title: t('newInSweden.systemGuide.quickLinks.banks.title'), 
      icon: (
        <Box 
          component="img" 
          src="/banks.svg" 
          alt="Bank services icon"
          sx={{ 
            width: 24, 
            height: 24
          }}
        />
      ),
      content: t('newInSweden.systemGuide.quickLinks.banks.content')
    },
    { 
      title: t('newInSweden.systemGuide.quickLinks.healthcare.title'), 
      icon: (
        <Box 
          component="img" 
          src="/healthcare.svg" 
          alt="Healthcare services icon"
          sx={{ 
            width: 24, 
            height: 24,
            filter: 'brightness(0) invert(1)'
          }}
        />
      ),
      content: t('newInSweden.systemGuide.quickLinks.healthcare.content')
    },
    { 
      title: t('newInSweden.systemGuide.quickLinks.driving.title'), 
      icon: (
        <Box 
          component="img" 
          src="/driving-license.svg" 
          alt="Driving services icon"
          sx={{ 
            width: 24, 
            height: 24,
            filter: 'brightness(0) invert(1)'
          }}
        />
      ),
      content: t('newInSweden.systemGuide.quickLinks.driving.content')
    },
    { 
      title: t('newInSweden.systemGuide.quickLinks.transport.title'), 
      icon: (
        <Box 
          component="img" 
          src="/public-transport.svg" 
          alt="Public transport services icon"
          sx={{ 
            width: 24, 
            height: 24
          }}
        />
      ),
      content: t('newInSweden.systemGuide.quickLinks.transport.content')
    },
    { 
      title: t('newInSweden.systemGuide.quickLinks.languageSchool.title'), 
      icon: (
        <Box 
          component="img" 
          src="/language-school.svg" 
          alt="Language school services icon"
          sx={{ 
            width: 24, 
            height: 24,
            filter: 'brightness(0) invert(1)'
          }}
        />
      ),
      content: t('newInSweden.systemGuide.quickLinks.languageSchool.content')
    },
    { 
      title: t('newInSweden.systemGuide.quickLinks.studies.title'), 
      icon: (
        <Box 
          component="img" 
          src="/language-school.svg" 
          alt="Studies services icon"
          sx={{ 
            width: 24, 
            height: 24,
            filter: 'brightness(0) invert(1)'
          }}
        />
      ),
      content: t('newInSweden.systemGuide.quickLinks.studies.content')
    },
    { 
      title: t('newInSweden.systemGuide.quickLinks.government.title'), 
      icon: (
        <Box 
          component="img" 
          src="/language-school.svg" 
          alt="Government services icon"
          sx={{ 
            width: 24, 
            height: 24,
            filter: 'brightness(0) invert(1)'
          }}
        />
      ),
      content: t('newInSweden.systemGuide.quickLinks.government.content')
    },
    { 
      title: t('newInSweden.systemGuide.quickLinks.housing.title'), 
      icon: (
        <Box 
          component="img" 
          src="/language-school.svg" 
          alt="Housing services icon"
          sx={{ 
            width: 24, 
            height: 24,
            filter: 'brightness(0) invert(1)'
          }}
        />
      ),
      content: t('newInSweden.systemGuide.quickLinks.housing.content')
    },
    { 
      title: t('newInSweden.systemGuide.quickLinks.employment.title'), 
      icon: (
        <Box 
          component="img" 
          src="/language-school.svg" 
          alt="Employment services icon"
          sx={{ 
            width: 24, 
            height: 24,
            filter: 'brightness(0) invert(1)'
          }}
        />
      ),
      content: t('newInSweden.systemGuide.quickLinks.employment.content')
    }
  ], [t]);

  const handleQuickLinkChange = (index) => (event, isExpanded) => {
    setExpandedQuickLink(isExpanded ? index : false);
  };

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  const content = t('newInSweden', { returnObjects: true });
  const categories = Array.isArray(content?.authorityCategories) ? content.authorityCategories : [];
  const guides = Array.isArray(content?.gettingStarted?.guides) ? content.gettingStarted.guides : [];
  const emergencyNumbers = Array.isArray(content?.emergencyNumbers?.numbers) ? content.emergencyNumbers.numbers : [];
  const systemGuideSections = [
    { key: 'immigration', data: content?.systemGuide?.immigration },
    { key: 'workLabor', data: content?.systemGuide?.workLabor },
    { key: 'housingSupport', data: content?.systemGuide?.housingSupport },
    { key: 'educationSkills', data: content?.systemGuide?.educationSkills },
    { key: 'rightsEquality', data: content?.systemGuide?.rightsEquality },
    { key: 'lawOrder', data: content?.systemGuide?.lawOrder },
    { key: 'healthSafety', data: content?.systemGuide?.healthSafety },
    { key: 'environmentInfrastructure', data: content?.systemGuide?.environmentInfrastructure },
    { key: 'emergency', data: content?.systemGuide?.emergency },
    { key: 'democracy', data: content?.systemGuide?.democracy },
    { key: 'oversightData', data: content?.systemGuide?.oversightData }
  ].filter((section) => section.data);
  
  const usefulLinks = [
    { title: 'Migrationsverket (Swedish Migration Agency)', url: 'https://www.migrationsverket.se' },
    { title: 'Skatteverket (Swedish Tax Agency - Personnummer & ID)', url: 'https://www.skatteverket.se' },
    { title: 'Polisen (Swedish Police Authority - passports & ID cards)', url: 'https://polisen.se' },
    { title: 'Arbetsförmedlingen (Public Employment Service)', url: 'https://www.arbetsformedlingen.se' },
    { title: 'Försäkringskassan (Social Insurance Agency)', url: 'https://www.forsakringskassan.se' },
    { title: 'Pensionsmyndigheten (Swedish Pensions Agency)', url: 'https://www.pensionsmyndigheten.se' },
    { title: '1177 Vårdguiden (Healthcare Guidance)', url: 'https://www.1177.se' },
    { title: 'Läkemedelsverket (Medical Products Agency)', url: 'https://www.lakemedelsverket.se' },
    { title: 'MSB - Civil Contingencies Agency', url: 'https://www.msb.se' },
    { title: 'Skolverket (National Agency for Education)', url: 'https://www.skolverket.se' },
    { title: 'UHR - Swedish Council for Higher Education', url: 'https://www.uhr.se' },
    { title: 'CSN - Board of Student Finance', url: 'https://www.csn.se' },
    { title: 'Boverket (National Board of Housing, Building & Planning)', url: 'https://www.boverket.se' },
    { title: 'Transportstyrelsen (Transport Agency)', url: 'https://www.transportstyrelsen.se' },
    { title: 'Trafikverket (Transport Administration)', url: 'https://www.trafikverket.se' },
    { title: 'Naturvårdsverket (Environmental Protection Agency)', url: 'https://www.naturvardsverket.se' },
    { title: 'Jordbruksverket (Board of Agriculture - incl. bringing pets)', url: 'https://www.jordbruksverket.se' },
    { title: 'Elsäkerhetsverket (Electrical Safety Authority)', url: 'https://www.elsakerhetsverket.se' },
    { title: 'Energimyndigheten (Swedish Energy Agency)', url: 'https://www.energimyndigheten.se' },
    { title: 'SCB - Statistics Sweden', url: 'https://www.scb.se' },
    { title: 'Konsumentverket (Consumer Agency)', url: 'https://www.konsumentverket.se' },
    { title: 'Konsumentternas (Independent Consumer Bureau)', url: 'https://www.konsumentternas.se' },
    { title: 'DO - Equality Ombudsman', url: 'https://www.do.se' },
    { title: 'JO - Parliamentary Ombudsman', url: 'https://www.jo.se' },
    { title: 'Domstolsverket (Swedish Courts - appeals, administration)', url: 'https://www.domstol.se' },
    { title: 'Malmö Stad', url: 'https://malmo.se' },
    { title: 'Göteborg Stad', url: 'https://goteborg.se' },
    { title: 'Stockholm Stad', url: 'https://start.stockholm' },
    { title: 'Swedbank', url: 'https://swedbank.se' },
    { title: 'Svenska Kyrkan', url: 'https://svenskakyrkan.se' },
    { title: 'Lunds Kommun', url: 'https://lund.se' },
    { title: 'Helsingborgs Stad', url: 'https://helsingborg.se' },
    { title: 'Linköpings Kommun', url: 'https://linkoping.se' },
    { title: 'Örebro Kommun', url: 'https://orebro.se' },
    { title: 'Västerås Stad', url: 'https://vasteras.se' },
    { title: 'Uppsala Kommun', url: 'https://uppsala.se' },
    { title: 'SEB Bank', url: 'https://seb.se' },
    { title: 'Nordea', url: 'https://nordea.se' },
    { title: 'ICA Banken', url: 'https://www.icabanken.se' },
    { title: 'Telia (telecom & internet)', url: 'https://www.telia.se' },
    { title: 'Telenor (telecom & internet)', url: 'https://www.telenor.se' },
    { title: 'Tre (3) (telecom & internet)', url: 'https://www.tre.se' },
    { title: 'Tele2 (telecom & internet)', url: 'https://www.tele2.se' },
    { title: 'Ellevio (electricity grid company)', url: 'https://www.ellevio.se' },
    { title: 'E.ON Sverige (energy provider)', url: 'https://www.eon.se' },
    { title: 'Vattenfall (energy provider)', url: 'https://www.vattenfall.se' },
    { title: 'Your Europe (EU citizens rights portal)', url: 'https://europa.eu/youreurope' },
    { title: 'Driving Test', url: 'https://www.trafikverket.se/korkort/boka-prov/' },
    { title: 'Change your European Driving License', url: 'https://www.transportstyrelsen.se/sv/vagtrafik/korkortsarenden/kortkort-gr/' }
  ];
  return (
    <Box sx={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* Hero Section - CARD STYLE FROM FIGMA */}
      <section className="relative overflow-hidden border border-gray-300 rounded-lg mx-auto" style={{
        backgroundImage: 'url(/bg-new-in-sweden.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '1400px',
        maxWidth: 'calc(100% - 32px)',
        height: '289px',
        margin: '200px auto 0',
        marginTop: '160px'
      }}>
        {/* Overlay - Dark with #141A21 at 88% opacity */}
        <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: 'rgba(20, 26, 33, 0.88)' }}></div>

        <div className="relative h-full pt-6 sm:pt-8 pb-6 sm:pb-8 px-8 sm:px-10">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto h-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left Content */}
              <div>
                <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-bold text-white mb-2">
                  New in Sweden
                </h1>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-300 leading-[1.5] mb-2 font-medium">
                  Starting a new chapter in Sweden?
                </p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-400 leading-[1.5] pr-12 font-normal">
                  We're here to make your move seamless. From settling in to navigating local systems, we provide the guidance and support you need. Step into your new life with confidence and peace of mind.
                </p>
              </div>

              {/* Right - Illustration */}
              <div className="relative w-full flex justify-center lg:justify-end">
                <Image
                  src="/illustration-seo.svg"
                  alt="Swedish relocation illustration"
                  width={300}
                  height={200}
                  style={{ maxWidth: '100%', height: 'auto' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="pt-6 sm:pt-8 lg:pt-10 xl:pt-12 pb-16 sm:pb-20 lg:pb-24 xl:pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat Card 1 - Employment Rate */}
            <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-lg border border-gray-100" style={{ width: '301.5px', height: '123px' }}>
              <div>
                <p className="text-[11px] text-gray-600 font-semibold uppercase tracking-wide">Employment Rate</p>
                <p className="text-[1.5rem] font-bold text-gray-900">69.7%</p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/employment-rate.svg"
                  alt="Employment Rate"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            {/* Stat Card 2 - Yearly GDP */}
            <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-lg border border-gray-100" style={{ width: '301.5px', height: '123px' }}>
              <div>
                <p className="text-[11px] text-gray-600 font-semibold uppercase tracking-wide">Yearly GDP</p>
                <p className="text-[1.5rem] font-bold text-gray-900">SEK 6.38T</p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/Yearly-gdp.svg"
                  alt="Yearly GDP"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            {/* Stat Card 3 - Total Population */}
            <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-lg border border-gray-100" style={{ width: '301.5px', height: '123px' }}>
              <div>
                <p className="text-[11px] text-gray-600 font-semibold uppercase tracking-wide">Total Population</p>
                <p className="text-[1.5rem] font-bold text-gray-900">10.66 M</p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/total-population.svg"
                  alt="Total Population"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            {/* Stat Card 4 - Innovation List */}
            <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-lg border border-gray-100" style={{ width: '301.5px', height: '123px' }}>
              <div>
                <p className="text-[11px] text-gray-600 font-semibold uppercase tracking-wide">Global Innovation List</p>
                <p className="text-[1.5rem] font-bold text-gray-900">2</p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/total-population.svg"
                  alt="Global Innovation List"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Guide Section */}
      <div className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          {/* System Guide Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-20 gap-8">
            {/* Left Column - Main Content (65%) */}
            <div className="lg:col-span-13 space-y-8">
              {/* Main Content Header - Centered in Left Grid */}
              <div className="text-center mb-8">
                <p className="font-normal mb-3" style={{ color: '#6FAAEA', fontSize: '14px' }}>
                  {content.mainContent?.tagline || 'Helping you navigate, so you move one step way'}
                </p>
                <h2 className="font-extrabold mb-2" style={{ color: '#6FAAEA', fontSize: '38px' }}>
                  {content.mainContent?.title || 'Your First Steps to Success in Sweden'}
                </h2>
                <h3 className="font-extrabold" style={{ color: '#002C5C', fontSize: '42px' }}>
                  {content.mainContent?.subtitle || 'A Clear Roadmap for Every Newcomer'}
                </h3>
              </div>

              {/* Accommodation Section */}
              {content.accommodation && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.accommodation.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-4" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.accommodation.title}
                  </h4>
                  <div className="space-y-4">
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                      {content.accommodation.intro}
                    </p>
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                      {content.accommodation.firstVsSecondHand}
                    </p>
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                      {content.accommodation.waitingList}
                    </p>
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                      {content.accommodation.secondHandRisks}
                    </p>
                  </div>
                </div>
              )}

              {/* Personnummer Section */}
              {content.socialSecurity && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#174D87', fontSize: '12px' }}>
                    {content.socialSecurity.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-4" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.socialSecurity.title}
                  </h4>
                  <div className="space-y-4">
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{content.socialSecurity.intro}</p>
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{content.socialSecurity.importance}</p>
                    
                    {/* Requirements Section */}
                    {content.socialSecurity.requirements && (
                      <div className="rounded-lg overflow-hidden border border-gray-200">
                        {/* Blue Header */}
                        <div className="px-6 py-4" style={{ backgroundColor: '#174D87' }}>
                          <div className="font-semibold" style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                            {content.socialSecurity.requirements.take}
                          </div>
                          <div className="font-semibold" style={{ color: '#FFFFFF', fontSize: '14px' }}>{content.socialSecurity.requirements.subtitle}</div>
                        </div>
                        {/* Bullet Points */}
                        <div className="px-6 py-4 bg-white">
                          <ul className="space-y-3">
                            {Object.entries(content.socialSecurity.requirements.items).map(([key, value]) => (
                              <li key={key} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#174D87' }}></span>
                                <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{value}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Additional Sections */}
              {content.identificationCard && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.identificationCard.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-4" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.identificationCard.title}
                  </h4>
                  <div className="space-y-4">
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{content.identificationCard.intro}</p>
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{content.identificationCard.description}</p>
                  </div>
                </div>
              )}

              {/* Bank Account Section */}
              {content.bankAccount && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-4" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.bankAccount.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-6" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.bankAccount.title}
                  </h4>
                  <div className="space-y-4">
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{content.bankAccount.intro}</p>
                    
                    {/* Identification Methods */}
                    {content.bankAccount.identification && (
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#174D87' }}></span>
                          <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{content.bankAccount.identification.swedishDocuments}</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#174D87' }}></span>
                          <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{content.bankAccount.identification.foreignDocuments}</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#174D87' }}></span>
                          <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{content.bankAccount.identification.noValidDocuments}</p>
                        </li>
                      </ul>
                    )}

                    {/* Requirements Section */}
                    {content.bankAccount.requirements && (
                      <div className="rounded-lg overflow-hidden border border-gray-200">
                        {/* Blue Header */}
                        <div className="px-6 py-4" style={{ backgroundColor: '#174D87' }}>
                          <div className="font-semibold" style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                            {content.bankAccount.sectionTitle}
                          </div>
                          <div className="font-semibold" style={{ color: '#FFFFFF', fontSize: '14px' }}>{content.bankAccount.requirements.title}</div>
                        </div>
                        {/* Bullet Points */}
                        <div className="px-6 py-4 bg-white">
                          <ul className="space-y-3">
                            {content.bankAccount.requirements.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#174D87' }}></span>
                                <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{item}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Before Visiting Section */}
                    {content.bankAccount.beforeVisiting && (
                      <div className="rounded-lg overflow-hidden border border-gray-200">
                        {/* Blue Header */}
                        <div className="px-6 py-4" style={{ backgroundColor: '#174D87' }}>
                          <div className="font-semibold" style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                            {content.bankAccount.beforeVisiting.subtitle}
                          </div>
                          <div className="font-semibold" style={{ color: '#FFFFFF', fontSize: '14px' }}>{content.bankAccount.beforeVisiting.title}</div>
                        </div>
                        {/* Bullet Points */}
                        <div className="px-6 py-4 bg-white">
                          <ul className="space-y-3">
                            {content.bankAccount.beforeVisiting.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#174D87' }}></span>
                                <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{item}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Employment Section */}
              {content.employment && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.employment.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-4" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.employment.title}
                  </h4>
                  <div className="space-y-4">
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                      {content.employment.beforeLink}
                      <a 
                        href={content.employment.linkUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline" 
                        style={{ color: '#174D87' }}
                      >
                        {content.employment.linkText}
                      </a>
                      {content.employment.afterLink}
                    </p>
                  </div>
                </div>
              )}

              {/* Healthcare Section */}
              {content.healthcare && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.healthcare.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-6" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.healthcare.title}
                  </h4>
                  <div className="mb-6">
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                      {content.healthcare.description}
                    </p>
                  </div>
                  
                  {/* Maternity Clinics - Full Width */}
                  {content.healthcare.maternity && (
                    <div className="mb-6">
                      <div className="bg-[#174D87] rounded-lg p-4">
                        <p style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                          {content.healthcare.maternity.subtitle}
                        </p>
                        <p className="text-white font-bold" style={{ fontSize: '18px' }}>
                          {content.healthcare.maternity.title}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-b-lg border border-t-0 border-gray-200">
                        <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                          {content.healthcare.maternity.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Healthcare Sub-sections Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {/* Child Health Care Centre */}
                    {content.healthcare.childCare && (
                      <div>
                        <div className="bg-[#174D87] rounded-lg p-4">
                          <p style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                            {content.healthcare.childCare.subtitle}
                          </p>
                          <p className="text-white font-bold" style={{ fontSize: '18px' }}>
                            {content.healthcare.childCare.title}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-b-lg border border-t-0 border-gray-200">
                          <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                            {content.healthcare.childCare.description}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Costs and Fees */}
                    {content.healthcare.costs && (
                      <div>
                        <div className="bg-[#174D87] rounded-lg p-4">
                          <p style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                            {content.healthcare.costs.subtitle}
                          </p>
                          <p className="text-white font-bold" style={{ fontSize: '18px' }}>
                            {content.healthcare.costs.title}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-b-lg border border-t-0 border-gray-200">
                          <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                            {content.healthcare.costs.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Dental Care Grid */}
                  {content.healthcare.dentalCare && (
                    <div className="grid grid-cols-2 gap-6">
                      {/* Is Covered */}
                      {content.healthcare.dentalCare.coverage && (
                        <div>
                          <div className="bg-[#174D87] rounded-lg p-4">
                            <p style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                              {`${content.healthcare.dentalCare.coverage.subtitle.charAt(0).toUpperCase()}${content.healthcare.dentalCare.coverage.subtitle.slice(1).toLowerCase()}`}
                            </p>
                            <p className="text-white font-bold" style={{ fontSize: '18px' }}>
                              {content.healthcare.dentalCare.coverage.title}
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-b-lg border border-t-0 border-gray-200">
                            <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                              {content.healthcare.dentalCare.coverage.description}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Find Dentist */}
                      {content.healthcare.dentalCare.findDentist && (
                        <div>
                          <div className="bg-[#174D87] rounded-lg p-4">
                            <p style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                              {`${content.healthcare.dentalCare.findDentist.subtitle.charAt(0).toUpperCase()}${content.healthcare.dentalCare.findDentist.subtitle.slice(1).toLowerCase()}`}
                            </p>
                            <p className="text-white font-bold" style={{ fontSize: '18px' }}>
                              {content.healthcare.dentalCare.findDentist.title}
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-b-lg border border-t-0 border-gray-200">
                            <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                              {content.healthcare.dentalCare.findDentist.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Driving License Section */}
              {content.drivingLicense && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.drivingLicense.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-4" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.drivingLicense.title}
                  </h4>
                  <div className="space-y-4 mb-6">
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                      {content.drivingLicense.euLicense}
                    </p>
                    <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                      {content.drivingLicense.nonEuLicense}
                    </p>
                  </div>
                  {content.drivingLicense.steps && (
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <div className="px-6 py-4" style={{ backgroundColor: '#174D87' }}>
                        <p style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                          {content.drivingLicense.steps.subtitle}
                        </p>
                        <p className="font-semibold" style={{ color: '#FFFFFF', fontSize: '14px' }}>
                          {content.drivingLicense.steps.title}
                        </p>
                      </div>
                      <div className="px-6 py-4 bg-white">
                        <ul className="space-y-2">
                          {content.drivingLicense.steps.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#174D87' }}></span>
                              <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Parental Allowance Section */}
              {content.parentalAllowance && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.parentalAllowance.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-4" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.parentalAllowance.title}
                  </h4>
                  <div className="space-y-4 mb-6">
                    {content.parentalAllowance.registration && (
                      <div className="rounded-lg overflow-hidden border border-gray-200">
                        <div className="px-6 py-4" style={{ backgroundColor: '#174D87' }}>
                          <p style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                            {content.parentalAllowance.registration.subtitle}
                          </p>
                          <p className="font-semibold" style={{ color: '#FFFFFF', fontSize: '14px' }}>
                            {content.parentalAllowance.registration.title}
                          </p>
                        </div>
                        <div className="px-6 py-4 bg-white space-y-3">
                          <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                            {content.parentalAllowance.registration.description}
                          </p>
                          {content.parentalAllowance.details && (
                            <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                              {content.parentalAllowance.details}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  {content.parentalAllowance.childCareAllowance && (
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <div className="px-6 py-4" style={{ backgroundColor: '#174D87' }}>
                        <p style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                          {content.parentalAllowance.childCareAllowance.subtitle}
                        </p>
                        <p className="font-semibold" style={{ color: '#FFFFFF', fontSize: '14px' }}>
                          {content.parentalAllowance.childCareAllowance.title}
                        </p>
                      </div>
                      <div className="px-6 py-4 bg-white">
                        <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                          {content.parentalAllowance.childCareAllowance.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Language Section */}
              {content.language && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.language.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-6" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.language.title}
                  </h4>
                  <div className="mb-6">
                    <p className="leading-relaxed mb-4" style={{ color: '#898A9C', fontSize: '12px' }}>
                      {content.language.intro}
                    </p>
                    {content.language.options && (
                      <ul className="space-y-3">
                        {content.language.options.map((option, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#174D87' }}></span>
                            <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>{option}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {content.language.sfiDescription && (
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#174D87' }}>
                      <p className="leading-relaxed text-white text-center" style={{ fontSize: '12px' }}>
                        {content.language.sfiDescription}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Education Section */}
              {content.education && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.education.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-6" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.education.title}
                  </h4>
                  <div className="space-y-4">
                    {content.education.preschool && (
                      <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                        {content.education.preschool}
                      </p>
                    )}
                    {content.education.preschoolClass && (
                      <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                        {content.education.preschoolClass}
                      </p>
                    )}
                    {content.education.compulsorySchool && (
                      <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                        {content.education.compulsorySchool}
                      </p>
                    )}
                    {content.education.freeEducation && (
                      <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                        {content.education.freeEducation}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Qualification Recognition Section */}
              {content.qualificationRecognition && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.qualificationRecognition.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-4" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.qualificationRecognition.title}
                  </h4>
                  <div className="space-y-4">
                    {content.qualificationRecognition.ects && (
                      <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                        {content.qualificationRecognition.ects}
                      </p>
                    )}
                    {content.qualificationRecognition.authorities && (
                      <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                        {content.qualificationRecognition.authorities}
                      </p>
                    )}
                    {content.qualificationRecognition.guide && (
                      <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                        {content.qualificationRecognition.guide}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Unemployment Section */}
              {content.unemployment && (
                <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                  <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                    {content.unemployment.sectionTitle}
                  </p>
                  <h4 className="font-bold mb-4" style={{ color: '#000000', fontSize: '24px' }}>
                    {content.unemployment.title}
                  </h4>
                  <div className="space-y-4">
                    {content.unemployment.overview && (
                      <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                        {content.unemployment.overview}
                      </p>
                    )}
                    {content.unemployment.system && (
                      <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                        {content.unemployment.system}
                      </p>
                    )}
                    {content.unemployment.eligibility && (
                      <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '12px' }}>
                        {content.unemployment.eligibility}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* System Guide Categories */}
              {systemGuideSections.length > 0 && (
                <div className="space-y-6">
                  {/* System Guide Header */}
                  {content.systemGuide && (
                    <div className="mb-12">
                      {content.systemGuide.tagline && (
                        <p className="leading-relaxed mb-3 text-center" style={{ color: '#6FAAEA', fontSize: '14px', fontWeight: '400', marginTop: '80px' }}>
                          {content.systemGuide.tagline}
                        </p>
                      )}
                      {content.systemGuide.title && (
                        <h3 className="mb-2 text-center" style={{ color: '#6FAAEA', fontSize: '38px', fontWeight: '900' }}>
                          {content.systemGuide.title}
                        </h3>
                      )}
                      {content.systemGuide.subtitle && (
                        <p className="leading-relaxed text-center" style={{ color: '#002C5C', fontSize: '42px', fontWeight: '900' }}>
                          {content.systemGuide.subtitle}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Categories - Accordion Style */}
                  {systemGuideSections.map((section, index) => (
                    <div key={section.key}>
                      {/* Accordion Header */}
                      <button
                        onClick={() => setExpandedSystemGuideSection(expandedSystemGuideSection === index ? false : index)}
                        className="w-full bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden p-6 flex justify-between items-center hover:shadow-md transition-shadow"
                      >
                        <div className="text-left">
                          <p className="font-bold uppercase tracking-wider mb-2" style={{ color: '#6FAAEA', fontSize: '12px' }}>
                            {section.data.sectionTitle}
                          </p>
                          <h4 className="font-bold" style={{ color: '#000000', fontSize: '22px' }}>
                            {section.data.title}
                          </h4>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <ExpandMoreIcon 
                            sx={{ 
                              transform: expandedSystemGuideSection === index ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.3s ease',
                              color: '#6b7280',
                              fontSize: 28
                            }} 
                          />
                        </div>
                      </button>

                      {/* Accordion Content */}
                      {expandedSystemGuideSection === index && (
                        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {Object.entries(section.data)
                            .filter(([key]) => key !== 'sectionTitle' && key !== 'title')
                            .map(([key, value]) => (
                              <div key={key} className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                                <div className="bg-[#174D87] px-4 py-3">
                                  <p style={{ color: '#B8C5D6', fontSize: '12px', marginBottom: '4px' }}>
                                    {value.subtitle}
                                  </p>
                                  <p className="font-bold text-white" style={{ fontSize: '16px' }}>
                                    {value.title}
                                  </p>
                                </div>
                                <div className="p-4">
                                  <p className="leading-relaxed" style={{ color: '#898A9C', fontSize: '13px' }}>
                                    {value.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}


            </div>

            {/* Right Column - Sidebar (35%) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Essential Quick Links */}
              <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                <div className="bg-[#174D87] text-white px-6 py-4">
                  <h4 className="text-[0.95rem] font-bold">Essential Quick Links</h4>
                </div>
                <div className="p-4">
                  {quickLinksData.map((item, index) => (
                    <QuickLinkItem
                      key={index}
                      item={item}
                      index={index}
                      expanded={expandedQuickLink}
                      onChange={handleQuickLinkChange(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Useful Links */}
              <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                {/* Blue header with title and description */}
                <div className="bg-[#174D87] px-6 py-5 rounded-t-xl">
                  <h4 className="text-[1.1rem] font-bold text-white mb-2">
                    Useful Links
                  </h4>
                  <p className="text-[0.75rem] leading-relaxed text-white opacity-90">
                    Public Authorities & Services in Sweden (for Newcomers)
                  </p>
                </div>
                
                {/* White content area with link cards */}
                <div className="p-6 bg-white rounded-b-xl">
                  {usefulLinks.slice(0, showAllUsefulLinks ? usefulLinks.length : 10).map((link, idx) => (
                    <div 
                      key={idx} 
                      className="mb-4 last:mb-4 rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div className="p-4">
                        <p className="text-[0.75rem] font-semibold text-gray-800 mb-1 leading-snug">
                          {link.title}
                        </p>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[0.7rem] font-medium text-[#174D87] hover:text-[#1e3a8a] hover:underline break-all block"
                        >
                          {link.url}
                        </a>
                      </div>
                    </div>
                  ))}

                  {/* View More / View Less buttons */}
                  <div className="flex justify-center gap-4 mt-4">
                    {!showAllUsefulLinks && usefulLinks.length > 10 && (
                      <button
                        onClick={() => setShowAllUsefulLinks(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#174D87] text-white text-[0.75rem] font-semibold transition-all duration-200 hover:bg-[#1e3a8a] hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        <span>View More</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}

                    {showAllUsefulLinks && (
                      <button
                        onClick={() => setShowAllUsefulLinks(false)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#174D87] text-white text-[0.75rem] font-semibold transition-all duration-200 hover:bg-[#1e3a8a] hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        <span>View Less</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      {guides.length > 0 && content.gettingStarted && (
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
            {content.gettingStarted?.subtitle && (
              <p className="text-[13px] sm:text-[14px] text-blue-500 font-semibold mb-3">
                {content.gettingStarted.subtitle}
              </p>
            )}
            {content.gettingStarted?.mainHeading && (
              <h2 className="text-[1.5rem] sm:text-[1.85rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-blue-500 mb-2">
                {content.gettingStarted.mainHeading}
              </h2>
            )}
            {content.gettingStarted?.heading && (
              <h3 className="text-[1.3rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-bold text-gray-900 mb-12">
                {content.gettingStarted.heading}
              </h3>
            )}

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {guides?.map((guide, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-7">
                    <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold text-gray-900 mb-3">
                      {guide.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.6] mb-4">
                      {guide.description}
                    </p>

                    {guide.details && (
                      <div className="space-y-3 text-[12px] sm:text-[13px]">
                        {guide.details.handled && (
                          <div>
                            <p className="text-[11px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Handled By</p>
                            <p className="text-gray-900 font-medium">{guide.details.handled}</p>
                          </div>
                        )}
                        {guide.details.requirements && (
                          <div>
                            <p className="text-[11px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Requirements</p>
                            <p className="text-gray-900 font-medium">{guide.details.requirements}</p>
                          </div>
                        )}
                        {guide.details.features && (
                          <div>
                            <p className="text-[11px] text-gray-500 font-bold mb-1 uppercase tracking-wider">What You Get</p>
                            <p className="text-gray-900 font-medium">{guide.details.features}</p>
                          </div>
                        )}
                        {guide.details.tips && (
                          <div>
                            <p className="text-[11px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Pro Tip</p>
                            <p className="text-gray-900 font-medium">{guide.details.tips}</p>
                          </div>
                        )}
                      </div>
                    )}

                    <button className="mt-6 text-blue-600 font-semibold text-[13px] hover:text-blue-700 transition inline-flex items-center gap-2">
                      Learn More
                      <span>›</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Essential Quick Reads */}
              <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                <div className="bg-[#174D87] text-white px-6 py-4">
                  <h4 className="text-[0.95rem] font-bold">Essential Quick Links</h4>
                </div>
                <div className="p-4">
                  {quickLinksData.map((item, index) => (
                    <QuickLinkItem
                      key={index}
                      item={item}
                      index={index}
                      expanded={expandedQuickLink}
                      onChange={handleQuickLinkChange(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Useful Links */}
              <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                {/* Blue header with title and description */}
                <div className="bg-[#174D87] px-6 py-5 rounded-t-xl">
                  <h4 className="text-[1.1rem] font-bold text-white mb-2">
                    Useful Links
                  </h4>
                  <p className="text-[0.75rem] leading-relaxed text-white opacity-90">
                    Public Authorities & Services in Sweden (for Newcomers)
                  </p>
                </div>
                
                {/* White content area with link cards */}
                <div className="p-6 bg-white rounded-b-xl">
                  {usefulLinks.slice(0, showAllUsefulLinks ? usefulLinks.length : 10).map((link, idx) => (
                    <div 
                      key={idx} 
                      className="mb-4 last:mb-4 rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div className="p-4">
                        <p className="text-[0.75rem] font-semibold text-gray-800 mb-1 leading-snug">
                          {link.title}
                        </p>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[0.7rem] font-medium text-[#174D87] hover:text-[#1e3a8a] hover:underline break-all block"
                        >
                          {link.url}
                        </a>
                      </div>
                    </div>
                  ))}
                  
                  {/* View More / View Less buttons */}
                  <div className="flex justify-center gap-4 mt-4">
                    {!showAllUsefulLinks && usefulLinks.length > 10 && (
                      <button
                        onClick={() => setShowAllUsefulLinks(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#174D87] text-white text-[0.75rem] font-semibold transition-all duration-200 hover:bg-[#1e3a8a] hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        <span>View More</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                    
                    {showAllUsefulLinks && (
                      <button
                        onClick={() => setShowAllUsefulLinks(false)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#174D87] text-white text-[0.75rem] font-semibold transition-all duration-200 hover:bg-[#1e3a8a] hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        <span>View Less</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </Box>
  );
}
