import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

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

export function RHFTextarea({
  name,
  helperText,
  slotProps,
  rows = 5,
  rules,
  size = 'small',
  sx,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          multiline
          rows={rows}
          size={size}
          value={field.value ?? ''}
          InputLabelProps={{ shrink: true }}
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
              autoComplete: 'new-password',
            },
          }}
          {...other}
        />
      )}
    />
  );
}
