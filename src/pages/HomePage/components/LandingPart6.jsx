import { HomeImages } from '@/const';
import { ArrowRightAlt } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

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
    <Box sx={{ backgroundColor: 'neutral.silver', py: { xs: 4, md: 8 } }}>
      <Container>
        <Box className="flex-box-normal">
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: 2 },
              textAlign: { xs: 'center', md: 'left' }, // optional, center image on mobile
            }}
          >
            <img
              src={HomeImages.TimSmith}
              alt={`Tim Smith`}
              sx={{
                width: '100%',
                maxWidth: '326px',
                height: 'auto',
              }}
            />
          </Box>

          <Stack
            sx={{
              flex: { xs: '1 1 100%', md: 4 },
              width: '100%',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: '32px',
            }}
          >
            <Stack gap={'8px'} alignItems="flex-start">
              <Typography variant="body2" color="neutral.grey">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id
                sem dignissim finibus ac sit amet magna.
              </Typography>
              <Typography variant="h4" color="primary.main">
                Tim Smith
              </Typography>
              <Typography variant="body2_r" color="neutral.grey_light">
                British Dragon Boat Racing Association
              </Typography>
            </Stack>
            <Stack width="100%" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              <Box width={{ xs: '100%', md: '65%' }} className="row-center" justifyContent="space-between">
                {clients.map((client, idx) => (
                  <img key={idx} src={client} alt={`Client${idx + 1}`} />
                ))}
              </Box>
              <Button
                variant="text"
                color="primary"
                sx={{
                  width: 'fit-content',
                  minWidth: 'auto',
                }}
              >
                Meet all customers
                <ArrowRightAlt
                  sx={{
                    ml: 1,
                    color: 'inherit',
                    fontSize: 20,
                  }}
                />
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
