'use client';

import { useState, useEffect, memo } from 'react';

const PORTAL_URL = 'https://portal.swedenrelocators.se';

const redirectToPortal = () => {
  window.open(PORTAL_URL, '_blank', 'noopener,noreferrer');
};

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

// Social media links
const SOCIAL_MEDIA_LINKS = [
  {
    label: 'Facebook',
    path: 'https://facebook.com',
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: 'Instagram',
    path: 'https://instagram.com',
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    label: 'X',
    path: 'https://x.com',
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'App Store',
    path: 'https://apps.apple.com',
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>,
  },
  {
    label: 'Google Play',
    path: 'https://play.google.com',
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626c.547.315.547 1.115 0 1.43l-2.807 1.626-2.524-2.341 2.524-2.341zM5.864 2.658L16.801 8.99l-2.302 2.302-8.635-8.634z"/></svg>,
  },
];

// Memoized Left section component
const LeftSection = memo(function LeftSection({ selectedAccount }: { selectedAccount: any }) {
  const theme = useTheme();
  
  return (
    <Box
      className="signup-left-section"
      sx={{
        width: { xs: '0%', sm: '0%', md: '35%', lg: '35%', xl: '35%' },
        display: { xs: 'none', sm: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        px: { xs: 1.2, sm: 1.5, md: 2, lg: 2.5 },
        py: { xs: 0, sm: 0, md: 0, lg: 0 },
        minHeight: { xs: 'auto', md: '100vh' },
        height: { xs: 'auto', md: '100vh' },
        background: 'linear-gradient(135deg, rgba(0, 184, 217, 0.08) 0%, rgba(51, 102, 255, 0.08) 100%)',
      }}
    >
      <Box sx={{ mt: { xs: 8, sm: 8, md: 8, lg: 10 } }}>
        <Typography
          className="signup-header-text"
          variant="h4"
          sx={{ 
            textAlign: "center", 
            mb: { xs: 0.8, sm: 1, md: 1.2, lg: 1.5 },
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem', lg: '1.5rem' },
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.5px',
            color: '#212B36',
          }}
        >
          {selectedAccount?.title || 'INDIVIDUAL (PRIVATE ACCOUNT)'}
        </Typography>
        <Typography 
          className="signup-subtitle-text"
          sx={{ 
            color: "#637381", 
            textAlign: "center", 
            fontWeight: "400",
            maxWidth: { xs: 250, sm: 280, md: 320, lg: 350 },
            mx: 'auto',
            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.95rem', lg: '1.05rem' },
            lineHeight: 1.4
          }}
        >
          {selectedAccount?.subtitle || 'Set up your account to apply for yourself and your family.'}
        </Typography>
      </Box>
      <Box
        className="signup-hero-image"
        component="img"
        alt="Sign up illustration"
        src="/businessman-analyzing-data.svg"
        sx={{
          width: "100%",
          maxWidth: { xs: 200, sm: 260, md: 320, lg: 380 },
          objectFit: "contain",
          height: 'auto',
          filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15))',
          animation: 'float 3s ease-in-out infinite',
          mt: { xs: 4, sm: 5, md: 6, lg: 7 },
          mb: { xs: 4, sm: 5, md: 6, lg: 7 },
          '@keyframes float': {
            '0%': {
              transform: 'translateY(0px)',
            },
            '50%': {
              transform: 'translateY(-20px)',
            },
            '100%': {
              transform: 'translateY(0px)',
            },
          },
        }}
      />
      {/* Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, sm: 1.2, md: 1.4, lg: 1.6 },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: 'wrap',
          mt: { xs: -4, md: -4 },
          mb: { xs: 2, md: 2.5 },
        }}
      >
        {SOCIAL_MEDIA_LINKS.map((social) => (
          <Link
            key={social.label}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirectToPortal();
            }}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 36, sm: 40, md: 44, lg: 48 },
              height: { xs: 36, sm: 40, md: 44, lg: 48 },
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 4px 16px rgba(0, 167, 111, 0.12)",
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              "&::before": {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 0,
                height: 0,
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 184, 217, 0.1)',
                transition: 'width 0.6s, height 0.6s',
                zIndex: 0
              },
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 32px rgba(0, 167, 111, 0.25)",
                backgroundColor: 'rgba(0, 184, 217, 0.05)',
                cursor: 'pointer',
                "&::before": {
                  width: '100%',
                  height: '100%'
                }
              },
              "&:hover .social-icon": {
                color: '#00B8D9',
                transform: 'scale(1.15) rotate(5deg)'
              }
            }}
          >
            <Box
              className="social-icon"
              component="span"
              sx={{
                width: { xs: 18, sm: 20, md: 22, lg: 24 },
                height: { xs: 18, sm: 20, md: 22, lg: 24 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#212B36',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.3s ease-out',
              }}
            >
              {social.svg}
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
});

LeftSection.displayName = 'LeftSection';

// Memoized Right section component
const RightSection = memo(function RightSection() {
  const theme = useTheme();
  const [accountTypes, setAccountTypes] = useState<any[]>([]);
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const [selectedSubType, setSelectedSubType] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch account types from API
  useEffect(() => {
    const fetchAccountTypes = async () => {
      setLoading(true);
      try {
        // Fallback to hardcoded data
        const fallbackTypes = [
          {
            id: 'individual',
            label: 'INDIVIDUAL (PRIVATE ACCOUNT)',
            title: 'INDIVIDUAL (PRIVATE ACCOUNT)',
            subtitle: 'Set up your account to apply for yourself and your family',
            subtypes: [
              {
                id: 'single-applicant',
                slug: 'single-applicant',
                label: 'Single Applicant',
                description: 'For individuals applying alone for residence permits, work permits, or citizenship',
              },
              {
                id: 'family-applicant',
                slug: 'family-applicant',
                label: 'Family Applicant',
                description: 'For families applying together for residence permits',
              },
            ],
          },
          {
            id: 'business',
            label: 'COMPANY (CORPORATE ACCOUNT)',
            title: 'COMPANY (CORPORATE ACCOUNT)',
            subtitle: 'Set up your company account for business services',
            subtypes: [
              {
                id: 'startup',
                slug: 'startup',
                label: 'Startup',
                description: 'For new businesses and startups',
              },
              {
                id: 'enterprise',
                slug: 'enterprise',
                label: 'Enterprise',
                description: 'For established companies and enterprises',
              },
            ],
          },
        ];
        setAccountTypes(fallbackTypes);
        setSelectedAccountType('individual');
      } catch (err) {
        console.error('Failed to fetch account types:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAccountTypes();
  }, []);

  const selectedAccount = accountTypes.find(type => type.id === selectedAccountType);

  const handleAccountTypeChange = (event: any) => {
    setSelectedAccountType(event.target.value);
    setSelectedSubType('');
  };

  const handleSubTypeChange = (event: any) => {
    setSelectedSubType(event.target.value);
  };

  const handleCreateAccount = () => {
    if (!selectedSubType || !email) return;
    console.log('Creating account:', { selectedAccountType, selectedSubType, email });
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <Box
      className="signup-right-section"
      sx={{
        width: { xs: '100%', md: '65%' },
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.5rem' },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        overflow: { xs: 'auto', md: 'visible' }
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: '100%', md: '480px', lg: '600px' },
          mx: 'auto',
          pt: { xs: 12, sm: 12, md: 12, lg: 14 },
          pb: { xs: 6, sm: 7, md: 7, lg: 7 },
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 1.2, sm: 1.5, md: 1.8, lg: 2.2 } }}>
          {/* Call-to-action banner */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1976d2',
              borderRadius: { xs: '20px', sm: '22px', md: '24px' },
              py: { xs: 0.6, sm: 0.7, md: 0.8, lg: 0.9 },
              px: { xs: 1.2, sm: 1.4, md: 1.6, lg: 1.8 },
              mb: { xs: 2, sm: 2.5, md: 3 }
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem', lg: '0.8rem' }
              }}
            >
              Choose your account type to get started
            </Typography>
          </Box>

          <Typography 
            variant="h4" 
            component="h1"
            sx={{ 
              mb: { xs: 0.5, sm: 0.6, md: 0.8, lg: 1 },
              fontWeight: 700,
              fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem', lg: '1.6rem' },
              lineHeight: 1.3,
              letterSpacing: '-0.5px',
              color: '#212B36',
            }}
          >
            Create Your Account
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#637381',
              mb: { xs: 1, sm: 1.2, md: 1.4 },
              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
              lineHeight: 1.4,
              letterSpacing: '0.3px'
            }}
          >
            Already have an account?{" "}
            <Link 
              href="/login"
              sx={{ 
                color: '#1976d2',
                textDecoration: 'none',
                fontWeight: 700,
                transition: 'all 0.3s ease',
                '&:hover': {
                  textDecoration: 'underline',
                  opacity: 0.8
                }
              }}
            >
              Sign in here
            </Link>
          </Typography>
        </Box>
            
        {/* Loading State */}
        {loading ? (
          <Typography sx={{ textAlign: 'center', mb: 2, fontSize: { xs: '0.8rem', md: '0.9rem' }, color: '#637381' }}>Loading account types...</Typography>
        ) : (
          <>
            {/* Account Type Selector */}
            <FormControl 
              fullWidth 
              sx={{ 
                mb: { xs: 2, sm: 2.5, md: 3 },
                '& .MuiOutlinedInput-root': {
                  minHeight: { xs: 56, sm: 60, md: 64 },
                  fontSize: { xs: '0.8rem', md: '0.85rem' },
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  '& fieldset': {
                    borderColor: 'rgba(145, 158, 171, 0.32)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(145, 158, 171, 0.48)',
                    boxShadow: '0 4px 12px rgba(0, 167, 111, 0.15)'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3366FF',
                    boxShadow: '0 6px 16px rgba(51, 102, 255, 0.2)'
                  }
                }
              }}
            >
              <InputLabel 
                id="account-type-label" 
                sx={{ 
                  fontSize: { xs: '0.75rem', md: '0.8rem' },
                  backgroundColor: '#FFFFFF',
                  px: 0.5,
                  color: '#637381',
                  '&.Mui-focused': {
                    backgroundColor: '#FFFFFF',
                    color: '#3366FF',
                  }
                }}
              >
                Account Type
              </InputLabel>
              <Select
                labelId="account-type-label"
                value={selectedAccountType}
                label="Account Type"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  redirectToPortal();
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  redirectToPortal();
                }}
                onChange={handleAccountTypeChange}
                sx={{ 
                  '& .MuiSelect-select': { 
                    py: { xs: 0.9, sm: 1, md: 1.1 }, 
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    letterSpacing: '0.2px',
                    color: '#212B36',
                  },
                  cursor: 'pointer',
                  '&:hover': {
                    cursor: 'pointer'
                  }
                }}
              >
                {accountTypes.map((type) => (
                  <MenuItem 
                    key={type.id} 
                    value={type.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      redirectToPortal();
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      redirectToPortal();
                    }}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        cursor: 'pointer',
                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', py: { xs: 0.3, md: 0.5 } }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: { xs: '0.75rem', md: '0.8rem' }, color: '#212B36' }}>
                        {type.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#637381', mt: { xs: 0.15, md: 0.25 }, fontSize: { xs: '0.65rem', md: '0.7rem' } }}>
                        {type.subtitle}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                
            {/* Subtype Selector */}
            <FormControl 
              fullWidth 
              sx={{ 
                mb: { xs: 2, sm: 2.5, md: 3 },
                '& .MuiOutlinedInput-root': {
                  minHeight: { xs: 56, sm: 60, md: 64 },
                  fontSize: { xs: '0.8rem', md: '0.85rem' },
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  '& fieldset': {
                    borderColor: 'rgba(145, 158, 171, 0.32)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(145, 158, 171, 0.48)',
                    boxShadow: '0 4px 12px rgba(0, 167, 111, 0.15)'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3366FF',
                    boxShadow: '0 6px 16px rgba(51, 102, 255, 0.2)'
                  }
                }
              }}
            >
              <InputLabel 
                id="subtype-label" 
                sx={{ 
                  fontSize: { xs: '0.75rem', md: '0.8rem' },
                  backgroundColor: '#FFFFFF',
                  px: 0.5,
                  color: '#637381',
                  '&.Mui-focused': {
                    backgroundColor: '#FFFFFF',
                    color: '#3366FF',
                  }
                }}
              >
                {selectedAccount?.label} Subtype
              </InputLabel>
              <Select
                labelId="subtype-label"
                value={selectedSubType}
                label={`${selectedAccount?.label} Subtype`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  redirectToPortal();
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  redirectToPortal();
                }}
                onChange={handleSubTypeChange}
                disabled={!selectedAccountType}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 240,
                    },
                  },
                }}
                sx={{ 
                  '& .MuiSelect-select': { 
                    py: { xs: 0.9, sm: 1, md: 1.1 }, 
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    letterSpacing: '0.2px',
                    color: '#212B36',
                  },
                  cursor: 'pointer',
                  '&:hover': {
                    cursor: 'pointer'
                  }
                }}
              >
                {selectedAccount?.subtypes?.map((subtype: any) => (
                  <MenuItem 
                    key={subtype.id} 
                    value={subtype.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      redirectToPortal();
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      redirectToPortal();
                    }}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        cursor: 'pointer',
                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', py: { xs: 0.3, md: 0.5 } }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: { xs: '0.75rem', md: '0.8rem' }, color: '#212B36' }}>
                        {subtype.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#637381', mt: { xs: 0.15, md: 0.25 }, fontSize: { xs: '0.65rem', md: '0.7rem' } }}>
                        {subtype.description}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


                
            {/* Action Button */}
            <Box display="flex" flexDirection="column" sx={{ mt: { xs: 2, sm: 2.5, md: 3 } }}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCreateAccount();
                  redirectToPortal();
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  redirectToPortal();
                }}
                disabled={!selectedSubType}
                sx={{
                  backgroundColor: !selectedSubType ? 'rgba(145, 158, 171, 0.24)' : 'rgba(145, 158, 171, 0.24)',
                  color: !selectedSubType ? 'rgba(145, 158, 171, 0.48)' : 'rgba(145, 158, 171, 0.48)',
                  py: { xs: 1.4, sm: 1.5, md: 1.6 },
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
                  fontWeight: 600,
                  letterSpacing: '0.3px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textTransform: 'none',
                  cursor: !selectedSubType ? 'not-allowed' : 'pointer',
                  '&:hover': {
                    backgroundColor: 'rgba(145, 158, 171, 0.24)',
                    cursor: !selectedSubType ? 'not-allowed' : 'pointer'
                  },
                  '&:disabled': {
                    backgroundColor: 'rgba(145, 158, 171, 0.24)',
                    color: 'rgba(145, 158, 171, 0.48)',
                    cursor: 'not-allowed'
                  }
                }}
              >
                <span>Select account type to continue</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '8px' }}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </Button>
            </Box>

            {/* Footer text */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: { xs: 4, sm: 5, md: 6, lg: 7 } }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#637381',
                  lineHeight: 1.5,
                  fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.85rem' },
                  textAlign: 'center',
                }}
              >
                Create your account to access all relocation services. Your journey starts here.
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
});

