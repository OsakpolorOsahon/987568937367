import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import logoImage from "@assets/CPP_LOGO_(1)_1771413757122.png";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="bg-card/95 backdrop-blur-sm shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <img 
              src={logoImage} 
              alt="Covenant Care Christian Prayer Partner Foundation" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-foreground hover:text-primary font-medium transition-colors ${
                  isActiveLink(link.href) ? "text-primary" : ""
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to join your community and learn more about how I can be involved.")} target="_blank" rel="noopener noreferrer" data-testid="link-join-us">
              <Button 
                className="bg-primary text-primary-foreground font-medium shadow-md"
                data-testid="button-join-us"
              >
                Join Us
              </Button>
            </a>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-card border-t border-border overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-foreground hover:text-primary font-medium py-2 transition-colors ${
                      isActiveLink(link.href) ? "text-primary" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
              >
                <a href={getWhatsAppLink("Hello Covenant Care Foundation! I'd like to join your community and learn more about how I can be involved.")} target="_blank" rel="noopener noreferrer" data-testid="mobile-link-join-us">
                  <Button 
                    className="w-full bg-primary text-primary-foreground font-medium"
                    data-testid="mobile-button-join-us"
                  >
                    Join Us
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
