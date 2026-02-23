import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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

export function RHFAutocomplete({
  name,
  label,
  slotProps,
  helperText,
  placeholder,
  sx,
  ...other
}) {
  const { control, setValue } = useFormContext();
  const { textField, ...otherSlotProps } = slotProps ?? {};

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          id={`${name}-rhf-autocomplete`}
          onChange={(event, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              {...textField}
              label={label}
              placeholder={placeholder}
              error={!!error}
              helperText={error?.message ?? helperText}
              slotProps={{
                ...textField?.slotProps,
                htmlInput: {
                  ...params.inputProps,
                  ...textField?.slotProps?.htmlInput,
                  autoComplete: 'new-password', // Disable autocomplete and autofill
                },
              }}
              sx={[
                responsiveFieldSx,
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
              ]}
            />
          )}
          slotProps={otherSlotProps}
          {...other}
        />
      )}
    />
  );
}
