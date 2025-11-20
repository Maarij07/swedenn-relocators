'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';

type ScrollDirection = 'left' | 'right';

function useCarousel({ autoPlay = true, autoPlayInterval = 3000 } = {}) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const checkScroll = useCallback(() => {
    const element = carouselRef.current;
    if (!element) return;

    const scrollLeft = element.scrollLeft || 0;
    const scrollWidth = element.scrollWidth || 0;
    const clientWidth = element.clientWidth || 0;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  const onScroll = useCallback(() => {
    checkScroll();
  }, [checkScroll]);

  const scroll = useCallback((direction: ScrollDirection) => {
    const element = carouselRef.current;
    if (!element) return;

    const clientWidth = element.clientWidth || 0;
    const scrollLeft = element.scrollLeft || 0;
    const scrollAmount = clientWidth * 0.8;
    const newScrollLeft = direction === 'left'
      ? scrollLeft - scrollAmount
      : scrollLeft + scrollAmount;

    element.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    checkScroll();
    const element = carouselRef.current;
    if (element) {
      element.addEventListener('scroll', onScroll);
      return () => element.removeEventListener('scroll', onScroll);
    }
  }, [checkScroll, onScroll]);

  useEffect(() => {
    if (!autoPlay || isHovering) return;

    const interval = setInterval(() => {
      if (canScrollRight) {
        scroll('right');
      } else {
        // Reset to start for infinite loop
        const element = carouselRef.current;
        if (element) {
          element.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, canScrollRight, scroll, isHovering]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return {
    carouselRef,
    canScrollLeft,
    canScrollRight,
    onScroll,
    scroll,
    handleMouseEnter,
    handleMouseLeave,
  };
}

export const HousingCarousel: React.FC = () => {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const housingServices = [
    {
      id: 'short-rental',
      title: isSv ? 'Korttidsuthyrning' : 'Short Term Rental',
      badge: isSv ? '221 visningar' : '221 Views',
      rating: 4.9,
      image: '/h1.svg',
      info: isSv ? 'Korta vistelser, lång komfort' : 'Short Stays, Long Comfort',
      primaryAction: isSv ? 'Boka nu' : 'Reserve Now',
      secondaryAction: isSv ? 'Bli värd' : 'Become A Host',
      locationIcon: '/location1.svg',
      cardColor: '#f0fdf4',
      headingBg: '#bbf7d0',
      headingColor: '#166534',
    },
    {
      id: 'long-rental',
      title: isSv ? 'Långtidsuthyrning' : 'Long Term Rental',
      badge: isSv ? '153 intresserade' : '153 Interested',
      image: '/h2.svg',
      info: isSv ? 'Långsiktigt boende gjort enkelt' : 'Long-Term Housing Made Effortless',
      primaryAction: isSv ? 'Hyra nu' : 'Rent Now',
      secondaryAction: isSv ? 'Uthyr din bostad' : 'Sublet Your Property',
      locationIcon: '/location1.svg',
      cardColor: '#fefce8',
      headingBg: '#fef08a',
      headingColor: '#854d0e',
    },
    {
      id: 'buy-property',
      title: isSv ? 'Köp - Sälj bostad' : 'Buy - Sell Property',
      badge: isSv ? '202 besökare' : '202 Visitors',
      image: '/h3.svg',
      info: isSv ? 'Köp, sälj & bolånestöd' : 'Buy-Sell & Mortgage Support',
      primaryAction: isSv ? 'Köp nu' : 'Buy Now',
      secondaryAction: isSv ? 'Sälj din bostad' : 'Sell Your Property',
      locationIcon: '/location1.svg',
      cardColor: '#ecfeff',
      headingBg: '#a5f3fc',
      headingColor: '#155e75',
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: '#EBF4FF' }}>
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Heading Section */}
        <Box sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center', mb: 5 }}>
          <Typography sx={{ color: '#60a5fa', fontWeight: 500, fontSize: '0.9rem', mb: 1, letterSpacing: 0.5 }}>
            {isSv
              ? 'Trygga bostadslösningar, levererade i tid'
              : 'Housing Solutions You Can Trust, Delivered on Time'}
          </Typography>
          <Typography sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '2.5rem' }, mb: 0.5, lineHeight: 1.1 }}>
            {isSv ? 'Helhetslösningar för ' : 'End-to-End '}
            <Box component="span" sx={{ color: '#3b82f6', fontWeight: 900 }}>
              {isSv ? 'bostad & fastigheter' : 'Housing & Real Estate'}
            </Box>{' '}
            {isSv ? 'stöd' : 'Support'}
          </Typography>
        </Box>

        {/* Cards grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 3 }}>
          {housingServices.map((service) => (
            <Card
              key={service.id}
              sx={{
                borderRadius: 4,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: 'none',
                backgroundColor: service.cardColor,
                p: 0,
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Top section with badge, rating, and image */}
              <Box sx={{ 
                width: '100%', 
                pt: 2, 
                pb: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                position: 'relative',
                background: service.cardColor,
              }}>
                {/* Badge */}
                <Chip 
                  label={service.badge} 
                  sx={{ 
                    position: 'absolute', 
                    top: 16, 
                    left: 16, 
                    background: '#1f2937', 
                    color: '#fff', 
                    fontWeight: 600, 
                    fontSize: '0.8rem', 
                    height: 28,
                    borderRadius: 2,
                  }} 
                />
                
                {/* Rating */}
                {service.rating && (
                  <Box sx={{ 
                    position: 'absolute', 
                    top: 16, 
                    right: 16, 
                    background: '#fbbf24', 
                    color: '#fff', 
                    px: 1.5, 
                    py: 0.3,
                    height: 28,
                    borderRadius: 2, 
                    fontWeight: 700, 
                    fontSize: '0.85rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 0.3,
                  }}>
                    ★ {service.rating}
                  </Box>
                )}
                
                {/* Image */}
                <Box 
                  component="img" 
                  src={service.image} 
                  alt={service.title} 
                  sx={{ 
                    width: 200, 
                    height: 160, 
                    objectFit: 'contain',
                    mb: 2,
                    mt: 4,
                  }} 
                />
              </Box>

              {/* Heading with colored background */}
              <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center',
                px: 3,
                mb: 2,
              }}>
                <Box sx={{
                  background: service.headingBg,
                  color: service.headingColor,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  textAlign: 'center',
                  width: '100%',
                }}>
                  {service.title}
                </Box>
              </Box>
              
              {/* Card content */}
              <Box sx={{ 
                px: 3, 
                pb: 3,
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column',
                background: service.cardColor,
              }}>
                {/* Info with location icon */}
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box 
                      component="img" 
                      src={service.locationIcon} 
                      alt="location" 
                      sx={{ width: 16, height: 16 }} 
                    />
                    <Typography sx={{ 
                      fontSize: '0.9rem', 
                      color: '#ef4444', 
                      fontWeight: 500 
                    }}>
                      {service.info}
                    </Typography>
                  </Box>
                </Box>
                
                {/* Buttons */}
                <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {/* Primary Action - White button with arrow */}
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{
                      background: '#fff',
                      color: '#374151',
                      fontWeight: 600,
                      borderRadius: 2.5,
                      border: 'none',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                      py: 1.3,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.5,
                      '&:hover': {
                        background: '#f9fafb',
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    {service.primaryAction}
                    <span style={{ fontSize: '1.2rem', marginLeft: '4px' }}>›</span>
                  </Button>
                  
                  {/* Secondary Action - Dark button with arrow */}
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{
                      background: '#1f2937',
                      color: '#fff',
                      fontWeight: 600,
                      borderRadius: 2.5,
                      py: 1.3,
                      fontSize: '0.95rem',
                      boxShadow: 'none',
                      textTransform: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.5,
                      '&:hover': {
                        background: '#374151',
                        boxShadow: 'none',
                      },
                    }}
                  >
                    {service.secondaryAction}
                    <span style={{ fontSize: '1.2rem', marginLeft: '4px' }}>›</span>
                  </Button>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </div>
    </Box>
  );
};

export default HousingCarousel;