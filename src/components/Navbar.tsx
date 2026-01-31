import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/Tri Sea Adventures logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-card/95 backdrop-blur-md shadow-soft"
        : "bg-transparent"
        }`}
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              India's Premier Travel Partner
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 9666092444</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Tri Sea Adventures Logo"
              className="
                h-12 w-auto
                scale-150
                drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)]
                transition-transform duration-300
              "
            />
          </Link>




          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-accent ${location.pathname === link.path
                  ? "text-accent"
                  : isScrolled
                    ? "text-foreground"
                    : "text-foreground"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-accent hover:bg-saffron-dark text-accent-foreground">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4 bg-card rounded-lg p-4 shadow-card">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium py-2 transition-colors ${location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="bg-accent hover:bg-saffron-dark text-accent-foreground w-full">
                  Book Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
