import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductGrid from "@/components/home/ProductGrid";
import CategoriesSection from "@/components/home/CategoriesSection";
import PromotionBanner from "@/components/home/PromotionBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PromotionBanner />
        <ProductGrid 
          title="Nouveautés Gaming" 
          subtitle="Découvrez les derniers jeux et accessoires qui font sensation dans l'univers gaming"
        />
        <CategoriesSection />
        <ProductGrid 
          title="Meilleures Ventes" 
          subtitle="Les produits les plus populaires choisis par notre communauté de gamers"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
