import { Box, Button, Typography, Container, Grid, Stack } from '@mui/material'
import { HomeImages } from '@/const';
import '@/themes/styles/global.scss'

export default function LandingPart2() {
    
const clients = [
    HomeImages.landlogo1,
    HomeImages.landlogo2,
    HomeImages.landlogo3,
    HomeImages.landlogo4,
    HomeImages.landlogo5,
    HomeImages.landlogo6,
    HomeImages.landlogo2, // Client7
];

    return (
        <>
            <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 } }}>
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={1}
                        className="column-center"
                    >
                        <Typography variant="h2" color="neutral.grey_dark">
                            Our Clients
                        </Typography>
                        <Typography variant="body2_r" color="neutral.grey_dark">
                            We have been working with some Fortune 500+ clients
                        </Typography>
                    </Grid>

                    <Stack
                        direction="row"
                        spacing={5}         
                        flexWrap="wrap"     
                        justifyContent="center"
                        alignItems="center"
                        mt={4}
                        gap={4}            
                    >
                        {clients.map((client, idx) => (
                            <Box key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={client} alt={`Client${idx + 1}`} />
                            </Box>
                        ))}
                    </Stack>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 } }}>
                <Container maxWidth="lg" className="column-center">
                    <Grid container spacing={1} className="column-center" >
                        <Typography variant="h2" color="neutral.grey_dark" >
                            Manage your entire community <br /> in a single system
                        </Typography>
                        <Typography variant="body2_r" color="neutral.grey_dark" >
                            Who is Nexcent suitable for?
                        </Typography>
                    </Grid>

                    <Grid container className="row-center" >
                        <Grid item xs={12} sm={6} md={3.5}>
                            <Box className="small-column-center">
                                <img src={HomeImages.landicon1} alt="Icon1" style={{ width: '60px', height: '60px' }} />
                                <Typography variant="h3" color="neutral.grey_dark" >
                                    Membership Organizations
                                </Typography>
                                <Typography variant="body3_r" >
                                    Our membership management software provides full automation of membership renewals and payments
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3.5}>
                            <Box className="small-column-center">
                                <img src={HomeImages.landicon2} alt="Icon2" style={{ width: '60px', height: '60px' }} />
                                <Typography variant="h3" color="neutral.grey_dark" >
                                    National Associations
                                </Typography>
                                <Typography variant="body3_r" >
                                    Our membership management software provides full automation of membership renewals and payments
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3.5}>
                            <Box className="small-column-center">
                                <img src={HomeImages.landicon3} alt="Icon3" style={{ width: '60px', height: '60px' }} />
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
