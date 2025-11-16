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

type StepIndex = 0 | 1 | 2 | 3 | 4;

export default function VisaApplicationJourney() {
  const [activeStep, setActiveStep] = useState<StepIndex>(0);
  const [isManual, setIsManual] = useState(false);

  // Upload documents state (Upload Document step)
  const [documents, setDocuments] = useState<
    Array<{
      id: number;
      name: string;
      sizeLabel: string;
    }>
  >([]);

  // Inline calendar state (Appointment step)
  const [calendarDate, setCalendarDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const startOfMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1);
  const endOfMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0);
  const startWeekday = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const visibleDays = Array.from({ length: startWeekday + daysInMonth }, (_, i) => {
    const dayNum = i - startWeekday + 1;
    if (dayNum < 1) return null;
    return new Date(calendarDate.getFullYear(), calendarDate.getMonth(), dayNum);
  });

  const goMonth = (delta: number) => {
    setCalendarDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
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

  return (
    <Box sx={{ width: '100%', backgroundColor: '#ffffff', py: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem', '3xl': '7rem', '4k': '8rem' }, overflowX: 'hidden' }}>
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
            // Step 1 & 2 should be on pure white like the Figma; later steps keep light grey card
            backgroundColor: activeStep === 0 || activeStep === 1 ? '#ffffff' : '#f8fafc',
            borderRadius: '12px',
            overflow: 'hidden',
            p: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', '3xl': '3.5rem', '4k': '4.5rem' },
            minHeight: { xs: 320, sm: 380, md: 450, '3xl': 520, '4k': 680 },
            // Fast fade / slide animation whenever step changes
            '@keyframes stepFadeIn': {
              '0%': { opacity: 0, transform: 'translateY(10px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
            animation: 'stepFadeIn 0.35s ease-out',
          }}
        >
          {/* Step 0 */}
          {activeStep === 0 && (
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, minmax(0, 1fr))' },
              gap: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem', '2xl': '5rem', '3xl': '6rem', '4k': '8rem' },
              alignItems: 'center',
            }}>
              <Box sx={{ position: 'relative', height: { xs: 200, sm: 240, md: 280, lg: 320, '3xl': 380, '4k': 500 } }}>
                <Image src="/t1.png" alt="Create Account" fill style={{ objectFit: 'contain' }} />
              </Box>

              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                gap: { xs: 1.5, sm: 1.75, md: 2, '3xl': 2.5, '4k': 3 },
                maxWidth: { lg: '50rem', '3xl': '60rem', '4k': '96rem' },
                mx: { xs: 'auto', lg: 0 },
                ml: { lg: 'auto' },
              }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.5rem', '3xl': '1.75rem', '4k': '2.5rem' },
                  mb: 1 
                }}>
                  Get Started - Set Up Your Account With Us!
                </Typography>
                <Typography sx={{ 
                  color: '#64748b', 
                  fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', '3xl': '1.125rem', '4k': '1.5rem' },
                  mb: 2 
                }}>
                  Choose the type of account you need to create
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#1e293b',
                    color: '#ffffff',
                    textTransform: 'none',
                    mb: 3,
                    fontSize: { xs: '0.85rem', sm: '0.9rem', '3xl': '1rem', '4k': '1.4rem' },
                    py: { xs: 1.2, '3xl': 1.5, '4k': 2 },
                  }}
                >
                  Choose the type of account you need to create
                </Button>

                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Account Type</InputLabel>
                  <Select defaultValue="individual" label="Account Type">
                    <MenuItem value="individual">INDIVIDUAL (PRIVATE ACCOUNT)</MenuItem>
                    <MenuItem value="corporate">CORPORATE ACCOUNT</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Account Subtype</InputLabel>
                  <Select defaultValue="subtype1" label="Account Subtype">
                    <MenuItem value="subtype1">INDIVIDUAL (PRIVATE ACCOUNT) Subtype</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#cbd5e1',
                    color: '#64748b',
                    textTransform: 'none',
                    fontSize: { xs: '0.85rem', sm: '0.9rem', '3xl': '1rem', '4k': '1.4rem' },
                    py: { xs: 1.2, '3xl': 1.5, '4k': 2 },
                  }}
                >
                  Select account type to continue
                </Button>
              </Box>
            </Box>
          )}

          {/* Step 1 */}
          {activeStep === 1 && (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, minmax(0, 1fr))' },
                gap: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem', '2xl': '5rem', '3xl': '6rem', '4k': '8rem' },
                alignItems: 'stretch',
              }}
            >
              {/* Left: Form */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 } }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#3b82f6', mb: 1, fontSize: { xs: '0.95rem', '3xl': '1.1rem', '4k': '1.5rem' } }}>
                  STEP 2: Apply
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.25rem', sm: '1.4rem', '3xl': '1.65rem', '4k': '2.3rem' } }}>
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

                <TextField label="Email" placeholder="Enter email" fullWidth size="small" sx={{ mt: 2 }} />
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

              {/* Right: Card Image - ENLARGED */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: { lg: '50rem', '3xl': '60rem', '4k': '96rem' },
                  mx: { xs: 'auto', lg: 0 },
                  ml: { lg: 'auto' },
                  minHeight: { xs: 400, sm: 480, md: 560, lg: 640, '3xl': 720, '4k': 900 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Image src="/apply.svg" alt="Apply" fill style={{ objectFit: 'contain' }} />
                </Box>
              </Box>
            </Box>
          )}

          {/* Step 2 */}
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

          {/* Step 3 */}
          {activeStep === 3 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.25rem', sm: '1.4rem', '3xl': '1.65rem', '4k': '2.3rem' } }}>
                Schedule Your Appointment
              </Typography>
              <Typography sx={{ color: '#64748b', mb: 3, fontSize: { xs: '0.875rem', sm: '0.9375rem', '3xl': '1.05rem', '4k': '1.4rem' } }}>
                Select a date that works best for you. The calendar below shows available dates.
              </Typography>

              <Box
                sx={{
                  flex: 1,
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  p: { xs: 2.5, md: 3 },
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Button
                    variant="text"
                    size="small"
                    sx={{ textTransform: 'none', color: '#64748b' }}
                    onClick={() => goMonth(-1)}
                  >
                    Previous
                  </Button>
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.95rem', '3xl': '1.1rem', '4k': '1.5rem' } }}>
                    {calendarDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </Typography>
                  <Button
                    variant="text"
                    size="small"
                    sx={{ textTransform: 'none', color: '#64748b' }}
                    onClick={() => goMonth(1)}
                  >
                    Next
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                    mb: 1,
                    gap: 0.5,
                  }}
                >
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <Typography
                      key={day}
                      sx={{
                        textAlign: 'center',
                        fontSize: { xs: '0.75rem', '3xl': '0.85rem', '4k': '1.1rem' },
                        fontWeight: 600,
                        color: '#94a3b8',
                      }}
                    >
                      {day}
                    </Typography>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                    gap: 0.75,
                  }}
                >
                  {visibleDays.map((date, index) => {
                    if (!date) {
                      return <Box key={index} />;
                    }

                    const isSelected = selectedDate && isSameDay(selectedDate, date);
                    const isToday = isSameDay(new Date(), date);

                    return (
                      <Box
                        key={index}
                        onClick={() => setSelectedDate(date)}
                        sx={{
                          height: { xs: 44, '3xl': 52, '4k': 68 },
                          borderRadius: '8px',
                          border: isSelected ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                          backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          position: 'relative',
                          '&:hover': {
                            borderColor: '#3b82f6',
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: '0.85rem', '3xl': '0.95rem', '4k': '1.25rem' },
                            fontWeight: isSelected ? 700 : 500,
                            color: isSelected ? '#1d4ed8' : '#0f172a',
                          }}
                        >
                          {date.getDate()}
                        </Typography>
                        {isToday && (
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 6,
                              width: 4,
                              height: 4,
                              borderRadius: '9999px',
                              backgroundColor: '#22c55e',
                            }}
                          />
                        )}
                      </Box>
                    );
                  })}
                </Box>

                {selectedDate && (
                  <Typography sx={{ mt: 3, fontSize: { xs: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, color: '#64748b' }}>
                    Selected date:{' '}
                    <Box component="span" sx={{ fontWeight: 600, color: '#0f172a' }}>
                      {selectedDate.toLocaleDateString()}
                    </Box>
                  </Typography>
                )}
              </Box>
            </Box>
          )}

          {/* Step 4 */}
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
                {/* Left side: show the SVG only, no extra white card behind */}
                <Box
                  sx={{
                    backgroundColor: 'transparent',
                    borderRadius: 0,
                    p: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: { xs: 380, md: 460, lg: 520, '3xl': 600, '4k': 780 },
                    boxShadow: 'none',
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
                    minHeight: { xs: 420, md: 500, lg: 560, '3xl': 640, '4k': 820 },
                    boxShadow: '0 10px 40px rgba(15,23,42,0.12)',
                    overflow: 'hidden',
                    border: '1px solid rgba(148,163,184,0.15)',
                  }}
                >
                  {/* Top flag section */}
                  {/* Top flag + document tab as a single Figma asset */}
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
                  <Box sx={{ mt: { xs: 3.5, md: 4 }, flex: 1, display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 2.5 } }}>
                    <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.2rem', '3xl': '1.35rem', '4k': '1.75rem' }, fontWeight: 700, mb: 0.5, color: '#0f172a' }}>
                      Sweden Visit Visa Application
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
                        ['Case Number', '52385971'],
                        ['Authority', 'MGVKT'],
                        ['Status', 'In Progress'],
                        ['Duration', '10 days'],
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
                          2025-07-11
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.75rem', '3xl': '0.85rem', '4k': '1.1rem' }, color: '#64748b', mb: 0.5 }}>
                          Country
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.9rem', '3xl': '1rem', '4k': '1.3rem' }, fontWeight: 700, color: '#0f172a' }}>
                          Sweden
                        </Typography>
                      </Box>
                    </Box>
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

                {/* Right side: SVG only, no outer white card */}
                <Box
                  sx={{
                    backgroundColor: 'transparent',
                    borderRadius: 0,
                    p: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: { xs: 380, md: 460, lg: 520, '3xl': 600, '4k': 780 },
                    boxShadow: 'none',
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
