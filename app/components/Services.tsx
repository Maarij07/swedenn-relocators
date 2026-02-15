'use client';

import React, { ReactNode, useCallback, useLayoutEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { keyframes } from '@emotion/react';
import Lenis from 'lenis';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  coverImage: string;
  thumbImage: string;
}

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStackItem = ({ children }: { children: ReactNode }) => (
  <div
    className="scroll-stack-card"
    style={{
      transformOrigin: 'top center',
      willChange: 'transform, filter',
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
      minHeight: '20rem',
      width: '92%',
      maxWidth: '1120px',
      padding: '0',
      borderRadius: '32px',
      boxSizing: 'border-box',
      WebkitTransform: 'translateZ(0)',
      transform: 'translateZ(0)',
      position: 'relative',
      background: '#dbeafe',
      margin: '0 auto',
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, { translateY: number; scale: number; rotation: number; blur: number }>());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return Number(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    }
    const scroller = scrollerRef.current;
    return {
      scrollTop: scroller?.scrollTop || 0,
      containerHeight: scroller?.clientHeight || 0,
      scrollContainer: scroller,
    };
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      }
      return element.offsetTop;
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    const endElementTop = endElement ? getElementOffset(endElement as HTMLElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j += 1) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
      });

      lenis.on('scroll', handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const lenis = new Lenis({
      wrapper: scroller,
      content: scroller.querySelector('.scroll-stack-inner') as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
    });

    lenis.on('scroll', handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll<HTMLElement>('.scroll-stack-card')
        : scroller.querySelectorAll<HTMLElement>('.scroll-stack-card')
    );

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
  ]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'visible',
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'scroll-position',
      }}
    >
      <div
        className="scroll-stack-inner"
        style={{
          padding: '20vh 5rem 50rem',
          minHeight: '100vh',
        }}
      >
        {children}
        <div className="scroll-stack-end" style={{ width: '100%', height: '1px' }} />
      </div>
    </div>
  );
};

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
  const { i18n, t } = useTranslation();
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 4, sm: 6, lg: 7, xl: 8 },
        pb: { xs: 8, sm: 10, lg: 12, xl: 14 },
        background: '#EBF4FF',
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

        {/* Services Stack */}
        <Box
          sx={{
            height: { xs: '1200px', sm: '1100px', lg: '1000px', xl: '1050px' },
          }}
        >
          <ScrollStack itemDistance={80} itemStackDistance={24} baseScale={0.88}>
            {services.map((service) => (
              <ScrollStackItem key={service.id}>
                <Card
                  sx={{
                    boxShadow: 'none',
                    border: 'none',
                    borderRadius: '32px',
                    backgroundColor: '#dbeafe',
                    overflow: 'hidden',
                    margin: 0,
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 22px rgba(59, 130, 246, 0.18)',
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 3, sm: 3.5, lg: 4 },
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      height: '100%',
                    }}
                  >
                {/* Illustration */}
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 2,
                    py: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      animation: `${floatAnimation} 4s ease-in-out infinite`,
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <img
                      src={service.coverImage}
                      alt={`${t(service.titleKey)} illustration`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '250px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 4px 10px rgba(59, 130, 246, 0.1))',
                      }}
                    />
                  </Box>
                </Box>

                {/* Thumbnail + Title */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 1.5,
                    mb: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(59, 130, 246, 0.12)',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <img
                      src={service.thumbImage}
                      alt={t(service.titleKey)}
                      style={{
                        width: '55%',
                        height: '55%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', sm: '1.075rem', lg: '1.125rem' },
                      fontWeight: 700,
                      color: '#0f172a',
                      lineHeight: 1.3,
                    }}
                  >
                    {t(service.titleKey)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) auto' },
                    gap: { xs: 2, md: 3 },
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '0.85rem', sm: '0.875rem', lg: '0.9rem' },
                      color: '#64748b',
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    {t(service.descriptionKey)}
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                    <Button
                      sx={{
                        px: 3.5,
                        py: 1.25,
                        fontSize: { xs: '0.85rem', sm: '0.9rem' },
                        fontWeight: 600,
                        textTransform: 'none',
                        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                        color: '#ffffff',
                        borderRadius: '8px',
                        border: 'none',
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                        },
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 5px 16px rgba(0, 0, 0, 0.28)',
                          '&::before': {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      <Box component="span" sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 0.75 }}>
                        {t('services.viewDetails')}
                        <Box
                          component="span"
                          sx={{
                            display: 'inline-block',
                            transition: 'transform 0.3s ease',
                            '.MuiButton-root:hover &': {
                              transform: 'translateX(3px)',
                            },
                          }}
                        >
                          →
                        </Box>
                      </Box>
                    </Button>
                  </Box>
                </Box>
                  </CardContent>
                </Card>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </Box>
      </div>
    </Box>
  );
}