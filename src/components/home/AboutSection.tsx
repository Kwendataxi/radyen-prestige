import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Users, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

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
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="copper-line-left w-16" />
              <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">
                Qui sommes-nous
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Votre partenaire de confiance en{" "}
              <span className="text-gradient-copper">ingénierie</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nous sommes un groupe d'ingénierie tourné vers l'excellence
              technique, l'expertise, et l'innovation au service de nos clients
              dans les domaines du bâtiment, Génie Civil et des ouvrages d'arts.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              RADYEN CONSULT mobilise en fonction des projets des experts de
              tous horizons avec une base fixe de profils rattachés en tant que
              consultants à la structure, intervenant en Côte d'Ivoire et à
              l'international.
            </p>

            <Link to="/qui-sommes-nous">
              <Button variant="copper" size="lg" className="group btn-ripple">
                En savoir plus
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Right - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className={cn(
                  "stat-card group transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
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
