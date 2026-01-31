import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import logo from "@/assets/Tri Sea Adventures logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center" aria-label="Tri Sea Adventures Home">
              <img
                src={logo}
                alt="Tri Sea Adventures Logo"
                className="h-12 w-auto scale-150 drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)] transition-transform duration-300"
              />
            </Link>

            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for exploring the incredible diversity of India.
              From the Himalayas to the beaches, we craft unforgettable journeys.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/triseaadventurespvtltd?igsh=d3BsNnlmMmkzbjNu"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/packages" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/packages" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Kashmir Tours
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Kerala Backwaters
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Rajasthan Heritage
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Goa Beach Tours
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Andaman Islands
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=TRENDZ+UPTOWN+Kavuri+Hills+Madhapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
                >
                  6th Floor, TRENDZ UPTOWN, Rd No 7, Kavuri Hills, Madhapur,
                  Hyderabad, Telangana – 500081
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919666092444"
                  className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
                  aria-label="Call Tri Sea Adventures"
                >
                  +91 96660 92444
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@triseaadventures.com"
                  className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
                  aria-label="Email Tri Sea Adventures"
                >
                  info@triseaadventures.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2025 Tri Sea Adventures. All rights reserved. Made with ❤️ in India
            </p>

            <span className="text-primary-foreground/60 text-sm text-center">
              Approved by Ministry of Tourism, Govt. of India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
