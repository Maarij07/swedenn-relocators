"use client";

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// Import your countries data - adjust path as needed
import { countries } from '../data/countries';

// Utility function to get country by label or code
const getCountry = (inputValue) => {
  if (!inputValue) return { code: '', label: '', phone: '' };
  
  if (typeof inputValue === 'string') {
    return countries.find((country) => country.label === inputValue) || { code: '', label: '', phone: '' };
  }
  
  return countries.find((country) => country.label === inputValue.label) || inputValue;
};

// FlagIcon Component
const FlagIcon = ({ code, sx }) => {
  if (!code) return null;
  
  return (
    <img
      loading="lazy"
      width="20"
      src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
      alt={`${code} flag`}
      style={{
        width: sx?.width || 20,
        height: sx?.height || 20,
        borderRadius: sx?.borderRadius,
        objectFit: sx?.objectFit || 'cover',
        marginRight: sx?.mr ? `${sx.mr * 8}px` : undefined,
        marginLeft: sx?.ml ? `${sx.ml * 8}px` : undefined,
      }}
    />
  );
};

const PlaneIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  margin: '3rem 0',
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    margin: 0,
    width: 'auto',
  },
}));

const DashedLine = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '2px',
  background: 'repeating-linear-gradient(to right, #94a3b8 0, #94a3b8 10px, transparent 10px, transparent 20px)',
  [theme.breakpoints.up('lg')]: {
    width: '18rem',
    height: '2px',
    background: 'repeating-linear-gradient(to right, #94a3b8 0, #94a3b8 12px, transparent 12px, transparent 24px)',
  },
  [theme.breakpoints.up('xl')]: {
    width: '22rem',
  },
  [theme.breakpoints.up('2xl')]: {
    width: '26rem',
  },
}));

const PlaneCircle = styled(Box)(({ theme }) => ({
  width: '3.5rem',
  height: '3.5rem',
  borderRadius: '50%',
  border: '3px solid #94a3b8',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  boxShadow: '0 4px 16px rgba(148, 163, 184, 0.15)',
  position: 'absolute',
  left: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  transition: 'left 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  [theme.breakpoints.up('lg')]: {
    width: '4rem',
    height: '4rem',
    border: '3px solid #94a3b8',
  },
  [theme.breakpoints.up('xl')]: {
    width: '4.5rem',
    height: '4.5rem',
  },
  [theme.breakpoints.up('2xl')]: {
    width: '5rem',
    height: '5rem',
  },
}));

// Watermark styling
const WatermarkText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '6rem',
  fontWeight: 900,
  color: 'rgba(148, 163, 184, 0.03)',
  letterSpacing: '0.2em',
  userSelect: 'none',
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
  zIndex: 0,
  [theme.breakpoints.up('md')]: {
    fontSize: '10rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '14rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '16rem',
  },
  [theme.breakpoints.up('2xl')]: {
    fontSize: '20rem',
  },
}));

// Filter countries for source and destination
const fromCountries = countries.filter(c => 
  ['AD', 'AL', 'AT', 'BY', 'BE', 'BA', 'BG', 'HR', 'CY', 'CZ'].includes(c.code)
);

const toCountries = countries.filter(c => 
  ['SE', 'DK'].includes(c.code)
);

