'use client';

import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function FamilyReunificationPage() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  return (
    <Box sx={{ minHeight: '100vh', bg: '#F8FAFC' }}>
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 3xl:pb-36 4k:pb-40">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', lg: '3rem' }, fontWeight: 800, mb: 2, color: '#1e293b' }}>
          {isSv ? 'Familjeåterförening' : 'Family Reunification'}
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', color: '#64748b' } }}>
          {isSv ? 'Familjeåterförening är en juridisk process' : 'Family reunification is a legal process'}
        </Typography>
      </div>
    </Box>
  );
}
