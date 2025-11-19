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
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isManual, setIsManual] = useState(false);
  const [visaPage, setVisaPage] = useState(1);

  // Step 1 (Create Account) dropdown state
  const [accountType, setAccountType] = useState<string>('');
  const [accountCategory, setAccountCategory] = useState<string>('');

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
  const currentVisa = useMemo(
    () => visaApplications[visaPage - 1] ?? visaApplications[0],
    [visaPage]
  );

  return (
    <Box sx={{ width: '100%', backgroundColor: '#EBF4FF', py: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem', '3xl': '7rem', '4k': '8rem' }, overflowX: 'hidden' }}>
      {/* EXACT same container as Hero/Services (Tailwind classes) */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        {/* ---------- TIMELINE ---------- */}
        <Box sx={{ mb: { xs: 8, sm: 10, lg: 12 }, px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
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
                        {s.name}
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
              }}
            >
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
                }}
              >
                {/* LEFT: big account illustration card */}
                <Box
                  sx={{
                    backgroundColor: '#fff7f3',
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(15,23,42,0.10)',
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
                      Choose the type of account you want to create
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
                      Get Started - Set Up Your Account With Us!
                    </Typography>
                    <Typography
                      sx={{
                        color: '#64748b',
                        fontSize: { xs: '0.85rem', sm: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                      }}
                    >
                      Already have an account?{' '}
                      <Box
                        component="span"
                        sx={{
                          color: '#3b82f6',
                          fontWeight: 600,
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                      >
                        Login here
                      </Box>
                    </Typography>
                  </Box>

                  {/* Dropdowns section */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: '#0f172a',
                          fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                        }}
                      >
                        Account Type
                      </Typography>
                      <FormControl fullWidth size="small">
                        <Select
                          displayEmpty
                          value={accountType}
                          onChange={(e) => setAccountType(e.target.value as string)}
                          sx={{
                            borderRadius: '10px',
                            backgroundColor: '#f9fafb',
                            boxShadow: '0 8px 20px rgba(148,163,184,0.25)',
                          }}
                        >
                          <MenuItem value="">
                            <em>Choose the type of account</em>
                          </MenuItem>
                          <MenuItem value="individual">INDIVIDUAL (PRIVATE ACCOUNT)</MenuItem>
                          <MenuItem value="organization">ORGANIZATION (AGENT ACCOUNT)</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: '#0f172a',
                          fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                        }}
                      >
                        Individual Private Account Category
                      </Typography>
                      <FormControl fullWidth size="small">
                        <Select
                          displayEmpty
                          value={accountCategory}
                          onChange={(e) => setAccountCategory(e.target.value as string)}
                          sx={{
                            borderRadius: '10px',
                            backgroundColor: '#f9fafb',
                            boxShadow: '0 8px 20px rgba(148,163,184,0.25)',
                          }}
                        >
                          <MenuItem value="">
                            <em>Select account category to continue</em>
                          </MenuItem>
                          <MenuItem value="family">Full Family / Friends</MenuItem>
                          <MenuItem value="work_study">Work, Study & Job Seeker Visas</MenuItem>
                          <MenuItem value="visit">Visit Visa (tourism and short visits)</MenuItem>
                        </Select>
                      </FormControl>
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
                      E-mail
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
                      Back
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
                      Create Account
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
                      p: { xs: 2.25, md: 3 },
                      display: 'flex',
                      flexDirection: 'column',
                      gap: { xs: 1.5, md: 2 },
                      minHeight: { xs: 280, md: 320 },
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

                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#3b82f6', fontSize: { xs: '0.95rem', '3xl': '1.1rem', '4k': '1.5rem' } }}>
                      STEP 2: Apply
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, fontSize: { xs: '1.25rem', sm: '1.4rem', '3xl': '1.65rem', '4k': '2.3rem' } }}>
                      Personal Information
                    </Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                      <TextField label="First Name" placeholder="Enter your first name" size="small" />
                      <TextField label="Last Name" placeholder="Enter your last name" size="small" />
                      <TextField label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} size="small" />
                      <FormControl size="small">
                        <InputLabel>Gender</InputLabel>
                        <Select label="Gender">
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField label="Passport Number" placeholder="Enter passport number" size="small" />
                      <TextField label="Passport Expiry" type="date" InputLabelProps={{ shrink: true }} size="small" />
                    </Box>

                    <TextField label="Email" placeholder="Enter email" fullWidth size="small" sx={{ mt: 1.5 }} />
                    <TextField
                      label="Additional Notes"
                      placeholder="Enter any additional information"
                      fullWidth
                      multiline
                      rows={3}
                      size="small"
                    />

                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                      <Button variant="outlined" sx={{ color: '#3b82f6', borderColor: '#3b82f6', textTransform: 'none' }}>
                        Back
                      </Button>
                      <Button variant="contained" sx={{ backgroundColor: '#3b82f6', textTransform: 'none', flex: 1 }}>
                        Next
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
                      Application Overview
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.82rem', md: '0.85rem', '3xl': '0.95rem', '4k': '1.2rem' },
                        color: '#94a3b8',
                      }}
                    >
                      Track each step of your visa application as you complete it.
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
                    {/* Vertical bar from Figma (bar.svg) */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: 20,
                        top: 24,
                        bottom: 24,
                        width: 2,
                        pointerEvents: 'none',
                      }}
                    >
                      <Image
                        src="/bar.svg"
                        alt="steps connector"
                        fill
                        style={{ objectFit: 'fill' }}
                      />
                    </Box>

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
                      You can always come back and edit any section before submitting your application.
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
                Upload Documents
              </Typography>
              <Typography sx={{ color: '#64748b', fontSize: { xs: '0.875rem', sm: '0.9375rem', '3xl': '1.05rem', '4k': '1.4rem' }, mb: 3 }}>
                Management · Documents · Upload Documents
              </Typography>

              <Box sx={{ backgroundColor: '#ffffff', p: { xs: 2.5, md: 3 }, borderRadius: '8px', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.1rem', '3xl': '1.25rem', '4k': '1.75rem' } }}>
                  Document Details
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, mb: 3 }}>
                  <FormControl size="small">
                    <InputLabel>Who is the document for?</InputLabel>
                    <Select label="Who is the document for?">
                      <MenuItem value="john">John Doe</MenuItem>
                      <MenuItem value="other">Someone else</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small">
                    <InputLabel>Document Type</InputLabel>
                    <Select label="Document Type">
                      <MenuItem value="identity">Identity Documents</MenuItem>
                      <MenuItem value="financial">Financial Documents</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small">
                    <InputLabel>Document Sub Type</InputLabel>
                    <Select label="Document Sub Type">
                      <MenuItem value="passport-valid">Passport (valid and visa pages)</MenuItem>
                      <MenuItem value="passport-other">Passport (other pages)</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  label="Document Details"
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
                  <Typography sx={{ fontWeight: 600, mb: 2, fontSize: { xs: '0.95rem', '3xl': '1.05rem', '4k': '1.4rem' } }}>Uploaded Documents</Typography>
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
                      <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' } }}>Click to upload documents</Typography>
                      <Typography sx={{ color: '#94a3b8', fontSize: { xs: '0.8rem', '3xl': '0.9rem', '4k': '1.2rem' } }}>
                        PNG, JPG or PDF up to 10 MB each
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
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#1e293b', color: '#ffffff', textTransform: 'none', flex: 1 }}
                    onClick={() => {
                      if (documents.length === 0) return;
                      console.log('Uploading documents:', documents);
                    }}
                  >
                    Upload All Documents
                  </Button>
                </Box>
              </Box>
            </Box>
          )}

         {/* Step 3 - Schedule Appointment */}
          {activeStep === 3 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.25rem', sm: '1.4rem', '3xl': '1.65rem', '4k': '2.3rem' } }}>
                Upcoming Appointments
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
                Submit Your Application
              </Typography>
              <Typography sx={{ color: '#64748b', mb: 3, fontSize: { xs: '0.875rem', sm: '0.9375rem', '3xl': '1.05rem', '4k': '1.4rem' } }}>
                Review your details and submit. You can track the full process from your dashboard.
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
                  gap: { xs: 3, sm: 3.5, md: 4, '3xl': 5, '4k': 6 },
                  alignItems: 'stretch',
                }}
              >
                {/* Left side card */}
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    p: { xs: 2.5, md: 3 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: { xs: 260, md: 300, lg: 320, '3xl': 340, '4k': 420 },
                    boxShadow: '0 12px 40px rgba(15,23,42,0.08)',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src="/ApplicationProcess.svg"
                      alt="Application Process"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                </Box>

                {/* Middle card - EXACT FIGMA STYLING */}
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '28px',
                    p: { xs: 3, md: 3.5, '3xl': 4, '4k': 5 },
                    color: '#111827',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: { xs: 360, md: 400, lg: 430, '3xl': 460, '4k': 520 },
                    boxShadow: '0 10px 40px rgba(15,23,42,0.12)',
                    overflow: 'hidden',
                    border: '1px solid rgba(148,163,184,0.15)',
                  }}
                >
                  {/* Top flag section */}
                  <Box sx={{ position: 'relative', mb: 3 }}>
                    <Box 
                      sx={{ 
                        position: 'relative', 
                        width: '100%', 
                        height: { xs: 140, md: 160, lg: 180, '3xl': 200, '4k': 260 }, 
                        borderRadius: '20px', 
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Image
                        src="/Rectangle 606.svg"
                        alt="Sweden Visa Header"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Box>

                  {/* Main content */}
                  <Box sx={{ mt: { xs: 2.5, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 2.5 } }}>
                    <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.2rem', '3xl': '1.35rem', '4k': '1.75rem' }, fontWeight: 700, mb: 0.5, color: '#0f172a' }}>
                      {currentVisa.title}
                    </Typography>

                    {/* Details grid */}
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                        gap: { xs: 1.5, md: 2 },
                        backgroundColor: '#f8fafc',
                        borderRadius: '16px',
                        p: { xs: 2, md: 2.5, '3xl': 3, '4k': 4 },
                        border: '1px solid #e2e8f0',
                      }}
                    >
                      {[
                        ['Case Number', currentVisa.caseNumber],
                        ['Authority', currentVisa.authority],
                        ['Status', currentVisa.status],
                        ['Duration', currentVisa.duration],
                      ].map(([label, value]) => (
                        <Box key={label} sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                          <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.75rem', '3xl': '0.85rem', '4k': '1.1rem' }, color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {label}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { xs: '0.85rem', md: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                              fontWeight: 700,
                              color: label === 'Duration' ? '#ffffff' : '#0f172a',
                              backgroundColor: label === 'Duration' ? '#38bdf8' : '#e5e7eb',
                              borderRadius: '999px',
                              px: { xs: 1.5, md: 2 },
                              py: { xs: 0.6, md: 0.75 },
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 'fit-content',
                            }}
                          >
                            {value}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Footer info */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: { xs: 2, md: 2.5 },
                        borderTop: '1px dashed rgba(148,163,184,0.3)',
                        mt: 'auto',
                      }}
                    >
                      <Box>
                        <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.75rem', '3xl': '0.85rem', '4k': '1.1rem' }, color: '#64748b', mb: 0.5 }}>
                          Registered on:
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, fontWeight: 700, color: '#0f172a' }}>
                          {currentVisa.registeredOn}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.75rem', '3xl': '0.85rem', '4k': '1.1rem' }, color: '#64748b', mb: 0.5 }}>
                          Country
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, fontWeight: 700, color: '#0f172a' }}>
                          {currentVisa.country}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Pagination like carousel controls from kit */}
                  <Box sx={{ mt: { xs: 2.5, md: 3 }, display: 'flex', justifyContent: 'center' }}>
                    <Pagination
                      count={visaApplications.length}
                      page={visaPage}
                      onChange={(_, page) => setVisaPage(page)}
                      shape="circular"
                      color="primary"
                      size="small"
                      sx={{
                        '& .MuiPaginationItem-root': {
                          color: '#9ca3af',
                        },
                        '& .MuiPaginationItem-root.Mui-selected': {
                          backgroundColor: '#38bdf8',
                          color: '#0f172a',
                        },
                      }}
                    />
                  </Box>

                  {/* CTA button */}
                  <Box sx={{ mt: { xs: 3, md: 3.5 } }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: '#38bdf8',
                        color: '#0f172a',
                        textTransform: 'none',
                        fontWeight: 700,
                        py: { xs: 1.3, md: 1.5, '3xl': 1.7, '4k': 2.2 },
                        fontSize: { xs: '0.95rem', md: '1rem', '3xl': '1.1rem', '4k': '1.4rem' },
                        borderRadius: '999px',
                        boxShadow: '0 4px 14px rgba(56,189,248,0.4)',
                        '&:hover': { 
                          backgroundColor: '#0ea5e9',
                          boxShadow: '0 6px 20px rgba(56,189,248,0.5)',
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                </Box>

                {/* Right side card */}
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    p: { xs: 2.5, md: 3 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: { xs: 260, md: 300, lg: 320, '3xl': 340, '4k': 420 },
                    boxShadow: '0 12px 40px rgba(15,23,42,0.08)',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src="/GlobalVisa.svg"
                      alt="Global Visa Applications"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </div>
    </Box>
  );
}