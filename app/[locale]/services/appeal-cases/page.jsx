'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function AppealCasesPage() {
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

  const heroData = t('appealCases.hero', { returnObjects: true }) || {};
  const introData = t('appealCases.intro', { returnObjects: true }) || {};
  const yourRightsData = t('appealCases.yourRights', { returnObjects: true }) || {};
  const reviewData = t('appealCases.reviewProcess', { returnObjects: true }) || {};
  const howWeHelpData = t('appealCases.howWeHelp', { returnObjects: true }) || {};
  const commonCasesData = t('appealCases.commonCases', { returnObjects: true }) || {};
  const timelinesData = t('appealCases.timelines', { returnObjects: true }) || {};
  const whyWorksData = t('appealCases.whyWorks', { returnObjects: true }) || {};
  const whyChooseData = t('appealCases.whyChoose', { returnObjects: true }) || {};
  const disclaimerData = t('appealCases.disclaimer', { returnObjects: true }) || {};
  const ctaData = t('appealCases.cta', { returnObjects: true }) || {};

  const rights = Array.isArray(yourRightsData.rights) ? yourRightsData.rights : [];
  const stages = Array.isArray(reviewData.stages) ? reviewData.stages : [];
  const steps = Array.isArray(howWeHelpData.steps) ? howWeHelpData.steps : [];
  const cases = Array.isArray(commonCasesData.cases) ? commonCasesData.cases : [];
  const timelines = Array.isArray(timelinesData.items) ? timelinesData.items : [];
  const reasons = Array.isArray(whyWorksData.reasons) ? whyWorksData.reasons : [];
  const advantages = Array.isArray(whyChooseData.advantages) ? whyChooseData.advantages : [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
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
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {introData.description}
          </p>
        </section>

        {/* Your Rights Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {yourRightsData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {rights.map((right, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500 hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {right.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {right.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Review Process Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {reviewData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {reviewData.intro}
          </p>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {stages.map((stage, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {stage.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {stage.title}
                    </h3>
                    {stage.description && (
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-2">
                        {stage.description}
                      </p>
                    )}
                    {stage.questions && (
                      <ul className="space-y-1">
                        {stage.questions.map((q, i) => (
                          <li key={i} className="text-xs sm:text-sm lg:text-base text-gray-600">
                            • {q}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Help Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {howWeHelpData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {howWeHelpData.intro}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-blue-500"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Cases Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {commonCasesData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {cases.map((caseItem, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  • {caseItem}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timelines Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {timelinesData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {timelines.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-purple-500">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Works Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {whyWorksData.heading}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {whyWorksData.intro}
          </p>
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-5 border-l-4 border-blue-500">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  • {reason}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-lg">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
              {whyWorksData.conclusion}
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {whyChooseData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-green-500"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-3">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-white mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
            {disclaimerData.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-50 mb-6 sm:mb-8 leading-relaxed">
            {disclaimerData.note}
          </p>
          <div className="border-t border-blue-300 pt-6">
            <p className="text-xs sm:text-sm lg:text-base text-blue-50 leading-relaxed italic">
              {disclaimerData.disclaimer}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('appealCases.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('appealCases.cta.description')}
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
          >
            {t('appealCases.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('appealCases.cta.subtext')}
          </p>
        </section>
      </div>
    </div>
  );
}
