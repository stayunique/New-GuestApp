import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(lazy(() => import('../pages/auth/LoginPage')));
export const VerifyCodePage = Loadable(lazy(() => import('../pages/auth/VerifyCodePage')));
export const NewPasswordPage = Loadable(lazy(() => import('../pages/auth/NewPasswordPage')));
export const ResetPasswordPage = Loadable(lazy(() => import('../pages/auth/ResetPasswordPage')));

// DASHBOARD: CHECK IN
export const GeneralCheckIn = Loadable(lazy(() => import('../pages/dashboard/check-in/GeneralCheckIn')));

// DASHBOARD: SERVICES
export const GeneralServices = Loadable(lazy(() => import('../pages/dashboard/services/GeneralServices')));

// DASHBOARD: WHATSAPP
export const GeneralWhatsApp = Loadable(lazy(() => import('../pages/dashboard/whatsapp/GeneralWhatsApp')));

// DASHBOARD: WIFI
export const GeneralWifi = Loadable(lazy(() => import('../pages/dashboard/wifi/GeneralWifi')));

// DASHBOARD: GUIDE AND ACTIVITIES
export const GeneralGuideAndActivities = Loadable(lazy(() => import('../pages/dashboard/guide-and-activities/GeneralGuideAndActivities')));

// DASHBOARD: ENTRANCE TO THE APARTMENT
export const GeneralEntranceToTheApartment = Loadable(lazy(() => import('../pages/dashboard/entrance-to-the-apartment/GeneralEntranceToTheApartment')));

// MAIN
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
export const Page403 = Loadable(lazy(() => import('../pages/Page403')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
export const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
export const FaqsPage = Loadable(lazy(() => import('../pages/FaqsPage')));
export const AboutPage = Loadable(lazy(() => import('../pages/AboutPage')));
export const Contact = Loadable(lazy(() => import('../pages/ContactPage')));
export const ComingSoonPage = Loadable(lazy(() => import('../pages/ComingSoonPage')));
export const MaintenancePage = Loadable(lazy(() => import('../pages/MaintenancePage')));
