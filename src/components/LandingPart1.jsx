import { Box, Button, Typography, Container, Grid } from '@mui/material'
import { Images } from '../const';
import { StyledSlider } from '../themes';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingPart1() {
    return (
    <Box sx={{ backgroundColor: 'neutral.silver', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <StyledSlider
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
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', flex: 1, gap: 4 }}>
                  <Typography variant="h2" color="neutral.grey_dark" gutterBottom>
                    Lessons and insights <br />
                    <Box component="span" color='primary.main' >
                      from 8 years
                    </Box>
                  </Typography>
                  <Typography variant="body2" color="neutral.grey_dark" gutterBottom>
                    Where to grow your business as a photographer: site or social media?
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    Register
                  </Button>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <img src={Images.illu1} alt="Illustration 1" style={{ width: '100%', height: 'auto' }} />
                </Box>
              </Box>
            </Box>

            {/* Slide 2 */}
            <Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', flex: 1, gap: 4 }}>
                  <Typography variant="h2" color="neutral.grey_dark" gutterBottom>
                    Lessons and insights <br />
                    <Box component="span" color='primary.main'>
                      from 8 years
                    </Box>
                  </Typography>
                  <Typography variant="body2" color="neutral.grey_dark" gutterBottom>
                    Where to grow your business as a photographer: site or social media?
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    Register
                  </Button>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <img src={Images.illu1} alt="Illustration 1" style={{ width: '100%', height: 'auto' }} />
                </Box>
              </Box>
            </Box>

            {/* Slide 3 */}
            <Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', flex: 1, gap: 4 }}>
                  <Typography variant="h2" color="neutral.grey_dark" gutterBottom>
                    Lessons and insights <br />
                    <Box component="span" color='primary.main'>
                      from 8 years
                    </Box>
                  </Typography>
                  <Typography variant="body2" color="neutral.grey_dark" gutterBottom>
                    Yes, all three slide are the same.
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    Register
                  </Button>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <img src={Images.illu1} alt="Illustration 1" style={{ width: '100%', height: 'auto' }} />
                </Box>
              </Box>
            </Box>
          </StyledSlider>
        </Container>
      </Box>
    )
}
