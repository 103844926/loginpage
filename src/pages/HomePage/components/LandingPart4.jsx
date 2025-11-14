import { Box, Button, Typography, Stack, Grid } from '@mui/material'
import { CommonIcons } from '@/components/icons';
import { HomeImages } from '@/const';
;

export function LandingPart4() {
    const gridIcon = {width: 48, height: 48, color: 'primary.main' };

    return (
        
        
        <Box sx={{ backgroundColor: 'neutral.silver', py: { xs: 4, md: 8 }, px: { xs: 4, md: 20 } }}>
            <Box className="flex-box-slider">
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

                <Grid flex={4} container rowSpacing={4} columnSpacing={12} sx={{ flexBasis: '100%', maxWidth: 500, flexWrap: 'wrap',}}>
                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <CommonIcons.MemberIcon sx={gridIcon} />
                            <Box>
                                <Typography variant="h3" color="neutral.grey_dark">
                                    2,245,341
                                </Typography>
                                <Typography variant="body2" color="neutral.grey">
                                    Members
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <CommonIcons.ClubIcon sx={gridIcon} />
                            <Box>
                                <Typography variant="h3" color="neutral.grey_dark">
                                    46,328
                                </Typography>
                                <Typography variant="body2" color="neutral.grey">
                                    Clubs
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <CommonIcons.BookingIcon sx={gridIcon} />
                            <Box>
                                <Typography variant="h3" color="neutral.grey_dark">
                                    828,867
                                </Typography>
                                <Typography variant="body2" color="neutral.grey">
                                    Event Bookings
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <CommonIcons.PaymentIcon sx={gridIcon} />
                            <Box>
                                <Typography variant="h3" color="neutral.grey_dark">
                                    1,926,436
                                </Typography>
                                <Typography variant="body2" color="neutral.grey">
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