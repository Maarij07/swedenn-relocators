'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Box,
  Stack,
  Avatar,
  Rating,
  Typography,
  Button,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data generator
const generateMockAvatar = (index: number) => {
  const colors = ['1f2937', '3b82f6', '8b5cf6', 'f97316', '10b981'];
  const initials = ['AB', 'CD', 'EF', 'GH', 'IJ', 'KL', 'MN', 'OP'][index % 8];
  return initials;
};

const generateMockName = (index: number) => {
  const names = [
    'Sarah Anderson',
    'John Developer',
    'Emma Wilson',
    'Michael Chen',
    'Lisa Johnson',
    'David Smith',
    'Rachel Green',
    'Tom Brown',
  ];
  return names[index % names.length];
};

// Local fallback testimonials (used if API not available)
const FALLBACK_TESTIMONIALS = [
  {
    id: 1,
    name: generateMockName(1),
    avatar: generateMockAvatar(1),
    rating: 5,
    category: 'Design Quality',
    content:
      'The quality of this service is exceptional. The team is professional and responsive. I would highly recommend to anyone looking for relocation assistance.',
    postedAt: 'April 20, 2024',
  },
  {
    id: 2,
    name: generateMockName(2),
    avatar: generateMockAvatar(2),
    rating: 5,
    category: 'Customer Support',
    content:
      'Amazing experience! The entire process was smooth and the support team was incredibly helpful throughout the relocation journey.',
    postedAt: 'March 19, 2024',
  },
  {
    id: 3,
    name: generateMockName(3),
    avatar: generateMockAvatar(3),
    rating: 5,
    category: 'Service Quality',
    content: 'Professional service with excellent attention to detail. Every step was handled perfectly.',
    postedAt: 'April 19, 2023',
  },
  {
    id: 4,
    name: generateMockName(4),
    avatar: generateMockAvatar(4),
    rating: 4.5,
    category: 'Customer Support',
    content:
      'Great support and helpful guidance throughout the entire process. Highly satisfied with the service.',
    postedAt: 'May 19, 2023',
  },
  {
    id: 5,
    name: generateMockName(5),
    avatar: generateMockAvatar(5),
    rating: 5,
    category: 'Service Quality',
    content:
      'Outstanding team with deep knowledge. They made the relocation process seamless and stress-free.',
    postedAt: 'June 19, 2023',
  },
  {
    id: 6,
    name: generateMockName(6),
    avatar: generateMockAvatar(6),
    rating: 5,
    category: 'Professionalism',
    content: 'Could not have asked for better service. Highly professional and thoroughly knowledgeable.',
    postedAt: 'July 19, 2023',
  },
  {
    id: 7,
    name: generateMockName(7),
    avatar: generateMockAvatar(7),
    rating: 5,
    category: 'Overall Experience',
    content: 'Fantastic experience from start to finish. The team goes above and beyond expectations.',
    postedAt: 'August 19, 2023',
  },
  {
    id: 8,
    name: generateMockName(8),
    avatar: generateMockAvatar(8),
    rating: 4.5,
    category: 'Value for Money',
    content: 'Excellent value and comprehensive service. Definitely worth the investment.',
    postedAt: 'September 19, 2023',
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [testimonials, setTestimonials] = useState<
    Array<{
      id: number | string;
      name: string;
      avatar?: string; // initials
      avatarUrl?: string;
      rating: number;
      category: string;
      content: string;
      postedAt: string;
    }>
  >([]);
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true);
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const itemsPerView = 3;

  const featuredCache = (globalThis as any).__srFeaturedTestimonialsCache || new Map<string, { data: any[]; timestamp: number }>();
  (globalThis as any).__srFeaturedTestimonialsCache = featuredCache;
  const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchFeatured = async () => {
      const cacheKey = 'featured-reviews';
      const now = Date.now();

      const cleanAvatarUrl = (raw?: string | null): string | undefined => {
        if (!raw) return undefined;
        const trimmed = String(raw).replace(/[`'"]/g, '').trim();
        if (!trimmed) return undefined;
        if (/^https?:\/\//i.test(trimmed)) return trimmed;
        const apiBase = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/api\/?$/i, '');
        if (!apiBase) return trimmed;
        if (trimmed.startsWith('/')) return `${apiBase}${trimmed}`;
        return `${apiBase}/${trimmed}`;
      };

      // Cache check
      if (featuredCache.has(cacheKey)) {
        const cached = featuredCache.get(cacheKey)!;
        if (now - cached.timestamp < CACHE_TTL) {
          if (isMountedRef.current) {
            setTestimonials(cached.data);
            setLoading(false);
          }
          return;
        }
      }

      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${baseUrl}/miscellaneous/review/lists/featured`);
        if (!res.ok) throw new Error('Failed to fetch featured reviews');
        const raw: any = await res.json();
        const list: any[] = Array.isArray(raw?.data) ? raw.data : Array.isArray(raw) ? raw : [];
        const mapped = list.map((it: any, idx: number) => {
          const name = it.username || 'Anonymous';
          const initials = name
            .split(' ')
            .map((p: string) => p[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();
          const ratingNum = typeof it.rating === 'string' ? parseFloat(it.rating) : it.rating ?? 5;
          const finalRating = Number.isFinite(Number(ratingNum))
            ? Math.max(0, Math.min(5, Number(ratingNum)))
            : 5;
          return {
            id: it.id ?? `f-${idx}`,
            name,
            avatar: initials,
            avatarUrl: cleanAvatarUrl(it.user_profile_pic || it.avatar),
            rating: finalRating,
            category: (it.title || 'Review')?.toString().trim(),
            content: (it.review || '')?.toString(),
            postedAt: (it.created_at || '')?.toString(),
          };
        });
        featuredCache.set(cacheKey, { data: mapped, timestamp: now });
        if (isMountedRef.current) {
          setTestimonials(mapped);
        }
      } catch (e) {
        if (isMountedRef.current) {
          // Fallback to static content
          setTestimonials(FALLBACK_TESTIMONIALS);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };
    fetchFeatured();
  }, []);

  const dataSource = testimonials.length ? testimonials : FALLBACK_TESTIMONIALS;

  // Infinite carousel logic - always gets 3 items and wraps around
  const visibleTestimonials = Array.from({ length: itemsPerView }).map(
    (_, i) => dataSource[(activeIndex + i) % dataSource.length]
  );

  const handlePrevious = () => {
    setDirection('prev');
    setActiveIndex((prev) => (prev - 1 + dataSource.length) % dataSource.length);
  };

  const handleNext = () => {
    setDirection('next');
    setActiveIndex((prev) => (prev + 1) % dataSource.length);
  };

  const AvatarColor = ({
    initials,
    color,
  }: {
    initials: string;
    color: string;
  }) => {
    const colorMap: Record<string, string> = {
      '1f2937': '#1f2937',
      '3b82f6': '#3b82f6',
      '8b5cf6': '#8b5cf6',
      'f97316': '#f97316',
      '10b981': '#10b981',
    };

    return (
      <Avatar
        sx={{
          width: 48,
          height: 48,
          backgroundColor: colorMap[color] || '#8b5cf6',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        {initials}
      </Avatar>
    );
  };

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        position: 'relative',
        background: '#F4F6F8',
      }}
    >
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Section Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Box
            sx={{
              backgroundColor: '#eff6ff',
              borderRadius: '0.5rem',
              borderLeft: '4px solid #3b82f6',
              px: { xs: 2, sm: 2.5 },
              py: { xs: 1.5, sm: 2 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.5rem', xl: '2.75rem' },
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
              }}
            >
              What Our Clients Say
            </Typography>
            <Typography
              sx={{
                mt: 0.75,
                fontSize: { xs: '1rem', sm: '1.1rem', lg: '1.25rem', xl: '1.35rem' },
                fontWeight: 700,
                color: '#2563eb',
                lineHeight: 1.35,
              }}
            >
              Real stories from clients who relocated successfully.
            </Typography>
          </Box>
        </Box>

        {/* Testimonials Carousel */}
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
              minHeight: '400px',
            }}
          >
            {visibleTestimonials.map((item, index) => (
              <Box
                key={`testimonial-${activeIndex}-${index}`}
                sx={{
                  p: 6,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: 
                    direction === 'next'
                      ? `slideCardInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) ease-out`
                      : `slideCardInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) ease-out`,
                  '@keyframes slideCardInRight': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(100px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                  '@keyframes slideCardInLeft': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(-100px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                  '&:hover': {
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                }}
              >
                {/* Rating */}
                <Stack spacing={1} sx={{ mb: 2 }}>
                  <Rating
                    value={item.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{
                      '& .MuiRating-iconFilled': {
                        color: '#FBBF24',
                      },
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#8B5CF6',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.category}
                  </Typography>
                </Stack>

                {/* Content */}
                <Typography
                  sx={{
                    color: '#1F2937',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    mb: 3,
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.content}
                </Typography>

                {/* Author Info */}
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    borderTop: '1px solid #F3F4F6',
                    pt: 3,
                    mt: 'auto',
                  }}
                >
                  {(item as any).avatarUrl ? (
                    <Avatar
                      src={(item as any).avatarUrl}
                      sx={{ width: 48, height: 48 }}
                      alt={item.name}
                    />
                  ) : (
                    <AvatarColor
                      initials={item.avatar || generateMockAvatar(Number(item.id) || 0)}
                      color={
                        ['1f2937', '3b82f6', '8b5cf6', 'f97316', '10b981'][
                          Number(item.id) % 5
                        ]
                      }
                    />
                  )}
                  <Stack spacing={0.5}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#1F2937',
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#9CA3AF',
                      }}
                    >
                      {item.postedAt}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Box>

          {/* Navigation */}
          <Box sx={{ pt: 4 }}>
            {/* Mobile: arrows + button row */}
            <Stack
              direction="row"
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: { xs: 2, sm: 0 },
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={handlePrevious}
                  variant="outlined"
                  sx={{
                    minWidth: '44px',
                    width: '44px',
                    height: '44px',
                    p: 0,
                    borderColor: '#E5E7EB',
                    color: '#1F2937',
                    '&:hover': {
                      borderColor: '#1C252E',
                      backgroundColor: '#F3F4F6',
                      boxShadow: '0 0 0 0.75px #1C252E',
                    },
                  }}
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  onClick={handleNext}
                  variant="outlined"
                  sx={{
                    minWidth: '44px',
                    width: '44px',
                    height: '44px',
                    p: 0,
                    borderColor: '#E5E7EB',
                    color: '#1F2937',
                    '&:hover': {
                      borderColor: '#1C252E',
                      backgroundColor: '#F3F4F6',
                      boxShadow: '0 0 0 0.75px #1C252E',
                    },
                  }}
                >
                  <ChevronRight size={20} />
                </Button>
              </Stack>

              <Link href={`/${locale}/testimonials`}>
                <button className="px-4 py-2 text-sm font-medium text-[#1C252E] bg-transparent border border-[#1C252E]/40 rounded-lg hover:border-[#1C252E] hover:shadow-[0_0_0_0.75px_#1C252E] transition-all duration-200 whitespace-nowrap">
                  Show More
                </button>
              </Link>
            </Stack>

            {/* Mobile: dots centered below */}
            <Stack
              direction="row"
              sx={{
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '6px',
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              {Array.from({ length: dataSource.length }).map((_, index) => (
                <Box
                  key={`dot-mobile-${index}`}
                  onClick={() => {
                    setDirection(index > activeIndex ? 'next' : 'prev');
                    setActiveIndex(index);
                  }}
                  sx={{
                    width: activeIndex === index ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: activeIndex === index ? '#1F2937' : '#D1D5DB',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': { backgroundColor: '#6B7280' },
                  }}
                />
              ))}
            </Stack>

            {/* Desktop: dots | show more | arrows in a row */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              {/* Dots */}
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                {Array.from({ length: dataSource.length }).map((_, index) => (
                  <Box
                    key={`dot-${index}`}
                    onClick={() => {
                      setDirection(index > activeIndex ? 'next' : 'prev');
                      setActiveIndex(index);
                    }}
                    sx={{
                      width: activeIndex === index ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: activeIndex === index ? '#1F2937' : '#D1D5DB',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': { backgroundColor: '#6B7280' },
                    }}
                  />
                ))}
              </Stack>

              {/* Show More Button */}
              <Link href={`/${locale}/testimonials`}>
                <button className="px-5 py-2.5 text-sm font-medium text-[#1C252E] bg-transparent border border-[#1C252E]/40 rounded-lg hover:border-[#1C252E] hover:shadow-[0_0_0_0.75px_#1C252E] transition-all duration-200 whitespace-nowrap">
                  Show More
                </button>
              </Link>

              {/* Arrow Navigation */}
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={handlePrevious}
                  variant="outlined"
                  sx={{
                    minWidth: '48px',
                    width: '48px',
                    height: '48px',
                    p: 0,
                    borderColor: '#E5E7EB',
                    color: '#1F2937',
                    '&:hover': {
                      borderColor: '#1C252E',
                      backgroundColor: '#F3F4F6',
                      boxShadow: '0 0 0 0.75px #1C252E',
                    },
                  }}
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  onClick={handleNext}
                  variant="outlined"
                  sx={{
                    minWidth: '48px',
                    width: '48px',
                    height: '48px',
                    p: 0,
                    borderColor: '#E5E7EB',
                    color: '#1F2937',
                    '&:hover': {
                      borderColor: '#1C252E',
                      backgroundColor: '#F3F4F6',
                      boxShadow: '0 0 0 0.75px #1C252E',
                    },
                  }}
                >
                  <ChevronRight size={20} />
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default TestimonialsSection;
