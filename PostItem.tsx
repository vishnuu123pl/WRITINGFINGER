import { useState } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { categories } from '@/data/mockData';

const PostItem = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    priceType: 'rent',
    price: '',
    condition: 'Good',
    description: '',
    deposit: '',
    location: '',
  });

  const update = (field: string, value: string) => setFormData({ ...formData, [field]: value });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-foreground mb-8">Post an Item</h1>

          <div className="space-y-6">
            {/* Images */}
            <div className="glass-card p-8 flex flex-col items-center justify-center border-2 border-dashed border-border hover:border-accent/40 transition-colors cursor-pointer rounded-xl">
              <Upload className="w-8 h-8 text-muted-foreground mb-3" />
              <p className="text-muted-foreground text-sm">Drop images or click to upload</p>
              <p className="text-muted-foreground text-xs mt-1">Up to 5 images, max 5MB each</p>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => update('title', e.target.value)}
                placeholder="e.g., Engineering Mathematics Textbook"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <div className="grid grid-cols-3 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => update('category', cat.id)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${
                      formData.category === cat.id ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price type */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Listing Type</label>
              <div className="flex gap-2">
                {['rent', 'sell', 'free'].map((type) => (
                  <button
                    key={type}
                    onClick={() => update('priceType', type)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-medium capitalize transition-all ${
                      formData.priceType === type ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            {formData.priceType !== 'free' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {formData.priceType === 'rent' ? 'Price per day (₹)' : 'Sell price (₹)'}
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => update('price', e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                {formData.priceType === 'rent' && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Security Deposit (₹)</label>
                    <input
                      type="number"
                      value={formData.deposit}
                      onChange={(e) => update('deposit', e.target.value)}
                      placeholder="Optional"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Condition */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Condition</label>
              <div className="flex gap-2">
                {['Like New', 'Good', 'Fair'].map((c) => (
                  <button
                    key={c}
                    onClick={() => update('condition', c)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      formData.condition === c ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => update('description', e.target.value)}
                rows={4}
                placeholder="Describe your item..."
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
              />
            </div>

            <button className="w-full py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-orange-light transition-colors">
              Post Item
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PostItem;

