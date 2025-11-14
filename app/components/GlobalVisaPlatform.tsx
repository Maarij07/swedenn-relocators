'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

export function GlobalVisaPlatform() {
  return (
    <Box
      sx={{
        py: { xs: '5rem', sm: '6rem', lg: '7rem', xl: '8rem', '3xl': '9rem', '4k': '10rem' },
        backgroundColor: '#f8fafc',
      }}
    >
      {/* EXACT same container as Hero and Navbar */}
      <Box
        sx={{
          maxWidth: { lg: '87.5rem', '2xl': '100rem', '4k': '150rem' }, // 1400px, 1600px, 2400px
          mx: 'auto',
          px: { xs: '1rem', sm: '1.5rem', lg: '2rem', xl: '3rem', '4k': '6rem' }, // 16px, 24px, 32px, 48px, 96px
          width: '100%',
        }}
      >
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
            You can apply from anywhere in the world
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
            All-in-One Global Visa Platform
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
            One unified application for all visas you need
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
                    fontWeight: 800,
                    color: '#1e293b',
                    lineHeight: 1.3,
                  }}
                >
                  All-in-One Global Visa Platform
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '1.0625rem', xl: '1.125rem', '3xl': '1.25rem', '4k': '2rem' },
                    color: '#64748b',
                    lineHeight: 1.7,
                  }}
                >
                  You could be anywhere in the world, if you're here and reading this, you can sign up on our portal or app and apply for visas globally. With our Universal Visa Application Form, you apply once, your details are securely stored, and you can reuse them for multiple destinations including Schengen, the UK, US, Canada, Australia, New Zealand, Japan, and more.
                </Typography>

                {/* Description 2 */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '1.0625rem', xl: '1.125rem', '3xl': '1.25rem', '4k': '2rem' },
                    color: '#64748b',
                    lineHeight: 1.7,
                  }}
                >
                  We manage every step for you: application preparation, expert consultation, appointment scheduling, hotel bookings, health insurance, and travel reservations, so you save time, reduce costs, and keep everything organized in one secure platform. For embassy submissions, you can simply download your complete file from the portal or have it securely delivered by DHL.
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
                    Send Via DHL
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
      </Box>
    </Box>
  );
}