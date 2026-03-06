'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Box,
  Stack,
  Avatar,
  Rating,
  Container,
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

// Testimonials data
const TESTIMONIALS = [
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
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const itemsPerView = 3;

  // Infinite carousel logic - always gets 3 items and wraps around
  const visibleTestimonials = Array.from({ length: itemsPerView }).map(
    (_, i) => TESTIMONIALS[(activeIndex + i) % TESTIMONIALS.length]
  );

  const handlePrevious = () => {
    setDirection('prev');
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setDirection('next');
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
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
        background: '#F8F9FE',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: 8 }}>
          <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{
                color: '#9CA3AF',
                letterSpacing: '1px',
                fontWeight: 600,
              }}
            >
              Testimonials
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#1F2937',
                fontSize: { xs: '28px', md: '42px' },
              }}
            >
              What Our Clients Say
            </Typography>
            <Typography
              sx={{
                color: '#6B7280',
                maxWidth: '600px',
                fontSize: '16px',
                textAlign: 'center',
              }}
            >
              Join thousands of satisfied clients who have successfully relocated with our expert guidance and support.
            </Typography>
          </Stack>
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
                  <AvatarColor
                    initials={item.avatar}
                    color={
                      ['1f2937', '3b82f6', '8b5cf6', 'f97316', '10b981'][
                        item.id % 5
                      ]
                    }
                  />
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
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 4,
            }}
          >
            {/* Dots Navigation */}
            <Stack direction="row" spacing={1}>
              {Array.from({ length: TESTIMONIALS.length }).map((_, index) => (
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
                    '&:hover': {
                      backgroundColor: '#6B7280',
                    },
                  }}
                />
              ))}
            </Stack>

            {/* Show More Button */}
            <Link href={`/${locale}/testimonials`}>
              <Box
                component="button"
                sx={{
                  borderRadius: '9999px',
                  border: '1px solid #E5E7EB',
                  backgroundColor: '#FFFFFF',
                  px: { xs: 6, sm: 8 },
                  py: 1.5,
                  fontSize: { xs: '13px', sm: '14px' },
                  fontWeight: 600,
                  color: '#1F2937',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                    backgroundColor: '#F3F4F6',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Show More
              </Box>
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
                    borderColor: '#8B5CF6',
                    backgroundColor: '#F8F9FE',
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
                    borderColor: '#8B5CF6',
                    backgroundColor: '#F8F9FE',
                  },
                }}
              >
                <ChevronRight size={20} />
              </Button>
            </Stack>
          </Stack>

          {/* Remove the separate Show More button */}
        </Box>
      </Container>
    </Box>
  );
}

export default TestimonialsSection;
