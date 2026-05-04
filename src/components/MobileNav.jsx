import { NavLink } from 'react-router-dom';
import { Home, Map, MessageCircle, Plane, ShieldCheck } from 'lucide-react';

const mobileItems = [
  { label: 'Home', href: '/', Icon: Home },
  { label: 'Visa', href: '/visas', Icon: Plane },
  { label: 'Packages', href: '/destinations', Icon: Map },
  { label: 'Insurance', href: '/insurance', Icon: ShieldCheck },
  { label: 'Contact', href: '/contact', Icon: MessageCircle },
];

export function MobileNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-outline-variant bg-white/95 px-2 py-2 shadow-[0_-8px_30px_-20px_rgba(0,33,85,0.4)] backdrop-blur md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="grid grid-cols-5 gap-1">
        {mobileItems.map(({ label, href, Icon }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-semibold transition ${
                isActive ? 'bg-primary-fixed text-primary' : 'text-on-surface-variant hover:bg-surface-container'
              }`
            }
          >
            <Icon size={19} aria-hidden="true" />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
