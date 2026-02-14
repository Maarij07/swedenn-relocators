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
import asylumEn from './messages/asylum/en.json';
import businessVisitEn from './messages/business-visit/en.json';
import companyRegistrationEn from './messages/company-registration/en.json';
import euCitizensParentsPermitEn from './messages/eu-citizens-parents-permit/en.json';
import selfEmployedEn from './messages/self-employed/en.json';
import destinationServicesEn from './messages/destination-services/en.json';
import housingEn from './messages/housing/en.json';
import bookkeepingSolutionsEn from './messages/bookkeeping-solutions/en.json';

// Import bookkeeping-solutions translations for all languages
import bookkeepingSolutionsAr from './messages/bookkeeping-solutions/ar.json';
import bookkeepingSolutionsDa from './messages/bookkeeping-solutions/da.json';
import bookkeepingSolutionsDe from './messages/bookkeeping-solutions/de.json';
import bookkeepingSolutionsEl from './messages/bookkeeping-solutions/el.json';
import bookkeepingSolutionsEs from './messages/bookkeeping-solutions/es.json';
import bookkeepingSolutionsFa from './messages/bookkeeping-solutions/fa.json';
import bookkeepingSolutionsFi from './messages/bookkeeping-solutions/fi.json';
import bookkeepingSolutionsFr from './messages/bookkeeping-solutions/fr.json';
import bookkeepingSolutionsIt from './messages/bookkeeping-solutions/it.json';
import bookkeepingSolutionsNb from './messages/bookkeeping-solutions/nb.json';
import bookkeepingSolutionsNl from './messages/bookkeeping-solutions/nl.json';
import bookkeepingSolutionsPa from './messages/bookkeeping-solutions/pa.json';
import bookkeepingSolutionsPs from './messages/bookkeeping-solutions/ps.json';
import bookkeepingSolutionsSv from './messages/bookkeeping-solutions/sv.json';
import bookkeepingSolutionsTa from './messages/bookkeeping-solutions/ta.json';
import bookkeepingSolutionsTe from './messages/bookkeeping-solutions/te.json';
import bookkeepingSolutionsUr from './messages/bookkeeping-solutions/ur.json';

import financialManagementEn from './messages/financial-management/en.json';
import lawyersConnectEn from './messages/lawyers/en.json';
import manpowerSolutionsEn from './messages/manpower-solutions/en.json';
import cbiBbiEn from './messages/cbs-bb-programme/en.json';
import buySellPropertyEn from './messages/buy-sell-property/en.json';
import appealCasesEn from './messages/appeal-cases/en.json';
import auPairHostFamilyEn from './messages/au-pair-host-family/en.json';

// Import appeal-cases translations for all languages
import appealCasesAr from './messages/appeal-cases/ar.json';
import appealCasesDa from './messages/appeal-cases/da.json';
import appealCasesDe from './messages/appeal-cases/de.json';
import appealCasesEl from './messages/appeal-cases/el.json';
import appealCasesEs from './messages/appeal-cases/es.json';
import appealCasesFa from './messages/appeal-cases/fa.json';
import appealCasesFi from './messages/appeal-cases/fi.json';
import appealCasesFr from './messages/appeal-cases/fr.json';
import appealCasesIt from './messages/appeal-cases/it.json';
import appealCasesNb from './messages/appeal-cases/nb.json';
import appealCasesNl from './messages/appeal-cases/nl.json';
import appealCasesPa from './messages/appeal-cases/pa.json';
import appealCasesPs from './messages/appeal-cases/ps.json';
import appealCasesTa from './messages/appeal-cases/ta.json';
import appealCasesTe from './messages/appeal-cases/te.json';
import appealCasesUr from './messages/appeal-cases/ur.json';

// Import buy-sell-property translations for all languages
import buySellPropertyAr from './messages/buy-sell-property/ar.json';
import buySellPropertyDa from './messages/buy-sell-property/da.json';
import buySellPropertyDe from './messages/buy-sell-property/de.json';
import buySellPropertyEl from './messages/buy-sell-property/el.json';
import buySellPropertyEs from './messages/buy-sell-property/es.json';
import buySellPropertyFa from './messages/buy-sell-property/fa.json';
import buySellPropertyFi from './messages/buy-sell-property/fi.json';
import buySellPropertyFr from './messages/buy-sell-property/fr.json';
import buySellPropertyIt from './messages/buy-sell-property/it.json';
import buySellPropertyNb from './messages/buy-sell-property/nb.json';
import buySellPropertyNl from './messages/buy-sell-property/nl.json';
import buySellPropertyPa from './messages/buy-sell-property/pa.json';
import buySellPropertyPs from './messages/buy-sell-property/ps.json';
import buySellPropertyTa from './messages/buy-sell-property/ta.json';
import buySellPropertyTe from './messages/buy-sell-property/te.json';
import buySellPropertyUr from './messages/buy-sell-property/ur.json';

