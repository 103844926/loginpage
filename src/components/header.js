// src/components/Header.js
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import logo from './Nexcent_Logo.svg';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const activePage = location.pathname.replace('/', '') || 'home';

  const menuItems = [
    { label: 'Home', path: 'home' },
    { label: 'Service', path: 'service' },
    { label: 'Feature', path: 'feature' },
    { label: 'Product', path: 'product' },
    { label: 'Testimonial', path: 'testimonial' },
    { label: 'FAQ', path: 'faq' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.neutral.silver }}>
      <Toolbar disableGutters  sx={{ display: 'flex', justifyContent: 'space-between', px: 12  }}>
        <img src={logo} alt="Company Logo" style={{ width: 120, height: 'auto' }} />
        <Box>
          {menuItems.map((item) => (
            <Button
              variant="text"
              color="secondary"
              sx={{ mr: 2, fontWeight: activePage === item.path ? 700 : 500 }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box>
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
