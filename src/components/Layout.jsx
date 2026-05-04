import { Outlet } from 'react-router-dom';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';
import { MobileNav } from './MobileNav.jsx';
import { ScrollToTop } from './ScrollToTop.jsx';
import { WhatsAppWidget } from './WhatsAppWidget.jsx';

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
      <WhatsAppWidget />
    </div>
  );
}
