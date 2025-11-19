'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'All-in-One Platform',
    description:
      'Manage all your relocation needs through a single, secure platform. From housing to documentation, everything is integrated seamlessly.',
    cta: 'Explore',
    image: '/a1.svg',
  },
  {
    id: 2,
    title: 'Expert Guidance',
    description:
      'Get personalized support from immigration and relocation specialists who understand the Nordic region inside out.',
    cta: 'Learn More',
    image: '/a2.svg',
  },
  {
    id: 3,
    title: 'Global Network',
    description:
      'Connect with our extensive network of partners across Sweden, Denmark, and the Nordic region for seamless support.',
    cta: 'Connect',
    image: '/a3.svg',
  },
  {
    id: 4,
    title: 'Corporate Solutions',
    description:
      'Streamlined employee relocation programs designed for companies of all sizes. Manage your workforce mobility efficiently.',
    cta: 'Discover',
    image: '/c1.svg',
  },
];

function getCardPosition(index: number, active: number, total: number) {
  if (index === active)
    return { y: 0, scale: 1, opacity: 1, zIndex: 3 } as const;

  const prevIndex = active === 0 ? total - 1 : active - 1;
  if (index === prevIndex)
    return { y: -20, scale: 0.98, opacity: 0.3, zIndex: 2 } as const;

  const nextIndex = active === total - 1 ? 0 : active + 1;
  if (index === nextIndex)
    return { y: 20, scale: 0.98, opacity: 0.3, zIndex: 2 } as const;

  return { y: 0, scale: 0.95, opacity: 0, zIndex: 1 } as const;
}

export default function VerticalFeatureCarousel() {
  const [active, setActive] = useState(0);
  const max = features.length - 1;
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActive((current) => (current >= max ? 0 : current + 1));
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [max, isPaused]);

  const handlePrev = () => setActive((i) => (i <= 0 ? max : i - 1));
  const handleNext = () => setActive((i) => (i >= max ? 0 : i + 1));

  const positions = useMemo(
    () => features.map((_, idx) => getCardPosition(idx, active, features.length)),
    [active]
  );

  return (
    <section className="w-full bg-[#EBF4FF] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 3xl:py-36 4k:py-44">
      {/* EXACT SAME CONTAINER AS HERO AND GlobalVisaPlatform */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        
        {/* Heading – match Hero typography + alignment */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <p className="text-[11px] sm:text-xs md:text-sm lg:text-sm font-semibold tracking-[0.18em] text-blue-600 mb-3 uppercase">
            Our Services
          </p>
          <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] 2xl:text-[3rem] 3xl:text-[3.25rem] 4k:text-[4rem] leading-[1.2] font-extrabold">
            <span className="text-gray-900">Empowering </span>
            <span className="text-blue-600">Business </span>
            <span className="text-gray-900">with Digital </span>
            <span className="text-blue-600">Solutions</span>
          </h2>
        </div>

        {/* UP ARROW - Small and just above cards, safely below heading */}
        <div className="flex justify-center mt-4 mb-4 relative z-20">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="bg-gray-900 hover:bg-gray-800 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all duration-200 flex items-center justify-center shadow-md"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* CAROUSEL STAGE – extra height so centered card stays below heading */}
        <div className="relative w-full mb-4">
          <div className="relative w-full h-full min-h-[340px] md:min-h-[420px] lg:min-h-[460px] xl:min-h-[520px]">
            {features.map((item, idx) => {
              const pos = positions[idx];
              const isActive = idx === active;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{
                    opacity: pos.opacity,
                    y: pos.y,
                    scale: pos.scale,
                    zIndex: pos.zIndex,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl sm:rounded-3xl overflow-hidden"
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    boxShadow: isActive
                      ? '0 32px 80px rgba(15, 23, 42, 0.18)'
                      : '0 20px 45px rgba(15, 23, 42, 0.12)',
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* LEFT SIDE - Illustration fills left half nicely */}
                    <div className="hidden md:flex items-center justify-center bg-gray-50 px-8 py-8 lg:px-10 lg:py-10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>

                    {/* RIGHT SIDE - Content in white */}
                    <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-14 bg-white">
                      {/* Title – larger to fill container better */}
                      <h3 className="text-2xl sm:text-[1.7rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.2rem] 3xl:text-[2.5rem] font-extrabold text-gray-900 leading-tight mb-4">
                        {item.title}
                      </h3>

                      {/* Description – slightly larger and wider */}
                      <p className="text-sm sm:text-[0.95rem] md:text-base lg:text-[1.05rem] xl:text-[1.1rem] 3xl:text-[1.25rem] text-gray-600 leading-relaxed mb-7 max-w-xl">
                        {item.description}
                      </p>

                      {/* Button – bigger to match heading scale */}
                      <div>
                        <button className="px-9 sm:px-10 md:px-11 lg:px-12 py-3.5 sm:py-3.5 md:py-4 text-sm sm:text-[0.95rem] md:text-base lg:text-[1.05rem] font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-all duration-300 shadow-md inline-block">
                          {item.cta}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* DOWN ARROW - Small and just below cards */}
        <div className="flex justify-center mt-4 relative z-20">
          <button
            onClick={handleNext}
            aria-label="Next"
            className="bg-gray-900 hover:bg-gray-800 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all duration-200 flex items-center justify-center shadow-md"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}