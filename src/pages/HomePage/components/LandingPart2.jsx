import { Box, Button, Typography, Container, Grid, Stack } from '@mui/material'
import { HomeImages } from '@/const';
import { Landing2 } from '@/components/icons';
import { gap } from '@mui/system';


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
    const shadowBox = {
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)'
    };

    const landingIcon = {
        width: 65,
        height: 56,
        '& path:first-of-type': { color: 'color_tint.t5' },
        '& path:last-of-type': { color: 'color_shade.s5' },
    };
    return (
        <>
            <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 }, px: { xs: 4, md: 20 } }}>
                <Container maxWidth="lg" className="column-center">
                    <Grid
                        container
                        spacing={1}
                        className="column-center"
                    >
                        <Typography variant="h2" color="neutral.grey_dark">
                            Our Clients
                        </Typography>
                        <Typography variant="body2_r" color="neutral.grey">
                            We have been working with some Fortune 500+ clients
                        </Typography>
                    </Grid>

                    <Stack className= "stack-row-container" gap={10} >
                        {clients.map((client, idx) => (
                            <Grid item xs={6} sm={4} md={2} key={idx} textAlign="center">
                                <img src={client} alt={`Client${idx + 1}`} />
                            </Grid>
                        ))}
                    </Stack>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 }, px: { xs: 4, md: 20 } }}>
                <Container maxWidth="lg" className="column-center">
                    <Grid container spacing={1} className="column-center" >
                        <Typography variant="h2" color="neutral.grey_dark" >
                            Manage your entire community <br /> in a single system
                        </Typography>
                        <Typography variant="body2_r" color="neutral.grey" >
                            Who is Nexcent suitable for?
                        </Typography>
                    </Grid>

                    <Grid container className="row-center" sx={{ gap: '100px' }} >
                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="small-column-center" sx={shadowBox}>
                                <Landing2.LandingMember sx={landingIcon} />
                                <Typography variant="h3" color="neutral.grey_dark" >
                                    Membership Organizations
                                </Typography>
                                <Typography variant="body3_r" >
                                    Our membership management software provides full automation of membership renewals and payments
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="small-column-center" sx={shadowBox}>
                                <Landing2.LandingAssociation sx={landingIcon} />
                                <Typography variant="h3" color="neutral.grey_dark" >
                                    National Associations
                                </Typography>
                                <Typography variant="body3_r" >
                                    Our membership management software provides full automation of membership renewals and payments
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="small-column-center" sx={shadowBox}>
                                <Landing2.LandingClubGroup sx={landingIcon} />
                                <Typography variant="h3" color="neutral.grey_dark" >
                                    Clubs And Groups
                                </Typography>
                                <Typography variant="body3_r" >
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
