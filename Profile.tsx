import { useState } from 'react';
import { Star, MapPin, ShieldCheck, Settings, Package, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ItemCard from '@/components/ItemCard';
import { items } from '@/data/mockData';

const tabs = [
  { id: 'listings', label: 'My Listings', icon: <Package className="w-4 h-4" /> },
  { id: 'rentals', label: 'Active Rentals', icon: <Clock className="w-4 h-4" /> },
  { id: 'reviews', label: 'Reviews', icon: <Star className="w-4 h-4" /> },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('listings');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Profile header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 flex flex-col md:flex-row items-center gap-6 mb-8"
        >
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-3xl font-bold text-accent">
            A
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h1 className="text-2xl font-bold text-foreground">Arjun Mehta</h1>
              <ShieldCheck className="w-5 h-5 text-accent" />
            </div>
            <p className="text-muted-foreground text-sm">3rd Year · Computer Science</p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-accent fill-accent" /> 4.8</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Hostel Block A</span>
              <span>12 items listed</span>
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2">
            <Settings className="w-4 h-4" /> Edit Profile
          </button>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'listings' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 3).map((item, i) => (
              <ItemCard key={item.id} item={item} index={i} />
            ))}
          </div>
        )}
        {activeTab === 'rentals' && (
          <div className="glass-card p-8 text-center text-muted-foreground">
            <Clock className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p>No active rentals</p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {[
              { name: 'Sneha P.', rating: 5, text: 'Great condition textbook! Returned on time.' },
              { name: 'Rahul V.', rating: 4, text: 'Good calculator, worked perfectly for my exams.' },
            ].map((review, i) => (
              <div key={i} className="glass-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-foreground text-sm">{review.name}</span>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
