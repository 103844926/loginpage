import { Container, Box, Button, Typography, Stack, Grid } from '@mui/material'
import { CommonIcons } from '@/components/icons';
;

export function LandingPart4() {
    const gridIcon = { width: 48, height: 48, color: 'primary.main' };

    return (
        <Box sx={{ backgroundColor: 'neutral.silver', py: {xs: 4, md: 8} }}>
            <Container>
                <Box className="flex-box-normal">
                    <Stack flex={2} spacing={2} alignItems="flex-start">
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

                    <Grid flex={2} container rowSpacing={"40px"} columnSpacing={"30px"} sx={{ flexBasis: '100%', maxWidth: "540px", flexWrap: 'wrap', }}>
                        <Grid item xs={6}>
                            <Box display="flex" alignItems="center" gap={"16px"} width={"255px"}>
                                <CommonIcons.MemberIcon sx={gridIcon} />
                                <Box>
                                    <Typography variant="h3" color="neutral.grey_dark">
                                        2,245,341
                                    </Typography>
                                    <Typography variant="body2_r" color="neutral.grey">
                                        Members
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box display="flex" alignItems="center" gap={"16px"} width={"255px"}>
                                <CommonIcons.ClubIcon sx={gridIcon} />
                                <Box>
                                    <Typography variant="h3" color="neutral.grey_dark">
                                        46,328
                                    </Typography>
                                    <Typography variant="body2_r" color="neutral.grey">
                                        Clubs
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box display="flex" alignItems="center" gap={"16px"} width={"255px"}>
                                <CommonIcons.BookingIcon sx={gridIcon} />
                                <Box>
                                    <Typography variant="h3" color="neutral.grey_dark">
                                        828,867
                                    </Typography>
                                    <Typography variant="body2_r" color="neutral.grey">
                                        Event Bookings
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box display="flex" alignItems="center" gap={"16px"} width={"255px"}>
                                <CommonIcons.PaymentIcon sx={gridIcon} />
                                <Box>
                                    <Typography variant="h3" color="neutral.grey_dark">
                                        1,926,436
                                    </Typography>
                                    <Typography variant="body2_r" color="neutral.grey">
                                        Payments
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}