// Import au-pair-host-family translations for all languages
import auPairHostFamilyAr from './messages/au-pair-host-family/ar.json';
import auPairHostFamilyDa from './messages/au-pair-host-family/da.json';
import auPairHostFamilyDe from './messages/au-pair-host-family/de.json';
import auPairHostFamilyEl from './messages/au-pair-host-family/el.json';
import auPairHostFamilyEs from './messages/au-pair-host-family/es.json';
import auPairHostFamilyFa from './messages/au-pair-host-family/fa.json';
import auPairHostFamilyFi from './messages/au-pair-host-family/fi.json';
import auPairHostFamilyFr from './messages/au-pair-host-family/fr.json';
import auPairHostFamilyIt from './messages/au-pair-host-family/it.json';
import auPairHostFamilyNb from './messages/au-pair-host-family/nb.json';
import auPairHostFamilyNl from './messages/au-pair-host-family/nl.json';
import auPairHostFamilyPa from './messages/au-pair-host-family/pa.json';
import auPairHostFamilyPs from './messages/au-pair-host-family/ps.json';
import auPairHostFamilySv from './messages/au-pair-host-family/sv.json';
import auPairHostFamilyTa from './messages/au-pair-host-family/ta.json';
import auPairHostFamilyTe from './messages/au-pair-host-family/te.json';
import auPairHostFamilyUr from './messages/au-pair-host-family/ur.json';

// Import cbs-bb-programme translations for all languages
import cbiBbiAr from './messages/cbs-bb-programme/ar.json';
import cbiBbiDa from './messages/cbs-bb-programme/da.json';
import cbiBbiDe from './messages/cbs-bb-programme/de.json';
import cbiBbiEl from './messages/cbs-bb-programme/el.json';
import cbiBbiEs from './messages/cbs-bb-programme/es.json';
import cbiBbiFa from './messages/cbs-bb-programme/fa.json';
import cbiBbiFi from './messages/cbs-bb-programme/fi.json';
import cbiBbiFr from './messages/cbs-bb-programme/fr.json';
import cbiBbiIt from './messages/cbs-bb-programme/it.json';
import cbiBbiNb from './messages/cbs-bb-programme/nb.json';
import cbiBbiNl from './messages/cbs-bb-programme/nl.json';
import cbiBbiPa from './messages/cbs-bb-programme/pa.json';
import cbiBbiPs from './messages/cbs-bb-programme/ps.json';
import cbiBbiSv from './messages/cbs-bb-programme/sv.json';
import cbiBbiTa from './messages/cbs-bb-programme/ta.json';
import cbiBbiTe from './messages/cbs-bb-programme/te.json';
import cbiBbiUr from './messages/cbs-bb-programme/ur.json';

// Import destination-services translations for all languages
import destinationServicesAr from './messages/destination-services/ar.json';
import destinationServicesDa from './messages/destination-services/da.json';
import destinationServicesDe from './messages/destination-services/de.json';
import destinationServicesEl from './messages/destination-services/el.json';
import destinationServicesEs from './messages/destination-services/es.json';
import destinationServicesFa from './messages/destination-services/fa.json';
import destinationServicesFi from './messages/destination-services/fi.json';
import destinationServicesFr from './messages/destination-services/fr.json';
import destinationServicesIt from './messages/destination-services/it.json';
import destinationServicesNb from './messages/destination-services/nb.json';
import destinationServicesNl from './messages/destination-services/nl.json';
import destinationServicesPa from './messages/destination-services/pa.json';
import destinationServicesPs from './messages/destination-services/ps.json';
import destinationServicesSv from './messages/destination-services/sv.json';
import destinationServicesTa from './messages/destination-services/ta.json';
import destinationServicesTe from './messages/destination-services/te.json';
import destinationServicesUr from './messages/destination-services/ur.json';

// Import financial-management translations for all languages
import financialManagementAr from './messages/financial-management/ar.json';
import financialManagementDa from './messages/financial-management/da.json';
import financialManagementDe from './messages/financial-management/de.json';
import financialManagementEl from './messages/financial-management/el.json';
import financialManagementEs from './messages/financial-management/es.json';
import financialManagementFa from './messages/financial-management/fa.json';
import financialManagementFi from './messages/financial-management/fi.json';
import financialManagementFr from './messages/financial-management/fr.json';
import financialManagementIt from './messages/financial-management/it.json';
import financialManagementNb from './messages/financial-management/nb.json';
import financialManagementNl from './messages/financial-management/nl.json';
import financialManagementPa from './messages/financial-management/pa.json';
import financialManagementPs from './messages/financial-management/ps.json';
import financialManagementSv from './messages/financial-management/sv.json';
import financialManagementTa from './messages/financial-management/ta.json';
import financialManagementTe from './messages/financial-management/te.json';
import financialManagementUr from './messages/financial-management/ur.json';

