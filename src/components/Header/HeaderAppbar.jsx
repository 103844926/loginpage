// src/components/HeaderAppbar.jsx
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { HeaderImages } from '@/const';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const MENU_ITEMS = [
  { label: 'Home', path: '/home' },
  { label: 'Service', path: '/service' },
  { label: 'Feature', path: '/feature' },
  { label: 'Product', path: '/product' },
  { label: 'Testimonial', path: '/testimonial' },
  { label: 'FAQ', path: '/faq' },
];

export function HeaderAppbar() {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const activePage = location.pathname.replace('') || '/home';

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.neutral.silver }}>
      <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 2, md: 12 } }}>
        <img src={HeaderImages.headlogo} alt="Company Logo" style={{ width: 120, height: 'auto' }} />

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {MENU_ITEMS.map((item) => (
            <Button
              key={item.path}
              variant="text"
              color="secondary"
              onClick={() => navigate(`${item.path}`)}
              sx={{ fontWeight: activePage === item.path ? 500 : 400 }}
            >
              <Typography variant="body2_r">{item.label}</Typography>
            </Button>
          ))}
        </Box>

        {/* Desktop Auth Buttons */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="text" color="primary" onClick={() => navigate('/login')} sx={{ mr: 2 }}>
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate('/login')} color="primary">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
