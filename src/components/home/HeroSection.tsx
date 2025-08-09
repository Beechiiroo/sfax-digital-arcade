import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const heroSlides = [
  {
    id: 1,
    title: "Découvrez l'Univers Gaming",
    subtitle: "Les derniers jeux et accessoires gaming",
    description: "Plongez dans notre sélection exclusive de jeux vidéo et d'accessoires gaming de qualité professionnelle.",
    image: heroImage,
    cta: "Explorer le Catalogue",
    price: "À partir de 29 TND",
    badge: "Nouveautés"
  },
  {
    id: 2,
    title: "Mega Sale Gaming",
    subtitle: "Jusqu'à -70% sur une sélection",
    description: "Profitez de réductions exceptionnelles sur nos jeux et accessoires gaming les plus populaires.",
    image: heroImage,
    cta: "Voir les Promos",
    price: "Dès 19 TND",
    badge: "Promotion"
  },
  {
    id: 3,
    title: "Setup Gaming Complet",
    subtitle: "Tout pour votre configuration",
    description: "Créez votre setup gaming parfait avec notre sélection d'accessoires et périphériques premium.",
    image: heroImage,
    cta: "Configurer",
    price: "Pack dès 149 TND",
    badge: "Pack Complet"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${currentHero.image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex">
            <span className={`px-4 py-2 rounded-full text-sm font-bold ${
              currentHero.badge === 'Promotion' ? 'badge-sale' : 
              currentHero.badge === 'Nouveautés' ? 'badge-new' : 'badge-popular'
            }`}>
              {currentHero.badge}
            </span>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-gaming font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              {currentHero.title}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-accent">
              {currentHero.subtitle}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            {currentHero.description}
          </p>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-foreground">
              {currentHero.price}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gaming" size="xl" className="group">
              {currentHero.cta}
              <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Voir la Démo
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary shadow-glow' 
                : 'bg-background/40 hover:bg-background/60'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;