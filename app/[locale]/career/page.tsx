'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider } from 'react-hook-form';
import Image from 'next/image';
import MenuItem from '@mui/material/MenuItem';
import Navbar from '../../components/Navbar';
import { RHFSelect } from '../../components/fields/rhf-select';
import { RHFTextField } from '../../components/fields/rhf-text-field';
import { RHFTextarea } from '../../components/fields/rhf-textarea';
import { RHFUpload } from '../../components/fields/rhf-upload';

export default function CareerPage() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);

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

  const { handleSubmit, setValue } = methods;

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      i18n.on('initialized', () => setIsReady(true));
    }
  }, [i18n]);

  if (!isReady) return null;

  const positions = t('career.positionDetails.positions', { returnObjects: true }) as any[] || [];
  const openPositions = t('career.openPositions.positions', { returnObjects: true }) as any[] || [];
  const benefits = t('career.whyJoin.benefits', { returnObjects: true }) as any[] || [];

  const handlePositionSelect = (positionId: number) => {
    setValue('position', positions.find(p => p.id === positionId)?.title || '');
  };

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Add your form submission logic here
  };

  return (
    <main className="min-h-screen bg-white">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12">
              {t('career.openPositions.heading')}
            </h2>
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
                  {openPositions.map((position) => (
                    <tr key={position.id} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                      <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-900 font-medium">{position.title}</td>
                      <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-600">{position.location}</td>
                      <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-600">{position.type}</td>
                      <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-600">{position.deadline}</td>
                      <td className="px-4 sm:px-6 py-4 text-center">
                        <button
                          onClick={() => handlePositionSelect(position.id)}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Apply Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Position Details Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{ width: '1400px', maxWidth: 'calc(100% - 32px)' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12">
              {t('career.positionDetails.heading')}
            </h2>
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {positions.map((position) => (
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
                          {position.type}
                        </span>
                        <span className="flex items-center gap-2">
                          <Image
                            src="/ic-calendar.svg"
                            alt="Deadline"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                          {position.deadline}
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
                    <div className="px-6 sm:px-8 py-6 sm:py-8 border-t border-gray-200 bg-white">
                      <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                        {position.summary}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-4">Responsibilities</h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {position.responsibilities.map((resp: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">•</span>
                                <span className="text-xs sm:text-sm text-gray-700">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-4">Requirements</h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {position.requirements.map((req: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                                <span className="text-xs sm:text-sm text-gray-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <button
                        onClick={() => handlePositionSelect(position.id)}
                        className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
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

              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                  {/* Position Dropdown */}
                  <div>
                    <RHFSelect
                      name="position"
                      label={t('career.applicationForm.fields.position')}
                      helperText=""
                      rules={{}}
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
                      label={t('career.applicationForm.fields.fullName')}
                      placeholder="Your full name"
                      type="text"
                      helperText=""
                      slotProps={{}}
                      rules={{ required: 'Full name is required' }}
                      sx={{}}
                    />

                    <RHFTextField
                      name="email"
                      label={t('career.applicationForm.fields.email')}
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
                      label={t('career.applicationForm.fields.phone')}
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
                      label={t('career.applicationForm.fields.resume')}
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
                    label={t('career.applicationForm.fields.additionalInfo')}
                    placeholder="Tell us anything else you'd like us to know..."
                    rows={5}
                    helperText=""
                    slotProps={{}}
                    rules={{}}
                    sx={{}}
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base mt-6 sm:mt-8"
                  >
                    {t('career.applicationForm.fields.submit')}
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
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

