import { Box, Button, Typography, Stack, Grid } from '@mui/material'
import { PeopleAlt, PanToolAlt, CreditCard } from '@mui/icons-material';
import { HomeImages } from '@/const';
import '@/themes/styles/global.scss';

export function LandingPart4() {
    return (
        <Box sx={{ backgroundColor: 'neutral.silver' }}>
            <Box className="flex-box-slider" sx={{py: { xs: 8, md: 10 }, px: { xs: 4, md: 20 }}}>
                <Stack flex={2} spacing={4} alignItems="flex-start">
                    <Typography variant="h2" color="neutral.grey_dark">
                        Helping a local <br />
                        <Box component="span" color="primary.main">
                            business reinvent itself
                        </Box>
                    </Typography>

                    <Typography variant="body2" color="neutral.grey_dark" >
                        We reached here with our hard work and dedication
                    </Typography>

                </Stack>

                <Grid flex={3} container spacing={4} sx={{ flexBasis: '100%', maxWidth: 500, flexWrap: 'wrap',}}>
                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <PeopleAlt sx={{ color: 'primary.main' }} />
                            <Box>
                                <Typography variant="h3" color="neutral.grey_dark">
                                    2,245,341
                                </Typography>
                                <Typography variant="body2" color="neutral.grey_dark">
                                    Members
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <img src={HomeImages.landicon3} alt="Icon3" style={{ width: '60px', height: '60px' }} />
                            <Box>
                                <Typography variant="h3" color="neutral.grey_dark">
                                    46,328
                                </Typography>
                                <Typography variant="body2" color="neutral.grey_dark">
                                    Clubs
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <PanToolAlt sx={{ color: 'primary.main' }} />
                            <Box>
                                <Typography variant="h3" color="neutral.grey_dark">
                                    828,867
                                </Typography>
                                <Typography variant="body2" color="neutral.grey_dark">
                                    Event Bookings
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <CreditCard sx={{ color: 'primary.main' }} />
                            <Box>
                                <Typography variant="h3" color="neutral.grey_dark">
                                    1,926,436
                                </Typography>
                                <Typography variant="body2" color="neutral.grey_dark">
                                    Payments
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}