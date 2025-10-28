import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mjLogo from "@/assets/mj.png";
import iicLogo from "@/assets/iic_logo.png";
import ouLogo from "@/assets/ou_logo.png";
import naacLogo from "@/assets/naac logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ["home", "themes", "timeline", "rules", "history", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`/#${section}`);
            break;
          }
        }
      }

      // If at top, set home as active
      if (window.scrollY < 100) {
        setActiveSection("/");
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" && activeSection === "/";
    }
    return activeSection === path || location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/#themes", label: "Tracks" },
    { path: "/#timeline", label: "Timeline" },
    { path: "/#rules", label: "Rules" },
    { path: "/#history", label: "History" },
    { path: "/#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/98 backdrop-blur-2xl shadow-sm border-b border-border/60"
          : "bg-background/90 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-24">
          
          {/* Logo Section */}
          <Link to="/#home">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4"
            >
              <img
                src={mjLogo}
                alt="MJCET"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
              <div className="h-8 w-px bg-border/90 hidden sm:block" />
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <img
                  src={iicLogo}
                  alt="IIC"
                  className="h-6 sm:h-7 lg:h-12 w-auto object-contain opacity-90"
                />
                <img
                  src={ouLogo}
                  alt="Osmania University"
                  className="h-6 sm:h-7 lg:h-12 w-auto object-contain opacity-90"
                />
                <img
                  src={naacLogo}
                  alt="NAAC A+"
                  className="h-6 sm:h-7 lg:h-12 w-auto object-contain opacity-90"
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <button
                  onClick={() => {
                    if (link.path === "/") {
                      // Navigate to home page and scroll to top
                      if (location.pathname !== "/") {
                        window.location.href = "/";
                      } else {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    } else {
                      const targetId = link.path.replace("/#", "");
                      console.log("Desktop - Looking for element with ID:", targetId);
                      const element = document.getElementById(targetId);
                      console.log("Desktop - Found element:", element);
                      if (element) {
                        // Element exists on current page, scroll to it
                        const navbarHeight = 80;
                        const elementPosition = element.offsetTop - navbarHeight;
                        console.log("Desktop - Scrolling to position:", elementPosition);
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth"
                        });
                      } else {
                        // Element doesn't exist, navigate to home page with hash
                        console.log("Desktop - Element not found, navigating to home page");
                        window.location.href = link.path;
                      }
                    }
                  }}
                  className={`relative px-3 xl:px-4 py-1.5 text-lg font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-secondary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
            
            <div className="ml-3">
              <motion.div
                whileHover={{ scale: 1.0, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  size="sm"
                  disabled
                  className="px-5 py-1.5 text-sm font-medium bg-muted text-muted-foreground cursor-not-allowed"
                >
                  Registrations Closed
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 text-secondary" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 text-secondary" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-border/40"
            >
              <div className="py-3 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        // Small delay to ensure menu closes before scrolling
                        setTimeout(() => {
                          if (link.path === "/") {
                            // Navigate to home page and scroll to top
                            if (location.pathname !== "/") {
                              window.location.href = "/";
                            } else {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          } else {
                            const targetId = link.path.replace("/#", "");
                            console.log("Mobile - Looking for element with ID:", targetId);
                            const element = document.getElementById(targetId);
                            console.log("Mobile - Found element:", element);
                            if (element) {
                              // Element exists on current page, scroll to it
                              const navbarHeight = 80;
                              const elementPosition = element.offsetTop - navbarHeight;
                              console.log("Mobile - Scrolling to position:", elementPosition);
                              window.scrollTo({
                                top: elementPosition,
                                behavior: "smooth"
                              });
                            } else {
                              // Element doesn't exist, navigate to home page with hash
                              console.log("Mobile - Element not found, navigating to home page");
                              window.location.href = link.path;
                            }
                          }
                        }, 100);
                      }}
                      className={`w-full justify-start px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                        isActive(link.path)
                          ? "text-secondary bg-secondary/10 font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: navLinks.length * 0.05,
                    ease: "easeOut",
                  }}
                  className="pt-2"
                >
                  <Button
                    size="sm"
                    disabled
                    className="w-full py-2 text-sm font-medium bg-muted text-muted-foreground cursor-not-allowed"
                  >
                    Registrations Closed
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;