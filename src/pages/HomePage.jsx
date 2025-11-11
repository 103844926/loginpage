// src/pages/HomePage.jsx
import { Box, Button, Typography, Container, Grid } from '@mui/material'
import * as Components from '../components';
import { Images } from '../const';
import { StyledSlider } from '../themes';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {

  return (
    <Box>
      <Components.Header />
      
      <Components.LandingPart1 />

      <Components.LandingPart2 />

      <Components.Footer />
    </Box>
  )
}
