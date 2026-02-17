'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useTranslation } from 'react-i18next';

const SUCCESS_ITEMS_EN = [
  {
    label: 'Study in Sweden Applications',
    value: 94,
    icon: 's.svg',
    barColor: '#60a5fa',
    trackColor: '#e5f0ff',
  },
  {
    label: 'EU Family Reunification',
    value: 100,
    icon: 'eu.svg',
    barColor: '#4ade80',
    trackColor: '#dcfce7',
  },
  {
    label: 'Work Permit Applications',
    value: 98,
    icon: 'wp.svg',
    barColor: '#fdba74',
    trackColor: '#ffedd5',
  },
  {
    label: 'LTR Residents EU Countries',
    value: 96,
    icon: 'lt.svg',
    barColor: '#facc15',
    trackColor: '#fef9c3',
  },
  {
    label: 'Relocation with Investment Solutions',
    value: 78,
    icon: 'inv.svg',
    barColor: '#fca5a5',
    trackColor: '#fee2e2',
  },
];

const SUCCESS_ITEMS_SV = [
  {
    label: 'Studier i Sverige-ansökningar',
    value: 94,
    icon: 's.svg',
    barColor: '#60a5fa',
    trackColor: '#e5f0ff',
  },
  {
    label: 'EU-familjeåterförening',
    value: 100,
    icon: 'eu.svg',
    barColor: '#4ade80',
    trackColor: '#dcfce7',
  },
  {
    label: 'Arbetstillståndsansökningar',
    value: 98,
    icon: 'wp.svg',
    barColor: '#fdba74',
    trackColor: '#ffedd5',
  },
  {
    label: 'Långvariga bosättningar EU-länder',
    value: 96,
    icon: 'lt.svg',
    barColor: '#facc15',
    trackColor: '#fef9c3',
  },
  {
    label: 'Relocation med investeringslösningar',
    value: 78,
    icon: 'inv.svg',
    barColor: '#fca5a5',
    trackColor: '#fee2e2',
  },
];

