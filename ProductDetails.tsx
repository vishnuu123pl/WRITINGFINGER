import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, MapPin, ShieldCheck, Star, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { items } from '@/data/mockData';

const ProductDetails = () => {
  const { id } = useParams();
  const item = items.find((i) => i.id === id) || items[0];
  const priceLabel = item.priceType === 'free' ? 'Free' : item.priceType === 'rent' ? `₹${item.price}/day` : `₹${item.price}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link to="/browse" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to listings
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Image */}
          <div className="glass-card aspect-square flex items-center justify-center text-6xl rounded-xl">
            {item.category === 'books' ? '📚' : item.category === 'calculators' ? '🧮' : item.category === 'electronics' ? '💻' : item.category === 'lab' ? '🔬' : '🏠'}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-md bg-accent/10 text-accent text-xs font-semibold uppercase">
                  {item.priceType === 'rent' ? 'For Rent' : item.priceType === 'sell' ? 'For Sale' : 'Free'}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-secondary text-muted-foreground text-xs">{item.condition}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{item.title}</h1>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-accent">{priceLabel}</span>
              {item.deposit > 0 && (
                <span className="text-sm text-muted-foreground">+ ₹{item.deposit} deposit</span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">{item.description}</p>

            {/* Seller */}
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-lg font-bold text-foreground">
                {item.seller.name[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{item.seller.name}</span>
                  {item.seller.verified && <ShieldCheck className="w-4 h-4 text-accent" />}
                </div>
                <p className="text-xs text-muted-foreground">{item.seller.year} · {item.seller.department}</p>
              </div>
              <div className="flex items-center gap-1 text-accent text-sm">
                <Star className="w-4 h-4 fill-accent" />
                {item.seller.rating}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" /> {item.location} · {item.distance} away
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <Link
                to="/chat"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-orange-light transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Chat with Owner
              </Link>
              <Link
                to="/payment"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary text-foreground font-semibold hover:bg-navy-light transition-colors border border-border/50"
              >
                <Send className="w-5 h-5" /> Request Item
              </Link>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Heart className="w-4 h-4" /> Save
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
