import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Code2, Heart, Building2, Target, ArrowRight, Database, GraduationCap } from "lucide-react";

const Register = () => {
  // State for problem statements dialog
  const [selectedTrack, setSelectedTrack] = useState<typeof tracks[0] | null>(null);
  const tracks = [
    {
      icon: Target,
      title: "Smart Education",
      description: "Innovate educational technology to transform learning experiences.",
      link: "/Register/education",
      color: "from-red-500 to-pink-500",
      problemStatements: [
        "Gamified Environmental Education Platform for Schools and Colleges",
        "Smart Curriculum Activity & Attendance App",
        "Automated Student Attendance Monitoring and Analytics System for Colleges",
        "Digital Platform for Centralized Alumni Data Management and Engagement",
        "Centralised Digital Platform for Comprehensive student activity record in HEIs"
      ]
    },
    {
      icon: Code2,
      title: "Urban Tech and Smart Cities",
      description: "Develop innovative solutions for smart cities and urban challenges.",
      link: "/Register/urban-tech",
      color: "from-blue-500 to-cyan-500",
      problemStatements: [
        "Development of a mobile application for secure water level data collection from rivers using image processing",
        "AI-Driven Pollution Source Identification, Forecasting & Policy Dashboard for Delhi-NCR",
        "Centralized Vulnerability Detection and Intelligent Query Interface",
        "Government offices productivity and engagement platform",
        "Automated Comprehensive Technology Intelligence and Forecasting Platform"
      ]
    },
    
    {
      icon: Heart,
      title: "Agriculture and FoodTech",
      description: "Build technology solutions for sustainable and smart farming.",
      link: "/Register/agro-tech",
      color: "from-green-500 to-emerald-500",
      problemStatements: [
        "Smart Crop Advisory System for Small and Marginal Farmers",
        "Develop a blockchain-based system for botanical traceability of Ayurvedic herbs, including geo-tagging from the point of collection (farmers/wild collectors) to the final Ayurvedic formulation label.",
        "Blockchain-Based Supply Chain Transparency for Agricultural Produce",
        "AI-Powered Personal Farming Assistant for Kerala Farmers",
        "Development of a Digital Farm Management Portal for implementing Biosecurity measures in Pig and Poultry Farms"
      ]
    },
    {
      icon: Building2,
      title: "Open Innovation (Hardware)",
      description: "Create cutting-edge hardware prototypes and IoT solutions.",
      link: "/Register/hardware",
      color: "from-purple-500 to-violet-500",
      problemStatements: []
    },
    
    {
      icon: Database,
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
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Choose Your Track
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pick a theme below to begin your registration.
          </p>
        </div>

        {/* Main 4 Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tracks.slice(0, 4).map((track, index) => (
            <Card
              key={index}
              className="glass-effect p-8 shadow-card transition-smooth hover:scale-105 hover:shadow-glow border border-border group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 transition-smooth group-hover:scale-110 shadow-glow`}>
                  <track.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-3">{track.title}</h2>
                <p className="text-muted-foreground">{track.description}</p>
              </div>
              
              <div className="flex flex-col gap-3">
                {track.problemStatements.length > 0 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-smooth"
                        onClick={() => setSelectedTrack(track)}
                      >
                        View Problem Statements
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-heading font-bold text-center mb-4">
                          {track.title} - Problem Statements
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {track.problemStatements.map((statement, idx) => (
                          <Card key={idx} className="p-4 border border-border">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                                {idx + 1}
                              </div>
                              <p className="text-muted-foreground leading-relaxed">{statement}</p>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                <Link to={track.link}>
                  <Button className="w-full gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Terraview Track - Centered */}
        <div className="flex justify-center mb-16">
          {tracks.slice(4).map((track, index) => (
            <Card
              key={index + 4}
              className="glass-effect p-8 shadow-card transition-smooth hover:scale-105 hover:shadow-glow border border-border group animate-slide-up max-w-md"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 transition-smooth group-hover:scale-110 shadow-glow`}>
                  <track.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-3">{track.title}</h2>
                {track.isSpecial && track.specialLabel && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 dark:text-yellow-400 text-sm font-semibold mb-3 border border-yellow-500/30">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    {track.specialLabel}
                  </div>
                )}
                <p className="text-muted-foreground">{track.description}</p>
              </div>
              
              <div className="flex flex-col gap-3">
                <Link to={track.link}>
                  <Button className="w-full gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <Card className="glass-effect p-8 text-center shadow-card border border-border">
          <h3 className="text-2xl font-heading font-bold mb-4">Hackathon Themes</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Each theme offers unique opportunities to showcase your skills and build innovative solutions. 
            Stay tuned for future events!
          </p>
          <a href="/#about">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
              Learn More About Hack Revolution
            </Button>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Register;
