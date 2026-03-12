'use client';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

interface CarouselDotButtonsProps {
  sx?: any;
  gap?: number;
  slotProps?: any;
  className?: string;
  onClickDot: (index: number) => void;
  scrollSnaps: any[];
  selectedIndex: number;
  variant?: 'circular' | 'rounded' | 'number';
}

export function CarouselDotButtons({
  sx,
  gap,
  slotProps,
  className,
  onClickDot,
  scrollSnaps,
  selectedIndex,
  variant = 'circular',
}: CarouselDotButtonsProps) {
  const GAPS = { rounded: gap ?? 2, circular: gap ?? 2, number: gap ?? 6 };

  const SIZES = {
    circular: slotProps?.dot?.size ?? 18,
    rounded: slotProps?.dot?.size ?? 18,
    number: slotProps?.dot?.size ?? 28,
  };

  return (
    <Box
      component="ul"
      className={className}
      sx={[
        {
          gap: `${GAPS[variant]}px`,
          height: SIZES[variant],
          zIndex: 9,
          display: 'flex',
          '& > li': {
            display: 'inline-flex',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {scrollSnaps.map((_, index) => {
        const selected = index === selectedIndex;

        return (
          <li key={index}>
            <DotItem
              disableRipple
              aria-label={`dot-${index}`}
              variant={variant}
              selected={selected}
              onClick={() => onClickDot(index)}
              sx={[
                {
                  width: SIZES[variant],
                  height: SIZES[variant],
                },
                ...(Array.isArray(slotProps?.dot?.sx) ? slotProps.dot.sx : [slotProps?.dot?.sx]),
              ]}
            >
              {variant === 'number' && index + 1}
            </DotItem>
          </li>
        );
      })}
    </Box>
  );
}

const DotItem = styled(ButtonBase, {
  shouldForwardProp: (prop) => !['variant', 'selected'].includes(prop),
})<{
  variant: 'circular' | 'rounded' | 'number';
  selected: boolean;
}>(({ selected, theme, variant }) => {
  const dotStyles = {
    width: 8,
    height: 8,
    content: '""',
    opacity: 0.24,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    transition: theme.transitions.create(['width', 'opacity'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    }),
  };

  if (variant === 'circular') {
    return {
      '&::before': {
        ...dotStyles,
        ...(selected && { opacity: 1 }),
      },
    };
  }

  if (variant === 'rounded') {
    return {
      '&::before': {
        ...dotStyles,
        ...(selected && {
          opacity: 1,
          width: 'calc(100% - 4px)',
          borderRadius: theme.shape.borderRadius,
        }),
      },
    };
  }

  return {
    ...theme.typography.caption,
    borderRadius: '50%',
    color: theme.palette.text.disabled,
    border: `solid 1px ${theme.palette.divider}`,
    ...(selected && {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightSemiBold,
    }),
  };
});

export default CarouselDotButtons;
