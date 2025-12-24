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
        "hover:-translate-y-1 hover:shadow-lg hover:border-accent/20",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Photo placeholder with gradient */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-background/90" />
        
        {/* Initials placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-accent/30 bg-card/50 backdrop-blur-sm flex items-center justify-center">
            <span className="text-3xl sm:text-4xl font-bold text-accent/50 font-heading">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>

        {/* Social links - appear on hover */}
        <div
          className={cn(
            "absolute bottom-3 left-3 right-3 flex gap-2",
            "opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0",
            "transition-all duration-400 ease-out"
          )}
        >
          <a
            href={member.linkedin}
            className="w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label={`LinkedIn de ${member.name}`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label={`Email de ${member.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-1 tracking-tight">
          {member.name}
        </h3>
        <p className="text-gradient-accent font-bold text-xs sm:text-sm mb-0.5">{member.role}</p>
        <p className="text-muted-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2.5">
          {member.specialty}
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-medium line-clamp-3">
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
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-secondary overflow-hidden">
        <div className="section-container">
          <div
            ref={heroRef}
            className={cn(
              "max-w-3xl transition-all duration-1000",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent rounded-full" />
              <span className="label-premium text-accent">
                Notre équipe
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 title-underline">
              <span className="text-gradient-modern">Les Experts</span> RADYEN
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl font-medium leading-relaxed mt-6">
              Une équipe pluridisciplinaire d'ingénieurs et d'architectes passionnés,
              unis par l'excellence et l'innovation.
            </p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      </section>

      {/* Team Grid */}
      <section className="section-py-md bg-background">
        <div className="section-container">
          <div className="grid-responsive-3 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values CTA */}
      <section className="section-py-sm bg-secondary">
        <div className="section-container text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 title-underline title-underline-center">
            <span className="text-gradient-accent">Rejoignez</span> l'Aventure
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-lg mx-auto mb-6 mt-6 font-medium">
            Nous recherchons toujours des talents passionnés pour renforcer notre équipe.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm sm:text-base transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </Layout>
  );
}
