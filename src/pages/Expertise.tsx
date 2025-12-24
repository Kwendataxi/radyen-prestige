import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileText,
  HardHat,
  Wrench,
  ClipboardCheck,
  PenTool,
  Eye,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: FileText,
    title: "Le conseil",
    description:
      "Accompagnement stratégique et technique pour optimiser vos projets d'infrastructure.",
  },
  {
    icon: ClipboardCheck,
    title: "Assistance technique à la Maîtrise d'ouvrage (ATMO)",
    description:
      "Support technique complet pour la gestion et le pilotage de vos projets.",
  },
  {
    icon: HardHat,
    title: "Maîtrise d'œuvre complète (MOE)",
    description:
      "Coordination et supervision intégrale de la conception à la réalisation.",
  },
  {
    icon: PenTool,
    title: "Conception et rénovation",
    description:
      "Études de conception en béton armé, béton précontraint et structures métalliques.",
  },
  {
    icon: Eye,
    title: "Études techniques",
    description:
      "Études APS, APD, PRO et EXE pour une maîtrise complète de vos projets.",
  },
  {
    icon: Wrench,
    title: "Contrôle et surveillance des travaux",
    description:
      "Suivi rigoureux pour garantir la qualité et le respect des délais.",
  },
];

const phases = [
  {
    title: "Phase Projet",
    items: [
      "Conception architecturale et paysagère",
      "Design d'intérieur",
      "Assistance technique à la conception et à la décision (ATMOE - ATMO)",
      "Expertise de dossiers d'études réalisés par tiers",
      "Pilotage de projet",
      "Études préliminaires de définition des ouvrages",
      "APS - APD - PRO - DCE",
      "Études d'exécution",
    ],
  },
  {
    title: "Phase Exécution",
    items: [
      "Études d'exécution - documents techniques",
      "Assistance technique au Maître d'ouvrage",
      "Contrôle des études d'exécution et travaux",
      "Expertise d'études et de réalisation",
      "Travaux d'exécution",
    ],
  },
  {
    title: "Phase Exploitation",
    items: ["Diagnostic", "Études de confortement"],
  },
];

export default function Expertise() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Nos compétences
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Notre Expertise
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              L'expertise de nos ingénieurs et techniciens qualifiés sont au
              service de vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="stat-card card-hover group p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <area.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos <span className="text-gradient-copper">Prestations</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Un accompagnement complet à chaque étape de votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-heading font-bold text-accent-foreground">
                    {index + 1}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {phase.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Vous avez un projet ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Notre équipe d'experts est prête à vous accompagner dans la
            réalisation de vos projets les plus ambitieux.
          </p>
          <Link to="/contact">
            <Button variant="copper" size="lg" className="group">
              Demander un devis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
