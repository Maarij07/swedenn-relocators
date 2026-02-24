'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const citizenshipFlags = ['ag', 'dm', 'gd', 'kn', 'lc', 'vc', 'mt', 'cy'];
const residencyFlags = ['pt', 'gr', 'es', 'it', 'ie', 'ca', 'au', 'ae'];

// Country names mapping
const countryNames: Record<string, string> = {
  'ag': 'Antigua and Barbuda',
  'dm': 'Dominica',
  'gd': 'Grenada',
  'kn': 'Saint Kitts and Nevis',
  'lc': 'Saint Lucia',
  'vc': 'Saint Vincent and the Grenadines',
  'mt': 'Malta',
  'cy': 'Cyprus',
  'pt': 'Portugal',
  'gr': 'Greece',
  'es': 'Spain',
  'it': 'Italy',
  'ie': 'Ireland',
  'ca': 'Canada',
  'au': 'Australia',
  'ae': 'United Arab Emirates'
};

export default function CitizenshipResidencySection() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const texts = {
    heading: isSv ? 'Medborgarskap & uppehållstillstånd genom investering' : 'Citizenship & Residency by Investment',
    intro: isSv
      ? 'CBI- och RBI-program för globala yrkespersoner och familjer.'
      : 'CBI and RBI programs for global professionals and families.',
    cbiButton: isSv ? 'Läs mer' : 'Read More',
    rbiButton: isSv ? 'Läs mer' : 'Read More',
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-14 lg:py-16 4k:py-20">
        <Box sx={{ mb: { xs: 5, sm: 6, lg: 8 }, textAlign: 'center' }}>
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
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {texts.heading}
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
              {texts.intro}
            </Typography>
          </Box>
        </Box>

        {/* Centered passport image above the cards */}
        <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
          <Box
            sx={{
              position: 'relative',
              width: { xs: '90%', sm: '70%', lg: '45%', '4k': '35%' },
              maxWidth: { xs: 320, sm: 380, lg: 520, '4k': 640 },
              perspective: '1400px',
            }}
          >
            <Box
              sx={{
                width: '100%',
                position: 'relative',
                height: { xs: 120, sm: 140, lg: 160, '4k': 200 },
                transformStyle: 'preserve-3d',
                animation: 'flipPassport 6s ease-in-out infinite',
                '@keyframes flipPassport': {
                  '0%': { transform: 'rotateY(0deg)' },
                  '20%': { transform: 'rotateY(0deg)' },
                  '40%': { transform: 'rotateY(180deg)' },
                  '60%': { transform: 'rotateY(180deg)' },
                  '80%': { transform: 'rotateY(360deg)' },
                  '100%': { transform: 'rotateY(360deg)' },
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/passport 1.svg"
                  alt="Passport illustration"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/passport 1.svg"
                  alt="Passport illustration back"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Box>
          </Box>
        </div>

        {/* Layout: two cards side by side under image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 4k:gap-14 items-stretch">
          {/* Left Card - CBI */}
          <Card
            elevation={0}
            className="flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden group/card"
            sx={{ 
              backgroundColor: '#ffffff',
              position: 'relative',
              borderRadius: '24px',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderBottom: '4px solid #3b82f6',
              boxShadow: '0 10px 40px -10px rgba(15, 23, 42, 0.15), 0 4px 25px -5px rgba(59, 130, 246, 0.1)',
              '&:hover': {
                boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25), 0 10px 40px -10px rgba(59, 130, 246, 0.2)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                borderBottomColor: '#3b82f6',
                borderBottomWidth: '4px',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0) 0%, rgba(147, 51, 234, 0) 100%)',
                transition: 'all 0.5s ease',
                pointerEvents: 'none',
              },
              '&:hover::before': {
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)',
              }
            }}
          >
            <CardContent className="p-6 sm:p-7 lg:p-8 flex flex-col h-full relative z-10">
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: '1.3rem', sm: '1.4rem', lg: '1.5rem', '4k': '1.9rem' },
                  fontWeight: 800,
                  color: '#0f172a',
                  mb: 1.5,
                  transition: 'color 0.3s ease',
                }}
              >
                {isSv ? 'Medborgarskap genom investering (CBI)' : 'Citizenship by Investment (CBI)'}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.05rem', '4k': '1.25rem' },
                  color: '#475569',
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                {isSv
                  ? 'Dessa program erbjuder en direkt väg till medborgarskap i utbyte mot en kvalificerad investering i landet.'
                  : 'These programs offer a direct path to citizenship in exchange for a qualifying investment in the host country.'}
              </Typography>

              <ul className="space-y-1.5 text-[0.9rem] sm:text-[0.95rem] lg:text-[1rem] text-gray-700 mb-4">
                {isSv ? (
                  <>
                    <li>• Karibiska länder: Antigua och Barbuda, Dominica, Grenada, Saint Kitts &amp; Nevis, Saint Lucia.</li>
                    <li>• Europeiska alternativ: Malta (via uppehåll som leder till medborgarskap) och Cypern (äldre program).</li>
                    <li>• Ger möjlighet till visumfritt resande till 140+ länder beroende på valt pass.</li>
                  </>
                ) : (
                  <>
                    <li>• Caribbean Nations: Antigua and Barbuda, Dominica, Grenada, Saint Kitts &amp; Nevis, Saint Lucia.</li>
                    <li>• European Options: Malta (through residency leading to citizenship) &amp; Cyprus (legacy programs).</li>
                    <li>• Unlock visa-free travel to 140+ countries depending on your chosen passport.</li>
                  </>
                )}
              </ul>

              {/* Flags row */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 'auto' }}>
                {citizenshipFlags.map((code) => (
                  <Box
                    key={code}
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 8px rgba(15,23,42,0.08)',
                      border: '2px solid #f8fafc',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.15) translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(15,23,42,0.15)',
                        borderColor: '#e0f2fe',
                        zIndex: 10,
                      },
                    }}
                    title={countryNames[code] || code.toUpperCase()}
                  >
                    <Box
                      component="img"
                      src={`https://flagcdn.com/w160/${code}.png`}
                      alt={`${countryNames[code] || code.toUpperCase()} flag`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                ))}
              </Box>

              <Button
                sx={{
                  mt: 3,
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: '0.9rem', sm: '0.95rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  background: 'linear-gradient(to right, #0f172a, #1e293b)',
                  color: '#ffffff',
                  borderRadius: '12px',
                  alignSelf: 'flex-end',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {texts.cbiButton}
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
          </Card>

          {/* Right Card - RBI */}
          <Card
            elevation={0}
            className="flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden group/card"
            sx={{ 
              backgroundColor: '#ffffff',
              position: 'relative',
              borderRadius: '24px',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderBottom: '4px solid #3b82f6',
              boxShadow: '0 10px 40px -10px rgba(15, 23, 42, 0.15), 0 4px 25px -5px rgba(59, 130, 246, 0.1)',
              '&:hover': {
                boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25), 0 10px 40px -10px rgba(59, 130, 246, 0.2)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                borderBottomColor: '#3b82f6',
                borderBottomWidth: '4px',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0) 0%, rgba(147, 51, 234, 0) 100%)',
                transition: 'all 0.5s ease',
                pointerEvents: 'none',
              },
              '&:hover::before': {
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)',
              }
            }}
          >
            <CardContent className="p-6 sm:p-7 lg:p-8 flex flex-col h-full relative z-10">
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: '1.3rem', sm: '1.4rem', lg: '1.5rem', '4k': '1.9rem' },
                  fontWeight: 800,
                  color: '#0f172a',
                  mb: 1.5,
                  transition: 'color 0.3s ease',
                }}
              >
                {isSv ? 'Uppehållstillstånd genom investering (RBI)' : 'Residency by Investment (RBI)'}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.05rem', '4k': '1.25rem' },
                  color: '#475569',
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                {isSv
                  ? 'RBI-program ger tillfälligt eller permanent uppehållstillstånd som i många fall kan leda till medborgarskap efter en viss tid.'
                  : 'RBI programs grant temporary or permanent residency, which may lead to citizenship after a defined period.'}
              </Typography>

              <ul className="space-y-1.5 text-[0.9rem] sm:text-[0.95rem] lg:text-[1rem] text-gray-700 mb-4">
                {isSv ? (
                  <>
                    <li>• EU:s gyllene visum: Portugal, Spanien, Grekland, Italien och andra godkända program.</li>
                    <li>• Tillgångsbaserade alternativ: fastigheter, statsobligationer eller strategiska fonder.</li>
                    <li>• Vägar till långvarigt uppehåll, permanent uppehållstillstånd och i förlängningen medborgarskap.</li>
                  </>
                ) : (
                  <>
                    <li>• EU Golden Visas: Portugal, Spain, Greece, Italy &amp; other approved programs.</li>
                    <li>• Asset-backed options: real estate, government bonds, or strategic funds.</li>
                    <li>• Pathways to long-term residence, permanent residency, and eventual citizenship.</li>
                  </>
                )}
              </ul>

              {/* Flags row */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 'auto' }}>
                {residencyFlags.map((code) => (
                  <Box
                    key={code}
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 8px rgba(15,23,42,0.08)',
                      border: '2px solid #f8fafc',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.15) translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(15,23,42,0.15)',
                        borderColor: '#e0f2fe',
                        zIndex: 10,
                      },
                    }}
                    title={countryNames[code] || code.toUpperCase()}
                  >
                    <Box
                      component="img"
                      src={`https://flagcdn.com/w160/${code}.png`}
                      alt={`${countryNames[code] || code.toUpperCase()} flag`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                ))}
              </Box>

              <Button
                sx={{
                  mt: 3,
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: '0.9rem', sm: '0.95rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  background: 'linear-gradient(to right, #0f172a, #1e293b)',
                  color: '#ffffff',
                  borderRadius: '12px',
                  alignSelf: 'flex-end',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {texts.rbiButton}
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
          </Card>
        </div>
      </div>
    </section>
  );
}