// Import housing translations for all languages
import housingAr from './messages/housing/ar.json';
import housingDa from './messages/housing/da.json';
import housingDe from './messages/housing/de.json';
import housingEl from './messages/housing/el.json';
import housingEs from './messages/housing/es.json';
import housingFa from './messages/housing/fa.json';
import housingFi from './messages/housing/fi.json';
import housingFr from './messages/housing/fr.json';
import housingIt from './messages/housing/it.json';
import housingNb from './messages/housing/nb.json';
import housingNl from './messages/housing/nl.json';
import housingPa from './messages/housing/pa.json';
import housingPs from './messages/housing/ps.json';
import housingSv from './messages/housing/sv.json';
import housingTa from './messages/housing/ta.json';
import housingTe from './messages/housing/te.json';
import housingUr from './messages/housing/ur.json';

// Import study-in-eu translations for all languages
import studyInEuAr from './messages/study-in-eu/ar.json';
import studyInEuDa from './messages/study-in-eu/da.json';
import studyInEuDe from './messages/study-in-eu/de.json';
import studyInEuEl from './messages/study-in-eu/el.json';
import studyInEuEs from './messages/study-in-eu/es.json';
import studyInEuFa from './messages/study-in-eu/fa.json';
import studyInEuFi from './messages/study-in-eu/fi.json';
import studyInEuFr from './messages/study-in-eu/fr.json';
import studyInEuIt from './messages/study-in-eu/it.json';
import studyInEuNb from './messages/study-in-eu/nb.json';
import studyInEuNl from './messages/study-in-eu/nl.json';
import studyInEuPa from './messages/study-in-eu/pa.json';
import studyInEuPs from './messages/study-in-eu/ps.json';
import studyInEuSv from './messages/study-in-eu/sv.json';
import studyInEuTa from './messages/study-in-eu/ta.json';
import studyInEuTe from './messages/study-in-eu/te.json';
import studyInEuUr from './messages/study-in-eu/ur.json';

// Import asylum translations for all languages
import asylumAr from './messages/asylum/ar.json';
import asylumDa from './messages/asylum/da.json';
import asylumDe from './messages/asylum/de.json';
import asylumEl from './messages/asylum/el.json';
import asylumEs from './messages/asylum/es.json';
import asylumFa from './messages/asylum/fa.json';
import asylumFi from './messages/asylum/fi.json';
import asylumFr from './messages/asylum/fr.json';
import asylumIt from './messages/asylum/it.json';
import asylumNb from './messages/asylum/nb.json';
import asylumNl from './messages/asylum/nl.json';
import asylumPa from './messages/asylum/pa.json';
import asylumPs from './messages/asylum/ps.json';
import asylumSv from './messages/asylum/sv.json';
import asylumTa from './messages/asylum/ta.json';
import asylumTe from './messages/asylum/te.json';
import asylumUr from './messages/asylum/ur.json';

// Import company-registration translations for all languages
import companyRegistrationAr from './messages/company-registration/ar.json';
import companyRegistrationDa from './messages/company-registration/da.json';
import companyRegistrationDe from './messages/company-registration/de.json';
import companyRegistrationEl from './messages/company-registration/el.json';
import companyRegistrationEs from './messages/company-registration/es.json';
import companyRegistrationFa from './messages/company-registration/fa.json';
import companyRegistrationFi from './messages/company-registration/fi.json';
import companyRegistrationFr from './messages/company-registration/fr.json';
import companyRegistrationIt from './messages/company-registration/it.json';
import companyRegistrationNb from './messages/company-registration/nb.json';
import companyRegistrationNl from './messages/company-registration/nl.json';
import companyRegistrationPa from './messages/company-registration/pa.json';
import companyRegistrationPs from './messages/company-registration/ps.json';
import companyRegistrationSv from './messages/company-registration/sv.json';
import companyRegistrationTa from './messages/company-registration/ta.json';
import companyRegistrationTe from './messages/company-registration/te.json';
import companyRegistrationUr from './messages/company-registration/ur.json';

