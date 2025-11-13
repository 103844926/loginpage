import { Box, Button, Typography, Container, Grid, Stack } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material';
import { HomeImages } from '@/const';
import '@/themes/styles/global.scss'

export function LandingPart7() {
    return (
        <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 }, px: { xs: 4, md: 20 } }}>
            <Container maxWidth="lg" className="column-center">
                <Grid container spacing={1} className="column-center" >
                    <Typography variant="h2" color="neutral.grey_dark" >
                        Caring is the new marketing
                    </Typography>
                    <Typography variant="body2_r" color="neutral.grey_dark" sx={{ maxWidth: "720px" }}>
                        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
                    </Typography>
                </Grid>

                <Stack className="stack-container">
                    <Box className="small-column-center" sx={{ flex: 1, maxWidth: "350px" }}>
                        <img src={HomeImages.landillu4} alt="Illu4" />
                        <Box backgroundColor="neutral.silver" className="overlay-content">
                            <Typography variant="h4" color="neutral.grey" >
                                Creating Streamlined Safeguarding Processes with OneRen
                            </Typography>
                            <Button variant="text" color="primary">
                                Readmore
                                <ArrowRightAlt sx={{ ml: 1, color: 'inherit', fontSize: 20 }} />
                            </Button>
                        </Box>
                    </Box>

                    <Box className="small-column-center" sx={{ flex: 1, maxWidth: "350px" }}>
                        <img src={HomeImages.landillu5} alt="Illu5" />
                        <Box backgroundColor="neutral.silver" className="overlay-content">
                            <Typography variant="h4" color="neutral.grey" >
                                What are your safeguarding responsibilities and how can you manage them?
                            </Typography>
                            <Button variant="text" color="primary">
                                Readmore
                                <ArrowRightAlt sx={{ ml: 1, color: 'inherit', fontSize: 20 }} />
                            </Button>
                        </Box>
                    </Box>

                    <Box className="small-column-center" sx={{ flex: 1, maxWidth: "350px" }}>
                        <img src={HomeImages.landillu6} alt="Illu6" />
                        <Box backgroundColor="neutral.silver" className="overlay-content" >
                            <Typography variant="h4" color="neutral.grey" >
                                Revamping the Membership Model with Triathlon Australia
                            </Typography>
                            <Button variant="text" color="primary">
                                Readmore
                                <ArrowRightAlt sx={{ ml: 1, color: 'inherit', fontSize: 20 }} />
                            </Button>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}