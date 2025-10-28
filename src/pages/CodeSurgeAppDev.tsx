import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Code2, 
  Lightbulb,
  Award,
  Clock,
  CheckCircle
} from "lucide-react";
import Squares from "@/components/Squares";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const CodeSurgeAppDev = () => {
  const timeline = [
    { time: "Day 1 - 9:00 AM", event: "Registration & Check-in", icon: Users },
    { time: "Day 1 - 10:00 AM", event: "Opening Ceremony & Track Briefing", icon: Lightbulb },
    { time: "Day 1 - 11:00 AM", event: "Hacking Begins!", icon: Code2 },
    { time: "Day 2 - 12:00 PM", event: "Mentor Sessions & Workshops", icon: Users },
    { time: "Day 3 - 10:00 AM", event: "Submission Deadline", icon: Clock },
    { time: "Day 3 - 2:00 PM", event: "Project Presentations", icon: Award },
    { time: "Day 3 - 5:00 PM", event: "Awards Ceremony", icon: Trophy },
  ];

  const prizes = [
    { place: "1st Place", amount: "₹20,000", perks: "Mentorship + Funding Opportunity" },
    { place: "2nd Place", amount: "₹15,000", perks: "Mentorship Program" },
    { place: "3rd Place", amount: "₹10,000", perks: "Certificate + Swag" },
    { place: "Track Winners", amount: "₹5,000 each", perks: "Certificate + Recognition" },
  ];

  const rules = [
    "Teams can have 1-4 members",
    "All code must be written during the hackathon",
    "Open source libraries and APIs are allowed",
    "Projects must align with chosen track theme",
    "One project submission per team",
    "All team members must be present for final presentation",
    "Projects will be judged on innovation, technical complexity, design, and impact",
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
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
              <TextGenerateEffect words="CodeSurge 2024" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              A 48-hour innovation marathon where ideas transform into reality. Join us for an unforgettable experience of learning, building, and networking.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="h-5 w-5 text-secondary" />
                <span className="font-heading">March 15-17, 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="font-heading">Tech Innovation Center, Downtown</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="h-5 w-5 text-secondary" />
                <span className="font-heading">500+ Participants</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" disabled className="bg-muted text-muted-foreground cursor-not-allowed text-lg px-8 py-6">
                Registrations Closed
              </Button>
            </motion.div>
          </motion.div>

          {/* Event Timeline */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-12 bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                Event Timeline
              </h2>
            </motion.div>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-effect p-6 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden backdrop-blur-xl hover:scale-[1.01]">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-heading font-semibold text-secondary">{item.time}</div>
                        <div className="text-base sm:text-lg">{item.event}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Prizes */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-12 bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                Prizes & Awards
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {prizes.map((prize, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-effect p-6 text-center border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden backdrop-blur-xl hover:scale-[1.03] h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/20 inline-block group-hover:scale-110 transition-transform duration-300">
                        <Trophy className="h-10 w-10 sm:h-12 sm:w-12 text-secondary" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">{prize.place}</h3>
                      <div className="text-2xl sm:text-3xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent mb-2">{prize.amount}</div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{prize.perks}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-muted-foreground mt-8 text-base sm:text-lg"
            >
              Total prize pool: <span className="bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent font-heading font-bold">₹50,000+</span>
            </motion.p>
          </section>

          {/* Rules */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-12 bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                Rules & Guidelines
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-colors duration-300 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <ul className="space-y-4 relative z-10">
                  {rules.map((rule, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ margin: "-100px" }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base md:text-lg">{rule}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect p-8 sm:p-10 md:p-12 text-center border border-secondary/20 backdrop-blur-xl hover:border-secondary/40 transition-colors duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                  Ready to Join?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Don't miss this opportunity to showcase your skills, learn from the best, and win amazing prizes!
                </p>
                <Button size="lg" disabled className="bg-muted text-muted-foreground cursor-not-allowed text-base sm:text-lg px-10 sm:px-12 py-6">
                  Registrations Closed
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CodeSurgeAppDev;