// Import eu-citizens-relocation translations for all languages
import euCitizensRelocationAr from './messages/eu-citizens-relocation/ar.json';
import euCitizensRelocationDa from './messages/eu-citizens-relocation/da.json';
import euCitizensRelocationDe from './messages/eu-citizens-relocation/de.json';
import euCitizensRelocationEl from './messages/eu-citizens-relocation/el.json';
import euCitizensRelocationEs from './messages/eu-citizens-relocation/es.json';
import euCitizensRelocationFa from './messages/eu-citizens-relocation/fa.json';
import euCitizensRelocationFi from './messages/eu-citizens-relocation/fi.json';
import euCitizensRelocationFr from './messages/eu-citizens-relocation/fr.json';
import euCitizensRelocationIt from './messages/eu-citizens-relocation/it.json';
import euCitizensRelocationNb from './messages/eu-citizens-relocation/nb.json';
import euCitizensRelocationNl from './messages/eu-citizens-relocation/nl.json';
import euCitizensRelocationPa from './messages/eu-citizens-relocation/pa.json';
import euCitizensRelocationPs from './messages/eu-citizens-relocation/ps.json';
import euCitizensRelocationSv from './messages/eu-citizens-relocation/sv.json';
import euCitizensRelocationTa from './messages/eu-citizens-relocation/ta.json';
import euCitizensRelocationTe from './messages/eu-citizens-relocation/te.json';
import euCitizensRelocationUr from './messages/eu-citizens-relocation/ur.json';

// Import eu-citizens-parents-permit translations for all languages
import euCitizensParentsPermitAr from './messages/eu-citizens-parents-permit/ar.json';
import euCitizensParentsPermitDa from './messages/eu-citizens-parents-permit/da.json';
import euCitizensParentsPermitDe from './messages/eu-citizens-parents-permit/de.json';
import euCitizensParentsPermitEl from './messages/eu-citizens-parents-permit/el.json';
import euCitizensParentsPermitEs from './messages/eu-citizens-parents-permit/es.json';
import euCitizensParentsPermitFa from './messages/eu-citizens-parents-permit/fa.json';
import euCitizensParentsPermitFi from './messages/eu-citizens-parents-permit/fi.json';
import euCitizensParentsPermitFr from './messages/eu-citizens-parents-permit/fr.json';
import euCitizensParentsPermitIt from './messages/eu-citizens-parents-permit/it.json';
import euCitizensParentsPermitNb from './messages/eu-citizens-parents-permit/nb.json';
import euCitizensParentsPermitNl from './messages/eu-citizens-parents-permit/nl.json';
import euCitizensParentsPermitPa from './messages/eu-citizens-parents-permit/pa.json';
import euCitizensParentsPermitPs from './messages/eu-citizens-parents-permit/ps.json';
import euCitizensParentsPermitSv from './messages/eu-citizens-parents-permit/sv.json';
import euCitizensParentsPermitTa from './messages/eu-citizens-parents-permit/ta.json';
import euCitizensParentsPermitTe from './messages/eu-citizens-parents-permit/te.json';
import euCitizensParentsPermitUr from './messages/eu-citizens-parents-permit/ur.json';

// Import family-reunification translations for all languages
import familyReunificationAr from './messages/family-reunification/ar.json';
import familyReunificationDa from './messages/family-reunification/da.json';
import familyReunificationDe from './messages/family-reunification/de.json';
import familyReunificationEl from './messages/family-reunification/el.json';
import familyReunificationEs from './messages/family-reunification/es.json';
import familyReunificationFa from './messages/family-reunification/fa.json';
import familyReunificationFi from './messages/family-reunification/fi.json';
import familyReunificationFr from './messages/family-reunification/fr.json';
import familyReunificationIt from './messages/family-reunification/it.json';
import familyReunificationNb from './messages/family-reunification/nb.json';
import familyReunificationNl from './messages/family-reunification/nl.json';
import familyReunificationPa from './messages/family-reunification/pa.json';
import familyReunificationPs from './messages/family-reunification/ps.json';
import familyReunificationSv from './messages/family-reunification/sv.json';
import familyReunificationTa from './messages/family-reunification/ta.json';
import familyReunificationTe from './messages/family-reunification/te.json';
import familyReunificationUr from './messages/family-reunification/ur.json';

// Import logistics-services translations for all languages
import logisticsServicesAr from './messages/logistics-services/ar.json';
import logisticsServicesDa from './messages/logistics-services/da.json';
import logisticsServicesDe from './messages/logistics-services/de.json';
import logisticsServicesEl from './messages/logistics-services/el.json';
import logisticsServicesEs from './messages/logistics-services/es.json';
import logisticsServicesFa from './messages/logistics-services/fa.json';
import logisticsServicesFi from './messages/logistics-services/fi.json';
import logisticsServicesFr from './messages/logistics-services/fr.json';
import logisticsServicesIt from './messages/logistics-services/it.json';
import logisticsServicesNb from './messages/logistics-services/nb.json';
import logisticsServicesNl from './messages/logistics-services/nl.json';
import logisticsServicesPa from './messages/logistics-services/pa.json';
import logisticsServicesPs from './messages/logistics-services/ps.json';
import logisticsServicesSv from './messages/logistics-services/sv.json';
import logisticsServicesTa from './messages/logistics-services/ta.json';
import logisticsServicesTe from './messages/logistics-services/te.json';
import logisticsServicesUr from './messages/logistics-services/ur.json';

