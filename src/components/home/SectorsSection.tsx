import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Landmark, CircleDot, Home } from "lucide-react";
import buildingImage from "@/assets/building-construction.jpg";
import bridgeImage from "@/assets/bridge-infrastructure.jpg";
import realEstateImage from "@/assets/real-estate.jpg";
import heroImage from "@/assets/hero-construction.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

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
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="copper-line w-16" />
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">
              Nos secteurs d'activités
            </span>
            <div className="copper-line w-16" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nous exerçons nos activités au travers de{" "}
            <span className="text-gradient-copper">4 métiers</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Une expertise complète pour accompagner vos projets de la conception
            à la réalisation.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-2xl overflow-hidden bg-card border border-border/30 card-3d transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-accent/10 blur-2xl" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                  <sector.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-1000 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Link to="/secteurs">
            <Button variant="copper" size="lg" className="group btn-ripple">
              Découvrir nos secteurs
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
