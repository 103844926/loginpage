// src/components/Footer.js
import { useState } from 'react'
import { AppBar, Toolbar, Button, TextField, Box, Typography, InputAdornment, IconButton  } from '@mui/material';
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
    
    const CompanyItems = [
    { label: 'About us' },
    { label: 'Blog' },
    { label: 'Contact us' },
    { label: 'Pricing' },
    { label: 'Testimonials' },
  ];

  const SupportItems = [
    { label: 'Help Center' },
    { label: 'Term of Services' },
    { label: 'Legal' },
    { label: 'Privacy Policy' },
    { label: 'Status'},
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'secondary.main', color: '#fff'}}>
      <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', py: 6 , px: 10 }}>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 3 }}>
          <img src={logo} alt="Company Logo" style={{ width: 180, height: 'auto' }} />
          <Typography variant="body5" sx={{ lineHeight: 2 }}>
            Copyright © 2020 Nexcent ltd. <br /> All rights reserved
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>

            <IconButton color="primary" edge="end">
              <InstagramIcon />
            </IconButton>
            
            <IconButton color="primary" edge="end">
              <FacebookIcon />
            </IconButton>

            <IconButton color="primary" edge="end">
              <TwitterIcon />
            </IconButton>

            <IconButton color="primary" edge="end">
              <YouTubeIcon />
            </IconButton>

          </Box>
      </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 700 }}>
                Company
            </Typography>

            {CompanyItems.map((item, index) => (
            <Button
                key={index}
                variant="text"
                sx={{ 
                    color: '#fff',
                    justifyContent: 'flex-start',  // Align button content to left
                    textAlign: 'left',
                    mb: 2,
                    padding: 0,
                    minWidth: 0
                }}
            >
              <Typography variant="body5">
            {item.label}
            </Typography>
            </Button>
        ))}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 700 }}>
                Support
            </Typography>

            {SupportItems.map((item, index) => (
            <Button
                key={index}
                variant="text"
                sx={{ 
                    color: '#fff',
                    justifyContent: 'flex-start',  // Align button content to left
                    textAlign: 'left',
                    mb: 2,
                    padding: 0,
                    minWidth: 0                    
                }}
            >
            <Typography variant="body5">
            {item.label}
            </Typography>
            </Button>
        ))}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

            <Typography variant="body2" sx={{ mb: 2, fontWeight: 700 }}>
                Stay up to date
            </Typography>

            <TextField
              fullWidth
              label="Your email address"
              color='primary'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                  <IconButton color="secondary"  onClick={handleSend} edge="end">
                  <SendIcon />
                  </IconButton>
                  </InputAdornment>
              ),
            }}
            />
        </ Box>
      </Toolbar>
    </AppBar>
  );
}
