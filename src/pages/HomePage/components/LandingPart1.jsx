import { Box, Button, Typography, Container, Stack, Grid } from '@mui/material'
import { HomeImages } from '@/const';
import Slider from "react-slick";

export function LandingPart1() {

  return (
    <Box sx={{ backgroundColor: 'neutral.silver', py: {xs: 4, md: 8}}}>
      <Container>
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
            <Box className ="flex-box-normal">
              <Stack flex={3} spacing={4} alignItems="flex-start">
                <Typography variant="h1" color="neutral.grey_dark">
                  Lessons and insights <br />
                  <Box component="span" color="primary.main">
                    from 8 years
                  </Box>
                </Typography>
                <Typography variant="body2_r" color="neutral.grey">
                  Where to grow your business as a photographer: site or social media?
                </Typography>
                <Button variant="contained" color="primary" size="Medium" sx={{ mr: 2 }}>
                  Register
                </Button>
              </Stack>

              <Box flex={2} >
                <img src={HomeImages.landillu1} alt="Illustration 1" className="img-box"/>
              </Box>
            </Box>
          </Box>

          {/* Slide 2 */}
          <Box>
            <Box className ="flex-box-normal">
              <Stack flex={3} spacing={4} alignItems="flex-start">
                <Typography variant="h1" color="neutral.grey_dark">
                  Lessons and insights <br />
                  <Box component="span" color="primary.main">
                    from 8 years
                  </Box>
                </Typography>
                <Typography variant="body2_r" color="neutral.grey">
                  Where to grow your business as a photographer: site or social media?
                </Typography>
                <Button variant="contained" color="primary"size="Medium" sx={{ mr: 2 }}>
                  Register
                </Button>
              </Stack>

              <Box flex={2} >
                <img src={HomeImages.landillu1} alt="Illustration 1" className="img-box"/>
              </Box>
            </Box>
          </Box>

          {/* Slide 3 */}
          <Box>
            <Box className ="flex-box-normal">
              <Stack flex={3} spacing={4} alignItems="flex-start">
                <Typography variant="h1" color="neutral.grey_dark">
                  Lessons and insights <br />
                  <Box component="span" color="primary.main">
                    from 8 years
                  </Box>
                </Typography>
                <Typography variant="body2_r" color="neutral.grey">
                  Where to grow your business as a photographer: site or social media?
                </Typography>
                <Button variant="contained" color="primary"size="Medium"  sx={{ mr: 2 }}>
                  Register
                </Button>
              </Stack>

              <Box flex={2} >
                <img src={HomeImages.landillu1} alt="Illustration 1" className="img-box"/>
              </Box>
            </Box>
          </Box>

        </Slider>
    </Container>
    </Box>
  )
}
