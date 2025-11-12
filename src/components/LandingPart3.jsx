import { Box, Button, Typography, Container, Grid } from '@mui/material'
import { HomeImages } from '@/const';

export default function LandingPart3() {
    return (
        <Box sx={{ backgroundColor: 'neutral.white', py: { xs: 4, md: 8 }, px: { xs: 9, md: 18 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 1 }}>
                <Box sx={{ flex: 1 }}>
                    <img src={HomeImages.landillu2} alt="Illustration 2" style={{ width: '75%', height: 'auto' }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', flex: 1, gap: 4 }}>
                    <Typography variant="h4" color="neutral.grey_dark" >
                        The unseen of spending three years at Pixelgrade
                    </Typography>

                    <Typography variant="body5" color="neutral.grey_dark" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.                  </Typography>
                    <Button variant="contained" color="primary" sx={{ mr: 4 }}>
                        Learn More
                    </Button>
                </Box>

            </Box>
        </Box>
    );
}