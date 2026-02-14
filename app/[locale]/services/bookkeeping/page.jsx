'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

export default function BookkeepingPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(i18n.isInitialized);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.on('initialized', () => setIsReady(true));
    } else {
      setIsReady(true);
    }
  }, [i18n]);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-16 sm:pb-20 lg:pb-24">
        <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4.5rem', '4k': '6rem' }, fontWeight: 800, mb: 6, color: '#1e293b', lineHeight: 1.1 }}>
          Bookkeeping Solutions
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.5rem', '4k': '1.75rem' }, color: '#6B7280', lineHeight: 1.8 }}>
          Accounting and bookkeeping services for individuals and companies in Sweden.
        </Typography>
      </div>
    </div>
  );
}
