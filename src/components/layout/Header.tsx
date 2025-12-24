import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/valeurs", label: "Nos valeurs" },
  { href: "/secteurs", label: "Secteurs d'activités" },
  { href: "/expertise", label: "Notre expertise" },
  { href: "/prestations", label: "Nos prestations" },
  { href: "/equipe", label: "Notre équipe" },
  { href: "/references", label: "Nos références" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          "container mx-auto px-4 mb-2 transition-all duration-300",
          isScrolled ? "hidden" : "block"
        )}
      >
        <div className="flex justify-end items-center gap-6 text-sm text-muted-foreground">
          <a
            href="tel:+22507790303"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+225 07 79 03 03 03</span>
          </a>
          <a
            href="mailto:radyenconsult@gmail.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>radyenconsult@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold text-foreground tracking-tight">
                RADYEN
              </span>
              <span className="text-accent text-sm font-medium tracking-widest -mt-1">
                CONSULT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "nav-link px-3 py-2 text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="copper" size="default">
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen py-6" : "max-h-0 py-0"
        )}
      >
        <div className="container mx-auto px-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                location.pathname === link.href
                  ? "text-accent bg-secondary"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link to="/contact">
              <Button variant="copper" className="w-full">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
