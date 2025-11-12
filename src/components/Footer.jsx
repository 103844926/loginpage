// src/components/Footer.js
import { useState } from 'react';
import { AppBar, Toolbar, Button, TextField, Box, Typography, InputAdornment, IconButton, Grid, Stack } from '@mui/material';
import { FooterImages } from '@/const';
import { Send, Twitter, YouTube, Instagram, Facebook } from '@mui/icons-material';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    console.log('Email Sent!!');
  };

  const COMPANY_ITEMS = ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'];
  const SUPPORT_ITEMS = ['Help Center', 'Term of Services', 'Legal', 'Privacy Policy', 'Status'];


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
              <img src={FooterImages.footlogo} alt="Company Logo" style={{ width: 180, height: 'auto' }} />
              <Typography variant="body3_r">
                Copyright © 2020 Nexcent ltd. <br /> All rights reserved
              </Typography>
              <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
                <IconButton color="primary"><Instagram fontSize="medium" /></IconButton>
                <IconButton color="primary"><Facebook fontSize="medium" /></IconButton>
                <IconButton color="primary"><Twitter fontSize="medium" /></IconButton>
                <IconButton color="primary"><YouTube fontSize="medium" /></IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Company Links */}
          <Grid item xs={10} sm={6} md={2}>
            <Stack spacing={1}>
              <Typography variant="h4">Company</Typography>
              {COMPANY_ITEMS.map((label, idx) => (
                <Button
                  key={idx}
                  variant="text"
                  sx={{ color: '#fff', justifyContent: 'flex-start', padding: 0, minWidth: 0 }}
                >
                  <Typography variant="body3_r">{label}</Typography>
                </Button>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={10} sm={6} md={2}>
            <Stack spacing={1}>
              <Typography variant="h4">Support</Typography>
              {SUPPORT_ITEMS.map((label, idx) => (
                <Button
                  key={idx}
                  variant="text"
                  sx={{ color: '#fff', justifyContent: 'flex-start', padding: 0, minWidth: 0 }}
                >
                  <Typography variant="body3_r">{label}</Typography>
                </Button>
              ))}
            </Stack>
          </Grid>

          {/* Stay Up to Date */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h4">Stay up to date</Typography>
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
                        <Send />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
