// src/components/Header.js
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from './Nexcent_Logo.svg';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activePage = location.pathname.replace('/', '') || 'home';

  const menuItems = [
    { label: 'Home', path: 'home' },
    { label: 'Service', path: 'service' },
    { label: 'Feature', path: 'feature' },
    { label: 'Product', path: 'product' },
    { label: 'Testimonial', path: 'testimonial' },
    { label: 'FAQ', path: 'faq' },
  ];

  const handleMenuClick = (path) => {
    navigate(`/${path}`);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.neutral.silver }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 2, md: 12 } }}>
          <img src={logo} alt="Company Logo" style={{ width: 120, height: 'auto' }} />
          
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant="text"
                color="secondary"
                onClick={() => navigate(`/${item.path}`)}
                sx={{ mr: 2, fontWeight: activePage === item.path ? 700 : 500 }}
              >
                {item.label}
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

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setMobileMenuOpen(true)}
            color="secondary"
          >
            <MenuIcon />
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
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton 
                onClick={() => handleMenuClick(item.path)}
                selected={activePage === item.path}
              >
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: activePage === item.path ? 700 : 500
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