// Import eor-payroll translations for all languages
import eorPayrollAr from './messages/eor-payroll/ar.json';
import eorPayrollDa from './messages/eor-payroll/da.json';
import eorPayrollDe from './messages/eor-payroll/de.json';
import eorPayrollEl from './messages/eor-payroll/el.json';
import eorPayrollEs from './messages/eor-payroll/es.json';
import eorPayrollFa from './messages/eor-payroll/fa.json';
import eorPayrollFi from './messages/eor-payroll/fi.json';
import eorPayrollFr from './messages/eor-payroll/fr.json';
import eorPayrollIt from './messages/eor-payroll/it.json';
import eorPayrollNb from './messages/eor-payroll/nb.json';
import eorPayrollNl from './messages/eor-payroll/nl.json';
import eorPayrollPa from './messages/eor-payroll/pa.json';
import eorPayrollPs from './messages/eor-payroll/ps.json';
import eorPayrollSv from './messages/eor-payroll/sv.json';
import eorPayrollTa from './messages/eor-payroll/ta.json';
import eorPayrollTe from './messages/eor-payroll/te.json';
import eorPayrollUr from './messages/eor-payroll/ur.json';

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

// Import business-visit translations for all languages
import businessVisitAr from './messages/business-visit/ar.json';
import businessVisitDa from './messages/business-visit/da.json';
import businessVisitDe from './messages/business-visit/de.json';
import businessVisitEl from './messages/business-visit/el.json';
import businessVisitEs from './messages/business-visit/es.json';
import businessVisitFa from './messages/business-visit/fa.json';
import businessVisitFi from './messages/business-visit/fi.json';
import businessVisitFr from './messages/business-visit/fr.json';
import businessVisitIt from './messages/business-visit/it.json';
import businessVisitNb from './messages/business-visit/nb.json';
import businessVisitNl from './messages/business-visit/nl.json';
import businessVisitPa from './messages/business-visit/pa.json';
import businessVisitPs from './messages/business-visit/ps.json';
import businessVisitSv from './messages/business-visit/sv.json';
import businessVisitTa from './messages/business-visit/ta.json';
import businessVisitTe from './messages/business-visit/te.json';
import businessVisitUr from './messages/business-visit/ur.json';

// Import work-permit translations for all languages
import workPermitAr from './messages/work-permit/ar.json';
import workPermitDa from './messages/work-permit/da.json';
import workPermitDe from './messages/work-permit/de.json';
import workPermitEl from './messages/work-permit/el.json';
import workPermitEs from './messages/work-permit/es.json';
import workPermitFa from './messages/work-permit/fa.json';
import workPermitFi from './messages/work-permit/fi.json';
import workPermitFr from './messages/work-permit/fr.json';
import workPermitIt from './messages/work-permit/it.json';
import workPermitNb from './messages/work-permit/nb.json';
import workPermitNl from './messages/work-permit/nl.json';
import workPermitPa from './messages/work-permit/pa.json';
import workPermitPs from './messages/work-permit/ps.json';
import workPermitSv from './messages/work-permit/sv.json';
import workPermitTa from './messages/work-permit/ta.json';
import workPermitTe from './messages/work-permit/te.json';
import workPermitUr from './messages/work-permit/ur.json';

// Import global-visit-visas translations for all languages
import globalVisitVisasAr from './messages/global-visit-visas/ar.json';
import globalVisitVisasDa from './messages/global-visit-visas/da.json';
import globalVisitVisasDe from './messages/global-visit-visas/de.json';
import globalVisitVisasEl from './messages/global-visit-visas/el.json';
import globalVisitVisasEs from './messages/global-visit-visas/es.json';
import globalVisitVisasFa from './messages/global-visit-visas/fa.json';
import globalVisitVisasFi from './messages/global-visit-visas/fi.json';
import globalVisitVisasFr from './messages/global-visit-visas/fr.json';
import globalVisitVisasIt from './messages/global-visit-visas/it.json';
import globalVisitVisasNb from './messages/global-visit-visas/nb.json';
import globalVisitVisasNl from './messages/global-visit-visas/nl.json';
import globalVisitVisasPa from './messages/global-visit-visas/pa.json';
import globalVisitVisasPs from './messages/global-visit-visas/ps.json';
import globalVisitVisasSv from './messages/global-visit-visas/sv.json';
import globalVisitVisasTa from './messages/global-visit-visas/ta.json';
import globalVisitVisasTe from './messages/global-visit-visas/te.json';
import globalVisitVisasUr from './messages/global-visit-visas/ur.json';

