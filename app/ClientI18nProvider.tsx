'use client';

import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { usePathname } from 'next/navigation';
import i18n from '../i18n';

export default function ClientI18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Keep i18n.language in sync with the current URL segment.
  // /sv and anything under it -> Swedish, everything else -> English.
  useEffect(() => {
    if (!pathname) return;

    const inSwedishSection = pathname === '/sv' || pathname.startsWith('/sv/');
    const nextLang = inSwedishSection ? 'sv' : 'en';

    if (i18n.language !== nextLang) {
      i18n.changeLanguage(nextLang).catch((err) => {
        console.error('Failed to change i18n language', err);
      });
    }
  }, [pathname]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
