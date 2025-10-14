import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, Home, ArrowLeft } from "lucide-react";
import Squares from "@/components/Squares";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

type LocationState = {
  trackTitle?: string;
};

const RegistrationSuccess = () => {
  const location = useLocation();
  const state = (location.state || {}) as LocationState;
  const params = new URLSearchParams(location.search);
  const trackFromQuery = params.get("t") || undefined;
  const trackTitle = state.trackTitle || trackFromQuery || "Selected";

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
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20">
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
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-secondary to-secondary flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-foreground" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-secondary to-secondary blur-xl opacity-50 animate-pulse" />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-4 bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent"
                >

                  <TextGenerateEffect words="Registration Complete!" />
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
                >
                  Your registration for{" "}
                  <span className="font-semibold text-foreground bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                    {trackTitle}
                  </span>{" "}
                  has been {" "}
                   <span className="font-semibold text-foreground bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                    successfully 
                  </span>{" "}
                  submitted.
                </motion.p>

                {/* Divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary mx-auto mb-8 rounded-full" />

                {/* Helpdesk Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-10"
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                      Helpdesk
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    For further queries, join our WhatsApp group.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/L4b7RjQfDjzBxRJNFSmY4y?mode=ems_wa_t"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-secondary-foreground transition-all duration-300 hover:scale-105 transform shadow-lg px-6 py-6 text-base sm:text-lg font-semibold">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Open WhatsApp Helpdesk
                    </Button>
                  </a>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
                >
                  <Link to="/Register" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 px-6 py-5 text-sm sm:text-base font-medium"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Tracks
                    </Button>
                  </Link>
                  <a href="/#home" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-border/50 hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300 hover:scale-105 px-6 py-5 text-sm sm:text-base font-medium"
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Return Home
                    </Button>
                  </a>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;


