// src/pages/HomePage.jsx
import { Box, Button, Typography, Container, Grid } from '@mui/material'
import { Header, Footer, LandingPart1, LandingPart2, LandingPart3 } from '@/components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {

  return (
    <Box>
      <Header />
      
      <LandingPart1 />

      <LandingPart2 />

      <LandingPart3 />

      <Footer />
    </Box>
  )
}
