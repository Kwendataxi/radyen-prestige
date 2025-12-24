import { Layout } from "@/components/layout/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Dr. Amadou Koné",
    role: "Directeur Général",
    specialty: "Ingénieur Structures",
    bio: "Expert en ouvrages d'art et grands projets d'infrastructure avec plus de 20 ans d'expérience.",
    linkedin: "#",
    email: "a.kone@radyenconsult.com",
  },
  {
    name: "Fatou Diallo",
    role: "Directrice Technique",
    specialty: "Ingénieur Génie Civil",
    bio: "Spécialiste en conception structurelle et réhabilitation de bâtiments complexes.",
    linkedin: "#",
    email: "f.diallo@radyenconsult.com",
  },
  {
    name: "Ibrahim Traoré",
    role: "Chef de Projets",
    specialty: "Architecte DPLG",
    bio: "Créatif et méthodique, il coordonne les projets de design d'intérieur et d'architecture.",
    linkedin: "#",
    email: "i.traore@radyenconsult.com",
  },
  {
    name: "Mariama Bah",
    role: "Responsable Études",
    specialty: "Ingénieur Béton Armé",
    bio: "Expertise pointue en calcul de structures et optimisation des ouvrages.",
    linkedin: "#",
    email: "m.bah@radyenconsult.com",
  },
  {
    name: "Seydou Coulibaly",
    role: "Directeur Commercial",
    specialty: "Business Developer",
    bio: "Développement stratégique et relations clients pour les grands comptes.",
    linkedin: "#",
    email: "s.coulibaly@radyenconsult.com",
  },
  {
    name: "Aïssatou Sow",
    role: "Responsable Qualité",
    specialty: "Ingénieur QSE",
    bio: "Garantit l'excellence opérationnelle et le respect des normes internationales.",
    linkedin: "#",
    email: "a.sow@radyenconsult.com",
  },
];

function TeamCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "group relative bg-card rounded-2xl overflow-hidden border border-border/30",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:shadow-lg hover:border-accent/30",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Photo placeholder with gradient */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-background/80" />
        
        {/* Initials placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-accent/20 font-heading">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>

        {/* Hover overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-accent/10 backdrop-blur-sm",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          )}
        />

        {/* Social links - appear on hover */}
        <div
          className={cn(
            "absolute bottom-4 left-4 right-4 flex gap-2",
            "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0",
            "transition-all duration-500 ease-out"
          )}
        >
          <a
            href={member.linkedin}
            className="w-10 h-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label={`LinkedIn de ${member.name}`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="w-10 h-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label={`Email de ${member.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-accent font-medium text-sm mb-1">{member.role}</p>
        <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3">
          {member.specialty}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export default function Equipe() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef}
            className={cn(
              "max-w-4xl transition-all duration-1000",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Notre équipe
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Les Experts RADYEN
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl font-medium">
              Une équipe pluridisciplinaire d'ingénieurs et d'architectes passionnés,
              unis par l'excellence et l'innovation.
            </p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rejoignez l'Aventure
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Nous recherchons toujours des talents passionnés pour renforcer notre équipe.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </Layout>
  );
}
