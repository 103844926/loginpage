// src/components/Header.jsx
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HeaderAppbar } from './HeaderAppbar';
import { HeaderDrawer } from './HeaderDrawer';

export function Header() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return isDesktop ? <HeaderAppbar /> : <HeaderDrawer />;
}
