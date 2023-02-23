import { Navigate, useRoutes } from 'react-router-dom';
// auth
import AuthGuard from '../auth/AuthGuard';
import GuestGuard from '../auth/GuestGuard';
// layouts
import MainLayout from '../layouts/main';
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import {
  // Auth
  LoginPage,
  VerifyCodePage,
  NewPasswordPage,
  ResetPasswordPage,
  // Dashboard: Home
  GeneralHome,
  // Dashboard: Check-in
  GeneralCheckIn,
  // Dashboard: Services
  GeneralServices,
  // CheckIn,
  // WhatsApp,
  // Wifi,
  // GuideAndActivities,
  // EntranceToTheApartment,
  // Dashboard: Whatsapp
  GeneralWhatsApp,
  // Dashboard: Wifi
  GeneralWifi,
  // Dashboard: Guide and activities
  GeneralGuideAndActivities,
  // Dashboard: Entrance to the apartment
  GeneralEntranceToTheApartment,
  //
  Page500,
  Page403,
  Page404,
  // HomePage,
  FaqsPage,
  AboutPage,
  Contact,
  ComingSoonPage,
  MaintenancePage,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          element: <CompactLayout />,
          children: [
            { path: 'reset-password', element: <ResetPasswordPage /> },
            { path: 'new-password', element: <NewPasswordPage /> },
            { path: 'verify', element: <VerifyCodePage /> },
          ],
        },
      ],
    },

    // Dashboard
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { index: true, element: <GeneralHome /> },
        { path: 'check-in', element: <GeneralCheckIn /> },
        { path: 'services', element: <GeneralServices /> },
        { path: 'whats-app', element: <GeneralWhatsApp /> },
        { path: 'wifi', element: <GeneralWifi /> },
        { path: 'guide-and-activities', element: <GeneralGuideAndActivities /> },
        { path: 'entrance-to-the-apartment', element: <GeneralEntranceToTheApartment /> },
      ],
    },

    // Main Routes
    {
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to={PATH_AFTER_LOGIN} replace /> },
        { path: 'about-us', element: <AboutPage /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <FaqsPage /> },
      ],
    },
    {
      element: <CompactLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoonPage /> },
        { path: 'maintenance', element: <MaintenancePage /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
