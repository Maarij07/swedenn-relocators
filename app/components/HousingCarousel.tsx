'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useCarousel } from '../utils/useCarousel';

interface HousingItem {
  id: string;
  title: string;
  image: string;
  location: string;
  startDate: string;
  endDate?: string;
  inquiries: number;
  price?: string;
  priceLabel?: string;
  badgeLabel?: string;
  rating?: number;
  primaryButtonText: string;
  primaryButtonAction: string;
  secondaryButtonText: string;
  secondaryButtonAction: string;
}

const housingData: HousingItem[] = [
  {
    id: '1',
    title: 'Short Term Rental',
    image: '/h1.png',
    location: 'Malmö',
    startDate: '21 - 28 Feb 2026',
    inquiries: 221,
    price: '€89',
    priceLabel: 'Per Night',
    badgeLabel: 'Per Night',
    rating: 4.9,
    primaryButtonText: 'Reserve Now',
    primaryButtonAction: 'reserve',
    secondaryButtonText: 'Become A Host',
    secondaryButtonAction: 'host',
  },
  {
    id: '2',
    title: 'Long Term Rental',
    image: '/h2.png',
    location: 'Malmö',
    startDate: '1 Feb 2026',
    endDate: '31 Jan 2029',
    inquiries: 153,
    price: '€850',
    priceLabel: 'Monthly Rent',
    badgeLabel: 'Monthly Rent',
    primaryButtonText: 'Rent Now',
    primaryButtonAction: 'rent',
    secondaryButtonText: 'Sublet Your Property',
    secondaryButtonAction: 'sublet',
  },
  {
    id: '3',
    title: 'Sell Your Property',
    image: '/h3.png',
    location: 'Malmö',
    startDate: '15 - 15 Sept 2025',
    inquiries: 202,
    badgeLabel: 'List Now',
    primaryButtonText: 'List Now',
    primaryButtonAction: 'list',
    secondaryButtonText: 'Mortgage Support',
    secondaryButtonAction: 'mortgage',
  },
  {
    id: '4',
    title: 'Short Term Rental',
    image: '/h1.png',
    location: 'Stockholm',
    startDate: '15 Mar 2026 - 30 Apr 2026',
    inquiries: 187,
    price: '€99',
    priceLabel: 'Per Night',
    badgeLabel: 'Per Night',
    rating: 4.8,
    primaryButtonText: 'Reserve Now',
    primaryButtonAction: 'reserve',
    secondaryButtonText: 'Become A Host',
    secondaryButtonAction: 'host',
  },
  {
    id: '5',
    title: 'Long Term Rental',
    image: '/h2.png',
    location: 'Stockholm',
    startDate: '1 Apr 2026',
    endDate: '31 Mar 2027',
    inquiries: 176,
    price: '€1200',
    priceLabel: 'Monthly Rent',
    badgeLabel: 'Monthly Rent',
    primaryButtonText: 'Rent Now',
    primaryButtonAction: 'rent',
    secondaryButtonText: 'Sublet Your Property',
    secondaryButtonAction: 'sublet',
  },
];