RightSection.displayName = 'RightSection';

// Main SignUp component
export default function SignUp() {
  const [accountTypes, setAccountTypes] = useState<any[]>([]);
  const [selectedAccountType, setSelectedAccountType] = useState('');

  // Fetch account types from API
  useEffect(() => {
    const fetchAccountTypes = async () => {
      try {
        const fallbackTypes = [
          {
            id: 'individual',
            label: 'INDIVIDUAL (PRIVATE ACCOUNT)',
            title: 'INDIVIDUAL (PRIVATE ACCOUNT)',
            subtitle: 'Set up your account to apply for yourself and your family',
            subtypes: [
              {
                id: 'single-applicant',
                slug: 'single-applicant',
                label: 'Single Applicant',
                description: 'For individuals applying alone for residence permits, work permits, or citizenship',
              },
            ],
          },
        ];
        setAccountTypes(fallbackTypes);
        setSelectedAccountType('individual');
      } catch (err) {
        console.error('Failed to fetch account types:', err);
      }
    };
    
    fetchAccountTypes();
  }, []);

  const selectedAccount = accountTypes.find(type => type.id === selectedAccountType);

  return (
    <Container 
      maxWidth={false}
      sx={{ 
        py: 0,
        px: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Main split layout container */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          height: { xs: 'auto', md: '100vh' },
          minHeight: '100vh'
        }}
      >
        <LeftSection selectedAccount={selectedAccount} />
        <RightSection />
      </Box>
    </Container>
  );
}
