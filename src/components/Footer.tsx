import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="font-heading font-bold text-2xl text-background">
            Premium<span className="text-primary">Estates</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-background/60">
            Your trusted partner in luxury real estate. We help clients find, sell, and invest in premium properties worldwide.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-ui font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {["Home", "Listings", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link to={`/${item === "Home" ? "" : item.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-ui font-semibold text-background mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {["Buy Property", "Sell Property", "Property Management", "Investment Consultation"].map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-primary transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-ui font-semibold text-background mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />123 Luxury Ave, Beverly Hills, CA 90210</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary shrink-0" />(310) 555-0101</li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary shrink-0" />info@premiumestates.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10 py-6 text-center text-sm text-background/40">
      © 2024 PremiumEstates. All rights reserved.
    </div>
  </footer>
);

export default Footer;
