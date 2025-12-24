import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Building, ExternalLink } from "lucide-react";
import { useState } from "react";

const references = [
  {
    id: "01",
    title: "Charles de Gaulle Express – PASO",
    location: "France",
    date: "2017-2019",
    client: "SNCF Réseaux",
    partner: "SEGULA Technologie",
    type: "Ferroviaire",
    description:
      "Lignes ferroviaires directes entre l'aéroport Roissy-CDG et Paris-Est sur 32 KM. Création d'un passage souterrain et 2 quais à Paris Est.",
    mission: "Maîtrise d'œuvre - Conception et dimensionnement d'un ouvrage souterrain",
  },
  {
    id: "02",
    title: "Métro d'Abidjan",
    location: "Côte d'Ivoire",
    date: "2023-2024",
    client: "SICMA",
    partner: "INGEROP CI",
    type: "Transport",
    description:
      "Projet de construction du métro d'Abidjan - 38 KM de lignes et 20 stations.",
    mission: "Mission ponctuelle de maîtrise d'œuvre projet - Suivi de l'exécution des travaux",
  },
  {
    id: "03",
    title: "ENS de San Pedro",
    location: "Côte d'Ivoire",
    date: "2023-2024",
    client: "MCA Côte d'Ivoire",
    partner: "INGEROP CI",
    type: "Éducation",
    description:
      "Projet de construction de l'École Normale Supérieure de San Pedro.",
    mission: "Maîtrise d'œuvre complète - Études, contrôles techniques, management des équipes",
  },
  {
    id: "04",
    title: "ENS de Bouaké",
    location: "Côte d'Ivoire",
    date: "2023-2024",
    client: "MCA Côte d'Ivoire",
    partner: "INGEROP CI",
    type: "Éducation",
    description:
      "Projet de construction de l'École Normale Supérieure de Bouaké.",
    mission: "Maîtrise d'œuvre complète - Responsable QHSE",
  },
  {
    id: "05",
    title: "Les Sirènes d'Assinie",
    location: "Côte d'Ivoire",
    date: "2022",
    client: "Privé",
    partner: "IVOIRE STONE",
    type: "Immobilier",
    description:
      "Promotion immobilière de 10 villas duplex haut standing à Assinie.",
    mission: "Maîtrise d'œuvre générale - Étude d'optimisation des ouvrages béton armé",
  },
  {
    id: "06",
    title: "École Américaine ICSA",
    location: "Côte d'Ivoire",
    date: "2023-2024",
    client: "ICSA",
    partner: "INGEROP CI",
    type: "Éducation",
    description:
      "Projet de rénovation de l'école Américaine d'Abidjan (ICSA).",
    mission: "Conception - Études architecturales et structurelles",
  },
  {
    id: "07",
    title: "Collèges de Proximité",
    location: "Côte d'Ivoire",
    date: "2023-2024",
    client: "AFD",
    partner: "INGEROP CI",
    type: "Éducation",
    description:
      "Études d'alimentation en eau et en électricité des collèges de proximité sur l'ensemble du territoire Ivoirien (142 collèges).",
    mission: "Étude de connexion - Analyse et proposition de solutions",
  },
  {
    id: "08",
    title: "Bureaux GEXTEL CI",
    location: "Côte d'Ivoire",
    date: "2024",
    client: "GEXTEL CI",
    partner: "-",
    type: "Tertiaire",
    description:
      "Études d'ingénierie et travaux de construction/aménagement des nouveaux locaux de GEXTEL.",
    mission: "Ingénierie, conception et travaux d'aménagement",
  },
];

const filters = ["Tous", "France", "Côte d'Ivoire", "Mali"];
const typeFilters = ["Tous", "Ferroviaire", "Transport", "Éducation", "Immobilier", "Tertiaire"];

export default function References() {
  const [locationFilter, setLocationFilter] = useState("Tous");
  const [typeFilter, setTypeFilter] = useState("Tous");

  const filteredReferences = references.filter((ref) => {
    const locationMatch = locationFilter === "Tous" || ref.location === locationFilter;
    const typeMatch = typeFilter === "Tous" || ref.type === typeFilter;
    return locationMatch && typeMatch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="copper-line-left w-12" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Portfolio
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nos Références
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Découvrez nos projets d'envergure réalisés en France, en Côte
              d'Ivoire et à l'international.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-sm text-muted-foreground">Filtrer par pays :</span>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setLocationFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    locationFilter === filter
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-4">Type :</span>
            <div className="flex flex-wrap gap-2">
              {typeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTypeFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    typeFilter === filter
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* References Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredReferences.map((ref, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border card-hover"
              >
                {/* Reference Number */}
                <div className="absolute top-6 right-6 font-heading text-6xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                  {ref.id}
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      <MapPin className="w-3 h-3" />
                      {ref.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                      <Calendar className="w-3 h-3" />
                      {ref.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                      <Building className="w-3 h-3" />
                      {ref.type}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {ref.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {ref.description}
                  </p>

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="text-foreground font-medium">Mission :</span>{" "}
                    {ref.mission}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="text-foreground font-medium">Client :</span>{" "}
                      {ref.client}
                    </div>
                    {ref.partner !== "-" && (
                      <div>
                        <span className="text-foreground font-medium">Partenaire :</span>{" "}
                        {ref.partner}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredReferences.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Aucune référence ne correspond à vos critères de recherche.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