export function HousingCarousel() {
  const carousel = useCarousel({
    autoPlay: true,
    autoPlayInterval: 5000, // Synchronized with Offers carousel
  });

  const handleScroll = (direction: 'left' | 'right') => {
    carousel.scroll(direction);
  };

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, lg: 8, xl: 10 },
        backgroundColor: '#f8fafc',
      }}
    >
      <Box
        sx={{
          maxWidth: { lg: '1400px', '2xl': '1600px', '4k': '2400px' },
          mx: 'auto',
          px: { xs: 4, sm: 6, lg: 8, xl: 12, '4k': 24 },
          width: '100%',
        }}
      >
        {/* Header */}
        <Box sx={{ mb: { xs: 6, sm: 8, lg: 10 }, position: 'relative' }}>
          <Typography
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem', lg: '1rem', '4k': '1.25rem' },
              color: '#3b82f6',
              fontWeight: 600,
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textAlign: 'center',
            }}
          >
            Find Your Perfect Home
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', lg: '2.25rem', '4k': '3.5rem' },
              fontWeight: 800,
              mb: 1,
              color: '#000000',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            Housing Opportunities
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.75rem', lg: '2rem', '4k': '3rem' },
              fontWeight: 700,
              color: '#3b82f6',
              textAlign: 'center',
            }}
          >
            in Sweden & Nordic Region
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ position: 'relative' }}>
          {/* Left Arrow Button */}
          <IconButton
            onClick={() => handleScroll('left')}
            disabled={!carousel.canScrollLeft}
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: -10, md: -20 },
              transform: 'translateY(-50%)',
              zIndex: 10,
              bgcolor: '#1e293b',
              color: 'white',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              '&:hover': { 
                bgcolor: '#0f172a',
              },
              '&.Mui-disabled': {
                bgcolor: '#cbd5e1',
                color: '#94a3b8',
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Right Arrow Button */}
          <IconButton
            onClick={() => handleScroll('right')}
            disabled={!carousel.canScrollRight}
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: -10, md: -20 },
              transform: 'translateY(-50%)',
              zIndex: 10,
              bgcolor: '#1e293b',
              color: 'white',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              '&:hover': { 
                bgcolor: '#0f172a',
              },
              '&.Mui-disabled': {
                bgcolor: '#cbd5e1',
                color: '#94a3b8',
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>

          {/* Carousel Content */}
          <Box
            ref={carousel.carouselRef}
            onScroll={carousel.onScroll}
            sx={{
              display: 'flex',
              gap: { xs: 2, sm: 3, lg: 4 },
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              pb: 2,
              px: { xs: 0, md: 0 },
              '&::-webkit-scrollbar': {
                height: 0,
              },
              scrollSnapType: 'x mandatory',
            }}
          >
            {housingData.map((item) => (
              <HousingCard key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function HousingCard({ item }: { item: HousingItem }) {
  return (
    <Card
      sx={{
        minWidth: { xs: 240, sm: 280, md: 300, lg: 'calc((100% - 64px)/3)' },
        maxWidth: { xs: 240, sm: 280, md: 300, lg: 'calc((100% - 64px)/3)' },
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        scrollSnapAlign: 'center',
        '&:hover': {
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '160px', sm: '180px', md: '200px', lg: '220px' },
          backgroundColor: '#f0f2f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Badge */}
        {item.badgeLabel && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              backgroundColor: '#1e293b',
              color: 'white',
              px: 2.5,
              py: 0.75,
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            {item.badgeLabel}
          </Box>
        )}

        {/* Rating Badge (if available) */}
        {item.rating && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              backgroundColor: '#1e293b',
              color: 'white',
              px: 1.5,
              py: 0.5,
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            ⭐ {item.rating}
          </Box>
        )}
      </Box>

      {/* Content Section */}
      <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
        {/* Posted Date */}
        <Typography
          sx={{
            fontSize: '0.75rem',
            color: '#94a3b8',
            mb: 2,
            fontWeight: 500,
          }}
        >
          Posted date: {item.startDate}
        </Typography>

        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: '1.125rem', sm: '1.2rem' },
            fontWeight: 700,
            color: '#1e293b',
            mb: 2.5,
            lineHeight: 1.3,
          }}
        >
          {item.title}
        </Typography>

        {/* Location - Plain text */}
        <Typography
          sx={{
            fontSize: '0.9rem',
            color: '#64748b',
            mb: 1.5,
            fontWeight: 500,
          }}
        >
          {item.location}
        </Typography>

        {/* Dates - Plain text */}
        <Typography
          sx={{
            fontSize: '0.9rem',
            color: '#64748b',
            mb: 1.5,
            fontWeight: 500,
          }}
        >
          {item.startDate}{item.endDate && ` - ${item.endDate}`}
        </Typography>

        {/* Inquiries - Plain text */}
        <Typography
          sx={{
            fontSize: '0.9rem',
            color: '#64748b',
            mb: 3,
            fontWeight: 500,
          }}
        >
          {item.inquiries} {item.inquiries === 1 ? 'Inquiry' : 'Inquiries'}
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            endIcon={
              <Box component="span" sx={{ fontSize: '1.2rem' }}>
                →
              </Box>
            }
            sx={{
              py: 1.5,
              fontSize: '0.95rem',
              fontWeight: 600,
              textTransform: 'none',
              borderColor: '#cbd5e1',
              color: '#1e293b',
              backgroundColor: 'white',
              border: '2px solid #cbd5e1',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#f8fafc',
                borderColor: '#94a3b8',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {item.primaryButtonText}
          </Button>

          <Button
            variant="contained"
            fullWidth
            endIcon={
              <Box component="span" sx={{ fontSize: '1.2rem' }}>
                →
              </Box>
            }
            sx={{
              py: 1.5,
              fontSize: '0.95rem',
              fontWeight: 600,
              textTransform: 'none',
              backgroundColor: '#1e293b',
              color: 'white',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#0f172a',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {item.secondaryButtonText}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
