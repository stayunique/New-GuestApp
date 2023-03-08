import { Box, Button, Container, Typography } from '@mui/material';

// ** Custom components
import { PageContainer } from '../../../components/containers/page';
import SvgColor from '../../../components/svg-color/SvgColor';

export default function GeneralWhatsApp() {
  return (
    <PageContainer title="Check-in">
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
          <Box
            sx={{
              height: '88.07637388542244px',
              width: '96.01059384374398px',
              backgroundImage: `url(/assets/images/backgrounds/dashboard/whatsapp/bg-whatsapp-title.svg)`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <SvgColor src="/assets/icons/dashboard/whatsapp.svg" sx={{ height: '46.36px', width: '38.97px', color: 'white' }} />
          </Box>
          <Typography color="primary" fontSize="32px" fontWeight={600} sx={{ ml: 2 }}>
            Whats App
          </Typography>
        </Box>

        <Box
          sx={{
            height: '571px',
            width: '553px',
            borderRadius: '32px',
            bgcolor: 'rgba(218, 218, 218, 0.3)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            mt: 5,
            mx: 'auto',
          }}
        >
          <Box textAlign="center">
            <SvgColor src="/assets/icons/dashboard/whatsapp.svg" sx={{ height: '60.76px', width: '61.19px', color: 'rgba(139, 204, 191, 1)' }} />
            <Typography color="secondary" variant="body1" fontSize="20px" width="60%" mx="auto" textAlign="center" mt={4}>
              Hi Juan Carlos, We are just one click away! Contact us via WhatsApp.
            </Typography>
          </Box>

          <Button variant="contained" color="secondary" sx={{ borderRadius: '100px', width: '294px', height: '66px', mt: 4, boxShadow: '1px 1px 15px #779D8F' }}>
            <Typography fontSize="29px" component="span" fontWeight={600}>
              Chat with us
            </Typography>
          </Button>

          <Box>
            <Typography color="secondary" variant="body1" fontSize="20px" mx="auto" textAlign="center" mt={4}>
              Kind regards, <br />
              <span style={{ fontWeight: 'bold' }}>The Stay Unique family</span>
            </Typography>
          </Box>

          <Box textAlign="center" mt={4}>
            <SvgColor src="/assets/images/logos/stay-u-nique-isotipo.svg" sx={{ height: '62.09px', width: '59px', color: '#F29259' }} />
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
}
