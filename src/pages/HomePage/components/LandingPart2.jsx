import { Landing2 } from '@/components/icons';
import { HomeImages } from '@/const';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

const clients = [
  HomeImages.landlogo1,
  HomeImages.landlogo2,
  HomeImages.landlogo3,
  HomeImages.landlogo4,
  HomeImages.landlogo5,
  HomeImages.landlogo6,
  HomeImages.landlogo2, // Client7
];

export function LandingPart2() {
  const landingBox = {
    maxWidth: '299px',
    padding: '24px 32px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
  };

  const landingIcon = {
    width: 65,
    height: 56,
    paddingBottom: '8px',
    '& path:first-of-type': { color: 'color_tint.t5' },
    '& path:last-of-type': { color: 'color_shade.s5' },
  };

  return (
    <Box sx={{ backgroundColor: 'neutral.white' }}>
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Box className="column-center" sx={{ gap: '48px' }}>
          <Stack spacing={'8px'} flexDirection="column">
            <Typography variant="h2" color="neutral.grey_dark">
              Our Clients
            </Typography>
            <Typography variant="body2_r" color="neutral.grey">
              We have been working with some Fortune 500+ clients
            </Typography>
          </Stack>

          <Stack width="100%" flexDirection="row" justifyContent="space-evenly">
            {clients.map((client, idx) => (
              <Box key={idx} textAlign="center">
                <img src={client} alt={`Client${idx + 1}`} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>

      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Stack spacing={'20px'}>
          <Stack spacing={'8px'} className="column-center" flexDirection="column">
            <Typography variant="h2" color="neutral.grey_dark">
              Manage your entire community <br /> in a single system
            </Typography>
            <Typography variant="body2_r" color="neutral.grey">
              Who is Nexcent suitable for?
            </Typography>
          </Stack>

          <Grid container width="100%" className="row-center" justifyContent="space-evenly">
            <Grid item xs={12} sm={6} md={4}>
              <Stack spacing={'8px'} className="small-column-center" sx={landingBox}>
                <Landing2.LandingMember sx={landingIcon} />
                <Typography variant="h3" color="neutral.grey_dark">
                  Membership Organizations
                </Typography>
                <Typography variant="body3_r" color="neutral.grey">
                  Our membership management software provides full automation of membership renewals and payments
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Stack spacing={'8px'} className="small-column-center" sx={landingBox}>
                <Landing2.LandingAssociation sx={landingIcon} />
                <Typography variant="h3" color="neutral.grey_dark">
                  National Associations
                </Typography>
                <Typography variant="body3_r" color="neutral.grey">
                  Our membership management software provides full automation of membership renewals and payments
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Stack spacing={'8px'} className="small-column-center" sx={landingBox}>
                <Landing2.LandingClubGroup sx={landingIcon} />
                <Typography variant="h3" color="neutral.grey_dark">
                  Clubs And Groups
                </Typography>
                <Typography variant="body3_r" color="neutral.grey">
                  Our membership management software provides full automation of membership renewals and payments
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
