import { useLocation, Outlet } from 'react-router-dom';

// ** Custom components
import Header from './Header';
import Footer from './Footer';

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />

      <main
        style={{
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 11 },
          }),
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
