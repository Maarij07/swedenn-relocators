'use client';

import { useMemo, useRef, useState, useCallback } from 'react';

const PORTAL_URL = 'https://portal.swedenrelocators.se';

const redirectToPortal = () => {
  window.open(PORTAL_URL, '_blank', 'noopener,noreferrer');
};
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

import Calendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// Function to determine appointment color based on type and theme
const getAppointmentColor = (appointmentData: any, theme: any) => {
  // Return transparent - we'll use borders instead
  return 'transparent';
};

const getLawyerColor = () => {
  return 'transparent';
};

// Get border color based on type
const getBorderColor = (type: string) => {
  if (type.includes('Sweden') || type.toLowerCase().includes('relocators')) {
    return '#00B8D9'; // Cyan for Sweden Relocators
  }
  if (type.includes('Government') || type.includes('Myndighet')) {
    return '#8E33FF'; // Purple for Government Authority
  }
  return '#FFAB00'; // Orange for Lawyer
};

export function UpcomingAppointments() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isSv = i18n.language === 'sv';
  const calendarRef = useRef<any>(null);
  const [view, setView] = useState('dayGridMonth');
  const [date, setDate] = useState(new Date());

  // Mock events using the SAME color logic as portal
  const MOCK_EVENTS = [
    // Sweden Relocators appointments
    {
      id: '1',
      title: isSv ? 'Konsultation om uppehållstillstånd' : 'Residence Permit Consultation',
      start: new Date(2026, 1, 15).toISOString(),
      end: new Date(2026, 1, 15, 1).toISOString(),
      color: getAppointmentColor({ country: 'Sweden' }, theme),
      allDay: false,
      location: 'Online (Google Meet)',
      country: 'Sweden',
      type: isSv ? 'Sweden Relocators' : 'Sweden Relocators',
      contact_person: 'SR Advisor',
      status: 'Confirmed',
    },
    {
      id: '2',
      title: isSv ? 'Ankomstservicemöte' : 'Arrival Services Meeting',
      start: new Date(2026, 1, 18).toISOString(),
      end: new Date(2026, 1, 18, 1, 30).toISOString(),
      color: getAppointmentColor({ country: 'Sweden' }, theme),
      allDay: false,
      location: 'SR Office, Stockholm',
      country: 'Sweden',
      type: isSv ? 'Sweden Relocators' : 'Sweden Relocators',
      contact_person: 'Relocation Manager',
      status: 'Scheduled',
    },
    {
      id: '3',
      title: isSv ? 'Dokumentgenomgångsmöte' : 'Document Review Meeting',
      start: new Date(2026, 1, 22).toISOString(),
      end: new Date(2026, 1, 22, 1).toISOString(),
      color: getAppointmentColor({ country: 'Sweden' }, theme),
      allDay: false,
      location: 'SR Office, Stockholm',
      country: 'Sweden',
      type: isSv ? 'Sweden Relocators' : 'Sweden Relocators',
      contact_person: 'Document Specialist',
      status: 'Scheduled',
    },
    {
      id: '4',
      title: isSv ? 'Bostadsstödskonsultation' : 'Housing Support Consultation',
      start: new Date(2026, 1, 25).toISOString(),
      end: new Date(2026, 1, 25, 0, 45).toISOString(),
      color: getAppointmentColor({ country: 'Sweden' }, theme),
      allDay: false,
      location: 'Online (Zoom)',
      country: 'Sweden',
      type: isSv ? 'Sweden Relocators' : 'Sweden Relocators',
      contact_person: 'Housing Specialist',
      status: 'Confirmed',
    },
    
    // Government Authority appointments
    {
      id: '5',
      title: isSv ? 'Ambassadinlämning' : 'Embassy Submission',
      start: new Date(2026, 1, 17).toISOString(),
      end: new Date(2026, 1, 17, 1).toISOString(),
      color: getAppointmentColor({ country: 'Germany' }, theme),
      allDay: false,
      location: 'Embassy of Sweden, Berlin',
      country: 'Germany',
      type: isSv ? 'Myndighet' : 'Government Authority',
      contact_person: 'Embassy Desk',
      status: 'Pending',
    },
    {
      id: '6',
      title: isSv ? 'Migrationsverket bokning' : 'Migrationsverket Appointment',
      start: new Date(2026, 1, 20).toISOString(),
      end: new Date(2026, 1, 20, 2).toISOString(),
      color: getAppointmentColor({ country: 'Denmark' }, theme),
      allDay: false,
      location: 'Swedish Migration Agency, Stockholm',
      country: 'Denmark',
      type: isSv ? 'Myndighet' : 'Government Authority',
      contact_person: 'Case Officer',
      status: 'Confirmed',
    },
    {
      id: '7',
      title: isSv ? 'Arbetstillståndsintervju' : 'Work Permit Interview',
      start: new Date(2026, 1, 27).toISOString(),
      end: new Date(2026, 1, 27, 1, 30).toISOString(),
      color: getAppointmentColor({ country: 'Norway' }, theme),
      allDay: false,
      location: 'UDI Office, Oslo',
      country: 'Norway',
      type: isSv ? 'Myndighet' : 'Government Authority',
      contact_person: 'Immigration Officer',
      status: 'Scheduled',
    },
    
    // Lawyer appointments
    {
      id: '8',
      title: isSv ? 'Juridisk konsultation - Migrationsrätt' : 'Legal Consultation - Migration Law',
      start: new Date(2026, 1, 16).toISOString(),
      end: new Date(2026, 1, 16, 1).toISOString(),
      color: getLawyerColor(),
      allDay: false,
      location: 'Online (Microsoft Teams)',
      country: 'Sweden',
      type: isSv ? 'Advokat' : 'Lawyer',
      contact_person: 'Anastasia Martin',
      status: 'Confirmed',
    },
    {
      id: '9',
      title: isSv ? 'Ärendegenomgång med juridisk rådgivare' : 'Case Review with Legal Advisor',
      start: new Date(2026, 1, 19).toISOString(),
      end: new Date(2026, 1, 19, 1, 30).toISOString(),
      color: getLawyerColor(),
      allDay: false,
      location: 'Law Office, Stockholm',
      country: 'Sweden',
      type: isSv ? 'Advokat' : 'Lawyer',
      contact_person: 'Erik Larsson',
      status: 'Scheduled',
    },
    {
      id: '10',
      title: isSv ? 'Familjeåterföreningskonsultation' : 'Family Reunification Consultation',
      start: new Date(2026, 1, 23).toISOString(),
      end: new Date(2026, 1, 23, 0, 45).toISOString(),
      color: getLawyerColor(),
      allDay: false,
      location: 'Online (Zoom)',
      country: 'Sweden',
      type: isSv ? 'Advokat' : 'Lawyer',
      contact_person: 'Sofia Berg',
      status: 'Confirmed',
    },
    {
      id: '11',
      title: isSv ? 'Överklagan förberedelsemöte' : 'Appeal Preparation Meeting',
      start: new Date(2026, 1, 26).toISOString(),
      end: new Date(2026, 1, 26, 2).toISOString(),
      color: getLawyerColor(),
      allDay: false,
      location: 'Law Firm Office',
      country: 'Sweden',
      type: isSv ? 'Advokat' : 'Lawyer',
      contact_person: 'Marcus Anderson',
      status: 'Scheduled',
    },
  ];

  const handleDatePrev = useCallback(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  }, []);

  const handleDateNext = useCallback(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  }, []);

  const handleDateToday = useCallback(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  }, []);

  const handleChangeView = useCallback((newView: string) => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.changeView(newView);
      setView(newView);
    }
  }, []);

  const handleClickEvent = useCallback((info: any) => {
    const eventData = info.event;
    console.log('Selected appointment:', eventData);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Card sx={{ 
        p: 3, 
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
        borderRadius: '16px',
      }}>
        {/* Calendar Toolbar - matching portal design */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                color: '#212B36',
                fontSize: '1.125rem',
                lineHeight: 1.55556,
              }}
            >
              {date.toLocaleDateString(isSv ? 'sv-SE' : 'en-US', { month: 'long', year: 'numeric' })}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDatePrev();
                  redirectToPortal();
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  redirectToPortal();
                }}
                sx={{
                  p: 1,
                  color: '#637381',
                  cursor: 'pointer',
                  '&:hover': { 
                    bgcolor: 'rgba(145, 158, 171, 0.08)',
                    cursor: 'pointer'
                  },
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDateToday();
                  redirectToPortal();
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  redirectToPortal();
                }}
                sx={{
                  px: 2,
                  py: 0.75,
                  mx: 0.5,
                  borderRadius: '8px',
                  color: '#637381',
                  textTransform: 'capitalize',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': { 
                    bgcolor: 'rgba(145, 158, 171, 0.08)',
                    cursor: 'pointer'
                  },
                }}
              >
                {isSv ? 'Idag' : 'Today'}
              </Button>
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDateNext();
                  redirectToPortal();
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  redirectToPortal();
                }}
                sx={{
                  p: 1,
                  color: '#637381',
                  cursor: 'pointer',
                  '&:hover': { 
                    bgcolor: 'rgba(145, 158, 171, 0.08)',
                    cursor: 'pointer'
                  },
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Filter Button */}
            <IconButton
              sx={{
                color: '#637381',
                '&:hover': { bgcolor: 'rgba(145, 158, 171, 0.08)' },
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 6H20M7 12H17M10 18H14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                bgcolor: 'rgba(145, 158, 171, 0.08)',
                borderRadius: '24px',
                p: 0.5,
              }}
            >
              {[
                { key: 'dayGridMonth', label: isSv ? 'Månad' : 'Month' },
                { key: 'timeGridWeek', label: isSv ? 'Vecka' : 'Week' },
                { key: 'timeGridDay', label: isSv ? 'Dag' : 'Day' },
                { key: 'listWeek', label: isSv ? 'Agenda' : 'Agenda' },
              ].map(({ key, label }) => (
                <Button
                  key={key}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleChangeView(key);
                    redirectToPortal();
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    redirectToPortal();
                  }}
                  sx={{
                    px: 2,
                    py: 0.75,
                    minWidth: 'auto',
                    borderRadius: '20px',
                    bgcolor: view === key ? '#FFFFFF' : 'transparent',
                    boxShadow: view === key ? '0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 1px 8px 0 rgba(0, 0, 0, 0.04)' : 0,
                    color: view === key ? '#212B36' : '#637381',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: view === key ? '#FFFFFF' : 'rgba(145, 158, 171, 0.16)',
                      cursor: 'pointer'
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Calendar Component - EXACT styling from portal */}
        <Box
          sx={{
            backgroundColor: '#FFFFFF',
            '.fc': {
              '--fc-border-color': 'rgba(145, 158, 171, 0.24)',
              '--fc-now-indicator-color': '#FF5630',
              '--fc-today-bg-color': 'rgba(145, 158, 171, 0.08)',
              '--fc-page-bg-color': '#FFFFFF',
              '--fc-neutral-bg-color': 'rgba(145, 158, 171, 0.08)',
              '--fc-neutral-text-color': '#637381',
              '--fc-event-border-color': 'transparent',
              '--fc-event-text-color': '#212B36',
              '--fc-list-event-hover-bg-color': 'rgba(145, 158, 171, 0.08)',
              fontFamily: theme.typography.fontFamily,
              color: '#212B36',
              backgroundColor: '#FFFFFF',
            },
            '.fc .fc-toolbar': {
              display: 'none',
            },
            '.fc .fc-day-other .fc-daygrid-day-top': {
              opacity: 0.5,
              color: '#919EAB',
            },
            '.fc .fc-day-today': {
              backgroundColor: 'rgba(145, 158, 171, 0.08)',
            },
            '.fc .fc-col-header-cell': {
              padding: '12px 0',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#637381',
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
              textTransform: 'uppercase',
            },
            '.fc .fc-col-header-cell-cushion': {
              color: '#637381',
              textDecoration: 'none',
            },
            '.fc .fc-daygrid-day-number': {
              padding: '8px 12px',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#212B36',
              textDecoration: 'none',
            },
            '.fc .fc-daygrid-day.fc-day-other .fc-daygrid-day-number': {
              color: '#919EAB',
              opacity: 0.48,
            },
            '.fc .fc-event': {
              borderRadius: '16px',
              padding: '2px 8px',
              fontSize: '0.7rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: 'none',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              border: '1px solid',
              borderColor: 'currentColor',
              marginBottom: '2px',
              minHeight: '20px',
            },
            '.fc .fc-daygrid-event': {
              borderRadius: '16px',
              padding: '2px 6px',
              marginTop: '1px',
              marginBottom: '2px',
              backgroundColor: '#FFFFFF',
              border: '1px solid',
              minHeight: '20px',
            },
            '.fc .fc-daygrid-event-harness': {
              marginTop: '2px',
              marginBottom: '2px',
            },
            '.fc .fc-event-main': {
              padding: '2px 4px',
            },
            '.fc-theme-standard td, .fc-theme-standard th': {
              borderColor: 'rgba(145, 158, 171, 0.24)',
              backgroundColor: '#FFFFFF',
            },
            '.fc .fc-daygrid-day-frame': {
              minHeight: '120px',
              padding: '4px',
            },
            '.fc .fc-daygrid-day-events': {
              marginTop: '4px',
            },
            '.fc .fc-daygrid-day-top': {
              flexDirection: 'row',
            },
            '.fc .fc-daygrid-more-link': {
              fontSize: '0.7rem',
              color: '#637381',
              fontWeight: 600,
              marginTop: '2px',
            },
            '.fc-list': {
              borderColor: 'rgba(145, 158, 171, 0.24)',
            },
            '.fc .fc-list-day-cushion': {
              backgroundColor: '#FFFFFF',
              padding: '16px 8px',
            },
            '.fc .fc-list-day-text': {
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#212B36',
            },
            '.fc .fc-list-day-side-text': {
              fontSize: '0.875rem',
              fontWeight: 400,
              color: '#637381',
            },
            '.fc-list-event': {
              cursor: 'pointer',
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid rgba(145, 158, 171, 0.12)',
            },
            '.fc-list-event:hover': {
              backgroundColor: 'rgba(145, 158, 171, 0.04)',
            },
            '.fc-list-event td': {
              padding: '12px 8px',
              borderColor: 'rgba(145, 158, 171, 0.12)',
            },
            '.fc .fc-list-event-dot': {
              width: '8px',
              height: '8px',
              border: 'none',
              borderRadius: '50%',
              margin: '0 12px',
            },
            '.fc .fc-list-event-time': {
              fontSize: '0.875rem',
              fontWeight: 400,
              color: '#637381',
              width: '100px',
            },
            '.fc .fc-list-event-title': {
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#212B36',
            },
            '.fc .fc-timegrid-event': {
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
            },
            '.fc .fc-timegrid-event-harness': {
              marginRight: '2px',
            },
            minHeight: '600px',
          }}
        >
          <Calendar
            weekends
            editable
            droppable
            selectable
            events={MOCK_EVENTS}
            ref={calendarRef}
            initialView={view}
            initialDate={new Date(2026, 1, 15)}
            headerToolbar={false}
            dayMaxEventRows={3}
            eventDisplay="block"
            dateClick={(info) => {
              handleClickEvent(info);
              redirectToPortal();
            }}
            eventClick={(info) => {
              handleClickEvent(info);
              redirectToPortal();
            }}
            height="auto"
            plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
            eventContent={(eventInfo) => {
              const { event, view } = eventInfo;
              const truncatedTitle = event.title.length > 10 ? event.title.substring(0, 10) + '...' : event.title;
              
              // Check if we're in list/agenda view
              const isListView = view.type === 'listWeek' || view.type === 'listDay' || view.type === 'listMonth';
              
              // Determine border color based on event type
              const borderColor = getBorderColor(event.extendedProps.type);
              
              // For list view, show title and type in a clean layout
              if (isListView) {
                return (
                  <Box sx={{ 
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                  }}>
                    <Typography sx={{ 
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#212B36',
                      flex: 1,
                    }}>
                      {event.title}
                    </Typography>
                    <Typography sx={{
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      color: event.extendedProps.type.includes('Sweden') || event.extendedProps.type.includes('Lawyer') || event.extendedProps.type.includes('Advokat') ? '#00B8D9' : 
                             event.extendedProps.type.includes('Government') || event.extendedProps.type.includes('Myndighet') ? '#8E33FF' : 
                             '#00B8D9',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}>
                      {event.extendedProps.type}
                    </Typography>
                  </Box>
                );
              }
              
              // For calendar views (month, week, day), use white background with colored border
              return (
                <Box sx={{ 
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 0.5,
                  px: 0.5,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: `2px solid ${borderColor}`,
                  overflow: 'hidden',
                }}>
                  <Typography sx={{ 
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    color: '#212B36',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    flex: 1,
                  }}>
                    {truncatedTitle}
                  </Typography>
                  <Typography sx={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    px: 0.75,
                    py: 0.25,
                    borderRadius: '8px',
                    bgcolor: 'rgba(255, 255, 255, 0.85)',
                    color: event.extendedProps.type.includes('Sweden') ? '#0C53B7' : 
                           event.extendedProps.type.includes('Government') || event.extendedProps.type.includes('Myndighet') ? '#7635DC' : 
                           '#B76E00',
                    whiteSpace: 'nowrap',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}>
                    {event.extendedProps.type}
                  </Typography>
                </Box>
              );
            }}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default UpcomingAppointments;
