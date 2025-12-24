import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function CTASection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative">
        <div className={cn(
          "max-w-4xl mx-auto text-center transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 mb-10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-semibold tracking-wide">
              Prêt à démarrer votre projet ?
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 leading-tight">
            Confiez-nous vos projets{" "}
            <span className="text-gradient-copper">d'ingénierie</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Notre équipe d'experts est à votre disposition pour étudier vos
            besoins et vous proposer des solutions adaptées à vos projets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link to="/contact">
              <Button variant="copper" size="xl" className="group btn-ripple">
                Demander un devis
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:+22507790303">
              <Button variant="hero" size="xl" className="btn-ripple">
                <Phone className="w-5 h-5" />
                Nous appeler
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="tel:+22507790303"
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <span className="font-medium">+225 07 79 03 03 03</span>
            </a>
            <a
              href="mailto:radyenconsult@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <span className="font-medium">radyenconsult@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