export default function CountrySelector() {
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);
  
  // Calculate plane position based on selections - with responsive sizes
  const getPlaneStyle = () => {
    if (!fromCountry && !toCountry) {
      return { left: '0%' };
    }
    if (fromCountry && !toCountry) {
      return { 
        left: {
          xs: 'calc(50% - 1.75rem)',
          lg: 'calc(50% - 2rem)',
          xl: 'calc(50% - 2.25rem)',
          '2xl': 'calc(50% - 2.5rem)'
        }
      };
    }
    if (fromCountry && toCountry) {
      return { 
        left: {
          xs: 'calc(100% - 3.5rem)',
          lg: 'calc(100% - 4rem)',
          xl: 'calc(100% - 4.5rem)',
          '2xl': 'calc(100% - 5rem)'
        }
      };
    }
    return { left: '0%' };
  };

  const renderOption = (props, option) => {
    const country = getCountry(option);
    if (!country.label) return null;

    const { key, ...otherProps } = props;

    return (
      <li key={key} {...otherProps}>
        <FlagIcon
          code={country.code}
          sx={{ mr: 1.5, width: 22, height: 22, borderRadius: '50%', objectFit: 'cover' }}
        />
        {country.label} ({country.code}) +{country.phone}
      </li>
    );
  };

  const renderInput = (params, isDestination, selectedValue) => {
    const country = getCountry(selectedValue);

    return (
      <TextField
        {...params}
        placeholder="Choose a country"
        variant="outlined"
        inputProps={{
          ...params.inputProps,
          autoComplete: 'new-password',
        }}
        InputProps={{
          ...params.InputProps,
          startAdornment: country?.code ? (
            <InputAdornment position="start">
              <FlagIcon
                code={country.code}
                sx={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }}
              />
            </InputAdornment>
          ) : null,
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
            borderRadius: '8px',
            '& fieldset': {
              borderWidth: '2px',
              borderColor: isDestination ? '#3b82f6' : '#e2e8f0',
              transition: 'all 0.3s ease',
            },
            '&:hover fieldset': {
              borderColor: isDestination ? '#2563eb' : '#cbd5e1',
            },
            '&.Mui-focused fieldset': {
              borderColor: isDestination ? '#2563eb' : '#3b82f6',
              borderWidth: '2px',
            },
          },
          '& .MuiInputBase-input': {
            fontSize: { xs: '0.9rem', lg: '0.95rem', xl: '1rem', '3xl': '1.125rem', '4k': '1.5rem' },
            color: '#1e293b',
            fontWeight: 500,
            padding: { xs: '12px 14px', '4k': '18px 20px' },
            '&::placeholder': {
              color: '#94a3b8',
              opacity: 1,
            },
          },
        }}
      />
    );
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, lg: 10, xl: 12, '2xl': 14, '3xl': 16, '4k': 0 },
        backgroundColor: '#ffffff',
        minHeight: { xs: '60vh', lg: '70vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <WatermarkText>RELOCATION</WatermarkText>

      <Box
        sx={{
          maxWidth: { lg: '1400px', '2xl': '1600px', '4k': '2400px' },
          mx: 'auto',
          px: { xs: 2, sm: 3, lg: 4, xl: 6, '4k': 12 },
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 6, lg: 8, xl: 10, '3xl': 12, '4k': 16 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { 
                xs: '1.75rem', 
                sm: '2rem', 
                md: '2.25rem',
                lg: '2.75rem', 
                xl: '3rem',
                '2xl': '3.25rem',
                '3xl': '3.75rem',
                '4k': '5.5rem'
              },
              fontWeight: 700,
              mb: { xs: 1.5, lg: 2, '4k': 3 },
              color: '#1e293b',
              lineHeight: 1.2,
            }}
          >
            Choose Your{' '}
            <Box component="span" sx={{ color: '#3b82f6' }}>
              Relocation Journey
            </Box>{' '}
            Today
          </Typography>
          <Typography
            sx={{
              fontSize: { 
                xs: '0.95rem', 
                sm: '1rem', 
                lg: '1.125rem',
                xl: '1.25rem',
                '3xl': '1.5rem',
                '4k': '2rem'
              },
              color: '#64748b',
              fontWeight: 500,
            }}
          >
            From your home today to your home tomorrow
          </Typography>
        </Box>

        {/* Dropdowns */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 0, lg: 0 },
            maxWidth: { lg: '1100px', xl: '1200px', '2xl': '1300px' },
            mx: 'auto',
          }}
        >
          {/* From */}
          <Box sx={{ width: '100%', maxWidth: { xs: '100%', lg: '26rem', xl: '28rem', '2xl': '30rem', '4k': '36rem' } }}>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', lg: '1rem', '3xl': '1.125rem', '4k': '1.5rem' },
                fontWeight: 600,
                mb: { xs: 1.5, '4k': 2 },
                color: '#1e293b',
              }}
            >
              Relocating From
            </Typography>
            <Autocomplete
              value={fromCountry}
              onChange={(e, newValue) => setFromCountry(newValue)}
              options={fromCountries}
              getOptionLabel={(option) => option?.label || ''}
              autoHighlight
              renderOption={renderOption}
              renderInput={(params) => renderInput(params, false, fromCountry)}
            />
          </Box>

          {/* Plane Icon with Smooth Position Transition */}
          <PlaneIconWrapper sx={{ px: { xs: 0, lg: 2, xl: 3, '2xl': 4 } }}>
            <DashedLine>
              <PlaneCircle sx={getPlaneStyle()}>
                <svg 
                  style={{ 
                    width: '1.8rem', 
                    height: '1.8rem', 
                    color: '#94a3b8',
                    transform: 'rotate(90deg)'
                  }} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </PlaneCircle>
            </DashedLine>
          </PlaneIconWrapper>

          {/* To */}
          <Box sx={{ width: '100%', maxWidth: { xs: '100%', lg: '26rem', xl: '28rem', '2xl': '30rem', '4k': '36rem' } }}>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', lg: '1rem', '3xl': '1.125rem', '4k': '1.5rem' },
                fontWeight: 600,
                mb: { xs: 1.5, '4k': 2 },
                color: '#1e293b',
              }}
            >
              Relocating To
            </Typography>
            <Autocomplete
              value={toCountry}
              onChange={(e, newValue) => setToCountry(newValue)}
              options={toCountries}
              getOptionLabel={(option) => option?.label || ''}
              autoHighlight
              renderOption={renderOption}
              renderInput={(params) => renderInput(params, true, toCountry)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}