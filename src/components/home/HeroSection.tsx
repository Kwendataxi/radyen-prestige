import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

function AnimatedStat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-2xl md:text-3xl font-bold text-accent mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <div className="font-label text-xs text-foreground/80">{label}</div>
    </div>
  );
}

export function HeroSection() {
  const { offset } = useParallax({ speed: 0.15, direction: 'down' });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px) scale(1.1)`, willChange: 'transform' }}
      >
        <img
          src={heroImage}
          alt="Infrastructure engineering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 opacity-0 animate-fade-in"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-label text-xs text-muted-foreground">
              Ingénierie • Bâtiment • Génie Civil
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Un groupe d'ingénierie
            </span>
            <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              tourné vers <span className="text-gradient-copper">l'excellence</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-base md:text-lg text-muted-foreground font-medium max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Au service de nos clients dans les domaines du bâtiment, génie civil
            et des ouvrages d'art en Côte d'Ivoire et à l'international.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-wrap gap-3 mb-16 opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Link to="/expertise">
              <Button variant="copper" size="lg" className="group">
                Nos expertises
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-4 gap-6 max-w-lg opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <AnimatedStat value={20} suffix="+" label="Projets" />
            <AnimatedStat value={8} suffix="+" label="Années" />
            <AnimatedStat value={15} suffix="+" label="Experts" />
            <AnimatedStat value={5} suffix="" label="Pays" />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}