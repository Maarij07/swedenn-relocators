'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
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

const baseHousingData: HousingItem[] = [
  {
    id: '1',
    title: 'Short Term Rental',
    image: '/h1.svg',
    location: 'Bhutan',
    startDate: '21 Feb - 27 Feb',
    inquiries: 223,
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
    image: '/h2.svg',
    location: 'Bhutan',
    startDate: '21 Feb - 27 Feb',
    inquiries: 223,
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
    image: '/h3.svg',
    location: 'Bhutan',
    startDate: '21 Feb - 27 Feb',
    inquiries: 223,
    badgeLabel: 'List Now',
    primaryButtonText: 'List Now',
    primaryButtonAction: 'list',
    secondaryButtonText: 'Mortgage Support',
    secondaryButtonAction: 'mortgage',
  },
];

export function HousingCarousel() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const texts = {
    eyebrow: isSv ? 'Hitta ditt perfekta hem' : 'Find Your Perfect Home',
    heading: isSv ? 'Boendeförslag' : 'Housing Opportunities',
    subheading: isSv ? 'i Sverige och Norden' : 'in Sweden & Nordic Region',
    postedDate: isSv ? 'Publicerat datum' : 'Posted date',
    bookedSuffix: isSv ? ' bokningar' : ' Booked',
  };
  const housingData: HousingItem[] = isSv
    ? [
        {
          ...baseHousingData[0],
          title: 'Korttidsuthyrning',
          location: 'Bhutan',
          startDate: '21 feb – 27 feb',
          priceLabel: 'Per natt',
          badgeLabel: 'Per natt',
          primaryButtonText: 'Boka nu',
          secondaryButtonText: 'Bli värd',
        },
        {
          ...baseHousingData[1],
          title: 'Långtidsuthyrning',
          location: 'Bhutan',
          startDate: '21 feb – 27 feb',
          priceLabel: 'Månadshyra',
          badgeLabel: 'Månadshyra',
          primaryButtonText: 'Hyr nu',
          secondaryButtonText: 'Hyra ut din bostad',
        },
        {
          ...baseHousingData[2],
          title: 'Sälj din bostad',
          location: 'Bhutan',
          startDate: '21 feb – 27 feb',
          badgeLabel: 'Lista nu',
          primaryButtonText: 'Lista nu',
          secondaryButtonText: 'Bolånestöd',
        },
      ]
    : baseHousingData;
  const carousel = useCarousel({
    autoPlay: true,
    autoPlayInterval: 5000,
  });

  const handleScroll = (direction: 'left' | 'right') => {
    carousel.scroll(direction);
  };

  return (
    <Box
      sx={{
        py: { xs: '80px', sm: '96px', lg: '112px', xl: '128px', '3xl': '144px', '4k': '160px' },
       backgroundColor: '#ffffff',
      }}
    >
      {/* EXACT same container as Hero/Services (Tailwind classes) */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Header */}
        <Box sx={{ mb: { xs: '24px', sm: '28px', md: '32px', lg: '36px', '3xl': '48px', '4k': '64px' }, position: 'relative' }}>
          <Typography
            sx={{
              fontSize: { xs: '12px', sm: '15px', lg: '17px', '3xl': '20px', '4k': '2rem' },
              color: '#3b82f6',
              fontWeight: 600,
              mb: { xs: '8px', sm: '10px' },
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textAlign: 'center',
            }}
          >
            {texts.eyebrow}
          </Typography>
          {/* Match Services heading typography: bold black line, slightly smaller blue line */}
          <Typography
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.5rem', xl: '2.75rem' },
              fontWeight: 800,
              mb: { xs: '8px', sm: '10px' },
              color: '#000000',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            {texts.heading}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem', xl: '2rem' },
              fontWeight: 700,
              color: '#3b82f6',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            {texts.subheading}
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          {/* Left Arrow Button - keep inside container edges on all breakpoints */}
          <IconButton
            onClick={() => handleScroll('left')}
            disabled={!carousel.canScrollLeft}
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 0, md: 0, '3xl': 0, '4k': 0 },
              transform: 'translateY(-50%)',
              zIndex: 10,
              bgcolor: '#1e293b',
              color: 'white',
              width: { xs: '40px', sm: '44px', md: '48px', '3xl': '56px', '4k': '72px' },
              height: { xs: '40px', sm: '44px', md: '48px', '3xl': '56px', '4k': '72px' },
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              '&:hover': { 
                bgcolor: '#0f172a',
              },
              '&.Mui-disabled': {
                bgcolor: '#cbd5e1',
                color: '#94a3b8',
              },
              '& svg': {
                fontSize: { xs: '20px', sm: '22px', md: '24px', '3xl': '28px', '4k': '36px' },
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Right Arrow Button - keep inside container edges on all breakpoints */}
          <IconButton
            onClick={() => handleScroll('right')}
            disabled={!carousel.canScrollRight}
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: 0, md: 0, '3xl': 0, '4k': 0 },
              transform: 'translateY(-50%)',
              zIndex: 10,
              bgcolor: '#1e293b',
              color: 'white',
              width: { xs: '40px', sm: '44px', md: '48px', '3xl': '56px', '4k': '72px' },
              height: { xs: '40px', sm: '44px', md: '48px', '3xl': '56px', '4k': '72px' },
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              '&:hover': { 
                bgcolor: '#0f172a',
              },
              '&.Mui-disabled': {
                bgcolor: '#cbd5e1',
                color: '#94a3b8',
              },
              '& svg': {
                fontSize: { xs: '20px', sm: '22px', md: '24px', '3xl': '28px', '4k': '36px' },
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
              gap: { xs: '8px', sm: '12px', lg: '16px', '3xl': '24px', '4k': '32px' },
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              pb: { xs: '8px', sm: '12px', md: '16px' },
              px: { xs: 0, md: 0 },
              '&::-webkit-scrollbar': {
                height: 0,
              },
              scrollSnapType: 'x mandatory',
              // Smooth fade-up animation when the carousel section mounts
              '@keyframes housingFadeInUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(24px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
              animation: 'housingFadeInUp 0.7s ease-out',
            }}
          >
            {housingData.map((item) => (
              <HousingCard key={item.id} item={item} texts={texts} />
            ))}
          </Box>
        </Box>
      </div>
    </Box>
  );
}

