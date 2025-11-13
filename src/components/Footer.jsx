// src/components/Footer.js
import { useState } from 'react';
import { AppBar, Toolbar, Button, TextField, Box, Typography, InputAdornment, IconButton, Grid, Stack } from '@mui/material';
import { FooterImages } from '@/const';
import { Twitter, YouTube, Instagram, Facebook } from '@mui/icons-material';
import { CommonIcons } from './Icons';
import '@/themes/styles/global.scss';

const COMPANY_ITEMS = ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'];
const SUPPORT_ITEMS = ['Help Center', 'Term of Services', 'Legal', 'Privacy Policy', 'Status'];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    console.log('Email Sent!!');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'secondary.main', color: '#fff' }}>
      <Toolbar
        sx={{
          py: { xs: 4, md: 8 }, px: { xs: 4, md: 20 },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container
          spacing={{ xs: 4, sm: 32, md: 48 }}
          alignItems="flex-start"
          justifyContent="space-between">

          {/* Logo & Social */}
          <Grid item xs={12} md={3}>
            <Stack spacing={5}>
              <img src={FooterImages.footlogo} alt="Company Logo" />
              <Typography variant="body3_r" lineHeight={1.6}>
                Copyright © 2020 Nexcent ltd. <br /> All rights reserved
              </Typography>
              <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
                <IconButton className='social-icon'><Instagram fontSize="medium" /></IconButton>
                <IconButton className='social-icon'><Facebook fontSize="medium" /></IconButton>
                <IconButton className='social-icon'><Twitter fontSize="medium" /></IconButton>
                <IconButton className='social-icon'><YouTube fontSize="medium" /></IconButton>
              </Box>
            </Stack>
          </Grid>

          {/* Company Links */}
          <Grid item xs={10} sm={6} md={2}>
            <Grid container spacing={12}>
              <Grid item xs={6} sm={6}
              sx ={{ display: 'flex', flexDirection: 'column' , justifyContent: 'flex-start' }}>
                <Typography variant="h4" sx={{ paddingBottom: '20px' }}>Company</Typography>
                <Stack>
                  {COMPANY_ITEMS.map((label, idx) => (
                    <Button
                      key={idx}
                      variant="text"
                      className="footer-link"
                    >
                      <Typography variant="body3_r">{label}</Typography>
                    </Button>
                  ))}
                </Stack>
              </Grid>

              {/* Support Links */}
              <Grid item xs={6} sm={6}
              sx ={{ display: 'flex', flexDirection: 'column' , justifyContent: 'flex-start' }}>
                <Typography variant="h4" sx={{ paddingBottom: '20px' }}>Support</Typography>
                <Stack>
                  {SUPPORT_ITEMS.map((label, idx) => (
                    <Button
                      key={idx}
                      variant="text"
                      className="footer-link"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  className: 'email-type-field',
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSend}>
                        <CommonIcons.emailicon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  className: 'email-type-label'
                }}
              />
            </Stack>
          </Grid>
          
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
