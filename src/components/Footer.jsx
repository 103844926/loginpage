// src/components/Footer.js
import { FooterImages } from '@/const';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { Box, Button, Container, IconButton, InputAdornment, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { CommonIcons } from './icons';

const COMPANY_ITEMS = ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'];
const SUPPORT_ITEMS = ['Help Center', 'Term of Services', 'Legal', 'Privacy Policy', 'Status'];

const FooterIcon = styled(IconButton)({
  color: '#fff',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

const FooterBox = styled(Box)(({ theme }) => ({
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minWidth: '140px',
  [theme.breakpoints.up('md')]: {
    minWidth: '160px',
  },
}));

const FooterButton = styled(Button)({
  color: '#fff',
  display: 'inline-flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '0 0',
  backgroundColor: 'transparent',
  width: 'fit-content',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#D9DBE1',
  },

  '&:active': {
    backgroundColor: 'transparent',
    color: '#83868dff',
  },

  '&:focus-visible': {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  
  '& .MuiTouchRipple-root': { display: 'none' }
});

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    console.log('Email Sent!!');
  };

  return (
    <Box sx={{ backgroundColor: 'secondary.main', color: '#fff' }}>
      <Container>
        <Toolbar
          sx={{
            py: '64px',
            px: '21px',
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
            <Box
              sx={{
                flex: '3',
                minWidth: { md: '200px', lg: '250px' },
              }}
            >
              <Stack spacing={{ xs: 3, sm: 4, lg: 5 }}>
                <img src={FooterImages.footlogo} alt="Company Logo" style={{ width: '200px', height: 'auto' }} />

                <Typography variant="body3_r" lineHeight={1.6}>
                  Copyright © 2020 Nexcent ltd. <br /> All rights reserved
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    gap: {
                      xs: '4px',
                      sm: '6px',
                      lg: '8px',
                    },
                  }}
                >
                  <FooterIcon>
                    {' '}
                    <Instagram fontSize="medium" />{' '}
                  </FooterIcon>
                  <FooterIcon>
                    {' '}
                    <Facebook fontSize="medium" />{' '}
                  </FooterIcon>
                  <FooterIcon>
                    {' '}
                    <Twitter fontSize="medium" />{' '}
                  </FooterIcon>
                  <FooterIcon>
                    {' '}
                    <YouTube fontSize="medium" />{' '}
                  </FooterIcon>
                </Box>
              </Stack>
            </Box>

            {/* Right Side: Company, Support & Email */}
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, sm: 4, md: 6 },
                flex: '2',
                justifyContent: { md: 'flex-end' },
              }}
            >
              {/* Company Links */}
              <FooterBox>
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: {
                      xs: '16px',
                      md: '24px',
                    },
                  }}
                >
                  Company
                </Typography>
                <Stack spacing={{ xs: 1, md: 1.5 }}>
                  {COMPANY_ITEMS.map((label, idx) => (
                    <FooterButton key={idx} variant="text">
                      <Typography variant="body3_r">{label}</Typography>
                    </FooterButton>
                  ))}
                </Stack>
              </FooterBox>

              {/* Support Links */}
              <FooterBox>
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: {
                      xs: '16px',
                      md: '24px',
                    },
                  }}
                >
                  Support
                </Typography>
                <Stack spacing={{ xs: 1, md: 1.5 }}>
                  {SUPPORT_ITEMS.map((label, idx) => (
                    <FooterButton key={idx} variant="text">
                      <Typography variant="body3_r">{label}</Typography>
                    </FooterButton>
                  ))}
                </Stack>
              </FooterBox>
            </Box>
            {/* Stay Up to Date */}
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, sm: 4, md: 6 },
                flex: '2',
                justifyContent: { md: 'flex-end' },
              }}
            >
              <FooterBox>
                <Stack direction="column">
                  <Typography
                    variant="h4"
                    sx={{
                      paddingBottom: {
                        xs: '16px',
                        md: '24px',
                      },
                    }}
                  >
                    Stay up to date
                  </Typography>
                  <TextField
                    size="small"
                    fullWidth
                    label={
                      <Typography variant="body3_r" color="#D9DBE1">
                        {' '}
                        Your email address{' '}
                      </Typography>
                    }
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      className: 'email-type-field',
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleSend}>
                            <CommonIcons.EmailIcon
                              sx={{
                                color: 'neutral.white',
                              }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiInputBase-root': {
                        color: '#f5f7fa',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                      },
                    }}
                  />
                </Stack>
              </FooterBox>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </Box>
  );
}
