import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Users, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    description: "L'intégrité guide chacune de nos décisions, pour bâtir une relation de confiance.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Une quête permanente d'excellence pour des solutions innovantes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Ensemble, dans un esprit de collaboration authentique.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "L'innovation au cœur de notre approche pour des solutions durables.",
  },
];

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-padding bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            {/* Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                Qui sommes-nous
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Votre partenaire en{" "}
              <span className="text-gradient-copper">ingénierie</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-5">
              Nous sommes un groupe d'ingénierie tourné vers l'excellence
              technique, l'expertise, et l'innovation au service de nos clients
              dans les domaines du bâtiment, Génie Civil et des ouvrages d'arts.
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              RADYEN CONSULT mobilise des experts de tous horizons, intervenant
              en Côte d'Ivoire et à l'international.
            </p>

            <Link to="/qui-sommes-nous">
              <Button variant="copper" className="group">
                En savoir plus
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>

          {/* Right - Values */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className={cn(
                  "value-card group",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ 
                  transitionDelay: `${150 + index * 80}ms`,
                  transitionDuration: '800ms'
                }}
              >
                <value.icon className="w-5 h-5 text-accent mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-heading text-base font-medium text-foreground mb-2">
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