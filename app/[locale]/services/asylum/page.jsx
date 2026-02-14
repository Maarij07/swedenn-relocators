'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '../../../components/Navbar';

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function AsylumPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
      return;
    }

    const handleInit = () => setIsReady(true);
    i18n.on('initialized', handleInit);
    return () => i18n.off('initialized', handleInit);
  }, [i18n]);

  if (!isReady) {
    return <div className="min-h-screen bg-white" />;
  }

  const benefits = t('asylum.whyChooseExpert.benefits', { returnObjects: true }) || [];
  const criteria = t('asylum.eligibility.refugeeDefinition.criteria', { returnObjects: true }) || [];
  const steps = t('asylum.applicationProcess.steps', { returnObjects: true }) || [];
  const legalServices = t('asylum.legalRepresentative.services', { returnObjects: true }) || [];
  const familyReunServices = t('asylum.familyReunificationAssistance.services', { returnObjects: true }) || [];
  const additionalServices = t('asylum.additionalSupport.services', { returnObjects: true }) || [];
  const eligibilityTypes = t('asylum.familyReunification.whoCanApply.eligibilityTypes', { returnObjects: true }) || [];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <style>{fadeInUp}</style>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden border border-gray-300 rounded-lg mx-auto"
        style={{
          backgroundImage: 'url(/bg-new-in-sweden.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '1400px',
          maxWidth: 'calc(100% - 32px)',
          height: '289px',
          margin: '200px auto 0',
          marginTop: '160px'
        }}
      >
        <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: 'rgba(20, 26, 33, 0.88)' }} />

        <div className="relative h-full pt-6 sm:pt-8 pb-6 sm:pb-8 px-8 sm:px-10">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto h-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
              <div>
                <p className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-bold text-white mb-2">
                  {t('asylum.hero.title')}
                </p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-300 leading-[1.5] pr-12 font-normal">
                  {t('asylum.hero.subtitle')}
                </p>
              </div>

              <div className="relative w-full flex justify-center lg:justify-end">
                <Image
                  src="/service-illustration.svg"
                  alt="Asylum support"
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

      {/* Intro Section */}
      <section className="bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20">
          <div className="text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <p className="text-sm md:text-base lg:text-lg font-normal mb-4" style={{ color: '#002C5C', fontSize: '16px' }}>
              {t('asylum.intro.heading')}
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 leading-[1.7] max-w-4xl mx-auto">
              {t('asylum.intro.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Expert */}
      <section className="bg-white pb-8 sm:pb-10 lg:pb-14">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div
            className="rounded-lg p-8 sm:p-10 lg:p-12 text-center"
            style={{
              backgroundColor: '#DEEEFF',
              width: '1400px',
              maxWidth: 'calc(100% - 32px)',
              margin: '0 auto',
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            <h3 className="font-black leading-tight" style={{ fontSize: '40px', color: '#1D2F43', marginBottom: '6px' }}>
              {t('asylum.whyChooseExpert.heading')}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#174D87] max-w-3xl mx-auto">
              {t('asylum.whyChooseExpert.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-10 sm:py-14 lg:py-18 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            style={{
              width: '1400px',
              maxWidth: 'calc(100% - 32px)',
              margin: '0 auto'
            }}
          >
            {Array.isArray(benefits) && benefits.map((benefit, idx) => (
              <motion.article
                key={benefit.title}
                className="bg-white rounded-[20px] border border-gray-100 p-6 sm:p-8 shadow-[0_8px_24px_rgba(2,43,95,0.08)] hover:shadow-[0_18px_40px_rgba(2,43,95,0.16)]"
                variants={cardMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={idx}
                whileHover={{ y: -6 }}
              >
                <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div
          className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-14 sm:py-16 lg:py-20"
          style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}
        >
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1D2F43]">
              {t('asylum.eligibility.heading')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            <motion.article
              className="bg-white rounded-[18px] border border-gray-200 p-6 sm:p-8 shadow-[0_8px_22px_rgba(2,43,95,0.08)] hover:shadow-[0_18px_40px_rgba(2,43,95,0.16)]"
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-3">
                {t('asylum.eligibility.whoCanApply.heading')}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-4">
                {t('asylum.eligibility.whoCanApply.intro')}
              </p>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                {t('asylum.eligibility.whoCanApply.description')}
              </p>
            </motion.article>

            <motion.article
              className="bg-white rounded-[18px] border border-gray-200 p-6 sm:p-8 shadow-[0_8px_22px_rgba(2,43,95,0.08)] hover:shadow-[0_18px_40px_rgba(2,43,95,0.16)]"
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-3">
                {t('asylum.eligibility.refugeeDefinition.heading')}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-4">
                {t('asylum.eligibility.refugeeDefinition.intro')}
              </p>
              <ul className="space-y-2 mb-4">
                {Array.isArray(criteria) && criteria.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] sm:text-[14px] text-gray-600">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#247FE1]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-3">
                {t('asylum.eligibility.refugeeDefinition.additionalInfo')}
              </p>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                {t('asylum.eligibility.refugeeDefinition.outcome')}
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div
          className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24"
          style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}
        >
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1D2F43]">
              {t('asylum.applicationProcess.heading')}
            </h2>
          </div>

          <div className="space-y-6">
            {Array.isArray(steps) && steps.map((step, idx) => (
              <motion.div
                key={step.step}
                className="bg-white rounded-[16px] border border-gray-200 p-6 sm:p-8 shadow-[0_8px_22px_rgba(2,43,95,0.08)] hover:shadow-[0_18px_40px_rgba(2,43,95,0.16)]"
                variants={cardMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={idx}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#DEEEFF] text-[#174D87] font-semibold">
                    {step.step}
                  </span>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Representative */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div
          className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-14 sm:py-16 lg:py-20"
          style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}
        >
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1D2F43]">
              {t('asylum.legalRepresentative.heading')}
            </h2>
            <p className="text-[13px] sm:text-[14px] text-gray-600 max-w-3xl mx-auto mt-3">
              {t('asylum.legalRepresentative.intro')}
            </p>
          </div>

          <motion.div
            className="bg-white rounded-[18px] border border-gray-200 p-6 sm:p-8 shadow-[0_8px_22px_rgba(2,43,95,0.08)] hover:shadow-[0_18px_40px_rgba(2,43,95,0.16)]"
            variants={cardMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            whileHover={{ y: -4 }}
          >
            <ul className="space-y-3">
              {Array.isArray(legalServices) && legalServices.map((service) => (
                <li key={service} className="flex items-start gap-3 text-[13px] sm:text-[14px] text-gray-600">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#247FE1]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-6 max-w-3xl">
            {t('asylum.legalRepresentative.additionalSupport')}
          </p>
        </div>
      </section>

      {/* Family Reunification */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div
          className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24"
          style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}
        >
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1D2F43]">
              {t('asylum.familyReunification.heading')}
            </h2>
            <p className="text-[16px] sm:text-[18px] font-semibold text-[#174D87] mt-2">
              {t('asylum.familyReunification.subheading')}
            </p>
            <p className="text-[13px] sm:text-[14px] text-gray-600 max-w-3xl mx-auto mt-3">
              {t('asylum.familyReunification.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <motion.article
              className="bg-white rounded-[18px] border border-gray-200 p-6 sm:p-8 shadow-[0_8px_22px_rgba(2,43,95,0.08)] hover:shadow-[0_18px_40px_rgba(2,43,95,0.16)]"
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">
                {t('asylum.familyReunification.whoCanApply.heading')}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-4">
                {t('asylum.familyReunification.whoCanApply.intro')}
              </p>
              <ul className="space-y-2">
                {Array.isArray(eligibilityTypes) && eligibilityTypes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] sm:text-[14px] text-gray-600">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#247FE1]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              className="bg-white rounded-[18px] border border-gray-200 p-6 sm:p-8 shadow-[0_8px_22px_rgba(2,43,95,0.08)] hover:shadow-[0_18px_40px_rgba(2,43,95,0.16)]"
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">
                {t('asylum.familyReunification.euEeaCitizens.heading')}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                {t('asylum.familyReunification.euEeaCitizens.description')}
              </p>
            </motion.article>

            <motion.article
              className="bg-white rounded-[18px] border border-gray-200 p-6 sm:p-8 shadow-[0_8px_22px_rgba(2,43,95,0.08)] hover:shadow-[0_18px_40px_rgba(2,43,95,0.16)]"
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">
                {t('asylum.familyReunification.temporaryPermit.heading')}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-3">
                {t('asylum.familyReunification.temporaryPermit.description')}
              </p>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-3">
                {t('asylum.familyReunification.temporaryPermit.familyMembers')}
              </p>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                {t('asylum.familyReunification.temporaryPermit.maintenance')}
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Family Reunification Assistance */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div
          className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-14 sm:py-16 lg:py-20"
          style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}
        >
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1D2F43]">
              {t('asylum.familyReunificationAssistance.heading')}
            </h2>
            <p className="text-[13px] sm:text-[14px] text-gray-600 max-w-3xl mx-auto mt-3">
              {t('asylum.familyReunificationAssistance.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.isArray(familyReunServices) && familyReunServices.map((service, idx) => (
              <motion.article
                key={service.title}
                className="bg-white rounded-[18px] border border-gray-200 p-6 sm:p-8 shadow-[0_8px_22px_rgba(2,43,95,0.08)] hover:shadow-[0_18px_40px_rgba(2,43,95,0.16)]"
                variants={cardMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={idx}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div
          className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24"
          style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}
        >
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1D2F43]">
              {t('asylum.additionalSupport.heading')}
            </h2>
            <p className="text-[13px] sm:text-[14px] text-gray-600 max-w-3xl mx-auto mt-3">
              {t('asylum.additionalSupport.intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {Array.isArray(additionalServices) && additionalServices.map((service, idx) => (
              <motion.article
                key={service.title}
                className="bg-white rounded-[18px] border border-gray-200 p-6 sm:p-8 shadow-[0_8px_22px_rgba(2,43,95,0.08)] hover:shadow-[0_18px_40px_rgba(2,43,95,0.16)]"
                variants={cardMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={idx}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div
          className="mx-auto rounded-lg bg-black/85 px-6 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20 text-center"
          style={{
            width: '1400px',
            maxWidth: 'calc(100% - 32px)'
          }}
        >
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            {t('asylum.cta.heading')}
          </h2>
          <p className="text-[13px] sm:text-[14px] text-gray-200 leading-relaxed mb-8 mx-auto max-w-xl">
            {t('asylum.cta.description')}
          </p>
          <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[13px] sm:text-[14px] font-semibold text-gray-800 shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-gray-100 transition-colors">
            {t('asylum.cta.button')}
          </button>
          <p className="text-[12px] sm:text-[13px] text-gray-300 leading-relaxed mt-6 mx-auto max-w-2xl">
            {t('asylum.cta.subtext')}
          </p>
        </div>
      </section>
    </main>
  );
}
