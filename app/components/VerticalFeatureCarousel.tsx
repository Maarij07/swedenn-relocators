'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  badge: string;
  bgColor?: string;
  textColor?: string;
}

const featuresEn: FeatureItem[] = [
  {
    id: 1,
    title: 'Smart Accounting Solutions',
    description:
      'With our digital portal, you can streamline your finances through intelligent accounting services, simplifying payroll, tax returns, and financial reporting for your business.',
    cta: 'Learn More',
    image: '/a1.svg',
    badge: 'Accounting',
    bgColor: '#001F3F',
    textColor: '#ffffff',
  },
  {
    id: 2,
    title: 'All-in-One Employee Management',
    description:
      'A complete HR solution for companies to manage employees, work permits, immigration status, and contracts all in one platform.',
    cta: 'Learn More',
    image: '/a2.svg',
    badge: 'HR Solutions',
    bgColor: '#001F3F',
    textColor: '#ffffff',
  },
  {
    id: 3,
    title: 'Comprehensive Payroll Solutions',
    description:
      'Simplify your payroll process with our end-to-end payroll management system. Handle employee salaries, tax compliance, and benefits seamlessly.',
    cta: 'Learn More',
    image: '/payroll-solutions-illustration.svg',
    badge: 'Payroll',
    bgColor: '#001F3F',
    textColor: '#ffffff',
  },
  {
    id: 4,
    title: 'Expert Guidance',
    description:
      'Get personalized support from immigration and relocation specialists who understand the Nordic region inside out.',
    cta: 'Learn More',
    image: '/c1.svg',
    badge: 'Consulting',
    bgColor: '#001F3F',
    textColor: '#ffffff',
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
    badge: 'Redovisning',
    bgColor: '#001F3F',
    textColor: '#ffffff',
  },
  {
    id: 2,
    title: 'Allt-i-ett Personalhantering',
    description:
      'En komplett HR-lösning för företag att hantera anställda, arbetstillstånd, immigrationsstatus och kontrakt på en plattform.',
    cta: 'Läs mer',
    image: '/a2.svg',
    badge: 'HR-lösningar',
    bgColor: '#001F3F',
    textColor: '#ffffff',
  },
  {
    id: 3,
    title: 'Omfattande Lönelösningar',
    description:
      'Förenkla din löneprocess med vårt kompletta lönehanteringssystem. Hantera anställdas löner, skatteefterlevnad och förmåner sömlöst.',
    cta: 'Läs mer',
    image: '/payroll-solutions-illustration.svg',
    badge: 'Löner',
    bgColor: '#001F3F',
    textColor: '#ffffff',
  },
  {
    id: 4,
    title: 'Expertrådgivning',
    description:
      'Få personlig stöttning från migrations- och relocationsexperter som kan Norden utan och innan.',
    cta: 'Läs mer',
    image: '/c1.svg',
    badge: 'Konsultation',
    bgColor: '#001F3F',
    textColor: '#ffffff',
  },
];

export default function VerticalFeatureCarousel() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const featureSet = isSv ? featuresSv : featuresEn;
  const [hoveredId, setHoveredId] = useState<number | 2>(2); // Default to card 2 (All-in-One Employee Management)

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

        {/* HORIZONTAL CARDS GRID - Expandable Layout */}
        <div className="flex gap-4 md:gap-5 lg:gap-6 w-full h-[350px] lg:h-[400px] items-stretch">
          {featureSet.map((item, idx) => {
            const isHovered = hoveredId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredId(item.id)}
                className="rounded-2xl overflow-hidden transition-all duration-500 group cursor-pointer border-b-4 flex flex-col"
                style={{
                  backgroundColor: isHovered ? item.bgColor : '#ffffff',
                  borderBottomColor: '#3b82f6',
                  boxShadow: isHovered
                    ? '0 25px 60px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.08)'
                    : '0 8px 20px rgba(0,0,0,0.06)',
                  flex: isHovered ? '2.5' : '1',
                }}
              >
                <div 
                  className={`h-full p-3 md:p-4 lg:p-6 ${
                    isHovered ? 'grid grid-cols-[1.2fr_1fr]' : 'flex flex-col'
                  }`}
                >
                  {/* LEFT SIDE - Content (Always first) */}
                  <div className="flex flex-col h-full relative">
                    {/* Badge */}
                    <motion.div 
                      className="flex items-start mb-3 md:mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 + 0.1 }}
                    >
                      <span 
                        className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap
                          ${item.bgColor === '#001F3F' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-blue-200 text-blue-700'}
                        `}
                      >
                        {item.badge}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className={`font-bold leading-tight mb-2 md:mb-3 transition-all duration-300 ${
                        isHovered ? 'text-xl md:text-2xl lg:text-3xl' : 'text-lg md:text-xl'
                      }`}
                      style={{ color: isHovered ? item.textColor : '#0f172a' }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Description - Always visible */}
                    <motion.p 
                      className={`leading-relaxed font-normal mb-3 md:mb-4 ${
                        isHovered ? 'text-sm md:text-base' : 'text-sm md:text-base line-clamp-3 md:line-clamp-none'
                      }`}
                      style={{ color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#64748b' }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Learn More Link - Always visible */}
                    <motion.div
                      transition={{ duration: 0.4 }}
                      className="mt-auto pt-2"
                    >
                      <a 
                        href="#"
                        className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group/link"
                        style={{ 
                          color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#2563eb'
                        }}
                      >
                        {item.cta}
                        <motion.span 
                          className="inline-block transition-transform duration-300 text-lg"
                          animate={{ x: isHovered ? 4 : 0 }}
                        >
                          →
                        </motion.span>
                      </a>
                    </motion.div>
                  </div>

                  {/* RIGHT SIDE - Image (Only when hovered) */}
                  {isHovered && (
                    <motion.div 
                      className="flex items-center justify-center pl-4 md:pl-6 h-full"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto max-w-xs object-contain"
                        style={{
                          filter: 'drop-shadow(0 8px 20px rgba(59, 130, 246, 0.3)) brightness(1.05)',
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}