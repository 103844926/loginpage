import { Box, Button, Typography, Container, Grid } from '@mui/material'
import { Images } from '../const';

export default function LandingPart2() {
  return (
    <>
      <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3" color="neutral.grey_dark" gutterBottom>
              Our Clients
            </Typography>
            <Typography variant="body2" color="neutral.grey_dark" gutterBottom>
              We have been working with some Fortune 500+ clients
            </Typography>
          </Grid>

          <Grid
            container
            spacing={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 10,
              mt: 4,
            }}
          >
            <img src={Images.client1} alt="Client1" />
            <img src={Images.client2} alt="Client2" />
            <img src={Images.client3} alt="Client3" />
            <img src={Images.client4} alt="Client4" />
            <img src={Images.client5} alt="Client5" />
            <img src={Images.client6} alt="Client6" />
            <img src={Images.client2} alt="Client7" />
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              mb: 4,
            }}
          >
            <Typography variant="h2" color="neutral.grey_dark" gutterBottom>
              Manage your entire community <br /> in a single system
            </Typography>
            <Typography variant="body2" color="neutral.grey_dark" gutterBottom>
              Who is Nexcent suitable for?
            </Typography>
          </Grid>

          <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={12} sm={6} md={3.5}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  maxWidth: 300,
                  mx: 'auto',
                }}
              >
                <img src={Images.Icon1} alt="Icon1" style={{ width: '60px', height: '60px' }} />
                <Typography variant="body1" color="neutral.grey_dark" gutterBottom sx={{ mt: 2 }}>
                  Membership Organizations
                </Typography>
                <Typography variant="body3" gutterBottom>
                  Our membership management software provides full automation of membership renewals and payments
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3.5}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  maxWidth: 300,
                  mx: 'auto',
                }}
              >
                <img src={Images.Icon2} alt="Icon2" style={{ width: '60px', height: '60px' }} />
                <Typography variant="body1" color="neutral.grey_dark" gutterBottom sx={{ mt: 2 }}>
                  National Associations
                </Typography>
                <Typography variant="body3" gutterBottom>
                  Our membership management software provides full automation of membership renewals and payments
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3.5}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  maxWidth: 300,
                  mx: 'auto',
                }}
              >
                <img src={Images.Icon3} alt="Icon3" style={{ width: '60px', height: '60px' }} />
                <Typography variant="body1" color="neutral.grey_dark" gutterBottom sx={{ mt: 2 }}>
                  Clubs And Groups
                </Typography>
                <Typography variant="body3" gutterBottom>
                  Our membership management software provides full automation of membership renewals and payments
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
