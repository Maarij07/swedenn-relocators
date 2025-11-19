"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';

// Create theme with Inter font family
const theme = createTheme({
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif",
  },
});

// Sample countries data
const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AT', label: 'Austria', phone: '43' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BA', label: 'Bosnia and Herzegovina', phone: '387' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'HR', label: 'Croatia', phone: '385' },
  { code: 'CY', label: 'Cyprus', phone: '357' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  { code: 'SE', label: 'Sweden', phone: '46' },
  { code: 'DK', label: 'Denmark', phone: '45' },
];

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
      src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w160/${code.toLowerCase()}.png 2x`}
      alt={`${code} flag`}
      style={{
        width: sx?.width || 20,
        height: sx?.height || 20,
        borderRadius: sx?.borderRadius || '2px',
        objectFit: sx?.objectFit || 'cover',
        imageRendering: 'auto',
        marginRight: sx?.mr ? `${sx.mr * 8}px` : undefined,
        marginLeft: sx?.ml ? `${sx.ml * 8}px` : undefined,
      }}
    />
  );
};

const PlaneCircle = styled(Box)(({ theme }) => ({
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  border: '2px solid #000000',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  position: 'absolute',
  left: '0',
  top: '50%',
  zIndex: 10,
  transition: 'left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  [theme.breakpoints.up('lg')]: {
    width: '3.5rem',
    height: '3.5rem',
  },
}));

const fromCountries = countries.filter(c => 
  ['AD', 'AL', 'AT', 'BY', 'BE', 'BA', 'BG', 'HR', 'CY', 'CZ'].includes(c.code)
);
const toCountries = countries.filter(c => ['SE', 'DK'].includes(c.code));

export default function CountrySelector() {
  const { i18n } = useTranslation();
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);

  const isSv = i18n.language === 'sv';
  const texts = {
    titlePart1: isSv ? 'Välj din' : 'Choose Your',
    titleHighlight: isSv ? 'flyttresa' : 'Relocation Journey',
    titlePart2: isSv ? 'idag' : 'Today',
    subtitle: isSv ? 'Från ditt hem idag till ditt hem i morgon' : 'From your home today to your home tomorrow',
    fromLabel: isSv ? 'Flyttar från' : 'Relocating From',
    toLabel: isSv ? 'Flyttar till' : 'Relocating To',
    placeholder: isSv ? 'Välj ett land' : 'Choose a country',
  };

  const getPlanePosition = () => {
    if (!fromCountry && !toCountry) return '0%';
    if (fromCountry && !toCountry) return '50%';
    if (fromCountry && toCountry) return 'calc(100% - 3.5rem)';
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
          sx={{ mr: 0.75, width: 24, height: 16, borderRadius: '2px', objectFit: 'cover' }}
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
        placeholder={texts.placeholder}
        variant="outlined"
        inputProps={{
          ...params.inputProps,
          autoComplete: 'new-password',
        }}
        InputProps={{
          ...params.InputProps,
          startAdornment: country?.code ? (
            <InputAdornment position="start" sx={{ mr: 0.5 }}>
              <FlagIcon
                code={country.code}
                sx={{ width: 28, height: 20, borderRadius: '2px', objectFit: 'cover' }}
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
    <section className="pt-8 sm:pt-10 lg:pt-14 xl:pt-16 pb-10 sm:pb-12 lg:pb-14 xl:pb-16 bg-white relative overflow-hidden">
      {/* EXACT SAME CONTAINER AS HERO SECTION */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 relative z-10">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 xl:mb-16">
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-extrabold mb-4 sm:mb-6 text-black leading-[1.15]">
            {texts.titlePart1}{' '}
            <span className="text-blue-600">{texts.titleHighlight}</span>{' '}
            {texts.titlePart2}
          </h2>
          <p className="text-[15px] lg:text-[18px] text-black font-medium">
            {texts.subtitle}
          </p>
        </div>

        {/* Flexbox layout - left aligned, right pushed to end */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: { xs: 'stretch', lg: 'center' },
            justifyContent: { xs: 'center', lg: 'space-between' },
            gap: { xs: 3, lg: 0 },
            width: '100%',
          }}
        >
          {/* LEFT - RELOCATING FROM - KEEPS CURRENT POSITION */}
          <Box 
            sx={{ 
              width: { xs: '100%', lg: '170px' },
              maxWidth: { xs: '280px', lg: 'none' },
              mx: { xs: 'auto', lg: 0 },
            }}
          >
            <Typography
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                mb: 1,
                color: '#1e293b',
              }}
            >
              {texts.fromLabel}
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

          {/* CENTER - PLANE WITH HYPHENS - GROWS TO FILL */}
          <Box 
            sx={{ 
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: { lg: 1 },
              mx: { lg: 4, xl: 5 },
              height: { xs: '60px', lg: '56px' },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '2px',
                background: 'repeating-linear-gradient(to right, #000000 0, #000000 12px, transparent 12px, transparent 20px)',
              }}
            >
              <PlaneCircle sx={{ left: getPlanePosition(), transform: 'translate(-50%, -50%)' }}>
                <svg 
                  style={{ width: '2rem', height: '2rem', color: '#000000', transform: 'rotate(90deg)' }} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </PlaneCircle>
            </Box>
          </Box>

          {/* RIGHT - RELOCATING TO - PUSHED ALL THE WAY RIGHT */}
          <Box 
            sx={{ 
              width: { xs: '100%', lg: '170px' },
              maxWidth: { xs: '280px', lg: 'none' },
              mx: { xs: 'auto', lg: 0 },
              display: { lg: 'flex' },
              justifyContent: { lg: 'flex-end' },
            }}
          >
            <Box sx={{ width: { xs: '100%', lg: '170px' } }}>
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  mb: 1,
                  color: '#1e293b',
                }}
              >
                {texts.toLabel}
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
      </div>
    </section>
  );
}