import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';

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

export function RHFUpload({
  name,
  label,
  helperText,
  accept = '.pdf,.docx',
  multiple = false,
  rules,
  required = false,
  sx,
  ...other
}) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        const handleFileChange = (event) => {
          const files = event.target.files;
          if (files) {
            if (multiple) {
              setValue(name, Array.from(files), { shouldValidate: true });
            } else {
              setValue(name, files[0], { shouldValidate: true });
            }
          }
        };

        const getFileName = () => {
          if (!field.value) return 'No file chosen';
          if (field.value instanceof File) {
            return field.value.name;
          }
          if (Array.isArray(field.value)) {
            return `${field.value.length} file(s) selected`;
          }
          return 'File selected';
        };

        return (
          <Box sx={{ position: 'relative' }}>
            {/* Upload Box with border */}
            <Box
              sx={[
                {
                  position: 'relative',
                  border: '1px solid',
                  borderColor: error ? '#d32f2f' : '#ccc',
                  borderRadius: '8px',
                  p: { xs: 2, md: 2.5 },
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: error ? 'rgba(211, 47, 47, 0.05)' : 'transparent',
                  minHeight: { xs: '100px', md: '120px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    borderColor: '#1976d2',
                    backgroundColor: 'rgba(25, 118, 210, 0.05)',
                  },
                },
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
              ]}
            >
              {/* Floating Label */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-12px',
                  left: '14px',
                  backgroundColor: 'white',
                  px: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    fontWeight: 500,
                    color: error ? '#d32f2f' : '#666',
                  }}
                >
                  {label}
                </Typography>
              </Box>

              <input
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id={`${name}-file-input`}
                {...other}
              />
              <label
                htmlFor={`${name}-file-input`}
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
              >
                <CloudUploadIcon
                  sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    color: error ? '#d32f2f' : '#1976d2',
                    mb: 1,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: { xs: '0.65rem', md: '0.75rem' },
                    color: '#666',
                  }}
                >
                  {getFileName()}
                </Typography>
              </label>
            </Box>

            {/* Helper Text */}
            {helperText && (
              <FormHelperText
                sx={{
                  fontSize: { xs: '0.65rem', md: '0.75rem' },
                  mt: 1,
                  mx: 1.75,
                }}
              >
                {helperText}
              </FormHelperText>
            )}

            {/* Error Message */}
            {error && (
              <FormHelperText
                error
                sx={{
                  fontSize: { xs: '0.65rem', md: '0.75rem' },
                  mt: 1,
                  mx: 1.75,
                }}
              >
                {error.message}
              </FormHelperText>
            )}
          </Box>
        );
      }}
    />
  );
}
