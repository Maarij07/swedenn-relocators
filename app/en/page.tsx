'use client';

import { useEffect } from 'react';
import Home from '../components/Home';
import i18n from '../../i18n';

export default function EnHomePage() {
  useEffect(() => {
    // Ensure global i18n language is English when visiting /en
    i18n.changeLanguage('en').catch((err) => {
      console.error('Failed to change language to en', err);
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Home />
    </main>
  );
}
