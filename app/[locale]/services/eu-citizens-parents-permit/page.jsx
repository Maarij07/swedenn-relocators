'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function EUCitizensParentsPermitPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      i18n.on('initialized', () => setIsReady(true));
    }
  }, [i18n]);

  if (!isReady) return null;

  // Retrieve translation arrays with returnObjects
  const qualifyingCategories = t('euCitizensParentsPermit.whoQualifies.categories', { returnObjects: true }) || [];
  const eligibilityConditions = t('euCitizensParentsPermit.keyConditions.conditions', { returnObjects: true }) || [];
  const applicationSteps = t('euCitizensParentsPermit.applicationProcess.steps', { returnObjects: true }) || [];
  const maintenanceRequirements = t('euCitizensParentsPermit.maintenanceRequirement.requirements', { returnObjects: true }) || [];
  const helpServices = t('euCitizensParentsPermit.howWeHelp.services', { returnObjects: true }) || [];
  const serviceBenefits = t('euCitizensParentsPermit.benefitsOfService.benefits', { returnObjects: true }) || [];

  // Get parent documentation requirements
  const parentDocumentation = t('euCitizensParentsPermit.specificCases.dependentParents.documentation', { returnObjects: true }) || [];
  const otherMembersRequirements = t('euCitizensParentsPermit.specificCases.otherFamilyMembers.requirements', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {t('euCitizensParentsPermit.hero.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            {t('euCitizensParentsPermit.hero.subtitle')}
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            {t('euCitizensParentsPermit.intro.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {t('euCitizensParentsPermit.intro.description')}
          </p>
        </section>

        {/* Who Qualifies Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {t('euCitizensParentsPermit.whoQualifies.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            {t('euCitizensParentsPermit.whoQualifies.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {qualifyingCategories.map((category) => (
              <div
                key={category.number}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border-l-4 border-blue-500 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {category.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Conditions Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('euCitizensParentsPermit.keyConditions.heading')}
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {eligibilityConditions.map((condition) => (
              <div key={condition.number} className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {condition.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {condition.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('euCitizensParentsPermit.applicationProcess.heading')}
          </h2>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {applicationSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-t-4 border-blue-500"
              >
                <div className="flex items-start gap-3 sm:gap-5">
                  <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                    {step.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    {step.intro && (
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                        {step.intro}
                      </p>
                    )}
                    {step.documents && (
                      <ul className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                        {step.documents.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-blue-500 font-bold text-sm sm:text-base flex-shrink-0 mt-0.5">•</span>
                            <div className="text-xs sm:text-sm lg:text-base text-gray-700">
                              <span className="font-semibold">{doc.title}:</span> {doc.description}
                              {doc.details && (
                                <ul className="mt-2 space-y-1 ml-4">
                                  {doc.details.map((detail, detailIdx) => (
                                    <li key={detailIdx} className="text-gray-600 text-xs sm:text-sm">
                                      - {detail}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.details && (
                      <ul className="space-y-2 sm:space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-blue-500 font-bold text-sm sm:text-base flex-shrink-0 mt-0.5">•</span>
                            <span className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.description && (
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specific Cases Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('euCitizensParentsPermit.specificCases.heading')}
          </h2>

          {/* Dependent Parents */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-6 sm:mb-8 border-l-4 border-purple-500">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
              {t('euCitizensParentsPermit.specificCases.dependentParents.heading')}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-4 leading-relaxed">
              {t('euCitizensParentsPermit.specificCases.dependentParents.intro')}
            </p>
            <div className="bg-purple-50 rounded-lg p-4 sm:p-5 mb-4 border-l-4 border-purple-400">
              {parentDocumentation.map((doc, idx) => (
                <div key={idx} className="mb-3 last:mb-0">
                  <h4 className="font-semibold text-xs sm:text-sm text-gray-900 mb-1">
                    {doc.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700">{doc.description}</p>
                </div>
              ))}
            </div>
            {t('euCitizensParentsPermit.specificCases.dependentParents.note') && (
              <p className="text-xs sm:text-sm text-gray-600 italic bg-gray-50 p-3 sm:p-4 rounded-lg">
                {t('euCitizensParentsPermit.specificCases.dependentParents.note')}
              </p>
            )}
          </div>

          {/* Other Family Members */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-orange-500">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4">
              {t('euCitizensParentsPermit.specificCases.otherFamilyMembers.heading')}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-4 leading-relaxed">
              {t('euCitizensParentsPermit.specificCases.otherFamilyMembers.intro')}
            </p>
            <div className="space-y-3 sm:space-y-4">
              {otherMembersRequirements.map((req, idx) => (
                <div key={idx} className="bg-orange-50 rounded-lg p-4 sm:p-5 border-l-4 border-orange-400">
                  <h4 className="font-semibold text-xs sm:text-sm text-gray-900 mb-1">
                    {req.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700">{req.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Requirement Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t('euCitizensParentsPermit.maintenanceRequirement.heading')}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {t('euCitizensParentsPermit.maintenanceRequirement.intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {maintenanceRequirements.map((req) => (
              <div
                key={req.number}
                className="bg-white rounded-lg p-4 sm:p-5 border-t-4 border-indigo-500"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {req.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      {req.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {t('euCitizensParentsPermit.maintenanceRequirement.note') && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-700">
                {t('euCitizensParentsPermit.maintenanceRequirement.note')}
              </p>
            </div>
          )}
        </section>

        {/* Additional Considerations Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('euCitizensParentsPermit.additionalConsiderations.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                key: 'timeliness',
                title: t('euCitizensParentsPermit.additionalConsiderations.timeliness.heading'),
                description: t('euCitizensParentsPermit.additionalConsiderations.timeliness.description'),
              },
              {
                key: 'changes',
                title: t('euCitizensParentsPermit.additionalConsiderations.changes.heading'),
                description: t('euCitizensParentsPermit.additionalConsiderations.changes.description'),
              },
              {
                key: 'renewal',
                title: t('euCitizensParentsPermit.additionalConsiderations.renewal.heading'),
                description: t('euCitizensParentsPermit.additionalConsiderations.renewal.description'),
              },
            ].map((item) => (
              <div
                key={item.key}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 lg:p-7"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Help Section */}
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('euCitizensParentsPermit.howWeHelp.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 lg:mb-10 max-w-3xl leading-relaxed">
            {t('euCitizensParentsPermit.howWeHelp.intro')}
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-6 sm:mb-8">
            {t('euCitizensParentsPermit.howWeHelp.subheading')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {helpServices.map((service) => (
              <div
                key={service.number}
                className="bg-white rounded-xl shadow-sm p-6 sm:p-7 lg:p-8 hover:shadow-md transition-shadow border-t-4 border-blue-500"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {service.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#F3F4F6] rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('euCitizensParentsPermit.benefitsOfService.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {serviceBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 sm:p-6 border-l-4 border-green-500"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/85 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t('euCitizensParentsPermit.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('euCitizensParentsPermit.cta.description')}
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffffff',
              color: '#000000',
              fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' },
              fontWeight: 600,
              px: { xs: 4, sm: 6, lg: 8 },
              py: { xs: 1.2, sm: 1.5, lg: 1.8 },
              borderRadius: '9999px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#f3f4f6',
              },
            }}
          >
            {t('euCitizensParentsPermit.cta.button')}
          </Button>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5">
            {t('euCitizensParentsPermit.cta.subtext')}
          </p>
        </section>
      </div>
    </div>
  );
}
