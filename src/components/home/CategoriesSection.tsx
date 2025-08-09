import { Gamepad2, Headphones, Keyboard, Mouse, Monitor, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "games",
    name: "Jeux Vidéo",
    icon: Gamepad2,
    count: "2,340+",
    color: "bg-primary",
    description: "Les derniers jeux PC et console"
  },
  {
    id: "headsets",
    name: "Casques Gaming",
    icon: Headphones,
    count: "156+",
    color: "bg-accent",
    description: "Audio immersif pour gamers"
  },
  {
    id: "keyboards",
    name: "Claviers",
    icon: Keyboard,
    count: "89+",
    color: "bg-success",
    description: "Claviers mécaniques RGB"
  },
  {
    id: "mice",
    name: "Souris Gaming",
    icon: Mouse,
    count: "124+",
    color: "bg-warning",
    description: "Précision et performance"
  },
  {
    id: "monitors",
    name: "Écrans Gaming",
    icon: Monitor,
    count: "67+",
    color: "bg-destructive",
    description: "Haute fréquence et 4K"
  },
  {
    id: "components",
    name: "Composants PC",
    icon: Cpu,
    count: "234+",
    color: "bg-primary",
    description: "Cartes graphiques et processeurs"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-gaming font-bold mb-4">
            Catégories Populaires
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection organisée par catégories pour trouver exactement ce dont vous avez besoin
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="gaming-card group cursor-pointer p-6 text-center hover:scale-105 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${category.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`h-8 w-8 text-foreground group-hover:${category.color.replace('bg-', 'text-')} transition-colors`} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="text-xs font-bold text-accent">
                    {category.count} produits
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir Toutes les Catégories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;