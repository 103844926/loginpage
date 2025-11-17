// src/pages/HomePage.jsx
import { Footer, Header } from '@/components';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import * as Landing from './components';

export default function HomePage() {
  return (
    <Box>
      <Header />

      <Landing.LandingPart1 />

      <Landing.LandingPart2 />

      <Landing.LandingPart3 />

      <Landing.LandingPart4 />

      <Landing.LandingPart5 />

      <Landing.LandingPart6 />

      <Landing.LandingPart7 />

      <Landing.LandingPart8 />

      <Footer />
    </Box>
  );
}
