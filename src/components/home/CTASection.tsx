import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function CTASection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy" />
      
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        <div className={cn(
          "max-w-2xl mx-auto text-center transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-accent text-xs font-medium tracking-wide">
              Prêt à démarrer ?
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Confiez-nous vos projets{" "}
            <span className="text-gradient-copper">d'ingénierie</span>
          </h2>

          <p className="text-muted-foreground mb-10 leading-relaxed">
            Notre équipe d'experts est à votre disposition pour étudier vos
            besoins et vous proposer des solutions adaptées.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact">
              <Button variant="copper" size="lg" className="group">
                Demander un devis
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <a href="tel:+22507790303">
              <Button variant="outline" size="lg">
                Nous appeler
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}