"use client";

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { countries } from '../data/countries';

const getCountry = (inputValue) => {
  if (!inputValue) return { code: '', label: '', phone: '' };
  if (typeof inputValue === 'string') {
    return countries.find((country) => country.label === inputValue) || { code: '', label: '', phone: '' };
  }
  return countries.find((country) => country.label === inputValue.label) || inputValue;
};

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
  margin: '3rem 0', // keep original (don’t touch animation alignment)
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    margin: 0,
    width: 'auto',
  },
}));

const DashedLine = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '3px',
  background: 'repeating-linear-gradient(to right, #000000 0, #000000 15px, transparent 15px, transparent 30px)',
  [theme.breakpoints.up('lg')]: {
    width: '28rem',
    height: '4px',
    background: 'repeating-linear-gradient(to right, #000000 0, #000000 20px, transparent 20px, transparent 40px)',
  },
  [theme.breakpoints.up('xl')]: {
    width: '32rem',
    height: '4px',
  },
  [theme.breakpoints.up('4k')]: {
    width: '40rem',
    height: '6px',
  },
}));

const PlaneCircle = styled(Box)(({ theme }) => ({
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  border: '3px solid #3b82f6',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  boxShadow: '0 0 0 8px rgba(59, 130, 246, 0.1)',
  position: 'absolute',
  left: '0',
  top: '50%',
  zIndex: 10,
  transition: 'left 0.8s cubic-bezier(0.4, 0, 0.2, 1)', // keep plane smooth
}));

const WatermarkText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '8rem',
  fontWeight: 900,
  color: 'rgba(203, 213, 225, 0.15)',
  letterSpacing: '0.1em',
  userSelect: 'none',
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
  zIndex: 0,
  [theme.breakpoints.up('md')]: {
    fontSize: '12rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '16rem',
  },
}));

const fromCountries = countries.filter(c => 
  ['AD', 'AL', 'AT', 'BY', 'BE', 'BA', 'BG', 'HR', 'CY', 'CZ'].includes(c.code)
);
const toCountries = countries.filter(c => ['SE', 'DK'].includes(c.code));

export default function CountrySelector() {
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);

  const getPlanePosition = () => {
    if (!fromCountry && !toCountry) return '0%';
    if (fromCountry && !toCountry) return '50%';
    if (fromCountry && toCountry) return 'calc(100% - 4rem)';
    return '0%';
  };

  const renderOption = (props, option) => {
    const country = getCountry(option);
    if (!country.label) return null;
    const { key, ...otherProps } = props;
    return (
      <li key={key} {...otherProps}>
        <FlagIcon
          code={country.code}
          sx={{ mr: 0.75, width: 22, height: 22, borderRadius: '50%', objectFit: 'cover' }} // tighter
        />
        {country.label}
      </li>
    );
  };

  const renderInput = (params, selectedValue) => {
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
            <InputAdornment position="start" sx={{ mr: 0.5 }}> {/* tighter flag-text spacing */}
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
              borderColor: '#e2e8f0',
            },
            '&:hover fieldset': {
              borderColor: '#cbd5e1',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3b82f6',
              borderWidth: '2px',
            },
          },
          '& .MuiInputBase-input': {
            fontSize: { xs: '0.9rem', lg: '0.95rem' },
            color: '#1e293b',
            fontWeight: 500,
            padding: { xs: '12px 12px' },
          },
        }}
      />
    );
  };

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 3, sm: 4, lg: 6, xl: 8 }, // reduced top gap only
        pb: { xs: 6, sm: 8, lg: 10, xl: 12 },
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <WatermarkText>RELOCATION</WatermarkText>

      <Box
        sx={{
          maxWidth: { lg: '1400px', '2xl': '1600px', '4k': '2400px' },
          mx: 'auto',
          px: { xs: 4, sm: 6, lg: 8, xl: 12, '4k': 24 },
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4, lg: 6, xl: 8 } }}> {/* reduced mb */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', lg: '3.25rem' },
              fontWeight: 700,
              mb: { xs: 1.5, lg: 2 },
              color: '#000000',
              lineHeight: 1.15,
            }}
          >
            Choose Your <Box component="span" sx={{ color: '#3b82f6' }}>Relocation Journey</Box> Today
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', lg: '1.125rem' },
              color: '#000000',
              fontWeight: 600,
            }}
          >
            From your home today to your home tomorrow
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: { xs: 'stretch', lg: 'flex-end' },
            justifyContent: { xs: 'flex-start', lg: 'space-between' },
            gap: { xs: 2, lg: 3 },
          }}
        >
          {/* From */}
          <Box sx={{ width: '100%', maxWidth: { lg: '22rem', xl: '24rem' }, flexShrink: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', lg: '0.95rem' },
                fontWeight: 600,
                mb: 1,
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
              renderInput={(params) => renderInput(params, fromCountry)}
            />
          </Box>

          {/* Plane (unchanged animation!) */}
          <PlaneIconWrapper sx={{ px: { xs: 0, lg: 4 }, flexShrink: 0, pb: { lg: '0.75rem' } }}>
            <DashedLine>
              <PlaneCircle sx={{ left: getPlanePosition(), transform: 'translate(-50%, -50%)' }}>
                <svg 
                  style={{ width: '2.2rem', height: '2.2rem', color: '#000000', transform: 'rotate(90deg)' }} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </PlaneCircle>
            </DashedLine>
          </PlaneIconWrapper>

          {/* To */}
          <Box sx={{ width: '100%', maxWidth: { lg: '22rem', xl: '24rem' }, flexShrink: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', lg: '0.95rem' },
                fontWeight: 600,
                mb: 1,
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
              renderInput={(params) => renderInput(params, toCountry)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
