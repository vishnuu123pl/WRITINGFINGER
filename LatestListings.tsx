import { Link } from 'react-router-dom';
import { items } from '@/data/mockData';
import ItemCard from './ItemCard';

const LatestListings = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Latest Listings</h2>
            <p className="text-muted-foreground text-sm mt-1">Fresh items from your campus</p>
          </div>
          <Link to="/browse" className="text-accent text-sm font-medium hover:underline">See all →</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestListings;

