import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: number;
  badge?: "new" | "sale" | "popular";
  category: string;
}

const ProductCard = ({
  title,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  discount,
  badge,
  category
}: ProductCardProps) => {
  return (
    <div className="product-capsule group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              badge === 'sale' ? 'badge-sale' : 
              badge === 'new' ? 'badge-new' : 'badge-popular'
            }`}>
              {badge === 'sale' && discount ? `-${discount}%` : 
               badge === 'new' ? 'NOUVEAU' : 'POPULAIRE'}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/20 hover:bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="purchase" size="sm" className="flex-1">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Acheter
          </Button>
          <Button variant="outline" size="sm">
            Voir
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <div className="text-xs text-muted-foreground uppercase tracking-wide">
          {category}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) 
                    ? 'text-warning fill-warning' 
                    : 'text-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              {price} TND
            </span>
            {originalPrice && (
              <span className="price-original">
                {originalPrice} TND
              </span>
            )}
          </div>
          
          {discount && (
            <div className="price-tag">
              -{discount}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;