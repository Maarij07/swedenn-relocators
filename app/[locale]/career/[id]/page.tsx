'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import useVacancyDetails from '../../../utils/useVacancyDetails';

// Helper function to format date
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
};

// Helper function to parse list text
const parseListText = (text: string | null): string[] => {
  if (!text) return [];
  return text
    .split('\n')
    .map(item => item.trim())
    .filter(item => item.length > 0);
};

export default function VacancyDetailsPage() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const vacancyId = params?.id as string;
  const [isReady, setIsReady] = useState(false);
  const { vacancy, loading, error } = useVacancyDetails(vacancyId);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      i18n.on('initialized', () => setIsReady(true));
    }
  }, [i18n]);

  if (!isReady) return null;

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8F9FE]">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <svg className="animate-spin h-12 w-12 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-700 font-medium">Loading vacancy details...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !vacancy) {
    return (
      <main className="min-h-screen bg-[#F8F9FE]">
        <Navbar />
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
          <Link href="/career" className="text-blue-600 hover:text-blue-700 mb-8 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Careers
          </Link>
          <div className="bg-red-50 rounded-2xl p-8 sm:p-12 border border-red-200">
            <p className="text-red-800 font-medium mb-2">Unable to load vacancy details</p>
            <p className="text-red-700 text-sm">{error || 'Vacancy not found'}</p>
          </div>
        </div>
      </main>
    );
  }

  const technicalSkills = parseListText(vacancy.technical_skills);
  const softSkills = parseListText(vacancy.soft_skills);
  const languages = vacancy.languages || [];
  const nationalities = vacancy.nationalities || [];
  const benefits = vacancy.benefits || [];

  return (
    <main className="min-h-screen bg-[#F8F9FE]">
      <Navbar />

      {/* Breadcrumb */}
      <section className="py-6 sm:py-8 bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
          <Link href="/career" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Careers
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {vacancy.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{vacancy.vacancy_industry}</p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Location</p>
                  <p className="text-sm sm:text-base font-medium text-gray-900">{vacancy.location}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Type</p>
                  <p className="text-sm sm:text-base font-medium text-gray-900">{vacancy.vacancy_type}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Mode</p>
                  <p className="text-sm sm:text-base font-medium text-gray-900">{vacancy.vacancy_mode}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Positions</p>
                  <p className="text-sm sm:text-base font-medium text-gray-900">{vacancy.number_of_positions}</p>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 h-fit">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Position Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Application Deadline</p>
                  <p className="text-sm font-medium text-red-600">{formatDate(vacancy.application_deadline)}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Start Date</p>
                  <p className="text-sm font-medium text-gray-900">{formatDate(vacancy.starting_date)}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Experience Level</p>
                  <p className="text-sm font-medium text-gray-900">{vacancy.vacancy_experience}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Education</p>
                  <p className="text-sm font-medium text-gray-900">{vacancy.vacancy_education}</p>
                </div>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              {vacancy.description && (
                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Role</h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {vacancy.description}
                  </p>
                </div>
              )}

              {/* Technical Skills */}
              {technicalSkills.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Skills & Responsibilities</h2>
                  <ul className="space-y-3">
                    {technicalSkills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Soft Skills / Requirements */}
              {softSkills.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements & Qualifications</h2>
                  <ul className="space-y-3">
                    {softSkills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">•</span>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Languages */}
              {languages.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Languages Required</h3>
                  <div className="space-y-2">
                    {languages.map((lang: any) => (
                      <span key={lang.id} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                        {lang.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Nationalities */}
              {nationalities.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Preferred Nationalities</h3>
                  <div className="space-y-2">
                    {nationalities.map((nat: any) => (
                      <div key={nat.id} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {nat.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {benefits.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Benefits</h3>
                  <div className="space-y-2">
                    {benefits.map((benefit: any) => (
                      <div key={benefit.id} className="flex items-center gap-2 text-gray-700 text-sm">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contract Details */}
              <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contract Details</h3>
                <div className="space-y-3 text-sm">
                  {vacancy.contract_duration && (
                    <div>
                      <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Duration</p>
                      <p className="text-gray-900 font-medium">{vacancy.contract_duration}</p>
                    </div>
                  )}
                  {vacancy.employment_basis && (
                    <div>
                      <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Employment Basis</p>
                      <p className="text-gray-900 font-medium">{vacancy.employment_basis}</p>
                    </div>
                  )}
                  {vacancy.salary_type && (
                    <div>
                      <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Salary Type</p>
                      <p className="text-gray-900 font-medium">{vacancy.salary_type}</p>
                    </div>
                  )}
                  {vacancy.bonus_structure && (
                    <div>
                      <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Bonus Structure</p>
                      <p className="text-gray-900 font-medium">{vacancy.bonus_structure}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Certifications */}
              {vacancy.certifications && (
                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Certifications</h3>
                  <p className="text-gray-700 text-sm">{vacancy.certifications}</p>
                </div>
              )}

              {/* Age Requirements */}
              {vacancy.age && (
                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Age Requirement</h3>
                  <p className="text-gray-700 text-sm">{vacancy.age}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our team and make an impact. Click the button below to start your application.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Apply Now
          </button>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Additional Information</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Job Type */}
            {vacancy.type && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Job Classification</p>
                <p className="text-lg font-bold text-gray-900 capitalize">{vacancy.type}</p>
              </div>
            )}

            {/* Post Published Date */}
            {vacancy.published_at && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Posted On</p>
                <p className="text-lg font-bold text-gray-900">{formatDate(vacancy.published_at)}</p>
              </div>
            )}

            {/* Expected End Date */}
            {vacancy.expected_end_date && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Expected End Date</p>
                <p className="text-lg font-bold text-gray-900">{formatDate(vacancy.expected_end_date)}</p>
              </div>
            )}

            {/* Payment Terms */}
            {vacancy.payment_terms && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Payment Terms</p>
                <p className="text-lg font-bold text-gray-900">{vacancy.payment_terms}</p>
              </div>
            )}
          </div>

          {/* Additional Notes */}
          {(vacancy.onboarding_process || vacancy.possibility_extension || vacancy.additional_contract_benefits) && (
            <div className="mt-8 bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Information</h3>
              
              <div className="space-y-4">
                {vacancy.onboarding_process && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Onboarding Process</p>
                    <p className="text-gray-600">{vacancy.onboarding_process}</p>
                  </div>
                )}

                {vacancy.possibility_extension && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Contract Extension</p>
                    <p className="text-gray-600">{vacancy.possibility_extension}</p>
                  </div>
                )}

                {vacancy.additional_contract_benefits && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Additional Benefits</p>
                    <p className="text-gray-600">{vacancy.additional_contract_benefits}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Comprehensive Summary Table */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Complete Job Summary</h2>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column */}
              <div className="divide-y divide-gray-200">
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Position Title</p>
                  <p className="text-lg font-bold text-gray-900">{vacancy.title}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Industry</p>
                  <p className="text-gray-900">{vacancy.vacancy_industry}</p>
                  {vacancy.vacancy_sub_industry && <p className="text-sm text-gray-600 mt-1">Sub-industry: {vacancy.vacancy_sub_industry}</p>}
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Location</p>
                  <p className="text-gray-900">{vacancy.location}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Employment Type</p>
                  <p className="text-gray-900">{vacancy.vacancy_type}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Work Mode</p>
                  <p className="text-gray-900">{vacancy.vacancy_mode}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Positions Available</p>
                  <p className="text-gray-900">{vacancy.number_of_positions}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="divide-y divide-gray-200 md:border-l md:border-gray-200">
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Experience Required</p>
                  <p className="text-gray-900">{vacancy.vacancy_experience}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Education Required</p>
                  <p className="text-gray-900">{vacancy.vacancy_education}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Contract Duration</p>
                  <p className="text-gray-900">{vacancy.contract_duration || 'N/A'}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Start Date</p>
                  <p className="text-gray-900">{formatDate(vacancy.starting_date)}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Application Deadline</p>
                  <p className="text-red-600 font-semibold">{formatDate(vacancy.application_deadline)}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Salary Structure</p>
                  <div className="space-y-1">
                    <p className="text-gray-900">{vacancy.salary_type}</p>
                    {vacancy.bonus_structure && <p className="text-sm text-gray-600">Bonus: {vacancy.bonus_structure}</p>}
                    {vacancy.payment_terms && <p className="text-sm text-gray-600">Terms: {vacancy.payment_terms}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
