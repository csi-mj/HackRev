import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import mjLogo from "@/assets/mj.png";
import iicLogo from "@/assets/iic_logo.png";
import ouLogo from "@/assets/ou_logo.png";
import naacLogo from "@/assets/naac logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/#themes", label: "Tracks" },
    { path: "/#timeline", label: "Timeline" },
    { path: "/#rules", label: "Rules" },
    { path: "/#history", label: "History" },
    { path: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border">
      <div className="w-full px-4">
        <div className="flex items-center h-28">
          <Link to="/#home" className="flex items-center mr-auto">
            <div className="flex items-center space-x-3">
              <img src={mjLogo} alt="MJCET" className="h-16 w-auto object-contain" />
              <img src={iicLogo} alt="IIC" className="h-10 w-auto object-contain" />
              <img src={ouLogo} alt="Osmania University" className="h-10 w-auto object-contain" />
              <img src={naacLogo} alt="NAAC A+" className="h-10 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            {navLinks.map((link) => (
              <a key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  className="text-lg px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
                >
                  {link.label}
                </Button>
              </a>
            ))}
            <Link to="/Register">
              <Button
                className="ml-2 text-lg px-8 py-3 gradient-primary hover:opacity-90 transition-smooth shadow-glow"
              >
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-up">
            {navLinks.map((link) => (
              <a key={link.path} href={link.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {link.label}
                </Button>
              </a>
            ))}
            <Link to="/Register" onClick={() => setIsOpen(false)}>
              <Button
                className="w-full gradient-primary hover:opacity-90 transition-smooth shadow-glow"
              >
                Register Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
