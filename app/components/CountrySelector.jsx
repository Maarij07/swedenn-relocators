"use client";

import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider } from 'react-hook-form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { RHFCountrySelect } from './fields/rhf-country-select';
import { countries } from '../data/countries';

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

export default function CountrySelector() {
  const { i18n } = useTranslation();

  const methods = useForm({
    defaultValues: {
      fromCountry: '',
      toCountry: '',
    },
  });

  const { watch } = methods;
  const fromCountry = watch('fromCountry');
  const toCountry = watch('toCountry');

  const isSv = i18n.language === 'sv';
  const texts = {
    title: isSv ? 'Välj din flyttresa idag' : 'Choose Your Relocation Journey Today',
    subtitle: isSv ? 'Från ditt hem idag till ditt hem i morgon' : 'From your home today to your home tomorrow',
    fromLabel: isSv ? 'Flyttar från' : 'Relocating From',
    toLabel: isSv ? 'Flyttar till' : 'Relocating To',
  };

  const labelSx = {
    fontSize: { xs: '0.78rem', lg: '0.82rem' },
    fontWeight: 700,
    mb: 1.25,
    color: '#0f172a',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    lineHeight: 1.2,
  };

  const fromCountriesList = useMemo(
    () => countries.filter(c =>
      ['AD', 'AL', 'AT', 'BY', 'BE', 'BA', 'BG', 'HR', 'CY', 'CZ'].includes(c.code)
    ),
    []
  );

  const toCountriesList = useMemo(
    () => countries.filter(c => ['SE', 'DK'].includes(c.code)),
    []
  );

  const getPlanePosition = () => {
    if (!fromCountry && !toCountry) return '0%';
    if (fromCountry && !toCountry) return '50%';
    if (fromCountry && toCountry) return 'calc(100% - 3.5rem)';
    return '0%';
  };

  // Shared sx override to disable MUI portal and anchor dropdown under the field
  const selectSxOverrides = {
    '& .MuiAutocomplete-popper': {
      // Ensures the popper is positioned relative to the field, not the body
      position: 'absolute !important',
    },
  };

  return (
    <section className="pt-8 sm:pt-10 lg:pt-14 xl:pt-16 pb-10 sm:pb-12 lg:pb-14 xl:pb-16 bg-[#F4F6F8] relative overflow-visible z-0">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 relative z-10">
        <div className="bg-blue-50 rounded-lg border-l-4 border-blue-500 px-4 sm:px-5 lg:px-6 xl:px-8 pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16 relative overflow-visible">
          <div className="text-center mb-12 sm:mb-14 lg:mb-18 xl:mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] font-extrabold text-[#0f172a] leading-[1.2] [font-family:'Public_Sans_Variable',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
                {texts.title}
              </h2>
              <p className="mt-2 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] text-[#2563eb] font-bold leading-[1.35] [font-family:'Public_Sans_Variable',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
                {texts.subtitle}
              </p>
            </div>
          </div>

          <FormProvider {...methods}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: { xs: 'stretch', lg: 'center' },
                justifyContent: { xs: 'center', lg: 'space-between' },
                gap: { xs: 3, lg: 0 },
                width: '100%',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* LEFT - RELOCATING FROM */}
              <Box
                sx={{
                  width: { xs: '100%', lg: '230px', xl: '250px' },
                  maxWidth: { xs: '280px', lg: 'none' },
                  mx: { xs: 'auto', lg: 0 },
                  // KEY FIX: relative + high zIndex so the popper renders under this field
                  position: 'relative',
                  zIndex: 20,
                  ...selectSxOverrides,
                }}
              >
                <Typography sx={labelSx}>
                  {texts.fromLabel}
                </Typography>
                <RHFCountrySelect
                  name="fromCountry"
                  label=""
                  helperText=""
                  hideCode={true}
                  availableCountries={fromCountriesList.map(c => c.label)}
                  rules={{}}
                  // KEY FIX: disablePortal prevents MUI from teleporting the dropdown
                  // to <body>, so it stays anchored directly under the input field
                  componentsProps={{
                    popper: {
                      disablePortal: true,
                      placement: 'bottom-start',
                      modifiers: [
                        {
                          name: 'flip',
                          enabled: false,
                        },
                        {
                          name: 'preventOverflow',
                          enabled: false,
                        },
                      ],
                    },
                  }}
                  slotProps={{
                    popper: {
                      disablePortal: true,
                      placement: 'bottom-start',
                    },
                  }}
                  sx={{}}
                />
              </Box>

              {/* CENTER - PLANE WITH HYPHENS */}
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: { lg: 1 },
                  mx: { lg: 4, xl: 5 },
                  height: { xs: '60px', lg: '56px' },
                  zIndex: 1,
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

              {/* RIGHT - RELOCATING TO */}
              <Box
                sx={{
                  width: { xs: '100%', lg: '230px', xl: '250px' },
                  maxWidth: { xs: '280px', lg: 'none' },
                  mx: { xs: 'auto', lg: 0 },
                  display: { lg: 'flex' },
                  justifyContent: { lg: 'flex-end' },
                  // KEY FIX: relative + high zIndex so the popper renders under this field
                  position: 'relative',
                  zIndex: 20,
                  ...selectSxOverrides,
                }}
              >
                <Box sx={{ width: { xs: '100%', lg: '230px', xl: '250px' } }}>
                  <Typography sx={labelSx}>
                    {texts.toLabel}
                  </Typography>
                  <RHFCountrySelect
                    name="toCountry"
                    label=""
                    helperText=""
                    hideCode={true}
                    availableCountries={toCountriesList.map(c => c.label)}
                    rules={{}}
                    // KEY FIX: disablePortal prevents MUI from teleporting the dropdown
                    // to <body>, so it stays anchored directly under the input field
                    componentsProps={{
                      popper: {
                        disablePortal: true,
                        placement: 'bottom-start',
                        modifiers: [
                          {
                            name: 'flip',
                            enabled: false,
                          },
                          {
                            name: 'preventOverflow',
                            enabled: false,
                          },
                        ],
                      },
                    }}
                    slotProps={{
                      popper: {
                        disablePortal: true,
                        placement: 'bottom-start',
                      },
                    }}
                    sx={{}}
                  />
                </Box>
              </Box>
            </Box>
          </FormProvider>
        </div>
      </div>
    </section>
  );
}