// Import self-employed translations for all languages
import selfEmployedAr from './messages/self-employed/ar.json';
import selfEmployedDa from './messages/self-employed/da.json';
import selfEmployedDe from './messages/self-employed/de.json';
import selfEmployedEl from './messages/self-employed/el.json';
import selfEmployedEs from './messages/self-employed/es.json';
import selfEmployedFa from './messages/self-employed/fa.json';
import selfEmployedFi from './messages/self-employed/fi.json';
import selfEmployedFr from './messages/self-employed/fr.json';
import selfEmployedIt from './messages/self-employed/it.json';
import selfEmployedNb from './messages/self-employed/nb.json';
import selfEmployedNl from './messages/self-employed/nl.json';
import selfEmployedPa from './messages/self-employed/pa.json';
import selfEmployedPs from './messages/self-employed/ps.json';
import selfEmployedSv from './messages/self-employed/sv.json';
import selfEmployedTa from './messages/self-employed/ta.json';
import selfEmployedTe from './messages/self-employed/te.json';
import selfEmployedUr from './messages/self-employed/ur.json';

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
  ...selfEmployedEn,
  ...destinationServicesEn,
  ...housingEn,
  ...bookkeepingSolutionsEn,
  ...financialManagementEn,
  ...lawyersConnectEn,
  ...manpowerSolutionsEn,
  ...cbiBbiEn,
  ...buySellPropertyEn,
  ...appealCasesEn,
  ...auPairHostFamilyEn,
  ...asylumEn,
  ...businessVisitEn,
  ...companyRegistrationEn,
  ...euCitizensParentsPermitEn,
};

// Merge Swedish files
const mergedSv = {
  ...sv,
  ...navbarSv,
  ...businessPermitSv,
  ...citizenshipSv,
  ...eorPayrollSv,
  ...studyInEuSv,
  ...asylumSv,
  ...companyRegistrationSv,
  ...euCitizensRelocationSv,
  ...euCitizensParentsPermitSv,
  ...familyReunificationSv,
  ...logisticsServicesSv,
  ...globalVisitVisasSv,
  ...workPermitSv,
  ...selfEmployedSv,
  ...auPairHostFamilySv,
  ...bookkeepingSolutionsSv,
  ...cbiBbiSv,
  ...destinationServicesSv,
  ...financialManagementSv,
  ...housingSv,
};

