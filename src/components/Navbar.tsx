import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/produits", label: "Produits" },
  { to: "/commander", label: "Commander" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-navy/95 backdrop-blur-md border-b border-secondary/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Iceman Zaghouan" className="h-16 md:h-24 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm font-semibold tracking-wide uppercase transition-colors ${
                location.pathname === link.to
                  ? "text-accent"
                  : "text-ice-light hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+21625252050"
            className="flex items-center gap-2 bg-gradient-ice text-primary font-heading font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Appeler
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ice-light p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gradient-navy border-t border-secondary/20 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-heading text-sm font-semibold uppercase ${
                location.pathname === link.to
                  ? "text-accent"
                  : "text-ice-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <a
              href="tel:+21625252050"
              className="flex items-center justify-center gap-2 bg-gradient-ice text-primary font-heading font-bold text-sm px-5 py-3 rounded-full"
            >
              <Phone className="w-4 h-4" />
              +216 25 252 050
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
