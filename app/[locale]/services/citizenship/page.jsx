'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function CitizenshipPage() {
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
    return <div>Loading...</div>;
  }

  const generalReqs = t('citizenship.generalRequirements.requirements', { returnObjects: true }) || [];
  const categories = t('citizenship.specialCategories.categories', { returnObjects: true }) || [];
  const steps = t('citizenship.process.steps', { returnObjects: true }) || [];
  const times = t('citizenship.waitingTimes.times', { returnObjects: true }) || [];
  const services = t('citizenship.support.services', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pb-12 sm:pb-16 lg:pb-20">
        <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          {t('citizenship.hero.title')}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
          {t('citizenship.hero.subtitle')}
        </p>
      </div>

      {/* Intro Section */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {t('citizenship.intro.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {t('citizenship.intro.description')}
          </p>
        </div>
      </div>

      {/* General Requirements */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          {t('citizenship.generalRequirements.heading')}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
          {t('citizenship.generalRequirements.description')}
        </p>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {Array.isArray(generalReqs) && generalReqs.map((req, idx) => (
            <div key={idx} className="bg-white border-l-4 border-blue-500 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                {req.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {req.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Categories */}
      <div className="bg-[#FFFFFF]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('citizenship.specialCategories.heading')}
          </h2>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {Array.isArray(categories) && categories.map((cat, idx) => (
              <div key={cat.id} className="bg-white border-l-4 border-purple-500 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-3">
                  {cat.description}
                </p>
                <div className="space-y-2 pl-4">
                  {Array.isArray(cat.details) && cat.details.map((detail, i) => (
                    <p key={i} className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      • {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          {t('citizenship.process.heading')}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
          {t('citizenship.process.intro')}
        </p>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {Array.isArray(steps) && steps.map((step, idx) => (
            <div key={idx} className="bg-white border-t-4 border-blue-500 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 sm:gap-5 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Waiting Times */}
      <div className="bg-[#FFFFFF]">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('citizenship.waitingTimes.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('citizenship.waitingTimes.intro')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {Array.isArray(times) && times.map((item, idx) => (
              <div key={idx} className="bg-white border-l-4 border-green-500 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed font-semibold mb-2">
                  {item.category}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-bold">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Help */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-16 sm:py-20 lg:py-24 xl:py-32">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          {t('citizenship.support.heading')}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
          {t('citizenship.support.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {Array.isArray(services) && services.map((service, idx) => (
            <div key={idx} className="bg-white border-t-4 border-blue-500 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 sm:gap-5 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 4k:p-16 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('citizenship.cta.heading')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            {t('citizenship.cta.description')}
          </p>
          <div className="flex justify-center mb-4 sm:mb-5">
            <button
              className="bg-white text-black text-sm sm:text-base lg:text-lg font-semibold px-8 sm:px-12 lg:px-16 py-3 sm:py-4 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-gray-100"
            >
              {t('citizenship.cta.button')}
            </button>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-white/60">
            {t('citizenship.cta.subtext')}
          </p>
        </div>
      </div>
    </div>
  );
}
