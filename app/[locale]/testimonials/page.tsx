'use client';

import Navbar from '../../components/Navbar';
import { useTranslation } from 'react-i18next';
import { Avatar, Box, Rating, Stack, Typography, Container } from '@mui/material';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  category: string;
  content: string;
  postedAt: string;
}

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

// All testimonials data
const ALL_TESTIMONIALS: Testimonial[] = [
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
  {
    id: 9,
    name: generateMockName(1),
    avatar: generateMockAvatar(1),
    rating: 5,
    category: 'Communication',
    content:
      'Excellent communication throughout the entire process. They kept me informed every step of the way.',
    postedAt: 'October 19, 2023',
  },
  {
    id: 10,
    name: generateMockName(2),
    avatar: generateMockAvatar(2),
    rating: 5,
    category: 'Professionalism',
    content: 'Top-tier service with a highly professional team. Exceeded all expectations.',
    postedAt: 'November 19, 2023',
  },
  {
    id: 11,
    name: generateMockName(3),
    avatar: generateMockAvatar(3),
    rating: 4.5,
    category: 'Value for Money',
    content: 'Great pricing with exceptional quality. Very satisfied with the overall experience.',
    postedAt: 'December 19, 2023',
  },
  {
    id: 12,
    name: generateMockName(4),
    avatar: generateMockAvatar(4),
    rating: 5,
    category: 'Customer Support',
    content: 'Amazing support team. They answered all my questions and concerns promptly.',
    postedAt: 'January 19, 2024',
  },
];

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
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {ALL_TESTIMONIALS.map((testimonial, index) => (
              <Box
                key={testimonial.id}
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
                  <AvatarColor
                    initials={testimonial.avatar}
                    color={['1f2937', '3b82f6', '8b5cf6', 'f97316', '10b981'][testimonial.id % 5]}
                  />
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
