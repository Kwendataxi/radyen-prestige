import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="text-accent text-sm font-medium">
              Prêt à démarrer votre projet ?
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Confiez-nous vos projets{" "}
            <span className="text-gradient-copper">d'ingénierie</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Notre équipe d'experts est à votre disposition pour étudier vos
            besoins et vous proposer des solutions adaptées à vos projets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/contact">
              <Button variant="copper" size="xl" className="group">
                Demander un devis
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:+22507790303">
              <Button variant="hero" size="xl">
                <Phone className="w-5 h-5" />
                Nous appeler
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="tel:+22507790303"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+225 07 79 03 03 03</span>
            </a>
            <a
              href="mailto:radyenconsult@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>radyenconsult@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
