import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

// Transform value for display
const transformValue = (value) => {
  if (value === null || value === undefined) return '';
  return String(value);
};

// Transform value on change
const transformValueOnChange = (value) => {
  if (!value) return '';
  // Remove non-numeric characters except decimal point
  return value.replace(/[^\d.]/g, '');
};

// Transform value on blur
const transformValueOnBlur = (value) => {
  if (!value) return '';
  // Parse and format number
  const num = parseFloat(value);
  return isNaN(num) ? '' : num.toString();
};

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

// ----------------------------------------------------------------------

export function RHFTextField({
  name,
  helperText,
  slotProps,
  type = 'text',
  rules,
  size = 'small',
  sx,
  required = false,
  ...other
}) {
  const { control } = useFormContext();
  const isNumberType = type === 'number';

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        const displayValue = isNumberType
          ? transformValue(field.value)
          : field.value ?? '';

        return (
          <TextField
            {...field}
            fullWidth
            size={size}
            value={displayValue}
            InputLabelProps={{ 
              shrink: true,
              sx: {
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                color: error ? '#d32f2f' : '#666',
                '&.MuiInputLabel-shrink': {
                  transform: 'translate(14px, -9px) scale(0.75)',
                },
              }
            }}
            onChange={(event) => {
              const transformedValue = isNumberType
                ? transformValueOnChange(event.target.value)
                : event.target.value;
              field.onChange(transformedValue);
            }}
            onBlur={(event) => {
              const transformedValue = isNumberType
                ? transformValueOnBlur(event.target.value)
                : event.target.value;
              field.onChange(transformedValue);
            }}
            type={isNumberType ? 'text' : type}
            error={!!error}
            helperText={error?.message ?? helperText}
            sx={[
              responsiveFieldSx,
              ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
            ]}
            slotProps={{
              ...slotProps,
              htmlInput: {
                ...slotProps?.htmlInput,
                ...(isNumberType && {
                  inputMode: 'decimal',
                  pattern: '[0-9]*\\.?[0-9]*',
                }),
                autoComplete: 'new-password',
              },
            }}
            {...other}
          />
        );
      }}
    />
  );
}
