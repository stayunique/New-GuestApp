import { Box, Button, Container, Typography } from '@mui/material';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

// ** Custom components
import { PageContainer } from '../../../components/containers/page';
import SvgColor from '../../../components/svg-color/SvgColor';

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';
// const geoUrl = './Spain.json';

export default function GeneralGuideAndActivities() {
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
            <SvgColor src="/assets/icons/dashboard/guide-activities.svg" sx={{ height: '46.36px', width: '38.97px', color: 'white' }} />
          </Box>
          <Typography color="primary" fontSize="32px" fontWeight={600} sx={{ ml: 2 }}>
            Guide & Activities
          </Typography>
        </Box>

        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} fill="#DADADA" stroke="#FFFFFF" />)}
          </Geographies>
          <Marker coordinates={[-3.70379, 40.416775]} fill="#777">
            <text textAnchor="middle" fill="#F53">
              Madrid
            </text>
          </Marker>
        </ComposableMap>
      </Container>
    </PageContainer>
  );
}
