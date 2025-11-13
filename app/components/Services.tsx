'use client';

import React from 'react';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  coverImage?: string;
  hasBackground?: boolean;
  cardSize?: 'small' | 'large';
}

const slideUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const AnimatedCard = styled(Card)<{ cardsize?: 'small' | 'large' }>(({ theme, cardsize = 'small' }) => ({
  animation: `${slideUpAnimation} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
  opacity: 0,
  '&:nth-of-type(1)': { animationDelay: '0.05s' },
  '&:nth-of-type(2)': { animationDelay: '0.1s' },
  '&:nth-of-type(3)': { animationDelay: '0.15s' },
  '&:nth-of-type(4)': { animationDelay: '0.2s' },
  '&:nth-of-type(5)': { animationDelay: '0.25s' },
  '&:nth-of-type(6)': { animationDelay: '0.3s' },
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  gridRow: cardsize === 'large' ? 'span 2' : 'span 1',
  position: 'relative',
  '&:hover': {
    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
    transform: 'translateY(-8px)',
  },
}));

const services: Service[] = [
  {
    id: 'family',
    title: 'Relocating for Family Reunification',
    description:
      "Under Directive 2004/38/EC and Swedish national laws, EU citizens and their family members have the right to reunite and reside together in Sweden. We provide guidance throughout the reunification process to ensure compliance and a smooth relocation.",
    icon: '',
    image: '/image1.png',
    coverImage: '/fr.png',
    cardSize: 'large',
  },
  {
    id: 'business',
    title: 'Relocate for Business',
    description:
      "We help you establish a business or franchise in Sweden with full support, including residence permit guidance. To qualify, you'll need a solid business plan, investment capital, and sufficient funds for two years.",
    icon: '',
    image: '/image2.png',
    cardSize: 'small',
  },
  {
    id: 'work',
    title: 'Relocating with a Work Permit',
    description:
      "We assist you in securing a work permit in Sweden, guiding both employers and employees through every step of the process. To qualify, you'll need a valid job offer, employment contract, and compliance with salary and insurance requirements.",
    icon: '',
    image: '/image3.png',
    hasBackground: false,
    cardSize: 'small',
  },
  {
    id: 'parents',
    title: 'Dependent Parents Relocation',
    description:
      "We know the importance of having your parents close. Through family reunification, we help bring dependent parents to Sweden or other Nordic countries, ensuring they receive the care and support they need.",
    icon: '',
    image: '/image4.png',
    coverImage: '/pr.png',
    cardSize: 'large',
  },
  {
    id: 'study',
    title: 'Relocating for Study in Sweden',
    description:
      "We support you in applying for a residence permit to pursue studies in Sweden. To qualify, you'll need admission to a recognized program, proof of financial means, and valid health insurance.",
    icon: '',
    image: '/image5.png',
    cardSize: 'small',
  },
  {
    id: 'ltr',
    title: 'Relocating with LTR Permits',
    description:
      "If you hold a long-term residence permit in another EU country, you may have the right to move to Sweden with your family. Family reunification rules allow eligible relatives to join you.",
    icon: '',
    image: '/image6.png',
    cardSize: 'small',
  },
];

export default function Services() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, sm: 10, lg: 12, xl: 14 },
        background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)',
      }}
    >
      <Box
        sx={{
          maxWidth: { lg: '1280px', xl: '1400px', '2xl': '1600px' },
          mx: 'auto',
          px: { xs: 3, sm: 4, lg: 6, xl: 8 },
          width: '100%',
        }}
      >
        {/* Header */}
        <Box sx={{ mb: { xs: 8, sm: 10, lg: 12 }, textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: { xs: '0.813rem', sm: '0.875rem', lg: '0.938rem' },
              color: '#3b82f6',
              fontWeight: 700,
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'inline-block',
              px: 3,
              py: 1,
              backgroundColor: 'rgba(59, 130, 246, 0.08)',
              borderRadius: '50px',
            }}
          >
            Empowering Your Relocation Journey
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', lg: '3rem', xl: '3.5rem' },
              fontWeight: 800,
              mb: 2,
              color: '#0f172a',
              textAlign: 'center',
              lineHeight: 1.15,
              background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Reliable Legal Solutions
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.5rem' },
              fontWeight: 600,
              color: '#64748b',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Expert guidance for your relocation to & from{' '}
            <Box component="span" sx={{ color: '#3b82f6', fontWeight: 700 }}>
              Sweden
            </Box>
          </Typography>
        </Box>

        {/* Services Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
            gridAutoRows: { xs: 'auto', lg: '340px' },
            gap: { xs: 3, sm: 4, lg: 5 },
          }}
        >
          {services.map((service) => (
            <AnimatedCard
              key={service.id}
              cardsize={service.cardSize}
              sx={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                '&:hover': {
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                },
                '&:hover::before': {
                  opacity: 1,
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 3, sm: 3.5, lg: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  position: 'relative',
                }}
              >
                {/* Cover Image for Large Cards */}
                {service.coverImage && service.cardSize === 'large' && (
                  <Box
                    sx={{
                      position: 'absolute',
                      right: { xs: -10, lg: -20 },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: { xs: '200px', sm: '240px', lg: '280px' },
                      height: { xs: '200px', sm: '240px', lg: '280px' },
                      zIndex: 1,
                      animation: `${floatAnimation} 4s ease-in-out infinite`,
                      opacity: 0.9,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        animation: `${scaleAnimation} 2s ease-in-out infinite`,
                        opacity: 1,
                      },
                    }}
                  >
                    <img
                      src={service.coverImage}
                      alt={`${service.title} illustration`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 20px rgba(59, 130, 246, 0.15))',
                      }}
                    />
                  </Box>
                )}

                {/* Icon + Title */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5,
                    mb: 2.5,
                    zIndex: 2,
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '56px', lg: '64px' },
                      height: { xs: '56px', lg: '64px' },
                      borderRadius: '16px',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      flexShrink: 0,
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(59, 130, 246, 0.12)',
                        transform: 'scale(1.08) rotate(-5deg)',
                        boxShadow: '0 8px 20px rgba(59, 130, 246, 0.2)',
                      },
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: '70%',
                        height: '70%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.375rem' },
                      fontWeight: 700,
                      color: '#0f172a',
                      lineHeight: 1.3,
                      letterSpacing: '-0.02em',
                      maxWidth: service.coverImage ? { xs: '100%', lg: '50%' } : '100%',
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.938rem', sm: '1rem', lg: '1.063rem' },
                    color: '#475569',
                    lineHeight: 1.7,
                    mb: service.coverImage ? 2.5 : 3,
                    fontWeight: 400,
                    zIndex: 2,
                    position: 'relative',
                    maxWidth: service.coverImage ? { xs: '100%', lg: '52%' } : '100%',
                  }}
                >
                  {service.description}
                </Typography>

                {/* View Details Button */}
                <Button
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: { xs: '0.938rem', sm: '1rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: '#ffffff',
                    borderRadius: '12px',
                    alignSelf: 'flex-start',
                    border: 'none',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.25)',
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 2,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(59, 130, 246, 0.35)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                    '& .MuiButton-label': {
                      position: 'relative',
                      zIndex: 1,
                    },
                  }}
                >
                  <Box component="span" sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    View Details
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-block',
                        transition: 'transform 0.3s ease',
                        '.MuiButton-root:hover &': {
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      →
                    </Box>
                  </Box>
                </Button>
              </CardContent>
            </AnimatedCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
}