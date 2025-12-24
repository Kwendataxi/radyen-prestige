import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/building-construction.jpg";

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    description:
      "L'intégrité guide chacune de nos décisions, pour bâtir avec vous une relation de confiance durable et transparente.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Animés par une quête permanente d'excellence, nous vous offrons des solutions innovantes, pensées pour dépasser vos attentes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "C'est ensemble, dans un esprit de collaboration authentique, que nous créons des solutions qui font la différence.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "L'innovation est au cœur de notre approche pour proposer des solutions durables et performantes.",
  },
];

const expertise = [
  "Conseil en ingénierie",
  "Assistance technique à la Maîtrise d'ouvrage (ATMO)",
  "Maîtrise d'œuvre complète (MOE)",
  "Conception et rénovation",
  "Études techniques (APS / APD / PRO-EXE)",
  "Contrôle et surveillance des travaux",
];

export default function QuiSommesNous() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Engineering project"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                À propos
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Qui sommes-nous
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Découvrez RADYEN CONSULT, votre partenaire de confiance en
              ingénierie et construction.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Un groupe d'ingénierie tourné vers{" "}
                <span className="text-gradient-copper">l'excellence</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nous sommes un groupe d'ingénierie tourné vers l'excellence
                technique, l'expertise, et l'innovation au service de nos
                clients dans les domaines du bâtiment, Génie Civil et des
                ouvrages d'arts.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                RADYEN CONSULT mobilise en fonction des projets des experts de
                tous horizons avec une base fixe de profils rattachés en tant
                que consultants à la structure. Notre équipe intervient en Côte
                d'Ivoire, en France, au Mali et dans toute l'Afrique de l'Ouest.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/expertise">
                <Button variant="copper" className="group">
                  Découvrir notre expertise
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="stat-card card-hover group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Projets réalisés" },
              { value: "8+", label: "Années d'expérience" },
              { value: "15+", label: "Experts qualifiés" },
              { value: "5", label: "Pays d'intervention" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
