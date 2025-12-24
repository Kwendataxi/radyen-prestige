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
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        !isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div
        ref={imageRef}
        className={cn(
          "relative rounded-2xl overflow-hidden",
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
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />

        {/* Floating icon */}
        <div 
          ref={iconRef}
          className={cn(
            "absolute bottom-6 left-6 w-16 h-16 rounded-xl bg-accent/90 backdrop-blur-sm flex items-center justify-center",
            "transition-all duration-700 ease-out",
            iconVisible 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-75"
          )}
        >
          <sector.icon className="w-8 h-8 text-accent-foreground" />
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
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          {sector.title}
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-medium">
          {sector.description}
        </p>

        <ul className="space-y-3 mb-8">
          {sector.features.map((feature, featureIndex) => (
            <li 
              key={featureIndex} 
              className={cn(
                "flex items-center gap-3 transition-all duration-500",
                contentVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-4"
              )}
              style={{ transitionDelay: `${(featureIndex + 1) * 100 + 300}ms` }}
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-foreground">{feature}</span>
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
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div 
            ref={heroRef}
            className={cn(
              "max-w-4xl transition-all duration-1000",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Nos métiers
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Secteurs d'Activités
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl font-medium">
              Nous exerçons nos activités au travers de 4 métiers
              complémentaires pour accompagner vos projets.
            </p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      </section>

      {/* Sectors Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {sectors.map((sector, index) => (
            <SectorCard key={index} sector={sector} index={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
