import { Box, Button, Typography, Container, Grid, Stack } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material';

export function LandingPart8() {
    return (
        <Box sx={{ backgroundColor: 'neutral.silver', py: {xs: 4, md: 8}}}>
            <Container>
            <Box className="column-center" sx={{ gap: 5 }}>
            <Typography variant="h1" color="neutral.black" sx={{ maxWidth: '900px' }}>
                Pellentesque suscipit fringilla libero eu.
            </Typography>

            <Button variant="contained" color="primary" size='Medium'>
                Get a Demo
                <ArrowRightAlt sx={{ ml: 1, color: 'inherit', fontSize: 20 }} />
            </Button>
            </Box>
            </Container>
        </Box>

    );
}
