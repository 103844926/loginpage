import { Box, Button, Typography, Container, Stack, Grid } from '@mui/material'
import { HomeImages } from '@/const';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/themes/styles/slider.scss";


export function LandingPart1() {

  return (
    <Box sx={{ backgroundColor: 'neutral.silver' }}>
      <Container maxWidth="lg" sx={{py: { xs: 6, md: 8 }, px: { xs: 4, md: 0 }}}>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          autoplay={true}
          autoplaySpeed={3000}
        >
          {/* Slide 1 */}
          <Box>
            <Box className ="flex-box-slider">
              <Stack flex={3} spacing={4} alignItems="flex-start">
                <Typography variant="h1" color="neutral.grey_dark">
                  Lessons and insights <br />
                  <Box component="span" color="primary.main">
                    from 8 years
                  </Box>
                </Typography>
                <Typography variant="body2_r" color="neutral.grey_dark">
                  Where to grow your business as a photographer: site or social media?
                </Typography>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Register
                </Button>
              </Stack>

              <Box sx={{ flex: 2 }}>
                <img src={HomeImages.landillu1} alt="Illustration 1" style={{ width: '80%', height: 'auto' }} />
              </Box>
            </Box>
          </Box>

          {/* Slide 2 */}
          <Box>
            <Box className ="flex-box-slider">
              <Stack flex={3} spacing={4} alignItems="flex-start">
                <Typography variant="h1" color="neutral.grey_dark">
                  Lessons and insights <br />
                  <Box component="span" color="primary.main">
                    from 8 years
                  </Box>
                </Typography>
                <Typography variant="body2_r" color="neutral.grey_dark">
                  Where to grow your business as a photographer: site or social media?
                </Typography>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Register
                </Button>
              </Stack>

              <Box sx={{ flex: 2 }}>
                <img src={HomeImages.landillu1} alt="Illustration 1" style={{ width: '80%', height: 'auto' }} />
              </Box>
            </Box>
          </Box>

          {/* Slide 3 */}
          <Box>
            <Box className ="flex-box-slider">
              <Stack flex={3} spacing={4} alignItems="flex-start">
                <Typography variant="h1" color="neutral.grey_dark">
                  Lessons and insights <br />
                  <Box component="span" color="primary.main">
                    from 8 years
                  </Box>
                </Typography>
                <Typography variant="body2_r" color="neutral.grey_dark">
                  Where to grow your business as a photographer: site or social media?
                </Typography>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Register
                </Button>
              </Stack>

              <Box sx={{ flex: 2 }}>
                <img src={HomeImages.landillu1} alt="Illustration 1" style={{ width: '80%', height: 'auto' }} />
              </Box>
            </Box>
          </Box>

        </Slider>
      </Container>
    </Box>
  )
}
