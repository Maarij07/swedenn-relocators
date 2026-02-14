'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

export default function AuPairHostFamilyPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(i18n.isInitialized);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.on('initialized', () => setIsReady(true));
    } else {
      setIsReady(true);
    }
  }, [i18n]);

  if (!isReady) return <div>Loading...</div>;

  const whyFamilies = t('auPairHostFamily.whyFamiliesChoose.benefits', { returnObjects: true }) || [];
  const whyAuPairs = t('auPairHostFamily.whyAuPairsChoose.benefits', { returnObjects: true }) || [];
  const legalRequirements = t('auPairHostFamily.legalFramework.requirements', { returnObjects: true }) || [];
  const hostFamilyServices = t('auPairHostFamily.supportHostFamilies.services', { returnObjects: true }) || [];
  const auPairServices = t('auPairHostFamily.supportAuPairs.services', { returnObjects: true }) || [];
  const contractItems = t('auPairHostFamily.contractsObligations.items', { returnObjects: true }) || [];
  const additionalServicesData = t('auPairHostFamily.additionalServices.services', { returnObjects: true }) || [];
  const whyChooseAdvantages = t('auPairHostFamily.whyChooseUs.advantages', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#F8F9FE]">
      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-[160px] pb-12">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 4, color: '#1e293b', lineHeight: 1.1 }}>
          {t('auPairHostFamily.hero.title')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', '4k': '2rem' }, color: '#6B7280', lineHeight: 1.6 }}>
          {t('auPairHostFamily.hero.subtitle')}
        </Typography>
      </div>

      {/* Intro Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8">
          <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '2.75rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('auPairHostFamily.intro.heading')}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#4B5563', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
            {t('auPairHostFamily.intro.description')}
          </Typography>
        </div>
      </div>

      {/* Why Families Choose */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '2.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {t('auPairHostFamily.whyFamiliesChoose.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#4B5563', mb: 6, lineHeight: 1.8 }}>
          {t('auPairHostFamily.whyFamiliesChoose.description')}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {whyFamilies.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                {benefit.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem', lg: '1.125rem', '4k': '1.375rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                {benefit.description}
              </Typography>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#1e293b', lineHeight: 1.8, fontStyle: 'italic' }}>
            {t('auPairHostFamily.whyFamiliesChoose.conclusion')}
          </Typography>
        </div>
      </div>

      {/* Why Young People Choose */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '2.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {t('auPairHostFamily.whyAuPairsChoose.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#4B5563', mb: 6, lineHeight: 1.8 }}>
          {t('auPairHostFamily.whyAuPairsChoose.description')}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {whyAuPairs.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                {benefit.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem', lg: '1.125rem', '4k': '1.375rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                {benefit.description}
              </Typography>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-100 rounded-xl p-6">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#1e293b', lineHeight: 1.8, fontStyle: 'italic' }}>
            {t('auPairHostFamily.whyAuPairsChoose.conclusion')}
          </Typography>
        </div>
      </div>

      {/* Legal Framework */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '2.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {t('auPairHostFamily.legalFramework.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#4B5563', mb: 6, lineHeight: 1.8 }}>
          {t('auPairHostFamily.legalFramework.description')}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {legalRequirements.map((req, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                {req.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem', lg: '1.125rem', '4k': '1.375rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                {req.description}
              </Typography>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#1e293b', lineHeight: 1.8 }}>
            {t('auPairHostFamily.legalFramework.euNote')}
          </Typography>
        </div>
      </div>

      {/* Support Host Families */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '2.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {t('auPairHostFamily.supportHostFamilies.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#4B5563', mb: 6, lineHeight: 1.8 }}>
          {t('auPairHostFamily.supportHostFamilies.intro')}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {hostFamilyServices.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-full w-10 h-10 flex items-center justify-center">
                  <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.125rem' }}>
                    {service.number}
                  </Typography>
                </div>
                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, color: '#1e293b' }}>
                  {service.title}
                </Typography>
              </div>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem', lg: '1.125rem', '4k': '1.375rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                {service.description}
              </Typography>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#1e293b', lineHeight: 1.8 }}>
            {t('auPairHostFamily.supportHostFamilies.conclusion')}
          </Typography>
        </div>
      </div>

      {/* Support Au Pairs */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '2.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {t('auPairHostFamily.supportAuPairs.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#4B5563', mb: 6, lineHeight: 1.8 }}>
          {t('auPairHostFamily.supportAuPairs.intro')}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {auPairServices.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                {service.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem', lg: '1.125rem', '4k': '1.375rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                {service.description}
              </Typography>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-100 rounded-xl p-6">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#1e293b', lineHeight: 1.8 }}>
            {t('auPairHostFamily.supportAuPairs.conclusion')}
          </Typography>
        </div>
      </div>

      {/* Contracts and Obligations */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '2.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {t('auPairHostFamily.contractsObligations.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#4B5563', mb: 6, lineHeight: 1.8 }}>
          {t('auPairHostFamily.contractsObligations.intro')}
        </Typography>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8 mb-6">
          <div className="space-y-3">
            {contractItems.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-blue-600 font-bold">•</span>
                <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#4B5563', lineHeight: 1.7 }}>
                  {item}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#1e293b', lineHeight: 1.8 }}>
            {t('auPairHostFamily.contractsObligations.conclusion')}
          </Typography>
        </div>
      </div>

      {/* Additional Services */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '2.75rem' }, fontWeight: 700, mb: 3, color: '#1e293b' }}>
          {t('auPairHostFamily.additionalServices.heading')}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#4B5563', mb: 6, lineHeight: 1.8 }}>
          {t('auPairHostFamily.additionalServices.intro')}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalServicesData.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                {service.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem', lg: '1.125rem', '4k': '1.375rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                {service.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '2.75rem' }, fontWeight: 700, mb: 6, color: '#1e293b' }}>
          {t('auPairHostFamily.whyChooseUs.heading')}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseAdvantages.map((adv, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', '4k': '1.625rem' }, fontWeight: 700, color: '#1e293b', mb: 2 }}>
                {adv.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem', lg: '1.125rem', '4k': '1.375rem' }, color: '#6B7280', lineHeight: 1.7 }}>
                {adv.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="border-t border-blue-300 pt-8">
          <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '2.75rem' }, fontWeight: 700, mb: 4, color: '#1e293b' }}>
            {t('auPairHostFamily.disclaimer.heading')}
          </Typography>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6">
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', '4k': '1.5rem' }, color: '#1e293b', lineHeight: 1.8, mb: 4 }}>
              {t('auPairHostFamily.disclaimer.note')}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem', lg: '1.125rem', '4k': '1.375rem' }, color: '#6B7280', lineHeight: 1.7 }}>
              {t('auPairHostFamily.disclaimer.disclaimer')}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

