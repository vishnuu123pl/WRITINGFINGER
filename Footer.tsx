import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold text-foreground">Flux<span className="text-accent">era</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Borrow Instead of Buy. The campus marketplace for students who share.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/browse" className="hover:text-accent transition-colors">Browse Items</Link></li>
              <li><Link to="/post" className="hover:text-accent transition-colors">Post an Item</Link></li>
              <li><Link to="/profile" className="hover:text-accent transition-colors">My Profile</Link></li>
              <li><Link to="/chat" className="hover:text-accent transition-colors">Messages</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/browse?cat=books" className="hover:text-accent transition-colors">Books</Link></li>
              <li><Link to="/browse?cat=calculators" className="hover:text-accent transition-colors">Calculators</Link></li>
              <li><Link to="/browse?cat=electronics" className="hover:text-accent transition-colors">Electronics</Link></li>
              <li><Link to="/browse?cat=dorm" className="hover:text-accent transition-colors">Dorm Essentials</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@fluxera.com</li>
              <li>Campus Help Desk</li>
              <li className="pt-2">
                <Link to="#" className="hover:text-accent transition-colors">Terms & Privacy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2026 Fluxera. Built for students, by students.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
