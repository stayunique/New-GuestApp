import { Grid, Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import SvgColor from '../../components/svg-color';

import './Home.css';

const Home = () => {
  // ** Hooks
  const { t } = useTranslation();

  const backgroundImagesPath = '/assets/images/backgrounds/dashboard/bg-';
  const iconsPath = '/assets/icons/dashboard/';

  const homeButtons = [
    {
      id: 'arrival',
      label: 'home.buttons.arrival.text',
      gridValues: {
        xs: 12,
      },
    },
    {
      id: 'enter-apartment',
      label: 'home.buttons.enterApartment.text',
      gridValues: {
        xs: 12,
        sm: 6,
      },
    },
    {
      id: 'guide-activities',
      label: 'home.buttons.guideActivities.text',
      gridValues: {
        xs: 12,
        sm: 6,
      },
    },
    {
      id: 'services',
      label: 'home.buttons.services.text',
      gridValues: {
        xs: 12,
        sm: 6,
      },
    },
    {
      id: 'wifi',
      label: 'home.buttons.wifi.text',
      gridValues: {
        xs: 12,
        sm: 6,
      },
    },
    {
      id: 'whatsapp',
      label: 'home.buttons.whatsapp.text',
      gridValues: {
        xs: 12,
      },
    },

    // {
    //   id: 'sustainability',
    //   label: 'home.buttons.sustainability.text',
    //   gridValues: {
    //     xs: 12,
    //   },
    // },
  ];

  return (
    <Container maxWidth="lg" sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
      <Grid container spacing={1}>
        {homeButtons.map(homeButton => (
          <Grid
            item
            key={homeButton.id}
            {...homeButton.gridValues}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                height: '203.16503876677947px',
                width: '221.46707121084273px',
                backgroundImage: `url(${backgroundImagesPath}${homeButton.id}.svg)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <SvgColor src={`${iconsPath}${homeButton.id}.svg`} sx={{ color: 'white', width: 82, height: 62, mb: 1 }} />
              <Typography color="white">{t(homeButton.label)}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          height: '260px',
          width: '380px',
          backgroundImage: `url(${backgroundImagesPath}sustainability.svg)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',

          position: 'absolute',
          m: 0,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <SvgColor src={`${iconsPath}sustainability.svg`} sx={{ color: 'white' }} />
        <Typography color="white">{t('home.buttons.sustainability.text')}</Typography>
      </Box>
    </Container>
  );
};

export default Home;
