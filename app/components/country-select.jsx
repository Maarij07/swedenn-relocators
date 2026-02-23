import { useId, useMemo, useCallback } from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Popper from '@mui/material/Popper';
import { filledInputClasses } from '@mui/material/FilledInput';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import InputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { countries } from '../data/countries';

// Custom Popper to position dropdown directly below field
function DownwardPopper(props) {
  return (
    <Popper
      {...props}
      placement="bottom-start"
      modifiers={[
        { name: 'flip', enabled: false },
        { name: 'offset', options: { offset: [0, 8] } },
      ]}
      style={{ width: props.anchorEl ? props.anchorEl.clientWidth : undefined }}
    />
  );
}

// Flag icon component using country code
function FlagIcon({ code, sx }) {
  if (!code) return null;
  
  return (
    <img
      src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
      alt={code}
      style={{
        width: '20px',
        height: '15px',
        borderRadius: '2px',
        ...sx,
      }}
    />
  );
}

// Get country by code, label, or phone
const getCountry = (inputValue) =>
  countries.find(
    (country) =>
      country.label === inputValue ||
      country.code === inputValue ||
      country.phone === inputValue
  ) ?? {
    code: '',
    label: '',
    phone: '',
  };

export function CountrySelect({
  id,
  label,
  error,
  variant = 'outlined',
  multiple,
  helperText,
  hiddenLabel,
  placeholder,
  displayValue = 'label',
  hideCode = false,
  availableCountries,
  ...other
}) {
  const { getValue, gridColumn, gridRow, gridArea, ...autocompleteProps } = other;
  const uniqueId = useId();

  // Filter countries if availableCountries is provided
  const filteredCountries = useMemo(() => {
    if (availableCountries && availableCountries.length > 0) {
      return countries.filter((country) =>
        availableCountries.includes(country.label)
      );
    }
    return countries;
  }, [availableCountries]);

  const options = useMemo(
    () =>
      filteredCountries.map((country) =>
        displayValue === 'code' ? country.code : country.label
      ),
    [filteredCountries, displayValue]
  );

  const getOptionLabel = useCallback(
    (option) => (displayValue === 'code' ? getCountry(option).label : option),
    [displayValue]
  );

  const renderOption = useCallback(
    (props, option) => {
      const { key, ...otherProps } = props;
      const country = getCountry(option);
      return (
        <li key={key} {...otherProps}>
          <FlagIcon
            code={country.code}
            sx={{
              mr: 1.5,
              width: 24,
              height: 18,
              borderRadius: '2px',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.08)',
            }}
          />
          <span style={{ marginLeft: '8px' }}>
            {hideCode
              ? country.label
              : `${country.label} (${country.code}) +${country.phone}`}
          </span>
        </li>
      );
    },
    [hideCode]
  );

  const renderInput = useCallback(
    (params) => {
      const country = getCountry(params.inputProps.value);
      const textFieldStyles = {
        [`& .${inputAdornmentClasses.root}`]: {
          ml: 0.5,
          mr: 1,
        },
        [`& .${outlinedInputClasses.root}, .${filledInputClasses.root}`]: {
          [`& .${autocompleteClasses.input}`]: {
            pl: 0,
          },
        },
        [`& .${filledInputClasses.root}`]: {
          [`& .${inputAdornmentClasses.root}`]: {
            transform: hiddenLabel ? 'unset' : 'translateY(-8px)',
          },
        },
      };

      const hasAdornment = !multiple && !!country.code;

      return (
        <TextField
          {...params}
          fullWidth
          label={label}
          InputLabelProps={{ shrink: true }}
          variant={variant}
          placeholder={placeholder}
          helperText={helperText}
          hiddenLabel={hiddenLabel}
          error={!!error}
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: 'new-password',
            },
            input: {
              ...params.InputProps,
              ...(hasAdornment && {
                startAdornment: (
                  <InputAdornment position="start">
                    <FlagIcon
                      code={country.code}
                      sx={{
                        width: 20,
                        height: 15,
                        borderRadius: '2px',
                        boxShadow: '0 0 0 1px rgba(0,0,0,0.08)',
                      }}
                    />
                  </InputAdornment>
                ),
              }),
            },
          }}
          sx={[!multiple && textFieldStyles]}
        />
      );
    },
    [error, helperText, hiddenLabel, label, multiple, placeholder, variant]
  );

  const renderValue = useCallback(
    (selected, getItemProps) =>
      selected.map((option, index) => {
        const country = getCountry(option);
        return (
          <Chip
            {...getItemProps({ index })}
            key={country.label}
            label={country.label}
            size="small"
            variant="soft"
            icon={
              <FlagIcon
                code={country.code}
                sx={{ width: 16, height: 12, borderRadius: '2px' }}
              />
            }
          />
        );
      }),
    []
  );

  return (
    <Autocomplete
      id={id ?? `${uniqueId}-country-select`}
      options={options}
      multiple={multiple}
      fullWidth
      autoHighlight={!multiple}
      disableCloseOnSelect={multiple}
      clearIcon={null}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      renderInput={renderInput}
      renderValue={multiple ? renderValue : undefined}
      PopperComponent={DownwardPopper}
      {...autocompleteProps}
    />
  );
}
