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
    description: "Conception et suivi de construction",
    image: buildingImage,
  },
  {
    icon: Landmark,
    title: "Génie Civil",
    description: "Infrastructure et réseaux",
    image: heroImage,
  },
  {
    icon: CircleDot,
    title: "Ouvrages d'Art",
    description: "Ponts et structures complexes",
    image: bridgeImage,
  },
  {
    icon: Home,
    title: "Immobilier",
    description: "Promotion et aménagement",
    image: realEstateImage,
  },
];

export function SectorsSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-py-md bg-secondary/30 relative">
      <div className="section-container">
        {/* Header */}
        <div className={cn(
          "text-center max-w-xl mx-auto mb-12 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent/50 rounded-full" />
            <span className="label-premium text-accent">
              Nos secteurs
            </span>
            <div className="w-8 h-0.5 bg-accent/50 rounded-full" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground mb-3">
            Nos <span className="text-gradient-accent">4 métiers</span>
          </h2>

          <p className="text-muted-foreground font-medium text-sm sm:text-base">
            Une expertise complète de la conception à la réalisation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid-responsive-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={cn(
                "sector-card group",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${150 + index * 80}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <div className="w-8 h-8 rounded-lg bg-accent/90 flex items-center justify-center mb-2.5">
                  <sector.icon className="w-4 h-4 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-10 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )} style={{ transitionDelay: '400ms' }}>
          <Link to="/secteurs">
            <Button variant="outline" className="group">
              Découvrir nos secteurs
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}