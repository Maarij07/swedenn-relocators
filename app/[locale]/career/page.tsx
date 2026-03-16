'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider } from 'react-hook-form';
import Image from 'next/image';
import MenuItem from '@mui/material/MenuItem';
import Navbar from '../../components/Navbar';
import { RHFSelect } from '../../components/fields/rhf-select';
import { RHFTextField } from '../../components/fields/rhf-text-field';
import { RHFTextarea } from '../../components/fields/rhf-textarea';
import { RHFUpload } from '../../components/fields/rhf-upload';
import useVacancies from '../../utils/useVacancies';
import axiosInstance, { endpoints } from '../../utils/axios';

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

// Helper function to add asterisk for required fields
const addAsterisk = (label: string) => (
  <>
    {label}
    <span className="text-red-500 ml-1">*</span>
  </>
);

export default function CareerPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const { vacancies, loading: vacanciesLoading, error: vacanciesError } = useVacancies();
  const applicationFormRef = useRef<HTMLDivElement>(null);

  const methods = useForm({
    defaultValues: {
      position: '',
      fullName: '',
      email: '',
      phone: '',
      resume: null as File | null,
      coverLetter: null as File | null,
      linkedin: '',
      additionalInfo: '',
    },
  });

  const { handleSubmit, setValue, reset } = methods;

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      i18n.on('initialized', () => setIsReady(true));
    }
  }, [i18n]);

  if (!isReady) return null;

  const benefits = t('career.whyJoin.benefits', { returnObjects: true }) as any[] || [];
  
  // Use API data directly
  const positions = vacancies;
  const openPositions = vacancies;

  const handlePositionSelect = (positionId: number) => {
    setValue('position', positions.find(p => p.id === positionId)?.title || '');
  };

  const handleApplyNow = (positionId: number) => {
    const positionTitle = positions.find(p => p.id === positionId)?.title || '';
    setValue('position', positionTitle);
    
    // Scroll to application form smoothly
    setTimeout(() => {
      applicationFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      setSubmitMessage(null);

      // Find the selected position to get its ID
      const selectedPosition = positions.find(p => p.title === data.position);
      if (!selectedPosition) {
        setSubmitMessage({ type: 'error', text: 'Please select a position' });
        return;
      }

      // Create FormData object for file uploads
      const formData = new FormData();
      formData.append('vacancy_id', selectedPosition.id.toString());
      formData.append('full_name', data.fullName || '');
      formData.append('email', data.email || '');
      formData.append('phone_number', data.phone || '');
      formData.append('linkedin_profile', data.linkedin || '');
      formData.append('additional_information', data.additionalInfo || '');

      // Append files if they exist
      if (data.resume) {
        formData.append('resume', data.resume);
      }
      if (data.coverLetter) {
        formData.append('cover_letter', data.coverLetter);
      }

      // Submit to API
      const response = await axiosInstance.post(endpoints.vacancy.apply, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Success
      setSubmitMessage({ type: 'success', text: 'Application submitted successfully! We will review it shortly.' });
      
      // Reset form after successful submission
      setTimeout(() => {
        methods.reset();
        setSubmitMessage(null);
      }, 3000);
    } catch (error: any) {
      console.error('Application submission error:', error);
      setSubmitMessage({ 
        type: 'error', 
        text: error?.message || 'Failed to submit application. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FE]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border border-gray-300 rounded-lg mx-auto mt-[160px] sm:mt-[180px] lg:mt-[200px]" style={{
        backgroundImage: 'url(/bg-new-in-sweden.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '1400px',
        maxWidth: 'calc(100% - 32px)',
        height: '289px',
        margin: '160px auto 0',
      }}>
        <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: 'rgba(20, 26, 33, 0.88)' }}></div>
        <div className="relative h-full pt-6 sm:pt-8 pb-6 sm:pb-8 px-8 sm:px-10">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto h-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
              <div>
                <p className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-bold text-white mb-2">
                  {t('career.hero.title')}
                </p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-400 leading-[1.5] pr-12 font-normal">
                  {t('career.hero.subtitle')}
                </p>
              </div>
              <div className="relative w-full flex justify-center lg:justify-end">
                <Image
                  src="/service-illustration.svg"
                  alt="Careers illustration"
                  width={300}
                  height={250}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 lg:p-10 border-l-4 border-blue-500">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                {t('career.intro.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Table Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12">
              {t('career.openPositions.heading')}
            </h2>

            {/* Loading State */}
            {vacanciesLoading && (
              <div className="bg-blue-50 rounded-2xl p-8 sm:p-12 text-center">
                <div className="inline-block">
                  <svg className="animate-spin h-8 w-8 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">Loading positions...</p>
              </div>
            )}

            {/* Error State */}
            {vacanciesError && (
              <div className="bg-red-50 rounded-2xl p-8 sm:p-12 border border-red-200">
                <p className="text-red-800 font-medium mb-2">Unable to load positions</p>
                <p className="text-red-700 text-sm">{vacanciesError}</p>
              </div>
            )}

            {/* Data Loaded - Show Table */}
            {!vacanciesLoading && !vacanciesError && openPositions.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-200 border-b-2 border-gray-300">
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Position Title</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Location</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Employment Type</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Application Deadline</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {openPositions.map((position: any) => (
                      <tr key={position.id} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                        <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-900 font-medium">{position.title}</td>
                        <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-600">{position.location}</td>
                        <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-600">{position.vacancy_type}</td>
                        <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-600">{formatDate(position.application_deadline)}</td>
                        <td className="px-4 sm:px-6 py-4 text-center">
                          <button
                            onClick={() => setExpandedPosition(position.id)}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* No Data State */}
            {!vacanciesLoading && !vacanciesError && openPositions.length === 0 && (
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
                <p className="text-gray-600 font-medium">No positions available at the moment.</p>
                <p className="text-gray-500 text-sm mt-2">Please check back later for new opportunities.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Position Details Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12">
              Position Details
            </h2>
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {positions.length > 0 ? (
                positions.map((position) => (
                  <div
                    key={position.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setExpandedPosition(expandedPosition === position.id ? null : position.id)}
                      className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-left">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12c0 7 10 13 10 13s10-6 10-13c0-5.52-4.48-10-10-10zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                            </svg>
                            {position.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <Image
                              src="/ic-mail.svg"
                              alt="Employment type"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            {position.vacancy_type}
                          </span>
                          <span className="flex items-center gap-2">
                            <Image
                              src="/ic-calendar.svg"
                              alt="Deadline"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            {formatDate(position.application_deadline)}
                          </span>
                        </div>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                          expandedPosition === position.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {expandedPosition === position.id && (
                      <div className="px-6 sm:px-8 py-6 sm:py-8 border-t border-gray-200 bg-white space-y-6">
                        
                        {/* Key Position Info */}
                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">Position Overview</h4>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Positions Available</p>
                              <p className="text-gray-900 font-medium">{position.number_of_positions}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Work Mode</p>
                              <p className="text-gray-900 font-medium">{position.vacancy_mode}</p>
                            </div>
                            {position.type && (
                              <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Job Classification</p>
                                <p className="text-gray-900 font-medium capitalize">{position.type}</p>
                              </div>
                            )}
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Employment Type</p>
                              <p className="text-gray-900 font-medium">{position.vacancy_type}</p>
                            </div>
                          </div>
                        </div>

                        {/* Industry & Location */}
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Industry</p>
                            <p className="text-gray-900">{position.vacancy_industry}</p>
                            {position.vacancy_sub_industry && <p className="text-xs text-gray-600 mt-1">Sub: {position.vacancy_sub_industry}</p>}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Location</p>
                            <p className="text-gray-900">{position.location}</p>
                          </div>
                        </div>

                        {/* Experience & Education */}
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Experience Required</p>
                            <p className="text-gray-900">{position.vacancy_experience}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Education Required</p>
                            <p className="text-gray-900">{position.vacancy_education}</p>
                          </div>
                        </div>

                        {/* Important Dates */}
                        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">Important Dates</h4>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Application Deadline</p>
                              <p className="text-red-600 font-bold">{formatDate(position.application_deadline)}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Start Date</p>
                              <p className="text-gray-900 font-medium">{formatDate(position.starting_date)}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Expected End Date</p>
                              <p className="text-gray-900 font-medium">{position.expected_end_date ? formatDate(position.expected_end_date) : 'N/A'}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Published</p>
                              <p className="text-gray-900 font-medium">{formatDate(position.published_at)}</p>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        {position.description && (
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">About This Role</h4>
                            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                              {position.description}
                            </p>
                          </div>
                        )}

                        {/* Technical Skills */}
                        {parseListText(position.technical_skills).length > 0 && (
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Technical Skills & Responsibilities</h4>
                            <ul className="space-y-2 text-sm">
                              {parseListText(position.technical_skills).map((skill, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                                  <span className="text-gray-700">{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Soft Skills / Requirements */}
                        {parseListText(position.soft_skills).length > 0 && (
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Requirements & Qualifications</h4>
                            <ul className="space-y-2 text-sm">
                              {parseListText(position.soft_skills).map((skill, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">•</span>
                                  <span className="text-gray-700">{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Languages */}
                        {position.languages && position.languages.length > 0 && (
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Languages Required</h4>
                            <div className="flex flex-wrap gap-2">
                              {position.languages.map((lang: any) => (
                                <span key={lang.id} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                  {lang.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Nationalities */}
                        {position.nationalities && position.nationalities.length > 0 && (
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Preferred Nationalities</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              {position.nationalities.map((nat: any) => (
                                <div key={nat.id} className="flex items-center gap-2 text-gray-700">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                  {nat.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Benefits */}
                        {position.benefits && position.benefits.length > 0 && (
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Benefits</h4>
                            <div className="space-y-2 text-sm">
                              {position.benefits.map((benefit: any) => (
                                <div key={benefit.id} className="flex items-center gap-2 text-gray-700">
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
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">Contract Details</h4>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                            {position.contract_duration && (
                              <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Duration</p>
                                <p className="text-gray-900 font-medium">{position.contract_duration}</p>
                              </div>
                            )}
                            {position.vacancy_contract_type && (
                              <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Contract Type</p>
                                <p className="text-gray-900 font-medium">{position.vacancy_contract_type}</p>
                              </div>
                            )}
                            {position.employment_basis && (
                              <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Employment Basis</p>
                                <p className="text-gray-900 font-medium">{position.employment_basis}</p>
                              </div>
                            )}
                            {position.salary_type && (
                              <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Salary Type</p>
                                <p className="text-gray-900 font-medium">{position.salary_type}</p>
                              </div>
                            )}
                            {position.bonus_structure && (
                              <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Bonus Structure</p>
                                <p className="text-gray-900 font-medium">{position.bonus_structure}</p>
                              </div>
                            )}
                            {position.payment_terms && (
                              <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Payment Terms</p>
                                <p className="text-gray-900 font-medium">{position.payment_terms}</p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Additional Requirements */}
                        <div className="grid sm:grid-cols-3 gap-4 text-sm">
                          {position.certifications && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Certifications</p>
                              <p className="text-gray-900">{position.certifications}</p>
                            </div>
                          )}
                          {position.age && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Age Requirement</p>
                              <p className="text-gray-900">{position.age}</p>
                            </div>
                          )}
                          {position.gender && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Gender</p>
                              <p className="text-gray-900">{position.gender || 'No restriction'}</p>
                            </div>
                          )}
                        </div>

                        {/* Optional Additional Info */}
                        {(position.onboarding_process || position.possibility_extension || position.additional_contract_benefits) && (
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">Additional Information</h4>
                            <div className="space-y-4">
                              {position.onboarding_process && (
                                <div>
                                  <p className="text-sm font-semibold text-gray-700 mb-2">Onboarding Process</p>
                                  <p className="text-sm text-gray-600">{position.onboarding_process}</p>
                                </div>
                              )}
                              {position.possibility_extension && (
                                <div>
                                  <p className="text-sm font-semibold text-gray-700 mb-2">Contract Extension</p>
                                  <p className="text-sm text-gray-600">{position.possibility_extension}</p>
                                </div>
                              )}
                              {position.additional_contract_benefits && (
                                <div>
                                  <p className="text-sm font-semibold text-gray-700 mb-2">Additional Benefits</p>
                                  <p className="text-sm text-gray-600">{position.additional_contract_benefits}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        <button
                          onClick={() => handleApplyNow(position.id)}
                          className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Apply Now
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
                  <p className="text-gray-600 font-medium">Position details will appear once loaded.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={applicationFormRef} className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t('career.applicationForm.heading')}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-10 lg:mb-12">
              {t('career.applicationForm.description')}
            </p>

            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                {t('career.applicationForm.formTitle')}
              </h3>

              {/* Success/Error Message */}
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <p className={`text-sm font-medium ${submitMessage.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                    {submitMessage.text}
                  </p>
                </div>
              )}

              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                  {/* Position Dropdown */}
                  <div>
                    <RHFSelect
                      name="position"
                      label={addAsterisk(t('career.applicationForm.fields.position'))}
                      helperText=""
                      rules={{ required: 'Position is required' }}
                      sx={{}}
                    >
                      <MenuItem value="">
                        <em>Select a position</em>
                      </MenuItem>
                      {positions.map((pos) => (
                        <MenuItem key={pos.id} value={pos.title}>
                          {pos.title}
                        </MenuItem>
                      ))}
                    </RHFSelect>
                  </div>

                  {/* Full Name & Email - 2 columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <RHFTextField
                      name="fullName"
                      label={addAsterisk(t('career.applicationForm.fields.fullName'))}
                      placeholder="Your full name"
                      type="text"
                      helperText=""
                      slotProps={{}}
                      rules={{ required: 'Full name is required' }}
                      sx={{}}
                    />

                    <RHFTextField
                      name="email"
                      label={addAsterisk(t('career.applicationForm.fields.email'))}
                      placeholder="your.email@example.com"
                      type="email"
                      helperText=""
                      slotProps={{}}
                      rules={{ required: 'Email is required' }}
                      sx={{}}
                    />
                  </div>

                  {/* Phone & LinkedIn - 2 columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <RHFTextField
                      name="phone"
                      label={addAsterisk(t('career.applicationForm.fields.phone'))}
                      placeholder="+46 123 456 789"
                      type="tel"
                      helperText=""
                      slotProps={{}}
                      rules={{ required: 'Phone number is required' }}
                      sx={{}}
                    />

                    <RHFTextField
                      name="linkedin"
                      label={t('career.applicationForm.fields.linkedin')}
                      placeholder="https://linkedin.com/in/yourprofile"
                      type="url"
                      helperText=""
                      slotProps={{}}
                      rules={{}}
                      sx={{}}
                    />
                  </div>

                  {/* Resume & Cover Letter - 2 columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <RHFUpload
                      name="resume"
                      label={addAsterisk(t('career.applicationForm.fields.resume'))}
                      helperText={t('career.applicationForm.fields.resumeNote')}
                      accept=".pdf,.docx"
                      required={true}
                      rules={{ required: 'Resume is required' }}
                      sx={{}}
                    />

                    <RHFUpload
                      name="coverLetter"
                      label={t('career.applicationForm.fields.coverLetter')}
                      helperText={t('career.applicationForm.fields.coverLetterNote')}
                      accept=".pdf,.docx"
                      required={false}
                      rules={{}}
                      sx={{}}
                    />
                  </div>

                  {/* Additional Info - Full width */}
                  <RHFTextarea
                    name="additionalInfo"
                    label={addAsterisk(t('career.applicationForm.fields.additionalInfo'))}
                    placeholder="Tell us anything else you'd like us to know..."
                    rows={5}
                    helperText=""
                    slotProps={{}}
                    rules={{ required: 'Additional information is required' }}
                    sx={{}}
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg text-sm sm:text-base mt-6 sm:mt-8 transition-colors ${
                      isSubmitting
                        ? 'bg-blue-400 text-white cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      t('career.applicationForm.fields.submit')
                    )}
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t('career.whyJoin.heading')}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-3xl">
              {t('career.whyJoin.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-7 lg:p-8 border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Talent Community Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F9FE]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
            <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10 lg:p-12 text-center border-t-4 border-blue-500">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-5">
                {t('career.talentCommunity.heading')}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                {t('career.talentCommunity.description')}
              </p>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                {t('career.talentCommunity.button')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

