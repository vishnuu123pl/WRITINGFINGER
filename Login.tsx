import { useState } from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-foreground font-bold text-lg">F</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">{isSignup ? 'Create Account' : 'Welcome Back'}</h1>
              <p className="text-muted-foreground text-sm mt-2">
                {isSignup ? 'Join your campus marketplace' : 'Sign in to continue'}
              </p>
            </div>

            <div className="space-y-4">
              {isSignup && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Arjun Mehta"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">College Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="you@college.edu"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
              </div>

              <button className="w-full py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-orange-light transition-colors mt-2">
                {isSignup ? 'Create Account' : 'Sign In'}
              </button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button onClick={() => setIsSignup(!isSignup)} className="text-accent hover:underline font-medium">
                {isSignup ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
