'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Pagination,
} from '@mui/material';
import Image from 'next/image';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useTranslation } from 'react-i18next';
import { MovingFlagsCarousel } from './MovingFlagsCarousel';

const steps = [
  { name: 'Create Account' },
  { name: 'Apply' },
  { name: 'Upload Document' },
  { name: 'Appointment' },
  { name: 'Submit' },
] as const;

const visaApplications = [
  {
    id: 1,
    title: 'Sweden Visit Visa Application',
    caseNumber: '52385971',
    authority: 'MGVKT',
    status: 'In Progress',
    duration: '10 days',
    registeredOn: '2025-07-11',
    country: 'Sweden',
  },
  {
    id: 2,
    title: 'Sweden Work Visa Application',
    caseNumber: '98234561',
    authority: 'MGVKT',
    status: 'Submitted',
    duration: '15 days',
    registeredOn: '2025-06-02',
    country: 'Sweden',
  },
  {
    id: 3,
    title: 'Sweden Study Visa Application',
    caseNumber: '77451239',
    authority: 'MGVKT',
    status: 'Approved',
    duration: '7 days',
    registeredOn: '2025-05-18',
    country: 'Sweden',
  },
] as const;

type StepIndex = 0 | 1 | 2 | 3 | 4;

export default function VisaApplicationJourney() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  const [activeStep, setActiveStep] = useState<number>(0);
  const [isManual, setIsManual] = useState(false);
  const [visaPage, setVisaPage] = useState(1);

  // Step 1 (Create Account) dropdown state
  const [accountType, setAccountType] = useState<string>('');
  const [accountCategory, setAccountCategory] = useState<string>('');

  // Step 2 (Personal Information) dropdown state
  const [gender, setGender] = useState<string>('');

  // Upload documents state (Upload Document step)
  const [documents, setDocuments] = useState<
    Array<{
      id: number;
      name: string;
      sizeLabel: string;
    }>
  >([]);

  // Inline calendar state (Appointment step)
  const [calendarDate, setCalendarDate] = useState(() => new Date(2025, 9, 1)); // October 2025 to match Figma
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'Month' | 'Week' | 'Day' | 'Agenda'>('Month');

  const startOfMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1);
  const endOfMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0);
  const startWeekday = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  // Sample appointments matching Figma design
  const appointments = [
    { id: 1, title: 'Global Visa Center', startDate: new Date(2025, 9, 4), time: '2:15 PM', color: '#7dd3fc', textColor: '#0369a1', duration: 1 },
    { id: 2, title: 'Biometric Process', startDate: new Date(2025, 9, 9), time: '2:45p', color: '#86efac', textColor: '#15803d', duration: 3 },
    { id: 3, title: 'Collect Passport', startDate: new Date(2025, 9, 17), time: '3p', color: '#c4b5fd', textColor: '#5b21b6', duration: 2 },
    { id: 4, title: 'Approval', startDate: new Date(2025, 9, 12), time: '4:15 PM', color: '#fde68a', textColor: '#92400e', duration: 2 },
  ];

  const visibleDays = Array.from({ length: startWeekday + daysInMonth }, (_, i) => {
    const dayNum = i - startWeekday + 1;
    if (dayNum < 1) return null;
    return new Date(calendarDate.getFullYear(), calendarDate.getMonth(), dayNum);
  });

  const goMonth = (delta: number) => {
    setCalendarDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  };

  // Helper to check if date has appointment
  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter(apt => {
      const aptDate = apt.startDate;
      return date >= aptDate && date < new Date(aptDate.getTime() + apt.duration * 24 * 60 * 60 * 1000);
    });
  };

  // Upload document handlers
  const handleAddDocuments = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setDocuments((prev) => [
      ...prev,
      ...Array.from(files).map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        sizeLabel: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      })),
    ]);
  };

  const handleRemoveDocument = (id: number) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  };

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  // Auto progression every 3s (disabled after manual click)
  useEffect(() => {
    if (isManual) return;
    const t = setInterval(() => {
      setActiveStep((prev) => (((prev + 1) % steps.length) as StepIndex));
    }, 3000);
    return () => clearInterval(t);
  }, [isManual]);

  const percent = useMemo(() => (activeStep / (steps.length - 1)) * 100, [activeStep]);
  const contentKey = useMemo(() => `step-${activeStep}`, [activeStep]);

  const stepLabelSv: Record<string, string> = {
    'Create Account': 'Skapa konto',
    Apply: 'Ansök',
    'Upload Document': 'Ladda upp dokument',
    Appointment: 'Boka tid',
    Submit: 'Skicka in',
  };

  const currentVisa = useMemo(
    () => visaApplications[visaPage - 1] ?? visaApplications[0],
    [visaPage]
  );

  return (
    <Box sx={{ width: '100%', backgroundColor: '#FFFFFF', pt: { xs: '0.25rem', sm: '0.5rem', md: '0.75rem', lg: '1rem', '3xl': '1.25rem', '4k': '1.5rem' }, pb: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem', '3xl': '7rem', '4k': '8rem' }, overflowX: 'hidden' }}>
      {/* EXACT same container as Hero/Services (Tailwind classes) */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* ---------- TIMELINE ---------- */}
        <Box sx={{ mb: { xs: 4, sm: 5, lg: 6 } }}>
          <Box sx={{ position: 'relative', py: { xs: 6, sm: 7, lg: 8 } }}>
            {/* Main timeline container */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '100px', sm: '110px', lg: '120px' },
              }}
            >
              {/* Background track */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  height: { xs: 4, sm: 5, lg: 6 },
                  borderRadius: '9999px',
                  backgroundColor: '#e5e7eb',
                  zIndex: 1,
                }}
              />

              {/* Progress track */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  height: { xs: 4, sm: 5, lg: 6 },
                  borderRadius: '9999px',
                  backgroundColor: '#3b82f6',
                  width: `${percent}%`,
                  transition: 'width 3s cubic-bezier(0.22, 1, 0.36, 1)',
                  zIndex: 2,
                }}
              />

              {/* DOTS */}
              {steps.map((s, i) => {
                const left = (i / (steps.length - 1)) * 100;
                const isCompleted = i <= activeStep;
                const isActive = i === activeStep;

                return (
                  <Box
                    key={s.name}
                    onClick={() => {
                      setIsManual(true);
                      setActiveStep(i as StepIndex);
                    }}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: `${left}%`,
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                      zIndex: 20,
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isCompleted ? '#3b82f6' : '#e5e7eb',
                        border: isActive ? '3px solid #ffffff' : 'none',
                        boxShadow: isActive ? '0 0 0 2px #3b82f6' : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {isActive && (
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: '#ffffff',
                          }}
                        />
                      )}
                    </Box>

                    <Box sx={{ mt: 3, position: 'absolute', top: '100%' }}>
                      <Typography
                        sx={{
                          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                          color: isActive ? '#3b82f6' : isCompleted ? '#1e293b' : '#94a3b8',
                          fontWeight: isActive || isCompleted ? 700 : 500,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {isSv ? stepLabelSv[s.name] ?? s.name : s.name}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}

              {/* PLANE */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: `${percent}%`,
                  transform: 'translate(-50%, -50%)',
                  width: { xs: 40, sm: 44, lg: 48, '3xl': 56, '4k': 72 },
                  height: { xs: 40, sm: 44, lg: 48, '3xl': 56, '4k': 72 },
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 30,
                  transition: 'left 3s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 28, sm: 32, lg: 36, '3xl': 42, '4k': 54 },
                    height: { xs: 28, sm: 32, lg: 36, '3xl': 42, '4k': 54 },
                    animation: 'planeBob 1.5s ease-in-out infinite',
                    '@keyframes planeBob': {
                      '0%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-3px)' },
                      '100%': { transform: 'translateY(0px)' },
                    },
                  }}
                >
                  <Image
                    src="/aeroplane.svg"
                    alt="Plane"
                    width={30}
                    height={24}
                    style={{ width: '100%', height: '100%' }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ---------- FLAG SLIDER ---------- */}
        <Box sx={{ mb: { xs: 4, sm: 5, lg: 6 } }}>
          <MovingFlagsCarousel />
        </Box>

        {/* ---------- CONTENT AREA ---------- */}
        <Box
          key={contentKey}
          sx={{
            backgroundColor: activeStep === 0 || activeStep === 1 ? '#ffffff' : '#f8fafc',
            borderRadius: '12px',
            overflow: 'hidden',
            p: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', '3xl': '3.5rem', '4k': '4.5rem' },
            minHeight: { xs: 320, sm: 380, md: 450, '3xl': 520, '4k': 680 },
            '@keyframes stepFadeIn': {
              '0%': { opacity: 0, transform: 'translateY(10px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
            animation: 'stepFadeIn 0.35s ease-out',
          }}
        >
          {/* Step 0 - Create Account (Figma layout with dropdowns) */}
          {activeStep === 0 && (
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: '28px',
                boxShadow: '0 24px 60px rgba(15,23,42,0.10)',
                p: { xs: 2.25, sm: 2.75, md: 3.25 },
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Light background only on left half */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: '50%',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '24px 0 0 24px',
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, minmax(0, 1fr))' },
                  gap: {
                    xs: '2rem',
                    sm: '2.5rem',
                    md: '3rem',
                    lg: '3.5rem',
                    xl: '4rem',
                    '2xl': '5rem',
                    '3xl': '6rem',
                    '4k': '8rem',
                  },
                  alignItems: 'stretch',
                  width: '100%',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* LEFT: big account illustration card */}
                <Box
                  sx={{
                    backgroundColor: 'transparent',
                    borderRadius: '24px',
                    px: { xs: 3, md: 3.5 },
                    pt: { xs: 3, md: 3.5 },
                    pb: { xs: 2.5, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: { xs: 320, md: 380, lg: 420 },
                  }}
                >
                  {/* Top text */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.85rem', sm: '0.9rem', '3xl': '1rem', '4k': '1.25rem' },
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#f97316',
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      INDIVIDUAL (PRIVATE ACCOUNT)
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.9rem', sm: '0.95rem', '3xl': '1.05rem', '4k': '1.35rem' },
                        color: '#0f172a',
                        fontWeight: 600,
                      }}
                    >
                      Set up your account to apply for yourself and your family.
                    </Typography>
                  </Box>

                  {/* Illustration */}
                  <Box
                    sx={{
                      mt: { xs: 3, md: 4 },
                      mb: { xs: 2, md: 3 },
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: 320,
                        height: { xs: 200, md: 230, lg: 260 },
                      }}
                    >
                      <Image
                        src="/t1.svg"
                        alt="Individual account illustration"
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                  </Box>

                  {/* Social icons row at the very bottom (centered) */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 2,
                      mt: { xs: 1.5, md: 2 },
                    }}
                  >
                    {[
                      { src: '/facebook.svg', alt: 'Facebook' },
                      { src: '/insta.svg', alt: 'Instagram' },
                      { src: '/x.svg', alt: 'X' },
                      { src: '/playstore.svg', alt: 'Playstore' },
                    ].map((icon) => (
                      <Box
                        key={icon.alt}
                        component="a"
                        href="#"
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          backgroundColor: '#f1f5f9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 6px 16px rgba(15,23,42,0.10)',
                          '&:hover': {
                            backgroundColor: '#e2e8f0',
                            transform: 'translateY(-1px)',
                          },
                        }}
                      >
                        <Image src={icon.src} alt={icon.alt} width={18} height={18} />
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* RIGHT: Get Started form with dropdowns */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 2, md: 2.5 },
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Top pill */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      alignSelf: 'flex-start',
                      px: 3,
                      py: 0.8,
                      borderRadius: '999px',
                      backgroundColor: '#0f172a',
                      boxShadow: '0 12px 32px rgba(15,23,42,0.45)',
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: { xs: '0.8rem', sm: '0.85rem', '3xl': '0.95rem', '4k': '1.1rem' },
                      }}
                    >
                      {isSv
                        ? 'Välj vilken typ av konto du vill skapa'
                        : 'Choose the type of account you want to create'}
                    </Typography>
                  </Box>

                  {/* Heading + login link */}
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: '1.25rem', sm: '1.4rem', '3xl': '1.65rem', '4k': '2.2rem' },
                        color: '#0f172a',
                      }}
                    >
                      {isSv
                        ? 'Kom igång – skapa ditt konto hos oss!'
                        : 'Get Started - Set Up Your Account With Us!'}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#64748b',
                        fontSize: { xs: '0.85rem', sm: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                      }}
                    >
                      {isSv ? 'Har du redan ett konto? ' : 'Already have an account? '}
                      <Box
                        component="span"
                        sx={{
                          color: '#3b82f6',
                          fontWeight: 600,
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                      >
                        {isSv ? 'Logga in här' : 'Login here'}
                      </Box>
                    </Typography>
                  </Box>

                  {/* Dropdowns section */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 1 }}>
                    {/* Account Type */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, position: 'relative' }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: '#0f172a',
                          fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                        }}
                      >
                        {isSv ? 'Kontotyp' : 'Account Type'}
                      </Typography>
                      <Box
                        onClick={(e) => {
                          e.stopPropagation();
                          setAccountType(accountType === 'open' ? '' : 'open');
                        }}
                        sx={{
                          borderRadius: '10px',
                          backgroundColor: '#ffffff',
                          border: accountType === 'open' ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                          px: 2,
                          py: 1.5,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: '#3b82f6',
                          },
                        }}
                      >
                        <Typography sx={{ fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, color: accountType && accountType !== 'open' ? '#0f172a' : '#94a3b8', fontStyle: accountType && accountType !== 'open' ? 'normal' : 'italic' }}>
                          {accountType === 'individual' ? (isSv ? 'INDIVIDUELLT (PRIVAT KONTO)' : 'INDIVIDUAL (PRIVATE ACCOUNT)') : accountType === 'organization' ? (isSv ? 'ORGANISATION (AGENTKONTO)' : 'ORGANIZATION (AGENT ACCOUNT)') : (isSv ? 'Välj kontotyp' : 'Choose the type of account')}
                        </Typography>
                        {accountType && accountType !== 'open' && (
                          <Typography sx={{ fontSize: '0.8rem', color: '#64748b', mt: 0.3 }}>
                            {accountType === 'individual' ? (isSv ? 'Skapa ditt konto för att ansöka för dig själv och din familj' : 'Set up your account to apply for yourself and your family') : (isSv ? 'För agenter och organisationer' : 'For agents and organizations')}
                          </Typography>
                        )}
                      </Box>
                      {accountType === 'open' && (
                        <>
                          {/* Backdrop to close on click outside */}
                          <Box
                            onClick={() => setAccountType('')}
                            sx={{
                              position: 'fixed',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              zIndex: 999,
                            }}
                          />
                          {/* Dropdown overlay */}
                          <Box
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              right: 0,
                              mt: 0.5,
                              border: '1px solid #e5e7eb',
                              borderRadius: '10px',
                              overflow: 'hidden',
                              backgroundColor: '#ffffff',
                              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                              zIndex: 1000,
                              animation: 'slideDown 0.2s ease-out',
                              '@keyframes slideDown': {
                                '0%': {
                                  opacity: 0,
                                  transform: 'translateY(-8px)',
                                },
                                '100%': {
                                  opacity: 1,
                                  transform: 'translateY(0)',
                                },
                              },
                            }}
                          >
                            <Box
                              onClick={() => setAccountType('individual')}
                              sx={{
                                px: 2,
                                py: 1.5,
                                cursor: 'pointer',
                                backgroundColor: '#ffffff',
                                transition: 'background-color 0.15s ease',
                                '&:hover': {
                                  backgroundColor: '#f3f4f6',
                                },
                              }}
                            >
                              <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, color: '#0f172a' }}>
                                {isSv ? 'INDIVIDUELLT (PRIVAT KONTO)' : 'INDIVIDUAL (PRIVATE ACCOUNT)'}
                              </Typography>
                              <Typography sx={{ fontSize: '0.8rem', color: '#64748b', mt: 0.3 }}>
                                {isSv ? 'Skapa ditt konto för att ansöka för dig själv och din familj' : 'Set up your account to apply for yourself and your family'}
                              </Typography>
                            </Box>
                            <Box
                              onClick={() => setAccountType('organization')}
                              sx={{
                                px: 2,
                                py: 1.5,
                                cursor: 'pointer',
                                backgroundColor: '#ffffff',
                                borderTop: '1px solid #e5e7eb',
                                transition: 'background-color 0.15s ease',
                                '&:hover': {
                                  backgroundColor: '#f3f4f6',
                                },
                              }}
                            >
                              <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, color: '#0f172a' }}>
                                {isSv ? 'ORGANISATION (AGENTKONTO)' : 'ORGANIZATION (AGENT ACCOUNT)'}
                              </Typography>
                              <Typography sx={{ fontSize: '0.8rem', color: '#64748b', mt: 0.3 }}>
                                {isSv ? 'För agenter och organisationer' : 'For agents and organizations'}
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      )}
                    </Box>

                    {/* Account Category */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, position: 'relative' }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: '#0f172a',
                          fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                        }}
                      >
                        {isSv ? 'INDIVIDUELLT (PRIVAT KONTO) Underkategori' : 'INDIVIDUAL (PRIVATE ACCOUNT) Subtype'}
                      </Typography>
                      <Box
                        onClick={(e) => {
                          e.stopPropagation();
                          setAccountCategory(accountCategory === 'open' ? '' : 'open');
                        }}
                        sx={{
                          borderRadius: '10px',
                          backgroundColor: '#ffffff',
                          border: accountCategory === 'open' ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                          px: 2,
                          py: 1.5,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: '#3b82f6',
                          },
                        }}
                      >
                        <Typography sx={{ fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, color: accountCategory && accountCategory !== 'open' ? '#0f172a' : '#94a3b8', fontStyle: accountCategory && accountCategory !== 'open' ? 'normal' : 'italic' }}>
                          {accountCategory === 'family' ? (isSv ? 'EU-familjetillstånd' : 'EU Family Permits') : accountCategory === 'work_study' ? (isSv ? 'Arbete, studier & arbetssökandevisum' : 'Work, Study & Job-Seeker Visas') : accountCategory === 'visit' ? (isSv ? 'Besöksvisum' : 'Visit Visa Services') : (isSv ? 'INDIVIDUELLT (PRIVAT KONTO) Underkategori' : 'INDIVIDUAL (PRIVATE ACCOUNT) Subtype')}
                        </Typography>
                        {accountCategory && accountCategory !== 'open' && (
                          <Typography sx={{ fontSize: '0.8rem', color: '#64748b', mt: 0.3 }}>
                            {accountCategory === 'family' ? (isSv ? 'Återförening med make/maka, barn, föräldrar och släktingar under EU-lag' : 'Reunite with spouse, children, parents & in-laws under EU law') : accountCategory === 'work_study' ? (isSv ? 'Ansök om tillstånd för arbete, studier eller söka jobb' : 'Apply for permits to work, study, or look for jobs') : (isSv ? 'Turism, familj- och affärsbesök världen över' : 'Tourist, family, and business visit visas worldwide')}
                          </Typography>
                        )}
                      </Box>
                      {accountCategory === 'open' && (
                        <>
                          {/* Backdrop to close on click outside */}
                          <Box
                            onClick={() => setAccountCategory('')}
                            sx={{
                              position: 'fixed',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              zIndex: 999,
                            }}
                          />
                          {/* Dropdown overlay */}
                          <Box
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              right: 0,
                              mt: 0.5,
                              border: '1px solid #e5e7eb',
                              borderRadius: '10px',
                              overflow: 'hidden',
                              backgroundColor: '#ffffff',
                              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                              maxHeight: 300,
                              overflowY: 'auto',
                              zIndex: 1000,
                              animation: 'slideDown 0.2s ease-out',
                              '@keyframes slideDown': {
                                '0%': {
                                  opacity: 0,
                                  transform: 'translateY(-8px)',
                                },
                                '100%': {
                                  opacity: 1,
                                  transform: 'translateY(0)',
                                },
                              },
                            }}
                          >
                            <Box
                              onClick={() => setAccountCategory('family')}
                              sx={{
                                px: 2,
                                py: 1.5,
                                cursor: 'pointer',
                                backgroundColor: '#ffffff',
                                transition: 'background-color 0.15s ease',
                                '&:hover': {
                                  backgroundColor: '#f3f4f6',
                                },
                              }}
                            >
                              <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, color: '#0f172a' }}>
                                {isSv ? 'EU-familjetillstånd' : 'EU Family Permits'}
                              </Typography>
                              <Typography sx={{ fontSize: '0.8rem', color: '#64748b', mt: 0.3 }}>
                                {isSv ? 'Återförening med make/maka, barn, föräldrar och släktingar under EU-lag' : 'Reunite with spouse, children, parents & in-laws under EU law'}
                              </Typography>
                            </Box>
                            <Box
                              onClick={() => setAccountCategory('work_study')}
                              sx={{
                                px: 2,
                                py: 1.5,
                                cursor: 'pointer',
                                backgroundColor: '#ffffff',
                                borderTop: '1px solid #e5e7eb',
                                transition: 'background-color 0.15s ease',
                                '&:hover': {
                                  backgroundColor: '#f3f4f6',
                                },
                              }}
                            >
                              <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, color: '#0f172a' }}>
                                {isSv ? 'Arbete, studier & arbetssökandevisum' : 'Work, Study & Job-Seeker Visas'}
                              </Typography>
                              <Typography sx={{ fontSize: '0.8rem', color: '#64748b', mt: 0.3 }}>
                                {isSv ? 'Ansök om tillstånd för arbete, studier eller söka jobb' : 'Apply for permits to work, study, or look for jobs'}
                              </Typography>
                            </Box>
                            <Box
                              onClick={() => setAccountCategory('visit')}
                              sx={{
                                px: 2,
                                py: 1.5,
                                cursor: 'pointer',
                                backgroundColor: '#ffffff',
                                borderTop: '1px solid #e5e7eb',
                                transition: 'background-color 0.15s ease',
                                '&:hover': {
                                  backgroundColor: '#f3f4f6',
                                },
                              }}
                            >
                              <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, color: '#0f172a' }}>
                                {isSv ? 'Besöksvisum' : 'Visit Visa Services'}
                              </Typography>
                              <Typography sx={{ fontSize: '0.8rem', color: '#64748b', mt: 0.3 }}>
                                {isSv ? 'Turism, familj- och affärsbesök världen över' : 'Tourist, family, and business visit visas worldwide'}
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      )}
                    </Box>
                  </Box>

                  {/* E-mail field */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, mt: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: '#0f172a',
                        fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                      }}
                    >
                      {isSv ? 'E‑post' : 'E-mail'}
                    </Typography>
                    <TextField
                      placeholder="Enter your email address"
                      type="email"
                      fullWidth
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '10px',
                          backgroundColor: '#ffffff',
                          boxShadow: '0 8px 22px rgba(148,163,184,0.25)',
                        },
                      }}
                    />
                  </Box>

                  {/* Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#3b82f6',
                        borderColor: '#3b82f6',
                        textTransform: 'none',
                        fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                        py: { xs: 1, md: 1.2 },
                      }}
                    >
                      {isSv ? 'Tillbaka' : 'Back'}
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#3b82f6',
                        textTransform: 'none',
                        flex: 1,
                        fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                        py: { xs: 1, md: 1.2 },
                        '&:hover': {
                          backgroundColor: '#2563eb',
                        },
                      }}
                      disabled={!accountType || !accountCategory}
                    >
                      {isSv ? 'Skapa konto' : 'Create Account'}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {/* Step 1 - Apply */}
          {activeStep === 1 && (
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: '28px',
                boxShadow: '0 24px 60px rgba(15,23,42,0.10)',
                p: { xs: 2.25, sm: 2.75, md: 3.25 },
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, minmax(0, 1fr))' },
                  gap: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem', '2xl': '5rem', '3xl': '6rem', '4k': '8rem' },
                  alignItems: 'stretch',
                  width: '100%',
                }}
              >
                {/* Left: Form */}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Inner card to match Figma spacing + shadow */}
                  <Box
                    sx={{
                      backgroundColor: '#ffffff',
                      borderRadius: '24px',
                      boxShadow: '0 20px 60px rgba(15,23,42,0.08)',
                      border: '1px solid #e5e7eb',
                      p: { xs: 1.5, md: 2 },
                      display: 'flex',
                      flexDirection: 'column',
                      gap: { xs: 1, md: 1.2 },
                    }}
                  >
                    {/* Top pill: All-in-One Global Visa Platform */}
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        alignSelf: 'flex-start',
                        px: 2.5,
                        py: 0.75,
                        borderRadius: '999px',
                        backgroundColor: '#0f172a',
                        boxShadow: '0 10px 30px rgba(15,23,42,0.35)',
                        mb: 1.5,
                      }}
                    >
                      <Box sx={{ position: 'relative', width: 18, height: 18 }}>
                        <Image
                          src="/globalplatform.svg"
                          alt="All-in-One Global Visa Platform"
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: '#ffffff',
                          fontWeight: 600,
                          fontSize: { xs: '0.8rem', sm: '0.82rem', md: '0.85rem', '3xl': '0.95rem', '4k': '1.1rem' },
                        }}
                      >
                        All-in-One Global Visa Platform
                      </Typography>
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#3b82f6', fontSize: '0.85rem' }}>
                      {isSv ? 'STEG 2: Ansök' : 'STEP 2: Apply'}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.3, fontSize: '1.1rem' }}>
                      {isSv ? 'Personuppgifter' : 'Personal Information'}
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#64748b', mb: 1 }}>
                      {isSv ? 'Fyll i dina personuppgifter' : 'Fill Name (as per passport)'}
                    </Typography>

                    {/* Form Fields */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                      {/* First Name & Last Name */}
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {isSv ? 'Förnamn' : 'First Name'}
                          </Typography>
                          <TextField
                            placeholder="Demo"
                            fullWidth
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                backgroundColor: '#ffffff',
                                '& fieldset': {
                                  border: '1px solid #e5e7eb',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#3b82f6',
                                },
                                '&.Mui-focused fieldset': {
                                  border: '2px solid #3b82f6',
                                },
                              },
                            }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {isSv ? 'Efternamn' : 'Last Name'}
                          </Typography>
                          <TextField
                            placeholder="Vemsen"
                            fullWidth
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                backgroundColor: '#ffffff',
                                '& fieldset': {
                                  border: '1px solid #e5e7eb',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#3b82f6',
                                },
                                '&.Mui-focused fieldset': {
                                  border: '2px solid #3b82f6',
                                },
                              },
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Date of Birth & Gender */}
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {isSv ? 'Födelsedatum' : 'Date of Birth'}
                          </Typography>
                          <TextField
                            type="date"
                            defaultValue="2005-10-15"
                            fullWidth
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                backgroundColor: '#ffffff',
                                '& fieldset': {
                                  border: '1px solid #e5e7eb',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#3b82f6',
                                },
                                '&.Mui-focused fieldset': {
                                  border: '2px solid #3b82f6',
                                },
                              },
                            }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, position: 'relative' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {isSv ? 'Kön' : 'Gender'}
                          </Typography>
                          <Box
                            onClick={(e) => {
                              e.stopPropagation();
                              setGender(gender === 'open' ? '' : 'open');
                            }}
                            sx={{
                              borderRadius: '10px',
                              backgroundColor: '#ffffff',
                              border: gender === 'open' ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                              px: 2,
                              py: 1.5,
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                borderColor: '#3b82f6',
                              },
                            }}
                          >
                            <Typography sx={{ fontSize: '0.9rem', color: gender && gender !== 'open' ? '#0f172a' : '#94a3b8' }}>
                              {gender === 'male' ? 'Male' : gender === 'female' ? 'Female' : 'Select'}
                            </Typography>
                          </Box>
                          {gender === 'open' && (
                            <>
                              <Box
                                onClick={() => setGender('')}
                                sx={{
                                  position: 'fixed',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  zIndex: 999,
                                }}
                              />
                              <Box
                                onClick={(e) => e.stopPropagation()}
                                sx={{
                                  position: 'absolute',
                                  top: '100%',
                                  left: 0,
                                  right: 0,
                                  mt: 0.5,
                                  border: '1px solid #e5e7eb',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                  backgroundColor: '#ffffff',
                                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                  zIndex: 1000,
                                  animation: 'slideDown 0.2s ease-out',
                                  '@keyframes slideDown': {
                                    '0%': {
                                      opacity: 0,
                                      transform: 'translateY(-8px)',
                                    },
                                    '100%': {
                                      opacity: 1,
                                      transform: 'translateY(0)',
                                    },
                                  },
                                }}
                              >
                                <Box
                                  onClick={() => setGender('male')}
                                  sx={{
                                    px: 2,
                                    py: 1.5,
                                    cursor: 'pointer',
                                    backgroundColor: '#ffffff',
                                    transition: 'background-color 0.15s ease',
                                    '&:hover': {
                                      backgroundColor: '#f3f4f6',
                                    },
                                  }}
                                >
                                  <Typography sx={{ fontSize: '0.9rem', color: '#0f172a' }}>Male</Typography>
                                </Box>
                                <Box
                                  onClick={() => setGender('female')}
                                  sx={{
                                    px: 2,
                                    py: 1.5,
                                    cursor: 'pointer',
                                    backgroundColor: '#ffffff',
                                    borderTop: '1px solid #e5e7eb',
                                    transition: 'background-color 0.15s ease',
                                    '&:hover': {
                                      backgroundColor: '#f3f4f6',
                                    },
                                  }}
                                >
                                  <Typography sx={{ fontSize: '0.9rem', color: '#0f172a' }}>Female</Typography>
                                </Box>
                              </Box>
                            </>
                          )}
                        </Box>
                      </Box>

                      {/* Nationality & Passport Number */}
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {isSv ? 'Nationalitet' : 'Nationality'}
                          </Typography>
                          <TextField
                            placeholder="Canada"
                            fullWidth
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                backgroundColor: '#ffffff',
                                '& fieldset': {
                                  border: '1px solid #e5e7eb',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#3b82f6',
                                },
                                '&.Mui-focused fieldset': {
                                  border: '2px solid #3b82f6',
                                },
                              },
                            }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {isSv ? 'Passnummer' : 'Passport Number'}
                          </Typography>
                          <TextField
                            placeholder="AB123456"
                            fullWidth
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                backgroundColor: '#ffffff',
                                '& fieldset': {
                                  border: '1px solid #e5e7eb',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#3b82f6',
                                },
                                '&.Mui-focused fieldset': {
                                  border: '2px solid #3b82f6',
                                },
                              },
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Passport Issue Date & Passport Expiry Date */}
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {isSv ? 'Passutfärdandedatum' : 'Passport Issue Date'}
                          </Typography>
                          <TextField
                            type="date"
                            defaultValue="2020-10-16"
                            fullWidth
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                backgroundColor: '#ffffff',
                                '& fieldset': {
                                  border: '1px solid #e5e7eb',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#3b82f6',
                                },
                                '&.Mui-focused fieldset': {
                                  border: '2px solid #3b82f6',
                                },
                              },
                            }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {isSv ? 'Pass utgångsdatum' : 'Passport Expiry Date'}
                          </Typography>
                          <TextField
                            type="date"
                            defaultValue="2030-10-15"
                            fullWidth
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                backgroundColor: '#ffffff',
                                '& fieldset': {
                                  border: '1px solid #e5e7eb',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#3b82f6',
                                },
                                '&.Mui-focused fieldset': {
                                  border: '2px solid #3b82f6',
                                },
                              },
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Contact Number */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                          {isSv ? 'Kontaktnummer' : 'Contact Number'}
                        </Typography>
                        <TextField
                          placeholder="+12345678540"
                          fullWidth
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '10px',
                              backgroundColor: '#ffffff',
                              '& fieldset': {
                                border: '1px solid #e5e7eb',
                              },
                              '&:hover fieldset': {
                                borderColor: '#3b82f6',
                              },
                              '&.Mui-focused fieldset': {
                                border: '2px solid #3b82f6',
                              },
                            },
                          }}
                        />
                      </Box>

                      {/* Email */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                          {isSv ? 'E-post' : 'Email'}
                        </Typography>
                        <TextField
                          placeholder="demovemsen@live.se"
                          type="email"
                          fullWidth
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '10px',
                              backgroundColor: '#ffffff',
                              '& fieldset': {
                                border: '1px solid #e5e7eb',
                              },
                              '&:hover fieldset': {
                                borderColor: '#3b82f6',
                              },
                              '&.Mui-focused fieldset': {
                                border: '2px solid #3b82f6',
                              },
                            },
                          }}
                        />
                      </Box>

                      {/* Current Residential Address */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                          {isSv ? 'Nuvarande bostadsadress' : 'Current Residential Address'}
                        </Typography>
                        <TextField
                          placeholder="John Smith, 2GB Av, Brampton, Montreal QC H3R 1X4"
                          multiline
                          rows={2}
                          fullWidth
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '10px',
                              backgroundColor: '#ffffff',
                              '& fieldset': {
                                border: '1px solid #e5e7eb',
                              },
                              '&:hover fieldset': {
                                borderColor: '#3b82f6',
                              },
                              '&.Mui-focused fieldset': {
                                border: '2px solid #3b82f6',
                              },
                            },
                          }}
                        />
                      </Box>

                      {/* Additional Notes */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                          {isSv ? 'Ytterligare anteckningar' : 'Additional Notes'}
                        </Typography>
                        <TextField
                          placeholder="Add any additional information"
                          multiline
                          rows={2}
                          fullWidth
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '10px',
                              backgroundColor: '#ffffff',
                              '& fieldset': {
                                border: '1px solid #e5e7eb',
                              },
                              '&:hover fieldset': {
                                borderColor: '#3b82f6',
                              },
                              '&.Mui-focused fieldset': {
                                border: '2px solid #3b82f6',
                              },
                            },
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Buttons */}
                    <Box sx={{ display: 'flex', gap: 2, mt: 1.5 }}>
                      <Button
                        variant="outlined"
                        onClick={() => setActiveStep(0)}
                        sx={{
                          color: '#3b82f6',
                          borderColor: '#3b82f6',
                          textTransform: 'none',
                          fontSize: '0.9rem',
                          py: 1.2,
                          px: 3,
                          borderRadius: '10px',
                          '&:hover': {
                            borderColor: '#2563eb',
                            backgroundColor: '#eff6ff',
                          },
                        }}
                      >
                        {isSv ? 'Tillbaka' : 'Back'}
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => setActiveStep(2)}
                        sx={{
                          backgroundColor: '#3b82f6',
                          textTransform: 'none',
                          flex: 1,
                          fontSize: '0.9rem',
                          py: 1.2,
                          borderRadius: '10px',
                          '&:hover': {
                            backgroundColor: '#2563eb',
                          },
                        }}
                      >
                        {isSv ? 'Nästa' : 'Next'}
                      </Button>
                    </Box>
                  </Box>
                </Box>

                {/* Right: Application overview sidebar */}
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '28px',
                    border: '1px solid rgba(148,163,184,0.18)',
                    boxShadow: '0 18px 40px rgba(15,23,42,0.06)',
                    px: { xs: 2.25, sm: 2.75, md: 3 },
                    py: { xs: 2.25, sm: 2.75, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    width: { xs: '100%', lg: 360 },
                    mx: { xs: 'auto', lg: 0 },
                    ml: { lg: 'auto' },
                    gap: 2,
                    height: '100%',
                  }}
                >
                  {/* Top title */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem', '3xl': '1.05rem', '4k': '1.3rem' },
                        fontWeight: 700,
                        color: '#0f172a',
                        mb: 0.5,
                      }}
                    >
                      {isSv ? 'Översikt av ansökan' : 'Application Overview'}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.82rem', md: '0.85rem', '3xl': '0.95rem', '4k': '1.2rem' },
                        color: '#94a3b8',
                      }}
                    >
                      {isSv
                        ? 'Följ varje steg i din visumansökan medan du slutför den.'
                        : 'Track each step of your visa application as you complete it.'}
                    </Typography>
                  </Box>

                  {/* Steps list with vertical bar behind icons */}
                  <Box
                    component="ul"
                    sx={{
                      position: 'relative',
                      listStyle: 'none',
                      m: 0,
                      mt: 1.25,
                      p: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.25,
                    }}
                  >
                    {[
                      { label: 'Application Overview', icon: '/tick.svg', active: false, completed: true },
                      { label: 'Personal Information', icon: '/2.svg', active: true, completed: false },
                      { label: 'Purpose of Visit', icon: '/3.svg', active: false, completed: false },
                      { label: 'Travel Details', icon: '/4.svg', active: false, completed: false },
                      { label: 'Financial Details', icon: '/5.svg', active: false, completed: false },
                      { label: 'Accommodation Details', icon: '/6.svg', active: false, completed: false },
                      { label: 'Additional Details', icon: '/7.svg', active: false, completed: false },
                      { label: 'Additional Services', icon: '/8.svg', active: false, completed: false },
                      { label: 'Other Information', icon: '/9.svg', active: false, completed: false },
                      { label: 'Document Checklist', icon: '/10.svg', active: false, completed: false },
                      { label: 'Consent and Declarations', icon: '/11.svg', active: false, completed: false },
                    ].map((step) => {
                      const isActive = step.active;
                      const label = step.label;
                      return (
                        <Box
                          key={label}
                          component="li"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.25,
                            px: 2,
                            py: 0.85,
                            borderRadius: '999px',
                            cursor: 'default',
                            backgroundColor: isActive ? 'rgba(37,99,235,0.06)' : 'transparent',
                          }}
                        >
                          {/* Icon from Figma (already circular) */}
                          <Box>
                            <Image src={step.icon} alt={label} width={20} height={20} />
                          </Box>

                          <Typography
                            sx={{
                              fontSize: { xs: '0.8rem', sm: '0.82rem', md: '0.85rem', '3xl': '0.95rem', '4k': '1.2rem' },
                              fontWeight: isActive ? 600 : 500,
                              color: isActive ? '#111827' : '#4b5563',
                            }}
                          >
                            {label}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>

                  {/* Bottom helper text */}
                  <Box sx={{ mt: 'auto', pt: 1.5 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.78rem', md: '0.8rem', '3xl': '0.9rem', '4k': '1.1rem' },
                        color: '#9ca3af',
                      }}
                    >
                      {isSv
                        ? 'Du kan alltid gå tillbaka och ändra valfri sektion innan du skickar in din ansökan.'
                        : 'You can always come back and edit any section before submitting your application.'}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {/* Step 2 - Upload Documents */}
          {activeStep === 2 && (
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.25rem', sm: '1.4rem', '3xl': '1.65rem', '4k': '2.3rem' } }}>
                {isSv ? 'Ladda upp dokument' : 'Upload Documents'}
              </Typography>
              <Typography sx={{ color: '#64748b', fontSize: { xs: '0.875rem', sm: '0.9375rem', '3xl': '1.05rem', '4k': '1.4rem' }, mb: 3 }}>
                {isSv
                  ? 'Hantera · Dokument · Ladda upp dokument'
                  : 'Management · Documents · Upload Documents'}
              </Typography>

              <Box sx={{ backgroundColor: '#ffffff', p: { xs: 2.5, md: 3 }, borderRadius: '8px', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.1rem', '3xl': '1.25rem', '4k': '1.75rem' } }}>
                  {isSv ? 'Dokumentdetaljer' : 'Document Details'}
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, mb: 3 }}>
                  <FormControl size="small">
                    <InputLabel>{isSv ? 'Vem är dokumentet för?' : 'Who is the document for?'}</InputLabel>
                    <Select label="Who is the document for?">
                      <MenuItem value="john">John Doe</MenuItem>
                      <MenuItem value="other">Someone else</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small">
                    <InputLabel>{isSv ? 'Dokumenttyp' : 'Document Type'}</InputLabel>
                    <Select label="Document Type">
                      <MenuItem value="identity">Identity Documents</MenuItem>
                      <MenuItem value="financial">Financial Documents</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small">
                    <InputLabel>{isSv ? 'Dokumentunderkategori' : 'Document Sub Type'}</InputLabel>
                    <Select label="Document Sub Type">
                      <MenuItem value="passport-valid">Passport (valid and visa pages)</MenuItem>
                      <MenuItem value="passport-other">Passport (other pages)</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  label={isSv ? 'Dokumentinformation' : 'Document Details'}
                  placeholder="e.g. Passport"
                  fullWidth
                  multiline
                  rows={2}
                  size="small"
                  sx={{ mb: 3 }}
                />

                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  style={{ display: 'none' }}
                  id="upload-documents-input"
                  onChange={(event) => handleAddDocuments(event.target.files)}
                />

                <Box sx={{ mb: 3 }}>
                  <Typography sx={{ fontWeight: 600, mb: 2, fontSize: { xs: '0.95rem', '3xl': '1.05rem', '4k': '1.4rem' } }}>
                    {isSv ? 'Uppladdade dokument' : 'Uploaded Documents'}
                  </Typography>
                  <Box
                    sx={{
                      border: '2px dashed #cbd5e1',
                      borderRadius: '8px',
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      backgroundColor: '#f1f5f9',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      const input = document.getElementById('upload-documents-input') as HTMLInputElement | null;
                      input?.click();
                    }}
                  >
                    <CloudUploadIcon sx={{ color: '#3b82f6', fontSize: { xs: 32, '3xl': 38, '4k': 50 } }} />
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' } }}>
                        {isSv ? 'Klicka för att ladda upp dokument' : 'Click to upload documents'}
                      </Typography>
                      <Typography sx={{ color: '#94a3b8', fontSize: { xs: '0.8rem', '3xl': '0.9rem', '4k': '1.2rem' } }}>
                        {isSv ? 'PNG, JPG eller PDF upp till 10 MB per fil' : 'PNG, JPG or PDF up to 10 MB each'}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {documents.map((doc) => (
                      <Box
                        key={doc.id}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          backgroundColor: '#f8fafc',
                          borderRadius: '8px',
                          p: 1.5,
                        }}
                      >
                        <Box sx={{ position: 'relative', width: 40, height: 40 }}>
                          <Image
                            src="/passport.png"
                            alt="Document icon"
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{doc.name}</Typography>
                          <Typography sx={{ color: '#94a3b8', fontSize: '0.8rem' }}>{doc.sizeLabel}</Typography>
                        </Box>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            ml: 'auto',
                            borderColor: '#ef4444',
                            color: '#ef4444',
                            textTransform: 'none',
                          }}
                          onClick={() => handleRemoveDocument(doc.id)}
                        >
                          Remove
                        </Button>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="text"
                    sx={{ mt: 2, color: '#3b82f6', textTransform: 'none', fontSize: '0.85rem' }}
                    onClick={() => {
                      const input = document.getElementById('upload-documents-input') as HTMLInputElement | null;
                      input?.click();
                    }}
                  >
                    + Add Another Document
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="outlined" sx={{ color: '#3b82f6', borderColor: '#3b82f6', textTransform: 'none' }}>
                    {isSv ? 'Tillbaka' : 'Back'}
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#1e293b', color: '#ffffff', textTransform: 'none', flex: 1 }}
                    onClick={() => {
                      if (documents.length === 0) return;
                      console.log('Uploading documents:', documents);
                    }}
                  >
                    {isSv ? 'Ladda upp alla dokument' : 'Upload All Documents'}
                  </Button>
                </Box>
              </Box>
            </Box>
          )}

          {/* Step 3 - Schedule Appointment */}
          {activeStep === 3 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.25rem', sm: '1.4rem', '3xl': '1.65rem', '4k': '2.3rem' } }}>
                {isSv ? 'Kommande bokningar' : 'Upcoming Appointments'}
              </Typography>

              <Box
                sx={{
                  flex: 1,
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  p: { xs: 3, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #e5e7eb',
                }}
              >
                {/* Calendar Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button
                      variant="text"
                      size="small"
                      sx={{ minWidth: 'auto', p: 0.5, color: '#64748b' }}
                      onClick={() => goMonth(-1)}
                    >
                      ‹
                    </Button>
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: '1.1rem', '3xl': '1.25rem', '4k': '1.65rem' }, color: '#0f172a' }}>
                      {calendarDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </Typography>
                    <Button
                      variant="text"
                      size="small"
                      sx={{ minWidth: 'auto', p: 0.5, color: '#64748b' }}
                      onClick={() => goMonth(1)}
                    >
                      ›
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: 'none',
                        borderColor: '#e5e7eb',
                        color: '#64748b',
                        fontSize: '0.875rem',
                        px: 2,
                        borderRadius: '6px',
                      }}
                    >
                      Today
                    </Button>
                  </Box>

                  {/* View mode toggles */}
                  <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                    <Button
                      size="small"
                      sx={{ minWidth: 'auto', p: 0.75, color: '#9ca3af' }}
                    >
                      ☰
                    </Button>
                    {(['Month', 'Week', 'Day', 'Agenda'] as const).map((mode) => (
                      <Button
                        key={mode}
                        size="small"
                        onClick={() => setViewMode(mode)}
                        sx={{
                          textTransform: 'none',
                          color: viewMode === mode ? '#0f172a' : '#9ca3af',
                          fontWeight: viewMode === mode ? 600 : 400,
                          fontSize: '0.875rem',
                          px: 1.5,
                          minWidth: 'auto',
                          '&:hover': { backgroundColor: '#f9fafb' },
                        }}
                      >
                        {mode}
                      </Button>
                    ))}
                  </Box>
                </Box>

                {/* Day headers */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                    borderBottom: '1px solid #e5e7eb',
                    pb: 1,
                    mb: 1,
                  }}
                >
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <Typography
                      key={day}
                      sx={{
                        textAlign: 'center',
                        fontSize: { xs: '0.8rem', '3xl': '0.9rem', '4k': '1.15rem' },
                        fontWeight: 600,
                        color: '#6b7280',
                      }}
                    >
                      {day}
                    </Typography>
                  ))}
                </Box>

                {/* Calendar Grid */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                    gap: 0,
                    flex: 1,
                    position: 'relative',
                  }}
                >
                  {visibleDays.map((date, index) => {
                    if (!date) {
                      return (
                        <Box
                          key={index}
                          sx={{
                            borderRight: '1px solid #f3f4f6',
                            borderBottom: '1px solid #f3f4f6',
                            minHeight: { xs: 80, md: 100, '3xl': 120, '4k': 150 },
                            p: 1,
                            backgroundColor: '#fafafa',
                          }}
                        />
                      );
                    }

                    const dayAppointments = getAppointmentsForDate(date);
                    const isFirstDayOfAppointment = (apt: typeof appointments[0]) => {
                      return isSameDay(date, apt.startDate);
                    };

                    const isToday = isSameDay(new Date(), date);
                    const isPastMonth = date.getMonth() !== calendarDate.getMonth();

                    return (
                      <Box
                        key={index}
                        sx={{
                          borderRight: '1px solid #f3f4f6',
                          borderBottom: '1px solid #f3f4f6',
                          minHeight: { xs: 80, md: 100, '3xl': 120, '4k': 150 },
                          p: 1,
                          backgroundColor: '#ffffff',
                          position: 'relative',
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: '#f9fafb',
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: '0.85rem', '3xl': '0.95rem', '4k': '1.2rem' },
                            fontWeight: 500,
                            color: isPastMonth ? '#d1d5db' : isToday ? '#3b82f6' : '#374151',
                            mb: 0.5,
                          }}
                        >
                          {date.getDate()}
                        </Typography>

                        {/* Render appointment ribbons */}
                        {dayAppointments.map((apt) => {
                          if (!isFirstDayOfAppointment(apt)) return null;

                          // Calculate column span based on duration
                          const dayOfWeek = date.getDay();
                          const remainingDaysInWeek = 7 - dayOfWeek;
                          const spanDays = Math.min(apt.duration, remainingDaysInWeek);

                          return (
                            <Box
                              key={apt.id}
                              sx={{
                                position: 'absolute',
                                left: 0,
                                right: spanDays > 1 ? `calc(-${(spanDays - 1) * 100}% - ${(spanDays - 1)}px)` : 0,
                                top: '32px',
                                backgroundColor: apt.color,
                                borderRadius: '6px',
                                px: 1.5,
                                py: 0.75,
                                fontSize: { xs: '0.75rem', '3xl': '0.85rem', '4k': '1.05rem' },
                                fontWeight: 600,
                                color: apt.textColor,
                                zIndex: 10,
                                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {apt.time} {apt.title}
                            </Box>
                          );
                        })}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          )}

          {/* Step 4 - Submit Application */}
          {activeStep === 4 && (
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.25rem', sm: '1.4rem', '3xl': '1.65rem', '4k': '2.3rem' } }}>
                {isSv ? 'Skicka in din ansökan' : 'Submit Your Application'}
              </Typography>
              <Typography sx={{ color: '#64748b', mb: 3, fontSize: { xs: '0.875rem', sm: '0.9375rem', '3xl': '1.05rem', '4k': '1.4rem' } }}>
                {isSv
                  ? 'Granska dina uppgifter och skicka in. Du kan följa hela processen från din dashboard.'
                  : 'Review your details and submit. You can track the full process from your dashboard.'}
              </Typography>

              <Box
                sx={{
                  display: { xs: 'flex', lg: 'flex' },
                  flexDirection: { xs: 'column', lg: 'row' },
                  gap: { xs: 3, lg: 1.5 },
                  alignItems: 'start',
                  justifyContent: 'center',
                }}
              >
                {/* Left side - Application Process SVG with 3D shadow */}
                <Box
                  sx={{
                    position: 'relative',
                    width: { lg: '300px' },
                    minWidth: { lg: '300px' },
                    flexShrink: 0,
                    height: { lg: 600 },
                    display: { xs: 'none', lg: 'block' },
                    filter: 'drop-shadow(0 4px 12px rgba(15,23,42,0.08))',
                    transition: 'transform 0.3s ease, filter 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      filter: 'drop-shadow(0 8px 20px rgba(15,23,42,0.12))',
                    },
                  }}
                >
                  <Image
                    src="/ApplicationProcess.svg"
                    alt="Application Process"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>

                {/* Middle card - Visa application */}
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    p: 2.25,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    maxWidth: 340,
                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(59, 130, 246, 0.08)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '20px',
                      padding: '1px',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 197, 253, 0.05))',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      pointerEvents: 'none',
                    },
                  }}
                >
                  {/* Flag section with doc icon */}
                  <Box sx={{ position: 'relative', overflow: 'visible', mb: 1.75, mx: -2.25, mt: -2.25 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: 175,
                        borderRadius: '20px 20px 16px 16px',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src="/Rectangle 606.svg"
                        alt="Sweden Visa"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      mb: 2.5,
                      color: '#0f172a',
                      textAlign: 'center',
                      mt: 1,
                    }}
                  >
                    {currentVisa.title}
                  </Typography>

                  {/* Details list */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2.5 }}>
                    {/* Case Number */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>
                        Case Number
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#0f172a',
                          backgroundColor: '#f1f5f9',
                          borderRadius: '6px',
                          px: 1.5,
                          py: 0.5,
                        }}
                      >
                        {currentVisa.caseNumber}
                      </Typography>
                    </Box>

                    {/* Authority */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>
                        Authority
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#0f172a',
                          backgroundColor: '#f1f5f9',
                          borderRadius: '6px',
                          px: 1.5,
                          py: 0.5,
                        }}
                      >
                        {currentVisa.authority}
                      </Typography>
                    </Box>

                    {/* Status */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>
                        Status
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#0f172a',
                          backgroundColor: '#f1f5f9',
                          borderRadius: '6px',
                          px: 1.5,
                          py: 0.5,
                        }}
                      >
                        {currentVisa.status}
                      </Typography>
                    </Box>

                    {/* Duration */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>
                        Duration
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          backgroundColor: '#38bdf8',
                          borderRadius: '6px',
                          px: 1.5,
                          py: 0.5,
                        }}
                      >
                        {currentVisa.duration}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Bottom metadata */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2.5,
                      pt: 2,
                      borderTop: '1px solid #f1f5f9',
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '0.7rem', color: '#94a3b8', mb: 0.3 }}>
                        Registered on
                      </Typography>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>
                        {currentVisa.registeredOn}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography sx={{ fontSize: '0.7rem', color: '#94a3b8', mb: 0.3 }}>
                        Country
                      </Typography>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>
                        {currentVisa.country}
                      </Typography>
                    </Box>
                  </Box>

                  {/* CTA button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      textTransform: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      py: 1.2,
                      borderRadius: '12px',
                      boxShadow: '0 4px 14px rgba(15,23,42,0.3)',
                      '&:hover': {
                        backgroundColor: '#1e293b',
                        boxShadow: '0 6px 20px rgba(15,23,42,0.4)',
                      },
                    }}
                  >
                    {isSv ? 'Visa detaljer' : 'View Details'}
                  </Button>
                </Box>

                {/* Right side - Global Visa Applications SVG with 3D shadow */}
                <Box
                  sx={{
                    position: 'relative',
                    width: { lg: '300px' },
                    minWidth: { lg: '300px' },
                    flexShrink: 0,
                    height: { lg: 600 },
                    display: { xs: 'none', lg: 'block' },
                    filter: 'drop-shadow(0 4px 12px rgba(15,23,42,0.08))',
                    transition: 'transform 0.3s ease, filter 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      filter: 'drop-shadow(0 8px 20px rgba(15,23,42,0.12))',
                    },
                  }}
                >
                  <Image
                    src="/GlobalVisa.svg"
                    alt="Global Visa Applications"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </div>
    </Box>
  );
}