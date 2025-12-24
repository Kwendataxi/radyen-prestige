import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Building } from "lucide-react";

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
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Nos références
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Des projets d'envergure{" "}
              <span className="text-gradient-copper">internationale</span>
            </h2>

            <p className="text-muted-foreground text-lg">
              Une expertise reconnue sur des projets majeurs en France, en Côte
              d'Ivoire et au Mali.
            </p>
          </div>

          <Link to="/references">
            <Button variant="outline" size="lg" className="group shrink-0">
              Voir toutes nos références
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* References Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border card-hover"
            >
              {/* Reference Number */}
              <div className="absolute top-6 right-6 font-heading text-6xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                {ref.id}
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    <MapPin className="w-3 h-3" />
                    {ref.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                    <Calendar className="w-3 h-3" />
                    {ref.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                    <Building className="w-3 h-3" />
                    {ref.type}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {ref.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {ref.description}
                </p>

                <div className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Client :</span>{" "}
                  {ref.client}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
