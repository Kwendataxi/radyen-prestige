import { Layout } from "@/components/layout/Layout";
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

export default function Secteurs() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Nos métiers
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Secteurs d'Activités
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Nous exerçons nos activités au travers de 4 métiers
              complémentaires pour accompagner vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative rounded-2xl overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                {/* Floating icon */}
                <div className="absolute bottom-6 left-6 w-16 h-16 rounded-xl bg-accent/90 backdrop-blur-sm flex items-center justify-center">
                  <sector.icon className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {sector.title}
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {sector.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {sector.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
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
          ))}
        </div>
      </section>
    </Layout>
  );
}
