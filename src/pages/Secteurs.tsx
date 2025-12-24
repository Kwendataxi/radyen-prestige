import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Landmark, CircleDot, Home } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ImageSkeleton } from "@/components/ui/image-skeleton";
import { cn } from "@/lib/utils";
import buildingImage from "@/assets/building-construction.jpg";
import bridgeImage from "@/assets/bridge-infrastructure.jpg";
import realEstateImage from "@/assets/real-estate.jpg";
import heroImage from "@/assets/hero-construction.jpg";

const sectors = [
  {
    icon: Building2,
    title: "Bâtiment",
    description:
      "Conception, études structurelles et suivi de construction pour tous types de bâtiments résidentiels, tertiaires et industriels.",
    image: buildingImage,
    features: [
      "Études structurelles béton armé et métallique",
      "Suivi et contrôle des travaux",
      "Réhabilitation et confortement",
      "Design d'intérieur et aménagement",
    ],
  },
  {
    icon: Landmark,
    title: "Génie Civil",
    description:
      "Infrastructure routière, réseaux, fondations spéciales et ouvrages souterrains pour les grands projets d'aménagement.",
    image: heroImage,
    features: [
      "Infrastructures routières",
      "Fondations profondes et spéciales",
      "Ouvrages souterrains",
      "Terrassement et VRD",
    ],
  },
  {
    icon: CircleDot,
    title: "Ouvrages d'Art",
    description:
      "Ponts, viaducs, passerelles et structures complexes en béton armé, béton précontraint ou métallique.",
    image: bridgeImage,
    features: [
      "Ponts et viaducs",
      "Passerelles piétonnes",
      "Murs de soutènement",
      "Estacades et tabliers",
    ],
  },
  {
    icon: Home,
    title: "Immobilier",
    description:
      "Promotion immobilière, villas de standing, aménagement et design d'intérieur pour des projets résidentiels haut de gamme.",
    image: realEstateImage,
    features: [
      "Promotion immobilière",
      "Villas et résidences de standing",
      "Aménagement intérieur",
      "Architecture et paysagisme",
    ],
  },
];

function SectorCard({ sector, index }: { sector: typeof sectors[0]; index: number }) {
  const isEven = index % 2 === 0;
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ 
    direction: isEven ? 'left' : 'right',
    delay: 100
  });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ 
    direction: 'up',
    delay: 200
  });
  const { ref: iconRef, isVisible: iconVisible } = useScrollReveal({ 
    direction: 'none',
    delay: 400
  });

  return (
    <div className={cn(
      "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
      !isEven ? "lg:flex-row-reverse" : ""
    )}>
      {/* Image */}
      <div
        ref={imageRef}
        className={cn(
          "relative rounded-3xl overflow-hidden",
          !isEven ? "lg:order-2" : "",
          "transition-all duration-1000 ease-out",
          imageVisible 
            ? "opacity-100 translate-x-0" 
            : isEven 
              ? "opacity-0 -translate-x-12" 
              : "opacity-0 translate-x-12"
        )}
      >
        <ImageSkeleton
          src={sector.image}
          alt={sector.title}
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
          aspectRatio="4/3"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />

        {/* Floating icon */}
        <div 
          ref={iconRef}
          className={cn(
            "absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent flex items-center justify-center shadow-lg",
            "transition-all duration-700 ease-out",
            iconVisible 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-75"
          )}
        >
          <sector.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-foreground" />
        </div>
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className={cn(
          !isEven ? "lg:order-1" : "",
          "transition-all duration-1000 ease-out",
          contentVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-12"
        )}
      >
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 title-underline">
          {sector.title}
        </h2>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-medium mt-6">
          {sector.description}
        </p>

        <ul className="space-y-2.5 mb-6">
          {sector.features.map((feature, featureIndex) => (
            <li 
              key={featureIndex} 
              className={cn(
                "flex items-center gap-3 p-2.5 rounded-lg transition-all duration-500 hover:bg-secondary/50",
                contentVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-4"
              )}
              style={{ transitionDelay: `${(featureIndex + 1) * 100 + 300}ms` }}
            >
              <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
            </li>
          ))}
        </ul>

        <Link to="/references">
          <Button variant="copper" className="group">
            Voir nos réalisations
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Secteurs() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-secondary overflow-hidden">
        <div className="section-container">
          <div 
            ref={heroRef}
            className={cn(
              "max-w-3xl transition-all duration-1000",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent rounded-full" />
              <span className="label-premium text-accent">
                Nos métiers
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 title-underline">
              <span className="text-gradient-modern">Secteurs</span> d'Activités
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl font-medium leading-relaxed mt-6">
              Nous exerçons nos activités au travers de 4 métiers
              complémentaires pour accompagner vos projets.
            </p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      </section>

      {/* Sectors Detail */}
      <section className="section-py-lg bg-background">
        <div className="section-container space-y-20 sm:space-y-28 lg:space-y-32">
          {sectors.map((sector, index) => (
            <SectorCard key={index} sector={sector} index={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
