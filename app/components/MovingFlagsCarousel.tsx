'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface CountryFlag {
  code: string;
  name: string;
}

const countries: CountryFlag[] = [
  { code: 'za', name: 'South Africa' },
  { code: 'sd', name: 'South Sudan' },
  { code: 'sd', name: 'Sudan' },
  { code: 'tz', name: 'Tanzania' },
  { code: 'tg', name: 'Togo' },
  { code: 'tn', name: 'Tunisia' },
  { code: 'ug', name: 'Uganda' },
  { code: 'zm', name: 'Zambia' },
  { code: 'zw', name: 'Zimbabwe' },
  { code: 'se', name: 'Sweden' },
  { code: 'dk', name: 'Denmark' },
  { code: 'no', name: 'Norway' },
  { code: 'fi', name: 'Finland' },
  { code: 'nl', name: 'Netherlands' },
  { code: 'de', name: 'Germany' },
  { code: 'fr', name: 'France' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'ch', name: 'Switzerland' },
  { code: 'at', name: 'Austria' },
  { code: 'be', name: 'Belgium' },
  { code: 'ca', name: 'Canada' },
  { code: 'us', name: 'United States' },
  { code: 'au', name: 'Australia' },
  { code: 'nz', name: 'New Zealand' },
  { code: 'jp', name: 'Japan' },
  { code: 'sg', name: 'Singapore' },
  { code: 'hk', name: 'Hong Kong' },
];

export function MovingFlagsCarousel() {
  return (
    <Box
      sx={{
        py: { xs: 2, sm: 3, lg: 4 },
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Flags Carousel Container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          maxWidth: { lg: '1400px', '2xl': '1600px', '4k': '2400px' },
          width: '100%',
          px: { xs: 2, sm: 3, lg: 4 },
          py: { xs: 1, sm: 1.25, lg: 1.5 },
          backgroundColor: '#f8fafc',
          borderRadius: '999px',
          boxShadow: 'inset 0 0 0 1px #e2e8f0',
          overflow: 'hidden',
          position: 'relative',
          
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: { xs: '28px', sm: '36px', lg: '44px' },
            background: 'linear-gradient(to right, #f8fafc 0%, transparent 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          },
          
          '&::after': {
            content: '""',
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: { xs: '28px', sm: '36px', lg: '44px' },
            background: 'linear-gradient(to left, #f8fafc 0%, transparent 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 3, sm: 4, lg: 6, '4k': 8 },
            animation: 'scroll 30s linear infinite',
            '@keyframes scroll': {
              '0%': {
                transform: 'translateX(0)',
              },
              '100%': {
                transform: 'translateX(calc(-100% - 12px))',
              },
            },
            willChange: 'transform',
          }}
        >
          {/* Original set */}
          {countries.map((country, idx) => (
            <Box
              key={`original-${idx}`}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1 },
                minWidth: 'max-content',
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={country.name}
                sx={{
                  width: { xs: 18, sm: 22, lg: 26, '4k': 32 },
                  height: { xs: 12, sm: 16, lg: 20, '4k': 24 },
                  borderRadius: '2px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.15)',
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: '0.55rem', sm: '0.65rem', lg: '0.75rem', '4k': '0.85rem' },
                  fontWeight: 500,
                  color: '#64748b',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  maxWidth: { xs: '36px', sm: '44px', lg: '52px' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {country.name}
              </Typography>
            </Box>
          ))}

          {/* Duplicate set for seamless loop */}
          {countries.map((country, idx) => (
            <Box
              key={`duplicate-${idx}`}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1 },
                minWidth: 'max-content',
                flexShrink: 0,
              }}
            >
            <Box
                component="img"
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={country.name}
                sx={{
                  width: { xs: 18, sm: 22, lg: 26, '4k': 32 },
                  height: { xs: 12, sm: 16, lg: 20, '4k': 24 },
                  borderRadius: '2px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.15)',
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: '0.55rem', sm: '0.65rem', lg: '0.75rem', '4k': '0.85rem' },
                  fontWeight: 500,
                  color: '#64748b',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  maxWidth: { xs: '36px', sm: '44px', lg: '52px' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {country.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
