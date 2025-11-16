'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useTranslation } from 'react-i18next';

export function GlobalVisaPlatform() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const texts = {
    subtitle: isSv
      ? 'Du kan ansöka var du än befinner dig i världen'
      : 'You can apply from anywhere in the world',
    mainTitle: isSv ? 'Allt-i-ett global visumplattform' : 'All-in-One Global Visa Platform',
    subheading: isSv ? 'En enda ansökan för alla visum du behöver' : 'One unified application for all visas you need',
    button: isSv ? 'Skicka via DHL' : 'Send Via DHL',
  };

  return (
    <Box
      sx={{
        py: { xs: '5rem', sm: '6rem', lg: '7rem', xl: '8rem', '3xl': '9rem', '4k': '10rem' },
        backgroundColor: '#ffffff',
      }}
    >
      {/* EXACT same container as Hero/Services (Tailwind classes) */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Header - Centered Title Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: '1.5rem', sm: '2rem', lg: '2.5rem' },
          }}
        >
          {/* Blue subtitle */}
          <Typography
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem', '4k': '1.25rem' },
              color: '#3b82f6',
              fontWeight: 600,
              mb: '0.5rem',
            }}
          >
            {texts.subtitle}
          </Typography>

          {/* Main title */}
          <Typography
            sx={{
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3rem', lg: '3.5rem', '4k': '5rem' },
              fontWeight: 800,
              color: '#3b82f6',
              mb: '0.5rem',
              lineHeight: 1.2,
            }}
          >
            {texts.mainTitle}
          </Typography>

          {/* Subheading */}
          <Typography
            sx={{
              fontSize: { xs: '1.125rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' },
              fontWeight: 700,
              color: '#1e293b',
              lineHeight: 1.3,
            }}
          >
            {texts.subheading}
          </Typography>
        </Box>

        {/* Main Content Grid - Using EXACT Hero classes */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
            gap: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem', '2xl': '5rem', '3xl': '6rem', '4k': '8rem' },
            alignItems: 'center',
          }}
        >
          {/* Left - Content Card */}
          <Box
            sx={{
              // This aligns with the logo on large screens
              maxWidth: { xs: '100%', '3xl': '48rem', '4k': '80rem' },
              mx: { xs: 'auto', lg: 0 },
            }}
          >
            <Card
              sx={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                p: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' },
                backgroundColor: '#ffffff',
              }}
            >
              {/* Card Content */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {/* Title in Card */}
                <Typography
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '3rem' },
                    fontWeight: 700,
                    color: '#1e293b',
                    lineHeight: 1.3,
                  }}
                >
                  {texts.mainTitle}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '1.0625rem', xl: '1.125rem', '3xl': '1.25rem', '4k': '2rem' },
                    color: '#64748b',
                    lineHeight: 1.7,
                  }}
                >
                  {isSv
                    ? 'Du kan befinna dig var som helst i världen – om du är här kan du registrera dig i vår portal eller app och ansöka om visum globalt. Med vårt universella visumformulär fyller du i uppgifterna en gång, de lagras säkert och kan återanvändas för flera destinationer som Schengen, Storbritannien, USA, Kanada, Australien, Nya Zeeland, Japan och fler.'
                    : "You could be anywhere in the world, if you're here and reading this, you can sign up on our portal or app and apply for visas globally. With our Universal Visa Application Form, you apply once, your details are securely stored, and you can reuse them for multiple destinations including Schengen, the UK, US, Canada, Australia, New Zealand, Japan, and more."}
                </Typography>

                {/* Description 2 */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '1.0625rem', xl: '1.125rem', '3xl': '1.25rem', '4k': '2rem' },
                    color: '#64748b',
                    lineHeight: 1.7,
                  }}
                >
                  {isSv
                    ? 'Vi hanterar varje steg åt dig: ansökningsförberedelser, expertkonsultation, tidsbokning, hotellbokningar, sjukförsäkring och resebokningar – så sparar du tid, minskar kostnaderna och håller allt samlat på en säker plattform. Inför ambassébesök kan du enkelt ladda ner hela din ansökningsfil från portalen eller få den säkert levererad med DHL.'
                    : 'We manage every step for you: application preparation, expert consultation, appointment scheduling, hotel bookings, health insurance, and travel reservations, so you save time, reduce costs, and keep everything organized in one secure platform. For embassy submissions, you can simply download your complete file from the portal or have it securely delivered by DHL.'}
                </Typography>

                {/* Button */}
                <Box sx={{ pt: '0.5rem' }}>
                  <Button
                    variant="contained"
                    sx={{
                      py: { xs: '0.75rem', sm: '0.875rem', md: '1rem', '3xl': '1.5rem', '4k': '2.25rem' },
                      px: { xs: '1.75rem', sm: '2rem', md: '2.25rem', '3xl': '3.5rem', '4k': '5.5rem' },
                      fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', '3xl': '1.125rem', '4k': '1.875rem' },
                      fontWeight: 600,
                      textTransform: 'none',
                      backgroundColor: '#1e293b',
                      color: 'white',
                      borderRadius: '0.5rem',
                      width: 'fit-content',
                      '&:hover': {
                        backgroundColor: '#0f172a',
                      },
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    {texts.button}
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>

          {/* Right - Image with EXACT Hero alignment */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: '100%', '3xl': '48rem', '4k': '96rem' },
              mx: { xs: 'auto', lg: 0 },
              ml: { lg: 'auto' }, // This aligns with the right buttons
            }}
          >
            <Box
              component="img"
              src="/c1.svg"
              alt="Global Visa Platform Illustration"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </div>
    </Box>
  );
}
