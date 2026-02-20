'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function BusinessSalePurchasePage() {
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

  const heroData = t('businessSalePurchase.hero', { returnObjects: true }) || {};
  const introData = t('businessSalePurchase.intro', { returnObjects: true }) || {};
  const whyChooseData = t('businessSalePurchase.whyChoose', { returnObjects: true }) || {};
  const businessOpportunitiesData = t('businessSalePurchase.businessOpportunities', { returnObjects: true }) || {};
  const realEstateData = t('businessSalePurchase.realEstate', { returnObjects: true }) || {};
  const howItWorksData = t('businessSalePurchase.howItWorks', { returnObjects: true }) || {};
  const additionalOpportunitiesData = t('businessSalePurchase.additionalOpportunities', { returnObjects: true }) || {};
  const trustedPartnerData = t('businessSalePurchase.whyTrustedPartner', { returnObjects: true }) || {};
  const ctaData = t('businessSalePurchase.cta', { returnObjects: true }) || {};

  const whyChooseReasons = t('businessSalePurchase.whyChoose.reasons', { returnObjects: true }) || [];
  const opportunities = t('businessSalePurchase.businessOpportunities.opportunities', { returnObjects: true }) || [];
  const realEstateServices = t('businessSalePurchase.realEstate.services', { returnObjects: true }) || [];
  const howItWorksSteps = t('businessSalePurchase.howItWorks.steps', { returnObjects: true }) || [];
  const additionalOppList = t('businessSalePurchase.additionalOpportunities.opportunities', { returnObjects: true }) || [];
  const trustedPartnerReasons = t('businessSalePurchase.whyTrustedPartner.reasons', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#F8F9FE] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {heroData.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {heroData.subtitle}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {introData.heading}
          </h2>
          <div className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-4">
            {introData.description?.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {whyChooseData.heading}
          </h2>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {whyChooseReasons.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-blue-500">
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Opportunities Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {businessOpportunitiesData.heading}
          </h2>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {opportunities.map((opp, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-purple-500">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {opp.number}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                    {opp.title}
                  </h3>
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed space-y-3">
                  {opp.description?.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Estate Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {realEstateData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            {realEstateData.intro}
          </p>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {realEstateServices.map((service, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {howItWorksData.heading}
          </h2>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {howItWorksSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-green-500">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {step.number}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Opportunities Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {additionalOpportunitiesData.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {additionalOppList.map((item, idx) => (
              <div key={idx} className="border-l-4 border-orange-500 pl-6 sm:pl-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Trusted Partner Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {trustedPartnerData.heading}
          </h2>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {trustedPartnerReasons.map((item, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-6 sm:pl-8 lg:pl-10">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {ctaData.heading}
          </h2>
          <div className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed space-y-4">
            {ctaData.description?.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
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
          >
            {ctaData.buttonText}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {ctaData.subtext}
          </p>
        </section>
      </div>
    </div>
  );
}
