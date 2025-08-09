import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="text-2xl font-gaming font-bold bg-gradient-primary bg-clip-text text-transparent">
              SFAX STORE
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Votre boutique gaming de référence en Tunisie. Découvrez les derniers jeux, 
              accessoires et composants pour une expérience gaming exceptionnelle.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Liens Rapides
            </h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Catalogue
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Promotions
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Nouveautés
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Bestsellers
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Mon Compte
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Support Client
            </h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Centre d'Aide
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Livraison & Retours
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Garantie
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Nous Contacter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de Confidentialité
              </a>
            </nav>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Restez Connecté
            </h3>
            <p className="text-muted-foreground text-sm">
              Inscrivez-vous pour recevoir nos offres exclusives et les dernières nouveautés gaming.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Votre email" 
                className="bg-card border-border/50"
              />
              <Button variant="default">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+216 74 XXX XXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@sfaxstore.tn</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Sfax, Tunisie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Sfax Store. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;