interface HousingTexts {
  postedDate: string;
  bookedSuffix: string;
}

function HousingCard({ item, texts }: { item: HousingItem; texts: HousingTexts }) {
  return (
    <Card
      sx={{
        minWidth: { 
          xs: '240px', 
          sm: '280px', 
          md: '300px', 
          lg: 'calc((100% - 32px)/3)',
          '3xl': 'calc((100% - 48px)/3)',
          '4k': 'calc((100% - 64px)/3)'
        },
        maxWidth: { 
          xs: '240px', 
          sm: '280px', 
          md: '300px', 
          lg: 'calc((100% - 32px)/3)',
          '3xl': 'calc((100% - 48px)/3)',
          '4k': 'calc((100% - 64px)/3)'
        },
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0',
        borderRadius: { xs: '16px', sm: '18px', '3xl': '24px', '4k': '32px' },
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
          height: { xs: '160px', sm: '180px', md: '200px', lg: '220px', '3xl': '280px', '4k': '400px' },
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
              top: { xs: '12px', '3xl': '16px', '4k': '20px' },
              left: { xs: '12px', '3xl': '16px', '4k': '20px' },
              backgroundColor: '#1e293b',
              color: 'white',
              px: { xs: '10px', sm: '12px', '3xl': '16px', '4k': '20px' },
              py: { xs: '6px', sm: '7px', '3xl': '9px', '4k': '12px' },
              borderRadius: { xs: '6px', '3xl': '8px', '4k': '10px' },
              fontSize: { xs: '0.75rem', sm: '0.8rem', '3xl': '1rem', '4k': '1.5rem' },
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
              top: { xs: '12px', '3xl': '16px', '4k': '20px' },
              right: { xs: '12px', '3xl': '16px', '4k': '20px' },
              backgroundColor: '#1e293b',
              color: 'white',
              px: { xs: '8px', sm: '10px', '3xl': '14px', '4k': '18px' },
              py: { xs: '4px', sm: '5px', '3xl': '7px', '4k': '10px' },
              borderRadius: { xs: '6px', '3xl': '8px', '4k': '10px' },
              fontSize: { xs: '0.75rem', sm: '0.8rem', '3xl': '1rem', '4k': '1.5rem' },
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: { xs: '4px', '3xl': '6px', '4k': '8px' },
            }}
          >
            ⭐ {item.rating}
          </Box>
        )}
      </Box>

      {/* Content Section */}
      <Box sx={{ p: { xs: '20px', sm: '24px', '3xl': '32px', '4k': '48px' } }}>
        {/* Posted Date */}
        <Typography
          sx={{
            fontSize: { xs: '0.75rem', sm: '0.8rem', '3xl': '1rem', '4k': '1.5rem' },
            color: '#94a3b8',
            mb: { xs: '16px', sm: '18px', '3xl': '24px', '4k': '32px' },
            fontWeight: 500,
          }}
        >
          {texts.postedDate}: {item.startDate}
        </Typography>

        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: '1.125rem', sm: '1.2rem', '3xl': '1.5rem', '4k': '2.25rem' },
            fontWeight: 700,
            color: '#1e293b',
            mb: { xs: '20px', sm: '22px', '3xl': '28px', '4k': '40px' },
            lineHeight: 1.3,
          }}
        >
          {item.title}
        </Typography>

        {/* Icon Details */}
        <Box sx={{ mb: { xs: '24px', sm: '26px', '3xl': '32px', '4k': '48px' }, display: 'flex', flexDirection: 'column', gap: { xs: '8px', '3xl': '12px', '4k': '16px' } }}>
          {/* Location with Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', '3xl': '12px', '4k': '16px' } }}>
            <Box
              component="img"
              src="/location.svg"
              alt="location"
              sx={{ width: { xs: '16px', '3xl': '20px', '4k': '28px' }, height: { xs: '16px', '3xl': '20px', '4k': '28px' } }}
            />
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', sm: '0.95rem', '3xl': '1.15rem', '4k': '1.75rem' },
                color: '#64748b',
                fontWeight: 500,
              }}
            >
              {item.location}
            </Typography>
          </Box>

          {/* Date with Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', '3xl': '12px', '4k': '16px' } }}>
            <Box
              component="img"
              src="/time.svg"
              alt="time"
              sx={{ width: { xs: '16px', '3xl': '20px', '4k': '28px' }, height: { xs: '16px', '3xl': '20px', '4k': '28px' } }}
            />
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', sm: '0.95rem', '3xl': '1.15rem', '4k': '1.75rem' },
                color: '#64748b',
                fontWeight: 500,
              }}
            >
              {item.startDate}
            </Typography>
          </Box>

          {/* Inquiries with Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', '3xl': '12px', '4k': '16px' } }}>
            <Box
              component="img"
              src="/peoples.svg"
              alt="people"
              sx={{ width: { xs: '16px', '3xl': '20px', '4k': '28px' }, height: { xs: '16px', '3xl': '20px', '4k': '28px' } }}
            />
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', sm: '0.95rem', '3xl': '1.15rem', '4k': '1.75rem' },
                color: '#64748b',
                fontWeight: 500,
              }}
        >
          {item.inquiries}
          {texts.bookedSuffix}
        </Typography>
          </Box>
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '16px', sm: '18px', '3xl': '24px', '4k': '32px' },
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            endIcon={
              <Box component="span" sx={{ fontSize: { xs: '1.2rem', '3xl': '1.5rem', '4k': '2rem' } }}>
                →
              </Box>
            }
            sx={{
              py: { xs: '12px', sm: '14px', '3xl': '18px', '4k': '24px' },
              fontSize: { xs: '0.95rem', sm: '1rem', '3xl': '1.2rem', '4k': '1.75rem' },
              fontWeight: 600,
              textTransform: 'none',
              borderColor: '#cbd5e1',
              color: '#1e293b',
              backgroundColor: 'white',
              border: '2px solid #cbd5e1',
              borderRadius: { xs: '10px', '3xl': '12px', '4k': '16px' },
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
              <Box component="span" sx={{ fontSize: { xs: '1.2rem', '3xl': '1.5rem', '4k': '2rem' } }}>
                →
              </Box>
            }
            sx={{
              py: { xs: '12px', sm: '14px', '3xl': '18px', '4k': '24px' },
              fontSize: { xs: '0.95rem', sm: '1rem', '3xl': '1.2rem', '4k': '1.75rem' },
              fontWeight: 600,
              textTransform: 'none',
              backgroundColor: '#1e293b',
              color: 'white',
              borderRadius: { xs: '10px', '3xl': '12px', '4k': '16px' },
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

export default HousingCarousel;