'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';

// Icon Box for Stats
function StatIcon({ src, alt }) {
  return (
    <Box
      sx={{
        width: 56,
        height: 56,
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #eef5ff 0%, #e6efff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        style={{ objectFit: 'contain' }}
        priority
      />
    </Box>
  );
}

export default function NewInSwedenPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      i18n.on('initialized', () => setIsReady(true));
    }
  }, [i18n]);

  if (!isReady) return null;

  const content = t('newInSweden', { returnObjects: true });

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        
        {/* Hero Section - Full Width */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {t('newInSweden.hero.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {t('newInSweden.hero.subtitle')}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {t('newInSweden.intro.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {t('newInSweden.intro.description')}
          </p>
        </section>

        {/* Statistics Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Employment Rate Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-blue-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Employment Rate
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    69.7%
                  </h3>
                </div>
                <StatIcon src={"/new-in-sweden/Employment%20Rate.png"} alt="Employment Rate" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Strong job market and employment opportunities
              </p>
            </div>

            {/* Yearly GDP Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-green-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Yearly GDP
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    SEK 6.38T
                  </h3>
                </div>
                <StatIcon src={"/new-in-sweden/Yearly%20GDP.png"} alt="Yearly GDP" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                One of the world's largest economies by GDP per capita
              </p>
            </div>

            {/* Total Population Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-orange-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Total Population
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    10.66 M
                  </h3>
                </div>
                <StatIcon src={"/new-in-sweden/Total%20Population.png"} alt="Total Population" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Welcoming communities across all regions
              </p>
            </div>

            {/* Global Innovation Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-purple-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Global Innovation
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    #2
                  </h3>
                </div>
                <StatIcon src={"/new-in-sweden/Global%20Innovation.png"} alt="Global Innovation" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                World leader in innovation and technology
              </p>
            </div>
          </div>
        </section>

        {/* Two Column Layout - Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Content - Main Sections */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-10">

        {/* Accommodation Section */}
        {content.accommodation && (
          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
              {content.accommodation.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-3xl">
              {content.accommodation.intro}
            </p>
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 border-l-4 border-blue-500">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                {t('newInSweden.accommodation.sectionTitle')}
              </h3>
              <div className="space-y-4">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.accommodation.firstVsSecondHand}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.accommodation.waitingList}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.accommodation.secondHandRisks}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Social Security Section */}
        {content.socialSecurity && (
          <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
              {content.socialSecurity.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              {content.socialSecurity.intro}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              {content.socialSecurity.importance}
            </p>
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                {content.socialSecurity.requirements.subtitle}
              </h3>
              <ul className="space-y-3">
                {Object.entries(content.socialSecurity.requirements.items).map(([key, value]) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-green-600"></span>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">{value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Identification Card Section */}
        {content.identificationCard && (
          <section className="mb-8 sm:mb-10 lg:mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 border-l-4 border-blue-500">
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 sm:mb-3">
                {content.identificationCard.sectionTitle}
              </span>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                {content.identificationCard.title}
              </h3>
              <div className="space-y-4">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.identificationCard.intro}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.identificationCard.description}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Bank Account Section */}
        {content.bankAccount && (
          <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
              {content.bankAccount.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              {content.bankAccount.intro}
            </p>
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {/* Identification Methods */}
              <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                  Identification Methods
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700">{content.bankAccount.identification.swedishDocuments}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700">{content.bankAccount.identification.foreignDocuments}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700">{content.bankAccount.identification.noValidDocuments}</p>
                  </li>
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                  {content.bankAccount.requirements.title}
                </h3>
                <ul className="space-y-2">
                  {content.bankAccount.requirements.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Before Visiting */}
              <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-orange-500">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                  {content.bankAccount.beforeVisiting.title}
                </h3>
                <ul className="space-y-2">
                  {content.bankAccount.beforeVisiting.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Employment Section */}
        {content.employment && (
          <section className="mb-8 sm:mb-10 lg:mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 border-t-4 border-blue-500">
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 sm:mb-3">
                {content.employment.sectionTitle}
              </span>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                {content.employment.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {content.employment.beforeLink}
                <a 
                  href={content.employment.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  {content.employment.linkText}
                </a>
                {content.employment.afterLink}
              </p>
            </div>
          </section>
        )}

        {/* Healthcare Section */}
        {content.healthcare && (
          <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
              {content.healthcare.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 leading-relaxed">
              {content.healthcare.description}
            </p>

            {/* Maternity Clinics */}
            {content.healthcare.maternity && (
              <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-purple-500 mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                  {content.healthcare.maternity.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.healthcare.maternity.description}
                </p>
              </div>
            )}

            {/* Healthcare Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8">
              {/* Child Care */}
              {content.healthcare.childCare && (
                <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                    {content.healthcare.childCare.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    {content.healthcare.childCare.description}
                  </p>
                </div>
              )}

              {/* Costs */}
              {content.healthcare.costs && (
                <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                    {content.healthcare.costs.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    {content.healthcare.costs.description}
                  </p>
                </div>
              )}
            </div>

            {/* Dental Care Grid */}
            {content.healthcare.dentalCare && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Coverage */}
                {content.healthcare.dentalCare.coverage && (
                  <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-orange-500">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                      {content.healthcare.dentalCare.coverage.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {content.healthcare.dentalCare.coverage.description}
                    </p>
                  </div>
                )}

                {/* Find Dentist */}
                {content.healthcare.dentalCare.findDentist && (
                  <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                      {content.healthcare.dentalCare.findDentist.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {content.healthcare.dentalCare.findDentist.description}
                    </p>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* Driving License Section */}
        {content.drivingLicense && (
          <section className="mb-8 sm:mb-10 lg:mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 border-t-4 border-blue-500">
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 sm:mb-3">
                {content.drivingLicense.sectionTitle}
              </span>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                {content.drivingLicense.title}
              </h3>
              <div className="space-y-4 mb-6">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.drivingLicense.euLicense}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.drivingLicense.nonEuLicense}
                </p>
              </div>
              {content.drivingLicense.steps && (
                <div className="bg-[#F3F4F6] rounded-lg p-4 sm:p-6">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-4">
                    {content.drivingLicense.steps.title}
                  </h4>
                  <ul className="space-y-3">
                    {content.drivingLicense.steps.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Parental Allowance Section */}
        {content.parentalAllowance && (
          <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
              {content.parentalAllowance.title}
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {/* Registration */}
              {content.parentalAllowance.registration && (
                <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                    {content.parentalAllowance.registration.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-3">
                    {content.parentalAllowance.registration.description}
                  </p>
                  {content.parentalAllowance.details && (
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {content.parentalAllowance.details}
                    </p>
                  )}
                </div>
              )}

              {/* Child Care Allowance */}
              {content.parentalAllowance.childCareAllowance && (
                <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                    {content.parentalAllowance.childCareAllowance.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    {content.parentalAllowance.childCareAllowance.description}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Education Section */}
        {content.education && (
          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
              {content.education.title}
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {[
                { label: 'Preschool', text: content.education.preschool },
                { label: 'Preschool Class', text: content.education.preschoolClass },
                { label: 'Compulsory School', text: content.education.compulsorySchool },
                { label: 'Free Education', text: content.education.freeEducation }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500"
                >
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Language Section */}
        {content.language && (
          <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
              {content.language.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-3xl">
              {content.language.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
              {content.language.options.map((option, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500"
                >
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    {option}
                  </p>
                </div>
              ))}
            </div>
            {content.language.sfiDescription && (
              <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  <strong>SFI (Swedish for Immigrants):</strong> {content.language.sfiDescription}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Qualification Recognition Section */}
        {content.qualificationRecognition && (
          <section className="mb-8 sm:mb-10 lg:mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10">
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 sm:mb-3">
                {content.qualificationRecognition.sectionTitle}
              </span>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-6">
                {content.qualificationRecognition.title}
              </h3>
              <div className="space-y-4">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.qualificationRecognition.ects}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.qualificationRecognition.authorities}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {content.qualificationRecognition.guide}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Unemployment Section */}
        {content.unemployment && (
          <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
              {content.unemployment.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                { title: 'Overview', text: content.unemployment.overview },
                { title: 'System', text: content.unemployment.system },
                { title: 'Eligibility', text: content.unemployment.eligibility }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-lg p-4 sm:p-6 border-t-4 border-blue-500"
                >
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Important Links Sidebar */}
            <div className="sticky top-32 space-y-6 sm:space-y-8">
              
              {/* Quick Links Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 pb-4 border-b-2 border-blue-500">
                  Quick Access
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#accommodation" className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
                      → Accommodation
                    </a>
                  </li>
                  <li>
                    <a href="#personal-number" className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
                      → Personal ID Number
                    </a>
                  </li>
                  <li>
                    <a href="#banking" className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
                      → Bank Account
                    </a>
                  </li>
                  <li>
                    <a href="#healthcare" className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
                      → Healthcare
                    </a>
                  </li>
                  <li>
                    <a href="#employment" className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
                      → Employment
                    </a>
                  </li>
                  <li>
                    <a href="#education" className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
                      → Education
                    </a>
                  </li>
                  <li>
                    <a href="#language" className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
                      → Language Learning
                    </a>
                  </li>
                </ul>
              </div>

              {/* Important Resources Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 pb-4 border-b-2 border-green-500">
                  Important Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.migrationsverket.se" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Migration Agency
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://skr.se/englishpages.411.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Swedish Municipalities
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.skatteverket.se/english.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Tax Agency
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.infoturism.se" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Info Center
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.1177.se/en/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Healthcare Information
                    </a>
                  </li>
                </ul>
              </div>

              {/* Helpful Tips Card */}
              <div className="bg-blue-50 rounded-xl shadow-sm p-6 sm:p-8 border border-blue-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                  💡 Pro Tips
                </h3>
                <ul className="space-y-2">
                  <li className="text-xs sm:text-sm text-gray-700">
                    ✓ Apply for personal number as soon as possible
                  </li>
                  <li className="text-xs sm:text-sm text-gray-700">
                    ✓ Register with local municipality within 3 months
                  </li>
                  <li className="text-xs sm:text-sm text-gray-700">
                    ✓ Open bank account with your personal number
                  </li>
                  <li className="text-xs sm:text-sm text-gray-700">
                    ✓ Register with Swedish Tax Agency
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
