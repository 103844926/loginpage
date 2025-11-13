import { Box, Button, Typography, Stack, Grid } from '@mui/material'
import { HomeImages } from '@/const';
import '@/themes/styles/global.scss';

export function LandingPart5() {
    return (
        <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 }, px: { xs: 9, md: 18 } }}>
            <Box className="flex-box-slider">
                <Box sx={{ flex: 2 }}>
                    <img src={HomeImages.landillu3} alt="Illustration 3" style={{ width: '80%', height: 'auto' }} />
                </Box>
                <Stack flex={2} spacing={4} alignItems="flex-start">
                    <Typography variant="h2" color="neutral.grey_dark" >
                        How to design your site footer like we did
                    </Typography>

                    <Typography variant="body3_r" color="neutral.grey_dark" >
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </Typography>
                    <Button variant="contained" color="primary" size="Medium">
                        Learn More
                    </Button>
                </Stack>

            </Box>
        </Box>
    );
}