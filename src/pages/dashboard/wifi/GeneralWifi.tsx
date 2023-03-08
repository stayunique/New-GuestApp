import { Box, Grid, Container, Typography } from '@mui/material';

// ** Custom components
import { PageContainer } from '../../../components/containers/page';
import SvgColor from '../../../components/svg-color/SvgColor';

export default function GeneralWifi() {
  return (
    <PageContainer title="Check-in">
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
          <Box
            sx={{
              height: '88.07637388542244px',
              width: '96.01059384374398px',
              backgroundImage: `url(/assets/images/backgrounds/dashboard/wifi/bg-wifi-title.svg)`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <SvgColor src="/assets/icons/dashboard/wifi.svg" sx={{ height: '46.36px', width: '38.97px', color: 'white' }} />
          </Box>
          <Typography color="primary" fontSize="32px" fontWeight={600} sx={{ ml: 2 }}>
            Wifi
          </Typography>
        </Box>

        <Grid
          container
          sx={{
            height: '521px',
            width: '1199px',
            borderRadius: '32px',
            bgcolor: 'rgba(218, 218, 218, 0.3)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            mt: 5,
            mx: 'auto',
            p: 0,
          }}
        >
          <Grid item xs={12} sm={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
              <Box>
                <Typography color="secondary" variant="body1" fontSize="20px">
                  Nombre de la Red wifi:
                </Typography>
                <Typography
                  mt={1}
                  color="secondary"
                  variant="body1"
                  fontSize="20px"
                  sx={{
                    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '3px',
                    bgcolor: 'rgba(217, 217, 217, 0.3)',
                    px: 2,
                    py: 0.5,
                  }}
                >
                  SERCOMMBB1324
                </Typography>
              </Box>
              <Box>
                <Typography color="secondary" variant="body1" fontSize="20px" mt={2}>
                  Contraseña de Red wifi:
                </Typography>
                <Typography
                  mt={1}
                  color="secondary"
                  variant="body1"
                  fontSize="20px"
                  sx={{
                    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '3px',
                    bgcolor: 'rgba(217, 217, 217, 0.3)',
                    px: 2,
                    py: 0.5,
                  }}
                >
                  H6YKRBA2J2XF447Y
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
              <Box
                sx={{
                  width: '291px',
                  height: '0px',
                  border: '2px solid #5E8F7C',
                  transform: { xs: 'none', sm: 'rotate(90deg)' },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
              <Typography color="secondary" variant="body1" fontSize="20px">
                Nombre de la Red wifi:
              </Typography>

              <Box sx={{ height: '288px', width: '288px', bgcolor: '#D9D9D9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography fontWeight="bold" fontSize={32}>
                  QR
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
}
