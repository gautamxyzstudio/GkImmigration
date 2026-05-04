import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx').then((module) => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx').then((module) => ({ default: module.ServicesPage })));
const VisaPage = lazy(() => import('./pages/VisaPage.jsx').then((module) => ({ default: module.VisaPage })));
const DestinationsPage = lazy(() => import('./pages/DestinationsPage.jsx').then((module) => ({ default: module.DestinationsPage })));
const InsurancePage = lazy(() => import('./pages/InsurancePage.jsx').then((module) => ({ default: module.InsurancePage })));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx').then((module) => ({ default: module.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx').then((module) => ({ default: module.NotFoundPage })));

export function App() {
  return (
    <Suspense
      fallback={
        <div className="grid min-h-screen place-items-center bg-background px-6 text-center font-body text-primary">
          <span className="font-heading text-headline-sm">Preparing your journey...</span>
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="visas" element={<VisaPage />} />
          <Route path="visa-services" element={<Navigate to="/visas" replace />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="tour-packages" element={<Navigate to="/destinations" replace />} />
          <Route path="insurance" element={<InsurancePage />} />
          <Route path="travel-insurance" element={<Navigate to="/insurance" replace />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="about-us" element={<Navigate to="/services" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
