'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NewInSwedenPage() {
  const { t, i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsInitialized(true);
    }
  }, [i18n.isInitialized]);

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  const content = t('newInSweden', { returnObjects: true });
  const categories = Array.isArray(content?.authorityCategories) ? content.authorityCategories : [];
  const guides = Array.isArray(content?.gettingStarted?.guides) ? content.gettingStarted.guides : [];
  const emergencyNumbers = Array.isArray(content?.emergencyNumbers?.numbers) ? content.emergencyNumbers.numbers : [];

  return (
    <Box sx={{ minHeight: '100vh', bg: '#FFFFFF' }}>
      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-24">
        <Typography sx={{ fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 600, mb: 6, color: '#1A1A1A', lineHeight: 1.2 }}>
          {content.hero?.title}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem', lg: '1.5rem', '4k': '2rem' }, fontWeight: 400, color: '#666666', lineHeight: 1.8, maxWidth: '720px' }}>
          {content.hero?.subtitle}
        </Typography>
      </div>

      {/* Intro Section */}
      <div style={{ paddingTop: '48px', paddingBottom: '48px', borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5' }}>
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 600, mb: 6, color: '#1A1A1A' }}>
            {content.intro?.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.1875rem', '4k': '1.5rem' }, color: '#666666', lineHeight: 1.8, maxWidth: '720px' }}>
            {content.intro?.description}
          </Typography>
        </div>
      </div>

      {/* Authority Categories */}
      <div style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 600, mb: 16, color: '#1A1A1A' }}>
            Swedish Government Authorities
          </Typography>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {categories?.map((category, idx) => (
              <div key={idx}>
                <Typography sx={{ fontSize: { xs: '1.375rem', sm: '1.5rem', lg: '1.75rem', '4k': '2.5rem' }, fontWeight: 600, mb: 8, color: '#1A1A1A' }}>
                  {category.title}
                </Typography>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {category.authorities?.map((auth, authIdx) => (
                    <div key={authIdx} style={{ paddingBottom: '32px', borderBottom: authIdx === category.authorities.length - 1 ? 'none' : '1px solid #E5E5E5' }}>
                      <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.1875rem', '4k': '1.5rem' }, fontWeight: 600, mb: 4, color: '#1A1A1A' }}>
                        {auth.name}
                      </Typography>
                      <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', lg: '1.1875rem', '4k': '1.5rem' }, color: '#666666', lineHeight: 1.8, maxWidth: '720px' }}>
                        {auth.description}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div style={{ paddingTop: '48px', paddingBottom: '48px', background: '#FAFAFA', borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5' }}>
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 600, mb: 16, color: '#1A1A1A' }}>
            {content.gettingStarted?.heading}
          </Typography>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            {guides?.map((guide, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.1875rem', '4k': '1.5rem' }, fontWeight: 600, color: '#1A1A1A' }}>
                  {guide.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.0625rem', lg: '1.1875rem', '4k': '1.5rem' }, color: '#666666', lineHeight: 1.8 }}>
                  {guide.description}
                </Typography>

                {guide.details && (
                  <Box sx={{ background: '#FFFFFF', border: '1px solid #E5E5E5', borderRadius: '2px', padding: '24px', marginTop: '12px' }}>
                    {guide.details.handled && (
                      <Box sx={{ marginBottom: '16px' }}>
                        <Typography sx={{ fontSize: { xs: '0.75rem', lg: '0.8125rem', '4k': '1rem' }, color: '#999999', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                          Handled By
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.9375rem', lg: '1rem', '4k': '1.1875rem' }, color: '#1A1A1A', fontWeight: 500 }}>
                          {guide.details.handled}
                        </Typography>
                      </Box>
                    )}
                    {guide.details.requirements && (
                      <Box sx={{ marginBottom: '16px' }}>
                        <Typography sx={{ fontSize: { xs: '0.75rem', lg: '0.8125rem', '4k': '1rem' }, color: '#999999', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                          Requirements
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.9375rem', lg: '1rem', '4k': '1.1875rem' }, color: '#1A1A1A', fontWeight: 500 }}>
                          {guide.details.requirements}
                        </Typography>
                      </Box>
                    )}
                    {guide.details.features && (
                      <Box sx={{ marginBottom: '16px' }}>
                        <Typography sx={{ fontSize: { xs: '0.75rem', lg: '0.8125rem', '4k': '1rem' }, color: '#999999', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                          What You Get
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.9375rem', lg: '1rem', '4k': '1.1875rem' }, color: '#1A1A1A', fontWeight: 500 }}>
                          {guide.details.features}
                        </Typography>
                      </Box>
                    )}
                    {guide.details.tips && (
                      <Box>
                        <Typography sx={{ fontSize: { xs: '0.75rem', lg: '0.8125rem', '4k': '1rem' }, color: '#999999', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                          Pro Tip
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.9375rem', lg: '1rem', '4k': '1.1875rem' }, color: '#1A1A1A', fontWeight: 500 }}>
                          {guide.details.tips}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Numbers Section */}
      <div style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 600, mb: 16, color: '#1A1A1A' }}>
            {content.emergencyNumbers?.heading}
          </Typography>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px' }}>
            {emergencyNumbers?.map((emergency, idx) => (
              <div key={idx}>
                <Typography sx={{ fontSize: { xs: '2rem', sm: '2.25rem', lg: '2.5rem', '4k': '3rem' }, fontWeight: 700, mb: 3, color: '#1A1A1A', fontFamily: 'monospace' }}>
                  {emergency.number}
                </Typography>
                <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.1875rem', '4k': '1.5rem' }, fontWeight: 600, mb: 2, color: '#1A1A1A' }}>
                  {emergency.service}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.0625rem', '4k': '1.3125rem' }, color: '#666666', lineHeight: 1.7 }}>
                  {emergency.details}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ paddingTop: '48px', paddingBottom: '48px', background: '#1A1A1A', color: '#FFFFFF' }}>
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem', '4k': '3.5rem' }, fontWeight: 600, mb: 6, color: '#FFFFFF' }}>
            {content.cta?.heading}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.0625rem', sm: '1.125rem', lg: '1.1875rem', '4k': '1.5rem' }, color: '#CCCCCC', mb: 8, lineHeight: 1.8, maxWidth: '720px' }}>
            {content.cta?.description}
          </Typography>
          <Button sx={{ 
            bgcolor: '#FFFFFF', 
            color: '#1A1A1A',
            fontWeight: 600,
            px: { xs: 5, md: 7 },
            py: { xs: 2, md: 2.5 },
            fontSize: { xs: '0.9375rem', lg: '1.0625rem', '4k': '1.25rem' },
            borderRadius: '2px',
            '&:hover': { bgcolor: '#F5F5F5' },
            textTransform: 'none'
          }}>
            {content.cta?.button}
          </Button>
          <Typography sx={{ fontSize: { xs: '0.875rem', sm: '0.9375rem', lg: '1rem', '4k': '1.25rem' }, color: '#999999', mt: 6 }}>
            {content.cta?.subtext}
          </Typography>
        </div>
      </div>
    </Box>
  );
}
