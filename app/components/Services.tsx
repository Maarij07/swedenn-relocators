'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  coverImage: string;
  thumbImage: string;
}

const services: Service[] = [
  {
    id: 'business',
    titleKey: 'services.cards.business.title',
    descriptionKey: 'services.cards.business.description',
    coverImage: '/businessman-analyzing-data.svg',
    thumbImage: '/image2.png',
  },
  {
    id: 'family',
    titleKey: 'services.cards.family.title',
    descriptionKey: 'services.cards.family.description',
    coverImage: '/fr.svg',
    thumbImage: '/image1.png',
  },
  {
    id: 'work',
    titleKey: 'services.cards.work.title',
    descriptionKey: 'services.cards.work.description',
    coverImage: '/work-permit-illustration.svg',
    thumbImage: '/image3.png',
  },
  {
    id: 'parents',
    titleKey: 'services.cards.parents.title',
    descriptionKey: 'services.cards.parents.description',
    coverImage: '/pr.svg',
    thumbImage: '/image4.png',
  },
  {
    id: 'study',
    titleKey: 'services.cards.study.title',
    descriptionKey: 'services.cards.study.description',
    coverImage: '/study-in-sweden-illustration.svg',
    thumbImage: '/image5.png',
  },
  {
    id: 'ltr',
    titleKey: 'services.cards.ltr.title',
    descriptionKey: 'services.cards.ltr.description',
    coverImage: '/LTR-permit-illustration.svg',
    thumbImage: '/image6.png',
  },
];

export default function Services() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<number | null>(null);

  const setCardRef = useCallback((index: number) => (node: HTMLDivElement | null) => {
    cardRefs.current[index] = node;
  }, []);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left, behavior });
  }, []);

  const updateActiveFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const pauseAutoplay = useCallback((value: boolean) => {
    isPausedRef.current = value;
  }, []);

  const handleScroll = useCallback(() => {
    pauseAutoplay(true);
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      pauseAutoplay(false);
    }, 2500);

    if (rafRef.current) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateActiveFromScroll();
    });
  }, [pauseAutoplay, updateActiveFromScroll]);

  const handleWheel = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    track.scrollLeft += event.deltaY;
  }, []);

  useEffect(() => {
    scrollToIndex(0, 'auto');
  }, [scrollToIndex]);

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      if (isPausedRef.current) return;
      setActiveIndex((prev) => {
        const next = (prev + 1) % services.length;
        scrollToIndex(next);
        return next;
      });
    }, 2200);

    return () => {
      window.clearInterval(autoplay);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [scrollToIndex]);

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 4, sm: 6, lg: 7, xl: 8 },
        pb: { xs: 8, sm: 10, lg: 12, xl: 14 },
        background: '#f8fafc',
      }}
    >
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        
        {/* Header */}
        <Box sx={{ mb: { xs: 8, sm: 10, lg: 12 }, textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: { xs: '11px', sm: '12px', lg: '13px' },
              color: '#60a5fa',
              fontWeight: 600,
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
>
            {t('services.badge')}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.5rem', xl: '2.75rem' },
              fontWeight: 800,
              mb: 1.5,
              color: '#0f172a',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
>
            {t('services.title')}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', xl: '2rem' },
              fontWeight: 700,
              color: '#60a5fa',
              textAlign: 'center',
            }}
>
            {t('services.subtitle')}
          </Typography>
        </Box>

        {/* Services Carousel */}
        <Box
          sx={{
            position: 'relative',
          }}
          onMouseEnter={() => pauseAutoplay(true)}
          onMouseLeave={() => pauseAutoplay(false)}
          onFocus={() => pauseAutoplay(true)}
          onBlur={() => pauseAutoplay(false)}
        >
          <Box
            ref={trackRef}
            onScroll={handleScroll}
            onWheel={handleWheel}
            sx={{
              display: 'flex',
              gap: { xs: 2.5, sm: 3.5, lg: 4 },
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              px: { xs: 0.5, sm: 2, md: 4 },
              pb: { xs: 5, sm: 6 },
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              touchAction: 'pan-x',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <Box
                  key={service.id}
                  ref={setCardRef(index)}
                  onClick={() => {
                    setActiveIndex(index);
                    scrollToIndex(index);
                  }}
                  sx={{
                    flex: '0 0 auto',
                    minWidth: { xs: '86%', sm: '70%', md: '60%', lg: '52%' },
                    maxWidth: { xs: '86%', sm: '70%', md: '60%', lg: '52%' },
                    scrollSnapAlign: 'center',
                    transition: 'transform 0.5s ease, filter 0.5s ease, opacity 0.5s ease',
                    transform: isActive ? 'scale(1)' : 'scale(0.92)',
                    filter: isActive ? 'none' : 'blur(6px)',
                    opacity: isActive ? 1 : 0.6,
                    pointerEvents: isActive ? 'auto' : 'auto',
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: '28px',
                      background: '#ffffff',
                      boxShadow: isActive
                        ? '0 24px 60px rgba(15, 23, 42, 0.14)'
                        : '0 10px 28px rgba(15, 23, 42, 0.08)',
                      overflow: 'hidden',
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: { xs: 220, sm: 250, md: 270 },
                        background: 'linear-gradient(135deg, #c7b8ff 0%, #bdb0ff 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={service.coverImage}
                        alt={`${t(service.titleKey)} illustration`}
                        style={{
                          width: '78%',
                          height: '78%',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 8px 18px rgba(15, 23, 42, 0.18))',
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        p: { xs: 2.5, sm: 3, md: 3.5 },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '12px',
                            background: 'rgba(15, 23, 42, 0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <img
                            src={service.thumbImage}
                            alt={t(service.titleKey)}
                            style={{ width: '55%', height: '55%', objectFit: 'contain' }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: '1rem', sm: '1.1rem', lg: '1.2rem' },
                            fontWeight: 700,
                            color: '#0f172a',
                          }}
                        >
                          {t(service.titleKey)}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem' },
                          color: '#475569',
                          lineHeight: 1.6,
                        }}
                      >
                        {t(service.descriptionKey)}
                      </Typography>

                      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                          sx={{
                            px: 2.5,
                            py: 1,
                            borderRadius: '10px',
                            textTransform: 'none',
                            fontWeight: 600,
                            border: 'none',
                            color: '#ffffff',
                            background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                            boxShadow: '0 10px 24px rgba(15, 23, 42, 0.25)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 100%)',
                              boxShadow: '0 12px 28px rgba(15, 23, 42, 0.32)',
                            },
                          }}
                        >
                          {t('services.viewDetails')}
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              mt: { xs: 1.5, sm: 2 },
            }}
          >
            {services.map((service, index) => (
              <Box
                key={`${service.id}-dot`}
                component="button"
                type="button"
                aria-label={`Go to ${t(service.titleKey)}`}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }}
                sx={{
                  width: index === activeIndex ? 18 : 8,
                  height: 8,
                  borderRadius: '999px',
                  border: 'none',
                  background: index === activeIndex ? '#1e293b' : '#cbd5f5',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </Box>
        </Box>
      </div>
    </Box>
  );
}