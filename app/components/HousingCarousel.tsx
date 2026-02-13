'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { alpha } from '@mui/material/styles';
import { Icon } from '@iconify/react';

const slideUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled(Card)({
  animation: `${slideUpAnimation} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
  opacity: 0,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
    transform: 'translateY(-8px)',
  },
});

export const HousingCarousel: React.FC = () => {
  // Define type for service

  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const housingServices = [
    {
      id: 'short-rental',
      title: isSv ? 'Korttidsuthyrning' : 'Short Term Rental',
      badge: isSv ? '221 visningar' : '221 Views',
      rating: '4.9',
      icon: '/h1.svg',
      info: [
        {
          icon: <Box component="span" sx={{ color: 'error.main', fontSize: '16px' }}><Icon icon="mingcute:location-fill" /></Box>, 
          label: isSv ? 'Korta vistelser, lång komfort' : 'Short Stays, Long Comfort',
        }
      ],
      primaryAction: {
        label: isSv ? 'Boka nu' : 'Reserve Now',
        href: '#',
      },
      secondaryAction: {
        label: isSv ? 'Bli värd' : 'Become A Host',
        href: '#',
      },
    },
    {
      id: 'long-rental',
      title: isSv ? 'Långtidsuthyrning' : 'Long Term Rental',
      badge: isSv ? '153 intresserade' : '153 Interested',
      icon: '/h2.svg',
      info: [
        {
          icon: <Box component="span" sx={{ color: 'error.main', fontSize: '16px' }}><Icon icon="mingcute:location-fill" /></Box>, 
          label: isSv ? 'Långsiktigt boende gjort enkelt' : 'Long-Term Housing Made Effortless',
        }
      ],
      primaryAction: {
        label: isSv ? 'Hyra nu' : 'Rent Now',
        href: '#',
      },
      secondaryAction: {
        label: isSv ? 'Uthyr din bostad' : 'Sublet Your Property',
        href: '#',
      },
    },
    {
      id: 'buy-property',
      title: isSv ? 'Köp - Sälj bostad' : 'Buy - Sell Property',
      badge: isSv ? '202 besökare' : '202 Visitors',
      icon: '/h3.svg',
      info: [
        {
          icon: <Box component="span" sx={{ color: 'error.main', fontSize: '16px' }}><Icon icon="mingcute:location-fill" /></Box>, 
          label: isSv ? 'Köp, sälj & bolånestöd' : 'Buy-Sell & Mortgage Support',
        }
      ],
      primaryAction: {
        label: isSv ? 'Köp nu' : 'Buy Now',
        href: '#',
      },
      secondaryAction: {
        label: isSv ? 'Sälj din bostad' : 'Sell Your Property',
        href: '#',
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const extendedServices = [...housingServices, ...housingServices, ...housingServices];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= housingServices.length * 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(housingServices.length);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 700);
          return next;
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [housingServices.length]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <Box sx={{ py: { xs: 6, sm: 8, lg: 10, xl: 12 }, backgroundColor: '#EBF4FF' }}>
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        <Box sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center', mb: { xs: 6, sm: 8, lg: 10 } }}>
          <Typography sx={{ color: '#60a5fa', fontWeight: 500, fontSize: '0.9rem', mb: 1, letterSpacing: 0.5 }}>
            {isSv ? 'Trygga bostadslösningar, levererade i tid' : 'Housing Solutions You Can Trust, Delivered on Time'}
          </Typography>
          <Typography sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '2.5rem' }, mb: 0.5, lineHeight: 1.1 }}>
            {isSv ? 'Helhetslösningar för ' : 'End-to-End '}
            <Box component="span" sx={{ color: '#3b82f6', fontWeight: 900 }}>
              {isSv ? 'bostad & fastigheter' : 'Housing & Real Estate'}
            </Box>{' '}
            {isSv ? 'stöd' : 'Support'}
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', mx: { xs: 4, sm: 6, md: 8 } }}>
          <IconButton onClick={handlePrev} sx={{ position: 'absolute', top: '50%', left: { xs: -40, sm: -48, md: -56 }, transform: 'translateY(-50%)', zIndex: 10, bgcolor: '#000000', color: 'white', width: { xs: 32, sm: 36, md: 40 }, height: { xs: 32, sm: 36, md: 40 }, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', '&:hover': { bgcolor: '#1e293b' } }}><ArrowBackIcon sx={{ fontSize: { xs: 18, sm: 20 } }} /></IconButton>
          <IconButton onClick={handleNext} sx={{ position: 'absolute', top: '50%', right: { xs: -40, sm: -48, md: -56 }, transform: 'translateY(-50%)', zIndex: 10, bgcolor: '#000000', color: 'white', width: { xs: 32, sm: 36, md: 40 }, height: { xs: 32, sm: 36, md: 40 }, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', '&:hover': { bgcolor: '#1e293b' } }}><ArrowForwardIcon sx={{ fontSize: { xs: 18, sm: 20 } }} /></IconButton>
          <Box sx={{ overflow: 'hidden', width: '100%' }}>
            <Box sx={{ display: 'flex', transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none', transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
              {extendedServices.map((service, idx) => (
                <Box key={`${service.id}-${idx}`} sx={{ minWidth: 'calc(100% / 3)', px: { xs: 1.5, sm: 2, md: 2.5 } }}>
                  <AnimatedCard 
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      minHeight: 450,
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      borderRadius: 2.5,
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 3,
                      },
                    }}>
                    <Box sx={{ p: 1 }}>
                      <Box 
                        sx={{ 
                          position: 'relative',
                          height: 200,
                          borderRadius: 2,
                          bgcolor: '#ECEDEE',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          sx={{
                            top: 8,
                            left: 8,
                            zIndex: 9,
                            display: 'flex',
                            borderRadius: 1.5,
                            bgcolor: '#2c3e50',
                            alignItems: 'center',
                            position: 'absolute',
                            px: 1.5,
                            py: 0.5,
                            color: 'common.white',
                            typography: 'subtitle2',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                          }}
                        >
                          {service.badge}
                        </Box>
                        {(service.id === 'short-rental' && service.rating) && (
                          <Box
                            sx={{
                              top: 8,
                              right: 8,
                              zIndex: 9,
                              display: 'flex',
                              borderRadius: 1.5,
                              alignItems: 'center',
                              position: 'absolute',
                              px: 1,
                              py: 0.5,
                              typography: 'subtitle2',
                              bgcolor: '#fef3c7',
                              color: '#78350f',
                              fontWeight: 600,
                              fontSize: '0.875rem',
                            }}
                          >
                            <Box component="span" sx={{ color: '#fbbf24', mr: 0.5, display: 'flex', alignItems: 'center' }}><Icon icon="eva:star-fill" width="16" height="16" /></Box> 
                            {service.rating}
                          </Box>
                        )}
                        
                        <Box
                          sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {service.icon && (
                            <Box
                              component="img"
                              src={service.icon}
                              alt={service.title}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                    </Box>
                    <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 }, flex: 1, backgroundColor: '#ffffff' }}>
                      <Box
                        sx={{
                          px: 2.5,
                          pt: 1,
                          pb: 1.5,
                          minHeight: 60,
                        }}
                      >
                        <Box
                          component={'div'}
                          sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            lineHeight: 1.4,
                            minHeight: 38,
                            typography: 'subtitle1',
                            fontWeight: 600,
                            cursor: service.primaryAction?.href ? 'pointer' : 'default',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': service.primaryAction?.href ? {
                              opacity: 0.8,
                            } : {},
                            py: 1,
                            px: 2,
                            backgroundColor: service.title.includes(isSv ? 'Korttidsuthyrning' : 'Short Term Rental') ? '#d1fae5' : 
                                            service.title.includes(isSv ? 'Långtidsuthyrning' : 'Long Term Rental') ? '#fef3c7' : 
                                            service.title.includes(isSv ? 'Köp - Sälj bostad' : 'Buy - Sell Property') ? '#cffafe' : 'transparent',
                            color: service.title.includes(isSv ? 'Korttidsuthyrning' : 'Short Term Rental') ? '#065f46' : 
                                   service.title.includes(isSv ? 'Långtidsuthyrning' : 'Long Term Rental') ? '#78350f' : 
                                   service.title.includes(isSv ? 'Köp - Sälj bostad' : 'Buy - Sell Property') ? '#155e75' : 'inherit',
                            borderRadius: 1.5,
                          }}
                        >
                          {service.title}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          px: 2.5,
                          py: 1.5,
                          minHeight: 44,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1,
                        }}
                      >
                        {service.info?.map((item, index) => (
                          <Box
                            key={index}
                            sx={{
                              gap: 1,
                              display: 'flex',
                              alignItems: 'center',
                              typography: 'body2',
                              color: 'text.secondary',
                              minHeight: 24,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {item.icon}
                            <Box component="span" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {item.label}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                      <Box
                        sx={{
                          px: 2.5,
                          pb: 2.5,
                          pt: 1,
                          gap: 1.5,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          minHeight: 110,
                        }}
                      >
                        {service.primaryAction && (
                          <Button
                            component={service.primaryAction.href ? 'a' : 'button'}
                            href={service.primaryAction.href}
                            variant="outlined"
                            color="inherit"
                            size="medium"
                            fullWidth
                            endIcon={<Icon icon="eva:arrow-ios-forward-fill" />}
                            sx={{ 
                              borderRadius: 1.5,
                              textTransform: 'none',
                              fontWeight: 600,
                              height: 40,
                              borderColor: 'divider',
                              color: 'text.primary',
                              '&:hover': {
                                borderColor: 'text.primary',
                                bgcolor: alpha('#000', 0.04),
                              }
                            }}
                          >
                            {service.primaryAction.label}
                          </Button>
                        )}
                        
                        {service.secondaryAction && (
                          <Button
                            component={service.secondaryAction.href ? 'a' : 'button'}
                            href={service.secondaryAction.href}
                            variant="contained"
                            color="inherit"
                            size="medium"
                            fullWidth
                            endIcon={<Icon icon="eva:arrow-ios-forward-fill" />}
                            sx={{ 
                              borderRadius: 1.5,
                              textTransform: 'none',
                              fontWeight: 600,
                              height: 40,
                              bgcolor: '#1e293b',
                              color: 'common.white',
                              '&:hover': {
                                bgcolor: '#334155',
                              }
                            }}
                          >
                            {service.secondaryAction.label}
                          </Button>
                        )}
                      </Box>
                    </CardContent>
                  </AnimatedCard>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default HousingCarousel;