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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Offer {
  id: string;
  title: string;
  description: string;
  price: string;
  days: string;
  image: string;
  count: number;
}

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

export default function Offers() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const texts = {
    eyebrow: isSv ? 'Från det att du anländer tills du reser hem' : 'From the moment you arrive until the time you leave',
    heading: isSv ? 'Viktiga tjänster för alla' : 'Essential Services for Both',
    subheading: isSv ? 'För privatpersoner och företag' : 'Individuals and Businesses',
    handlingFee: isSv ? '/ serviceavgift' : '/ handling fee',
    sendRequest: isSv ? 'Skicka förfrågan' : 'Send Request',
  };

  const offers: Offer[] = isSv
    ? [
      { id: 'au-pair', title: 'Au pair-tjänster', description: 'Hitta rätt au pair utifrån din familjs behov', price: '€49', days: '1–14 dagar', image: '/s1.svg', count: 17 },
      { id: 'departure', title: 'Avresetjänster', description: 'Fullständig hjälp på flygplatsen vid avresa', price: '€49', days: '1–14 dagar', image: '/s2.svg', count: 15 },
      { id: 'entrepreneur', title: 'Resurser för entreprenörer', description: 'Stöd för företagsstart och entreprenörskapstjänster anpassade för Sverige', price: '€49', days: '1–14 dagar', image: '/s3.svg', count: 18 },
      { id: 'health-insurance', title: 'Sjukförsäkringstjänster', description: 'Kompletta sjukförsäkringslösningar och medicinskt skydd för din flytt till Sverige', price: '€49', days: '1–14 dagar', image: '/s4.svg', count: 13 },
      { id: 'host-family', title: 'Värdfamiljstjänster', description: 'Vi matchar dig med verifierade värdfamiljer för ett tryggt och bekvämt boende i Sverige', price: '€49', days: '1–14 dagar', image: '/s5.svg', count: 19 },
      { id: 'pet-relocation', title: 'Hjälp med husdjursflytt', description: 'Personligt anpassat stöd för att flytta dina husdjur på ett tryggt sätt', price: '€49', days: '1–14 dagar', image: '/s6.svg', count: 27 },
      { id: 'financial', title: 'Ekonomihantering vid relocation', description: 'Fullständig ekonomihantering för hela din flyttresa till Sverige', price: '€49', days: '1–14 dagar', image: '/s7.svg', count: 24 },
      { id: 'arrival', title: 'Ankomsttjänster', description: 'Fullständig hjälp på flygplatsen vid ankomst', price: '€49', days: '1–14 dagar', image: '/s2.svg', count: 13 },
      { id: 'tax-services', title: 'Investeringstjänster', description: 'Rådgivning kring investeringar och finansiell planering för boende i Sverige', price: '€49', days: '1–14 dagar', image: '/s9.svg', count: 22 },
      { id: 'legal-support', title: 'Juristkontakt', description: 'Tillgång till kvalificerade svenska jurister för juridisk rådgivning och dokumentation', price: '€49', days: '1–14 dagar', image: '/s10.svg', count: 16 },
      { id: 'integration', title: 'Logistiklösning', description: 'Helhetslösningar för logistik och transporter kopplade till din flytt', price: '€49', days: '1–14 dagar', image: '/s11.svg', count: 21 },
    ]
    : [
      { id: 'au-pair', title: 'Au Pair Services', description: "Find the right au pair for your family's needs", price: '€49', days: '1-14 days', image: '/s1.svg', count: 17 },
      { id: 'departure', title: 'Departure Services', description: 'Comprehensive airport assistance upon departure', price: '€49', days: '1-14 days', image: '/s2.svg', count: 15 },
      { id: 'entrepreneur', title: 'Entrepreneur Resources', description: 'Comprehensive business setup and entrepreneurial support services for Sweden', price: '€49', days: '1-14 days', image: '/s3.svg', count: 18 },
      { id: 'health-insurance', title: 'Health Insurance Services', description: 'Complete health insurance solutions and medical coverage for your Sweden relocation', price: '€49', days: '1-14 days', image: '/s4.svg', count: 13 },
      { id: 'host-family', title: 'Host Family Services', description: 'Connecting you with verified host families for comfortable accommodation in Sweden', price: '€49', days: '1-14 days', image: '/s5.svg', count: 19 },
      { id: 'pet-relocation', title: 'Pet Relocation Support', description: "Personalized pet relocation support services tailored to your furry friends needs", price: '€49', days: '1-14 days', image: '/s6.svg', count: 27 },
      { id: 'financial', title: 'Relocation Financial Management', description: 'Complete financial management services for your Sweden relocation journey', price: '€49', days: '1-14 days', image: '/s7.svg', count: 24 },
      { id: 'arrival', title: 'Arrival Services', description: 'Comprehensive airport assistance upon arrival', price: '€49', days: '1-14 days', image: '/s2.svg', count: 13 },
      { id: 'tax-services', title: 'Investment Services', description: 'Expert investment guidance and financial planning services for Sweden residents', price: '€49', days: '1-14 days', image: '/s9.svg', count: 22 },
      { id: 'legal-support', title: 'Lawyer Connect', description: 'Access to qualified Swedish lawyers for legal advice and documentation support', price: '€49', days: '1-14 days', image: '/s10.svg', count: 16 },
      { id: 'integration', title: 'Logistics Solution', description: 'Comprehensive logistics and transportation services for your relocation needs', price: '€49', days: '1-14 days', image: '/s11.svg', count: 21 },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const extendedOffers = [...offers, ...offers, ...offers];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= offers.length * 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(offers.length);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 700);
          return next;
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [offers.length]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <Box component="section" sx={{ py: { xs: 6, sm: 8, lg: 10, xl: 12 }, backgroundColor: '#ffffff' }}>
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        <Box sx={{ mb: { xs: 6, sm: 8, lg: 10 }, position: 'relative' }}>
          <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', lg: '1rem', '4k': '1.25rem' }, color: '#3b82f6', fontWeight: 600, mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{texts.eyebrow}</Typography>
          <Typography sx={{ fontSize: { xs: '1.5rem', sm: '2rem', lg: '2.25rem', '4k': '3.5rem' }, fontWeight: 800, mb: 0.5, color: '#000000', textAlign: 'center', lineHeight: 1.2 }}>{texts.heading}</Typography>
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.75rem', lg: '2rem', '4k': '3rem' }, fontWeight: 700, color: '#3b82f6', textAlign: 'center' }}>{texts.subheading}</Typography>
        </Box>
        <Box sx={{ position: 'relative', mx: { xs: 4, sm: 6, md: 8 } }}>
          <IconButton onClick={handlePrev} sx={{ position: 'absolute', top: '50%', left: { xs: -40, sm: -48, md: -56 }, transform: 'translateY(-50%)', zIndex: 10, bgcolor: '#000000', color: 'white', width: { xs: 32, sm: 36, md: 40 }, height: { xs: 32, sm: 36, md: 40 }, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', '&:hover': { bgcolor: '#1e293b' } }}><ArrowBackIcon sx={{ fontSize: { xs: 18, sm: 20 } }} /></IconButton>
          <IconButton onClick={handleNext} sx={{ position: 'absolute', top: '50%', right: { xs: -40, sm: -48, md: -56 }, transform: 'translateY(-50%)', zIndex: 10, bgcolor: '#000000', color: 'white', width: { xs: 32, sm: 36, md: 40 }, height: { xs: 32, sm: 36, md: 40 }, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', '&:hover': { bgcolor: '#1e293b' } }}><ArrowForwardIcon sx={{ fontSize: { xs: 18, sm: 20 } }} /></IconButton>
          <Box sx={{ overflow: 'hidden', width: '100%' }}>
            <Box sx={{ display: 'flex', transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none', transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
              {extendedOffers.map((offer, idx) => (
                <Box key={`${offer.id}-${idx}`} sx={{ minWidth: 'calc(100% / 3)', px: { xs: 1.5, sm: 2, md: 2.5 } }}>
                  <AnimatedCard sx={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)', border: 'none', borderRadius: '20px', backgroundColor: '#ffffff', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ width: '100%', height: { xs: '200px', sm: '220px', md: '240px' }, backgroundColor: '#F3F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px 20px 0 0', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}>
                      <Box sx={{ width: '80%', height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={offer.image} alt={offer.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </Box>
                    </Box>
                    <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 }, flex: 1, backgroundColor: '#ffffff' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, fontSize: '0.8rem', color: '#6B7280', fontWeight: 500 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}><img src="/watch.svg" alt="Duration" style={{ width: '15px', height: '15px', opacity: 0.6 }} /><span>{offer.days}</span></Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}><img src="/people.svg" alt="People" style={{ width: '15px', height: '15px', opacity: 0.6 }} /><span>{offer.count}</span></Box>
                      </Box>
                      <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' }, fontWeight: 700, color: '#1F2937', lineHeight: 1.4, minHeight: '2.8em', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>{offer.title}</Typography>
                      <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' }, color: '#6B7280', lineHeight: 1.6, flex: 1, fontWeight: 400, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>{offer.description}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, pt: 2, mt: 'auto' }}>
                        <Typography sx={{ fontSize: { xs: '1.35rem', sm: '1.45rem' }, fontWeight: 700, color: '#1F2937', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>{offer.price}<Typography component="span" sx={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 500, ml: 0.75 }}>{texts.handlingFee}</Typography></Typography>
                        <Button sx={{ px: { xs: 2, sm: 2.5 }, py: { xs: 1, sm: 1.25 }, fontSize: { xs: '0.8rem', sm: '0.85rem' }, fontWeight: 600, textTransform: 'none', background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)', color: '#ffffff', borderRadius: '12px', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(31, 41, 55, 0.2)', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', '&:hover': { background: 'linear-gradient(135deg, #111827 0%, #000000 100%)', boxShadow: '0 6px 16px rgba(31, 41, 55, 0.3)' } }}>{texts.sendRequest}</Button>
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
}