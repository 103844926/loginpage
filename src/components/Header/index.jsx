// src/components/Header.jsx
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { HeaderAppbar } from './HeaderAppbar';
import { HeaderDrawer } from './HeaderDrawer';

export function Header() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return isDesktop ? <HeaderAppbar /> : <HeaderDrawer />;
}