import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../utils/constants.js";
import { useModal } from "../context/ModalContext.jsx";

export function Header() {
  const { openModal } = useModal();

  return (
    <header className="sticky top-0 z-50 bg-primary-container shadow-lg shadow-blue-900/20">
      <nav
        className="container-shell flex h-20 items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-3 font-heading text-2xl font-bold tracking-tight text-white"
        >
          <img
            src="/logo.png"
            alt="GK Immigrations Logo"
            className="md:h-12 md:w-[200px] w-[180px] object-contain"
          />
        </Link>
        <div className="hidden items-center gap-8 font-heading text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={`${item.label}-${item.href}`}
              to={item.href}
              className={({ isActive }) =>
                `border-b-2 pb-1 transition-colors duration-200 ${
                  isActive
                    ? "border-secondary-container text-white"
                    : "border-transparent text-blue-100/80 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openModal()}
            className="hidden items-center gap-2 rounded-lg bg-secondary-container px-5 py-2.5 font-heading text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:brightness-110 sm:flex"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}
