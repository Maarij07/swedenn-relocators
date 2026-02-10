import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './messages/en.json';
import sv from './messages/sv.json';

// Import navbar translations for all languages
import navbarEn from './messages/navbar/en.json';
import navbarSv from './messages/navbar/sv.json';
import navbarDa from './messages/navbar/da.json';
import navbarDe from './messages/navbar/de.json';
import navbarEs from './messages/navbar/es.json';
import navbarFa from './messages/navbar/fa.json';
import navbarFi from './messages/navbar/fi.json';
import navbarFr from './messages/navbar/fr.json';
import navbarIt from './messages/navbar/it.json';
import navbarNb from './messages/navbar/nb.json';
import navbarNl from './messages/navbar/nl.json';
import navbarPa from './messages/navbar/pa.json';
import navbarPs from './messages/navbar/ps.json';
import navbarTa from './messages/navbar/ta.json';
import navbarTe from './messages/navbar/te.json';
import navbarUr from './messages/navbar/ur.json';
import navbarEl from './messages/navbar/el.json';
import navbarAr from './messages/navbar/ar.json';

// Import service-specific English message files
import workPermitEn from './messages/work-permit/en.json';
import businessPermitEn from './messages/business-permit/en.json';
import citizenshipEn from './messages/citizenship/en.json';
import eorPayrollEn from './messages/eor-payroll/en.json';
import euCitizensRelocationEn from './messages/eu-citizens-relocation/en.json';
import familyReunificationEn from './messages/family-reunification/en.json';
import globalVisitVisasEn from './messages/global-visit-visas/en.json';
import logisticsServicesEn from './messages/logistics-services/en.json';
import newInSwedenEn from './messages/new-in-sweden/en.json';
import studyInEuEn from './messages/study-in-eu/en.json';

// Import business-permit translations for all languages
import businessPermitAr from './messages/business-permit/ar.json';
import businessPermitDa from './messages/business-permit/da.json';
import businessPermitDe from './messages/business-permit/de.json';
import businessPermitEl from './messages/business-permit/el.json';
import businessPermitEs from './messages/business-permit/es.json';
import businessPermitFa from './messages/business-permit/fa.json';
import businessPermitFi from './messages/business-permit/fi.json';
import businessPermitFr from './messages/business-permit/fr.json';
import businessPermitIt from './messages/business-permit/it.json';
import businessPermitNb from './messages/business-permit/nb.json';
import businessPermitNl from './messages/business-permit/nl.json';
import businessPermitPa from './messages/business-permit/pa.json';
import businessPermitPs from './messages/business-permit/ps.json';
import businessPermitSv from './messages/business-permit/sv.json';
import businessPermitTa from './messages/business-permit/ta.json';
import businessPermitTe from './messages/business-permit/te.json';
import businessPermitUr from './messages/business-permit/ur.json';

// Import citizenship translations for multilingual support
import citizenshipDa from './messages/citizenship/da.json';
import citizenshipDe from './messages/citizenship/de.json';
import citizenshipFi from './messages/citizenship/fi.json';
import citizenshipNb from './messages/citizenship/nb.json';
import citizenshipSv from './messages/citizenship/sv.json';

// Merge English files
const mergedEn = {
  ...en,
  ...navbarEn,
  ...workPermitEn,
  ...businessPermitEn,
  ...citizenshipEn,
  ...eorPayrollEn,
  ...euCitizensRelocationEn,
  ...familyReunificationEn,
  ...globalVisitVisasEn,
  ...logisticsServicesEn,
  ...newInSwedenEn,
  ...studyInEuEn,
};

// Merge Swedish files
const mergedSv = {
  ...sv,
  ...navbarSv,
  ...businessPermitSv,
  ...citizenshipSv,
};

// Merge other language files (primarily business-permit, citizenship and navbar)
const mergedAr = { ...navbarAr, ...businessPermitAr };
const mergedDa = { ...navbarDa, ...businessPermitDa, ...citizenshipDa };
const mergedDe = { ...navbarDe, ...businessPermitDe, ...citizenshipDe };
const mergedEl = { ...navbarEl, ...businessPermitEl };
const mergedEs = { ...navbarEs, ...businessPermitEs };
const mergedFa = { ...navbarFa, ...businessPermitFa };
const mergedFi = { ...navbarFi, ...businessPermitFi, ...citizenshipFi };
const mergedFr = { ...navbarFr, ...businessPermitFr };
const mergedIt = { ...navbarIt, ...businessPermitIt };
const mergedNb = { ...navbarNb, ...businessPermitNb, ...citizenshipNb };
const mergedNl = { ...navbarNl, ...businessPermitNl };
const mergedPa = { ...navbarPa, ...businessPermitPa };
const mergedPs = { ...navbarPs, ...businessPermitPs };
const mergedTa = { ...navbarTa, ...businessPermitTa };
const mergedTe = { ...navbarTe, ...businessPermitTe };
const mergedUr = { ...navbarUr, ...businessPermitUr };


// Initialize i18next once on the client
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: mergedEn },
        sv: { translation: mergedSv },
        ar: { translation: mergedAr },
        da: { translation: mergedDa },
        de: { translation: mergedDe },
        el: { translation: mergedEl },
        es: { translation: mergedEs },
        fa: { translation: mergedFa },
        fi: { translation: mergedFi },
        fr: { translation: mergedFr },
        it: { translation: mergedIt },
        nb: { translation: mergedNb },
        nl: { translation: mergedNl },
        pa: { translation: mergedPa },
        ps: { translation: mergedPs },
        ta: { translation: mergedTa },
        te: { translation: mergedTe },
        ur: { translation: mergedUr },
        no: { translation: mergedNb }, // Norwegian uses Norwegian Bokmål
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    })
    .catch((err) => {
      console.error('i18next init error', err);
    });
}

export default i18n;
