import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    description:
      "L'intégrité guide chacune de nos décisions, pour bâtir avec vous une relation de confiance durable.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Animés par une quête permanente d'excellence, nous offrons des solutions innovantes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "C'est ensemble, dans un esprit de collaboration authentique, que nous créons la différence.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "L'innovation au cœur de notre approche pour des solutions durables et performantes.",
  },
];

export function AboutSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-secondary/50 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Qui sommes-nous
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Votre partenaire de confiance en{" "}
              <span className="text-gradient-copper">ingénierie</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nous sommes un groupe d'ingénierie tourné vers l'excellence
              technique, l'expertise, et l'innovation au service de nos clients
              dans les domaines du bâtiment, Génie Civil et des ouvrages d'arts.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              RADYEN CONSULT mobilise en fonction des projets des experts de
              tous horizons avec une base fixe de profils rattachés en tant que
              consultants à la structure, intervenant en Côte d'Ivoire et à
              l'international.
            </p>

            <Link to="/qui-sommes-nous">
              <Button variant="copper" className="group">
                En savoir plus
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Right - Values Grid */}
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
  );
}
