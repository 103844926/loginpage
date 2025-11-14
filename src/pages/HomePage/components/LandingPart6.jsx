import { Container, Box, Button, Typography, Stack, Grid } from '@mui/material';
import { HomeImages } from '@/const';
import { ArrowRightAlt } from '@mui/icons-material';
import { height, width } from '@mui/system';

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
        <Box sx={{ backgroundColor: 'neutral.silver', py: {xs: 4, md: 8} }}>
            <Container>
                <Box className="flex-box-normal">
                    <Box flex={2}>
                        <img src={HomeImages.TimSmith} alt={`Tim Smith`} sz={{width: "326px", height: "auto"}} />
                    </Box>

                    <Stack flex={4} spacing={"32px"} alignItems="flex-start">
                        <Stack gap={"8px"} alignItems="flex-start">
                            <Typography variant="body2" color="neutral.grey">
                                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                            </Typography>
                            <Typography variant="h4" color="primary.main">
                                Tim Smith
                            </Typography>
                            <Typography variant="body2_r" color="neutral.grey_light">
                                British Dragon Boat Racing Association
                            </Typography>
                        </Stack>
                        <Stack width={"100%"} flexDirection="row" justifyContent={'space-between'}>
                            {clients.map((client, idx) => (
                                <Box xs={6} sm={4} md={2} key={idx} textAlign="center" >
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
            </Container>
        </Box>
    );
}