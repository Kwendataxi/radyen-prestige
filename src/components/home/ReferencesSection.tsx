import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Building } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const references = [
  {
    id: "01",
    title: "Charles de Gaulle Express – PASO",
    location: "France",
    date: "2017-2019",
    client: "SNCF Réseaux",
    type: "Infrastructure ferroviaire",
    description:
      "Lignes ferroviaires directes entre l'aéroport Roissy-CDG et Paris-Est sur 32 KM. Création d'un passage souterrain et 2 quais.",
  },
  {
    id: "02",
    title: "Métro d'Abidjan",
    location: "Côte d'Ivoire",
    date: "2023-2024",
    client: "SICMA",
    type: "Transport urbain",
    description:
      "Projet de construction du métro d'Abidjan - 38 KM de lignes et 20 stations. Suivi de l'exécution des travaux.",
  },
  {
    id: "03",
    title: "ENS de San Pedro",
    location: "Côte d'Ivoire",
    date: "2023-2024",
    client: "MCA Côte d'Ivoire",
    type: "Éducation",
    description:
      "Projet de construction de l'École Normale Supérieure de San Pedro. Maîtrise d'œuvre complète.",
  },
  {
    id: "04",
    title: "Les Sirènes d'Assinie",
    location: "Côte d'Ivoire",
    date: "2022",
    client: "Privé",
    type: "Immobilier",
    description:
      "Promotion immobilière de 10 villas duplex haut standing à Assinie. Études et exécution du projet.",
  },
];

export function ReferencesSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={cn(
          "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="copper-line-left w-16" />
              <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">
                Nos références
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Des projets d'envergure{" "}
              <span className="text-gradient-copper">internationale</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Une expertise reconnue sur des projets majeurs en France, en Côte
              d'Ivoire et au Mali.
            </p>
          </div>

          <Link to="/references">
            <Button variant="outline" size="lg" className="group shrink-0 hover-lift">
              Voir toutes nos références
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* References Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 rounded-2xl glass-card glass-card-hover transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Reference Number */}
              <div className="absolute top-6 right-6 font-heading text-7xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-500 select-none">
                {ref.id}
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    <MapPin className="w-3 h-3" />
                    {ref.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                    <Calendar className="w-3 h-3" />
                    {ref.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                    <Building className="w-3 h-3" />
                    {ref.type}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {ref.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {ref.description}
                </p>

                <div className="text-sm">
                  <span className="text-foreground font-semibold">Client :</span>{" "}
                  <span className="text-muted-foreground">{ref.client}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
