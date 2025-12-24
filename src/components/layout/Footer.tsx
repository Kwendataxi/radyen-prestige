import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";

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
    <footer className="bg-secondary/80 border-t border-border/30 backdrop-blur-sm">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="inline-block group">
              <span className="font-heading text-2xl font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">
                RADYEN
              </span>
              <span className="text-accent text-xs font-semibold tracking-[0.25em] block -mt-1">
                CONSULT
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Un groupe d'ingénierie tourné vers l'excellence technique,
              l'expertise, et l'innovation au service de nos clients.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6 text-sm tracking-wide uppercase">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6 text-sm tracking-wide uppercase">
              Nos Secteurs
            </h4>
            <ul className="space-y-3">
              {sectors.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6 text-sm tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+22507790303"
                  className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="pt-1">
                    +225 07 79 03 03 03
                    <br />
                    +225 27 22 28 81 20
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:radyenconsult@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="pt-1">radyenconsult@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="pt-1">
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
      <div className="border-t border-border/30">
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
