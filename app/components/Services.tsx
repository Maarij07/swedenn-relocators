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
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
    transform: 'translateY(-4px)',
  },
}));

const services: Service[] = [
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
    id: 'family',
    title: 'Relocating for Family Reunification',
    description:
      "Under Directive 2004/38/EC and Swedish national laws, EU citizens and their family members have the right to reunite and reside together in Sweden. We provide guidance throughout the reunification process to ensure compliance and a smooth relocation.",
    icon: '',
    image: '/image1.png',
    coverImage: '/fr.svg',
    cardSize: 'large',
  },
  {
    id: 'work',
    title: 'Relocating with a Work Permit',
    description:
      "We assist you in securing a work permit in Sweden, guiding both employers and employees through every step of the process. To qualify, you'll need a valid job offer, employment contract, and compliance with salary and insurance requirements.",
    icon: '',
    image: '/image3.png',
    cardSize: 'small',
  },
  {
    id: 'parents',
    title: 'Dependent Parents Relocation',
    description:
      "We know the importance of having your parents close. Through family reunification, we help bring dependent parents to Sweden or other Nordic countries, ensuring they receive the care and support they need.",
    icon: '',
    image: '/image4.png',
    coverImage: '/pr.svg',
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
            Empowering your skills to relocate and succeed in the Nordics
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
            Trusted Legal Relocation Solutions For Individuals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', xl: '2rem' },
              fontWeight: 700,
              color: '#60a5fa',
              textAlign: 'center',
            }}
          >
            Move To and From Sweden
          </Typography>
        </Box>

        {/* Services Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
            gap: { xs: 2, sm: 2.5, lg: 3 },
            gridAutoRows: 'minmax(200px, auto)',
            alignItems: 'stretch',
          }}
        >
          {services.map((service) => (
            <AnimatedCard
              key={service.id}
              cardsize={service.cardSize}
              sx={{
                boxShadow: 'none',
                border: 'none',
                borderRadius: '16px',
                backgroundColor: '#dbeafe',
                overflow: 'hidden',
                margin: 0,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 20px rgba(59, 130, 246, 0.15)',
                  zIndex: 1,
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
                {/* LAYOUT FOR LARGE CARDS: Image first, then Icon+Title */}
                {service.cardSize === 'large' ? (
                  <>
                    {/* BIG IMAGE FIRST */}
                    {service.coverImage && (
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
                            alt={`${service.title} illustration`}
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
                    )}

                    {/* ICON + TITLE BELOW IMAGE */}
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
                          src={service.image}
                          alt={service.title}
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
                        {service.title}
                      </Typography>
                    </Box>
                  </>
                ) : (
                  /* LAYOUT FOR SMALL CARDS: Icon+Title at top */
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      gap: 1.5,
                      mb: 2,
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
                        src={service.image}
                        alt={service.title}
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
                      {service.title}
                    </Typography>
                  </Box>
                )}

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.85rem', sm: '0.875rem', lg: '0.9rem' },
                    color: '#64748b',
                    lineHeight: 1.6,
                    mb: 1.5,
                    fontWeight: 400,
                    flex: 1,
                  }}
                >
                  {service.description}
                </Typography>

                {/* Button */}
                <Button
                  sx={{
                    px: 3.5,
                    py: 1.25,
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: '#ffffff',
                    borderRadius: '8px',
                    alignSelf: 'flex-start',
                    border: 'none',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 3px 10px rgba(59, 130, 246, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
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
                      boxShadow: '0 5px 16px rgba(59, 130, 246, 0.28)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box component="span" sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    View Details
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
              </CardContent>
            </AnimatedCard>
          ))}
        </Box>
      </div>
    </Box>
  );
}