// Merge other language files (primarily business-permit, business-visit, citizenship, eor-payroll, asylum, company-registration, eu-citizens-relocation, eu-citizens-parents-permit, logistics-services, study-in-eu, global-visit-visas, work-permit, appeal-cases, buy-sell-property and navbar)
const mergedAr = { ...navbarAr, ...businessPermitAr, ...businessVisitAr, ...globalVisitVisasAr, ...workPermitAr, ...eorPayrollAr, ...studyInEuAr, ...asylumAr, ...companyRegistrationAr, ...euCitizensRelocationAr, ...euCitizensParentsPermitAr, ...familyReunificationAr, ...logisticsServicesAr, ...selfEmployedAr, ...auPairHostFamilyAr, ...buySellPropertyAr, ...appealCasesAr, ...bookkeepingSolutionsAr, ...cbiBbiAr, ...destinationServicesAr, ...financialManagementAr, ...housingAr };
const mergedDa = { ...navbarDa, ...businessPermitDa, ...businessVisitDa, ...globalVisitVisasDa, ...workPermitDa, ...citizenshipDa, ...eorPayrollDa, ...studyInEuDa, ...asylumDa, ...companyRegistrationDa, ...euCitizensRelocationDa, ...euCitizensParentsPermitDa, ...familyReunificationDa, ...logisticsServicesDa, ...selfEmployedDa, ...auPairHostFamilyDa, ...buySellPropertyDa, ...appealCasesDa, ...bookkeepingSolutionsDa, ...cbiBbiDa, ...destinationServicesDa, ...financialManagementDa, ...housingDa };
const mergedDe = { ...navbarDe, ...businessPermitDe, ...businessVisitDe, ...globalVisitVisasDe, ...workPermitDe, ...eorPayrollDe, ...studyInEuDe, ...asylumDe, ...companyRegistrationDe, ...euCitizensRelocationDe, ...euCitizensParentsPermitDe, ...familyReunificationDe, ...logisticsServicesDe, ...selfEmployedDe, ...auPairHostFamilyDe, ...buySellPropertyDe, ...appealCasesDe, ...bookkeepingSolutionsDe, ...cbiBbiDe, ...destinationServicesDe, ...financialManagementDe, ...housingDe };
const mergedEl = { ...navbarEl, ...businessPermitEl, ...businessVisitEl, ...globalVisitVisasEl, ...workPermitEl, ...eorPayrollEl, ...studyInEuEl, ...asylumEl, ...companyRegistrationEl, ...euCitizensRelocationEl, ...euCitizensParentsPermitEl, ...familyReunificationEl, ...logisticsServicesEl, ...selfEmployedEl, ...auPairHostFamilyEl, ...buySellPropertyEl, ...appealCasesEl, ...bookkeepingSolutionsEl, ...cbiBbiEl, ...destinationServicesEl, ...financialManagementEl, ...housingEl };
const mergedEs = { ...navbarEs, ...businessPermitEs, ...businessVisitEs, ...globalVisitVisasEs, ...workPermitEs, ...eorPayrollEs, ...studyInEuEs, ...asylumEs, ...companyRegistrationEs, ...euCitizensRelocationEs, ...euCitizensParentsPermitEs, ...familyReunificationEs, ...logisticsServicesEs, ...selfEmployedEs, ...auPairHostFamilyEs, ...buySellPropertyEs, ...appealCasesEs, ...bookkeepingSolutionsEs, ...cbiBbiEs, ...destinationServicesEs, ...financialManagementEs, ...housingEs };
const mergedFa = { ...navbarFa, ...businessPermitFa, ...businessVisitFa, ...globalVisitVisasFa, ...workPermitFa, ...eorPayrollFa, ...studyInEuFa, ...asylumFa, ...companyRegistrationFa, ...euCitizensRelocationFa, ...euCitizensParentsPermitFa, ...familyReunificationFa, ...logisticsServicesFa, ...selfEmployedFa, ...auPairHostFamilyFa, ...buySellPropertyFa, ...appealCasesFa, ...bookkeepingSolutionsFa, ...cbiBbiFa, ...destinationServicesFa, ...financialManagementFa, ...housingFa };
const mergedFi = { ...navbarFi, ...businessPermitFi, ...businessVisitFi, ...globalVisitVisasFi, ...workPermitFi, ...citizenshipFi, ...eorPayrollFi, ...studyInEuFi, ...asylumFi, ...companyRegistrationFi, ...euCitizensRelocationFi, ...euCitizensParentsPermitFi, ...familyReunificationFi, ...logisticsServicesFi, ...selfEmployedFi, ...auPairHostFamilyFi, ...buySellPropertyFi, ...appealCasesFi, ...bookkeepingSolutionsFi, ...cbiBbiFi, ...destinationServicesFi, ...financialManagementFi, ...housingFi };
const mergedFr = { ...navbarFr, ...businessPermitFr, ...businessVisitFr, ...globalVisitVisasFr, ...workPermitFr, ...eorPayrollFr, ...studyInEuFr, ...asylumFr, ...companyRegistrationFr, ...euCitizensRelocationFr, ...euCitizensParentsPermitFr, ...familyReunificationFr, ...logisticsServicesFr, ...selfEmployedFr, ...auPairHostFamilyFr, ...buySellPropertyFr, ...appealCasesFr, ...bookkeepingSolutionsFr, ...cbiBbiFr, ...destinationServicesFr, ...financialManagementFr, ...housingFr };
const mergedIt = { ...navbarIt, ...businessPermitIt, ...businessVisitIt, ...globalVisitVisasIt, ...workPermitIt, ...eorPayrollIt, ...studyInEuIt, ...asylumIt, ...companyRegistrationIt, ...euCitizensRelocationIt, ...euCitizensParentsPermitIt, ...familyReunificationIt, ...logisticsServicesIt, ...selfEmployedIt, ...auPairHostFamilyIt, ...buySellPropertyIt, ...appealCasesIt, ...bookkeepingSolutionsIt, ...cbiBbiIt, ...destinationServicesIt, ...financialManagementIt, ...housingIt };
const mergedNb = { ...navbarNb, ...businessPermitNb, ...businessVisitNb, ...globalVisitVisasNb, ...workPermitNb, ...citizenshipNb, ...eorPayrollNb, ...studyInEuNb, ...asylumNb, ...companyRegistrationNb, ...euCitizensRelocationNb, ...euCitizensParentsPermitNb, ...familyReunificationNb, ...logisticsServicesNb, ...selfEmployedNb, ...auPairHostFamilyNb, ...buySellPropertyNb, ...appealCasesNb, ...bookkeepingSolutionsNb, ...cbiBbiNb, ...destinationServicesNb, ...financialManagementNb, ...housingNb };
const mergedNl = { ...navbarNl, ...businessPermitNl, ...businessVisitNl, ...globalVisitVisasNl, ...workPermitNl, ...eorPayrollNl, ...studyInEuNl, ...asylumNl, ...companyRegistrationNl, ...euCitizensRelocationNl, ...euCitizensParentsPermitNl, ...familyReunificationNl, ...logisticsServicesNl, ...selfEmployedNl, ...auPairHostFamilyNl, ...buySellPropertyNl, ...appealCasesNl, ...bookkeepingSolutionsNl, ...cbiBbiNl, ...destinationServicesNl, ...financialManagementNl, ...housingNl };
const mergedPa = { ...navbarPa, ...businessPermitPa, ...businessVisitPa, ...globalVisitVisasPa, ...workPermitPa, ...eorPayrollPa, ...studyInEuPa, ...asylumPa, ...companyRegistrationPa, ...euCitizensRelocationPa, ...euCitizensParentsPermitPa, ...familyReunificationPa, ...logisticsServicesPa, ...selfEmployedPa, ...auPairHostFamilyPa, ...buySellPropertyPa, ...appealCasesPa, ...bookkeepingSolutionsPa, ...cbiBbiPa, ...destinationServicesPa, ...financialManagementPa, ...housingPa };
const mergedPs = { ...navbarPs, ...businessPermitPs, ...businessVisitPs, ...globalVisitVisasPs, ...workPermitPs, ...eorPayrollPs, ...studyInEuPs, ...asylumPs, ...companyRegistrationPs, ...euCitizensRelocationPs, ...euCitizensParentsPermitPs, ...familyReunificationPs, ...logisticsServicesPs, ...selfEmployedPs, ...auPairHostFamilyPs, ...buySellPropertyPs, ...appealCasesPs, ...bookkeepingSolutionsPs, ...cbiBbiPs, ...destinationServicesPs, ...financialManagementPs, ...housingPs };
const mergedTa = { ...navbarTa, ...businessPermitTa, ...businessVisitTa, ...globalVisitVisasTa, ...workPermitTa, ...eorPayrollTa, ...studyInEuTa, ...asylumTa, ...companyRegistrationTa, ...euCitizensRelocationTa, ...euCitizensParentsPermitTa, ...familyReunificationTa, ...logisticsServicesTa, ...selfEmployedTa, ...auPairHostFamilyTa, ...buySellPropertyTa, ...appealCasesTa, ...bookkeepingSolutionsTa, ...cbiBbiTa, ...destinationServicesTa, ...financialManagementTa, ...housingTa };
const mergedTe = { ...navbarTe, ...businessPermitTe, ...businessVisitTe, ...globalVisitVisasTe, ...workPermitTe, ...eorPayrollTe, ...studyInEuTe, ...asylumTe, ...companyRegistrationTe, ...euCitizensRelocationTe, ...euCitizensParentsPermitTe, ...familyReunificationTe, ...logisticsServicesTe, ...selfEmployedTe, ...auPairHostFamilyTe, ...buySellPropertyTe, ...appealCasesTe, ...bookkeepingSolutionsTe, ...cbiBbiTe, ...destinationServicesTe, ...financialManagementTe, ...housingTe };
const mergedUr = { ...navbarUr, ...businessPermitUr, ...businessVisitUr, ...globalVisitVisasUr, ...workPermitUr, ...eorPayrollUr, ...studyInEuUr, ...asylumUr, ...companyRegistrationUr, ...euCitizensRelocationUr, ...euCitizensParentsPermitUr, ...familyReunificationUr, ...logisticsServicesUr, ...selfEmployedUr, ...auPairHostFamilyUr, ...buySellPropertyUr, ...appealCasesUr, ...bookkeepingSolutionsUr, ...cbiBbiUr, ...destinationServicesUr, ...financialManagementUr, ...housingUr };

// Merge Norwegian Bokmål for no alias
const mergedNo = { ...navbarNb, ...businessPermitNb, ...businessVisitNb, ...globalVisitVisasNb, ...workPermitNb, ...citizenshipNb, ...eorPayrollNb, ...studyInEuNb, ...asylumNb, ...companyRegistrationNb, ...euCitizensRelocationNb, ...euCitizensParentsPermitNb, ...familyReunificationNb, ...logisticsServicesNb, ...selfEmployedNb, ...auPairHostFamilyNb, ...buySellPropertyNb, ...appealCasesNb, ...bookkeepingSolutionsNb, ...cbiBbiNb, ...destinationServicesNb, ...financialManagementNb };

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
        no: { translation: mergedNo }, // Norwegian uses Norwegian Bokmål
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