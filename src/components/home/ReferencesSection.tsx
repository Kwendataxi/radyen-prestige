import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const references = [
  {
    title: "Charles de Gaulle Express",
    location: "France",
    date: "2017-2019",
    client: "SNCF Réseaux",
    description: "Lignes ferroviaires directes entre l'aéroport Roissy-CDG et Paris-Est.",
  },
  {
    title: "Métro d'Abidjan",
    location: "Côte d'Ivoire",
    date: "2023-2024",
    client: "SICMA",
    description: "Projet de construction du métro - 38 KM de lignes et 20 stations.",
  },
  {
    title: "ENS de San Pedro",
    location: "Côte d'Ivoire",
    date: "2023-2024",
    client: "MCA Côte d'Ivoire",
    description: "Construction de l'École Normale Supérieure de San Pedro.",
  },
  {
    title: "Les Sirènes d'Assinie",
    location: "Côte d'Ivoire",
    date: "2022",
    client: "Privé",
    description: "Promotion immobilière de 10 villas duplex haut standing.",
  },
];

export function ReferencesSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-padding bg-background relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={cn(
          "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                Nos références
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Projets d'envergure{" "}
              <span className="text-gradient-copper">internationale</span>
            </h2>

            <p className="text-muted-foreground">
              Une expertise reconnue sur des projets majeurs.
            </p>
          </div>

          <Link to="/references">
            <Button variant="outline" className="group shrink-0">
              Voir toutes nos références
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {references.map((ref, index) => (
            <div
              key={index}
              className={cn(
                "reference-card group transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${150 + index * 80}ms` }}
            >
              {/* Meta */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs">
                  <MapPin className="w-3 h-3" />
                  {ref.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary text-muted-foreground text-xs">
                  <Calendar className="w-3 h-3" />
                  {ref.date}
                </span>
              </div>

              <h3 className="font-heading text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {ref.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {ref.description}
              </p>

              <div className="text-xs">
                <span className="text-foreground/80">Client :</span>{" "}
                <span className="text-muted-foreground">{ref.client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}