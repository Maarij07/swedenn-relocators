'use client';

import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { usePathname } from 'next/navigation';
import i18n from '../i18n';

export default function ClientI18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Load service-specific translations based on the current route
  useEffect(() => {
    const loadServiceTranslations = async () => {
      console.log('Current pathname:', pathname);
      
      // Extract service name from pathname (e.g., /en/services/business-permit -> business-permit)
      const pathParts = pathname.split('/');
      const isServicePage = pathParts.includes('services');
      const isSpecialPage = !isServicePage && (
        pathname.includes('new-in-sweden')
      );
      
      let serviceSlug: string | null = null;
      
      if (isServicePage) {
        const serviceNameIndex = pathParts.indexOf('services');
        if (serviceNameIndex >= 0 && serviceNameIndex < pathParts.length - 1) {
          serviceSlug = pathParts[serviceNameIndex + 1];
        }
      } else if (isSpecialPage) {
        // Handle special pages like new-in-sweden
        if (pathname.includes('new-in-sweden')) {
          serviceSlug = 'new-in-sweden';
        }
      }
      
      console.log('Service slug detected:', serviceSlug);
      
      if (serviceSlug) {
        // Map service slug to actual service name used in translation keys
        const serviceMapping: Record<string, string> = {
          'business-permit': 'businessPermit',
          'work-permit': 'workPermit',
          'citizenship': 'citizenship',
          'study-in-eu': 'studyInEu',
          'new-in-sweden': 'newInSweden',
          'logistics-services': 'logisticsServices',
          'global-visit-visas': 'globalVisitVisas',
          'family-reunification': 'familyReunification',
          'eu-citizens-relocation': 'euCitizensRelocation',
          'eor-payroll': 'eorPayroll',
          'relocate-to-denmark': 'relocateToDenmark',
          'relocate-to-sweden': 'relocateToSweden',
          'eu-citizens-parents-permit': 'euCitizensParentsPermit',
          'appeal-cases': 'appealCases',
          'asylum': 'asylum',
          'business-visit': 'businessVisit',
          'company-registration': 'companyRegistration',
        };

        const serviceKey = serviceMapping[serviceSlug];
        console.log('Service key mapping:', serviceKey);

        if (serviceKey) {
          try {
            // Try to load the service-specific file
            let serviceTranslations;
            try {
              console.log(`Attempting to load: ../messages/${serviceSlug}/en.json`);
              serviceTranslations = await import(`../messages/${serviceSlug}/en.json`);
              console.log('Successfully loaded translations:', serviceTranslations);
            } catch (error) {
              console.error(`Could not load translations for service: ${serviceSlug}`, error);
              return;
            }

            // Add the service-specific translations to i18n
            if (serviceTranslations && serviceKey && serviceTranslations.default && serviceTranslations.default[serviceKey]) {
              console.log('Adding resource bundle for:', serviceKey);
              // Add English version
              i18n.addResourceBundle('en', 'translation', { [serviceKey]: serviceTranslations.default[serviceKey] }, true, true);
              
              // Also add Swedish version if available
              try {
                const svServiceTranslations = await import(`../messages/${serviceSlug}/sv.json`);
                if (svServiceTranslations.default && svServiceTranslations.default[serviceKey]) {
                  i18n.addResourceBundle('sv', 'translation', { [serviceKey]: svServiceTranslations.default[serviceKey] }, true, true);
                }
              } catch {
                // SV file may not exist, that's OK
              }
              
              // Force update to trigger re-render
              i18n.reloadResources().then(() => {
                console.log('Resources reloaded');
              });
            } else {
              console.warn(`Service translation key '${serviceKey}' not found in ${serviceSlug}/en.json`);
              console.log('Available keys in file:', Object.keys(serviceTranslations.default || {}));
            }
          } catch (error) {
            console.error(`Could not load translations for service: ${serviceSlug}`, error);
          }
        }
      }
    };

    loadServiceTranslations();
  }, [pathname]);

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