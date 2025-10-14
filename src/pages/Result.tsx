import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Target, Wallet, Trophy, Clock, Users, FileText, DollarSign, IndianRupee } from "lucide-react";
import Squares from "@/components/Squares";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Result = () => {
  const tracks = [
    {
      icon: Building2,
      title: "Healthcare Innovation",
      link: "/result/healthcare",
      status: "Results Available",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Building2,
      title: "Open Innovation Hub",
      link: "/result/oih",
      status: "Results Available",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Open Innovation Space",
      link: "/result/ois",
      status: "Results Available",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Wallet,
      title: "Wealth Management",
      link: "/result/wm",
      status: "Results Available",
      color: "from-purple-500 to-violet-500",
    },
  ];

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
      <div className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-secondary to-secondary flex items-center justify-center shadow-[0_0_40px_rgba(var(--secondary-rgb),0.4)]">
                  <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-foreground" />
                </div>
                <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-secondary to-secondary blur-xl opacity-50 animate-pulse" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
              <TextGenerateEffect words="Hackathon Results" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Congratulations to all participants! View the winners and outstanding projects from each track.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden backdrop-blur-xl hover:scale-[1.02] h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                        <track.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-heading font-bold mb-2">{track.title}</h2>
                      <div className="flex items-center space-x-2 text-secondary">
                        <Clock className="h-4 w-4" />
                        <span className="text-xs sm:text-sm font-heading">{track.status}</span>
                      </div>
                    </div>
                    
                    <Link to={track.link}>
                      <Button className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-secondary-foreground transition-all duration-300 hover:scale-105 transform shadow-lg">
                        View Results
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect p-6 sm:p-8 text-center border border-border/50 hover:border-secondary/40 transition-colors duration-300 backdrop-blur-xl mb-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Overall Statistics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/10">
                      <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="text-3xl sm:text-4xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent mb-2">487</div>
                      <div className="text-sm sm:text-base text-muted-foreground">Total Participants</div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/10">
                      <FileText className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="text-3xl sm:text-4xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent mb-2">124</div>
                      <div className="text-sm sm:text-base text-muted-foreground">Projects Submitted</div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/10">
                      <IndianRupee className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="text-3xl sm:text-4xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent mb-2">₹300K</div>
                      <div className="text-sm sm:text-base text-muted-foreground">Total Prize Pool</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect p-6 sm:p-8 md:p-10 text-center border border-secondary/20 backdrop-blur-xl hover:border-secondary/40 transition-colors duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">Thank You!</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're grateful to all participants, mentors, judges, and sponsors who made CodeSurge 2024 an incredible success. 
                  Stay tuned for our next event!
                </p>
                <Link to="/">
                  <Button variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 px-6 py-5">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Result;
