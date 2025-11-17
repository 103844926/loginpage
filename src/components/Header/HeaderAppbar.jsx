// src/components/HeaderAppbar.jsx
import { HeaderImages } from '@/const';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const MENU_ITEMS = [
  { label: 'Home', path: '/home' },
  { label: 'Service', path: '/service' },
  { label: 'Feature', path: '/feature' },
  { label: 'Product', path: '/product' },
  { label: 'Testimonial', path: '/testimonial' },
  { label: 'FAQ', path: '/faq' },
];

export function HeaderAppbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const activePage = location.pathname || '/home';

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'neutral.silver',
        px: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: { xs: 64, sm: 70, md: 80 },
          gap: { sm: 2, md: 3, lg: 4 },
        }}
      >
        {/* Logo - scales with screen size */}
        <Box sx={{ flexShrink: 0 }}>
          <img src={HeaderImages.headlogo} alt="Company Logo" />
        </Box>

        {/* Desktop Menu - flexible spacing */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: { md: 0.5, lg: 1, xl: 1.5 },
            flex: 1,
            justifyContent: 'center',
            maxWidth: '600px',
          }}
        >
          {MENU_ITEMS.map((item) => (
            <Button
              key={item.path}
              variant="text"
              color="secondary"
              onClick={() => navigate(item.path)}
              sx={{
                fontWeight: activePage === item.path ? 600 : 400,
                px: { md: 1, lg: 1.5, xl: 2 },
                minWidth: 'auto',
                whiteSpace: 'nowrap',
              }}
            >
              <Typography variant="body2_r">{item.label}</Typography>
            </Button>
          ))}
        </Box>

        {/* Desktop Auth Buttons - responsive sizing */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: '14px',
            flexShrink: 0,
          }}
        >
          <Button variant="text" color="primary" onClick={() => navigate('/login')} sx={{ padding: '10px 20px', borderRadius: '6px' }}>
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate('/login')} color="primary" sx={{ padding: '10px 20px', borderRadius: '6px' }}>
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
