import { merge } from 'es-toolkit';
import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { HelperText } from './help-text';

// Responsive sx styling for form fields
const responsiveFieldSx = {
  '& .MuiOutlinedInput-root': { minHeight: { xs: '40px', md: '56px' } },
  '& .MuiInputBase-input': {
    fontSize: { xs: '0.75rem', md: '0.875rem' },
    py: { xs: '0.4rem', md: '0.5rem' },
  },
  '& .MuiFormHelperText-root': {
    fontSize: { xs: '0.65rem', md: '0.75rem' },
  },
};

// Responsive MenuItem styling
const responsiveMenuItemSx = {
  fontSize: { xs: '0.7rem', md: '0.875rem' },
  py: { xs: '0.3rem', md: '0.5rem' },
};

// ----------------------------------------------------------------------

export function RHFSelect({
  name,
  label,
  children,
  helperText,
  slotProps = {},
  rules,
  size = 'small',
  sx,
  ...other
}) {
  const { control } = useFormContext();
  const labelId = `${name}-select`;

  // Extract Select-specific props that should not be passed directly to TextField
  const {
    displayEmpty,
    renderValue,
    multiple,
    autoWidth,
    variant: selectVariant,
    placeholder,
    native,
    ...textFieldProps
  } = other;

  // Create select-specific props object
  const selectSpecificProps = {
    ...(displayEmpty !== undefined && { displayEmpty }),
    ...(renderValue && { renderValue }),
    ...(multiple !== undefined && { multiple }),
    ...(autoWidth !== undefined && { autoWidth }),
    ...(selectVariant && { variant: selectVariant }),
    ...(native !== undefined && { native }),
  };

  // Page scroll lock helpers
  const lockPageScroll = () => {
    try {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } catch (_) {}
  };

  const unlockPageScroll = () => {
    try {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    } catch (_) {}
  };

  const baseSlotProps = {
    select: {
      sx: { textTransform: 'capitalize' },
      onOpen: lockPageScroll,
      onClose: unlockPageScroll,
      MenuProps: {
        disableScrollLock: false,
        slotProps: {
          paper: {
            sx: [{ maxHeight: 320, overflowY: 'auto' }],
          },
        },
      },
      ...selectSpecificProps,
    },
    htmlInput: { id: labelId },
    inputLabel: { htmlFor: labelId, shrink: true },
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          value={field.value ?? ''}
          select
          fullWidth
          size={size}
          error={!!error}
          helperText={error?.message ?? helperText}
          sx={[responsiveFieldSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
          slotProps={merge(baseSlotProps, slotProps)}
          InputLabelProps={{ shrink: true }}
          {...textFieldProps}
        >
          {children}
        </TextField>
      )}
    />
  );
}

// ----------------------------------------------------------------------

export function RHFMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox,
  placeholder,
  slotProps,
  helperText,
  ...other
}) {
  const { control } = useFormContext();
  const labelId = `${name}-multi-select`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const renderLabel = () => (
          <InputLabel htmlFor={labelId} {...slotProps?.inputLabel}>
            {label}
          </InputLabel>
        );

        const renderOptions = () =>
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {checkbox && (
                <Checkbox
                  size="small"
                  disableRipple
                  checked={field.value.includes(option.value)}
                  {...slotProps?.checkbox}
                />
              )}
              {option.label}
            </MenuItem>
          ));

        return (
          <FormControl error={!!error} {...other}>
            {label && renderLabel()}
            <Select
              {...field}
              value={Array.isArray(field.value) ? field.value : []}
              multiple
              displayEmpty={!!placeholder}
              label={label}
              onOpen={() => {
                try {
                  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                  document.documentElement.style.overflow = 'hidden';
                  document.body.style.overflow = 'hidden';
                  if (scrollbarWidth > 0) {
                    document.body.style.paddingRight = `${scrollbarWidth}px`;
                  }
                } catch (_) {}
              }}
              onClose={() => {
                try {
                  document.documentElement.style.overflow = '';
                  document.body.style.overflow = '';
                  document.body.style.paddingRight = '';
                } catch (_) {}
              }}
              MenuProps={{
                disableScrollLock: false,
                slotProps: { paper: { sx: { maxHeight: 320, overflowY: 'auto' } } },
              }}
              renderValue={(selected) => {
                const selectedItems = options.filter((item) => selected.includes(item.value));
                if (!selectedItems.length && placeholder) {
                  return <Box sx={{ color: 'text.disabled' }}>{placeholder}</Box>;
                }
                if (chip) {
                  return (
                    <Box sx={{ gap: 0.5, display: 'flex', flexWrap: 'wrap' }}>
                      {selectedItems.map((item) => (
                        <Chip
                          key={item.value}
                          size="small"
                          variant="soft"
                          label={item.label}
                          {...slotProps?.chip}
                        />
                      ))}
                    </Box>
                  );
                }
                return selectedItems.map((item) => item.label).join(', ');
              }}
              {...slotProps?.select}
              inputProps={{
                id: labelId,
                ...slotProps?.select?.inputProps,
              }}
            >
              {renderOptions()}
            </Select>
            <HelperText
              {...slotProps?.helperText}
              errorMessage={error?.message}
              helperText={helperText}
            />
          </FormControl>
        );
      }}
    />
  );
}
