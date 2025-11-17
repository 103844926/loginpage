// src/components/HeaderDrawer.jsx
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
import { HeaderImages } from '@/const';
import { Menu, Close } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

const MENU_ITEMS = [
  { label: 'Home', path: '/home' },
  { label: 'Service', path: '/service' },
  { label: 'Feature', path: '/feature' },
  { label: 'Product', path: '/product' },
  { label: 'Testimonial', path: '/testimonial' },
  { label: 'FAQ', path: '/faq' },
];

export function HeaderDrawer() {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activePage = location.pathname.replace('') || '/home';

  const handleMenuClick = (path) => {
    navigate(`${path}`);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'neutral.silver' }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 2, md: 12 } }}>
          <img src={HeaderImages.headlogo} alt="Company Logo" style={{ width: 120, height: 'auto' }} />

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setMobileMenuOpen(true)}
            color="secondary"
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 250 }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={() => setMobileMenuOpen(false)}>
            <Close />
          </IconButton>
        </Box>

        <List>
          {MENU_ITEMS.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                onClick={() => handleMenuClick(item.path)}
                selected={activePage === item.path}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: activePage === item.path ? 500 : 400
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <Box sx={{ px: 2, pb: 2 }}>
            <Button
              fullWidth
              variant="text"
              color="primary"
              onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}
              sx={{ mb: 1 }}
            >
              Login
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}
            >
              Sign Up
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
}
