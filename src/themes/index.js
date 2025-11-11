import { createTheme } from '@mui/material/styles';
import palette from './palates';
import typography from './typography';
import components from './components';
import StyledSlider from './slider';

const theme = createTheme({
  palette,
  typography,
  components,
});

export default theme;
export { StyledSlider };
