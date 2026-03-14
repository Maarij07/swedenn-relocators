'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axiosInstance from '../utils/axios';
import { useScrollReveal } from '../utils/useScrollReveal';

interface Service {
  id: string;
  title: string;
  description: string;
  short_description: string;
  featured_image: string;
  counter: number;
  duration: string;
  fees: string;
  button_url: string;
}

// Cache configuration
const CACHE_KEY = 'services_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// Cache utility
const getCache = (): { data: Service[]; timestamp: number } | null => {
  if (typeof window === 'undefined') return null;
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const parsed = JSON.parse(cached);
    const now = Date.now();
    if (now - parsed.timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
};

const setCache = (data: Service[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {
    // Silently fail if localStorage is not available
  }
};

export default function Services() {
  const { t } = useTranslation();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<number | null>(null);
  const { ref: sectionRef, isVisible } = useScrollReveal();

  // Fetch services data
  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Check cache first
        const cached = getCache();
        if (cached) {
          console.log('Using cached services:', cached.data.length);
          setServices(cached.data);
          setLoading(false);
          return;
        }

        console.log('Fetching services from API...');
        // Fetch from API
        const response = await axiosInstance.get('/miscellaneous/query/services');
        
        console.log('API Response:', response.data);
        
        if (response.data && response.data.data && Array.isArray(response.data.data)) {
          const apiServices = response.data.data.map((item: any) => ({
            id: String(item.id || item.slug),
            title: item.title || '',
            description: item.description || item.short_description || '',
            short_description: item.short_description || '',
            featured_image: item.featured_image || '',
            counter: item.counter || 0,
            duration: item.duration || '',
            fees: item.fees || '',
            button_url: item.button_url || '',
          }));

          console.log('Mapped services:', apiServices);
          setServices(apiServices);
          setCache(apiServices);
        } else {
          console.error('Invalid API response structure:', response.data);
          setServices([]);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
        // Fallback to empty array on error
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      track.scrollLeft += event.deltaY;
    };
    track.addEventListener('wheel', handleWheel, { passive: false });
    return () => track.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    scrollToIndex(0, 'auto');
  }, [scrollToIndex]);

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      if (isPausedRef.current || services.length === 0) return;
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
  }, [scrollToIndex, services.length]);

  // Show loading skeleton
  if (loading) {
    return (
      <Box
        component="section"
        sx={{
          pt: { xs: 4, sm: 6, lg: 7, xl: 8 },
          pb: { xs: 8, sm: 10, lg: 12, xl: 14 },
          background: '#F4F6F8',
        }}
      >
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              {t('common.loading') || 'Loading services...'}
            </Typography>
          </Box>
        </div>
      </Box>
    );
  }

  // Show error or empty state
  if (!loading && services.length === 0) {
    return (
      <Box
        component="section"
        sx={{
          pt: { xs: 4, sm: 6, lg: 7, xl: 8 },
          pb: { xs: 8, sm: 10, lg: 12, xl: 14 },
          background: '#F4F6F8',
        }}
      >
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              {t('common.noData') || 'No services available'}
            </Typography>
          </Box>
        </div>
      </Box>
    );
  }

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        pt: { xs: 4, sm: 6, lg: 7, xl: 8 },
        pb: { xs: 8, sm: 10, lg: 12, xl: 14 },
        background: '#F4F6F8',
      }}
    >
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        
        <Box sx={{ mb: { xs: 8, sm: 10, lg: 12 }, textAlign: 'center' }}>
          <Box
            sx={{
              backgroundColor: '#eff6ff',
              borderRadius: '0.5rem',
              borderLeft: '4px solid #3b82f6',
              px: { xs: 2, sm: 2.5 },
              py: { xs: 1.5, sm: 2 },
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-16px)',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.5rem', xl: '2.75rem' },
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                fontFamily: '"Public Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {t('services.title')}
            </Typography>
            <Typography
              sx={{
                mt: 0.75,
                fontSize: { xs: '1.1rem', sm: '1.25rem', lg: '1.5rem', xl: '1.75rem' },
                fontWeight: 700,
                color: '#2563eb',
                lineHeight: 1.35,
                textTransform: 'none',
                fontFamily: '"Public Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {t('services.subtitle')}
            </Typography>
          </Box>
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
                  onClick={(e) => {
                    if ((e.target as Element).closest('a, button')) return;
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
                        ? '0 24px 60px rgba(15, 23, 42, 0.14), 0 6px 14px rgba(59, 130, 246, 0.12)'
                        : '0 10px 28px rgba(15, 23, 42, 0.08), 0 4px 10px rgba(59, 130, 246, 0.08)',
                      overflow: 'hidden',
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                      borderBottom: '4px solid #3b82f6',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: { xs: 220, sm: 250, md: 270 },
                        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={service.featured_image}
                        alt={service.title}
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
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: '1rem', sm: '1.1rem', lg: '1.2rem' },
                            fontWeight: 700,
                            color: '#0f172a',
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          fontSize: { xs: '0.9rem', sm: '0.95rem', lg: '1rem' },
                          color: '#475569',
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Typography>

                      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', fontSize: '0.85rem', color: '#94a3b8', mb: 1 }}>
                        <span>⏱ {service.duration || 'N/A'}</span>
                        <span>•</span>
                        <span>👥 {service.counter || 0}</span>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <Box>
                          <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a' }}>
                            €{parseFloat(service.fees || '0').toFixed(2)}
                          </Typography>
                          <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                            / handling fee
                          </Typography>
                        </Box>
                        <a
                          href={service.button_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="btn-service-dark"
                          style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            borderRadius: '10px',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            color: '#ffffff',
                            background: '#1C252E',
                            boxShadow: '0 4px 12px rgba(28, 37, 46, 0.25)',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            fontFamily: 'inherit',
                            transition: 'background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2C3A47';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0px 8px 16px -4px rgba(28,37,46,0.48)';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1C252E';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 12px rgba(28, 37, 46, 0.25)';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                          }}
                        >
                          {t('services.viewDetails') || 'Send Request'}
                        </a>
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
              visibility: 'hidden',
              height: 0,
            }}
          >
            {services.map((service, index) => (
              <Box
                key={`${service.id}-dot`}
                component="button"
                type="button"
                aria-label={`Go to ${service.title}`}
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