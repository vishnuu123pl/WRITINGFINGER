import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import LatestListings from '@/components/LatestListings';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <LatestListings />
      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
            <h2 className="text-3xl font-bold text-foreground mb-4 relative z-10">
              Have something to share?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto relative z-10">
              List your unused books, gadgets, and essentials. Help fellow students save money.
            </p>
            <a
              href="/post"
              className="inline-block px-8 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-orange-light transition-colors relative z-10"
            >
              Post an Item
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
