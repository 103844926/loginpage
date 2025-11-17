// src/components/Footer.js
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Toolbar, Button, TextField, Box, Typography, InputAdornment, IconButton, Grid, Stack } from '@mui/material';
import { FooterImages } from '@/const';
import { Twitter, YouTube, Instagram, Facebook } from '@mui/icons-material';
import { CommonIcons } from './icons';

const COMPANY_ITEMS = ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'];
const SUPPORT_ITEMS = ['Help Center', 'Term of Services', 'Legal', 'Privacy Policy', 'Status'];

export function Footer() {

  const FooterIcon = styled(IconButton)(({ theme }) => ({
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  }));

  const footerStyle = {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minWidth: { sm: '140px', md: '160px' },
  };

  const FooterLink = styled(Button)(({ theme }) => ({
    color: '#fff',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),

    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },

    // responsive padding like your original
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  }));

  const [email, setEmail] = useState('');

  const handleSend = () => {
    console.log('Email Sent!!');
  };

  return (
    <Box sx={{ backgroundColor: 'secondary.main', color: '#fff' }}>
      <Container>
        <Toolbar
          sx={{
            py: "64px",
            px: "21px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, sm: 6, md: 8, lg: 10 }}
            justifyContent="space-between"
            width="100%"
          >
            {/* Left Side: Logo & Social */}
            <Box sx={{ flex: "3", minWidth: { md: '200px', lg: '250px' } }}>
              <Stack spacing={{ xs: 3, sm: 4, lg: 5 }}>

                <img src={FooterImages.footlogo} alt="Company Logo"
                  style={{ width: '200px', height: 'auto' }}
                />

                <Typography variant="body3_r" lineHeight={1.6}>
                  Copyright © 2020 Nexcent ltd. <br /> All rights reserved
                </Typography>

                <Box sx={{ display: 'flex', gap: { xs: 1, sm: 1.5, lg: 2 } }}>
                  <FooterIcon > <Instagram fontSize="medium" /> </FooterIcon>
                  <FooterIcon > <Facebook fontSize="medium" /> </FooterIcon>
                  <FooterIcon > <Twitter fontSize="medium" /> </FooterIcon>
                  <FooterIcon > <YouTube fontSize="medium" /> </FooterIcon>
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
              <Box sx={footerStyle}>
                <Typography variant="h4" sx={{ paddingBottom: { xs: '16px', md: '20px' } }}>
                  Company
                </Typography>
                <Stack spacing={{ xs: 0.5, md: 0 }}>
                  {COMPANY_ITEMS.map((label, idx) => (
                    <FooterLink
                      key={idx}
                      variant="text"
                    >
                      <Typography variant="body3_r">{label}</Typography>
                    </FooterLink>
                  ))}
                </Stack>
              </Box>

              {/* Support Links */}
              <Box sx={footerStyle}>
                <Typography variant="h4" sx={{ paddingBottom: { xs: '16px', md: '20px' } }}>
                  Support
                </Typography>
                <Stack spacing={{ xs: 0.5, md: 0 }}>
                  {SUPPORT_ITEMS.map((label, idx) => (
                    <FooterLink
                      key={idx}
                      variant="text"
                    >
                      <Typography variant="body3_r">{label}</Typography>
                    </FooterLink>
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
                  label={<Typography variant="body3_r" color="#D9DBE1" > Your email address </Typography>}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    className: 'email-type-field',
                    endAdornment: (
                      <InputAdornment position="end">
                        <FooterIcon onClick={handleSend}>
                          <CommonIcons.EmailIcon sx={{ color: 'neutral.white' }} />
                        </FooterIcon>
                      </InputAdornment>
                    ),
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
          </Stack>
        </Toolbar>
      </Container >
    </Box>
  );
}