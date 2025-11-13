import { Box, Button, Typography, Stack, Grid } from '@mui/material'
import '@/themes/styles/global.scss';
import { HomeImages } from '@/const';
import { ArrowRightAlt } from '@mui/icons-material';

const clients = [
    HomeImages.landlogo1,
    HomeImages.landlogo2,
    HomeImages.landlogo3,
    HomeImages.landlogo4,
    HomeImages.landlogo5,
    HomeImages.landlogo6,
];

export function LandingPart6() {
    return (
        <Box sx={{ backgroundColor: 'neutral.silver', py: { xs: 4, md: 8 }, px: { xs: 4, md: 20 } }}>
            <Box className="flex-box-normal">
                <Box sx={{ flex: 2 }}>
                    <img src={HomeImages.TimSmith} alt={`Tim Smith`}  style={{ width: '80%', height: '80%' }}/>
                </Box>

                <Stack flex={3} spacing={4} maxWidth="850 px" alignItems="flex-start" >
                    <Box className= "column-typography" >
                    <Typography variant="body2" color="neutral.grey" >
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </Typography>

                    <Typography variant="h4" color="primary.main" >
                        Tim Smith
                    </Typography>

                    <Typography variant="body2_r" color="neutral.grey_light" >
                        British Dragon Boat Racing Association
                    </Typography>
                    </Box>

                    <Stack className= "stack-container" gap={4} >
                        {clients.map((client, idx) => (
                            <Box key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={client} alt={`Client${idx + 1}`} />
                            </Box>
                        ))}
                        <Button variant="text" color="primary">
                            Meet all customers
                            <ArrowRightAlt sx={{ ml: 1, color: 'inherit', fontSize: 20 }} />
                        </Button>
                    </Stack>

                </Stack>

            </Box>
        </Box>
    );
}