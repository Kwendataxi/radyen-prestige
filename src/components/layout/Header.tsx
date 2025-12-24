import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

const navItems: NavItem[] = [
  { href: "/", label: "Accueil" },
  {
    href: "/qui-sommes-nous",
    label: "À propos",
    children: [
      { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
      { href: "/valeurs", label: "Nos valeurs" },
      { href: "/equipe", label: "Notre équipe" },
    ],
  },
  {
    href: "/secteurs",
    label: "Nos métiers",
    children: [
      { href: "/secteurs", label: "Secteurs d'activités" },
      { href: "/expertise", label: "Notre expertise" },
      { href: "/prestations", label: "Nos prestations" },
    ],
  },
  { href: "/references", label: "Références" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => location.pathname === href;
  const isParentActive = (item: NavItem) => {
    if (isActive(item.href)) return true;
    return item.children?.some(child => isActive(child.href));
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/30 py-3"
          : "bg-gradient-to-b from-background/80 to-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-10">
            <div className="flex flex-col">
              <span className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-tight transition-colors group-hover:text-accent">
                RADYEN
              </span>
              <span className="text-accent text-[10px] md:text-xs font-semibold tracking-[0.25em] -mt-1">
                CONSULT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.children ? (
                  // Dropdown trigger
                  <button
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg",
                      isParentActive(item)
                        ? "text-accent"
                        : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  // Regular link
                  <Link
                    to={item.href}
                    className={cn(
                      "nav-link px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg block",
                      isActive(item.href)
                        ? "text-accent"
                        : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown menu */}
                {item.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl p-2 min-w-[200px] shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                            isActive(child.href)
                              ? "text-accent bg-accent/10"
                              : "text-foreground/80 hover:text-foreground hover:bg-secondary/50"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+22507790303"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+225 07 79 03 03 03</span>
            </a>
            <Link to="/contact">
              <Button variant="copper" size="default" className="btn-ripple">
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={cn(
                  "absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen && "rotate-45 translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
                )}
              />
            </div>
          </Button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background/98 backdrop-blur-xl transition-all duration-500 flex flex-col",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
        style={{ top: 0 }}
      >
        {/* Mobile Menu Content */}
        <div className="flex-1 overflow-y-auto pt-24 pb-8 px-6">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={cn(
                  "transition-all duration-500",
                  isMobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-4 text-lg font-medium rounded-xl transition-all duration-300",
                        isParentActive(item)
                          ? "text-accent bg-accent/10"
                          : "text-foreground hover:bg-secondary/50"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-300",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        openDropdown === item.label ? "max-h-96 mt-1" : "max-h-0"
                      )}
                    >
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={cn(
                              "block px-4 py-3 text-base rounded-lg transition-all duration-200",
                              isActive(child.href)
                                ? "text-accent bg-accent/5"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-4 text-lg font-medium rounded-xl transition-all duration-300",
                      isActive(item.href)
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:bg-secondary/50"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Contact Info */}
          <div
            className={cn(
              "mt-8 pt-8 border-t border-border/30 space-y-4 transition-all duration-500",
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <a
              href="tel:+22507790303"
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors py-2"
            >
              <Phone className="w-5 h-5" />
              <span>+225 07 79 03 03 03</span>
            </a>
            <a
              href="mailto:radyenconsult@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors py-2"
            >
              <Mail className="w-5 h-5" />
              <span>radyenconsult@gmail.com</span>
            </a>
            <Link to="/contact" className="block pt-4">
              <Button variant="copper" className="w-full" size="lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
