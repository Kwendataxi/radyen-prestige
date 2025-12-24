import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
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
    ],
  },
  {
    href: "/secteurs",
    label: "Nos métiers",
    children: [
      { href: "/secteurs", label: "Secteurs" },
      { href: "/expertise", label: "Expertise" },
    ],
  },
  { href: "/references", label: "Références" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => location.pathname === href;
  const isParentActive = (item: NavItem) => 
    isActive(item.href) || item.children?.some(child => isActive(child.href));

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/20 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group relative z-10">
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-black text-foreground tracking-tighter transition-colors duration-300 group-hover:text-accent">
                RADYEN
              </span>
              <span className="text-accent text-[9px] font-bold tracking-[0.3em] -mt-0.5">
                CONSULT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors duration-300",
                      "font-heading",
                      isParentActive(item)
                        ? "text-accent"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "nav-link text-sm font-bold tracking-wide transition-colors duration-300",
                      "font-heading",
                      isActive(item.href)
                        ? "text-accent"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <div className="dropdown-content">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm font-bold rounded-md transition-colors duration-200",
                            "font-heading",
                            isActive(child.href)
                              ? "text-accent bg-accent/5"
                              : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
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

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/contact">
              <Button variant="copper" size="sm" className="text-sm font-bold">
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-5 h-4">
              <span
                className={cn(
                  "absolute left-0 top-0 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "rotate-45 translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
                )}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background/98 backdrop-blur-xl transition-all duration-500",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={cn(
                  "transition-all duration-500",
                  isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={cn(
                        "w-full flex items-center justify-between py-4 text-lg font-semibold transition-colors",
                        "font-heading",
                        isParentActive(item) ? "text-accent" : "text-foreground/80"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        openDropdown === item.label ? "max-h-48" : "max-h-0"
                      )}
                    >
                      <div className="pl-4 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={cn(
                              "block py-3 text-base font-medium transition-colors font-heading",
                              isActive(child.href) ? "text-accent" : "text-muted-foreground"
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
                      "block py-4 text-lg font-semibold transition-colors font-heading",
                      isActive(item.href) ? "text-accent" : "text-foreground/80"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-sm text-muted-foreground font-heading font-medium">Changer le thème</span>
              <ThemeToggle />
            </div>
            <Link to="/contact" className="block">
              <Button variant="copper" className="w-full font-semibold">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}