'use client';

import Navbar from '../../components/Navbar';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, Box, Rating, Stack, Typography, Container } from '@mui/material';

interface Testimonial {
  id: number | string;
  name: string;
  avatarUrl?: string;
  initials?: string;
  rating: number;
  category: string;
  content: string;
  postedAt: string;
}

interface APIItem {
  id: number | string;
  username: string;
  user_profile_pic?: string | null;
  title?: string | null;
  review?: string | null;
  rating?: number | string | null;
  created_at?: string | null;
}

interface APIResponse {
  data: APIItem[];
}

const reviewsCache = new Map<
  string,
  { data: Testimonial[]; timestamp: number }
>();
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

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

const AvatarColor = ({ initials, color }: { initials: string; color: string }) => {
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

export default function TestimonialsPage() {
  const { t, i18n } = useTranslation();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      const cacheKey = 'reviews';
      const now = Date.now();

      const cleanAvatarUrl = (raw?: string | null): string | undefined => {
        if (!raw) return undefined;
        // Strip accidental quotes/backticks and whitespace
        const trimmed = String(raw).replace(/[`'"]/g, '').trim();
        if (!trimmed) return undefined;
        if (/^https?:\/\//i.test(trimmed)) return trimmed;
        // Build absolute URL using API base (strip trailing /api)
        const apiBase = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/api\/?$/i, '');
        if (!apiBase) return trimmed;
        if (trimmed.startsWith('/')) return `${apiBase}${trimmed}`;
        return `${apiBase}/${trimmed}`;
      };

      if (reviewsCache.has(cacheKey)) {
        const cached = reviewsCache.get(cacheKey)!;
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
        const res = await fetch(`${baseUrl}/miscellaneous/review/lists`);
        if (!res.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const raw: any = await res.json();
        let list: any[] = [];
        if (Array.isArray(raw)) list = raw;
        else if (Array.isArray(raw?.data)) list = raw.data;
        else if (Array.isArray(raw?.data?.data)) list = raw.data.data;
        else if (Array.isArray(raw?.results)) list = raw.results;
        else if (Array.isArray(raw?.reviews)) list = raw.reviews;
        else if (Array.isArray(raw?.data?.reviews)) list = raw.data.reviews;
        else list = [];

        const mapped: Testimonial[] = list.map((it: any, idx: number) => {
          // Fallbacks and mapping
          const name = it.username || it.name || 'Anonymous';
          const initials = name
            .split(' ')
            .map((p: string) => p[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();
          const ratingNum =
            typeof it.rating === 'string' ? parseFloat(it.rating) : it.rating ?? 5;
          const finalRating = Number.isFinite(Number(ratingNum))
            ? Math.max(0, Math.min(5, Number(ratingNum)))
            : 5;
          return {
            id: it.id ?? it._id ?? `r-${idx}`,
            name,
            avatarUrl: cleanAvatarUrl(it.user_profile_pic || it.avatar),
            initials,
            rating: finalRating,
            category: (it.title || it.category || 'Review')?.toString().trim(),
            content: (it.review || it.content || '')?.toString(),
            postedAt: (it.created_at || it.postedAt || '')?.toString(),
          };
        });

        reviewsCache.set(cacheKey, { data: mapped, timestamp: now });
        if (isMountedRef.current) {
          setTestimonials(mapped);
          setError(null);
        }
      } catch (e) {
        console.error('Error loading reviews', e);
        if (isMountedRef.current) {
          setError('Failed to load reviews');
          setTestimonials([]);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    fetchReviews();
  }, []);

  const texts = {
    title: i18n.language === 'sv' ? 'Vad säger våra kunder' : 'What Our Clients Say',
    description:
      i18n.language === 'sv'
        ? 'Läs tusentals positiva recensioner från nöjda kunder som har gjort framgångsrika omflyttningar.'
        : 'Read thousands of positive reviews from satisfied clients who have successfully relocated.',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Animations keyframes */}
      <style>{fadeInUp}</style>

      {/* Hero-style header */}
      <section className="relative overflow-hidden bg-[#F8F9FE]">
        <div className="pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
            <div
              className="text-center max-w-3xl mx-auto"
              style={{ animation: 'fadeInUp 0.8s ease-out' }}
            >
              <h1 className="text-[1.9rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.1rem] 2xl:text-[3.3rem] 3xl:text-[4rem] 4k:text-[6rem] font-bold leading-tight text-gray-900 mb-4">
                {texts.title}
              </h1>
              <p className="mt-4 text-[14px] sm:text-[15px] md:text-base lg:text-[17px] xl:text-[18px] 3xl:text-[20px] 4k:text-[2rem] text-gray-600 leading-relaxed">
                {texts.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <Container maxWidth="lg">
          {loading && (
            <Typography variant="body2" sx={{ color: '#6B7280', mb: 2 }}>
              Loading reviews…
            </Typography>
          )}
          {error && (
            <Typography variant="body2" sx={{ color: '#b91c1c', mb: 2 }}>
              {error}
            </Typography>
          )}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Box
                key={String(testimonial.id)}
                sx={{
                  p: 6,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: 'fadeInUp 0.7s ease-out',
                  animationDelay: `${index * 40}ms`,
                  animationFillMode: 'both',
                  '&:hover': {
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Rating */}
                <Stack spacing={1} sx={{ mb: 2 }}>
                  <Rating
                    value={testimonial.rating}
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
                    {testimonial.category}
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
                  }}
                >
                  {testimonial.content}
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
                  {testimonial.avatarUrl ? (
                    <Avatar
                      src={testimonial.avatarUrl}
                      sx={{ width: 48, height: 48 }}
                      alt={testimonial.name}
                    />
                  ) : (
                    <AvatarColor
                      initials={testimonial.initials || 'SR'}
                      color={['1f2937', '3b82f6', '8b5cf6', 'f97316', '10b981'][index % 5]}
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
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#9CA3AF',
                      }}
                    >
                      {testimonial.postedAt}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </section>
    </main>
  );
}
