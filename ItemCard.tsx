import { Link } from 'react-router-dom';
import { MapPin, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Item } from '@/data/mockData';

const ItemCard = ({ item, index = 0 }: { item: Item; index?: number }) => {
  const priceLabel = item.priceType === 'free' ? 'Free' : item.priceType === 'rent' ? `₹${item.price}/day` : `₹${item.price}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link to={`/item/${item.id}`} className="block glass-card-hover group">
        {/* Image placeholder */}
        <div className="aspect-[4/3] bg-secondary rounded-t-xl flex items-center justify-center relative overflow-hidden">
          <span className="text-4xl">{item.category === 'books' ? '📚' : item.category === 'calculators' ? '🧮' : item.category === 'electronics' ? '💻' : item.category === 'lab' ? '🔬' : '🏠'}</span>
          <button
            onClick={(e) => { e.preventDefault(); }}
            className="absolute top-3 right-3 p-2 rounded-full bg-background/60 backdrop-blur-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <Heart className="w-4 h-4" />
          </button>
          {item.priceType === 'free' && (
            <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-success text-success-foreground text-xs font-semibold">
              FREE
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2 group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-accent font-bold text-lg">{priceLabel}</span>
            <span className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">{item.condition}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{item.distance}</span>
            <span className="flex items-center gap-1">
              {item.seller.verified && <ShieldCheck className="w-3 h-3 text-accent" />}
              {item.seller.name.split(' ')[0]}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ItemCard;
