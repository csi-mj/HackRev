import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, GraduationCap, Layers, Lightbulb, Trophy } from "lucide-react";
import Squares from "@/components/Squares";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Register = () => {
  // State for problem statements dialog
  const [selectedTrack, setSelectedTrack] = useState<typeof tracks[0] | null>(null);
  const tracks = [
    {
      image: "/SmartEd.png",
      title: "Smart Education",
      description: "Innovate educational technology to transform learning experiences.",
      link: "/Register/education",
      color: "from-red-500 to-pink-500",
      problemStatements: [
        "Gamified Environmental Education Platform for Schools and Colleges",
        "Smart Curriculum Activity & Attendance App",
        "Automated Student Attendance Monitoring and Analytics System for Colleges",
        "Digital Platform for Centralized Alumni Data Management and Engagement",
        "Centralised Digital Platform for Comprehensive student activity record in HEIs",
        "Smart Classroom & Timetable Scheduler"
      ]
    },
    {
      image: "/UrbanTech.png",
      title: "Urban Tech and Smart Cities",
      description: "Develop innovative solutions for smart cities and urban challenges.",
      link: "/Register/urban-tech",
      color: "from-blue-500 to-cyan-500",
      problemStatements: [
        "Real-Time Public Transport Tracking for Small Cities",
        "Smart Traffic Management System for Urban Congestion",
        "Crowdsourced Civic Issue Reporting and Resolution System",
        "AI-Based Rockfall Prediction and Alert System for Open-Pit Mines",
        "Recovery and Reuse of Fresh Water Resources",
        "Forecasting materials demand with machine learning for supply chain planning, procurement, and inventory optimization"
      ]
    },
    
    {
      image: "/Agriculture.png",
      title: "Agriculture and FoodTech",
      description: "Build technology solutions for sustainable and smart farming.",
      link: "/Register/agro-tech",
      color: "from-green-500 to-emerald-500",
      problemStatements: [
        "Image-based Breed Recognition for Cattle and Buffaloes of India",
        "Smart Crop Advisory System for Small and Marginal Farmers",
        "AI-Based Crop Recommendation System for Farmers",
        "AI-Powered Crop Yield Prediction and Optimization",
        "AI-Powered Monitoring of Crop Health, Soil Condition, and Pest Risks Using Sensor and Imaging Data",
        "Enhancing Farmer Productivity through Innovative Technology Solutions"
      ]
    },
    {
      image: "/Hardware.png",
      title: "Open Innovation (Hardware)",
      description: "Create cutting-edge hardware prototypes and IoT solutions.",
      link: "/Register/hardware",
      color: "from-purple-500 to-violet-500",
      problemStatements: []
    },
    
    {
      image: "/Terraview.png",
      title: "Terraview",
      description: "Data Analytics track for first-year students using Terraview software.",
      link: "/Terraview",
      color: "from-indigo-500 to-purple-500",
      problemStatements: [],
      isSpecial: true,
      specialLabel: "Exclusive for 1st Year Students"
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

      {/* All content with relative positioning */}
      <div className="relative z-10 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Layers className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-secondary" />
              <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
               <TextGenerateEffect words="Choose Your Track" />
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
              Pick a theme below to begin your registration journey
            </p>
          </motion.div>

          {/* Main 4 Tracks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {tracks.slice(0, 4).map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10 flex-1">
                    <div className="mb-4 sm:mb-6">
                      {track.image ? (
                        <div className="mb-4">
                          <img 
                            src={track.image} 
                            alt={track.title} 
                            className="h-20 sm:h-24 md:h-28 w-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" 
                          />
                        </div>
                      ) : null}
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-3 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                        {track.title}
                      </h2>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {track.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col gap-3 mt-auto">
                    {track.problemStatements.length > 0 && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-[1.01]"
                            onClick={() => setSelectedTrack(track)}
                          >
                            <Lightbulb className="w-4 h-4 mr-2" />
                            View Problem Statements
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-sm sm:max-w-2xl md:max-w-4xl max-h-[85vh] overflow-y-auto bg-black/30 border-secondary/20 backdrop-blur-xl scroll-hide">
                          <DialogHeader className="pb-4 border-b border-border/50">
                            <div className="flex items-center justify-center gap-3 mb-2">
                              <Lightbulb className="w-6 h-6 text-secondary" />
                              <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-center bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                                {track.title}
                              </DialogTitle>
                            </div>
                            <p className="text-sm text-muted-foreground text-center">Problem Statements</p>
                          </DialogHeader>
                          <div className="space-y-3 sm:space-y-4 mt-6">
                            {track.problemStatements.map((statement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0.3, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                              >
                                <Card className="p-4 sm:p-5 border border-border/50 hover:border-secondary/40 transition-all duration-300 glass-effect group hover:scale-[1.01]">
                                  <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-secondary to-secondary text-secondary-foreground flex items-center justify-center text-sm sm:text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                      {idx + 1}
                                    </div>
                                    <p className="text-foreground/90 leading-relaxed text-sm sm:text-base pt-1">
                                      {statement}
                                    </p>
                                  </div>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    <Button
                      size="sm"
                      disabled
                      className="w-full bg-muted text-muted-foreground cursor-not-allowed"
                    >
                      Registrations Closed
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Special Terraview Track - Centered */}
          <div className="flex justify-center mb-12 sm:mb-16">
            {tracks.slice(4).map((track, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md"
              >
                <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10 flex-1">
                    <div className="mb-4 sm:mb-6">
                      {track.image ? (
                        <div className="mb-4">
                          <img 
                            src={track.image} 
                            alt={track.title} 
                            className="h-20 sm:h-24 md:h-28 w-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" 
                          />
                        </div>
                      ) : null}
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-3 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                        {track.title}
                      </h2>
                      {track.isSpecial && track.specialLabel && (
                        <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-gradient-to-r from-yellow-500/15 to-orange-500/15 text-yellow-600 dark:text-yellow-400 text-xs sm:text-sm font-semibold mb-3 border border-yellow-500/30">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          {track.specialLabel}
                        </div>
                      )}
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {track.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 mt-auto">
                    <Link to={track.link} className="w-full">
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-secondary-foreground transition-all duration-300 text-xs sm:text-sm font-semibold hover:scale-[1.01]"
                      >
                        <Trophy className="w-4 h-4 mr-2" />
                        Learn More
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
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="glass-effect p-6 sm:p-8 md:p-10 text-center border border-border/50 hover:border-secondary/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                  Hackathon Themes
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
                  Each theme offers unique opportunities to showcase your skills and build innovative solutions. 
                  Stay tuned for future events!
                </p>
                <a href="/#about">
                  <Button variant="outline" className="border-border/50 hover:border-secondary/50 hover:bg-secondary/10 hover:text-secondary transition-all duration-300">
                    Learn More About Hack Revolution
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
