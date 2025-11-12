// src/components/Header.jsx
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export default function Header() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return isDesktop ? <HeaderDesktop /> : <HeaderMobile />;
}