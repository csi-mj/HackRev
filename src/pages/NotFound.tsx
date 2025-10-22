import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Squares from "@/components/Squares";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative">
      {/* Squares Background - Full Page */}
      <div className="fixed inset-0 z-0 bg-black">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#333"
          hoverFillColor="#1a1a1a"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.15),transparent_100%),linear-gradient(to_bottom,rgba(0,0,0,0.02),rgba(0,0,0,0.5))]" />
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-0 py-16">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="glass-effect p-8 sm:p-10 md:p-12 text-center border border-secondary/20 backdrop-blur-xl hover:border-secondary/40 transition-colors duration-300 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-50 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Error Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                      <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full opacity-50 animate-pulse" />
                  </div>
                </motion.div>

                {/* 404 Text */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-4 bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent"
                >
                  404
                </motion.h1>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4"
                >
                  Oops! Page Not Found
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md mx-auto"
                >
                  The page you're looking for doesn't exist or has been moved. Let's get you back on track!
                </motion.p>

                {/* Divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary mx-auto mb-6 rounded-full" />

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link to="/">
                    <Button className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-secondary-foreground transition-all duration-300 hover:scale-105 transform shadow-lg px-8 py-6 text-base sm:text-lg font-semibold">
                      <Home className="w-5 h-5 mr-2" />
                      Return to Home
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
