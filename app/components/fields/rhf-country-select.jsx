import { Controller, useFormContext } from 'react-hook-form';
import { CountrySelect } from '../country-select';

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

export function RHFCountrySelect({
  name,
  label,
  helperText,
  multiple,
  hideCode = true,
  rules,
  sx,
  ...other
}) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <CountrySelect
          id={`${name}-rhf-country-select`}
          label={label}
          value={field.value ?? (multiple ? [] : '')}
          onChange={(event, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          error={!!error}
          helperText={error?.message ?? helperText}
          multiple={multiple}
          hideCode={hideCode}
          sx={[
            responsiveFieldSx,
            ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
          ]}
          {...other}
        />
      )}
    />
  );
}
