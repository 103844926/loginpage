// src/components/Footer.js
import { useState } from 'react';
import { AppBar, Toolbar, Button, TextField, Box, Typography, InputAdornment, IconButton, Grid } from '@mui/material';
import logo from './Nexcent_Logo_White.svg';
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    console.log('Email Sent!!');
  };

  const CompanyItems = ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'];
  const SupportItems = ['Help Center', 'Term of Services', 'Legal', 'Privacy Policy', 'Status'];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'secondary.main', color: '#fff' }}>
      <Toolbar
        disableGutters
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, sm: 6 },
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Grid container columnSpacing={{ xs: 2, sm: 4, md: 5, lg: 12 }} rowSpacing={{ xs: 3, sm: 4, md: 5 }}>
          
          {/* Logo & Social */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, sm: 2, md: 3 } }}>
              <img src={logo} alt="Company Logo" style={{ width: 180, height: 'auto' }} />
              <Typography
                variant="body2"
                sx={{ lineHeight: 1.8, fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' } }}
              >
                Copyright © 2020 Nexcent ltd. <br /> All rights reserved
              </Typography>
              <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
                <IconButton color="primary"><InstagramIcon fontSize="medium" /></IconButton>
                <IconButton color="primary"><FacebookIcon fontSize="medium" /></IconButton>
                <IconButton color="primary"><TwitterIcon fontSize="medium" /></IconButton>
                <IconButton color="primary"><YouTubeIcon fontSize="medium" /></IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Company Links */}
          <Grid item xs={10} sm={6} md={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>Company</Typography>
              {CompanyItems.map((label, idx) => (
                <Button
                  key={idx}
                  variant="text"
                  sx={{ color: '#fff', justifyContent: 'flex-start', padding: 0, minWidth: 0 }}
                >
                  <Typography variant="body2">{label}</Typography>
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Support Links */}
          <Grid item xs={10} sm={6} md={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>Support</Typography>
              {SupportItems.map((label, idx) => (
                <Button
                  key={idx}
                  variant="text"
                  sx={{ color: '#fff', justifyContent: 'flex-start', padding: 0, minWidth: 0 }}
                >
                  <Typography variant="body2">{label}</Typography>
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Stay Up to Date */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>Stay up to date</Typography>
              <TextField
                fullWidth
                label="Your email address"
                color="primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton color="secondary" onClick={handleSend}>
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  );
}
