'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

import { useTranslation } from 'react-i18next';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
}

const featuresEn: FeatureItem[] = [
  {
    id: 1,
    title: 'Smart Accounting Solutions',
    description:
      'With our digital portal, you can streamline your finances through intelligent accounting services, simplifying payroll, tax returns, and financial reporting for your business.',
    cta: 'Read More',
    image: '/a1.svg',
  },
  {
    id: 2,
    title: 'All-in-One Employee Management',
    description:
      'A complete HR solution for companies to manage employees, work permits, immigration status, and contracts all in one platform.',
    cta: 'Read More',
    image: '/a2.svg',
  },
  {
    id: 3,
    title: 'Comprehensive Payroll Solutions',
    description:
      'Simplify your payroll process with our end-to-end payroll management system. Handle employee salaries, tax compliance, and benefits seamlessly.',
    cta: 'Read More',
    image: '/a3.svg',
  },
  {
    id: 4,
    title: 'Expert Guidance',
    description:
      'Get personalized support from immigration and relocation specialists who understand the Nordic region inside out.',
    cta: 'Read More',
    image: '/c1.svg',
  },
];

const featuresSv: FeatureItem[] = [
  {
    id: 1,
    title: 'Smarta Redovisningslösningar',
    description:
      'Med vår digitala portal kan du effektivisera din ekonomi genom intelligenta redovisningstjänster som förenklar löner, skattedeklarationer och ekonomisk rapportering för ditt företag.',
    cta: 'Läs mer',
    image: '/a1.svg',
  },
  {
    id: 2,
    title: 'Allt-i-ett Personalhantering',
    description:
      'En komplett HR-lösning för företag att hantera anställda, arbetstillstånd, immigrationsstatus och kontrakt på en plattform.',
    cta: 'Läs mer',
    image: '/a2.svg',
  },
  {
    id: 3,
    title: 'Omfattande Lönelösningar',
    description:
      'Förenkla din löneprocess med vårt kompletta lönehanteringssystem. Hantera anställdas löner, skatteefterlevnad och förmåner sömlöst.',
    cta: 'Läs mer',
    image: '/a3.svg',
  },
  {
    id: 4,
    title: 'Expertrådgivning',
    description:
      'Få personlig stöttning från migrations- och relocationsexperter som kan Norden utan och innan.',
    cta: 'Läs mer',
    image: '/c1.svg',
  },
];

function getCardPosition(index: number, active: number, total: number) {
  if (index === active) return { y: 0, scale: 1.02, opacity: 1, zIndex: 3, widthScale: 1 };

  const prevIndex = active === 0 ? total - 1 : active - 1;
  if (index === prevIndex) return { y: -80, scale: 0.94, opacity: 0.6, zIndex: 2, widthScale: 0.82 };

  const nextIndex = active === total - 1 ? 0 : active + 1;
  if (index === nextIndex) return { y: 80, scale: 0.94, opacity: 0.6, zIndex: 2, widthScale: 0.82 };

  return { y: 0, scale: 0.88, opacity: 0, zIndex: 1, widthScale: 0.75 };
}

export default function VerticalFeatureCarousel() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const featureSet = isSv ? featuresSv : featuresEn;

  const [active, setActive] = useState(0);
  const max = featureSet.length - 1;
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActive((current) => (current >= max ? 0 : current + 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [max, isPaused]);

  const handlePrev = () => setActive((i) => (i <= 0 ? max : i - 1));
  const handleNext = () => setActive((i) => (i >= max ? 0 : i + 1));

  return (
    <section className="w-full bg-[#EBF4FF] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 3xl:py-36 4k:py-44 overflow-x-hidden">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">

        {/* Heading - CENTER ALIGNED */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <p className="text-[11px] sm:text-xs md:text-sm lg:text-sm font-semibold tracking-[0.18em] text-blue-600 mb-3 uppercase">
            {isSv ? 'Våra tjänster' : 'Our Services'}
          </p>
          <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] 2xl:text-[3rem] 3xl:text-[3.25rem] 4k:text-[4rem] leading-[1.2] font-extrabold">
            {isSv ? (
              <>
                <span className="text-gray-900">Vi stärker </span>
                <span className="text-blue-600">företag </span>
                <span className="text-gray-900">med digitala </span>
                <span className="text-blue-600">lösningar</span>
              </>
            ) : (
              <>
                <span className="text-gray-900">Empowering </span>
                <span className="text-blue-600">Business </span>
                <span className="text-gray-900">with Digital </span>
                <span className="text-blue-600">Solutions</span>
              </>
            )}
          </h2>
        </div>

        {/* UP ARROW */}
        <div className="flex justify-center mb-4 xl:mb-6">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="bg-[#2d3748] hover:bg-[#4a5568] text-white w-7 h-7 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12 rounded-lg flex items-center justify-center shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
          >
            <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* CAROUSEL CONTAINER - Cards with smooth rotation */}
        <div className="relative w-full" style={{ height: '450px' }}>
          {featureSet.map((item, idx) => {
            const pos = getCardPosition(idx, active, featureSet.length);
            const isActive = idx === active;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.98, rotateX: 5 }}
                animate={{
                  opacity: pos.opacity,
                  y: pos.y,
                  scale: pos.scale,
                  zIndex: pos.zIndex,
                  rotateX: isActive ? 0 : 3,
                  rotateY: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute left-1/2 -translate-x-1/2 bg-white rounded-xl overflow-hidden"
                style={{
                  width: isActive ? '100%' : `${95 * pos.widthScale}%`,
                  maxWidth: '100%',
                  boxShadow: isActive
                    ? '0 35px 90px rgba(0,0,0,0.15), 0 15px 40px rgba(0,0,0,0.08)'
                    : '0 8px 25px rgba(0,0,0,0.06)',
                  transition: 'width 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr]">
                  {/* LEFT SIDE - Image */}
                  <div className="hidden md:flex items-center justify-center bg-[#ECEDEE] p-8 xl:p-10 min-h-[380px] xl:min-h-[480px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[340px] h-[340px] xl:w-[420px] xl:h-[420px] object-contain"
                    />
                  </div>

                  {/* RIGHT SIDE - Content */}
                  <div className="flex flex-col p-6 md:p-8 xl:p-12 min-h-[240px] md:min-h-[380px] xl:min-h-[480px]">
                    <h3 className="text-[22px] md:text-[26px] xl:text-[30px] font-bold leading-tight text-gray-900 mb-4 xl:mb-5">
                      {item.title}
                    </h3>

                    <p className="text-[15px] md:text-[16px] xl:text-[17px] text-gray-600 leading-relaxed mb-5 xl:mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Button positioned at bottom right */}
                    <div className="flex justify-end mt-auto pt-2 xl:pt-4 mb-5 xl:mb-8">
                      <button className="bg-[#111827] hover:bg-[#0b1220] text-white text-[13px] md:text-[14px] xl:text-[15px] font-medium px-6 md:px-7 xl:px-8 py-2.5 md:py-3 xl:py-3 rounded-md min-w-[110px] md:min-w-[120px] xl:min-w-[130px] transition-colors duration-200">
                        {item.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DOWN ARROW */}
        <div className="flex justify-center mt-4 xl:mt-6">
          <button
            onClick={handleNext}
            aria-label="Next"
            className="bg-[#2d3748] hover:bg-[#4a5568] text-white w-7 h-7 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12 rounded-lg flex items-center justify-center shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
          >
            <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
