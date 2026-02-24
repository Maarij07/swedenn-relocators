'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AppealCasesPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(i18n.isInitialized);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

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

  const heroData = (t('appealCases.hero', { returnObjects: true }) || {}) as any;
  const introData = (t('appealCases.intro', { returnObjects: true }) || {}) as any;
  const yourRightsData = (t('appealCases.yourRights', { returnObjects: true }) || {}) as any;
  const reviewData = (t('appealCases.reviewProcess', { returnObjects: true }) || {}) as any;
  const howWeHelpData = (t('appealCases.howWeHelp', { returnObjects: true }) || {}) as any;
  const commonCasesData = (t('appealCases.commonCases', { returnObjects: true }) || {}) as any;
  const timelinesData = (t('appealCases.timelines', { returnObjects: true }) || {}) as any;
  const whyWorksData = (t('appealCases.whyWorks', { returnObjects: true }) || {}) as any;
  const faqsData = (t('appealCases.faqs', { returnObjects: true }) || {}) as any;
  const whyChooseData = (t('appealCases.whyChoose', { returnObjects: true }) || {}) as any;
  const disclaimerData = (t('appealCases.disclaimer', { returnObjects: true }) || {}) as any;

  const rights = Array.isArray(yourRightsData.rights) ? yourRightsData.rights : [];
  const stages = Array.isArray(reviewData.stages) ? reviewData.stages : [];
  const steps = Array.isArray(howWeHelpData.steps) ? howWeHelpData.steps : [];
  const cases = Array.isArray(commonCasesData.cases) ? commonCasesData.cases : [];
  const timelines = Array.isArray(timelinesData.items) ? timelinesData.items : [];
  const reasons = Array.isArray(whyWorksData.reasons) ? whyWorksData.reasons : [];
  const faqs = Array.isArray(faqsData.items) ? faqsData.items : [];
  const advantages = Array.isArray(whyChooseData.advantages) ? whyChooseData.advantages : [];

  return (
    <div className="min-h-screen bg-[#F8F9FE]">
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-12 sm:pb-16 lg:pb-20">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 3, color: '#1e293b', lineHeight: 1.1 }}>
          {heroData.title}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem', lg: '1.625rem', '4k': '2rem' }, color: '#3B82F6', fontWeight: 600 }}>
          {heroData.subtitle}
        </Typography>
      </div>

      {/* Intro Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 4k:p-12 shadow-sm">
          <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 6, color: '#1e293b' }}>
            {introData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
            {introData.description}
          </Typography>
        </div>
      </div>

      {/* Your Rights Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {yourRightsData.heading}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rights.map((right: any, idx: number) => (
            <div key={idx} className="bg-white border-l-4 border-blue-500 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                  {idx + 1}
                </div>
              </div>
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                {right.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {right.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Review Process Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {reviewData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {reviewData.intro}
        </Typography>

        <div className="space-y-6">
          {stages.map((stage: any, idx: number) => (
            <div key={idx} className="bg-white border-l-4 border-green-500 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm sm:text-base">
                  {stage.number}
                </div>
                <div className="flex-1 min-w-0">
                  <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                    {stage.title}
                  </Typography>
                  {stage.description && (
                    <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', mb: 3 }}>
                      {stage.description}
                    </Typography>
                  )}
                  {stage.questions && (
                    <div>
                      {stage.questions.map((q: any, i: number) => (
                        <Typography key={i} sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', mb: 1 }}>
                          • {q}
                        </Typography>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How We Help Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {howWeHelpData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 8 }}>
          {howWeHelpData.intro}
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {steps.map((step: any, idx: number) => (
            <div key={idx} className="bg-white border-t-4 border-blue-500 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 sm:gap-5 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                  {idx + 1}
                </div>
              </div>
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                {step.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Common Cases Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {commonCasesData.heading}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {cases.map((caseItem: any, idx: number) => (
            <div key={idx} className="bg-white border-l-4 border-blue-500 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                <span className="text-blue-600 font-bold mr-2">•</span>{caseItem}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Timelines Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {timelinesData.heading}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {timelines.map((item: any, idx: number) => (
            <div key={idx} className="bg-white border-l-4 border-purple-500 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.125rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                {item.label}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280' }}>
                {item.time}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Why Works Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {whyWorksData.heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8, mb: 6 }}>
          {whyWorksData.intro}
        </Typography>

        <div className="space-y-4 mb-6">
          {reasons.map((reason: any, idx: number) => (
            <div key={idx} className="bg-white border-l-4 border-blue-500 rounded-lg p-6 sm:p-8">
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                <span className="text-blue-600 font-bold mr-2">•</span>{reason}
              </Typography>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 sm:p-8 lg:p-10">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: '#6B7280', lineHeight: 1.8 }}>
            {whyWorksData.conclusion}
          </Typography>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {faqsData.heading}
        </Typography>

        <div className="space-y-4">
          {faqs.map((faq: any, idx: number) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.125rem' }, fontWeight: 700, color: '#1e293b', textAlign: 'left' }}>
                  {faq.q}
                </Typography>
                <span className={`text-blue-600 font-bold text-xl transition-transform duration-300 ${expandedFAQ === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {expandedFAQ === idx && (
                <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                  <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                    {faq.a}
                  </Typography>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: 8, color: '#1e293b' }}>
          {whyChooseData.heading}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv: any, idx: number) => (
            <div key={idx} className="bg-white border-l-4 border-green-500 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm sm:text-base">
                  {idx + 1}
                </div>
              </div>
              <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
                {adv.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, color: '#6B7280', lineHeight: 1.8 }}>
                {adv.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 sm:p-8 lg:p-10">
          <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {disclaimerData.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, lineHeight: 1.8, color: '#6B7280', mb: 4 }}>
            {disclaimerData.note}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem', lg: '1rem', '4k': '1.0625rem' }, lineHeight: 1.8, color: '#6B7280', fontStyle: 'italic' }}>
            {disclaimerData.disclaimer}
          </Typography>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 4k:p-16 text-center">
          <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' }, fontWeight: 700, mb: { xs: 3, sm: 4 }, color: 'white' }}>
            {t('appealCases.cta.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' }, color: 'rgba(255,255,255,0.8)', mb: { xs: 6, sm: 8 }, maxWidth: '2xl', mx: 'auto', lineHeight: 1.8 }}>
            {t('appealCases.cta.description')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, sm: 5 } }}>
            <Box
              component="button"
              sx={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem', '4k': '1.25rem' },
                fontWeight: 600,
                px: { xs: 4, sm: 6, lg: 8, '4k': 10 },
                py: { xs: 1.2, sm: 1.5, lg: 1.8, '4k': 2 },
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                },
              }}
            >
              {t('appealCases.cta.button')}
            </Box>
          </Box>
          <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem', lg: '0.95rem', '4k': '1rem' }, color: 'rgba(255,255,255,0.6)' }}>
            {t('appealCases.cta.subtext')}
          </Typography>
        </div>
      </div>
    </div>
  );
}
