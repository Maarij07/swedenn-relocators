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
      headingBg: '#a5f3fc',
      headingColor: '#155e75',
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
                  <AnimatedCard sx={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb', borderRadius: '20px', backgroundColor: '#ffffff', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ width: '100%', height: { xs: '200px', sm: '220px', md: '240px' }, backgroundColor: '#F3F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px 20px 0 0', position: 'relative', p: { xs: 2.5, sm: 3, md: 3 } }}>
                      <Chip label={service.badge} sx={{ position: 'absolute', top: 16, left: 16, background: '#1f2937', color: '#fff', fontWeight: 600, fontSize: '0.75rem', height: 28, borderRadius: 2, zIndex: 2 }} />
                      {service.rating && (
                        <Box sx={{ position: 'absolute', top: 16, right: 16, background: '#fbbf24', color: '#fff', px: 1.5, py: 0.3, height: 28, borderRadius: 2, fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 0.3, zIndex: 2 }}>
                          ★ {service.rating}
                        </Box>
                      )}
                      <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </Box>
                    </Box>
                    <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 }, flex: 1, backgroundColor: '#ffffff' }}>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ background: service.headingBg, color: service.headingColor, fontWeight: 700, fontSize: '1rem', px: 2.5, py: 1, borderRadius: 2, textAlign: 'center', width: '100%' }}>
                          {service.title}
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Box component="img" src={service.locationIcon} alt="location" sx={{ width: 16, height: 16 }} />
                        <Typography sx={{ fontSize: '0.85rem', color: '#ef4444', fontWeight: 500 }}>{service.info}</Typography>
                      </Box>
                      <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Button variant="outlined" fullWidth sx={{ background: '#fff', color: '#374151', fontWeight: 600, borderRadius: 2.5, border: 'none', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', py: 1.2, fontSize: '0.9rem', textTransform: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, '&:hover': { background: '#f9fafb', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' } }}>
                          {service.primaryAction}
                          <span style={{ fontSize: '1.2rem', marginLeft: '4px' }}>›</span>
                        </Button>
                        <Button variant="contained" fullWidth sx={{ background: '#1f2937', color: '#fff', fontWeight: 600, borderRadius: 2.5, py: 1.2, fontSize: '0.9rem', boxShadow: 'none', textTransform: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, '&:hover': { background: '#374151', boxShadow: 'none' } }}>
                          {service.secondaryAction}
                          <span style={{ fontSize: '1.2rem', marginLeft: '4px' }}>›</span>
                        </Button>
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