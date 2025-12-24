import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Landmark, CircleDot, Home } from "lucide-react";
import buildingImage from "@/assets/building-construction.jpg";
import bridgeImage from "@/assets/bridge-infrastructure.jpg";
import realEstateImage from "@/assets/real-estate.jpg";
import heroImage from "@/assets/hero-construction.jpg";

const sectors = [
  {
    icon: Building2,
    title: "Bâtiment",
    description:
      "Conception, études structurelles et suivi de construction pour tous types de bâtiments.",
    image: buildingImage,
  },
  {
    icon: Landmark,
    title: "Génie Civil",
    description:
      "Infrastructure routière, réseaux, fondations spéciales et ouvrages souterrains.",
    image: heroImage,
  },
  {
    icon: CircleDot,
    title: "Ouvrages d'Art",
    description:
      "Ponts, viaducs, passerelles et structures complexes en béton armé ou métallique.",
    image: bridgeImage,
  },
  {
    icon: Home,
    title: "Immobilier",
    description:
      "Promotion immobilière, villas de standing, aménagement et design d'intérieur.",
    image: realEstateImage,
  },
];

export function SectorsSection() {
  return (
    <section className="section-padding bg-secondary relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="copper-line w-12" />
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Nos secteurs d'activités
            </span>
            <div className="copper-line w-12" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nous exerçons nos activités au travers de{" "}
            <span className="text-gradient-copper">4 métiers</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Une expertise complète pour accompagner vos projets de la conception
            à la réalisation.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-card border border-border card-hover"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <sector.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/secteurs">
            <Button variant="copper" size="lg" className="group">
              Découvrir nos secteurs
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
