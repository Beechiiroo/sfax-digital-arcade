import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Timer, Gift, Zap } from "lucide-react";

const PromotionBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-accent-foreground/10 rounded-full flex items-center justify-center animate-float">
              <Gift className="h-8 w-8 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent-foreground">
                Vente Flash Gaming
              </h3>
              <p className="text-accent-foreground/80">
                Jusqu'à 70% de réduction sur une sélection de produits
              </p>
            </div>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-accent-foreground">
              <Timer className="h-5 w-5" />
              <span className="font-semibold">Se termine dans :</span>
            </div>
            <div className="flex gap-2">
              {[
                { label: "H", value: timeLeft.hours },
                { label: "M", value: timeLeft.minutes },
                { label: "S", value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={item.label} className="flex items-center">
                  <div className="bg-accent-foreground text-accent px-3 py-2 rounded-lg font-bold min-w-[50px] text-center">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-accent-foreground text-sm ml-1 mr-2">
                    {item.label}
                  </span>
                  {index < 2 && (
                    <span className="text-accent-foreground font-bold mx-1">:</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 border-0 whitespace-nowrap"
          >
            <Zap className="h-5 w-5 mr-2" />
            Voir les Offres
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;