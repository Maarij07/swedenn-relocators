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
        py: { xs: 0.25, sm: 0.4, lg: 0.5 },
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Flags Carousel Container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          px: 0,
          py: { xs: 0.5, sm: 0.6, lg: 0.75 },
          backgroundColor: '#f8fafc',
          borderRadius: 0,
          boxShadow: 'none',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'scroll 40s linear infinite',
            '@keyframes scroll': {
              '0%': {
                transform: 'translateX(0)',
              },
              '100%': {
                transform: 'translateX(-50%)',
              },
            },
            willChange: 'transform',
          }}
        >
          {[0, 1].map((groupIndex) => (
            <Box
              key={`group-${groupIndex}`}
              sx={{
                display: 'flex',
                gap: { xs: 3, sm: 4, lg: 6, '4k': 8 },
                flexShrink: 0,
                pr: { xs: '24px', sm: '32px', lg: '48px', '4k': '64px' },
              }}
            >
              {countries.map((country, idx) => (
                <Box
                  key={`${groupIndex}-${idx}`}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 0.25, sm: 0.5 },
                    minWidth: 'max-content',
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={`https://flagcdn.com/w160/${country.code}.png`}
                    alt={country.name}
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: '8px',
                      border: '1.5px solid #f8fafc',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 8px rgba(15,23,42,0.12)',
                      objectFit: 'cover',
                      imageRendering: 'auto',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.15) translateY(-1px)',
                        boxShadow: '0 8px 16px rgba(15,23,42,0.18)',
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
                      maxWidth: { xs: '64px', sm: '80px', lg: '96px', '4k': '112px' },
                    }}
                  >
                    {country.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