export default function RelocationSuccessSection() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  // Select the appropriate success items based on language
  const successItems = isSv ? SUCCESS_ITEMS_SV : SUCCESS_ITEMS_EN;
  const [animatedValues, setAnimatedValues] = useState(() => successItems.map(() => 0));
  const graphRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);

  const animateValues = useCallback(() => {
    const targets = successItems.map((item) => item.value);
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedValues(targets.map((value) => Math.round(value * eased)));

      if (progress < 1) {
        rafRef.current = window.requestAnimationFrame(step);
      }
    };

    rafRef.current = window.requestAnimationFrame(step);
  }, [successItems]);

  useEffect(() => {
    setAnimatedValues(successItems.map(() => 0));
    hasAnimatedRef.current = false;
  }, [isSv, successItems]);

  useEffect(() => {
    const target = graphRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animateValues();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animateValues]);

  // Translations for UI elements
  const texts = {
    teamProvide: isSv ? 'Vårt erfarna team erbjuder' : 'Our Experienced Team Provide',
    relocationServices: isSv ? 'Relocation‑tjänster' : 'Relocation Services',
    readMore: isSv ? 'Läs mer' : 'Read More',
    successGraph: isSv ? 'Vår framgångsgraf' : 'Our Success Graph',
    tagOne: isSv ? '10+ års erfarenhet' : '10+ Years Experience',
    tagTwo: isSv ? 'Hög träffsäkerhet' : 'High Success Rate',
    tagThree: isSv ? 'Betrodda av familjer' : 'Trusted by Families',
    description: isSv
      ? 'Över ett decenniums beprövad erfarenhet av smidiga relocation‑ och immigrationslösningar med mycket höga framgångstal.'
      : 'A decade of proven expertise, providing seamless relocation and immigration solutions with outstanding success rates.',
  };

  return (
    <section className="bg-[#EBF4FF]">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-24">
        {/* Centered heading + sub-heading */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-[#0f172a] font-extrabold leading-[1.2] text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
            {texts.teamProvide}
          </h2>
          <h3 className="mt-2 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-bold leading-[1.35] text-[#2563eb] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
            {texts.relocationServices}
          </h3>
        </div>

        {/* Content row - Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left illustration */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: {
                  xs: '370px',
                  sm: '460px',
                  lg: '450px',
                  '2xl': '540px',
                  '4k': '640px',
                },
                '@keyframes illustrationFloat': {
                  '0%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
                  '25%': { transform: 'translateY(-6px) rotate(-0.5deg) scale(1.01)' },
                  '50%': { transform: 'translateY(-10px) rotate(0deg) scale(1.015)' },
                  '75%': { transform: 'translateY(-6px) rotate(0.5deg) scale(1.01)' },
                  '100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
                },
                '@keyframes badgeFloatLeft': {
                  '0%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-8px)' },
                  '100%': { transform: 'translateY(0px)' },
                },
                '@keyframes badgeFloatRightTop': {
                  '0%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-10px)' },
                  '100%': { transform: 'translateY(0px)' },
                },
                '@keyframes badgeFloatRightBottom': {
                  '0%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(7px)' },
                  '100%': { transform: 'translateY(0px)' },
                },
                animation: 'illustrationFloat 5.5s ease-in-out infinite',
                transformOrigin: '50% 70%',
                willChange: 'transform',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: '34%', sm: '36%' },
                  left: { xs: -54, sm: -74, md: -92, lg: -112, xl: -124 },
                  zIndex: 5,
                  px: { xs: 1.25, sm: 1.5 },
                  py: { xs: 0.75, sm: 1 },
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)',
                  fontSize: { xs: '0.65rem', sm: '0.72rem' },
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.1,
                  animation: 'badgeFloatLeft 3.2s ease-in-out infinite',
                }}
              >
                {texts.tagOne}
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: '18%', sm: '20%' },
                  right: { xs: -42, sm: -58, md: -72, lg: -90, xl: -104 },
                  zIndex: 5,
                  px: { xs: 1.25, sm: 1.5 },
                  py: { xs: 0.75, sm: 1 },
                  borderRadius: '999px',
                  backgroundColor: '#2563eb',
                  boxShadow: '0 10px 24px rgba(37, 99, 235, 0.28)',
                  fontSize: { xs: '0.65rem', sm: '0.72rem' },
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.1,
                  animation: 'badgeFloatRightTop 3.8s ease-in-out infinite',
                }}
              >
                {texts.tagTwo}
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: '20%', sm: '18%' },
                  right: { xs: -48, sm: -66, md: -82, lg: -102, xl: -116 },
                  zIndex: 5,
                  px: { xs: 1.25, sm: 1.5 },
                  py: { xs: 0.75, sm: 1 },
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(37, 99, 235, 0.25)',
                  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)',
                  fontSize: { xs: '0.65rem', sm: '0.72rem' },
                  fontWeight: 700,
                  color: '#1e40af',
                  lineHeight: 1.1,
                  animation: 'badgeFloatRightBottom 3.4s ease-in-out infinite',
                }}
              >
                {texts.tagThree}
              </Box>

              <Image
                src="/p1.svg"
                alt="Relocation success illustration"
                width={800}
                height={800}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 400px"
                className="w-full h-auto object-contain"
                quality={100}
              />
            </Box>
          </div>

          {/* Right content - Success Graph */}
          <div className="flex flex-col order-1 lg:order-2">
            <Box
              ref={graphRef}
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: { xs: '18px', sm: '20px', md: '22px' },
                px: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                py: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
                boxShadow: '0 22px 45px rgba(15, 23, 42, 0.08)',
                border: '1px solid rgba(148, 163, 184, 0.12)',
              }}
            >
              {/* Header with title */}
              <div className="mb-6 sm:mb-7 lg:mb-8">
                <h4 className="text-base sm:text-lg lg:text-[1.125rem] font-bold text-slate-900 mb-1.5 lg:mb-2">
                  {texts.successGraph}
                </h4>
                <p className="text-[0.7rem] sm:text-xs lg:text-[0.8125rem] text-slate-500 leading-relaxed max-w-sm">
                  {texts.description}
                </p>
              </div>

              {/* Success items list */}
              <div className="space-y-3 sm:space-y-3.5">
                {successItems.map((item, index) => {
                  const displayValue = Math.min(animatedValues[index] ?? 0, item.value);
                  return (
                  <div key={item.label} className="flex gap-3">
                    {/* Icon - Direct SVG */}
                    <Image
                      src={`/${item.icon}`}
                      alt={item.label}
                      width={48}
                      height={48}
                      className="object-contain flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-[0.8rem] sm:text-[0.875rem] font-medium text-slate-700 truncate">
                          {item.label}
                        </span>
                        <span className="text-[0.75rem] sm:text-[0.8rem] font-bold text-slate-900 flex-shrink-0">
                          {displayValue}%
                        </span>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={displayValue}
                        sx={{
                          height: { xs: 7, sm: 8 },
                          borderRadius: 999,
                          bgcolor: item.trackColor,
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 999,
                            backgroundColor: item.barColor,
                          },
                        }}
                      />
                    </div>
                  </div>
                );
                })}
              </div>
            </Box>

            <div className="pt-4 sm:pt-5 flex justify-end">
              <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white text-[0.75rem] sm:text-[0.85rem] font-semibold px-4 sm:px-5 py-2 sm:py-2.5 whitespace-nowrap shadow-[0_12px_30px_rgba(15,23,42,0.25)] hover:bg-slate-800 transition-colors">
                {texts.readMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}