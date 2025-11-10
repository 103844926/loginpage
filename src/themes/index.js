import { createTheme } from '@mui/material/styles';
import palette from './palates';
import typography from './typography';

const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, padding: '8px 24px' },
        containedPrimary: {
          backgroundColor: palette.primary.main,
          color: '#fff',
          '&:hover': { backgroundColor: '#20a87c' },
        },
      },
    },
  },
});

export default theme;
