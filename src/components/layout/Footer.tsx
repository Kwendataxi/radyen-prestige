import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

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
    <footer className="bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="font-heading text-2xl font-bold text-foreground tracking-tight">
                RADYEN
              </span>
              <span className="text-accent text-sm font-medium tracking-widest block -mt-1">
                CONSULT
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Un groupe d'ingénierie tourné vers l'excellence technique,
              l'expertise, et l'innovation au service de nos clients.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">
              Nos Secteurs
            </h4>
            <ul className="space-y-3">
              {sectors.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+22507790303"
                  className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    +225 07 79 03 03 03
                    <br />
                    +225 27 22 28 81 20
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:radyenconsult@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>radyenconsult@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Abidjan, Riviera Bonoumin
                    <br />
                    Rue I87 - Lot 1040 - Îlot 77
                    <br />
                    Côte d'Ivoire
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} RADYEN CONSULT. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
