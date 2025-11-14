'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Iconify } from './iconify';

// Shared housing solutions snippet (3 cards) without image usage
// Can be imported and used in any Next.js page
// Example usage:
//   import { HousingSolutionShared } from '@/app/components/HousingSolutionShared';
//   ...
//   <HousingSolutionShared />

interface ServiceInfoItem {
  icon: React.ReactNode;
  label: string;
}

interface ServiceAction {
  label: string;
  href: string;
}

interface HousingService {
  id: string;
  title: string;
  badge?: string;
  rating?: string;
  postedDate: Date;
  info: ServiceInfoItem[];
  primaryAction: ServiceAction;
  secondaryAction: ServiceAction;
}

export function HousingSolutionShared(props: React.ComponentProps<typeof Container>) {
  const housingServices: HousingService[] = [
    {
      id: 'short-rental',
      title: 'Short Term Rental',
      badge: '221 Views',
      rating: '4.9',
      postedDate: new Date('2022-08-11T01:00:00'),
      info: [
        {
          icon: <Iconify icon="mingcute:location-fill" sx={{ color: 'error.main', fontSize: 16 }} />,
          label: 'Short Stays, Long Comfort',
        },
      ],
      primaryAction: {
        label: 'Reserve Now',
        href: '/relocation-services/housing/short-rental/book-now',
      },
      secondaryAction: {
        label: 'Become A Host',
        href: '/relocation-services/housing/short-rental/become-a-host',
      },
    },
    {
      id: 'long-rental',
      title: 'Long Term Rental',
      badge: '153 Interested',
      postedDate: new Date('2022-08-11T01:00:00'),
      info: [
        {
          icon: <Iconify icon="mingcute:location-fill" sx={{ color: 'error.main', fontSize: 16 }} />,
          label: 'Long-Term Housing Made Effortless',
        },
      ],
      primaryAction: {
        label: 'Rent Now',
        href: '/relocation-services/housing/long-rental',
      },
      secondaryAction: {
        label: 'Sublet Your Property',
        href: '/relocation-services/housing/list-property',
      },
    },
    {
      id: 'buy-property',
      title: 'Buy - Sell Property',
      badge: '202 Visitors',
      postedDate: new Date('2022-08-11T01:00:00'),
      info: [
        {
          icon: <Iconify icon="mingcute:location-fill" sx={{ color: 'error.main', fontSize: 16 }} />,
          label: 'Buy-Sell & Mortgage Support',
        },
      ],
      primaryAction: {
        label: 'Buy Now',
        href: '/relocation-services/housing/buy-property',
      },
      secondaryAction: {
        label: 'Sell Your Property',
        href: '/relocation-services/housing/sell-property',
      },
    },
  ];

  return (
    <Container maxWidth={false} sx={{ py: 4, px: 0, maxWidth: '1400px', mx: 'auto' }} {...props}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(3, minmax(0, 1fr))',
          },
          gap: { xs: 2, md: 3 },
          alignItems: 'stretch',
          width: '100%',
        }}
      >
        {housingServices.map((service) => (
          <HousingSolutionCard key={service.id} service={service} />
        ))}
      </Box>
    </Container>
  );
}

function formatDate(d: Date) {
  const day = d.getDate();
  const month = d.toLocaleString('en-US', { month: 'short' });
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

function HousingSolutionCard({ service }: { service: HousingService }) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 3,
        border: '1px solid #e2e8f0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        backgroundColor: '#fff',
      }}
    >
      {/* Header/Badge region (no image) */}
      <Box sx={{ position: 'relative', bgcolor: '#f1f5f9', height: 16 }}>
        {service.badge && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              backgroundColor: '#1e293b',
              color: '#fff',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.75rem',
              fontWeight: 700,
            }}
          >
            {service.badge}
          </Box>
        )}
        {service.rating && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              backgroundColor: '#1e293b',
              color: '#fff',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.75rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            ⭐ {service.rating}
          </Box>
        )}
      </Box>

      {/* Body */}
      <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ color: '#94a3b8', fontSize: '0.8rem', mb: 2 }}>
          Posted date: {formatDate(service.postedDate)}
        </Typography>

        <Typography sx={{ fontWeight: 800, fontSize: '1.125rem', color: '#1e293b', mb: 2 }}>
          {service.title}
        </Typography>

        <Box sx={{ display: 'grid', gap: 1.25, mb: 3 }}>
          {service.info.map((row, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
              {row.icon}
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', fontWeight: 600 }}>
                {row.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Actions */}
        <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Button
            href={service.primaryAction.href}
            variant="outlined"
            sx={{
              py: 1.25,
              fontWeight: 700,
              textTransform: 'none',
              borderWidth: 2,
              borderColor: '#cbd5e1',
              color: '#1e293b',
            }}
            endIcon={<span style={{ fontSize: '1.1rem' }}>→</span>}
          >
            {service.primaryAction.label}
          </Button>
          <Button
            href={service.secondaryAction.href}
            variant="contained"
            sx={{ py: 1.25, fontWeight: 700, textTransform: 'none', bgcolor: '#1e293b' }}
            endIcon={<span style={{ fontSize: '1.1rem' }}>→</span>}
          >
            {service.secondaryAction.label}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default HousingSolutionShared;
