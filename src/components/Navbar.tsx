import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Listings", path: "/listings" },
  { label: "Services", path: "/services" },
  { label: "Agents", path: "/agents" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container-main flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">PE</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Premium<span className="text-primary">Estates</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-ui font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-light-bg"
                  : "text-foreground/70 hover:text-primary hover:bg-light-bg"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+13105550101" className="flex items-center gap-2 text-sm font-ui text-foreground/70 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            (310) 555-0101
          </a>
          <Link to="/admin">
            <Button size="sm">Admin Panel</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-ui font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-light-bg"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/admin" onClick={() => setOpen(false)}>
              <Button className="w-full mt-3" size="sm">Admin Panel</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
