'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useTranslation } from 'react-i18next';
import { MovingFlagsCarousel } from './MovingFlagsCarousel';

export function GlobalVisaPlatform() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const texts = {
    mainTitle: isSv ? 'Allt-i-ett global visumplattform' : 'All-in-One Global Visa Platform',
    subheading: isSv ? 'En enda ansökan för alla visum du behöver' : 'One unified application for all visas you need',
    button: isSv ? 'Ansök nu' : 'Apply Now',
  };

  return (
    <Box
      sx={{
        pt: { xs: '4rem', sm: '5rem', lg: '6rem', xl: '7rem' },
        pb: { xs: '2rem', sm: '2.5rem', lg: '3rem', xl: '3.5rem' },
        backgroundColor: '#ffffff',
      }}
    >
      {/* Container */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        <Box sx={{ textAlign: 'center', mb: { xs: '2rem', sm: '2.5rem', lg: '3rem' } }}>
          <Typography
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.5rem', xl: '2.75rem' },
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.2,
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            {texts.mainTitle}
          </Typography>
          <Typography
            sx={{
              mt: 0.75,
              fontSize: { xs: '1.1rem', sm: '1.25rem', lg: '1.5rem', xl: '1.75rem' },
              fontWeight: 700,
              color: '#2563eb',
              lineHeight: 1.35,
              textTransform: 'none',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            {texts.subheading}
          </Typography>
        </Box>

        {/* Flags Carousel - Clean horizontal bar */}
        <Box sx={{ mb: { xs: '3rem', sm: '3.5rem', lg: '4rem' } }}>
          <MovingFlagsCarousel />
        </Box>

        {/* Main Content Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: '3rem', sm: '3.5rem', md: '4rem', lg: '5rem', xl: '6rem' },
            alignItems: 'center',
            '@keyframes slideFadeLeft': {
              '0%': { opacity: 0, transform: 'translateX(-28px)' },
              '100%': { opacity: 1, transform: 'translateX(0)' },
            },
            '@keyframes slideFadeRight': {
              '0%': { opacity: 0, transform: 'translateX(28px)' },
              '100%': { opacity: 1, transform: 'translateX(0)' },
            },
            '@keyframes floatIllustration': {
              '0%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
              '100%': { transform: 'translateY(0px)' },
            },
            '@keyframes ctaBreath': {
              '0%': { boxShadow: '0 4px 12px rgba(15, 23, 42, 0.18)' },
              '50%': { boxShadow: '0 8px 20px rgba(30, 41, 59, 0.28)' },
              '100%': { boxShadow: '0 4px 12px rgba(15, 23, 42, 0.18)' },
            },
          }}
        >
          {/* Left - Content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '1.5rem', sm: '2rem' },
              order: { xs: 2, lg: 1 },
              animation: 'slideFadeLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {/* Text card with enhanced 3D shadow and depth */}
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: { xs: '18px', sm: '20px', md: '22px' },
                px: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                py: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
                boxShadow: '0 20px 50px rgba(15, 23, 42, 0.15), 0 8px 20px rgba(59, 130, 246, 0.08), 0 2px 8px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: { xs: '18px', sm: '20px', md: '22px' },
                  padding: '1px',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.05))',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                },
              }}
            >
              {/* Title */}
              <Typography
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.3,
                  mb: { xs: '0.75rem', sm: '1rem' },
                }}
              >
                {texts.mainTitle}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem' },
                  color: '#64748b',
                  lineHeight: 1.7,
                  mb: '0.75rem',
                }}
              >
                {isSv
                  ? 'Du kan befinna dig var som helst i världen. Om du är här och läser detta, kan du registrera dig på vår portal eller app och ansöka om visum globalt. Med vårt universella visumformulär behöver du bara ansöka en gång, dina uppgifter lagras säkert, och du kan återanvända dem för flera destinationer inklusive Schengen, Storbritannien, USA, Kanada, Australien, Nya Zeeland, Japan och mer.'
                  : "You could be anywhere in the world, if you're here and reading this, you can sign up on our portal or app and apply for visas globally. With our Universal Visa Application Form, you apply once, your details are securely stored, and you can reuse them for multiple destinations including Schengen, the UK, US, Canada, Australia, New Zealand, Japan, and more."}
              </Typography>

              {/* Second Description */}
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem' },
                  color: '#64748b',
                  lineHeight: 1.7,
                }}
              >
                {isSv
                  ? 'Vi hanterar varje steg åt dig: ansökningsförberedelse, expertkonsultation, tidsbokning, hotellbokningar, sjukförsäkring och resebokningar, så att du sparar tid, minskar kostnaderna och håller allt organiserat på en säker plattform. För ambassadinsändningar kan du enkelt ladda ner din kompletta fil från portalen eller få den säkert levererad av DHL.'
                  : 'We manage every step for you: application preparation, expert consultation, appointment scheduling, hotel bookings, health insurance, and travel reservations, so you save time, reduce costs, and keep everything organized in one secure platform. For embassy submissions, you can simply download your complete file from the portal or have it securely delivered by DHL.'}
              </Typography>

              {/* Button */}
              <Box sx={{ pt: '1.25rem' }}>
                <Button
                  variant="contained"
                  sx={{
                    py: { xs: '0.625rem', sm: '0.75rem', md: '0.875rem' },
                    px: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    backgroundColor: '#1e293b',
                    color: 'white',
                    borderRadius: '6px',
                    width: 'fit-content',
                    '&:hover': {
                      backgroundColor: '#0f172a',
                      transform: 'translateY(-1px)',
                    },
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.18)',
                    animation: 'ctaBreath 2.8s ease-in-out infinite',
                    transition: 'transform 0.25s ease, background-color 0.25s ease',
                  }}
                >
                  {texts.button}
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Right - Image */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              order: { xs: 1, lg: 2 },
              position: 'relative',
              animation: 'slideFadeRight 0.95s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <Box
              component="img"
              src="/c1.svg"
              alt="Global Visa Platform Illustration"
              sx={{
                width: '100%',
                maxWidth: { xs: '20rem', sm: '24rem', md: '28rem', lg: '32rem', xl: '36rem' },
                height: 'auto',
                objectFit: 'contain',
                animation: 'floatIllustration 4.2s ease-in-out infinite',
                filter: 'drop-shadow(0 18px 24px rgba(15, 23, 42, 0.12))',
              }}
            />
          </Box>
        </Box>
      </div>
    </Box>
  );
}
