import { border, color } from "@mui/system";
import palette from './palates';

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: '8px 24px',
        textTransform: 'none',
        fontWeight: 600,
      },

      sizeSmall: {
          padding: '4px 12px',
          fontSize: '0.75rem',
        },
        sizeMedium: {
          padding: '6px 16px',
          fontSize: '0.875rem',
        },
        sizeLarge: {
          padding: '6px 16px',
          fontSize: '1rem',
        },

      containedPrimary: (theme) => ({
        backgroundColor: palette.primary.main,       // default
        color: '#fff',
        '&:hover': {
          backgroundColor: palette.color_shade.s2,     // hover
        },
        '&:active': {
          backgroundColor: palette.color_shade.s4,     // click / active
        },
        '&:focus-visible': {
          borderColor: palette.neutral.grey,
          backgroundColor: palette.color_shade.s3, // focus
        },
        '&.Mui-disabled': {
          backgroundColor: palette.neutral.grey_light,      // disabled
          color: palette.neutral.grey_dark,
        },
      }),

      outlinedPrimary: (theme) => ({
        borderColor: palette.primary,
        color: palette.primary,
        '&:hover': {
          backgroundColor: palette.color_tint.t4,
        },
        '&:focus-visible': {
          borderColor: palette.neutral.grey,
          backgroundColor: palette.color_tint.t4, // focus
        },
        '&:active': {
          borderColor: 'transparent',
          backgroundColor: palette.color_tint.t4,
        },
        '&.Mui-disabled': {
          borderColor: 'transparent',
          backgroundColor: palette.neutral.grey_light,      // disabled
          color: palette.neutral.grey_dark,
        },
      }),

      textPrimary: {
        color: palette.primary,
        '&:hover': {
          backgroundColor: palette.color_tint.t4,
        },
        '&:focus-visible': {
          borderColor: palette.neutral.grey,
          backgroundColor: palette.color_tint.t4, // focus
        },
        '&:active': {
          borderColor: 'transparent',
          backgroundColor: palette.color_tint.t4,
        },
        '&.Mui-disabled': {
          borderColor: 'transparent',
          backgroundColor: palette.neutral.grey_light,      // disabled
          color: palette.neutral.grey_dark,
        },
      },

    },
    defaultProps: {
      disableElevation: true,
      // loading state can be handled manually in your component
    },
  },

  MuiTextField: {
  styleOverrides: {
    root: {
      '& .MuiInputLabel-root': {
        color: palette.neutral.white,
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: 'transparent',
      },
      '& .MuiOutlinedInput-root': {
        backgroundColor: palette.neutral.grey_light, // Move background here
        color: palette.neutral.black,
        '& fieldset': {
          borderColor: 'transparent',
          // Remove backgroundColor from fieldset
        },
        '&:hover fieldset': {
          borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'transparent',
        },
        '& input': { // Explicitly set input text color
          color: palette.neutral.black,
        },
      },
    },
  },
},
MuiIconButton: {
      styleOverrides: {
        root:{
          borderRadius: '50%',
          padding: 6,
        },

        colorPrimary: (theme) => ({
          
          backgroundColor: palette.neutral.grey,       // default
           color: '#fff',
        '&:hover': {
          backgroundColor: palette.color_shade.s2,     // hover
        },
        '&:active': {
          backgroundColor: palette.color_shade.s4,     // click / active
        },
        '&:focus-visible': {
          borderColor: palette.neutral.grey,
          backgroundColor: palette.color_shade.s3, // focus
        },
        '&.Mui-disabled': {
          backgroundColor: palette.neutral.grey_light,      // disabled
          color: palette.neutral.grey_dark,
        },
        }),

        colorSecondary: (theme) => ({
        color: palette.primary,
        '&:hover': {
          backgroundColor: palette.color_tint.t4,
        },
        '&:focus-visible': {
          borderColor: palette.neutral.grey,
          backgroundColor: palette.color_tint.t4, // focus
        },
        '&:active': {
          backgroundColor: palette.color_tint.t4,
        },
        '&.Mui-disabled': {
          backgroundColor: palette.neutral.grey_light,      // disabled
          color: palette.neutral.grey_dark,
        },
      }),
      },
    },
};

export default components;
