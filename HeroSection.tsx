import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-illustration.png';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase">
              Campus Marketplace
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-foreground">Unlock Campus</span>
              <br />
              <span className="text-gradient-hero">Resources. Share</span>
              <br />
              <span className="text-foreground">& Thrive.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Borrow, rent, sell, or give away books, gadgets, and dorm essentials within your campus community.
            </p>

            {/* Search */}
            <div className="flex items-center gap-2 max-w-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search books, calculators, electronics..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
              <button className="px-6 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-orange-light transition-colors shrink-0">
                Search
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
              <span><strong className="text-foreground">2,400+</strong> Items</span>
              <span><strong className="text-foreground">850+</strong> Students</span>
              <span><strong className="text-foreground">15+</strong> Colleges</span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <img
              src={heroImg}
              alt="Campus marketplace illustration"
              className="w-full max-w-md rounded-2xl animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
