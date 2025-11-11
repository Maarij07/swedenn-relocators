'use client';

import { forwardRef } from 'react';
import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';

import { iconifyClasses } from './classes';

// ----------------------------------------------------------------------

export const Iconify = forwardRef(({ className, width = 20, sx, ...other }, ref) => {
  const baseStyles = {
    width,
    height: width,
    flexShrink: 0,
    display: 'inline-flex',
  };

  return (
    <Box
      ref={ref}
      component={Icon}
      className={iconifyClasses.root.concat(className ? ` ${className}` : '')}
      sx={{ ...baseStyles, ...sx }}
      {...other}
    />
  );
});

Iconify.displayName = 'Iconify';

// ----------------------------------------------------------------------

// FlagIcon component for country flags
export const FlagIcon = forwardRef(({ code, sx, ...other }, ref) => {
  if (!code) return null;
  
  return (
    <Iconify
      ref={ref}
      icon={`circle-flags:${code.toLowerCase()}`}
      sx={sx}
      {...other}
    />
  );
});

FlagIcon.displayName = 'FlagIcon';