import { Layout } from "@/components/layout/Layout";
import { Shield, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    description:
      "L'intégrité guide chacune de nos décisions, pour bâtir avec vous une relation de confiance durable et transparente. Nous nous engageons à maintenir les plus hauts standards éthiques dans toutes nos interactions.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Animés par une quête permanente d'excellence, nous vous offrons des solutions innovantes, pensées pour dépasser vos attentes. Notre équipe s'engage à livrer un travail de qualité supérieure.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "C'est ensemble, dans un esprit de collaboration authentique, que nous créons des solutions qui font la différence. Nous travaillons en étroite collaboration avec nos clients et partenaires.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "L'innovation est au cœur de notre approche pour proposer des solutions durables et performantes. Nous investissons continuellement dans les nouvelles technologies et méthodes.",
    color: "from-purple-500/20 to-purple-600/5",
  },
];

export default function Valeurs() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Notre ADN
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nos Valeurs
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Les valeurs qui guident notre engagement et façonnent notre
              excellence au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`relative p-8 md:p-10 rounded-2xl border border-border bg-gradient-to-br ${value.color} card-hover group`}
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative number */}
                <div className="absolute top-6 right-8 font-heading text-8xl font-bold text-accent/5">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed italic">
              "Notre engagement est de fournir une expertise technique de
              premier ordre, tout en maintenant les plus hauts standards
              d'intégrité et de professionnalisme."
            </blockquote>
            <div className="mt-8">
              <div className="font-heading font-semibold text-foreground">
                DJENEBA SAKO
              </div>
              <div className="text-muted-foreground text-sm">
                Gérante, RADYEN CONSULT
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
