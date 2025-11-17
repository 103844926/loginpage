import { HomeImages } from '@/const';
import { ArrowRightAlt } from '@mui/icons-material';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

export function LandingPart7() {
  return (
    <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 } }}>
      <Container className="column-center">
        <Stack spacing="8px" flexDirection="column" paddingBottom="16px">
          <Typography variant="h2" color="neutral.grey_dark">
            Caring is the new marketing
          </Typography>
          <Typography variant="body2_r" color="neutral.grey" sx={{ maxWidth: '628px' }}>
            The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their membership income and lot's more.
          </Typography>
        </Stack>

        <Grid container width="100%" className="row-center" justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={4}>
            <Stack className="small-column-center" sx={{ flex: 1, maxWidth: '368px' }}>
              <img src={HomeImages.landillu4} alt="Illu4" />
              <Box backgroundColor="neutral.silver" className="overlay-content">
                <Typography variant="h4" color="neutral.grey">
                  Creating Streamlined Safeguarding Processes with OneRen
                </Typography>
                <Button variant="text" color="primary">
                  Readmore
                  <ArrowRightAlt
                    sx={{
                      ml: 1,
                      color: 'inherit',
                      fontSize: 20,
                    }}
                  />
                </Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Stack className="small-column-center" sx={{ flex: 1, maxWidth: '368px' }}>
              <img src={HomeImages.landillu5} alt="Illu5" />
              <Box backgroundColor="neutral.silver" className="overlay-content">
                <Typography variant="h4" color="neutral.grey">
                  What are your safeguarding responsibilities and how can you manage them?
                </Typography>
                <Button variant="text" color="primary">
                  Readmore
                  <ArrowRightAlt
                    sx={{
                      ml: 1,
                      color: 'inherit',
                      fontSize: 20,
                    }}
                  />
                </Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Stack className="small-column-center" sx={{ flex: 1, maxWidth: '368px' }}>
              <img src={HomeImages.landillu6} alt="Illu6" />
              <Box backgroundColor="neutral.silver" className="overlay-content">
                <Typography variant="h4" color="neutral.grey">
                  Revamping the Membership Model with Triathlon Australia
                </Typography>
                <Button variant="text" color="primary">
                  Readmore
                  <ArrowRightAlt
                    sx={{
                      ml: 1,
                      color: 'inherit',
                      fontSize: 20,
                    }}
                  />
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
