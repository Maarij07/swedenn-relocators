'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Offer {
  id: string;
  title: string;
  description: string;
  price: string;
  days: string;
  image: string;
  count: number;
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

const AnimatedCard = styled(Card)({
  animation: `${slideUpAnimation} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
  opacity: 0,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    boxShadow: '0 16px 32px rgba(59, 130, 246, 0.15)',
    transform: 'translateY(-6px)',
  },
});

export default function Offers() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const texts = {
    eyebrow: isSv
      ? 'Från det att du anländer tills du reser hem'
      : 'From the moment you arrive until the time you leave',
    heading: isSv ? 'Viktiga tjänster för alla' : 'Essential Services for Everyone',
    subheading: isSv ? 'För privatpersoner och företag' : 'For Individuals & Companies',
    handlingFee: isSv ? '/ serviceavgift' : '/ handling fee',
    sendRequest: isSv ? 'Skicka förfrågan' : 'Send Request',
  };

  const offers: Offer[] = isSv
    ? [
        {
          id: 'au-pair',
          title: 'Au pair-tjänster',
          description: 'Hitta rätt au pair utifrån din familjs behov',
          price: '€49',
          days: '1–14 dagar',
          image: '/s1.svg',
          count: 17,
        },
        {
          id: 'departure',
          title: 'Avresetjänster',
          description: 'Fullständig hjälp på flygplatsen vid avresa',
          price: '€49',
          days: '1–14 dagar',
          image: '/s2.svg',
          count: 15,
        },
        {
          id: 'entrepreneur',
          title: 'Resurser för entreprenörer',
          description:
            'Stöd för företagsstart och entreprenörskapstjänster anpassade för Sverige',
          price: '€49',
          days: '1–14 dagar',
          image: '/s3.svg',
          count: 18,
        },
        {
          id: 'health-insurance',
          title: 'Sjukförsäkringstjänster',
          description:
            'Kompletta sjukförsäkringslösningar och medicinskt skydd för din flytt till Sverige',
          price: '€49',
          days: '1–14 dagar',
          image: '/s4.svg',
          count: 13,
        },
        {
          id: 'host-family',
          title: 'Värdfamiljstjänster',
          description:
            'Vi matchar dig med verifierade värdfamiljer för ett tryggt och bekvämt boende i Sverige',
          price: '€49',
          days: '1–14 dagar',
          image: '/s5.svg',
          count: 19,
        },
        {
          id: 'pet-relocation',
          title: 'Hjälp med husdjursflytt',
          description:
            'Personligt anpassat stöd för att flytta dina husdjur på ett tryggt sätt',
          price: '€49',
          days: '1–14 dagar',
          image: '/s6.svg',
          count: 27,
        },
        {
          id: 'financial',
          title: 'Ekonomihantering vid relocation',
          description:
            'Fullständig ekonomihantering för hela din flyttresa till Sverige',
          price: '€49',
          days: '1–14 dagar',
          image: '/s7.svg',
          count: 24,
        },
        {
          id: 'arrival',
          title: 'Ankomsttjänster',
          description: 'Fullständig hjälp på flygplatsen vid ankomst',
          price: '€49',
          days: '1–14 dagar',
          image: '/s8.svg',
          count: 13,
        },
        {
          id: 'tax-services',
          title: 'Investeringstjänster',
          description:
            'Rådgivning kring investeringar och finansiell planering för boende i Sverige',
          price: '€49',
          days: '1–14 dagar',
          image: '/s9.svg',
          count: 22,
        },
        {
          id: 'legal-support',
          title: 'Juristkontakt',
          description:
            'Tillgång till kvalificerade svenska jurister för juridisk rådgivning och dokumentation',
          price: '€49',
          days: '1–14 dagar',
          image: '/s10.svg',
          count: 16,
        },
        {
          id: 'integration',
          title: 'Logistiklösning',
          description:
            'Helhetslösningar för logistik och transporter kopplade till din flytt',
          price: '€49',
          days: '1–14 dagar',
          image: '/s11.svg',
          count: 21,
        },
      ]
    : [
        {
          id: 'au-pair',
          title: 'Au Pair Services',
          description: "Find the right au pair for your family's needs",
          price: '€49',
          days: '1-14 days',
          image: '/s1.svg',
          count: 17,
        },
        {
          id: 'departure',
          title: 'Departure Services',
          description: 'Comprehensive airport assistance upon departure',
          price: '€49',
          days: '1-14 days',
          image: '/s2.svg',
          count: 15,
        },
        {
          id: 'entrepreneur',
          title: 'Entrepreneur Resources',
          description:
            'Comprehensive business setup and entrepreneurial support services for Sweden',
          price: '€49',
          days: '1-14 days',
          image: '/s3.svg',
          count: 18,
        },
        {
          id: 'health-insurance',
          title: 'Health Insurance Services',
          description:
            'Complete health insurance solutions and medical coverage for your Sweden relocation',
          price: '€49',
          days: '1-14 days',
          image: '/s4.svg',
          count: 13,
        },
        {
          id: 'host-family',
          title: 'Host Family Services',
          description:
            'Connecting you with verified host families for comfortable accommodation in Sweden',
          price: '€49',
          days: '1-14 days',
          image: '/s5.svg',
          count: 19,
        },
        {
          id: 'pet-relocation',
          title: 'Pet Relocation Support',
          description:
            "Personalized pet relocation support services tailored to your furry friends needs",
          price: '€49',
          days: '1-14 days',
          image: '/s6.svg',
          count: 27,
        },
        {
          id: 'financial',
          title: 'Relocation Financial Management',
          description:
            'Complete financial management services for your Sweden relocation journey',
          price: '€49',
          days: '1-14 days',
          image: '/s7.svg',
          count: 24,
        },
        {
          id: 'arrival',
          title: 'Arrival Services',
          description: 'Comprehensive airport assistance upon arrival',
          price: '€49',
          days: '1-14 days',
          image: '/s8.svg',
          count: 13,
        },
        {
          id: 'tax-services',
          title: 'Investment Services',
          description:
            'Expert investment guidance and financial planning services for Sweden residents',
          price: '€49',
          days: '1-14 days',
          image: '/s9.svg',
          count: 22,
        },
        {
          id: 'legal-support',
          title: 'Lawyer Connect',
          description:
            'Access to qualified Swedish lawyers for legal advice and documentation support',
          price: '€49',
          days: '1-14 days',
          image: '/s10.svg',
          count: 16,
        },
        {
          id: 'integration',
          title: 'Logistics Solution',
          description:
            'Comprehensive logistics and transportation services for your relocation needs',
          price: '€49',
          days: '1-14 days',
          image: '/s11.svg',
          count: 21,
        },
      ];

  const [scrollPos, setScrollPos] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  React.useEffect(() => {
    if (!isAutoScroll) return;

    const interval = setInterval(() => {
      const container = document.getElementById('offers-scroll');
      if (container) {
        const scrollAmount = 400;
        const newPos = scrollPos + scrollAmount;
        
        if (newPos > container.scrollWidth - container.clientWidth - 50) {
          container.scrollLeft = 0;
          setScrollPos(0);
        } else {
          container.scrollLeft = newPos;
          setScrollPos(newPos);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [scrollPos, isAutoScroll]);

  const scroll = (direction: 'left' | 'right') => {
    setIsAutoScroll(false);
    const container = document.getElementById('offers-scroll');
    if (container) {
      const scrollAmount = 400;
      const newPos = direction === 'left' ? scrollPos - scrollAmount : scrollPos + scrollAmount;
      container.scrollLeft = newPos;
      setScrollPos(newPos);
    }
    setTimeout(() => setIsAutoScroll(true), 10000);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, lg: 10, xl: 12 },
        backgroundColor: '#ffffff',
      }}
    >
      {/* EXACT HERO SECTION CONTAINER */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        
        {/* Header */}
        <Box sx={{ mb: { xs: 6, sm: 8, lg: 10 }, position: 'relative' }}>
          <Typography
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem', lg: '1rem', '4k': '1.25rem' },
              color: '#3b82f6',
              fontWeight: 600,
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textAlign: 'center',
            }}
          >
            {texts.eyebrow}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', lg: '2.25rem', '4k': '3.5rem' },
              fontWeight: 800,
              mb: 1,
              color: '#000000',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            {texts.heading}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.75rem', lg: '2rem', '4k': '3rem' },
              fontWeight: 700,
              color: '#3b82f6',
              textAlign: 'center',
            }}
          >
            {texts.subheading}
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ position: 'relative' }}>
          {/* Corner Buttons */}
          <IconButton
            onClick={() => scroll('left')}
            sx={{
              position: 'absolute',
              top: { xs: '45%', sm: '50%' },
              left: -10,
              zIndex: 10,
              bgcolor: '#1e293b',
              color: 'white',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              '&:hover': { bgcolor: '#0f172a' },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            onClick={() => scroll('right')}
            sx={{
              position: 'absolute',
              top: { xs: '45%', sm: '50%' },
              right: -10,
              zIndex: 10,
              bgcolor: '#1e293b',
              color: 'white',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              '&:hover': { bgcolor: '#0f172a' },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>

          {/* Carousel */}
          <Box
            id="offers-scroll"
            sx={{
              display: 'flex',
              gap: { xs: 2, sm: 3, md: 4 },
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              pb: { xs: 2, md: 3 },
              px: 0,
              justifyContent: { lg: 'center' },
              '&::-webkit-scrollbar': {
                height: 0,
              },
            }}
          >
          {offers.map((offer, idx) => (
            <AnimatedCard
              key={offer.id}
              sx={{
                minWidth: {
                  xs: '260px',
                  sm: '280px',
                  md: '320px',
                  lg: 'calc((100% - 64px) / 3)',
                },
                maxWidth: {
                  xs: '260px',
                  sm: '280px',
                  md: '320px',
                  lg: 'calc((100% - 64px) / 3)',
                },
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                animationDelay: `${idx * 0.06}s`,
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              {/* Image Container */}
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '160px', sm: '180px', md: '200px', lg: '220px' },
                  backgroundColor: '#f0f2f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>

              <CardContent
                sx={{
                  p: { xs: '20px', sm: '24px' },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  height: '100%',
                  flex: 1,
                }}
              >
                {/* Meta Info with Icons */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    fontSize: '0.875rem',
                    color: '#64748b',
                    fontWeight: 500,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <img src="/watch.svg" alt="Duration" style={{ width: '16px', height: '16px', opacity: 0.7 }} />
                    <span>{offer.days}</span>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <img src="/people.svg" alt="People" style={{ width: '16px', height: '16px', opacity: 0.7 }} />
                    <span>{offer.count}</span>
                  </Box>
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: { xs: '1.125rem', sm: '1.2rem' },
                    fontWeight: 700,
                    color: '#1e293b',
                    lineHeight: 1.3,
                  }}
                >
                  {offer.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: 1.6,
                    flex: 1,
                    fontWeight: 500,
                  }}
                >
                  {offer.description}
                </Typography>

                {/* Footer */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    pt: 2,
                    mt: 'auto',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#1e293b',
                    }}
                  >
                    {offer.price}
                      <Typography
                        component="span"
                        sx={{
                          fontSize: '0.8rem',
                          color: '#64748b',
                          fontWeight: 500,
                          ml: 0.5,
                        }}
                      >
                        {texts.handlingFee}
                      </Typography>
                  </Typography>
                  <Button
                    sx={{
                      px: 2.5,
                      py: 1.25,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      backgroundColor: '#1e293b',
                      color: '#ffffff',
                      borderRadius: '10px',
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        backgroundColor: '#0f172a',
                      },
                    }}
                  >
                    {texts.sendRequest}
                  </Button>
                </Box>
              </CardContent>
            </AnimatedCard>
          ))}
          </Box>
        </Box>
      </div>
    </Box>
  );
}