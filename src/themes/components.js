import { color } from "@mui/system";
import palette from "./palates";

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

      containedPrimary: {
        backgroundColor: 'palette.primary.main',       // default
        color: '#fff',
        '&:hover': {
          backgroundColor: 'palette.color_shade.s2',     // hover
        },
        '&:active': {
          backgroundColor: 'palette.color_shade.s4',     // click / active
        },
        '&:focus-visible': {
          borderColor: 'palette.neutral.grey',
          backgroundColor: 'palette.color_shade.s3', // focus
        },
        '&.Mui-disabled': {
          backgroundColor: 'palette.neutral.l_grey',      // disabled
          color: 'palette.neutral.d_grey',
        },
      },

      outlinedPrimary: {
        borderColor: 'palette.primary.primary',
        color: 'palette.primary.primary',
        '&:hover': {
          backgroundColor: 'palette.color_tint.t4',
        },
        '&:focus-visible': {
          borderColor: 'palette.neutral.grey',
          backgroundColor: 'palette.color_tint.t4', // focus
        },
        '&:active': {
          borderColor: 'transparent',
          backgroundColor: 'palette.color_tint.t4',
        },
        '&.Mui-disabled': {
          borderColor: 'transparent',
          backgroundColor: 'palette.neutral.l_grey',      // disabled
          color: 'palette.neutral.d_grey',
        },
      },
    },
    defaultProps: {
      disableElevation: true,
      // loading state can be handled manually in your component
    },
  },
};

export default components;
