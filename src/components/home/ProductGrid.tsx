import ProductCard from "./ProductCard";
import gameCapsule1 from "@/assets/game-capsule-1.jpg";
import gamingHeadset from "@/assets/gaming-headset.jpg";
import gamingKeyboard from "@/assets/gaming-keyboard.jpg";

const mockProducts = [
  {
    id: "1",
    title: "Cyberpunk 2077 - Édition Complète",
    price: 89,
    originalPrice: 149,
    image: gameCapsule1,
    rating: 4.5,
    reviewCount: 1524,
    discount: 40,
    badge: "sale" as const,
    category: "Jeux PC"
  },
  {
    id: "2",
    title: "Casque Gaming RGB Pro X",
    price: 129,
    image: gamingHeadset,
    rating: 4.8,
    reviewCount: 342,
    badge: "popular" as const,
    category: "Accessoires"
  },
  {
    id: "3",
    title: "Clavier Mécanique RGB Elite",
    price: 189,
    originalPrice: 259,
    image: gamingKeyboard,
    rating: 4.7,
    reviewCount: 678,
    discount: 27,
    badge: "new" as const,
    category: "Périphériques"
  },
  {
    id: "4",
    title: "Call of Duty - Modern Warfare III",
    price: 119,
    image: gameCapsule1,
    rating: 4.3,
    reviewCount: 2156,
    badge: "popular" as const,
    category: "Jeux PC"
  },
  {
    id: "5",
    title: "Souris Gaming Wireless Pro",
    price: 79,
    originalPrice: 99,
    image: gamingHeadset,
    rating: 4.6,
    reviewCount: 543,
    discount: 20,
    badge: "sale" as const,
    category: "Accessoires"
  },
  {
    id: "6",
    title: "Pack Gaming Starter",
    price: 299,
    originalPrice: 399,
    image: gamingKeyboard,
    rating: 4.4,
    reviewCount: 234,
    discount: 25,
    badge: "new" as const,
    category: "Packs"
  }
];

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products?: typeof mockProducts;
}

const ProductGrid = ({ 
  title, 
  subtitle, 
  products = mockProducts.slice(0, 6) 
}: ProductGridProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-gaming font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;