import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";

function AnimatedStat({ value, label, suffix = "", delay = 0 }: { value: number; label: string; suffix?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div 
      ref={ref}
      className="text-center md:text-left opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Infrastructure engineering project"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      {/* Decorative Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-pulse-soft" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card mb-10 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide">
              Ingénierie • Bâtiment • Génie Civil • Ouvrages d'Art
            </span>
          </div>

          {/* Main Heading with Staggered Animation */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8">
            <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Un groupe d'ingénierie
            </span>
            <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              tourné vers{" "}
              <span className="text-gradient-copper">l'excellence</span>
            </span>
            <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              technique et l'innovation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Au service de nos clients dans les domaines du bâtiment, génie civil
            et des ouvrages d'art en Côte d'Ivoire et à l'international.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <Link to="/expertise">
              <Button variant="copper" size="xl" className="group btn-ripple">
                Nos expertises
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="btn-ripple">
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <AnimatedStat value={20} suffix="+" label="Projets réalisés" delay={600} />
            <AnimatedStat value={8} suffix="+" label="Années d'expérience" delay={700} />
            <AnimatedStat value={15} suffix="+" label="Experts qualifiés" delay={800} />
            <AnimatedStat value={5} suffix="" label="Pays d'intervention" delay={900} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
        <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Découvrir</span>
        <ChevronDown className="w-6 h-6 text-accent animate-bounce" />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
