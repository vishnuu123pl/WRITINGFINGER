import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/data/mockData';

const CategoriesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Browse Categories</h2>
            <p className="text-muted-foreground text-sm mt-1">Find what you need on campus</p>
          </div>
          <Link to="/browse" className="text-accent text-sm font-medium hover:underline">View all →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/browse?cat=${cat.id}`}
                className="glass-card-hover flex flex-col items-center p-6 text-center"
              >
                <span className="text-3xl mb-3">{cat.icon}</span>
                <h3 className="font-semibold text-foreground text-sm">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cat.count} items</p>
                <p className="text-xs text-accent mt-1">From ₹{cat.startingPrice}/day</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
