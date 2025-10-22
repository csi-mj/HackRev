import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Trophy, 
  GraduationCap,
  Database,
  FileText,
  ArrowLeft,
  Phone,
  Mail,
  Building2
} from "lucide-react";
import Squares from "@/components/Squares";
import terraviewPoster from "@/assets/Terraview.jpeg";
import csiLogo from "@/assets/csi_logo.png";
import ecellLogo from "@/assets/ecell_logo.png";
import acesLogo from "@/assets/aces.png";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Terraview = () => {
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Link to="/#themes" className="inline-flex items-center text-secondary hover:text-secondary/80 transition-all duration-300 mb-6 hover:scale-105">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Hackathon Themes
            </Link>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
               <TextGenerateEffect words="Terraview Track" />
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
              <div className="bg-black/70 text-yellow-500 border-yellow-500/30 rounded-full glass-effect dark:text-yellow-400 text-sm sm:text-base md:text-lg px-3 py-1">
                Exclusive for 1st Year Students
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Data Analytics track for first-year students using Terraview software
            </p>
          </motion.div>

          {/* Poster Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 sm:mb-16"
          >
            <Card className="glass-effect p-6 sm:p-8 md:p-10 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 text-center">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Event Poster</h2>
                <div className="flex justify-center">
                  <img 
                    src={terraviewPoster} 
                    alt="Terraview Track Poster" 
                    className="max-w-full h-auto rounded-xl shadow-lg border border-border/50 group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Event Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl font-heading font-bold mb-6 flex items-center bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-secondary" />
                    Event Details
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-secondary mt-0.5" />
                      <div><span className="font-semibold text-foreground">Date:</span> <span className="text-muted-foreground">Saturday, November 8, 2025</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-secondary mt-0.5" />
                      <div><span className="font-semibold text-foreground">Time:</span> <span className="text-muted-foreground">10:30 AM – 1:00 PM</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                      <div><span className="font-semibold text-foreground">Venue:</span> <span className="text-muted-foreground">Seminar Hall, Block 4, Muffakham Jah College of Engineering and Technology</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-secondary mt-0.5" />
                      <div><span className="font-semibold text-foreground">Organized By:</span> <span className="text-muted-foreground">E-Cell & CSI</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Trophy className="h-5 w-5 text-secondary mt-0.5" />
                      <div><span className="font-semibold text-foreground">Prize Pool:</span> <span className="text-secondary font-bold">₹30,000</span></div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl font-heading font-bold mb-6 flex items-center bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                    <Database className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-secondary" />
                    Track Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                    The Data Analytics Using Terraview track introduces first-year students to the exciting field of data analysis using the Terraview software. This beginner-friendly track is tailored for participants with minimal coding knowledge, offering them an opportunity to explore the fundamentals of data processing, analysis, and visualization.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-base sm:text-lg text-foreground">Participants will:</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        Use datasets provided to create problem statements
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        Perform analysis to uncover insights using Terraview
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        Generate compelling visualizations in OWBX format
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        Present work through PPTs, abstracts, and OWBX files
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="glass-effect p-6 sm:p-8 md:p-10 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden mb-12 sm:mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-6 flex items-center bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-secondary" />
                  Track Guidelines
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-3 text-foreground">Eligibility:</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Only first-year students are allowed to participate in this track.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-3 text-foreground">Team Composition:</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">This track is individual-based; no teams are allowed.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-3 text-foreground">Evaluation Criteria:</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                      <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Innovation</li>
                      <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Insightfulness</li>
                      <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Practical Relevance</li>
                      <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Technical Execution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Registration Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="glass-effect p-6 sm:p-8 md:p-10 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden mb-12 sm:mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 text-center">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Registration Notice</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Registrations will begin after <span className="font-semibold text-secondary">25th October 2025</span>
                </p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Stay tuned for more updates on registration opening!
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="glass-effect p-6 sm:p-8 md:p-10 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden mb-12 sm:mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 text-center">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Contact Us</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-secondary" />
                    <a href="mailto:hackrevolution@mjcollege.ac.in" className="text-secondary hover:text-secondary/80 transition-colors text-sm sm:text-base">
                      hackrevolution@mjcollege.ac.in
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <a href="tel:+919908784538" className="text-secondary hover:text-secondary/80 transition-colors text-sm sm:text-base">
                      +91 99087 84538
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <a href="tel:+917780227803" className="text-secondary hover:text-secondary/80 transition-colors text-sm sm:text-base">
                      +91 77802 27803
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>


          {/* Organized By */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="glass-effect p-6 sm:p-8 md:p-10 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 text-center">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Organized By</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="group/logo"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full group-hover/logo:bg-secondary/30 transition-all duration-300" />
                      <img src={csiLogo} alt="CSI" className="relative h-24 sm:h-32 md:h-40 w-auto max-w-full object-contain group-hover/logo:scale-105 transition-transform duration-300" />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="group/logo"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full group-hover/logo:bg-secondary/30 transition-all duration-300" />
                      <img src={ecellLogo} alt="E‑Cell" className="relative h-24 sm:h-32 md:h-40 w-auto max-w-full object-contain group-hover/logo:scale-105 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <span className="text-base sm:text-lg md:text-xl">Powered by</span>
                  <img
                    src={acesLogo}
                    alt="ACES"
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terraview;
