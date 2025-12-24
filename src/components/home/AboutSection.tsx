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
    <section ref={sectionRef} className="section-py-md bg-background relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-accent rounded-full" />
              <span className="label-premium text-accent">
                Qui sommes-nous
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground mb-5 leading-tight">
              Votre partenaire en{" "}
              <span className="text-gradient-accent">ingénierie</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4 font-medium text-sm sm:text-base">
              Nous sommes un groupe d'ingénierie tourné vers l'excellence
              technique, l'expertise, et l'innovation au service de nos clients
              dans les domaines du bâtiment, Génie Civil et des ouvrages d'arts.
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">
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
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <value.icon className="w-4 h-4 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-semibold text-foreground mb-1.5">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-medium">
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