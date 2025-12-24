import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/expertise", label: "Notre expertise" },
  { href: "/references", label: "Nos références" },
  { href: "/contact", label: "Contact" },
];

const sectors = [
  { href: "/secteurs", label: "Bâtiment" },
  { href: "/secteurs", label: "Génie Civil" },
  { href: "/secteurs", label: "Ouvrages d'Art" },
  { href: "/secteurs", label: "Immobilier" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/20">
      {/* Main */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <span className="font-heading text-xl font-black text-foreground tracking-tighter group-hover:text-accent transition-colors">
                RADYEN
              </span>
              <span className="text-accent text-[9px] font-bold tracking-[0.3em] block -mt-0.5">
                CONSULT
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              Un groupe d'ingénierie tourné vers l'excellence technique
              et l'innovation.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted/30 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-foreground mb-4 tracking-wide uppercase">
              Liens
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-heading text-sm font-bold text-foreground mb-4 tracking-wide uppercase">
              Secteurs
            </h4>
            <ul className="space-y-2.5">
              {sectors.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-foreground mb-4 tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+22507790303"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +225 07 79 03 03 03
                </a>
              </li>
              <li>
                <a
                  href="mailto:radyenconsult@gmail.com"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  radyenconsult@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-muted-foreground text-sm font-medium">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>Abidjan, Riviera Bonoumin<br />Côte d'Ivoire</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border/20">
        <div className="container mx-auto px-6 py-5 space-y-2">
          <p className="text-muted-foreground text-xs text-center">
            © {new Date().getFullYear()} RADYEN CONSULT. Tous droits réservés.
          </p>
          <p className="text-muted-foreground/60 text-xs text-center">
            Design by{" "}
            <a 
              href="https://icon-sarl.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-medium"
            >
              ICON
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}