'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import i18n from '../../i18n';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flagCode: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flagCode: 'us' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flagCode: 'se' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flagCode: 'dk' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flagCode: 'no' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flagCode: 'fi' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flagCode: 'de' },
  { code: 'fr', name: 'French', nativeName: 'Français', flagCode: 'fr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flagCode: 'it' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flagCode: 'es' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flagCode: 'gr' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flagCode: 'nl' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flagCode: 'ae' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', flagCode: 'ir' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flagCode: 'pk' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flagCode: 'in' },
  { code: 'ps', name: 'Pashto', nativeName: 'پشتو', flagCode: 'af' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flagCode: 'in' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flagCode: 'in' },
];

interface LanguageSelectorProps {
  open: boolean;
  onClose: () => void;
  currentLanguage?: string;
  onLanguageChange?: (languageCode: string) => void;
}

export default function LanguageSelector({
  open,
  onClose,
  currentLanguage = 'en',
  onLanguageChange,
}: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageSelect = (languageCode: string) => {
    if (onLanguageChange) {
      onLanguageChange(languageCode);
    }

    // Change i18n language for all supported languages
    i18n.changeLanguage(languageCode).catch((err) => {
      console.error('Failed to change language', err);
    });

    // Only redirect URL for English and Swedish (supported routing locales)
    if (['en', 'sv'].includes(languageCode)) {
      const segments = pathname?.split('/') || [];
      // segments[0] is empty, segments[1] is locale (en/sv) or empty (root)
      if (segments.length > 1 && (segments[1] === 'en' || segments[1] === 'sv')) {
        segments[1] = languageCode;
        const newPath = segments.join('/');
        router.push(newPath);
      } else {
        // If no locale prefix (e.g. root), redirect to language
        router.push(`/${languageCode}`);
      }
    }
    // For other languages, just change the i18n language without redirecting
    // This allows enjoying translations without URL changes

    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Select Language
          </Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: 'grey.500',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pb: 3 }}>
        <Typography
          sx={{
            fontSize: '0.875rem',
            color: 'text.secondary',
            mb: 3,
            mt: 1,
          }}
        >
          Choose your preferred language
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
            gap: { xs: 2, sm: 3 },
          }}
        >
          {languages.map((language) => (
            <Button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              variant={currentLanguage === language.code ? 'contained' : 'outlined'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                py: 2.5,
                borderRadius: '12px',
                textTransform: 'none',
                border: currentLanguage === language.code ? 'none' : '2px solid #e0e0e0',
                backgroundColor:
                  currentLanguage === language.code ? '#3b82f6' : 'transparent',
                color: currentLanguage === language.code ? 'white' : 'inherit',
                '&:hover': {
                  backgroundColor:
                    currentLanguage === language.code ? '#2563eb' : '#f5f5f5',
                  borderColor: currentLanguage === language.code ? 'transparent' : '#cbd5e1',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <img
                src={`https://flagcdn.com/w40/${language.flagCode}.png`}
                alt={language.name}
                style={{
                  width: '32px',
                  height: '24px',
                  borderRadius: '4px',
                  objectFit: 'cover',
                }}
              />
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 600 }}>
                {language.name}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', opacity: 0.7 }}>
                {language.nativeName}
              </Typography>
            </Button>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
