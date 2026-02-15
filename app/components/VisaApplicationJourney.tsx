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
import { UploadDocuments } from './UploadDocuments';
import { UpcomingAppointments } from './UpcomingAppointments';
import SignUp from './SignUp';

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
            // overflow: 'hidden',
            p: 0,
            minHeight: { xs: 320, sm: 380, md: 450, '3xl': 520, '4k': 680 },
            '@keyframes stepFadeIn': {
              '0%': { opacity: 0, transform: 'translateY(10px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
            animation: 'stepFadeIn 0.35s ease-out',
          }}
        >
          {/* Step 0 - Create Account */}
          {activeStep === 0 && <SignUp />}

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
            <Box sx={{ ml: { xs: 0, md: 4 }, mt: { xs: 2, md: 4 } }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.25rem', sm: '1.4rem', '3xl': '1.65rem', '4k': '2.3rem' } }}>
                {isSv ? 'Ladda upp dokument' : 'Upload Documents'}
              </Typography>

              <UploadDocuments />
            </Box>
          )}

          {/* Step 3 - Schedule Appointment */}
          {activeStep === 3 && (
            <Box sx={{ ml: { xs: 0, md: 4 }, mt: { xs: 2, md: 4 } }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.25rem', sm: '1.4rem', '3xl': '1.65rem', '4k': '2.3rem' } }}>
                {isSv ? 'Kommande bokningar' : 'Upcoming Appointments'}
              </Typography>

              <UpcomingAppointments />
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