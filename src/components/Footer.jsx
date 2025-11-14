// src/components/Footer.js
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, TextField, Box, Typography, InputAdornment, IconButton, Grid, Stack } from '@mui/material';
import { FooterImages } from '@/const';
import { Twitter, YouTube, Instagram, Facebook } from '@mui/icons-material';
import { CommonIcons } from './icons';
import { alignItems } from '@mui/system';

const COMPANY_ITEMS = ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'];
const SUPPORT_ITEMS = ['Help Center', 'Term of Services', 'Legal', 'Privacy Policy', 'Status'];

export function Footer() {

  const footerIcon = {
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  };

  const footerLink = {
    color: '#fff',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    px: 0,
    py: { xs: 0.5, md: 1 },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  };

  const [email, setEmail] = useState('');

  const handleSend = () => {
    console.log('Email Sent!!');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'secondary.main', color: '#fff' }}>
      <Toolbar
        sx={{
          py: { xs: 4, sm: 5, md: 6, lg: 8 },
          px: { xs: 4, sm: 6, md: 10, lg: 15, xl: 20 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 4, sm: 6, md: 8, lg: 10 },
          width: '100%'
        }}>
          {/* Left Side: Logo & Social */}
          <Box sx={{ flex: "3", minWidth: { md: '200px', lg: '250px' } }}>
            <Stack spacing={{ xs: 3, sm: 4, lg: 5 }}>
              <img
                src={FooterImages.footlogo}
                alt="Company Logo"
                style={{ width: '200px', height: 'auto' }}
              />
              <Typography variant="body3_r" lineHeight={1.6}>
                Copyright © 2020 Nexcent ltd. <br /> All rights reserved
              </Typography>
              <Box sx={{ display: 'flex', gap: { xs: 1, sm: 1.5, lg: 2 } }}>
                <IconButton sx={footerIcon} >
                  <Instagram fontSize="medium" />
                </IconButton>
                <IconButton sx={footerIcon} >
                  <Facebook fontSize="medium" />
                </IconButton>
                <IconButton sx={footerIcon} >
                  <Twitter fontSize="medium" />
                </IconButton>
                <IconButton sx={footerIcon} >
                  <YouTube fontSize="medium" />
                </IconButton>
              </Box>
            </Stack>
          </Box>

          {/* Right Side: Company, Support & Email */}
          <Box sx={{
            display: 'flex',
            gap: { xs: 2, sm: 4, md: 6 },
            flex: "2",
            justifyContent: { md: 'flex-end' }
          }}>
            {/* Company Links */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              minWidth: { sm: '140px', md: '160px' }
            }}>
              <Typography variant="h4" sx={{ paddingBottom: { xs: '16px', md: '20px' } }}>
                Company
              </Typography>
              <Stack spacing={{ xs: 0.5, md: 0 }}>
                {COMPANY_ITEMS.map((label, idx) => (
                  <Button
                    key={idx}
                    variant="text"
                    sx={footerLink}
                  >
                    <Typography variant="body3_r">{label}</Typography>
                  </Button>
                ))}
              </Stack>
            </Box>

            {/* Support Links */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              minWidth: { sm: '140px', md: '160px' }
            }}>
              <Typography variant="h4" sx={{ paddingBottom: { xs: '16px', md: '20px' } }}>
                Support
              </Typography>
              <Stack spacing={{ xs: 0.5, md: 0 }}>
                {SUPPORT_ITEMS.map((label, idx) => (
                  <Button
                    key={idx}
                    variant="text"
                    sx={footerLink}
                  >
                    <Typography variant="body3_r">{label}</Typography>
                  </Button>
                ))}
              </Stack>
            </Box>
          </Box>
          {/* Stay Up to Date */}
          <Box sx={{
            display: 'flex',
            gap: { xs: 2, sm: 4, md: 6 },
            flex: "1",
            justifyContent: { md: 'flex-end' },
            minWidth: { sm: '200px', md: '220px' }
          }}>
            <Stack direction="column" spacing={{ xs: 1.5, md: 2 }}>
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
                        <CommonIcons.EmailIcon sx={{ color: 'neutral.white' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  sx: {
                    color: '#D9DBE1',
                  }
                }}
                sx={{
                  '& .MuiInputBase-root': {
                    color: '#f5f7fa',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                  }
                }}
              />
            </Stack>
          </Box>
        </Box>
    </Toolbar>
    </AppBar >
  );
}