import { createTheme } from '@mui/material/styles';
import palette from './palates';
import typography from './typography';
import components from './components';

const theme = createTheme({
  palette,
  typography,
  components,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440, 
      xl: 1920,
    },
  },
});

export default theme;
