import { Box, Button, Typography, Stack, Grid } from '@mui/material'
import { HomeImages } from '@/const';
import '@/themes/styles/global.scss';

export function LandingPart3() {
    return (
        <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 }, px: { xs: 9, md: 18 } }}>
            <Box className ="flex-box-slider">
                <Box sx={{ flex: 2 }}>
                    <img src={HomeImages.landillu2} alt="Illustration 2" style={{ width: '80%', height: 'auto' }} />
                </Box>
                <Stack flex={2} spacing={4} alignItems="flex-start">
                    <Typography variant="h2" color="neutral.grey_dark" >
                        The unseen of spending three years at Pixelgrade
                    </Typography>

                    <Typography variant="body3_r" color="neutral.grey_dark" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.                  
                    </Typography>
                    <Button variant="contained" color="primary" size="medium">
                        Learn More
                    </Button>
                </Stack>

            </Box>
        </Box>
    );
}