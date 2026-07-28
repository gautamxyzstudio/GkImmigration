import { NavLink } from "react-router-dom";
import { Home, Images, MessageCircle, Plane, ShieldCheck } from "lucide-react";

const mobileItems = [
  { label: "Home", href: "/", Icon: Home },
  { label: "Visa", href: "/visas", Icon: Plane },
  { label: "Insurance", href: "/insurance", Icon: ShieldCheck },
  { label: "Gallery", href: "/gallery", Icon: Images },
  { label: "Contact", href: "/contact", Icon: MessageCircle },
];

export function MobileNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-outline-variant bg-white/95 px-1 py-2 shadow-[0_-8px_30px_-20px_rgba(0,33,85,0.4)] backdrop-blur md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="grid grid-cols-5 gap-1">
        {mobileItems.map(({ label, href, Icon }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg text-[10px] font-semibold transition ${
                isActive
                  ? "bg-primary-fixed text-primary"
                  : "text-on-surface-variant hover:bg-surface-container"
              }`
            }
          >
            <Icon size={18} aria-hidden="true" />
            <span className="truncate px-0.5">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
