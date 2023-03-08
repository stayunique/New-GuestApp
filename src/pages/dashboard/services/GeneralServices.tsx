import { Box, Button, Container, Grid, Typography, Paper } from '@mui/material';

// ** Custom components
import { PageContainer } from '../../../components/containers/page';
import SvgColor from '../../../components/svg-color/SvgColor';

const ServiceButton = ({ iconSrc, label }: { iconSrc: string; label: string }) => {
  return (
    <Button
      sx={{
        bgcolor: 'secondary.light',
        width: '122.09px',
        height: '122.09px',
        borderRadius: '22px',
        color: 'white',
        textTransform: 'uppercase',
        lineHeight: 1.1,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        mx: 'auto',
        '&:hover': {
          backgroundColor: 'primary.main',
        },
      }}
    >
      <SvgColor src={iconSrc} sx={{ height: '54.25138854980469px', width: '49.773094177246094px', mb: 2 }} />
      {label}
    </Button>
  );
};

export default function GeneralServices() {
  return (
    <PageContainer title="Check-in">
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
          <Box
            sx={{
              height: '88.07637388542244px',
              width: '96.01059384374398px',
              backgroundImage: `url(/assets/images/backgrounds/dashboard/services/bg-services-title.svg)`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <SvgColor src="/assets/icons/dashboard/services.svg" sx={{ height: '46.36px', width: '38.97px', color: 'white' }} />
          </Box>
          <Typography color="primary" fontSize="32px" fontWeight={600} sx={{ ml: 1 }}>
            Services
          </Typography>
        </Box>

        {/* Menus */}
        <Grid container spacing={10} mt={2}>
          <Grid item xs={12} sm={6} md={4} p={0}>
            {/* New Services suggestions */}
            <Grid container rowSpacing={2} component={Paper} sx={{ bgcolor: '#FAFAFA', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '24px', m: 0, px: 3.2, pt: 2, pb: 5 }}>
              <Grid item xs={12} mb={2}>
                <Typography color="secondary.light" variant="h6" textTransform="uppercase" textAlign="center">
                  New services suggestions
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServiceButton iconSrc="/assets/icons/services/covid-test.svg" label="Covid Test" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServiceButton iconSrc="/assets/icons/services/money-exchange.svg" label="Money Exchange" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServiceButton iconSrc="/assets/icons/services/battery.svg" label="Battery" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServiceButton iconSrc="/assets/icons/services/user.svg" label="Translator" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} p={0}>
            {/* Baby equipment options */}
            <Grid container rowSpacing={2} component={Paper} sx={{ bgcolor: '#FAFAFA', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '24px', m: 0, px: 3.2, pt: 2, pb: 5 }}>
              <Grid item xs={12} mb={2}>
                <Typography color="secondary.light" variant="h6" textTransform="uppercase" textAlign="center">
                  Baby equipment options
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServiceButton iconSrc="/assets/icons/services/baby-trolley.svg" label="Back pack baby" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServiceButton iconSrc="/assets/icons/services/baby-boo.svg" label="Babyboo" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServiceButton iconSrc="/assets/icons/services/stroll-arround.svg" label="Stroll around" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServiceButton iconSrc="/assets/icons/services/diaper-bag.svg" label="Diaper bag" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} p={0}>
            {/* Transportation options */}
            <Grid container rowSpacing={2} component={Paper} sx={{ bgcolor: '#FAFAFA', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '24px', m: 0, px: 3.2, pt: 2, pb: 5 }}>
              <Grid item xs={12} mb={2}>
                <Typography color="secondary.light" variant="h6" textTransform="uppercase" textAlign="center">
                  Transportation options
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServiceButton iconSrc="/assets/icons/services/transfer.svg" label="Transfer" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ServiceButton iconSrc="/assets/icons/services/airport-pickup.svg" label="Airport pickup" />
              </Grid>
              <Grid item xs={12}>
                <ServiceButton iconSrc="/assets/icons/services/parking.svg" label="Parking" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
}
