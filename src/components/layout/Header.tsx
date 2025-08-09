import { useState } from "react";
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-gaming font-bold bg-gradient-primary bg-clip-text text-transparent">
              SFAX STORE
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Catalogue
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Promotions
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Nouveautés
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher des jeux, accessoires..."
                className="pl-10 bg-card border-border/50 focus:border-primary"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>

            <Button variant="outline" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4 mr-2" />
              Connexion
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Rechercher..."
                  className="pl-10 bg-card border-border/50"
                />
              </div>
              <nav className="flex flex-col space-y-3">
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Accueil
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Catalogue
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Promotions
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Nouveautés
                </a>
              </nav>
              <Button variant="outline" className="self-start">
                <User className="h-4 w-4 mr-2" />
                Connexion
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;